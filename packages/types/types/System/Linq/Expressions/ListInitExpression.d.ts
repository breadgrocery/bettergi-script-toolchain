import type { HostType, ReferenceTypeTrait } from "../../../Microsoft/ClearScript/HostType";
import "../../Collections/Generic/IEnumerable";
import "../../Collections/ObjectModel/ReadOnlyCollection";
import "../../V8SplitProxyHelpers";
import "./ElementInit";
import "./Expression";
import "./ExpressionType";
import "./NewExpression";

declare const listInitExpressionBrand: unique symbol;
export interface ListInitExpression extends Omit<
  System.Linq.Expressions.Expression,
  "canReduce" | "initializers" | "newExpression" | "nodeType" | "reduce" | "type" | "update"
> {
  readonly [listInitExpressionBrand]: true;
  readonly canReduce: boolean;
  readonly initializers: System.Collections.ObjectModel.ReadOnlyCollection<System.Linq.Expressions.ElementInit>;
  readonly newExpression: System.Linq.Expressions.NewExpression;
  readonly nodeType: System.Linq.Expressions.ExpressionType;
  readonly type: System.Type;
  reduce(): System.Linq.Expressions.Expression;
  update(
    newExpression: System.Linq.Expressions.NewExpression,
    initializers: System.Collections.Generic.IEnumerable<System.Linq.Expressions.ElementInit>
  ): System.Linq.Expressions.ListInitExpression;
}

declare global {
  namespace System.Linq.Expressions {
    type ListInitExpression = import("./ListInitExpression").ListInitExpression;
  }
}

export interface ListInitExpressionHostType extends HostType<
  ListInitExpression,
  ReferenceTypeTrait
> {}

export {};
