import type {
  EnumInput,
  HostArray,
  HostType,
  InterfaceTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import "../Globalization/CultureInfo";
import "../V8SplitProxyHelpers";
import "./Binder";
import "./BindingFlags";
import "./FieldInfo";
import "./MemberInfo";
import "./MethodInfo";
import "./ParameterModifier";
import "./PropertyInfo";

declare const iReflectInputBrand: unique symbol;
export interface IReflectInput {
  readonly [iReflectInputBrand]: true;
}

export interface IReflect
  extends Microsoft.ClearScript.ClrInterfaceView<IReflectInput>, IReflectInput {
  getField(
    name: string,
    bindingAttr: EnumInput<System.Reflection.BindingFlags>
  ): System.Reflection.FieldInfo;
  getFields(
    bindingAttr: EnumInput<System.Reflection.BindingFlags>
  ): HostArray<System.Reflection.FieldInfo>;
  getMember(
    name: string,
    bindingAttr: EnumInput<System.Reflection.BindingFlags>
  ): HostArray<System.Reflection.MemberInfo>;
  getMembers(
    bindingAttr: EnumInput<System.Reflection.BindingFlags>
  ): HostArray<System.Reflection.MemberInfo>;
  getMethod(
    name: string,
    bindingAttr: EnumInput<System.Reflection.BindingFlags>
  ): System.Reflection.MethodInfo;
  getMethod(
    name: string,
    bindingAttr: EnumInput<System.Reflection.BindingFlags>,
    binder: System.Reflection.Binder | null,
    types: HostArray<System.Type>,
    modifiers: HostArray<System.Reflection.ParameterModifier> | null
  ): System.Reflection.MethodInfo;
  getMethods(
    bindingAttr: EnumInput<System.Reflection.BindingFlags>
  ): HostArray<System.Reflection.MethodInfo>;
  getProperties(
    bindingAttr: EnumInput<System.Reflection.BindingFlags>
  ): HostArray<System.Reflection.PropertyInfo>;
  getProperty(
    name: string,
    bindingAttr: EnumInput<System.Reflection.BindingFlags>
  ): System.Reflection.PropertyInfo;
  getProperty(
    name: string,
    bindingAttr: EnumInput<System.Reflection.BindingFlags>,
    binder: System.Reflection.Binder | null,
    returnType: System.Type | null,
    types: HostArray<System.Type>,
    modifiers: HostArray<System.Reflection.ParameterModifier> | null
  ): System.Reflection.PropertyInfo;
  invokeMember(
    name: string,
    invokeAttr: EnumInput<System.Reflection.BindingFlags>,
    binder: System.Reflection.Binder | null,
    target: unknown | null,
    args: HostArray<unknown> | null,
    modifiers: HostArray<System.Reflection.ParameterModifier> | null,
    culture: System.Globalization.CultureInfo | null,
    namedParameters: HostArray<string> | null
  ): unknown;
  readonly underlyingSystemType: System.Type;
}

declare global {
  namespace System.Reflection {
    type IReflectInput = import("./IReflect").IReflectInput;
  }
}

declare global {
  namespace System.Reflection {
    type IReflect = import("./IReflect").IReflect;
  }
}

export interface IReflectHostType extends HostType<IReflect, InterfaceTypeTrait> {}

export {};
