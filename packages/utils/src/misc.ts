/**
 * 生成UUID
 * @param withDashes 是否包含连字符
 */
export const generateUUID = (withDashes = true) => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
    .replace(/[xy]/g, c => {
      const r = (Math.random() * 16) | 0;
      return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
    })
    .replace(/-/g, withDashes ? "-" : "");
};

/**
 * Fisher-Yates 洗牌算法
 * @param array 待洗牌数组
 * @returns 洗牌后的新数组
 */
export const shuffleArray = <T>(array: T[]) => {
  const shuffled = [...array];
  let i = shuffled.length;
  while (i) {
    const j = Math.floor(Math.random() * i--);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

/**
 * 深度合并多个对象
 * @param objects 多个对象
 * @returns 合并后的对象副本
 */
export const deepMerge = (...objects: any[]): any => {
  const isPlainObject = (input: any) => input?.constructor === Object;
  return objects.reduce((result, obj) => {
    return Object.entries(obj).reduce((acc, [key, value]) => {
      const recursive = isPlainObject(acc[key]) && isPlainObject(value);
      acc[key] = recursive ? deepMerge(acc[key], value) : value;
      return acc;
    }, result);
  }, {});
};

/**
 * 同步休眠执行指定时长
 * @param duration - 休眠时长（毫秒）
 */
export const sleepSync = (duration: number) => {
  duration > 0 && Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, duration);
};
