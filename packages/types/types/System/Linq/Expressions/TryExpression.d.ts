import type { HostType, ReferenceTypeTrait } from "../../../Microsoft/ClearScript/HostType";
import "../../Collections/Generic/IEnumerable";
import "../../Collections/ObjectModel/ReadOnlyCollection";
import "../../V8SplitProxyHelpers";
import "./CatchBlock";
import "./Expression";
import "./ExpressionType";

declare const tryExpressionBrand: unique symbol;
export interface TryExpression extends Omit<
  System.Linq.Expressions.Expression,
  "body" | "fault" | "finally" | "handlers" | "nodeType" | "type" | "update"
> {
  readonly [tryExpressionBrand]: true;
  readonly body: System.Linq.Expressions.Expression;
  readonly fault: System.Linq.Expressions.Expression;
  readonly finally: System.Linq.Expressions.Expression;
  readonly handlers: System.Collections.ObjectModel.ReadOnlyCollection<System.Linq.Expressions.CatchBlock>;
  readonly nodeType: System.Linq.Expressions.ExpressionType;
  readonly type: System.Type;
  update(
    body: System.Linq.Expressions.Expression,
    handlers: System.Collections.Generic.IEnumerable<System.Linq.Expressions.CatchBlock> | null,
    finally_: System.Linq.Expressions.Expression | null,
    fault: System.Linq.Expressions.Expression | null
  ): System.Linq.Expressions.TryExpression;
}

declare global {
  namespace System.Linq.Expressions {
    type TryExpression = import("./TryExpression").TryExpression;
  }
}

export interface TryExpressionHostType extends HostType<TryExpression, ReferenceTypeTrait> {}

export {};
