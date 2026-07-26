import type { HostArray, HostType, ReferenceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import "../Delegate";
import "../V8SplitProxyHelpers";
import "./ICustomAttributeProvider";
import "./MemberTypes";
import "./MethodBase";
import "./ParameterInfo";

declare const methodInfoBrand: unique symbol;
export interface MethodInfo
  extends
    Omit<
      System.Reflection.MethodBase,
      | "createDelegate"
      | "equals"
      | "getBaseDefinition"
      | "getGenericArguments"
      | "getGenericMethodDefinition"
      | "getHashCode"
      | "makeGenericMethod"
      | "memberType"
      | "returnParameter"
      | "returnType"
      | "returnTypeCustomAttributes"
    >,
    System.Reflection.ICustomAttributeProviderInput {
  readonly [methodInfoBrand]: true;
  createDelegate(delegateType: System.Type): System.Delegate;
  createDelegate(delegateType: System.Type, target: unknown | null): System.Delegate;
  createDelegate<T>(type1: HostType<T>): T;
  createDelegate<T>(type1: HostType<T>, target: unknown | null): T;
  equals(obj: unknown | null): boolean;
  getBaseDefinition(): System.Reflection.MethodInfo;
  getGenericArguments(): HostArray<System.Type>;
  getGenericMethodDefinition(): System.Reflection.MethodInfo;
  getHashCode(): number;
  makeGenericMethod(...typeArguments: System.Type[]): System.Reflection.MethodInfo;
  makeGenericMethod(typeArguments: HostArray<System.Type>): System.Reflection.MethodInfo;
  readonly memberType: System.Reflection.MemberTypes;
  readonly returnParameter: System.Reflection.ParameterInfo;
  readonly returnType: System.Type;
  readonly returnTypeCustomAttributes: System.Reflection.ICustomAttributeProvider;
}

declare global {
  namespace System.Reflection {
    type MethodInfo = import("./MethodInfo").MethodInfo;
  }
}

export interface MethodInfoHostType extends HostType<MethodInfo, ReferenceTypeTrait> {}

export {};
