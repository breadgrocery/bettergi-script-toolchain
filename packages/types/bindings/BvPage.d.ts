import type { BvPageHostType } from "../types/BetterGenshinImpact/Core/BgiVision/BvPage";

declare global {
  /**
   * BgiVision 页面 HostType
   * @since 0.57.0
   */
  const BvPage: BvPageHostType;
  type BvPage = BetterGenshinImpact.Core.BgiVision.BvPage;
}

export {};
