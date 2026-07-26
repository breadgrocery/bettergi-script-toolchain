import type { HostType, ReferenceTypeTrait } from "../../../Microsoft/ClearScript/HostType";
import "../../Collections/Generic/IEnumerable";
import "../../Collections/ObjectModel/ReadOnlyCollection";
import "./ElementInit";
import "./MemberBinding";

declare const memberListBindingBrand: unique symbol;
export interface MemberListBinding extends Omit<
  System.Linq.Expressions.MemberBinding,
  "initializers" | "update"
> {
  readonly [memberListBindingBrand]: true;
  readonly initializers: System.Collections.ObjectModel.ReadOnlyCollection<System.Linq.Expressions.ElementInit>;
  update(
    initializers: System.Collections.Generic.IEnumerable<System.Linq.Expressions.ElementInit>
  ): System.Linq.Expressions.MemberListBinding;
}

declare global {
  namespace System.Linq.Expressions {
    type MemberListBinding = import("./MemberListBinding").MemberListBinding;
  }
}

export interface MemberListBindingHostType extends HostType<
  MemberListBinding,
  ReferenceTypeTrait
> {}

export {};
