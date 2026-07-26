import type { AutoStygianOnslaughtParamHostType } from "../types/BetterGenshinImpact/GameTask/AutoStygianOnslaught/AutoStygianOnslaughtParam";

declare global {
  /**
   * 自动幽境危战参数 HostType
   * @since 0.58.0
   */
  const AutoStygianOnslaughtParam: AutoStygianOnslaughtParamHostType;
  type AutoStygianOnslaughtParam =
    BetterGenshinImpact.GameTask.AutoStygianOnslaught.AutoStygianOnslaughtParam;
}

export {};
