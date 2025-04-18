import { Rect } from "mirada/dist/src/types/opencv";
import { Pen } from "../../../System/Drawing/Pen";

export interface RectDrawable {
  /** 绘制区域名称 */
  name: string | null;

  /** 绘制区域 */
  rect: Rect;

  /** 绘制颜色及宽度 */
  pen: Pen;

  /** 区域面积是否为空 */
  isEmpty: boolean;
}
