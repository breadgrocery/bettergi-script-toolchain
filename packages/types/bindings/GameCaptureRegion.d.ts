import type { GameCaptureRegionHostType } from "../types/BetterGenshinImpact/GameTask/Model/Area/GameCaptureRegion";

declare global {
  /**
   * 游戏截图区域 HostType
   * @since 0.43.1
   */
  const GameCaptureRegion: GameCaptureRegionHostType;
  type GameCaptureRegion = BetterGenshinImpact.GameTask.Model.Area.GameCaptureRegion;
}

export {};
