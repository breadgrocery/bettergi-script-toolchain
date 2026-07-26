import type { HostArray, HostType, ReferenceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import "../V8SplitProxyHelpers";
import "./CallInfo";
import "./DynamicMetaObject";
import "./DynamicMetaObjectBinder";

declare const deleteIndexBinderBrand: unique symbol;
export interface DeleteIndexBinder extends Omit<
  System.Dynamic.DynamicMetaObjectBinder,
  "bind" | "callInfo" | "fallbackDeleteIndex" | "returnType"
> {
  readonly [deleteIndexBinderBrand]: true;
  bind(
    target: System.Dynamic.DynamicMetaObject,
    args: HostArray<System.Dynamic.DynamicMetaObject>
  ): System.Dynamic.DynamicMetaObject;
  fallbackDeleteIndex(
    target: System.Dynamic.DynamicMetaObject,
    indexes: HostArray<System.Dynamic.DynamicMetaObject>
  ): System.Dynamic.DynamicMetaObject;
  fallbackDeleteIndex(
    target: System.Dynamic.DynamicMetaObject,
    indexes: HostArray<System.Dynamic.DynamicMetaObject>,
    errorSuggestion: System.Dynamic.DynamicMetaObject | null
  ): System.Dynamic.DynamicMetaObject;
  readonly callInfo: System.Dynamic.CallInfo;
  readonly returnType: System.Type;
}

declare global {
  namespace System.Dynamic {
    type DeleteIndexBinder = import("./DeleteIndexBinder").DeleteIndexBinder;
  }
}

export interface DeleteIndexBinderHostType extends HostType<
  DeleteIndexBinder,
  ReferenceTypeTrait
> {}

export {};
