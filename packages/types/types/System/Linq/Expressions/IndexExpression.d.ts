import type {
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../Microsoft/ClearScript/HostType";
import "../../Collections/Generic/IEnumerable";
import "../../Collections/ObjectModel/ReadOnlyCollection";
import "../../Reflection/PropertyInfo";
import "../../V8SplitProxyHelpers";
import "./Expression";
import "./ExpressionType";
import "./IArgumentProvider";

declare const indexExpressionBrand: unique symbol;
export interface IndexExpression
  extends
    Omit<
      System.Linq.Expressions.Expression,
      | "argumentCount"
      | "arguments"
      | "getArgument"
      | "indexer"
      | "nodeType"
      | "object"
      | "type"
      | "update"
    >,
    System.Linq.Expressions.IArgumentProviderInput {
  readonly [indexExpressionBrand]: true;
  getArgument(index: number | StrongNumeric<Int32Host>): System.Linq.Expressions.Expression;
  readonly argumentCount: number;
  readonly arguments: System.Collections.ObjectModel.ReadOnlyCollection<System.Linq.Expressions.Expression>;
  readonly indexer: System.Reflection.PropertyInfo;
  readonly nodeType: System.Linq.Expressions.ExpressionType;
  readonly object: System.Linq.Expressions.Expression;
  readonly type: System.Type;
  update(
    object: System.Linq.Expressions.Expression,
    arguments: System.Collections.Generic.IEnumerable<System.Linq.Expressions.Expression> | null
  ): System.Linq.Expressions.IndexExpression;
}

declare global {
  namespace System.Linq.Expressions {
    type IndexExpression = import("./IndexExpression").IndexExpression;
  }
}

export interface IndexExpressionHostType extends HostType<IndexExpression, ReferenceTypeTrait> {}

export {};
