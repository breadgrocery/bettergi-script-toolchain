import type { HostArray, HostType, ReferenceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import "../V8SplitProxyHelpers";
import "./DynamicMetaObject";
import "./DynamicMetaObjectBinder";

declare const deleteMemberBinderBrand: unique symbol;
export interface DeleteMemberBinder extends Omit<
  System.Dynamic.DynamicMetaObjectBinder,
  "bind" | "fallbackDeleteMember" | "ignoreCase" | "name" | "returnType"
> {
  readonly [deleteMemberBinderBrand]: true;
  bind(
    target: System.Dynamic.DynamicMetaObject,
    args: HostArray<System.Dynamic.DynamicMetaObject> | null
  ): System.Dynamic.DynamicMetaObject;
  fallbackDeleteMember(target: System.Dynamic.DynamicMetaObject): System.Dynamic.DynamicMetaObject;
  fallbackDeleteMember(
    target: System.Dynamic.DynamicMetaObject,
    errorSuggestion: System.Dynamic.DynamicMetaObject | null
  ): System.Dynamic.DynamicMetaObject;
  readonly ignoreCase: boolean;
  readonly name: string;
  readonly returnType: System.Type;
}

declare global {
  namespace System.Dynamic {
    type DeleteMemberBinder = import("./DeleteMemberBinder").DeleteMemberBinder;
  }
}

export interface DeleteMemberBinderHostType extends HostType<
  DeleteMemberBinder,
  ReferenceTypeTrait
> {}

export {};
