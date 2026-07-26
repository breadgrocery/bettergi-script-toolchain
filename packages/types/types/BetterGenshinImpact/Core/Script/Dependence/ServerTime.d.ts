import type {
  ClrHostValue,
  HostType,
  StaticTypeTrait
} from "../../../../Microsoft/ClearScript/HostType";

/**
 * 服务器时间工具
 * @since 0.52.0
 */
declare const serverTimeBrand: unique symbol;
export interface ServerTime extends ClrHostValue {
  readonly [serverTimeBrand]: true;
}

declare global {
  namespace BetterGenshinImpact.Core.Script.Dependence {
    type ServerTime = import("./ServerTime").ServerTime;
  }
}

export interface ServerTimeHostType extends HostType<ServerTime, StaticTypeTrait> {
  /**
   * 获取服务器时区偏移量
   * @returns 以毫秒为单位的偏移量，可直接用于 `new Date(Date.now() + offset)`
   * @since 0.52.0
   */
  getServerTimeZoneOffset(): number;
}

export {};
