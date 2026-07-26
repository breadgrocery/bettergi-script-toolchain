import type { HostType, ReferenceTypeTrait } from "../../../Microsoft/ClearScript/HostType";
import "../../V8SplitProxyHelpers";
import "./Expression";
import "./ExpressionType";
import "./LabelTarget";

declare const labelExpressionBrand: unique symbol;
export interface LabelExpression extends Omit<
  System.Linq.Expressions.Expression,
  "defaultValue" | "nodeType" | "target" | "type" | "update"
> {
  readonly [labelExpressionBrand]: true;
  readonly defaultValue: System.Linq.Expressions.Expression;
  readonly nodeType: System.Linq.Expressions.ExpressionType;
  readonly target: System.Linq.Expressions.LabelTarget;
  readonly type: System.Type;
  update(
    target: System.Linq.Expressions.LabelTarget,
    defaultValue: System.Linq.Expressions.Expression | null
  ): System.Linq.Expressions.LabelExpression;
}

declare global {
  namespace System.Linq.Expressions {
    type LabelExpression = import("./LabelExpression").LabelExpression;
  }
}

export interface LabelExpressionHostType extends HostType<LabelExpression, ReferenceTypeTrait> {}

export {};
