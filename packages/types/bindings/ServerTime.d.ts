import type { ServerTimeHostType } from "../types/BetterGenshinImpact/Core/Script/Dependence/ServerTime";

declare global {
  /**
   * 服务器时间 HostType
   * @since 0.52.0
   */
  const ServerTime: ServerTimeHostType;
  type ServerTime = BetterGenshinImpact.Core.Script.Dependence.ServerTime;
}

export {};
