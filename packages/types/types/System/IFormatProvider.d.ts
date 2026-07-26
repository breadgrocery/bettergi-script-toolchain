import type { HostType, InterfaceTypeTrait } from "../Microsoft/ClearScript/HostType";
import "./V8SplitProxyHelpers";

declare const iFormatProviderInputBrand: unique symbol;
export interface IFormatProviderInput {
  readonly [iFormatProviderInputBrand]: true;
}

export interface IFormatProvider
  extends Microsoft.ClearScript.ClrInterfaceView<IFormatProviderInput>, IFormatProviderInput {
  getFormat(formatType: System.Type | null): unknown;
}

declare global {
  namespace System {
    type IFormatProviderInput = import("./IFormatProvider").IFormatProviderInput;
  }
}

declare global {
  namespace System {
    type IFormatProvider = import("./IFormatProvider").IFormatProvider;
  }
}

export interface IFormatProviderHostType extends HostType<IFormatProvider, InterfaceTypeTrait> {}

export {};
