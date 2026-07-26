import type { HostArray, HostType, ReferenceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import "../V8SplitProxyHelpers";
import "./DynamicMetaObject";
import "./DynamicMetaObjectBinder";

declare const getMemberBinderBrand: unique symbol;
export interface GetMemberBinder extends Omit<
  System.Dynamic.DynamicMetaObjectBinder,
  "bind" | "fallbackGetMember" | "ignoreCase" | "name" | "returnType"
> {
  readonly [getMemberBinderBrand]: true;
  bind(
    target: System.Dynamic.DynamicMetaObject,
    args: HostArray<System.Dynamic.DynamicMetaObject> | null
  ): System.Dynamic.DynamicMetaObject;
  fallbackGetMember(target: System.Dynamic.DynamicMetaObject): System.Dynamic.DynamicMetaObject;
  fallbackGetMember(
    target: System.Dynamic.DynamicMetaObject,
    errorSuggestion: System.Dynamic.DynamicMetaObject | null
  ): System.Dynamic.DynamicMetaObject;
  readonly ignoreCase: boolean;
  readonly name: string;
  readonly returnType: System.Type;
}

declare global {
  namespace System.Dynamic {
    type GetMemberBinder = import("./GetMemberBinder").GetMemberBinder;
  }
}

export interface GetMemberBinderHostType extends HostType<GetMemberBinder, ReferenceTypeTrait> {}

export {};
