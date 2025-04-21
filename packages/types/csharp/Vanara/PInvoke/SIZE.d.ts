export interface SIZE {
  /** 尺寸的宽度 */
  cx: number;

  /** 尺寸的高度 */
  cy: number;

  /** 尺寸的宽度 */
  width: number;

  /** 尺寸的高度 */
  height: number;

  /** 判断尺寸是否为空 */
  isEmpty: boolean;

  /** 返回当前尺寸的副本 */
  toSize(): SIZE;
}
