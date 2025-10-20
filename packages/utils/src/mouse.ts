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
export const mouseScrollUp = (
  height: number,
  algorithm: (h: number) => number = h => Math.floor(h / 18)
) => {
  return _simulateScroll(120, algorithm(height));
};

/**
 * 鼠标滚轮向下滚动指定高度
 * @param height 滚动高度
 * @param algorithm 自定义滚动算法函数，接收高度参数并返回滚动次数（默认算法为每18像素滚动一次）
 */
export const mouseScrollDown = (
  height: number,
  algorithm: (height: number) => number = h => Math.floor(h / 18)
) => {
  return _simulateScroll(-120, algorithm(height));
};

/**
 * 鼠标滚轮向上滚动指定行数
 * @param lines 滚动行数
 * @param lineHeight 行高（默认值为175像素）
 */
export const mouseScrollUpLines = (lines: number, lineHeight: number = 175) => {
  return mouseScrollUp(lines * lineHeight);
};

/**
 * 鼠标滚轮向下滚动指定行数
 * @param lines 滚动行数
 * @param lineHeight 行高（默认值为175像素）
 */
export const mouseScrollDownLines = (lines: number, lineHeight: number = 175) => {
  return mouseScrollDown(lines * lineHeight);
};

/**
 * 鼠标拖拽滑动到指定位置
 * @param x1 起始水平方向偏移量（像素）
 * @param y1 起始垂直方向偏移量（像素）
 * @param x2 终止水平方向偏移量（像素）
 * @param y2 终止垂直方向偏移量（像素）
 */
export const mouseSlide = async (x1: number, y1: number, x2: number, y2: number) => {
  moveMouseTo(x1, y1);
  await sleep(50);
  leftButtonDown();
  await sleep(50);
  moveMouseTo(x2, y2);
  await sleep(50);
  leftButtonUp();
};

/**
 * 鼠标水平拖拽滑动指定距离
 * @param x 起始水平方向偏移量（像素）
 * @param y 起始垂直方向偏移量（像素）
 * @param distance 水平拖拽滑动距离（像素） 正数向右，负数向左
 */
export const mouseSlideX = (x: number, y: number, distance: number) => {
  return mouseSlide(x, y, x + distance, y);
};

/**
 * 鼠标垂直拖拽滑动指定距离
 * @param x 起始水平方向偏移量（像素）
 * @param y 起始垂直方向偏移量（像素）
 * @param distance 垂直拖拽滑动距离（像素） 正数向下，负数向上
 */
export const mouseSlideY = (x: number, y: number, distance: number) => {
  return mouseSlide(x, y, x, y + distance);
};
