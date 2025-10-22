import {
  type Action,
  type RetryOptions,
  waitForElementAppear,
  waitForElementDisappear,
  waitForRegionAppear,
  waitForRegionDisappear
} from "./workflow";

/**
 * 断言某个区域当前存在，否则抛出异常
 * @param regionProvider 返回区域的函数
 * @param message 错误信息
 */
export const assertRegionPresent = async (
  regionProvider: () => Region | null | undefined,
  message: string
) => {
  const region = regionProvider();
  if (region == null || !region.isExist()) {
    throw new Error(message);
  }
};

/**
 * 断言某个区域当前不存在，否则抛出异常
 * @param regionProvider 返回区域的函数
 * @param message 错误信息
 */
export const assertRegionAbsent = async (
  regionProvider: () => Region | null | undefined,
  message: string
) => {
  const region = regionProvider();
  if (region != null && region.isExist()) {
    throw new Error(message);
  }
};

/**
 * 断言整个画面上某个元素当前存在，否则抛出异常
 * @param recognitionObject 识别对象
 * @param message 错误信息
 */
export const assertElementPresent = async (
  recognitionObject: RecognitionObject,
  message: string
) => {
  return assertRegionPresent(() => captureGameRegion().find(recognitionObject), message);
};

/**
 * 断言整个画面上某个元素当前不存在，否则抛出异常
 * @param recognitionObject 识别对象
 * @param message 错误信息
 */
export const assertElementAbsent = async (
  recognitionObject: RecognitionObject,
  message: string
) => {
  return assertRegionAbsent(() => captureGameRegion().find(recognitionObject), message);
};

/**
 * 断言某个区域即将出现，否则抛出异常
 * @param regionProvider 返回区域的函数
 * @param message 错误信息
 * @param retryAction 每次重试时执行的操作（可选）
 * @param options 配置选项
 */
export const assertRegionAppearing = async (
  regionProvider: () => Region | null | undefined,
  message: string,
  retryAction?: Action,
  options?: RetryOptions
) => {
  const isAppeared = await waitForRegionAppear(regionProvider, retryAction, options);
  if (!isAppeared) {
    throw new Error(message);
  }
};

/**
 * 断言某个区域即将消失，否则抛出异常
 * @param regionProvider 返回区域的函数
 * @param message 错误信息
 * @param retryAction 每次重试时执行的操作（可选）
 * @param options 配置选项
 */
export const assertRegionDisappearing = async (
  regionProvider: () => Region | null | undefined,
  message: string,
  retryAction?: Action,
  options?: RetryOptions
) => {
  const isDisappeared = await waitForRegionDisappear(regionProvider, retryAction, options);
  if (!isDisappeared) {
    throw new Error(message);
  }
};

/**
 * 断言整个画面上某个元素即将出现，否则抛出异常
 * @param recognitionObject 识别对象
 * @param message 错误信息
 * @param retryAction 每次重试时执行的操作（可选）
 * @param options 配置选项
 */
export const assertElementAppearing = async (
  recognitionObject: RecognitionObject,
  message: string,
  retryAction?: Action,
  options?: RetryOptions
) => {
  const isAppeared = await waitForElementAppear(recognitionObject, retryAction, options);
  if (!isAppeared) {
    throw new Error(message);
  }
};

/**
 * 断言整个画面上某个元素即将消失，否则抛出异常
 * @param recognitionObject 识别对象
 * @param message 错误信息
 * @param retryAction 每次重试时执行的操作（可选）
 * @param options 配置选项
 */
export const assertElementDisappearing = async (
  recognitionObject: RecognitionObject,
  message: string,
  retryAction?: Action,
  options?: RetryOptions
) => {
  const isDisappeared = await waitForElementDisappear(recognitionObject, retryAction, options);
  if (!isDisappeared) {
    throw new Error(message);
  }
};
