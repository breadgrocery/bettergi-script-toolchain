import type { HostType, InterfaceTypeTrait } from "../Microsoft/ClearScript/HostType";
import "./V8SplitProxyHelpers";

declare const iServiceProviderInputBrand: unique symbol;
export interface IServiceProviderInput {
  readonly [iServiceProviderInputBrand]: true;
}

export interface IServiceProvider
  extends Microsoft.ClearScript.ClrInterfaceView<IServiceProviderInput>, IServiceProviderInput {
  getService(serviceType: System.Type): unknown;
}

declare global {
  namespace System {
    type IServiceProviderInput = import("./Dispatch").IServiceProviderInput;
  }
}

declare global {
  namespace System {
    type IServiceProvider = import("./Dispatch").IServiceProvider;
  }
}

export interface IServiceProviderHostType extends HostType<IServiceProvider, InterfaceTypeTrait> {}

export {};
