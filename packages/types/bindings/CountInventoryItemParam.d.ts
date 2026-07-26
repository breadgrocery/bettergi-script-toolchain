import type { CountInventoryItemParamHostType } from "../types/BetterGenshinImpact/GameTask/Common/Job/CountInventoryItemParam";

declare global {
  /**
   * 背包物品计数参数 HostType
   * @since 0.62.0
   */
  const CountInventoryItemParam: CountInventoryItemParamHostType;
  type CountInventoryItemParam = BetterGenshinImpact.GameTask.Common.Job.CountInventoryItemParam;
}

export {};
