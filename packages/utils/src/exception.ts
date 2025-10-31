/**
 * 获取错误信息字符串
 * @param err 异常对象
 * @returns 错误信息字符串
 */
export const getErrorMessage = (err: any): string => {
  if (err && "message" in err && typeof err.message === "string") return err.message;
  return err && typeof err === "object" ? JSON.stringify(err) : "Unknown error";
};

/**
 * 判断是否为主机异常
 * @param err 异常对象
 */
export const isHostException = (err: any) => {
  return err && "hostException" in err;
};

/**
 * 判断是否为任务取消异常
 * @param err 异常对象
 */
export const isTaskCanceledException = (err: any) => {
  return isHostException(err) && getErrorMessage(err).includes("task was canceled");
};
