import type { HostArray, HostType, ReferenceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import "../V8SplitProxyHelpers";
import "./CallInfo";
import "./DynamicMetaObject";
import "./DynamicMetaObjectBinder";

declare const setIndexBinderBrand: unique symbol;
export interface SetIndexBinder extends Omit<
  System.Dynamic.DynamicMetaObjectBinder,
  "bind" | "callInfo" | "fallbackSetIndex" | "returnType"
> {
  readonly [setIndexBinderBrand]: true;
  bind(
    target: System.Dynamic.DynamicMetaObject,
    args: HostArray<System.Dynamic.DynamicMetaObject>
  ): System.Dynamic.DynamicMetaObject;
  fallbackSetIndex(
    target: System.Dynamic.DynamicMetaObject,
    indexes: HostArray<System.Dynamic.DynamicMetaObject>,
    value: System.Dynamic.DynamicMetaObject
  ): System.Dynamic.DynamicMetaObject;
  fallbackSetIndex(
    target: System.Dynamic.DynamicMetaObject,
    indexes: HostArray<System.Dynamic.DynamicMetaObject>,
    value: System.Dynamic.DynamicMetaObject,
    errorSuggestion: System.Dynamic.DynamicMetaObject | null
  ): System.Dynamic.DynamicMetaObject;
  readonly callInfo: System.Dynamic.CallInfo;
  readonly returnType: System.Type;
}

declare global {
  namespace System.Dynamic {
    type SetIndexBinder = import("./SetIndexBinder").SetIndexBinder;
  }
}

export interface SetIndexBinderHostType extends HostType<SetIndexBinder, ReferenceTypeTrait> {}

export {};
