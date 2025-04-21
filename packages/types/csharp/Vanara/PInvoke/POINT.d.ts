export interface POINT {
  /** 目标水平位置（像素） */
  x: number;

  /** 目标垂直位置（像素） */
  y: number;

  /** 判断该点是否为空 */
  isEmpty: boolean;

  /**
   * 通过给定的偏移量移动当前点
   * @param dx - x 轴方向的偏移量（正数向右，负数向左）。
   * @param dy - y 轴方向的偏移量（正数向下，负数向上）。
   */
  offset(dx: number, dy: number): void;

  /**
   * 通过另一个点对象偏移当前点
   * @param p - 包含偏移量的 `POINT` 对象，其 `x` 和 `y` 值会被加到当前点。
   */
  offset(p: POINT): void;
}
