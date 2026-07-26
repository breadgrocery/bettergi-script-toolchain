import type { HostType, ReferenceTypeTrait } from "../../../Microsoft/ClearScript/HostType";
import "../../V8SplitProxyHelpers";
import "./Expression";
import "./ExpressionType";

declare const parameterExpressionBrand: unique symbol;
export interface ParameterExpression extends Omit<
  System.Linq.Expressions.Expression,
  "isByRef" | "name" | "nodeType" | "type"
> {
  readonly [parameterExpressionBrand]: true;
  readonly isByRef: boolean;
  readonly name: string;
  readonly nodeType: System.Linq.Expressions.ExpressionType;
  readonly type: System.Type;
}

declare global {
  namespace System.Linq.Expressions {
    type ParameterExpression = import("./ParameterExpression").ParameterExpression;
  }
}

export interface ParameterExpressionHostType extends HostType<
  ParameterExpression,
  ReferenceTypeTrait
> {}

export {};
