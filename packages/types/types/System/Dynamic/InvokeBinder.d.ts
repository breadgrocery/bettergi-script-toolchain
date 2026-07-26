import type { HostArray, HostType, ReferenceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import "../V8SplitProxyHelpers";
import "./CallInfo";
import "./DynamicMetaObject";
import "./DynamicMetaObjectBinder";

declare const invokeBinderBrand: unique symbol;
export interface InvokeBinder extends Omit<
  System.Dynamic.DynamicMetaObjectBinder,
  "bind" | "callInfo" | "fallbackInvoke" | "returnType"
> {
  readonly [invokeBinderBrand]: true;
  bind(
    target: System.Dynamic.DynamicMetaObject,
    args: HostArray<System.Dynamic.DynamicMetaObject>
  ): System.Dynamic.DynamicMetaObject;
  fallbackInvoke(
    target: System.Dynamic.DynamicMetaObject,
    args: HostArray<System.Dynamic.DynamicMetaObject>
  ): System.Dynamic.DynamicMetaObject;
  fallbackInvoke(
    target: System.Dynamic.DynamicMetaObject,
    args: HostArray<System.Dynamic.DynamicMetaObject>,
    errorSuggestion: System.Dynamic.DynamicMetaObject | null
  ): System.Dynamic.DynamicMetaObject;
  readonly callInfo: System.Dynamic.CallInfo;
  readonly returnType: System.Type;
}

declare global {
  namespace System.Dynamic {
    type InvokeBinder = import("./InvokeBinder").InvokeBinder;
  }
}

export interface InvokeBinderHostType extends HostType<InvokeBinder, ReferenceTypeTrait> {}

export {};
