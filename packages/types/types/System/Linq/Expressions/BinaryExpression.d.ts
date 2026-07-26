import type { HostType, ReferenceTypeTrait } from "../../../Microsoft/ClearScript/HostType";
import "../../Reflection/MethodInfo";
import "./Expression";
import "./LambdaExpression";

declare const binaryExpressionBrand: unique symbol;
export interface BinaryExpression extends Omit<
  System.Linq.Expressions.Expression,
  | "canReduce"
  | "conversion"
  | "isLifted"
  | "isLiftedToNull"
  | "left"
  | "method"
  | "reduce"
  | "right"
  | "update"
> {
  readonly [binaryExpressionBrand]: true;
  readonly canReduce: boolean;
  readonly conversion: System.Linq.Expressions.LambdaExpression;
  readonly isLifted: boolean;
  readonly isLiftedToNull: boolean;
  readonly left: System.Linq.Expressions.Expression;
  readonly method: System.Reflection.MethodInfo;
  readonly right: System.Linq.Expressions.Expression;
  reduce(): System.Linq.Expressions.Expression;
  update(
    left: System.Linq.Expressions.Expression,
    conversion: System.Linq.Expressions.LambdaExpression | null,
    right: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.BinaryExpression;
}

declare global {
  namespace System.Linq.Expressions {
    type BinaryExpression = import("./BinaryExpression").BinaryExpression;
  }
}

export interface BinaryExpressionHostType extends HostType<BinaryExpression, ReferenceTypeTrait> {}

export {};
