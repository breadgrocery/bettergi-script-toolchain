import type {
  ClrHostValue,
  HostType,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../V8SplitProxyHelpers";

declare const labelTargetBrand: unique symbol;
export interface LabelTarget extends ClrHostValue {
  readonly [labelTargetBrand]: true;
  readonly name: string;
  readonly type: System.Type;
  toString(): string;
}

declare global {
  namespace System.Linq.Expressions {
    type LabelTarget = import("./LabelTarget").LabelTarget;
  }
}

export interface LabelTargetHostType extends HostType<LabelTarget, ReferenceTypeTrait> {}

export {};
