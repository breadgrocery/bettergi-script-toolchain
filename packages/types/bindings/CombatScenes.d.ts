import type { CombatScenesHostType } from "../types/BetterGenshinImpact/GameTask/AutoFight/Model/CombatScenes";

declare global {
  /**
   * 战斗场景 HostType
   * @since 0.48.0
   */
  const CombatScenes: CombatScenesHostType;
  type CombatScenes = BetterGenshinImpact.GameTask.AutoFight.Model.CombatScenes;
}

export {};
