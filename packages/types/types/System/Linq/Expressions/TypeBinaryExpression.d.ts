import type { HostType, ReferenceTypeTrait } from "../../../Microsoft/ClearScript/HostType";
import "../../V8SplitProxyHelpers";
import "./Expression";
import "./ExpressionType";

declare const typeBinaryExpressionBrand: unique symbol;
export interface TypeBinaryExpression extends Omit<
  System.Linq.Expressions.Expression,
  "expression" | "nodeType" | "typeOperand" | "type" | "update"
> {
  readonly [typeBinaryExpressionBrand]: true;
  readonly expression: System.Linq.Expressions.Expression;
  readonly nodeType: System.Linq.Expressions.ExpressionType;
  readonly typeOperand: System.Type;
  readonly type: System.Type;
  update(
    expression: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.TypeBinaryExpression;
}

declare global {
  namespace System.Linq.Expressions {
    type TypeBinaryExpression = import("./TypeBinaryExpression").TypeBinaryExpression;
  }
}

export interface TypeBinaryExpressionHostType extends HostType<
  TypeBinaryExpression,
  ReferenceTypeTrait
> {}

export {};
