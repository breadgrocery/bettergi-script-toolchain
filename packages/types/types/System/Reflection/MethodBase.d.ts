import type {
  EnumInput,
  HostArray,
  HostType,
  ReferenceTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import "../Globalization/CultureInfo";
import "../RuntimeMethodHandle";
import "../RuntimeTypeHandle";
import "../V8SplitProxyHelpers";
import "./Binder";
import "./BindingFlags";
import "./CallingConventions";
import "./ICustomAttributeProvider";
import "./MemberInfo";
import "./MethodAttributes";
import "./MethodBody";
import "./MethodImplAttributes";
import "./ParameterInfo";

declare const methodBaseBrand: unique symbol;
export interface MethodBase
  extends
    Omit<
      System.Reflection.MemberInfo,
      | "attributes"
      | "callingConvention"
      | "containsGenericParameters"
      | "equals"
      | "getGenericArguments"
      | "getHashCode"
      | "getMethodBody"
      | "getMethodImplementationFlags"
      | "getParameters"
      | "invoke"
      | "isAbstract"
      | "isAssembly"
      | "isConstructedGenericMethod"
      | "isConstructor"
      | "isFamily"
      | "isFamilyAndAssembly"
      | "isFamilyOrAssembly"
      | "isFinal"
      | "isGenericMethod"
      | "isGenericMethodDefinition"
      | "isHideBySig"
      | "isPrivate"
      | "isPublic"
      | "isSecurityCritical"
      | "isSecuritySafeCritical"
      | "isSecurityTransparent"
      | "isSpecialName"
      | "isStatic"
      | "isVirtual"
      | "methodHandle"
      | "methodImplementationFlags"
    >,
    System.Reflection.ICustomAttributeProviderInput {
  readonly [methodBaseBrand]: true;
  equals(obj: unknown | null): boolean;
  getGenericArguments(): HostArray<System.Type>;
  getHashCode(): number;
  getMethodBody(): System.Reflection.MethodBody;
  getMethodImplementationFlags(): System.Reflection.MethodImplAttributes;
  getParameters(): HostArray<System.Reflection.ParameterInfo>;
  invoke(
    obj: unknown | null,
    invokeAttr: EnumInput<System.Reflection.BindingFlags>,
    binder: System.Reflection.Binder | null,
    parameters: HostArray<unknown> | null,
    culture: System.Globalization.CultureInfo | null
  ): unknown;
  invoke(obj: unknown | null, parameters: HostArray<unknown> | null): unknown;
  readonly attributes: System.Reflection.MethodAttributes;
  readonly callingConvention: System.Reflection.CallingConventions;
  readonly containsGenericParameters: boolean;
  readonly isAbstract: boolean;
  readonly isAssembly: boolean;
  readonly isConstructedGenericMethod: boolean;
  readonly isConstructor: boolean;
  readonly isFamily: boolean;
  readonly isFamilyAndAssembly: boolean;
  readonly isFamilyOrAssembly: boolean;
  readonly isFinal: boolean;
  readonly isGenericMethod: boolean;
  readonly isGenericMethodDefinition: boolean;
  readonly isHideBySig: boolean;
  readonly isPrivate: boolean;
  readonly isPublic: boolean;
  readonly isSecurityCritical: boolean;
  readonly isSecuritySafeCritical: boolean;
  readonly isSecurityTransparent: boolean;
  readonly isSpecialName: boolean;
  readonly isStatic: boolean;
  readonly isVirtual: boolean;
  readonly methodHandle: System.RuntimeMethodHandle;
  readonly methodImplementationFlags: System.Reflection.MethodImplAttributes;
}

declare global {
  namespace System.Reflection {
    type MethodBase = import("./MethodBase").MethodBase;
  }
}

export interface MethodBaseHostType extends HostType<MethodBase, ReferenceTypeTrait> {
  getMethodFromHandle(handle: System.RuntimeMethodHandle): System.Reflection.MethodBase;
  getMethodFromHandle(
    handle: System.RuntimeMethodHandle,
    declaringType: System.RuntimeTypeHandle
  ): System.Reflection.MethodBase;
  getCurrentMethod(): System.Reflection.MethodBase;
}

export {};
