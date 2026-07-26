import type { HostType, ReferenceTypeTrait } from "../../../Microsoft/ClearScript/HostType";
import "../../V8SplitProxyHelpers";
import "./Expression";
import "./ExpressionType";
import "./GotoExpressionKind";
import "./LabelTarget";

declare const gotoExpressionBrand: unique symbol;
export interface GotoExpression extends Omit<
  System.Linq.Expressions.Expression,
  "kind" | "nodeType" | "target" | "type" | "update" | "value"
> {
  readonly [gotoExpressionBrand]: true;
  readonly kind: System.Linq.Expressions.GotoExpressionKind;
  readonly nodeType: System.Linq.Expressions.ExpressionType;
  readonly target: System.Linq.Expressions.LabelTarget;
  readonly type: System.Type;
  readonly value: System.Linq.Expressions.Expression;
  update(
    target: System.Linq.Expressions.LabelTarget,
    value: System.Linq.Expressions.Expression | null
  ): System.Linq.Expressions.GotoExpression;
}

declare global {
  namespace System.Linq.Expressions {
    type GotoExpression = import("./GotoExpression").GotoExpression;
  }
}

export interface GotoExpressionHostType extends HostType<GotoExpression, ReferenceTypeTrait> {}

export {};
