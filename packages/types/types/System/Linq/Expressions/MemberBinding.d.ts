import type {
  ClrHostValue,
  HostType,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../Reflection/MemberInfo";
import "./MemberBindingType";

declare const memberBindingBrand: unique symbol;
export interface MemberBinding extends ClrHostValue {
  readonly [memberBindingBrand]: true;
  readonly bindingType: System.Linq.Expressions.MemberBindingType;
  readonly member: System.Reflection.MemberInfo;
  toString(): string;
}

declare global {
  namespace System.Linq.Expressions {
    type MemberBinding = import("./MemberBinding").MemberBinding;
  }
}

export interface MemberBindingHostType extends HostType<MemberBinding, ReferenceTypeTrait> {}

export {};
