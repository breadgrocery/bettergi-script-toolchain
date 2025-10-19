import "@/csharp/System/Drawing/Pen";
import "@/csharp/System/Windows/Point";

declare global {
  namespace BetterGenshinImpact.View.Drawable {
    class LineDrawable {
      /** 绘制直线起始位置 */
      p1: System.Windows.Point;

      /** 绘制直线终点位置 */
      p2: System.Windows.Point;

      /** 绘制颜色及宽度 */
      pen: System.Drawing.Pen;

      constructor(p1: System.Windows.Point, p2: System.Windows.Point, pen: System.Drawing.Pen);
    }
  }
}

export {};
