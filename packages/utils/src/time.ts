/**
 * 获取下一个（含当日）凌晨4点的时间
 */
export const getNextDay4AM = () => {
  const now = new Date();
  const result = new Date(now);
  result.setHours(4, 0, 0, 0);

  // 如果当前时间在4点前，则返回今天4点，否则返回明天4点
  const daysUntilNextDay = now.getHours() < 4 ? 0 : 1;

  result.setDate(now.getDate() + daysUntilNextDay);
  return result;
};

/**
 * 获取下一个（含当日）周一凌晨4点的时间
 */
export const getNextMonday4AM = () => {
  const now = new Date();
  const result = new Date(now);
  result.setHours(4, 0, 0, 0);

  // 如果当前为周一且时间在4点前，则返回今天4点，否则返回下一个周一的4点
  const currentDay = now.getDay();
  const daysUntilNextMonday = currentDay === 1 && now.getHours() < 4 ? 0 : 8 - currentDay;

  result.setDate(now.getDate() + daysUntilNextMonday);
  return result;
};

/**
 * 解析时长
 * @param duration 时长（毫秒）
 */
export const parseDuration = (duration: number) => {
  return {
    h: Math.floor(duration / 3600000),
    m: Math.floor((duration % 3600000) / 60000),
    s: Math.floor((duration % 60000) / 1000),
    ms: Math.floor(duration % 1000)
  };
};

/**
 * 将时长转换为时钟字符串
 * @param duration 时长（毫秒）
 */
export const formatDurationAsClock = (duration: number) => {
  return Object.values(parseDuration(duration))
    .slice(0, 3)
    .map(num => String(num).padStart(2, "0"))
    .join(":");
};

/**
 * 将时长转换为可读格式
 * @param duration 时长（毫秒）
 */
export const formatDurationAsReadable = (duration: number) => {
  return Object.entries(parseDuration(duration))
    .filter(([, value]) => value > 0)
    .map(([unit, value]) => `${value}${unit}`)
    .join(" ");
};
