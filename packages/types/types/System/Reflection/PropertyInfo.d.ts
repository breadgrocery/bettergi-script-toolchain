import type {
  EnumInput,
  HostArray,
  HostType,
  ReferenceTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../Globalization/CultureInfo";
import "../V8SplitProxyHelpers";
import "./Binder";
import "./BindingFlags";
import "./ICustomAttributeProvider";
import "./MemberInfo";
import "./MemberTypes";
import "./MethodInfo";
import "./ParameterInfo";
import "./PropertyAttributes";

declare const propertyInfoBrand: unique symbol;
export interface PropertyInfo
  extends
    Omit<
      System.Reflection.MemberInfo,
      | "attributes"
      | "canRead"
      | "canWrite"
      | "equals"
      | "getAccessors"
      | "getConstantValue"
      | "getGetMethod"
      | "getHashCode"
      | "getIndexParameters"
      | "getMethod"
      | "getModifiedPropertyType"
      | "getOptionalCustomModifiers"
      | "getRawConstantValue"
      | "getRequiredCustomModifiers"
      | "getSetMethod"
      | "getValue"
      | "isSpecialName"
      | "memberType"
      | "propertyType"
      | "setMethod"
      | "setValue"
    >,
    System.Reflection.ICustomAttributeProviderInput {
  readonly [propertyInfoBrand]: true;
  equals(obj: unknown | null): boolean;
  getAccessors(): HostArray<System.Reflection.MethodInfo>;
  getAccessors(nonPublic: boolean): HostArray<System.Reflection.MethodInfo>;
  getConstantValue(): unknown;
  getGetMethod(): System.Reflection.MethodInfo;
  getGetMethod(nonPublic: boolean): System.Reflection.MethodInfo;
  getHashCode(): number;
  getIndexParameters(): HostArray<System.Reflection.ParameterInfo>;
  getModifiedPropertyType(): System.Type;
  getOptionalCustomModifiers(): HostArray<System.Type>;
  getRawConstantValue(): unknown;
  getRequiredCustomModifiers(): HostArray<System.Type>;
  getSetMethod(): System.Reflection.MethodInfo;
  getSetMethod(nonPublic: boolean): System.Reflection.MethodInfo;
  getValue(obj: unknown | null): unknown;
  getValue(obj: unknown | null, index: HostArray<unknown> | null): unknown;
  getValue(
    obj: unknown | null,
    invokeAttr: EnumInput<System.Reflection.BindingFlags>,
    binder: System.Reflection.Binder | null,
    index: HostArray<unknown> | null,
    culture: System.Globalization.CultureInfo | null
  ): unknown;
  readonly attributes: System.Reflection.PropertyAttributes;
  readonly canRead: boolean;
  readonly canWrite: boolean;
  readonly getMethod: System.Reflection.MethodInfo;
  readonly isSpecialName: boolean;
  readonly memberType: System.Reflection.MemberTypes;
  readonly propertyType: System.Type;
  readonly setMethod: System.Reflection.MethodInfo;
  setValue(obj: unknown | null, value: unknown | null): VoidResult;
  setValue(
    obj: unknown | null,
    value: unknown | null,
    index: HostArray<unknown> | null
  ): VoidResult;
  setValue(
    obj: unknown | null,
    value: unknown | null,
    invokeAttr: EnumInput<System.Reflection.BindingFlags>,
    binder: System.Reflection.Binder | null,
    index: HostArray<unknown> | null,
    culture: System.Globalization.CultureInfo | null
  ): VoidResult;
}

declare global {
  namespace System.Reflection {
    type PropertyInfo = import("./PropertyInfo").PropertyInfo;
  }
}

export interface PropertyInfoHostType extends HostType<PropertyInfo, ReferenceTypeTrait> {}

export {};
