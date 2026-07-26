import type {
  ClrHostValue,
  HostArray,
  HostType,
  ReferenceTypeTrait
} from "../Microsoft/ClearScript/HostType";
import "./Reflection/Assembly";
import "./Reflection/CommonJSManager";
import "./Reflection/MemberInfo";
import "./Reflection/ParameterInfo";
import "./V8SplitProxyHelpers";

declare const attributeBrand: unique symbol;
export interface Attribute extends ClrHostValue {
  readonly [attributeBrand]: true;
  equals(obj: unknown | null): boolean;
  getHashCode(): number;
  isDefaultAttribute(): boolean;
  match(obj: unknown | null): boolean;
  readonly typeId: unknown;
}

declare global {
  namespace System {
    type Attribute = import("./Attribute").Attribute;
  }
}

export interface AttributeHostType extends HostType<Attribute, ReferenceTypeTrait> {
  getCustomAttributes(
    element: System.Reflection.MemberInfo,
    attributeType: System.Type
  ): HostArray<System.Attribute>;
  getCustomAttributes(
    element: System.Reflection.MemberInfo,
    attributeType: System.Type,
    inherit: boolean
  ): HostArray<System.Attribute>;
  getCustomAttributes(element: System.Reflection.MemberInfo): HostArray<System.Attribute>;
  getCustomAttributes(
    element: System.Reflection.MemberInfo,
    inherit: boolean
  ): HostArray<System.Attribute>;
  isDefined(element: System.Reflection.MemberInfo, attributeType: System.Type): boolean;
  isDefined(
    element: System.Reflection.MemberInfo,
    attributeType: System.Type,
    inherit: boolean
  ): boolean;
  getCustomAttribute(
    element: System.Reflection.MemberInfo,
    attributeType: System.Type
  ): System.Attribute;
  getCustomAttribute(
    element: System.Reflection.MemberInfo,
    attributeType: System.Type,
    inherit: boolean
  ): System.Attribute;
  getCustomAttributes(element: System.Reflection.ParameterInfo): HostArray<System.Attribute>;
  getCustomAttributes(
    element: System.Reflection.ParameterInfo,
    attributeType: System.Type
  ): HostArray<System.Attribute>;
  getCustomAttributes(
    element: System.Reflection.ParameterInfo,
    attributeType: System.Type,
    inherit: boolean
  ): HostArray<System.Attribute>;
  getCustomAttributes(
    element: System.Reflection.ParameterInfo,
    inherit: boolean
  ): HostArray<System.Attribute>;
  isDefined(element: System.Reflection.ParameterInfo, attributeType: System.Type): boolean;
  isDefined(
    element: System.Reflection.ParameterInfo,
    attributeType: System.Type,
    inherit: boolean
  ): boolean;
  getCustomAttribute(
    element: System.Reflection.ParameterInfo,
    attributeType: System.Type
  ): System.Attribute;
  getCustomAttribute(
    element: System.Reflection.ParameterInfo,
    attributeType: System.Type,
    inherit: boolean
  ): System.Attribute;
  getCustomAttributes(
    element: System.Reflection.Module,
    attributeType: System.Type
  ): HostArray<System.Attribute>;
  getCustomAttributes(element: System.Reflection.Module): HostArray<System.Attribute>;
  getCustomAttributes(
    element: System.Reflection.Module,
    inherit: boolean
  ): HostArray<System.Attribute>;
  getCustomAttributes(
    element: System.Reflection.Module,
    attributeType: System.Type,
    inherit: boolean
  ): HostArray<System.Attribute>;
  isDefined(element: System.Reflection.Module, attributeType: System.Type): boolean;
  isDefined(
    element: System.Reflection.Module,
    attributeType: System.Type,
    inherit: boolean
  ): boolean;
  getCustomAttribute(
    element: System.Reflection.Module,
    attributeType: System.Type
  ): System.Attribute;
  getCustomAttribute(
    element: System.Reflection.Module,
    attributeType: System.Type,
    inherit: boolean
  ): System.Attribute;
  getCustomAttributes(
    element: System.Reflection.Assembly,
    attributeType: System.Type
  ): HostArray<System.Attribute>;
  getCustomAttributes(
    element: System.Reflection.Assembly,
    attributeType: System.Type,
    inherit: boolean
  ): HostArray<System.Attribute>;
  getCustomAttributes(element: System.Reflection.Assembly): HostArray<System.Attribute>;
  getCustomAttributes(
    element: System.Reflection.Assembly,
    inherit: boolean
  ): HostArray<System.Attribute>;
  isDefined(element: System.Reflection.Assembly, attributeType: System.Type): boolean;
  isDefined(
    element: System.Reflection.Assembly,
    attributeType: System.Type,
    inherit: boolean
  ): boolean;
  getCustomAttribute(
    element: System.Reflection.Assembly,
    attributeType: System.Type
  ): System.Attribute;
  getCustomAttribute(
    element: System.Reflection.Assembly,
    attributeType: System.Type,
    inherit: boolean
  ): System.Attribute;
}

export {};
