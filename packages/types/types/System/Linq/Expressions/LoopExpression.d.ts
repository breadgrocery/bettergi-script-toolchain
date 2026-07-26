import type { HostType, ReferenceTypeTrait } from "../../../Microsoft/ClearScript/HostType";
import "../../V8SplitProxyHelpers";
import "./Expression";
import "./ExpressionType";
import "./LabelTarget";

declare const loopExpressionBrand: unique symbol;
export interface LoopExpression extends Omit<
  System.Linq.Expressions.Expression,
  "body" | "breakLabel" | "continueLabel" | "nodeType" | "type" | "update"
> {
  readonly [loopExpressionBrand]: true;
  readonly body: System.Linq.Expressions.Expression;
  readonly breakLabel: System.Linq.Expressions.LabelTarget;
  readonly continueLabel: System.Linq.Expressions.LabelTarget;
  readonly nodeType: System.Linq.Expressions.ExpressionType;
  readonly type: System.Type;
  update(
    breakLabel: System.Linq.Expressions.LabelTarget | null,
    continueLabel: System.Linq.Expressions.LabelTarget | null,
    body: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.LoopExpression;
}

declare global {
  namespace System.Linq.Expressions {
    type LoopExpression = import("./LoopExpression").LoopExpression;
  }
}

export interface LoopExpressionHostType extends HostType<LoopExpression, ReferenceTypeTrait> {}

export {};
