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
  timeout: number = 3000,
  interval: number = 300,
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
