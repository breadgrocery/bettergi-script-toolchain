import "../../../System/Collections/Generic/Dictionary";
import "../../../System/Collections/Generic/List";
import "./LineDrawable";
import "./RectDrawable";

declare global {
  namespace BetterGenshinImpact.View.Drawable {
    class DrawContent {
      /** 在遮罩窗口上绘制的矩形 */
      rectList: System.Collections.Generic.Dictionary<
        string,
        System.Collections.Generic.List<BetterGenshinImpact.View.Drawable.RectDrawable>
      >;

      /** 在遮罩窗口上绘制的文本 */
      textList: System.Collections.Generic.Dictionary<
        string,
        System.Collections.Generic.List<BetterGenshinImpact.View.Drawable.RectDrawable>
      >;

      /** 在遮罩窗口上绘制的文本 */
      lineList: System.Collections.Generic.Dictionary<
        string,
        System.Collections.Generic.List<BetterGenshinImpact.View.Drawable.RectDrawable>
      >;

      putRect(key: string, newRect: BetterGenshinImpact.View.Drawable.RectDrawable): void;

      putOrRemoveRectList(
        key: string,
        list: System.Collections.Generic.List<BetterGenshinImpact.View.Drawable.RectDrawable> | null
      ): void;

      removeRects(key: string): void;

      putLine(key: string, newLine: BetterGenshinImpact.View.Drawable.LineDrawable): void;

      removeLines(key: string): void;

      clearAll(): void;
    }
  }
}

export {};
