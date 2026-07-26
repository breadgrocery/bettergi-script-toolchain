import type { AutoDomainParamHostType } from "../types/BetterGenshinImpact/GameTask/AutoDomain/AutoDomainParam";

declare global {
  /**
   * 自动秘境参数 HostType
   * @since 0.52.0
   */
  const AutoDomainParam: AutoDomainParamHostType;
  type AutoDomainParam = BetterGenshinImpact.GameTask.AutoDomain.AutoDomainParam;
}

export {};
