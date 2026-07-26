import "../types/BetterGenshinImpact/GameTask/Model/Area/ImageRegion";
import type { HostDelegate } from "../types/Microsoft/ClearScript/HostType";

interface captureGameRegionHostDelegate extends HostDelegate {
  (): BetterGenshinImpact.GameTask.Model.Area.ImageRegion;
  invoke(): BetterGenshinImpact.GameTask.Model.Area.ImageRegion;
}

declare global {
  /**
   * 捕获当前游戏画面区域
   * @since 0.43.1
   */
  const captureGameRegion: captureGameRegionHostDelegate;
}

export {};
