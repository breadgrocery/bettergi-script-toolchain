import "@/csharp/System/Drawing/Pen";
import { Rect } from "mirada/dist/src/types/opencv";

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

      constructor(rect: Rect, pen?: System.Drawing.Pen, name?: string);

      constructor(rect: Rect, name?: string);
    }
  }
}

export {};
