import type {
  ClrHostValue,
  HostType,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../V8SplitProxyHelpers";
import "./Expression";
import "./ParameterExpression";

declare const catchBlockBrand: unique symbol;
export interface CatchBlock extends ClrHostValue {
  readonly [catchBlockBrand]: true;
  readonly body: System.Linq.Expressions.Expression;
  readonly filter: System.Linq.Expressions.Expression;
  readonly test: System.Type;
  readonly variable: System.Linq.Expressions.ParameterExpression;
  toString(): string;
  update(
    variable: System.Linq.Expressions.ParameterExpression | null,
    filter: System.Linq.Expressions.Expression | null,
    body: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.CatchBlock;
}

declare global {
  namespace System.Linq.Expressions {
    type CatchBlock = import("./CatchBlock").CatchBlock;
  }
}

export interface CatchBlockHostType extends HostType<CatchBlock, ReferenceTypeTrait> {}

export {};
