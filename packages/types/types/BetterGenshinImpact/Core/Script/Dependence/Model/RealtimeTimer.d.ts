import type {
  ClrHostValue,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../../../Microsoft/ClearScript/HostType";
import "../../../../GameTask/AutoSkip/AutoSkipConfig";

/**
 * 实时触发器名 → RealtimeTimer.Config（唯一真源；配置一律 inline，无额外 type 名）
 * 与 `GameTaskManager.AddTrigger` / `RealtimeTimer` 构造对齐
 * @since 0.43.1
 */
export type RealtimeTriggerConfigMap = {
  /**
   * 自动拾取
   * 对应上游 `AutoPickExternalConfig`
   */
  AutoPick: {
    /** 需要 F 的文本（对话、拾取） */
    textList?: string[];
    /** 无视文本和图标，遇到 F 就点击；默认 false */
    forceInteraction?: boolean;
  };
  /**
   * 自动跳过剧情
   * 构造侧要求传入 `AutoSkipConfig` 实例
   */
  AutoSkip: BetterGenshinImpact.GameTask.AutoSkip.AutoSkipConfig;
  /**
   * 自动吃药；`AddTrigger` 可按名添加，构造不解析专用 config
   */
  AutoEat: void;
};

/**
 * 实时触发器注册名 = map key；`(string & {})` 保留未知扩展
 * @see GameTaskManager.AddTrigger
 * @since 0.43.1
 */
export type RealtimeTriggerName = keyof RealtimeTriggerConfigMap | (string & {});

export type RealtimeTriggerConfigForName<TName extends RealtimeTriggerName> =
  TName extends keyof RealtimeTriggerConfigMap
    ? RealtimeTriggerConfigMap[TName] extends void
      ? undefined
      : RealtimeTriggerConfigMap[TName]
    : Record<string, unknown>;

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
  name: RealtimeTriggerName;
  /**
   * 实时任务触发间隔，单位毫秒，默认 50
   * @since 0.43.1
   */
  interval: number;
  /**
   * 实时任务配置（CLR 存 `object?`，JS 侧 plain object 或宿主配置实例）
   * @since 0.43.1
   */
  config:
    | Exclude<RealtimeTriggerConfigMap[keyof RealtimeTriggerConfigMap], void>
    | Record<string, unknown>
    | null
    | undefined;
}

declare global {
  namespace BetterGenshinImpact.Core.Script.Dependence.Model {
    type RealtimeTimer = import("./RealtimeTimer").RealtimeTimer;
    type RealtimeTriggerConfigForName<TName extends RealtimeTriggerName> =
      import("./RealtimeTimer").RealtimeTriggerConfigForName<TName>;
    type RealtimeTriggerConfigMap = import("./RealtimeTimer").RealtimeTriggerConfigMap;
    type RealtimeTriggerName = import("./RealtimeTimer").RealtimeTriggerName;
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
   * 仅名称
   * @param name 实时任务触发器名称
   * @since 0.43.1
   */
  new (name: RealtimeTriggerName): RealtimeTimer;
  /**
   * 名称 + 配置（按触发器名收窄）
   * @param name 实时任务触发器名称
   * @param config 实时任务配置
   * @since 0.43.1
   */
  new <TName extends RealtimeTriggerName>(
    name: TName,
    config: RealtimeTriggerConfigForName<TName> extends undefined
      ? Record<string, unknown> | undefined
      : RealtimeTriggerConfigForName<TName>
  ): RealtimeTimer;
}

export {};
