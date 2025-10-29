/**
 * 判断是否为主机异常
 * @param err 异常对象
 */
export const isHostException = (err: any) => {
  return typeof err === "object" && Object.prototype.hasOwnProperty.call(err, "hostException");
};

/**
 * 判断是否为任务取消异常
 * @param err 异常对象
 */
export const isTaskCanceledException = (err: any) => {
  return (
    isHostException(err) &&
    typeof err?.message === "string" &&
    err.message.includes("task was canceled")
  );
};
