import type { RealtimeTimerHostType } from "../types/BetterGenshinImpact/Core/Script/Dependence/Model/RealTimeTimer";

declare global {
  /**
   * 实时定时器 HostType
   * @since 0.43.1
   */
  const RealtimeTimer: RealtimeTimerHostType;
  type RealtimeTimer = BetterGenshinImpact.Core.Script.Dependence.Model.RealtimeTimer;
}

export {};
