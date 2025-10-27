import { Mat } from "mirada/dist/src/types/opencv";
import "../../../../Fischless/WindowsInput/IMouseSimulator";

declare global {
  namespace BetterGenshinImpact.GameTask.Model.Area {
    class DesktopRegion extends BetterGenshinImpact.GameTask.Model.Area.Region {
      desktopRegionClick(x: number, y: number, w: number, h: number): void;

      desktopRegionMove(captureMat: Mat, x: number, y: number): void;

      derive(x: number, y: number, w: number, h: number): void;

      constructor(w: number, h: number);

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
