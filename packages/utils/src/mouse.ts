type MouseWaypointsOptions = {
  shouldDrag?: boolean;
  timeout?: number;
};

/**
 * 沿着指定路径点移动鼠标
 * @param waypoints 鼠标路径点
 * @param options 鼠标移动选项
 */
export const mouseMoveAlongWaypoints = async (
  waypoints: { x: number; y: number; delay?: number }[],
  options?: MouseWaypointsOptions
) => {
  const { shouldDrag = false, timeout = 0 } = options || {};
  try {
    const startTime = Date.now();
    for (let i = 0; i < waypoints.length; i++) {
      // 开始拖拽
      if (i === 0 && shouldDrag) leftButtonDown();

      moveMouseTo(Math.trunc(waypoints[i].x), Math.trunc(waypoints[i].y));

      // 等待指定延迟
      const delay = Math.trunc(waypoints[i].delay || 50);
      if (delay > 0) await sleep(delay);

      // 超时检查
      if (timeout > 0 && Date.now() - startTime > timeout) return false;
    }
  } finally {
    // 结束拖拽
    if (shouldDrag) leftButtonUp();
  }
  return true;
};

type NaturalMouseMoveOptions = {
  /** 移动持续时间（毫秒） */
  duration: number;
  /** 摆动幅度（像素） */
  wiggle?: number;
  /** 随机种子 */
  seed?: number;
  /** 缓动函数 */
  easing?: (progress: number) => number;
};

/** 贝塞尔曲线生成鼠标移动路径点 */
export const bezierWaypoints = async (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  options?: NaturalMouseMoveOptions
) => {
  const {
    duration = 800,
    wiggle = 30,
    seed = Math.random(),
    easing = (t: number) => 1 - Math.pow(1 - t, 3) // ease-out-cubic
  } = options || {};
  const random = () => ((seed * 9301 + 49297) % 233280) / 233280;
  const controlX = (x1 + x2) / 2 + random() * wiggle * 2 - wiggle;
  const controlY = (y1 + y2) / 2 + random() * wiggle * 2 - wiggle;
  const steps = Math.max(duration / 16, 10);

  return Array.from({ length: steps + 1 }, (_, i) => {
    const t = easing(i / steps);
    const u = 1 - t;
    return {
      x: u * u * x1 + 2 * u * t * controlX + t * t * x2,
      y: u * u * y1 + 2 * u * t * controlY + t * t * y2,
      delay: Math.round((duration / steps) * (0.8 + Math.random() * 0.4))
    };
  }).concat([{ x: x2, y: y2, delay: 0 }]);
};

/**
 * 自然地移动鼠标到指定位置
 * @param x1 起始水平方向偏移量（像素）
 * @param y1 起始垂直方向偏移量（像素）
 * @param x2 终止水平方向偏移量（像素）
 * @param y2 终止垂直方向偏移量（像素）
 * @param options 鼠标移动选项
 */
export const naturalMouseMove = async (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  options?: NaturalMouseMoveOptions & MouseWaypointsOptions
) => {
  const waypoints = await bezierWaypoints(x1, y1, x2, y2, options);
  return mouseMoveAlongWaypoints(waypoints, options);
};

/** 使用回放脚本模拟滚动 */
const simulateScroll = async (scrollAmountInClicks: number, times: number) => {
  const script = {
    macroEvents: Array(times).fill({ type: 6, mouseX: 0, mouseY: scrollAmountInClicks, time: 0 }),
    info: { name: "", description: "", x: 0, y: 0, width: 1920, height: 1080, recordDpi: 1.5 }
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
  return simulateScroll(120, algorithm(height));
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
  return simulateScroll(-120, algorithm(height));
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
