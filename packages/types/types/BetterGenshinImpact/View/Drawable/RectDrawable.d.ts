import type { Rect } from "mirada/dist/src/types/opencv";
import "../../../System/Drawing/Pen";

declare global {
  namespace BetterGenshinImpact.View.Drawable {
    class RectDrawable {
      /** 绘制区域名称 */
      name: string | null;

      /** 绘制区域 */
      rect: Rect;

      /** 绘制颜色及宽度 */
      pen: System.Drawing.Pen;

      /** 区域面积是否为空 */
      isEmpty: boolean;

      constructor(rect: Rect);
      // overload
      constructor(rect: Rect, name: string | null);
      constructor(rect: Rect, pen: System.Drawing.Pen | null);
      constructor(rect: Rect, pen: System.Drawing.Pen | null, name: string | null);
    }
  }
}

export {};
