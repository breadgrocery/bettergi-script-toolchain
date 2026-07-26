import type { HostType, ReferenceTypeTrait } from "../../../Microsoft/ClearScript/HostType";
import "../../Collections/Generic/IEnumerable";
import "../../Collections/ObjectModel/ReadOnlyCollection";
import "../../V8SplitProxyHelpers";
import "./Expression";
import "./ExpressionType";
import "./MemberBinding";
import "./NewExpression";

declare const memberInitExpressionBrand: unique symbol;
export interface MemberInitExpression extends Omit<
  System.Linq.Expressions.Expression,
  "bindings" | "canReduce" | "newExpression" | "nodeType" | "reduce" | "type" | "update"
> {
  readonly [memberInitExpressionBrand]: true;
  readonly bindings: System.Collections.ObjectModel.ReadOnlyCollection<System.Linq.Expressions.MemberBinding>;
  readonly canReduce: boolean;
  readonly newExpression: System.Linq.Expressions.NewExpression;
  readonly nodeType: System.Linq.Expressions.ExpressionType;
  readonly type: System.Type;
  reduce(): System.Linq.Expressions.Expression;
  update(
    newExpression: System.Linq.Expressions.NewExpression,
    bindings: System.Collections.Generic.IEnumerable<System.Linq.Expressions.MemberBinding>
  ): System.Linq.Expressions.MemberInitExpression;
}

declare global {
  namespace System.Linq.Expressions {
    type MemberInitExpression = import("./MemberInitExpression").MemberInitExpression;
  }
}

export interface MemberInitExpressionHostType extends HostType<
  MemberInitExpression,
  ReferenceTypeTrait
> {}

export {};
