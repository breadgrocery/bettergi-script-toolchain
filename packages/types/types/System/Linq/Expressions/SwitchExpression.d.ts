import type { HostType, ReferenceTypeTrait } from "../../../Microsoft/ClearScript/HostType";
import "../../Collections/Generic/IEnumerable";
import "../../Collections/ObjectModel/ReadOnlyCollection";
import "../../Reflection/MethodInfo";
import "../../V8SplitProxyHelpers";
import "./Expression";
import "./ExpressionType";
import "./SwitchCase";

declare const switchExpressionBrand: unique symbol;
export interface SwitchExpression extends Omit<
  System.Linq.Expressions.Expression,
  "cases" | "comparison" | "defaultBody" | "nodeType" | "switchValue" | "type" | "update"
> {
  readonly [switchExpressionBrand]: true;
  readonly cases: System.Collections.ObjectModel.ReadOnlyCollection<System.Linq.Expressions.SwitchCase>;
  readonly comparison: System.Reflection.MethodInfo;
  readonly defaultBody: System.Linq.Expressions.Expression;
  readonly nodeType: System.Linq.Expressions.ExpressionType;
  readonly switchValue: System.Linq.Expressions.Expression;
  readonly type: System.Type;
  update(
    switchValue: System.Linq.Expressions.Expression,
    cases: System.Collections.Generic.IEnumerable<System.Linq.Expressions.SwitchCase> | null,
    defaultBody: System.Linq.Expressions.Expression | null
  ): System.Linq.Expressions.SwitchExpression;
}

declare global {
  namespace System.Linq.Expressions {
    type SwitchExpression = import("./SwitchExpression").SwitchExpression;
  }
}

export interface SwitchExpressionHostType extends HostType<SwitchExpression, ReferenceTypeTrait> {}

export {};
