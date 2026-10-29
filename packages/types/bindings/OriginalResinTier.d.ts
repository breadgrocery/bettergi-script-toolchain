import type { OriginalResinTierHostType } from "../types/BetterGenshinImpact/GameTask/Common/Resin/ResinEnums";

declare global {
  /**
   * 原粹树脂领奖档位 HostType
   * @since 0.67.0
   */
  const OriginalResinTier: OriginalResinTierHostType;
  type OriginalResinTier = BetterGenshinImpact.GameTask.Common.Resin.OriginalResinTier;
}

export {};
