import type { HostArray, HostType, InterfaceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import "../V8SplitProxyHelpers";

declare const iCustomAttributeProviderInputBrand: unique symbol;
export interface ICustomAttributeProviderInput {
  readonly [iCustomAttributeProviderInputBrand]: true;
}

export interface ICustomAttributeProvider
  extends
    Microsoft.ClearScript.ClrInterfaceView<ICustomAttributeProviderInput>,
    ICustomAttributeProviderInput {
  getCustomAttributes(attributeType: System.Type, inherit: boolean): HostArray<unknown>;
  getCustomAttributes(inherit: boolean): HostArray<unknown>;
  isDefined(attributeType: System.Type, inherit: boolean): boolean;
}

declare global {
  namespace System.Reflection {
    type ICustomAttributeProviderInput =
      import("./ICustomAttributeProvider").ICustomAttributeProviderInput;
  }
}

declare global {
  namespace System.Reflection {
    type ICustomAttributeProvider = import("./ICustomAttributeProvider").ICustomAttributeProvider;
  }
}

export interface ICustomAttributeProviderHostType extends HostType<
  ICustomAttributeProvider,
  InterfaceTypeTrait
> {}

export {};
