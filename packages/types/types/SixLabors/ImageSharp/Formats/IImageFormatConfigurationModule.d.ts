import type { HostType, InterfaceTypeTrait } from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../Configuration";

declare const iImageFormatConfigurationModuleInputBrand: unique symbol;
export interface IImageFormatConfigurationModuleInput {
  readonly [iImageFormatConfigurationModuleInputBrand]: true;
}

export interface IImageFormatConfigurationModule
  extends
    Microsoft.ClearScript.ClrInterfaceView<IImageFormatConfigurationModuleInput>,
    IImageFormatConfigurationModuleInput {
  configure(configuration: SixLabors.ImageSharp.Configuration): VoidResult;
}

declare global {
  namespace SixLabors.ImageSharp.Formats {
    type IImageFormatConfigurationModuleInput =
      import("./IImageFormatConfigurationModule").IImageFormatConfigurationModuleInput;
  }
}

declare global {
  namespace SixLabors.ImageSharp.Formats {
    type IImageFormatConfigurationModule =
      import("./IImageFormatConfigurationModule").IImageFormatConfigurationModule;
  }
}

export interface IImageFormatConfigurationModuleHostType extends HostType<
  IImageFormatConfigurationModule,
  InterfaceTypeTrait
> {}

export {};
