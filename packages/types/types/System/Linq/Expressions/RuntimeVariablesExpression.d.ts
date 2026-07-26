import type { HostType, ReferenceTypeTrait } from "../../../Microsoft/ClearScript/HostType";
import "../../Collections/Generic/IEnumerable";
import "../../Collections/ObjectModel/ReadOnlyCollection";
import "../../V8SplitProxyHelpers";
import "./Expression";
import "./ExpressionType";
import "./ParameterExpression";

declare const runtimeVariablesExpressionBrand: unique symbol;
export interface RuntimeVariablesExpression extends Omit<
  System.Linq.Expressions.Expression,
  "nodeType" | "type" | "update" | "variables"
> {
  readonly [runtimeVariablesExpressionBrand]: true;
  readonly nodeType: System.Linq.Expressions.ExpressionType;
  readonly type: System.Type;
  readonly variables: System.Collections.ObjectModel.ReadOnlyCollection<System.Linq.Expressions.ParameterExpression>;
  update(
    variables: System.Collections.Generic.IEnumerable<System.Linq.Expressions.ParameterExpression>
  ): System.Linq.Expressions.RuntimeVariablesExpression;
}

declare global {
  namespace System.Linq.Expressions {
    type RuntimeVariablesExpression =
      import("./RuntimeVariablesExpression").RuntimeVariablesExpression;
  }
}

export interface RuntimeVariablesExpressionHostType extends HostType<
  RuntimeVariablesExpression,
  ReferenceTypeTrait
> {}

export {};
