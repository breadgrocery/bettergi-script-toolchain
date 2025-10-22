import { mouseScrollDownLines } from "./mouse";
import { RetryOptions, waitForAction } from "./workflow";

const findFirst = (
  ir: ImageRegion,
  ro: typeof RecognitionObject.ocrThis,
  predicate: (candidate: Region) => boolean
) => {
  const candidates = ir.findMulti(ro);
  for (let i = 0; i < candidates.count; i++) {
    if (predicate(candidates[i])) return candidates[i];
  }
  return undefined;
};

type MatchDirection =
  | "north"
  | "north-east"
  | "east"
  | "south-east"
  | "south"
  | "south-west"
  | "west"
  | "north-west";

const directionToBounds = (direction: MatchDirection) => {
  const x = direction.includes("east") ? genshin.width / 2 : 0;
  const y = direction.includes("south") ? genshin.height / 2 : 0;
  const w = direction === "north" || direction === "south" ? genshin.width : genshin.width / 2;
  const h = direction === "west" || direction === "east" ? genshin.height : genshin.height / 2;
  return { x, y, w, h };
};

/**
 * 在整个画面内搜索图片
 * @param path 图片路径
 * @returns 如果找到匹配的图片区域，则返回该区域
 */
export const findImage = (path: string) => {
  try {
    const ir = captureGameRegion();
    const ro = RecognitionObject.templateMatch(file.readImageMatSync(path));
    return findFirst(ir, ro, region => region.isExist());
  } catch (err: any) {
    err?.message && log.warn(`${err.message}`);
  }
};

/**
 * 在指定区域内搜索图片
 * @param path 图片路径
 * @param x 水平方向偏移量（像素）
 * @param y 垂直方向偏移量（像素）
 * @param w 宽度
 * @param h 高度
 * @returns 如果找到匹配的图片区域，则返回该区域
 */
export const findImageWithinBounds = (path: string, x: number, y: number, w: number, h: number) => {
  try {
    const ir = captureGameRegion();
    const ro = RecognitionObject.templateMatch(file.readImageMatSync(path), x, y, w, h);
    return findFirst(ir, ro, region => region.isExist());
  } catch (err: any) {
    err?.message && log.warn(`${err.message}`);
  }
};

/**
 * 在指定方向上搜索图片
 * @param path 图片路径
 * @param direction 搜索方向
 * @returns 如果找到匹配的图片区域，则返回该区域
 */
export const findImageInDirection = (path: string, direction: MatchDirection) => {
  const { x, y, w, h } = directionToBounds(direction);
  return findImageWithinBounds(path, x, y, w, h);
};

/** 文本搜索选项 */
type TextMatchOptions = {
  /** 是否忽略大小写（默认：是） */
  ignoreCase?: boolean;
  /** 是否非完全匹配（默认：否） */
  contains?: boolean;
};

/**
 * 在整个画面内搜索文本
 * @param text 待搜索文本
 * @param options 搜索选项
 * @returns 如果找到匹配的文本区域，则返回该区域
 */
export const findText = (text: string, options?: TextMatchOptions) => {
  const { ignoreCase = true, contains = false } = options || {};
  const searchText = ignoreCase ? text.toLowerCase() : text;
  const ir = captureGameRegion();
  const ro = RecognitionObject.ocrThis;
  return findFirst(ir, ro, region => {
    const itemText = ignoreCase ? region.text.toLowerCase() : region.text;
    const isMatch = contains ? itemText.includes(searchText) : itemText === searchText;
    return isMatch && region.isExist();
  });
};

/**
 * 在指定区域内搜索文本
 * @param text 待搜索文本
 * @param x 水平方向偏移量（像素）
 * @param y 垂直方向偏移量（像素）
 * @param w 宽度
 * @param h 高度
 * @param options 搜索选项
 * @returns 如果找到匹配的文本区域，则返回该区域
 */
export const findTextWithinBounds = (
  text: string,
  x: number,
  y: number,
  w: number,
  h: number,
  options?: TextMatchOptions
) => {
  const { ignoreCase = true, contains = false } = options || {};
  const searchText = ignoreCase ? text.toLowerCase() : text;
  const ir = captureGameRegion();
  const ro = RecognitionObject.ocr(x, y, w, h);
  return findFirst(ir, ro, region => {
    const itemText = ignoreCase ? region.text.toLowerCase() : region.text;
    const isMatch = contains ? itemText.includes(searchText) : itemText === searchText;
    return isMatch && region.isExist();
  });
};

/**
 * 在指定方向上搜索文本
 * @param text 待搜索文本
 * @param direction 搜索方向
 * @param options 搜索选项
 * @returns 如果找到匹配的文本区域，则返回该区域
 */
export const findTextInDirection = (
  text: string,
  direction: MatchDirection,
  options?: TextMatchOptions
) => {
  const { x, y, w, h } = directionToBounds(direction);
  return findTextWithinBounds(text, x, y, w, h, options);
};

/** 列表视图参数 */
export type ListView = {
  x: number;
  y: number;
  w: number;
  h: number;
  /** 垂直方向最大列表项个数 */
  maxItems: number;
  /** 列表项高度 */
  lineHeight: number;
  /** 横向内边距 */
  paddingX?: number;
  /** 纵向内边距 */
  paddingY?: number;
};

/**
 * 在列表视图中滚动搜索文本
 * @param text 待搜索文本
 * @param listView 列表视图参数
 * @param matchOptions 搜索选项
 * @param timeout 搜索超时
 * @returns 如果找到匹配的文本区域，则返回该区域，否则返回 undefined
 */
export const findTextWithinListView = async (
  text: string,
  listView: ListView,
  matchOptions?: TextMatchOptions,
  retryOptions?: RetryOptions
) => {
  const { x, y, w, h, maxItems, lineHeight, paddingX = 10, paddingY = 10 } = listView;
  const { maxAttempts = 30, retryInterval = 1000 } = retryOptions || {};
  const findTargetText = () => findTextWithinBounds(text, x, y, w, h, matchOptions);

  let firstText: Region | undefined;
  const isReachedBottom = () => {
    const list = captureGameRegion().findMulti(RecognitionObject.ocr(x, y, w, h));
    if (list.count > 0) {
      if (firstText?.text === list[0].text && Math.abs(list[0].y - firstText.y) < lineHeight) {
        return true;
      } else {
        firstText = list[0];
        return false;
      }
    }
    // 异常情况：找不到任何文本
    return true;
  };

  const isTextFoundOrBottomReached = await waitForAction(
    () => findTargetText() != undefined || isReachedBottom(),
    async () => {
      moveMouseTo(x + w - paddingX, y + paddingY); // 移动到滚动条附近
      await mouseScrollDownLines(maxItems, lineHeight); // 滚动一页
    },
    { maxAttempts, retryInterval }
  );

  return isTextFoundOrBottomReached ? findTargetText() : undefined;
};
