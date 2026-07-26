import type { HostType, ReferenceTypeTrait } from "../../../Microsoft/ClearScript/HostType";
import "../../V8SplitProxyHelpers";
import "./Expression";
import "./ExpressionType";

declare const conditionalExpressionBrand: unique symbol;
export interface ConditionalExpression extends Omit<
  System.Linq.Expressions.Expression,
  "ifFalse" | "ifTrue" | "nodeType" | "test" | "type" | "update"
> {
  readonly [conditionalExpressionBrand]: true;
  readonly ifFalse: System.Linq.Expressions.Expression;
  readonly ifTrue: System.Linq.Expressions.Expression;
  readonly nodeType: System.Linq.Expressions.ExpressionType;
  readonly test: System.Linq.Expressions.Expression;
  readonly type: System.Type;
  update(
    test: System.Linq.Expressions.Expression,
    ifTrue: System.Linq.Expressions.Expression,
    ifFalse: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.ConditionalExpression;
}

declare global {
  namespace System.Linq.Expressions {
    type ConditionalExpression = import("./ConditionalExpression").ConditionalExpression;
  }
}

export interface ConditionalExpressionHostType extends HostType<
  ConditionalExpression,
  ReferenceTypeTrait
> {}

export {};
