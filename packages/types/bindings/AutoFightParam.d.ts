import type { AutoFightParamHostType } from "../types/BetterGenshinImpact/GameTask/AutoFight/AutoFightParam";

declare global {
  /**
   * 自动战斗参数 HostType
   * @since 0.52.0
   */
  const AutoFightParam: AutoFightParamHostType;
  type AutoFightParam = BetterGenshinImpact.GameTask.AutoFight.AutoFightParam;
}

export {};
