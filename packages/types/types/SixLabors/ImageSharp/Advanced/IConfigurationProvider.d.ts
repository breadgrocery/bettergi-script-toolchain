import type { HostType, InterfaceTypeTrait } from "../../../Microsoft/ClearScript/HostType";
import "../Configuration";

declare const iConfigurationProviderInputBrand: unique symbol;
export interface IConfigurationProviderInput {
  readonly [iConfigurationProviderInputBrand]: true;
}

export interface IConfigurationProvider
  extends
    Microsoft.ClearScript.ClrInterfaceView<IConfigurationProviderInput>,
    IConfigurationProviderInput {
  readonly configuration: SixLabors.ImageSharp.Configuration;
}

declare global {
  namespace SixLabors.ImageSharp.Advanced {
    type IConfigurationProviderInput =
      import("./IConfigurationProvider").IConfigurationProviderInput;
  }
}

declare global {
  namespace SixLabors.ImageSharp.Advanced {
    type IConfigurationProvider = import("./IConfigurationProvider").IConfigurationProvider;
  }
}

export interface IConfigurationProviderHostType extends HostType<
  IConfigurationProvider,
  InterfaceTypeTrait
> {}

export {};
