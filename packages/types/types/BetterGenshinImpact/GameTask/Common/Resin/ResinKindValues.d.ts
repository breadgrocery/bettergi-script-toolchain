import type {
  ClrHostValue,
  EnumInput,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../../Microsoft/ClearScript/VoidResult";
import "./ResinEnums";

/**
 * 按树脂种类存放的一组值
 * @since 0.67.0
 */
declare const resinKindValuesBrand: unique symbol;
export interface ResinKindValues<T> extends ClrHostValue {
  readonly [resinKindValuesBrand]: true;
  /** 浓缩树脂对应的值 */
  condensed: T;
  /** 原粹树脂对应的值 */
  original: T;
  /** 须臾树脂对应的值 */
  transient: T;
  /** 脆弱树脂对应的值 */
  fragile: T;
  /** 按树脂种类读写 */
  item(kind: EnumInput<BetterGenshinImpact.GameTask.Common.Resin.ResinKind>): T;
  item(kind: EnumInput<BetterGenshinImpact.GameTask.Common.Resin.ResinKind>, value: T): VoidResult;
}

declare global {
  namespace BetterGenshinImpact.GameTask.Common.Resin {
    type ResinKindValues<T> = import("./ResinKindValues").ResinKindValues<T>;
  }
}

export interface ResinKindValuesHostType<T> extends HostType<
  ResinKindValues<T>,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): ResinKindValues<T>;
}

export {};
