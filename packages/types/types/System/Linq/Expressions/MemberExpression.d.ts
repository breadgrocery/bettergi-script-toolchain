import type { HostType, ReferenceTypeTrait } from "../../../Microsoft/ClearScript/HostType";
import "../../Reflection/MemberInfo";
import "./Expression";
import "./ExpressionType";

declare const memberExpressionBrand: unique symbol;
export interface MemberExpression extends Omit<
  System.Linq.Expressions.Expression,
  "expression" | "member" | "nodeType" | "update"
> {
  readonly [memberExpressionBrand]: true;
  readonly expression: System.Linq.Expressions.Expression;
  readonly member: System.Reflection.MemberInfo;
  readonly nodeType: System.Linq.Expressions.ExpressionType;
  update(
    expression: System.Linq.Expressions.Expression | null
  ): System.Linq.Expressions.MemberExpression;
}

declare global {
  namespace System.Linq.Expressions {
    type MemberExpression = import("./MemberExpression").MemberExpression;
  }
}

export interface MemberExpressionHostType extends HostType<MemberExpression, ReferenceTypeTrait> {}

export {};
