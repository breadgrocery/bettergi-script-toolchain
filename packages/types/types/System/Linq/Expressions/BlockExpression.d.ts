import type { HostType, ReferenceTypeTrait } from "../../../Microsoft/ClearScript/HostType";
import "../../Collections/Generic/IEnumerable";
import "../../Collections/ObjectModel/ReadOnlyCollection";
import "../../V8SplitProxyHelpers";
import "./Expression";
import "./ExpressionType";
import "./ParameterExpression";

declare const blockExpressionBrand: unique symbol;
export interface BlockExpression extends Omit<
  System.Linq.Expressions.Expression,
  "expressions" | "nodeType" | "result" | "type" | "update" | "variables"
> {
  readonly [blockExpressionBrand]: true;
  readonly expressions: System.Collections.ObjectModel.ReadOnlyCollection<System.Linq.Expressions.Expression>;
  readonly nodeType: System.Linq.Expressions.ExpressionType;
  readonly result: System.Linq.Expressions.Expression;
  readonly type: System.Type;
  readonly variables: System.Collections.ObjectModel.ReadOnlyCollection<System.Linq.Expressions.ParameterExpression>;
  update(
    variables: System.Collections.Generic.IEnumerable<System.Linq.Expressions.ParameterExpression> | null,
    expressions: System.Collections.Generic.IEnumerable<System.Linq.Expressions.Expression>
  ): System.Linq.Expressions.BlockExpression;
}

declare global {
  namespace System.Linq.Expressions {
    type BlockExpression = import("./BlockExpression").BlockExpression;
  }
}

export interface BlockExpressionHostType extends HostType<BlockExpression, ReferenceTypeTrait> {}

export {};
