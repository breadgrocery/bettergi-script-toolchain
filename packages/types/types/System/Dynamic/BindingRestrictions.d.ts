import type {
  ClrHostValue,
  HostType,
  ReferenceTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import "../Collections/Generic/IList";
import "../Linq/Expressions/Expression";
import "../V8SplitProxyHelpers";
import "./DynamicMetaObject";

declare const bindingRestrictionsBrand: unique symbol;
export interface BindingRestrictions extends ClrHostValue {
  readonly [bindingRestrictionsBrand]: true;
  merge(restrictions: System.Dynamic.BindingRestrictions): System.Dynamic.BindingRestrictions;
  toExpression(): System.Linq.Expressions.Expression;
}

declare global {
  namespace System.Dynamic {
    type BindingRestrictions = import("./BindingRestrictions").BindingRestrictions;
  }
}

export interface BindingRestrictionsHostType extends HostType<
  BindingRestrictions,
  ReferenceTypeTrait
> {
  readonly empty: System.Dynamic.BindingRestrictions;
  getTypeRestriction(
    expression: System.Linq.Expressions.Expression,
    type: System.Type
  ): System.Dynamic.BindingRestrictions;
  getInstanceRestriction(
    expression: System.Linq.Expressions.Expression,
    instance: unknown | null
  ): System.Dynamic.BindingRestrictions;
  getExpressionRestriction(
    expression: System.Linq.Expressions.Expression
  ): System.Dynamic.BindingRestrictions;
  combine(
    contributingObjects: System.Collections.Generic.IList<System.Dynamic.DynamicMetaObject> | null
  ): System.Dynamic.BindingRestrictions;
}

export {};
