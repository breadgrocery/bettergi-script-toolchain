import type { DesktopRegionHostType } from "../types/BetterGenshinImpact/GameTask/Model/Area/DesktopRegion";

declare global {
  /**
   * 桌面区域 HostType
   * @since 0.43.1
   */
  const DesktopRegion: DesktopRegionHostType;
  type DesktopRegion = BetterGenshinImpact.GameTask.Model.Area.DesktopRegion;
}

export {};
