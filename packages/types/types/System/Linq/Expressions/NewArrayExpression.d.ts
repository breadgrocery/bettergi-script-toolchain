import type { HostType, ReferenceTypeTrait } from "../../../Microsoft/ClearScript/HostType";
import "../../Collections/Generic/IEnumerable";
import "../../Collections/ObjectModel/ReadOnlyCollection";
import "../../V8SplitProxyHelpers";
import "./Expression";

declare const newArrayExpressionBrand: unique symbol;
export interface NewArrayExpression extends Omit<
  System.Linq.Expressions.Expression,
  "expressions" | "type" | "update"
> {
  readonly [newArrayExpressionBrand]: true;
  readonly expressions: System.Collections.ObjectModel.ReadOnlyCollection<System.Linq.Expressions.Expression>;
  readonly type: System.Type;
  update(
    expressions: System.Collections.Generic.IEnumerable<System.Linq.Expressions.Expression>
  ): System.Linq.Expressions.NewArrayExpression;
}

declare global {
  namespace System.Linq.Expressions {
    type NewArrayExpression = import("./NewArrayExpression").NewArrayExpression;
  }
}

export interface NewArrayExpressionHostType extends HostType<
  NewArrayExpression,
  ReferenceTypeTrait
> {}

export {};
