import type { HostType, ReferenceTypeTrait } from "../../../Microsoft/ClearScript/HostType";
import "../../Reflection/MethodInfo";
import "../../V8SplitProxyHelpers";
import "./Expression";
import "./ExpressionType";

declare const unaryExpressionBrand: unique symbol;
export interface UnaryExpression extends Omit<
  System.Linq.Expressions.Expression,
  | "canReduce"
  | "isLifted"
  | "isLiftedToNull"
  | "method"
  | "nodeType"
  | "operand"
  | "reduce"
  | "type"
  | "update"
> {
  readonly [unaryExpressionBrand]: true;
  readonly canReduce: boolean;
  readonly isLifted: boolean;
  readonly isLiftedToNull: boolean;
  readonly method: System.Reflection.MethodInfo;
  readonly nodeType: System.Linq.Expressions.ExpressionType;
  readonly operand: System.Linq.Expressions.Expression;
  readonly type: System.Type;
  reduce(): System.Linq.Expressions.Expression;
  update(operand: System.Linq.Expressions.Expression): System.Linq.Expressions.UnaryExpression;
}

declare global {
  namespace System.Linq.Expressions {
    type UnaryExpression = import("./UnaryExpression").UnaryExpression;
  }
}

export interface UnaryExpressionHostType extends HostType<UnaryExpression, ReferenceTypeTrait> {}

export {};
