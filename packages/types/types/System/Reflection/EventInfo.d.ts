import type { HostArray, HostType, ReferenceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../Delegate";
import "../V8SplitProxyHelpers";
import "./EventAttributes";
import "./ICustomAttributeProvider";
import "./MemberInfo";
import "./MemberTypes";
import "./MethodInfo";

declare const eventInfoBrand: unique symbol;
export interface EventInfo
  extends
    Omit<
      System.Reflection.MemberInfo,
      | "addEventHandler"
      | "addMethod"
      | "attributes"
      | "equals"
      | "eventHandlerType"
      | "getAddMethod"
      | "getHashCode"
      | "getOtherMethods"
      | "getRaiseMethod"
      | "getRemoveMethod"
      | "isMulticast"
      | "isSpecialName"
      | "memberType"
      | "raiseMethod"
      | "removeEventHandler"
      | "removeMethod"
    >,
    System.Reflection.ICustomAttributeProviderInput {
  readonly [eventInfoBrand]: true;
  addEventHandler(target: unknown | null, handler: System.Delegate | null): VoidResult;
  equals(obj: unknown | null): boolean;
  getAddMethod(): System.Reflection.MethodInfo;
  getAddMethod(nonPublic: boolean): System.Reflection.MethodInfo;
  getHashCode(): number;
  getOtherMethods(): HostArray<System.Reflection.MethodInfo>;
  getOtherMethods(nonPublic: boolean): HostArray<System.Reflection.MethodInfo>;
  getRaiseMethod(): System.Reflection.MethodInfo;
  getRaiseMethod(nonPublic: boolean): System.Reflection.MethodInfo;
  getRemoveMethod(): System.Reflection.MethodInfo;
  getRemoveMethod(nonPublic: boolean): System.Reflection.MethodInfo;
  readonly addMethod: System.Reflection.MethodInfo;
  readonly attributes: System.Reflection.EventAttributes;
  readonly eventHandlerType: System.Type;
  readonly isMulticast: boolean;
  readonly isSpecialName: boolean;
  readonly memberType: System.Reflection.MemberTypes;
  readonly raiseMethod: System.Reflection.MethodInfo;
  readonly removeMethod: System.Reflection.MethodInfo;
  removeEventHandler(target: unknown | null, handler: System.Delegate | null): VoidResult;
}

declare global {
  namespace System.Reflection {
    type EventInfo = import("./EventInfo").EventInfo;
  }
}

export interface EventInfoHostType extends HostType<EventInfo, ReferenceTypeTrait> {}

export {};
