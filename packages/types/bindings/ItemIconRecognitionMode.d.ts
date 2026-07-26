import type { ItemIconRecognitionModeHostType } from "../types/BetterGenshinImpact/GameTask/Common/Job/ItemIconRecognitionMode";

declare global {
  /**
   * 物品图标识别模式 HostType
   * @since 0.62.0
   */
  const ItemIconRecognitionMode: ItemIconRecognitionModeHostType;
  type ItemIconRecognitionMode = BetterGenshinImpact.GameTask.Common.Job.ItemIconRecognitionMode;
}

export {};
