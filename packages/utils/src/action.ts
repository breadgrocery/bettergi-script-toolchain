/**
 * 等待直到条件满足或超时
 * @param condition 等待的条件判断函数，返回 true 表示条件满足
 * @param timeout 超时时间（毫秒），默认 5000 毫秒
 * @param interval 等待间隔（毫秒），默认 200 毫秒
 * @param action 每次等待循环中执行的操作（可选）
 * @returns - true 在超时前条件已满足
 *          - false 在超时后条件仍未满足
 */
export const waitUntil = async (
  condition: () => boolean,
  timeout?: number,
  interval?: number,
  action?: () => void
) => {
  const deadline = Date.now() + (timeout ?? 5 * 1000);
  while (Date.now() < deadline) {
    if (condition()) return true;
    action?.();
    await sleep(interval ?? 200);
  }
  return false;
};
