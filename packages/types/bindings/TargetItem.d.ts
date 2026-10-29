import type { TargetItemHostType } from "../types/BetterGenshinImpact/GameTask/Common/Reward/TargetItem";

declare global {
  /**
   * 目标物品 HostType
   * @since 0.67.0
   */
  const TargetItem: TargetItemHostType;
  type TargetItem = BetterGenshinImpact.GameTask.Common.Reward.TargetItem;
}

export {};
