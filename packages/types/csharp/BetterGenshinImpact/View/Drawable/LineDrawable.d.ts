import { Pen } from "../../../System/Drawing/Pen";
import { Point } from "../../../System/Windows/Point";

export interface LineDrawable {
  /** 绘制直线起始位置 */
  p1: Point;

  /** 绘制直线终点位置 */
  p2: Point;

  /** 绘制颜色及宽度 */
  pen: Pen;
}
