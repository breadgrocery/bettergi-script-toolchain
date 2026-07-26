import type { HostType, ReferenceTypeTrait } from "../../../Microsoft/ClearScript/HostType";
import "../../V8SplitProxyHelpers";
import "./Expression";
import "./ExpressionType";

declare const constantExpressionBrand: unique symbol;
export interface ConstantExpression extends Omit<
  System.Linq.Expressions.Expression,
  "nodeType" | "type" | "value"
> {
  readonly [constantExpressionBrand]: true;
  readonly nodeType: System.Linq.Expressions.ExpressionType;
  readonly type: System.Type;
  readonly value: unknown;
}

declare global {
  namespace System.Linq.Expressions {
    type ConstantExpression = import("./ConstantExpression").ConstantExpression;
  }
}

export interface ConstantExpressionHostType extends HostType<
  ConstantExpression,
  ReferenceTypeTrait
> {}

export {};
