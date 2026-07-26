import type {
  HostArray,
  HostType,
  InterfaceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../V8SplitProxyHelpers";
import "./Expression";
import "./IArgumentProvider";

declare const iDynamicExpressionInputBrand: unique symbol;
export interface IDynamicExpressionInput {
  readonly [iDynamicExpressionInputBrand]: true;
}

export interface IDynamicExpression
  extends Microsoft.ClearScript.ClrInterfaceView<IDynamicExpressionInput>, IDynamicExpressionInput {
  createCallSite(): unknown;
  readonly delegateType: System.Type;
  rewrite(args: HostArray<System.Linq.Expressions.Expression>): System.Linq.Expressions.Expression;
}

declare global {
  namespace System.Linq.Expressions {
    type IDynamicExpressionInput = import("./IDynamicExpression").IDynamicExpressionInput;
  }
}

declare global {
  namespace System.Linq.Expressions {
    type IDynamicExpression = import("./IDynamicExpression").IDynamicExpression;
  }
}

export interface IDynamicExpressionHostType extends HostType<
  IDynamicExpression,
  InterfaceTypeTrait
> {}

export {};
