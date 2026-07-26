import type {
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../Microsoft/ClearScript/HostType";
import "../../Collections/Generic/IEnumerable";
import "../../Collections/ObjectModel/ReadOnlyCollection";
import "../../Reflection/MethodInfo";
import "../../V8SplitProxyHelpers";
import "./Expression";
import "./ExpressionType";
import "./IArgumentProvider";

declare const methodCallExpressionBrand: unique symbol;
export interface MethodCallExpression
  extends
    Omit<
      System.Linq.Expressions.Expression,
      | "argumentCount"
      | "arguments"
      | "getArgument"
      | "method"
      | "nodeType"
      | "object"
      | "type"
      | "update"
    >,
    System.Linq.Expressions.IArgumentProviderInput {
  readonly [methodCallExpressionBrand]: true;
  getArgument(index: number | StrongNumeric<Int32Host>): System.Linq.Expressions.Expression;
  readonly argumentCount: number;
  readonly arguments: System.Collections.ObjectModel.ReadOnlyCollection<System.Linq.Expressions.Expression>;
  readonly method: System.Reflection.MethodInfo;
  readonly nodeType: System.Linq.Expressions.ExpressionType;
  readonly object: System.Linq.Expressions.Expression;
  readonly type: System.Type;
  update(
    object: System.Linq.Expressions.Expression | null,
    arguments: System.Collections.Generic.IEnumerable<System.Linq.Expressions.Expression> | null
  ): System.Linq.Expressions.MethodCallExpression;
}

declare global {
  namespace System.Linq.Expressions {
    type MethodCallExpression = import("./MethodCallExpression").MethodCallExpression;
  }
}

export interface MethodCallExpressionHostType extends HostType<
  MethodCallExpression,
  ReferenceTypeTrait
> {}

export {};
