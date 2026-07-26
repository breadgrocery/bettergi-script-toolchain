import type { HostArray, HostType, ReferenceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import "../V8SplitProxyHelpers";
import "./DynamicMetaObject";
import "./DynamicMetaObjectBinder";

declare const convertBinderBrand: unique symbol;
export interface ConvertBinder extends Omit<
  System.Dynamic.DynamicMetaObjectBinder,
  "bind" | "explicit" | "fallbackConvert" | "returnType" | "type"
> {
  readonly [convertBinderBrand]: true;
  bind(
    target: System.Dynamic.DynamicMetaObject,
    args: HostArray<System.Dynamic.DynamicMetaObject> | null
  ): System.Dynamic.DynamicMetaObject;
  fallbackConvert(target: System.Dynamic.DynamicMetaObject): System.Dynamic.DynamicMetaObject;
  fallbackConvert(
    target: System.Dynamic.DynamicMetaObject,
    errorSuggestion: System.Dynamic.DynamicMetaObject | null
  ): System.Dynamic.DynamicMetaObject;
  readonly explicit: boolean;
  readonly returnType: System.Type;
  readonly type: System.Type;
}

declare global {
  namespace System.Dynamic {
    type ConvertBinder = import("./ConvertBinder").ConvertBinder;
  }
}

export interface ConvertBinderHostType extends HostType<ConvertBinder, ReferenceTypeTrait> {}

export {};
