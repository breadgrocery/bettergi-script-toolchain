import type { HostArray, HostType, ReferenceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import "../V8SplitProxyHelpers";
import "./CallInfo";
import "./DynamicMetaObject";
import "./DynamicMetaObjectBinder";

declare const invokeMemberBinderBrand: unique symbol;
export interface InvokeMemberBinder extends Omit<
  System.Dynamic.DynamicMetaObjectBinder,
  | "bind"
  | "callInfo"
  | "fallbackInvoke"
  | "fallbackInvokeMember"
  | "ignoreCase"
  | "name"
  | "returnType"
> {
  readonly [invokeMemberBinderBrand]: true;
  bind(
    target: System.Dynamic.DynamicMetaObject,
    args: HostArray<System.Dynamic.DynamicMetaObject>
  ): System.Dynamic.DynamicMetaObject;
  fallbackInvoke(
    target: System.Dynamic.DynamicMetaObject,
    args: HostArray<System.Dynamic.DynamicMetaObject>,
    errorSuggestion: System.Dynamic.DynamicMetaObject | null
  ): System.Dynamic.DynamicMetaObject;
  fallbackInvokeMember(
    target: System.Dynamic.DynamicMetaObject,
    args: HostArray<System.Dynamic.DynamicMetaObject>
  ): System.Dynamic.DynamicMetaObject;
  fallbackInvokeMember(
    target: System.Dynamic.DynamicMetaObject,
    args: HostArray<System.Dynamic.DynamicMetaObject>,
    errorSuggestion: System.Dynamic.DynamicMetaObject | null
  ): System.Dynamic.DynamicMetaObject;
  readonly callInfo: System.Dynamic.CallInfo;
  readonly ignoreCase: boolean;
  readonly name: string;
  readonly returnType: System.Type;
}

declare global {
  namespace System.Dynamic {
    type InvokeMemberBinder = import("./InvokeMemberBinder").InvokeMemberBinder;
  }
}

export interface InvokeMemberBinderHostType extends HostType<
  InvokeMemberBinder,
  ReferenceTypeTrait
> {}

export {};
