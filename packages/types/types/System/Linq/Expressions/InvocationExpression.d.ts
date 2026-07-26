import type {
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../Microsoft/ClearScript/HostType";
import "../../Collections/Generic/IEnumerable";
import "../../Collections/ObjectModel/ReadOnlyCollection";
import "../../V8SplitProxyHelpers";
import "./Expression";
import "./ExpressionType";
import "./IArgumentProvider";

declare const invocationExpressionBrand: unique symbol;
export interface InvocationExpression
  extends
    Omit<
      System.Linq.Expressions.Expression,
      "argumentCount" | "arguments" | "expression" | "getArgument" | "nodeType" | "type" | "update"
    >,
    System.Linq.Expressions.IArgumentProviderInput {
  readonly [invocationExpressionBrand]: true;
  getArgument(index: number | StrongNumeric<Int32Host>): System.Linq.Expressions.Expression;
  readonly argumentCount: number;
  readonly arguments: System.Collections.ObjectModel.ReadOnlyCollection<System.Linq.Expressions.Expression>;
  readonly expression: System.Linq.Expressions.Expression;
  readonly nodeType: System.Linq.Expressions.ExpressionType;
  readonly type: System.Type;
  update(
    expression: System.Linq.Expressions.Expression,
    arguments: System.Collections.Generic.IEnumerable<System.Linq.Expressions.Expression> | null
  ): System.Linq.Expressions.InvocationExpression;
}

declare global {
  namespace System.Linq.Expressions {
    type InvocationExpression = import("./InvocationExpression").InvocationExpression;
  }
}

export interface InvocationExpressionHostType extends HostType<
  InvocationExpression,
  ReferenceTypeTrait
> {}

export {};
