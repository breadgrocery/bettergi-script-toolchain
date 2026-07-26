import type {
  ClrHostValue,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../../../Microsoft/ClearScript/HostType";

/**
 * 实时任务触发器
 * @since 0.43.1
 */
declare const realtimeTimerBrand: unique symbol;
export interface RealtimeTimer extends ClrHostValue {
  readonly [realtimeTimerBrand]: true;
  /**
   * 实时任务触发器名称
   * @since 0.43.1
   */
  name: string;
  /**
   * 实时任务触发间隔，单位毫秒，默认 50
   * @since 0.43.1
   */
  interval: number;
  /**
   * 实时任务配置
   * @since 0.43.1
   */
  config: unknown;
}

declare global {
  namespace BetterGenshinImpact.Core.Script.Dependence.Model {
    type RealtimeTimer = import("./RealTimeTimer").RealtimeTimer;
  }
}

export interface RealtimeTimerHostType extends HostType<
  RealtimeTimer,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  /**
   * 构造实例
   * @since 0.43.1
   */
  new (): RealtimeTimer;
  /**
   * 构造实例
   * @param name 实时任务触发器名称
   * @since 0.43.1
   */
  new (name: string): RealtimeTimer;
  /**
   * 构造实例
   * @param name 实时任务触发器名称
   * @param config 实时任务配置
   * @since 0.43.1
   */
  new (name: string, config: unknown): RealtimeTimer;
}

export {};
