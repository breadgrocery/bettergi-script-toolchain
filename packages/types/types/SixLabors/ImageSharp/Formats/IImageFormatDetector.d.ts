import type { HostType, InterfaceTypeTrait } from "../../../Microsoft/ClearScript/HostType";
import "./IImageFormat";

declare const iImageFormatDetectorInputBrand: unique symbol;
export interface IImageFormatDetectorInput {
  readonly [iImageFormatDetectorInputBrand]: true;
}

export interface IImageFormatDetector
  extends
    Microsoft.ClearScript.ClrInterfaceView<IImageFormatDetectorInput>,
    IImageFormatDetectorInput {
  readonly headerSize: number;
}

declare global {
  namespace SixLabors.ImageSharp.Formats {
    type IImageFormatDetectorInput = import("./IImageFormatDetector").IImageFormatDetectorInput;
  }
}

declare global {
  namespace SixLabors.ImageSharp.Formats {
    type IImageFormatDetector = import("./IImageFormatDetector").IImageFormatDetector;
  }
}

export interface IImageFormatDetectorHostType extends HostType<
  IImageFormatDetector,
  InterfaceTypeTrait
> {}

export {};
