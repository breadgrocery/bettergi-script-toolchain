import type { HostArray, HostType, ReferenceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import "../Collections/ObjectModel/ReadOnlyCollection";
import "../Linq/Expressions/Expression";
import "../Linq/Expressions/LabelTarget";
import "../Linq/Expressions/ParameterExpression";
import "../Runtime/CompilerServices/CallSiteBinder";
import "../V8SplitProxyHelpers";
import "./DynamicMetaObject";

declare const dynamicMetaObjectBinderBrand: unique symbol;
export interface DynamicMetaObjectBinder extends Omit<
  System.Runtime.CompilerServices.CallSiteBinder,
  "bind" | "defer" | "getUpdateExpression" | "returnType"
> {
  readonly [dynamicMetaObjectBinderBrand]: true;
  bind(
    args: HostArray<unknown>,
    parameters: System.Collections.ObjectModel.ReadOnlyCollection<System.Linq.Expressions.ParameterExpression>,
    returnLabel: System.Linq.Expressions.LabelTarget
  ): System.Linq.Expressions.Expression;
  bind(
    target: System.Dynamic.DynamicMetaObject,
    args: HostArray<System.Dynamic.DynamicMetaObject>
  ): System.Dynamic.DynamicMetaObject;
  defer(...args: System.Dynamic.DynamicMetaObject[]): System.Dynamic.DynamicMetaObject;
  defer(args: HostArray<System.Dynamic.DynamicMetaObject>): System.Dynamic.DynamicMetaObject;
  defer(
    target: System.Dynamic.DynamicMetaObject,
    ...args: System.Dynamic.DynamicMetaObject[]
  ): System.Dynamic.DynamicMetaObject;
  defer(
    target: System.Dynamic.DynamicMetaObject,
    args: HostArray<System.Dynamic.DynamicMetaObject>
  ): System.Dynamic.DynamicMetaObject;
  getUpdateExpression(type: System.Type): System.Linq.Expressions.Expression;
  readonly returnType: System.Type;
}

declare global {
  namespace System.Dynamic {
    type DynamicMetaObjectBinder = import("./DynamicMetaObjectBinder").DynamicMetaObjectBinder;
  }
}

export interface DynamicMetaObjectBinderHostType extends HostType<
  DynamicMetaObjectBinder,
  ReferenceTypeTrait
> {}

export {};
