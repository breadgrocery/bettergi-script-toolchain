import type {
  ClrHostValue,
  HostArray,
  HostType,
  ValueTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import "../V8SplitProxyHelpers";
import "../ValueType";
import "./MethodInfo";

declare const interfaceMappingBrand: unique symbol;
export interface InterfaceMapping extends ClrHostValue {
  readonly [interfaceMappingBrand]: true;
  interfaceMethods: HostArray<System.Reflection.MethodInfo>;
  interfaceType: System.Type;
  targetMethods: HostArray<System.Reflection.MethodInfo>;
  targetType: System.Type;
}

declare global {
  namespace System.Reflection {
    type InterfaceMapping = import("./InterfaceMapping").InterfaceMapping;
  }
}

export interface InterfaceMappingHostType extends HostType<InterfaceMapping, ValueTypeTrait> {}

export {};
