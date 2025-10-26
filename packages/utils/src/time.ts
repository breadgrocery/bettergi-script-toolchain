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
  const daysUntilNextMonday = currentDay === 1 && now.getHours() < 4 ? 0 : (8 - currentDay) % 7;

  result.setDate(now.getDate() + daysUntilNextMonday);
  return result;
};
