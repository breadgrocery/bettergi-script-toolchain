import type { BvImageHostType } from "../types/BetterGenshinImpact/Core/BgiVision/BvImage";

declare global {
  /**
   * BgiVision 图像 HostType
   * @since 0.57.0
   */
  const BvImage: BvImageHostType;
  type BvImage = BetterGenshinImpact.Core.BgiVision.BvImage;
}

export {};
