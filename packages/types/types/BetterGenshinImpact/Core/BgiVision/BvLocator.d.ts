import type { Rect } from "mirada/dist/src/types/opencv";
import "../../../System/Collections/Generic/List";
import "../../GameTask/Model/Area/Region";
import "../Recognition/RecognitionObject";

declare global {
  namespace BetterGenshinImpact.Core.BgiVision {
    class BvLocator {
      recognitionObject: BetterGenshinImpact.Core.Recognition.RecognitionObject;

      retryAction: (
        regions: () => System.Collections.Generic.List<BetterGenshinImpact.GameTask.Model.Area.Region>
      ) => void;

      defaultTimeout: number;

      defaultRetryInterval: number;

      constructor();

      constructor(
        recognitionObject: BetterGenshinImpact.Core.Recognition.RecognitionObject,
        cancellationToken: System.Threading.CancellationToken
      );

      findAll(): System.Collections.Generic.List<BetterGenshinImpact.GameTask.Model.Area.Region>;

      isExist(): boolean;

      click(timeout?: number): Promise<BetterGenshinImpact.GameTask.Model.Area.Region>;

      clickUntilDisappears(
        timeout?: number
      ): Promise<BetterGenshinImpact.GameTask.Model.Area.Region>;

      doubleClick(timeout?: number): Promise<BetterGenshinImpact.GameTask.Model.Area.Region>;

      waitFor(
        timeout?: number
      ): Promise<System.Collections.Generic.List<BetterGenshinImpact.GameTask.Model.Area.Region>>;

      tryWaitFor(
        timeout?: number
      ): Promise<System.Collections.Generic.List<BetterGenshinImpact.GameTask.Model.Area.Region>>;

      waitForDisappear(timeout?: number): Promise<void>;

      tryWaitForDisappear(timeout?: number): Promise<void>;

      withRoi: (
        rect: Rect | ((rect: Rect) => Rect)
      ) => BetterGenshinImpact.Core.BgiVision.BvLocator;

      withRetryAction: (
        action: (
          regions: System.Collections.Generic.List<BetterGenshinImpact.GameTask.Model.Area.Region>
        ) => void
      ) => BetterGenshinImpact.Core.BgiVision.BvLocator;
    }
  }
  export import BvLocator = BetterGenshinImpact.Core.BgiVision.BvLocator;
}

export {};
