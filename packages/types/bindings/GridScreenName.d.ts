import type { GridScreenNameHostType } from "../types/BetterGenshinImpact/GameTask/Model/GameUI/GridScreenName";

declare global {
  /**
   * 网格界面名称 HostType
   * @since 0.62.0
   */
  const GridScreenName: GridScreenNameHostType;
  type GridScreenName = BetterGenshinImpact.GameTask.Model.GameUI.GridScreenName;
}

export {};
