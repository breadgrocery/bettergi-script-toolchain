import type { RegionHostType } from "../types/BetterGenshinImpact/GameTask/Model/Area/Region";

declare global {
  /**
   * 通用屏幕区域 HostType
   * @since 0.43.1
   */
  const Region: RegionHostType;
  type Region = BetterGenshinImpact.GameTask.Model.Area.Region;
}

export {};
