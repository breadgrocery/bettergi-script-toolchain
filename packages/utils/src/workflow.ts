export type Action = () => Promise<void> | void;

export type RetryOptions = {
  /** 重试次数（默认: 5） */
  maxAttempts?: number;
  /** 重试间隔（毫秒，默认: 1000） */
  retryInterval?: number;
};

/** 默认最大重试次数 */
const defaultMaxAttempts = 5;

/** 默认重试间隔（毫秒） */
const defaultRetryInterval = 1000;

/**
 * 等待直到条件满足或超时，期间执行重试操作
 * @param condition 返回条件是否满足的函数
 * @param retryAction 每次重试时执行的操作（可选）
 * @param options 配置选项
 * @returns - true  条件满足
 *          - false 达到最大重试次数
 */
export const waitForAction = async (
  condition: () => boolean,
  retryAction?: Action,
  options?: RetryOptions
): Promise<boolean> => {
  const { maxAttempts = defaultMaxAttempts, retryInterval = defaultRetryInterval } = options || {};
  for (let i = 0; i < maxAttempts; i++) {
    if (condition()) return true;
    await retryAction?.();
    await sleep(retryInterval);
  }
  return false;
};

/**
 * 等待某个区域出现，期间执行重试操作
 * @param regionProvider 返回区域的函数
 * @param retryAction 每次重试时执行的操作（可选）
 * @param options 配置选项
 * @returns - true  区域出现
 *          - false 达到最大重试次数
 */
export const waitForRegionAppear = async (
  regionProvider: () => Region | null | undefined,
  retryAction?: Action,
  options?: RetryOptions
): Promise<boolean> => {
  return waitForAction(
    () => {
      const region = regionProvider();
      return region != null && region.isExist();
    },
    retryAction,
    options
  );
};

/**
 * 等待某个区域消失，期间执行重试操作
 * @param regionProvider 返回区域的函数
 * @param retryAction 每次重试时执行的操作（可选）
 * @param options 配置选项
 * @returns - true  区域消失
 *          - false 达到最大重试次数
 */
export const waitForRegionDisappear = async (
  regionProvider: () => Region | null | undefined,
  retryAction?: Action,
  options?: RetryOptions
): Promise<boolean> => {
  return waitForAction(
    () => {
      const region = regionProvider();
      return !region || !region.isExist();
    },
    retryAction,
    options
  );
};

/**
 * 等待整个画面上某个元素出现，期间执行重试操作
 * @param recognitionObject 识别对象
 * @param retryAction 每次重试时执行的操作（可选）
 * @param options 配置选项
 * @returns - true  整个画面上某个元素出现
 *          - false 达到最大重试次数
 */
export const waitForElementAppear = async (
  recognitionObject: RecognitionObject,
  retryAction?: Action,
  options?: RetryOptions
): Promise<boolean> => {
  return waitForRegionAppear(
    () => captureGameRegion().find(recognitionObject),
    retryAction,
    options
  );
};

/**
 * 等待整个画面上某个元素消失，期间执行重试操作
 * @param recognitionObject 识别对象
 * @param retryAction 每次重试时执行的操作（可选）
 * @param options 配置选项
 * @returns - true  整个画面上某个元素消失
 *          - false 达到最大重试次数
 */
export const waitForElementDisappear = async (
  recognitionObject: RecognitionObject,
  retryAction?: Action,
  options?: RetryOptions
): Promise<boolean> => {
  return waitForRegionDisappear(
    () => captureGameRegion().find(recognitionObject),
    retryAction,
    options
  );
};
