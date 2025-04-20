import { ImageRegion } from "@bettergi/types/csharp/BetterGenshinImpact/GameTask/Model/Area/ImageRegion";
import { type Region } from "@bettergi/types/csharp/BetterGenshinImpact/GameTask/Model/Area/Region";

const findFirst = (
  im: ImageRegion,
  ro: ReturnType<typeof RecognitionObject.templateMatch>,
  predicate: (candidate: Region) => boolean
) => {
  const candidates = im.findMulti(ro);
  for (let i = 0; i < candidates.count; i++) {
    if (predicate(candidates[i])) {
      return candidates[i];
    }
  }
  return undefined;
};

/**
 * 搜索图片
 * @param path 图片路径
 * @returns 如果找到匹配的图片区域，则返回该区域，否则返回 undefined
 */
export const findImage = (path: string) => {
  try {
    const im = captureGameRegion();
    const ro = RecognitionObject.templateMatch(file.readImageMatSync(path));
    return findFirst(im, ro, region => region.isExist());
  } catch (err: any) {
    err?.message && log.warn(`${err.message}`);
  }
};

/**
 * 在指定区域内搜索图片
 * @param path 图片路径
 * @param x - 水平移动偏移量（像素）
 * @param y - 垂直移动偏移量（像素）
 * @param w 宽度
 * @param h 高度
 * @returns 如果找到匹配的图片区域，则返回该区域，否则返回 undefined
 */
export const findImageWithinBounds = (path: string, x: number, y: number, w: number, h: number) => {
  try {
    const im = captureGameRegion();
    const ro = RecognitionObject.templateMatch(file.readImageMatSync(path), x, y, w, h);
    return findFirst(im, ro, region => region.isExist());
  } catch (err: any) {
    err?.message && log.warn(`${err.message}`);
  }
};

/**
 * 搜索文本
 * @param text 待搜索文本
 * @param contains 是否包含
 * @param ignoreCase 是否忽略大小写
 * @returns 如果找到匹配的文本区域，则返回该区域，否则返回 undefined
 */
export const findText = (text: string, contains: boolean, ignoreCase: boolean) => {
  const searchText = ignoreCase ? text.toLowerCase() : text;
  const im = captureGameRegion();
  const ro = RecognitionObject.ocrThis;
  return findFirst(im, ro, region => {
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
 * @param x 水平移动偏移量（像素）
 * @param x - 水平移动偏移量（像素）
 * @param y - 垂直移动偏移量（像素）
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
  const im = captureGameRegion();
  const ro = RecognitionObject.ocr(x, y, w, h);
  return findFirst(im, ro, region => {
    const itemText = ignoreCase ? region.text.toLowerCase() : region.text;
    const isMatch = contains ? itemText.includes(searchText) : itemText === searchText;
    return isMatch && region.isExist();
  });
};
