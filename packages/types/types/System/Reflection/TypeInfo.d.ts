import type { HostArray, HostType, ReferenceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import "../Collections/Generic/IEnumerable";
import "../V8SplitProxyHelpers";
import "./ConstructorInfo";
import "./EventInfo";
import "./FieldInfo";
import "./ICustomAttributeProvider";
import "./IReflect";
import "./IReflectableType";
import "./MemberInfo";
import "./MethodInfo";
import "./PropertyInfo";

declare const typeInfoBrand: unique symbol;
export interface TypeInfo
  extends
    Omit<
      System.Type,
      | "asType"
      | "declaredConstructors"
      | "declaredEvents"
      | "declaredFields"
      | "declaredMembers"
      | "declaredMethods"
      | "declaredNestedTypes"
      | "declaredProperties"
      | "genericTypeParameters"
      | "getDeclaredEvent"
      | "getDeclaredField"
      | "getDeclaredMethod"
      | "getDeclaredMethods"
      | "getDeclaredNestedType"
      | "getDeclaredProperty"
      | "implementedInterfaces"
      | "isAssignableFrom"
    >,
    System.Reflection.ICustomAttributeProviderInput,
    System.Reflection.IReflectInput,
    System.Reflection.IReflectableTypeInput {
  readonly [typeInfoBrand]: true;
  asType(): System.Type;
  getDeclaredEvent(name: string): System.Reflection.EventInfo;
  getDeclaredField(name: string): System.Reflection.FieldInfo;
  getDeclaredMethod(name: string): System.Reflection.MethodInfo;
  getDeclaredMethods(
    name: string
  ): System.Collections.Generic.IEnumerable<System.Reflection.MethodInfo>;
  getDeclaredNestedType(name: string): System.Reflection.TypeInfo;
  getDeclaredProperty(name: string): System.Reflection.PropertyInfo;
  isAssignableFrom(typeInfo: System.Reflection.TypeInfo | null): boolean;
  readonly declaredConstructors: System.Collections.Generic.IEnumerable<System.Reflection.ConstructorInfo>;
  readonly declaredEvents: System.Collections.Generic.IEnumerable<System.Reflection.EventInfo>;
  readonly declaredFields: System.Collections.Generic.IEnumerable<System.Reflection.FieldInfo>;
  readonly declaredMembers: System.Collections.Generic.IEnumerable<System.Reflection.MemberInfo>;
  readonly declaredMethods: System.Collections.Generic.IEnumerable<System.Reflection.MethodInfo>;
  readonly declaredNestedTypes: System.Collections.Generic.IEnumerable<System.Reflection.TypeInfo>;
  readonly declaredProperties: System.Collections.Generic.IEnumerable<System.Reflection.PropertyInfo>;
  readonly genericTypeParameters: HostArray<System.Type>;
  readonly implementedInterfaces: System.Collections.Generic.IEnumerable<System.Type>;
}

declare global {
  namespace System.Reflection {
    type TypeInfo = import("./TypeInfo").TypeInfo;
  }
}

export interface TypeInfoHostType extends HostType<TypeInfo, ReferenceTypeTrait> {}

export {};
