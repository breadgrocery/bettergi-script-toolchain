import type {
  ClrHostValue,
  EnumTypeTrait,
  HostType
} from "../../../../Microsoft/ClearScript/HostType";
import "../../../../System/Enum";
import "../../../../System/IComparable";
import "../../../../System/IConvertible";
import "../../../../System/IFormattable";
import "../../../../System/ISpanFormattable";

/**
 * 树脂种类，声明顺序即固定使用顺序
 * @since 0.67.0
 */
declare const resinKindBrand: unique symbol;
export interface ResinKind extends ClrHostValue {
  readonly [resinKindBrand]: true;
}

export interface ResinKindHostType extends HostType<ResinKind, EnumTypeTrait> {
  /** 浓缩树脂 */
  readonly condensed: ResinKind;
  /** 原粹树脂 */
  readonly original: ResinKind;
  /** 须臾树脂 */
  readonly transient: ResinKind;
  /** 脆弱树脂 */
  readonly fragile: ResinKind;
}

/**
 * 树脂使用的目标控制方式
 * @since 0.67.0
 */
declare const resinUsageModeBrand: unique symbol;
export interface ResinUsageMode extends ClrHostValue {
  readonly [resinUsageModeBrand]: true;
}

export interface ResinUsageModeHostType extends HostType<ResinUsageMode, EnumTypeTrait> {
  /** 刷至允许的树脂耗尽 */
  readonly exhaust: ResinUsageMode;
  /** 指定成功领奖次数 */
  readonly runCount: ResinUsageMode;
  /** 按树脂分别指定领奖次数 */
  readonly perType: ResinUsageMode;
}

/**
 * 原粹树脂的领奖档位策略
 * @since 0.67.0
 */
declare const originalResinTierBrand: unique symbol;
export interface OriginalResinTier extends ClrHostValue {
  readonly [originalResinTierBrand]: true;
}

export interface OriginalResinTierHostType extends HostType<OriginalResinTier, EnumTypeTrait> {
  /** 沿用任务的默认档位规则 */
  readonly default: OriginalResinTier;
  /** 优先消耗 40 点，不足时使用 20 点 */
  readonly prefer40: OriginalResinTier;
  /** 只使用 20 点档位 */
  readonly only20: OriginalResinTier;
}

/**
 * 任务使用某类树脂的方式
 * @since 0.67.0
 */
declare const resinKindSupportBrand: unique symbol;
export interface ResinKindSupport extends ClrHostValue {
  readonly [resinKindSupportBrand]: true;
}

export interface ResinKindSupportHostType extends HostType<ResinKindSupport, EnumTypeTrait> {
  /** 任务不支持此类树脂 */
  readonly unsupported: ResinKindSupport;
  /** 领奖时直接使用 */
  readonly direct: ResinKindSupport;
  /** 战前补充为原粹树脂 */
  readonly replenish: ResinKindSupport;
}

/**
 * 因树脂规则结束领奖的原因
 * @since 0.67.0
 */
declare const resinStopReasonBrand: unique symbol;
export interface ResinStopReason extends ClrHostValue {
  readonly [resinStopReasonBrand]: true;
}

export interface ResinStopReasonHostType extends HostType<ResinStopReason, EnumTypeTrait> {
  /** 已达到指定目标 */
  readonly targetReached: ResinStopReason;
  /** 允许的树脂已不足以继续领奖 */
  readonly resinExhausted: ResinStopReason;
  /** 界面未提供可用的树脂选项 */
  readonly noUsableOption: ResinStopReason;
}

declare global {
  namespace BetterGenshinImpact.GameTask.Common.Resin {
    type ResinKind = import("./ResinEnums").ResinKind;
    type ResinUsageMode = import("./ResinEnums").ResinUsageMode;
    type OriginalResinTier = import("./ResinEnums").OriginalResinTier;
    type ResinKindSupport = import("./ResinEnums").ResinKindSupport;
    type ResinStopReason = import("./ResinEnums").ResinStopReason;
  }
}

export {};
