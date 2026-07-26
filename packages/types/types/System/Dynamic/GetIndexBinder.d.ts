import type { HostArray, HostType, ReferenceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import "../V8SplitProxyHelpers";
import "./CallInfo";
import "./DynamicMetaObject";
import "./DynamicMetaObjectBinder";

declare const getIndexBinderBrand: unique symbol;
export interface GetIndexBinder extends Omit<
  System.Dynamic.DynamicMetaObjectBinder,
  "bind" | "callInfo" | "fallbackGetIndex" | "returnType"
> {
  readonly [getIndexBinderBrand]: true;
  bind(
    target: System.Dynamic.DynamicMetaObject,
    args: HostArray<System.Dynamic.DynamicMetaObject>
  ): System.Dynamic.DynamicMetaObject;
  fallbackGetIndex(
    target: System.Dynamic.DynamicMetaObject,
    indexes: HostArray<System.Dynamic.DynamicMetaObject>
  ): System.Dynamic.DynamicMetaObject;
  fallbackGetIndex(
    target: System.Dynamic.DynamicMetaObject,
    indexes: HostArray<System.Dynamic.DynamicMetaObject>,
    errorSuggestion: System.Dynamic.DynamicMetaObject | null
  ): System.Dynamic.DynamicMetaObject;
  readonly callInfo: System.Dynamic.CallInfo;
  readonly returnType: System.Type;
}

declare global {
  namespace System.Dynamic {
    type GetIndexBinder = import("./GetIndexBinder").GetIndexBinder;
  }
}

export interface GetIndexBinderHostType extends HostType<GetIndexBinder, ReferenceTypeTrait> {}

export {};
