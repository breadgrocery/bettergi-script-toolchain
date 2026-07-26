import type { AutoBossParamHostType } from "../types/BetterGenshinImpact/GameTask/AutoBoss/AutoBossParam";

declare global {
  /**
   * 自动首领参数 HostType
   * @since 0.62.0
   */
  const AutoBossParam: AutoBossParamHostType;
  type AutoBossParam = BetterGenshinImpact.GameTask.AutoBoss.AutoBossParam;
}

export {};
