import type {
  EnumInput,
  HostArray,
  HostType,
  ReferenceTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../Globalization/CultureInfo";
import "../RuntimeFieldHandle";
import "../RuntimeTypeHandle";
import "../V8SplitProxyHelpers";
import "./Binder";
import "./BindingFlags";
import "./FieldAttributes";
import "./ICustomAttributeProvider";
import "./MemberInfo";
import "./MemberTypes";

declare const fieldInfoBrand: unique symbol;
export interface FieldInfo
  extends
    Omit<
      System.Reflection.MemberInfo,
      | "attributes"
      | "equals"
      | "fieldHandle"
      | "fieldType"
      | "getHashCode"
      | "getModifiedFieldType"
      | "getOptionalCustomModifiers"
      | "getRawConstantValue"
      | "getRequiredCustomModifiers"
      | "getValue"
      | "getValueDirect"
      | "isAssembly"
      | "isFamily"
      | "isFamilyAndAssembly"
      | "isFamilyOrAssembly"
      | "isInitOnly"
      | "isLiteral"
      | "isNotSerialized"
      | "isPinvokeImpl"
      | "isPrivate"
      | "isPublic"
      | "isSecurityCritical"
      | "isSecuritySafeCritical"
      | "isSecurityTransparent"
      | "isSpecialName"
      | "isStatic"
      | "memberType"
      | "setValue"
      | "setValueDirect"
    >,
    System.Reflection.ICustomAttributeProviderInput {
  readonly [fieldInfoBrand]: true;
  equals(obj: unknown | null): boolean;
  getHashCode(): number;
  getModifiedFieldType(): System.Type;
  getOptionalCustomModifiers(): HostArray<System.Type>;
  getRawConstantValue(): unknown;
  getRequiredCustomModifiers(): HostArray<System.Type>;
  getValue(obj: unknown | null): unknown;
  readonly attributes: System.Reflection.FieldAttributes;
  readonly fieldHandle: System.RuntimeFieldHandle;
  readonly fieldType: System.Type;
  readonly isAssembly: boolean;
  readonly isFamily: boolean;
  readonly isFamilyAndAssembly: boolean;
  readonly isFamilyOrAssembly: boolean;
  readonly isInitOnly: boolean;
  readonly isLiteral: boolean;
  readonly isNotSerialized: boolean;
  readonly isPinvokeImpl: boolean;
  readonly isPrivate: boolean;
  readonly isPublic: boolean;
  readonly isSecurityCritical: boolean;
  readonly isSecuritySafeCritical: boolean;
  readonly isSecurityTransparent: boolean;
  readonly isSpecialName: boolean;
  readonly isStatic: boolean;
  readonly memberType: System.Reflection.MemberTypes;
  setValue(obj: unknown | null, value: unknown | null): VoidResult;
  setValue(
    obj: unknown | null,
    value: unknown | null,
    invokeAttr: EnumInput<System.Reflection.BindingFlags>,
    binder: System.Reflection.Binder | null,
    culture: System.Globalization.CultureInfo | null
  ): VoidResult;
}

declare global {
  namespace System.Reflection {
    type FieldInfo = import("./FieldInfo").FieldInfo;
  }
}

export interface FieldInfoHostType extends HostType<FieldInfo, ReferenceTypeTrait> {
  getFieldFromHandle(handle: System.RuntimeFieldHandle): System.Reflection.FieldInfo;
  getFieldFromHandle(
    handle: System.RuntimeFieldHandle,
    declaringType: System.RuntimeTypeHandle
  ): System.Reflection.FieldInfo;
}

export {};
