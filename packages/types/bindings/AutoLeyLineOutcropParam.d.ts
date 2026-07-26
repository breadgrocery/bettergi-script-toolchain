import type { AutoLeyLineOutcropParamHostType } from "../types/BetterGenshinImpact/GameTask/AutoLeyLineOutcrop/AutoLeyLineOutcropParam";

declare global {
  /**
   * 自动地脉花参数 HostType
   * @since 0.58.0
   */
  const AutoLeyLineOutcropParam: AutoLeyLineOutcropParamHostType;
  type AutoLeyLineOutcropParam =
    BetterGenshinImpact.GameTask.AutoLeyLineOutcrop.AutoLeyLineOutcropParam;
}

export {};
