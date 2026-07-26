import type { HostArray, HostType, ReferenceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import "../V8SplitProxyHelpers";
import "./DynamicMetaObject";
import "./DynamicMetaObjectBinder";

declare const setMemberBinderBrand: unique symbol;
export interface SetMemberBinder extends Omit<
  System.Dynamic.DynamicMetaObjectBinder,
  "bind" | "fallbackSetMember" | "ignoreCase" | "name" | "returnType"
> {
  readonly [setMemberBinderBrand]: true;
  bind(
    target: System.Dynamic.DynamicMetaObject,
    args: HostArray<System.Dynamic.DynamicMetaObject>
  ): System.Dynamic.DynamicMetaObject;
  fallbackSetMember(
    target: System.Dynamic.DynamicMetaObject,
    value: System.Dynamic.DynamicMetaObject
  ): System.Dynamic.DynamicMetaObject;
  fallbackSetMember(
    target: System.Dynamic.DynamicMetaObject,
    value: System.Dynamic.DynamicMetaObject,
    errorSuggestion: System.Dynamic.DynamicMetaObject | null
  ): System.Dynamic.DynamicMetaObject;
  readonly ignoreCase: boolean;
  readonly name: string;
  readonly returnType: System.Type;
}

declare global {
  namespace System.Dynamic {
    type SetMemberBinder = import("./SetMemberBinder").SetMemberBinder;
  }
}

export interface SetMemberBinderHostType extends HostType<SetMemberBinder, ReferenceTypeTrait> {}

export {};
