import { POINT } from "./POINT";
import { SIZE } from "./SIZE";

export interface RECT {
  /**  矩形左侧的 x 坐标 */
  left: number;

  /** 矩形顶部的 y 坐标 */
  top: number;

  /** 矩形右侧的 x 坐标 */
  right: number;

  /** 矩形底部的 y 坐标 */
  bottom: number;

  /** 目标水平位置（像素） */
  x: number;

  /** 目标垂直位置（像素） */
  y: number;

  /** 矩形的宽度 */
  width: number;

  /** 矩形的高度 */
  height: number;

  /** 判断矩形是否为空 */
  isEmpty: boolean;

  /** 获取矩形的位置 */
  location(): POINT;

  /** 获取矩形的尺寸 */
  size(): SIZE;
}
