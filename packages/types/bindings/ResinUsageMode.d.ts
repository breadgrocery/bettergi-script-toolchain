import type { ResinUsageModeHostType } from "../types/BetterGenshinImpact/GameTask/Common/Resin/ResinEnums";

declare global {
  /**
   * 树脂使用方式 HostType
   * @since 0.67.0
   */
  const ResinUsageMode: ResinUsageModeHostType;
  type ResinUsageMode = BetterGenshinImpact.GameTask.Common.Resin.ResinUsageMode;
}

export {};
