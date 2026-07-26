import type { HostType, ReferenceTypeTrait } from "../../../Microsoft/ClearScript/HostType";
import "../../V8SplitProxyHelpers";
import "./Expression";
import "./ExpressionType";

declare const defaultExpressionBrand: unique symbol;
export interface DefaultExpression extends Omit<
  System.Linq.Expressions.Expression,
  "nodeType" | "type"
> {
  readonly [defaultExpressionBrand]: true;
  readonly nodeType: System.Linq.Expressions.ExpressionType;
  readonly type: System.Type;
}

declare global {
  namespace System.Linq.Expressions {
    type DefaultExpression = import("./DefaultExpression").DefaultExpression;
  }
}

export interface DefaultExpressionHostType extends HostType<
  DefaultExpression,
  ReferenceTypeTrait
> {}

export {};
