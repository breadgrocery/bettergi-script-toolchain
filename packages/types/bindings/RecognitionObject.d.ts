import type { RecognitionObjectHostType } from "../types/BetterGenshinImpact/Core/Recognition/RecognitionObject";

declare global {
  /**
   * 图像识别 HostType
   * @since 0.43.1
   */
  const RecognitionObject: RecognitionObjectHostType;
  type RecognitionObject = BetterGenshinImpact.Core.Recognition.RecognitionObject;
}

export {};
