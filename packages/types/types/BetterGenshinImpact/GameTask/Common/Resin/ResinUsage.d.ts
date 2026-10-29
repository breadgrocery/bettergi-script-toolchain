import type {
  ClrHostValue,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../../Microsoft/ClearScript/HostType";
import "./ResinEnums";
import "./ResinKindValues";

/**
 * 领奖任务共用的统一树脂设置
 * @since 0.67.0
 */
declare const resinUsageBrand: unique symbol;
export interface ResinUsage extends ClrHostValue {
  readonly [resinUsageBrand]: true;
  /** 使用方式 */
  mode: BetterGenshinImpact.GameTask.Common.Resin.ResinUsageMode;
  /** 指定领奖次数时的成功领奖次数 */
  runCount: number;
  /** 刷至耗尽、指定次数时允许使用的树脂开关 */
  allowed: BetterGenshinImpact.GameTask.Common.Resin.ResinKindValues<boolean>;
  /** 按树脂分别指定时各类树脂的领奖目标次数 */
  counts: BetterGenshinImpact.GameTask.Common.Resin.ResinKindValues<number>;
  /** 原粹树脂领奖档位策略 */
  originalTier: BetterGenshinImpact.GameTask.Common.Resin.OriginalResinTier;
}

declare global {
  namespace BetterGenshinImpact.GameTask.Common.Resin {
    type ResinUsage = import("./ResinUsage").ResinUsage;
  }
}

export interface ResinUsageHostType extends HostType<
  ResinUsage,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): ResinUsage;
}

export {};
