import type { Rect } from "mirada/dist/src/types/opencv";
import "../Recognition/RecognitionObject";

declare global {
  namespace BetterGenshinImpact.Core.BgiVision {
    class BvImage {
      recognitionObject: BetterGenshinImpact.Core.Recognition.RecognitionObject;

      constructor(templateAssert: string);

      constructor(templateAssert: string, roi: Rect);

      constructor(templateAssert: string, roi: Rect, threshold: number);

      toRecognitionObject(): BetterGenshinImpact.Core.Recognition.RecognitionObject;
    }
  }
  export import BvImage = BetterGenshinImpact.Core.BgiVision.BvImage;
}

export {};
