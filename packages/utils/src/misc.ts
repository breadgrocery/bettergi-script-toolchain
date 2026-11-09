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
 * 计算两个字符串的 Levenshtein 编辑距离
 */
export const levenshtein = (source: string, target: string): number => {
  if (source === target) return 0;
  let sourceArr = Array.from(source);
  let targetArr = Array.from(target);
  if (sourceArr.length > targetArr.length) [sourceArr, targetArr] = [targetArr, sourceArr];
  const row = Array.from({ length: sourceArr.length + 1 }, (_, i) => i);
  for (const char of targetArr) {
    let diagonal = row[0];
    row[0]++;
    for (let j = 1; j <= sourceArr.length; j++) {
      const above = row[j];
      row[j] = Math.min(above + 1, row[j - 1] + 1, diagonal + (sourceArr[j - 1] === char ? 0 : 1));
      diagonal = above;
    }
  }
  return row[sourceArr.length];
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
