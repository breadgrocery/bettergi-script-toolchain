import type { SoloTaskHostType } from "../types/BetterGenshinImpact/Core/Script/Dependence/Model/SoloTask";

declare global {
  /**
   * 独立任务描述 HostType
   * @since 0.43.1
   */
  const SoloTask: SoloTaskHostType;
  type SoloTask = BetterGenshinImpact.Core.Script.Dependence.Model.SoloTask;
}

export {};
