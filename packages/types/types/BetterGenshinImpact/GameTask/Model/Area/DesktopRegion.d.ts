import type { Mat, Rect } from "mirada/dist/src/types/opencv";
import "../../../../Fischless/WindowsInput/IMouseSimulator";
import "../Area/Region";

declare global {
  namespace BetterGenshinImpact.GameTask.Model.Area {
    class DesktopRegion extends BetterGenshinImpact.GameTask.Model.Area.Region {
      desktopRegionClick(x: number, y: number, w: number, h: number): void;

      desktopRegionMove(x: number, y: number, w: number, h: number): void;

      /**
       * 派生一个点类型的区域
       * @param x 水平位置（像素）
       * @param y 垂直位置（像素）
       */
      derive(x: number, y: number): BetterGenshinImpact.GameTask.Model.Area.Region;

      /**
       * 派生一个点类型的区域
       * @param x 水平位置（像素）
       * @param y 垂直位置（像素）
       * @param w 宽度
       * @param h 高度
       */
      derive(
        x: number,
        y: number,
        w: number,
        h: number
      ): BetterGenshinImpact.GameTask.Model.Area.Region;

      /**
       * 派生一个矩形类型的区域
       * @param rect 矩形
       */
      derive(rect: Rect): BetterGenshinImpact.GameTask.Model.Area.Region;

      derive(captureMat: Mat, x: number, y: number): void;

      constructor(w: number, h: number);
      // overload
      constructor(w: number, h: number, iMouse: Fischless.WindowsInput.IMouseSimulator | null);

      constructor();

      constructor(iMouse: Fischless.WindowsInput.IMouseSimulator);

      static desktopRegionClick(cx: number, cy: number): void;

      static desktopRegionMove(cx: number, cy: number): void;

      static desktopRegionMoveBy(dx: number, dy: number): void;
    }
  }
  export import DesktopRegion = BetterGenshinImpact.GameTask.Model.Area.DesktopRegion;
}

export {};
