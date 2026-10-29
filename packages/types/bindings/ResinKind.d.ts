import type { ResinKindHostType } from "../types/BetterGenshinImpact/GameTask/Common/Resin/ResinEnums";

declare global {
  /**
   * 树脂种类 HostType
   * @since 0.67.0
   */
  const ResinKind: ResinKindHostType;
  type ResinKind = BetterGenshinImpact.GameTask.Common.Resin.ResinKind;
}

export {};
