import type { ResinUsageHostType } from "../types/BetterGenshinImpact/GameTask/Common/Resin/ResinUsage";

declare global {
  /**
   * 统一树脂设置 HostType
   * @since 0.67.0
   */
  const ResinUsage: ResinUsageHostType;
  type ResinUsage = BetterGenshinImpact.GameTask.Common.Resin.ResinUsage;
}

export {};
