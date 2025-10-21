/** 默认超时时间（毫秒） */
const defaultTimeout = 3 * 1000;

/** 默认等待间隔（毫秒） */
const defaultInterval = 300;

/**
 * 等待直到条件满足或超时
 * @param condition 等待的条件判断函数，返回 true 表示条件满足
 * @param timeout 超时时间（毫秒），默认 3000 毫秒
 * @param interval 等待间隔（毫秒），默认 300 毫秒
 * @param action 每次等待循环中执行的操作（可选）
 * @returns - true  在超时前条件已满足
 *          - false 在超时后条件仍未满足
 */
export const waitUntil = async (
  condition: (context: Record<string, any>) => boolean,
  timeout: number = defaultTimeout,
  interval: number = defaultInterval,
  action?: (context: Record<string, any>) => Promise<void> | void
): Promise<boolean> => {
  const context = {};

  const deadline = Date.now() + timeout;
  while (Date.now() < deadline) {
    if (condition(context)) return true;

    await action?.(context);

    await sleep(interval);
  }

  return false;
};

/**
 * 断言区域存在
 * @param 获取区域的函数
 * @param message 错误信息
 * @param timeout 超时时间（毫秒），默认 3000 毫秒
 * @param interval 等待间隔（毫秒），默认 300 毫秒
 * @param action 每次等待循环中执行的操作（可选）
 * @throws 如果区域在超时时间内未找到则抛出错误
 */
export const assertExists = async (
  regionProvider: () => Region | undefined,
  message: string = "断言区域存在失败",
  timeout: number = defaultTimeout,
  interval: number = defaultInterval,
  action?: (context: Record<string, any>) => Promise<void> | void
) => {
  const ok = await waitUntil(() => regionProvider() !== undefined, timeout, interval, action);
  if (!ok) throw new Error(message);
};

/**
 * 断言区域不存在
 * @param 获取区域的函数
 * @param message 错误信息
 * @param timeout 超时时间（毫秒），默认 3000 毫秒
 * @param interval 等待间隔（毫秒），默认 300 毫秒
 * @param action 每次等待循环中执行的操作（可选）
 * @throws 如果区域在超时时间内仍然存在则抛出错误
 */
export const assertNotExists = async (
  regionProvider: () => Region | undefined,
  message: string = "断言区域不存在失败",
  timeout: number = defaultTimeout,
  interval: number = defaultInterval,
  action?: (context: Record<string, any>) => Promise<void> | void
) => {
  const ok = await waitUntil(() => regionProvider() === undefined, timeout, interval, action);
  if (!ok) throw new Error(message);
};
