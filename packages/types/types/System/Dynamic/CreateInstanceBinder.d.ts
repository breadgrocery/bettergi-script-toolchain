import type { HostArray, HostType, ReferenceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import "../V8SplitProxyHelpers";
import "./CallInfo";
import "./DynamicMetaObject";
import "./DynamicMetaObjectBinder";

declare const createInstanceBinderBrand: unique symbol;
export interface CreateInstanceBinder extends Omit<
  System.Dynamic.DynamicMetaObjectBinder,
  "bind" | "callInfo" | "fallbackCreateInstance" | "returnType"
> {
  readonly [createInstanceBinderBrand]: true;
  bind(
    target: System.Dynamic.DynamicMetaObject,
    args: HostArray<System.Dynamic.DynamicMetaObject>
  ): System.Dynamic.DynamicMetaObject;
  fallbackCreateInstance(
    target: System.Dynamic.DynamicMetaObject,
    args: HostArray<System.Dynamic.DynamicMetaObject>
  ): System.Dynamic.DynamicMetaObject;
  fallbackCreateInstance(
    target: System.Dynamic.DynamicMetaObject,
    args: HostArray<System.Dynamic.DynamicMetaObject>,
    errorSuggestion: System.Dynamic.DynamicMetaObject | null
  ): System.Dynamic.DynamicMetaObject;
  readonly callInfo: System.Dynamic.CallInfo;
  readonly returnType: System.Type;
}

declare global {
  namespace System.Dynamic {
    type CreateInstanceBinder = import("./CreateInstanceBinder").CreateInstanceBinder;
  }
}

export interface CreateInstanceBinderHostType extends HostType<
  CreateInstanceBinder,
  ReferenceTypeTrait
> {}

export {};
