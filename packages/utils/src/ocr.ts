import { mouseScrollDownLines } from "./mouse";
import { RetryOptions, waitForAction } from "./workflow";

/** 识别对象实例 */
export type ROInstance = InstanceType<typeof RecognitionObject>;

/** 识别对象配置 */
export type ROConfig = Partial<{
  [K in keyof ROInstance as ROInstance[K] extends Function ? never : K]: ROInstance[K];
}>;

const findFirst = (ir: ImageRegion, ro: ROInstance, predicate: (candidate: Region) => boolean) => {
  const candidates = ir.findMulti(ro);
  for (let i = 0; i < candidates.count; i++) {
    if (predicate(candidates[i])) return candidates[i];
  }
  return undefined;
};

export type MatchDirection =
  | "north" /** 上半边 */
  | "north-east" /** 右上四分之一 */
  | "east" /** 右半边 */
  | "south-east" /** 右下四分之一 */
  | "south" /** 下半边 */
  | "south-west" /** 左下四分之一 */
  | "west" /** 左半边 */
  | "north-west"; /** 左上四分之一 */

const directionToBounds = (direction: MatchDirection) => {
  const x = direction.includes("east") ? genshin.width / 2 : 0;
  const y = direction.includes("south") ? genshin.height / 2 : 0;
  const w = direction === "north" || direction === "south" ? genshin.width : genshin.width / 2;
  const h = direction === "west" || direction === "east" ? genshin.height : genshin.height / 2;
  const scale = genshin.width / 1920;
  if (scale <= 1) {
    return { x, y, w, h };
  } else {
    return { x: x / scale, y: y / scale, w: w / scale, h: h / scale };
  }
};

/**
 * 在整个画面内搜索图片
 * @param path 图片路径
 * @param config 识别对象配置
 * @returns 如果找到匹配的图片区域，则返回该区域
 */
export const findImage = (path: string, config: ROConfig = {}) => {
  const ir = captureGameRegion();
  try {
    const ro = RecognitionObject.templateMatch(file.readImageMatSync(path));
    Object.assign(ro, config);
    return findFirst(ir, ro, region => region.isExist());
  } catch (err: any) {
    log.warn(`${err.message || err}`);
  } finally {
    ir.dispose();
  }
};

/**
 * 在指定区域内搜索图片
 * @param path 图片路径
 * @param x 水平方向偏移量（像素）
 * @param y 垂直方向偏移量（像素）
 * @param w 宽度
 * @param h 高度
 * @param config 识别对象配置
 * @returns 如果找到匹配的图片区域，则返回该区域
 */
export const findImageWithinBounds = (
  path: string,
  x: number,
  y: number,
  w: number,
  h: number,
  config: ROConfig = {}
) => {
  const ir = captureGameRegion();
  try {
    const ro = RecognitionObject.templateMatch(file.readImageMatSync(path), x, y, w, h);
    Object.assign(ro, config);
    return findFirst(ir, ro, region => region.isExist());
  } catch (err: any) {
    log.warn(`${err.message || err}`);
  } finally {
    ir.dispose();
  }
};

/**
 * 在指定坐标范围内搜索图片
 * @param path 图片路径
 * @param left 左边界偏移量（像素）
 * @param top 上边界偏移量（像素）
 * @param right 右边界偏移量（像素）
 * @param bottom 下边界偏移量（像素）
 * @param config 识别对象配置
 * @returns 如果找到匹配的图片区域，则返回该区域
 */
export const findImageBetweenCoordinates = (
  path: string,
  left: number,
  top: number,
  right: number,
  bottom: number,
  config: ROConfig = {}
) => {
  return findImageWithinBounds(path, left, top, right - left, bottom - top, config);
};

/**
 * 在指定方向上搜索图片
 * @param path 图片路径
 * @param direction 搜索方向
 * @param config 识别对象配置
 * @returns 如果找到匹配的图片区域，则返回该区域
 */
export const findImageInDirection = (
  path: string,
  direction: MatchDirection,
  config: ROConfig = {}
) => {
  const { x, y, w, h } = directionToBounds(direction);
  return findImageWithinBounds(path, x, y, w, h, config);
};

/** 文本搜索选项 */
export type TextMatchOptions = {
  /** 是否忽略大小写（默认: 是） */
  ignoreCase?: boolean;
  /** 是否非完全匹配（默认: 否） */
  contains?: boolean;
};

/**
 * 在整个画面内搜索文本
 * @param text 待搜索文本
 * @param options 搜索选项
 * @param config 识别对象配置
 * @returns 如果找到匹配的文本区域，则返回该区域
 */
export const findText = (text: string, options?: TextMatchOptions, config: ROConfig = {}) => {
  const { ignoreCase = true, contains = false } = options || {};
  const searchText = ignoreCase ? text.toLowerCase() : text;
  const ir = captureGameRegion();
  try {
    const ro = RecognitionObject.ocrThis;
    Object.assign(ro, config);
    return findFirst(ir, ro, region => {
      const itemText = ignoreCase ? region.text.toLowerCase() : region.text;
      const isMatch = contains ? itemText.includes(searchText) : itemText === searchText;
      return isMatch && region.isExist();
    });
  } catch (err: any) {
    log.warn(`${err.message || err}`);
  } finally {
    ir.dispose();
  }
};

/**
 * 在指定区域内搜索文本
 * @param text 待搜索文本
 * @param x 水平方向偏移量（像素）
 * @param y 垂直方向偏移量（像素）
 * @param w 宽度
 * @param h 高度
 * @param options 搜索选项
 * @param config 识别对象配置
 * @returns 如果找到匹配的文本区域，则返回该区域
 */
export const findTextWithinBounds = (
  text: string,
  x: number,
  y: number,
  w: number,
  h: number,
  options?: TextMatchOptions,
  config: ROConfig = {}
) => {
  const { ignoreCase = true, contains = false } = options || {};
  const searchText = ignoreCase ? text.toLowerCase() : text;
  const ir = captureGameRegion();
  try {
    const ro = RecognitionObject.ocr(x, y, w, h);
    Object.assign(ro, config);
    return findFirst(ir, ro, region => {
      const itemText = ignoreCase ? region.text.toLowerCase() : region.text;
      const isMatch = contains ? itemText.includes(searchText) : itemText === searchText;
      return isMatch && region.isExist();
    });
  } catch (err: any) {
    log.warn(`${err.message || err}`);
  } finally {
    ir.dispose();
  }
};

/**
 * 在指定坐标范围内搜索文本
 * @param text 待搜索文本
 * @param left 左边界偏移量（像素）
 * @param top 上边界偏移量（像素）
 * @param right 右边界偏移量（像素）
 * @param bottom 下边界偏移量（像素）
 * @param options 搜索选项
 * @param config 识别对象配置
 * @returns 如果找到匹配的文本区域，则返回该区域
 */
export const findTextBetweenCoordinates = (
  text: string,
  left: number,
  top: number,
  right: number,
  bottom: number,
  options?: TextMatchOptions,
  config: ROConfig = {}
) => {
  return findTextWithinBounds(text, left, top, right - left, bottom - top, options, config);
};

/**
 * 在指定方向上搜索文本
 * @param text 待搜索文本
 * @param direction 搜索方向
 * @param options 搜索选项
 * @param config 识别对象配置
 * @returns 如果找到匹配的文本区域，则返回该区域
 */
export const findTextInDirection = (
  text: string,
  direction: MatchDirection,
  options?: TextMatchOptions,
  config: ROConfig = {}
) => {
  const { x, y, w, h } = directionToBounds(direction);
  return findTextWithinBounds(text, x, y, w, h, options, config);
};

/** 列表视图参数 */
export type ListView = {
  x: number;
  y: number;
  w: number;
  h: number;
  /** 列表项高度 */
  lineHeight: number;
  /** 每次滚动的行数（默认: 1） */
  scrollLines?: number;
  /** 横向内边距 （默认: 10） */
  paddingX?: number;
  /** 纵向内边距 （默认: 10） */
  paddingY?: number;
};

/**
 * 在列表视图中滚动搜索文本
 * @param text 待搜索文本
 * @param listView 列表视图参数
 * @param matchOptions 搜索选项
 * @param retryOptions 重试选项
 * @param config 识别对象配置
 * @returns 如果找到匹配的文本区域，则返回该区域，否则返回 undefined
 */
export const findTextWithinListView = async (
  text: string,
  listView: ListView,
  matchOptions?: TextMatchOptions,
  retryOptions?: RetryOptions,
  config: ROConfig = {}
) => {
  const { x, y, w, h, lineHeight, scrollLines = 1, paddingX = 10, paddingY = 10 } = listView;
  const { maxAttempts = 30, retryInterval = 1000 } = retryOptions || {};
  const findTargetText = () => findTextWithinBounds(text, x, y, w, h, matchOptions, config);

  let lastTextRegion: Region | undefined;
  const isReachedBottom = () => {
    const textRegion = findFirst(captureGameRegion(), RecognitionObject.ocr(x, y, w, h), region => {
      return region.isExist() && region.text.trim().length > 0;
    });
    if (textRegion) {
      if (
        lastTextRegion?.text === textRegion.text &&
        Math.abs(textRegion.y - lastTextRegion.y) < lineHeight
      ) {
        return true;
      } else {
        lastTextRegion = textRegion;
        return false;
      }
    }
    // 异常情况: 找不到任何文本
    return true;
  };

  const isTextFoundOrBottomReached = await waitForAction(
    () => findTargetText() != undefined || isReachedBottom(),
    async () => {
      moveMouseTo(x + w - paddingX, y + paddingY); // 移动到滚动条附近
      await sleep(50);
      await mouseScrollDownLines(scrollLines, lineHeight); // 滚动指定行数
    },
    { maxAttempts, retryInterval }
  );

  return isTextFoundOrBottomReached ? findTargetText() : undefined;
};
