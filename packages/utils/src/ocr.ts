import { waitUntil } from "./flow";
import { mouseScrollDownLines } from "./mouse";

type ImageRegion = BetterGenshinImpact.GameTask.Model.Area.ImageRegion;
type Region = BetterGenshinImpact.GameTask.Model.Area.Region;

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

type Direction =
  | "north"
  | "north-east"
  | "east"
  | "south-east"
  | "south"
  | "south-west"
  | "west"
  | "north-west";

const directionToBounds = (direction: Direction) => {
  const x = direction.includes("east") ? genshin.width / 2 : 0;
  const y = direction.includes("south") ? genshin.height / 2 : 0;
  const w = direction === "north" || direction === "south" ? genshin.width : genshin.width / 2;
  const h = direction === "west" || direction === "east" ? genshin.height : genshin.height / 2;
  return { x, y, w, h };
};

/**
 * 在整个画面内搜索图片
 * @param path 图片路径
 * @returns 如果找到匹配的图片区域，则返回该区域，否则返回 undefined
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
 * @param x - 水平方向偏移量（像素）
 * @param y - 垂直方向偏移量（像素）
 * @param w 宽度
 * @param h 高度
 * @returns 如果找到匹配的图片区域，则返回该区域，否则返回 undefined
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
 * @returns 如果找到匹配的图片区域，则返回该区域，否则返回 undefined
 */
export const findImageInDirection = (path: string, direction: Direction) => {
  const { x, y, w, h } = directionToBounds(direction);
  return findImageWithinBounds(path, x, y, w, h);
};

/**
 * 在整个画面内搜索文本
 * @param text 待搜索文本
 * @param contains 是否包含
 * @param ignoreCase 是否忽略大小写
 * @returns 如果找到匹配的文本区域，则返回该区域，否则返回 undefined
 */
export const findText = (text: string, contains: boolean, ignoreCase: boolean) => {
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
 * @param contains 是否包含
 * @param ignoreCase 是否忽略大小写
 * @param x 水平方向偏移量（像素）
 * @param x - 水平方向偏移量（像素）
 * @param y - 垂直方向偏移量（像素）
 * @param w 宽度
 * @param h 高度
 * @returns 如果找到匹配的文本区域，则返回该区域，否则返回 undefined
 */
export const findTextWithinBounds = (
  text: string,
  contains: boolean,
  ignoreCase: boolean,
  x: number,
  y: number,
  w: number,
  h: number
) => {
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
 * @param contains 是否包含
 * @param ignoreCase 是否忽略大小写
 * @param direction 搜索方向
 * @returns 如果找到匹配的文本区域，则返回该区域，否则返回 undefined
 */
export const findTextInDirection = (
  text: string,
  contains: boolean,
  ignoreCase: boolean,
  direction: Direction
) => {
  const { x, y, w, h } = directionToBounds(direction);
  return findTextWithinBounds(text, contains, ignoreCase, x, y, w, h);
};

/**
 * 在列表视图中滚动搜索文本
 * @param text 待搜索文本
 * @param contains 是否包含
 * @param ignoreCase 是否忽略大小写
 * @param listView 列表视图参数
 * @param timeout 搜索超时
 * @returns 如果找到匹配的文本区域，则返回该区域，否则返回 undefined
 */
export const findTextWithinListView = async (
  text: string,
  contains: boolean,
  ignoreCase: boolean,
  listView: {
    x: number;
    y: number;
    w: number;
    h: number;
    maxListItems: number;
    lineHeight: number;
    padding?: number;
  },
  timeout?: number
) => {
  const { x, y, w, h, maxListItems, lineHeight, padding = 10 } = listView;
  const find = () => {
    return findTextWithinBounds(text, contains, ignoreCase, x, y, w, h);
  };

  let firstRegion: Region | undefined;
  const isBottomTouched = () => {
    const ro = RecognitionObject.ocr(x, y, w, h);
    const list = captureGameRegion().findMulti(ro);
    if (list.count > 0) {
      if (firstRegion?.text === list[0].text && Math.abs(list[0].y - firstRegion.y) < lineHeight) {
        return true;
      } else {
        firstRegion = list[0];
        return false;
      }
    } else {
      return true;
    }
  };

  const ok = await waitUntil(
    () => find() != undefined || isBottomTouched(),
    timeout ?? 30 * 1000,
    1000,
    async () => {
      moveMouseTo(x + w - padding, y + padding);
      await mouseScrollDownLines(maxListItems, lineHeight);
    }
  );

  return ok ? find() : undefined;
};
