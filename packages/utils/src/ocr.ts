import { mouseScrollDownLines } from "./mouse";
import { RetryOptions, waitForAction } from "./workflow";

/** 识别对象实例 */
export type ROInstance = InstanceType<typeof RecognitionObject>;

/** 识别对象配置 */
export type ROConfig = Partial<{
  [K in keyof ROInstance as ROInstance[K] extends Function ? never : K]: ROInstance[K];
}>;

export type ImageMat = ReturnType<typeof file.readImageMatSync>;

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
 * @param image 图片路径 或 图片Mat
 * @param config 识别对象配置
 * @returns 如果找到匹配的图片区域，则返回该区域
 */
export const findImage = (image: string | ImageMat, config: ROConfig = {}) => {
  const ir = captureGameRegion();
  try {
    const mat = typeof image === "string" ? file.readImageMatSync(image) : image;
    const ro = RecognitionObject.templateMatch(mat);
    if (Object.keys(config).length > 0) {
      Object.assign(ro, config) && ro.initTemplate();
    }
    const region = ir.find(ro);
    return region.isExist() ? region : undefined;
  } catch (err: any) {
    log.warn(`${err.message || err}`);
  } finally {
    ir.dispose();
  }
};

/**
 * 在指定区域内搜索图片
 * @param image 图片路径 或 图片Mat
 * @param x 水平方向偏移量（像素）
 * @param y 垂直方向偏移量（像素）
 * @param w 宽度
 * @param h 高度
 * @param config 识别对象配置
 * @returns 如果找到匹配的图片区域，则返回该区域
 */
export const findImageWithinBounds = (
  image: string | ImageMat,
  x: number,
  y: number,
  w: number,
  h: number,
  config: ROConfig = {}
) => {
  const ir = captureGameRegion();
  try {
    const mat = typeof image === "string" ? file.readImageMatSync(image) : image;
    const ro = RecognitionObject.templateMatch(mat, x, y, w, h);
    if (Object.keys(config).length > 0) {
      Object.assign(ro, config) && ro.initTemplate();
    }
    const region = ir.find(ro);
    return region.isExist() ? region : undefined;
  } catch (err: any) {
    log.warn(`${err.message || err}`);
  } finally {
    ir.dispose();
  }
};

/**
 * 在指定坐标范围内搜索图片
 * @param image 图片路径 或 图片Mat
 * @param left 左边界偏移量（像素）
 * @param top 上边界偏移量（像素）
 * @param right 右边界偏移量（像素）
 * @param bottom 下边界偏移量（像素）
 * @param config 识别对象配置
 * @returns 如果找到匹配的图片区域，则返回该区域
 */
export const findImageBetweenCoordinates = (
  image: string | ImageMat,
  left: number,
  top: number,
  right: number,
  bottom: number,
  config: ROConfig = {}
) => {
  return findImageWithinBounds(image, left, top, right - left, bottom - top, config);
};

/**
 * 在指定方向上搜索图片
 * @param image 图片路径 或 图片Mat
 * @param direction 搜索方向
 * @param config 识别对象配置
 * @returns 如果找到匹配的图片区域，则返回该区域
 */
export const findImageInDirection = (
  image: string | ImageMat,
  direction: MatchDirection,
  config: ROConfig = {}
) => {
  const { x, y, w, h } = directionToBounds(direction);
  return findImageWithinBounds(image, x, y, w, h, config);
};

/**
 * 在图像区域内查找第一个符合条件的识别区域
 * @param ir 图像区域
 * @param ro 识别对象
 * @param predicate 筛选条件
 * @returns 第一个符合条件的识别区域，未找到则返回 undefined
 */
const findFirstRegion = (
  ir: ImageRegion,
  ro: ROInstance,
  predicate: (candidate: Region) => boolean
) => {
  const candidates = ir.findMulti(ro);
  for (let i = 0; i < candidates.count; i++) {
    if (predicate(candidates[i])) return candidates[i];
  }
  return undefined;
};

/** 文本匹配选项 */
export type TextMatchOptions = {
  /** 是否忽略大小写（默认: 是） */
  ignoreCase?: boolean;
  /** 是否非完全匹配（默认: 否） */
  contains?: boolean;
};

/**
 * 文本匹配
 * @param text 待匹配文本
 * @param searchText 待搜索文本
 * @param options 搜索选项
 * @returns 是否匹配
 */
const textMatch = (text: string, searchText: string, options?: TextMatchOptions) => {
  const { ignoreCase = true, contains = false } = options || {};
  text = ignoreCase ? text.toLowerCase() : text;
  searchText = ignoreCase ? searchText.toLowerCase() : searchText;
  return contains ? text.includes(searchText) : text === searchText;
};

/**
 * 在整个画面内搜索文本
 * @param text 待搜索文本
 * @param options 搜索选项
 * @param config 识别对象配置
 * @returns 如果找到匹配的文本区域，则返回该区域
 */
export const findText = (text: string, options?: TextMatchOptions, config: ROConfig = {}) => {
  const ir = captureGameRegion();
  try {
    const ro = RecognitionObject.ocrThis;
    if (Object.keys(config).length > 0) {
      Object.assign(ro, config) && ro.initTemplate();
    }
    return findFirstRegion(ir, ro, region => {
      return region.isExist() && textMatch(region.text, text, options);
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
  const ir = captureGameRegion();
  try {
    const ro = RecognitionObject.ocr(x, y, w, h);
    if (Object.keys(config).length > 0) {
      Object.assign(ro, config) && ro.initTemplate();
    }
    return findFirstRegion(ir, ro, region => {
      return region.isExist() && textMatch(region.text, text, options);
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
 * 在列表视图中滚动搜索区域
 * @param condition 查找条件
 * @param listView 列表视图参数
 * @param retryOptions 重试选项
 * @param sampling 区域采样函数，通过采样区域画面变化判断列表是否触底（默认：取上半部分）
 * @returns 如果找到匹配的区域，则返回该区域，否则返回 undefined
 */
export const findWithinListView = async (
  condition: (listViewRegion: ImageRegion) => Region | undefined,
  listView: ListView,
  retryOptions?: RetryOptions,
  sampling?: (listViewRegion: ImageRegion) => ImageRegion
) => {
  const { x, y, w, h, lineHeight, scrollLines = 1, paddingX = 10, paddingY = 10 } = listView;
  const { maxAttempts = 99, retryInterval = 1000 } = retryOptions || {};
  sampling = sampling || (r => r.deriveCrop(0, 0, r.width, Math.floor(r.height / 2)));

  const captureListViewRegion = () => captureGameRegion().deriveCrop(x, y, w, h);

  let _lvr: ImageRegion | undefined;
  const isReachedBottom = () => {
    const region = sampling(captureListViewRegion());
    if (region?.isExist()) {
      if (_lvr?.find(RecognitionObject.templateMatch(region.srcMat))) {
        return true;
      } else {
        _lvr = region;
        return false;
      }
    }
    return true; // 异常情况: 无法获取列表视图截图
  };

  const isFoundOrReachedBottom = await waitForAction(
    () => condition(captureListViewRegion())?.isExist() || isReachedBottom(),
    async () => {
      moveMouseTo(x + w - paddingX, y + paddingY); // 移动到滚动条附近
      await sleep(50);
      await mouseScrollDownLines(scrollLines, lineHeight); // 滚动指定行数
    },
    { maxAttempts, retryInterval }
  );

  return isFoundOrReachedBottom ? condition(captureListViewRegion()) : undefined;
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
  config: ROConfig = {},
  sampling?: (listViewRegion: ImageRegion) => ImageRegion
) => {
  const ro = RecognitionObject.ocrThis;
  if (Object.keys(config).length > 0) {
    Object.assign(ro, config) && ro.initTemplate();
  }
  return findWithinListView(
    lvr => {
      return findFirstRegion(lvr, ro, region => {
        return region.isExist() && textMatch(region.text, text, matchOptions);
      });
    },
    listView,
    retryOptions,
    sampling
  );
};

/**
 * 在列表视图中查找图像
 * @param image 图片路径 或 图片Mat
 * @param listView 列表视图参数
 * @param config 识别对象配置
 * @param retryOptions 重试选项
 * @returns 如果找到匹配的区域，则返回该区域，否则返回 undefined
 */
export const findImageWithinListView = async (
  image: string | ImageMat,
  listView: ListView,
  config: ROConfig = {},
  retryOptions?: RetryOptions,
  sampling?: (listViewRegion: ImageRegion) => ImageRegion
) => {
  const mat = typeof image === "string" ? file.readImageMatSync(image) : image;
  const ro = RecognitionObject.templateMatch(mat);
  if (Object.keys(config).length > 0) {
    Object.assign(ro, config) && ro.initTemplate();
  }
  return findWithinListView(
    ir => {
      const region = ir.find(ro);
      return region.isExist() ? region : undefined;
    },
    listView,
    retryOptions,
    sampling
  );
};
