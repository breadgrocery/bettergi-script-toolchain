import type { HostType, ReferenceTypeTrait } from "../../../Microsoft/ClearScript/HostType";
import "../../Collections/Generic/IEnumerable";
import "../../Collections/ObjectModel/ReadOnlyCollection";
import "./MemberBinding";

declare const memberMemberBindingBrand: unique symbol;
export interface MemberMemberBinding extends Omit<
  System.Linq.Expressions.MemberBinding,
  "bindings" | "update"
> {
  readonly [memberMemberBindingBrand]: true;
  readonly bindings: System.Collections.ObjectModel.ReadOnlyCollection<System.Linq.Expressions.MemberBinding>;
  update(
    bindings: System.Collections.Generic.IEnumerable<System.Linq.Expressions.MemberBinding>
  ): System.Linq.Expressions.MemberMemberBinding;
}

declare global {
  namespace System.Linq.Expressions {
    type MemberMemberBinding = import("./MemberMemberBinding").MemberMemberBinding;
  }
}

export interface MemberMemberBindingHostType extends HostType<
  MemberMemberBinding,
  ReferenceTypeTrait
> {}

export {};
