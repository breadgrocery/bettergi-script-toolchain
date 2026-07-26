import type {
  ClrHostValue,
  EnumInput,
  HostArray,
  HostType,
  ReferenceTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import type { HostVariableOut, HostVariableRef } from "../../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../Globalization/CultureInfo";
import "../V8SplitProxyHelpers";
import "./BindingFlags";
import "./FieldInfo";
import "./MethodBase";
import "./ParameterModifier";
import "./PropertyInfo";

declare const binderBrand: unique symbol;
export interface Binder extends ClrHostValue {
  readonly [binderBrand]: true;
  bindToField(
    bindingAttr: EnumInput<System.Reflection.BindingFlags>,
    match: HostArray<System.Reflection.FieldInfo>,
    value: unknown,
    culture: System.Globalization.CultureInfo | null
  ): System.Reflection.FieldInfo;
  bindToMethod(
    bindingAttr: EnumInput<System.Reflection.BindingFlags>,
    match: HostArray<System.Reflection.MethodBase>,
    args: HostVariableRef<HostArray<unknown>>,
    modifiers: HostArray<System.Reflection.ParameterModifier> | null,
    culture: System.Globalization.CultureInfo | null,
    names: HostArray<string> | null,
    state: HostVariableOut<unknown>
  ): System.Reflection.MethodBase;
  changeType(
    value: unknown,
    type: System.Type,
    culture: System.Globalization.CultureInfo | null
  ): unknown;
  reorderArgumentArray(args: HostVariableRef<HostArray<unknown>>, state: unknown): VoidResult;
  selectMethod(
    bindingAttr: EnumInput<System.Reflection.BindingFlags>,
    match: HostArray<System.Reflection.MethodBase>,
    types: HostArray<System.Type>,
    modifiers: HostArray<System.Reflection.ParameterModifier> | null
  ): System.Reflection.MethodBase;
  selectProperty(
    bindingAttr: EnumInput<System.Reflection.BindingFlags>,
    match: HostArray<System.Reflection.PropertyInfo>,
    returnType: System.Type | null,
    indexes: HostArray<System.Type> | null,
    modifiers: HostArray<System.Reflection.ParameterModifier> | null
  ): System.Reflection.PropertyInfo;
}

declare global {
  namespace System.Reflection {
    type Binder = import("./Binder").Binder;
  }
}

export interface BinderHostType extends HostType<Binder, ReferenceTypeTrait> {}

export {};
