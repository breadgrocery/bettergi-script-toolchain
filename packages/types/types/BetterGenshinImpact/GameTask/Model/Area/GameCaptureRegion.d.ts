import type { Mat, Size } from "mirada/dist/src/types/opencv";
import "../../../../Fischless/WindowsInput/IMouseSimulator";
import "../../../../System/Drawing/Pen";
import "../../../View/Drawable/DrawContent";
import "../../../View/Drawable/LineDrawable";
import "../../../View/Drawable/RectDrawable";
import "./Converter/INodeConverter";
import "./ImageRegion";
import "./Region";

declare global {
  namespace BetterGenshinImpact.GameTask.Model.Area {
    class GameCaptureRegion extends BetterGenshinImpact.GameTask.Model.Area.ImageRegion {
      convertToRectDrawable(
        x: number,
        y: number,
        w: number,
        h: number
      ): BetterGenshinImpact.View.Drawable.RectDrawable;
      // overload
      convertToRectDrawable(
        x: number,
        y: number,
        w: number,
        h: number,
        pen: System.Drawing.Pen | null
      ): BetterGenshinImpact.View.Drawable.RectDrawable;
      convertToRectDrawable(
        x: number,
        y: number,
        w: number,
        h: number,
        pen: System.Drawing.Pen | null,
        name: string | null
      ): BetterGenshinImpact.View.Drawable.RectDrawable;

      convertToLineDrawable(
        x: number,
        y: number,
        w: number,
        h: number
      ): BetterGenshinImpact.View.Drawable.LineDrawable;
      // overload
      convertToLineDrawable(
        x: number,
        y: number,
        w: number,
        h: number,
        pen: System.Drawing.Pen | null
      ): BetterGenshinImpact.View.Drawable.LineDrawable;
      convertToLineDrawable(
        x: number,
        y: number,
        w: number,
        h: number,
        pen: System.Drawing.Pen | null,
        name: string | null
      ): BetterGenshinImpact.View.Drawable.LineDrawable;

      deriveTo1080P(): BetterGenshinImpact.GameTask.Model.Area.ImageRegion;

      constructor(
        mat: Mat,
        initX: number,
        initY: number,
        owner: BetterGenshinImpact.GameTask.Model.Area.Region | null,
        converter: BetterGenshinImpact.GameTask.Model.Area.Converter.INodeConverter | null,
        drawContent: BetterGenshinImpact.View.Drawable.DrawContent | null
      );

      static gameRegionClick(posFunc: (size: Size, scaleTo1080PRatio: number) => number[]): void;

      static gameRegionMove(posFunc: (size: Size, scaleTo1080PRatio: number) => number[]): void;

      static gameRegionMoveBy(deltaFunc: (size: Size, scaleTo1080PRatio: number) => number[]): void;

      static gameRegion1080PPosClick(cx: number, cy: number): void;

      static gameRegion1080PPosMove(cx: number, cy: number): void;
    }
  }
  export import GameCaptureRegion = BetterGenshinImpact.GameTask.Model.Area.GameCaptureRegion;
}

export {};
