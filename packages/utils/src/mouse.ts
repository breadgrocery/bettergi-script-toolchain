const _simulateScroll = async (scrollAmountInClicks: number, times: number) => {
  const script = {
    macroEvents: Array(times).fill({ type: 6, mouseX: 0, mouseY: scrollAmountInClicks, time: 0 }),
    info: { name: "", description: "", x: 0, y: 0, width: 1920, height: 1080, recordDpi: 1.25 }
  };
  await keyMouseScript.run(JSON.stringify(script));
};

/**
 * 鼠标滚轮向上滚动指定高度
 * @param height 滚动高度
 * @param algorithm 自定义滚动算法函数，接收高度参数并返回滚动次数（默认算法为每18像素滚动一次）
 */
export const mouseScrollUp = (height: number, algorithm?: (h: number) => number) => {
  const scrollAlgorithm = algorithm ?? (h => Math.floor(h / 18));
  const scrollTimes = scrollAlgorithm(height);
  return _simulateScroll(120, scrollTimes);
};

/**
 * 鼠标滚轮向下滚动指定高度
 * @param height 滚动高度
 * @param algorithm 自定义滚动算法函数，接收高度参数并返回滚动次数（默认算法为每18像素滚动一次）
 */
export const mouseScrollDown = (height: number, algorithm?: (height: number) => number) => {
  const scrollAlgorithm = algorithm ?? (h => Math.floor(h / 18));
  const scrollTimes = scrollAlgorithm(height);
  return _simulateScroll(-120, scrollTimes);
};

/**
 * 鼠标滚轮向上滚动指定行数
 * @param lines 滚动行数
 * @param lineHeight 行高（默认值为175像素）
 */
export const mouseScrollUpLines = (lines: number, lineHeight?: number) => {
  return mouseScrollUp(lines * (lineHeight ?? 175));
};

/**
 * 鼠标滚轮向下滚动指定行数
 * @param lines 滚动行数
 * @param lineHeight 行高（默认值为175像素）
 */
export const mouseScrollDownLines = (lines: number, lineHeight?: number) => {
  return mouseScrollDown(lines * (lineHeight ?? 175));
};
