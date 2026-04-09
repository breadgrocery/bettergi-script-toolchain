import type { Rect } from "mirada/dist/src/types/opencv";
import "../../../Fischless/WindowsInput/IKeyboardSimulator";
import "../../../Fischless/WindowsInput/IMouseSimulator";
import "../../../System/Threading/CancellationToken";
import "../../GameTask/Model/Area/ImageRegion";
import "../../GameTask/Model/Area/Region";
import "../Recognition/RecognitionObject";
import "./BvImage";
import "./BvLocator";

declare global {
  namespace BetterGenshinImpact.Core.BgiVision {
    class BvPage {
      keyboard: Fischless.WindowsInput.IKeyboardSimulator;

      mouse: Fischless.WindowsInput.IMouseSimulator;

      defaultTimeout: number;

      defaultRetryInterval: number;

      constructor();

      constructor(cancellationToken: System.Threading.CancellationToken);

      screenshot(): BetterGenshinImpact.GameTask.Model.Area.ImageRegion;

      wait(milliseconds: number): Promise<void>;

      locator(
        image: BetterGenshinImpact.Core.BgiVision.BvImage
      ): BetterGenshinImpact.Core.BgiVision.BvLocator;

      locator(text: string): BetterGenshinImpact.Core.BgiVision.BvLocator;

      locator(text: string, rect: Rect): BetterGenshinImpact.Core.BgiVision.BvLocator;

      locator(
        ro: BetterGenshinImpact.Core.Recognition.RecognitionObject
      ): BetterGenshinImpact.Core.BgiVision.BvLocator;

      getByText(): BetterGenshinImpact.Core.BgiVision.BvLocator;

      getByText(text: string): BetterGenshinImpact.Core.BgiVision.BvLocator;

      getByText(text: string, rect: Rect): BetterGenshinImpact.Core.BgiVision.BvLocator;

      getByImage(
        image: BetterGenshinImpact.Core.BgiVision.BvImage
      ): BetterGenshinImpact.Core.BgiVision.BvLocator;

      ocr(): System.Collections.Generic.List<BetterGenshinImpact.GameTask.Model.Area.Region>;

      ocr(
        rect: Rect
      ): System.Collections.Generic.List<BetterGenshinImpact.GameTask.Model.Area.Region>;

      click(x: number, y: number): void;
    }
  }
  export import BvPage = BetterGenshinImpact.Core.BgiVision.BvPage;
}

export {};
