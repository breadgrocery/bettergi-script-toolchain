import type {
  ClrHostValue,
  HostArray,
  HostType,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../Collections/ObjectModel/ReadOnlyCollection";
import "../../Linq/Expressions/Expression";
import "../../Linq/Expressions/LabelTarget";
import "../../Linq/Expressions/ParameterExpression";
import "./CallSite";

declare const callSiteBinderBrand: unique symbol;
export interface CallSiteBinder extends ClrHostValue {
  readonly [callSiteBinderBrand]: true;
  bind(
    args: HostArray<unknown>,
    parameters: System.Collections.ObjectModel.ReadOnlyCollection<System.Linq.Expressions.ParameterExpression>,
    returnLabel: System.Linq.Expressions.LabelTarget
  ): System.Linq.Expressions.Expression;
  bindDelegate<T>(
    type1: HostType<T>,
    site: System.Runtime.CompilerServices.CallSite<T>,
    args: HostArray<unknown>
  ): T;
}

declare global {
  namespace System.Runtime.CompilerServices {
    type CallSiteBinder = import("./CallSiteBinder").CallSiteBinder;
  }
}

export interface CallSiteBinderHostType extends HostType<CallSiteBinder, ReferenceTypeTrait> {
  readonly updateLabel: System.Linq.Expressions.LabelTarget;
}

export {};
