import type { BvLocatorHostType } from "../types/BetterGenshinImpact/Core/BgiVision/BvLocator";

declare global {
  /**
   * BgiVision 定位器 HostType
   * @since 0.57.0
   */
  const BvLocator: BvLocatorHostType;
  type BvLocator = BetterGenshinImpact.Core.BgiVision.BvLocator;
}

export {};
