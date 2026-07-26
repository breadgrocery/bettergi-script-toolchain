import type { HostType, InterfaceTypeTrait } from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../../System/IO/Stream";
import "../../../System/Threading/CancellationToken";
import "../Image";

declare const iImageEncoderInputBrand: unique symbol;
export interface IImageEncoderInput {
  readonly [iImageEncoderInputBrand]: true;
}

export interface IImageEncoder
  extends Microsoft.ClearScript.ClrInterfaceView<IImageEncoderInput>, IImageEncoderInput {
  skipMetadata: boolean;
  encode<TPixel>(
    type1: HostType<TPixel>,
    image: SixLabors.ImageSharp.Image<TPixel>,
    stream: System.IO.Stream
  ): VoidResult;
  encodeAsync<TPixel>(
    type1: HostType<TPixel>,
    image: SixLabors.ImageSharp.Image<TPixel>,
    stream: System.IO.Stream,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<void>;
}

declare global {
  namespace SixLabors.ImageSharp.Formats {
    type IImageEncoderInput = import("./IImageEncoder").IImageEncoderInput;
  }
}

declare global {
  namespace SixLabors.ImageSharp.Formats {
    type IImageEncoder = import("./IImageEncoder").IImageEncoder;
  }
}

export interface IImageEncoderHostType extends HostType<IImageEncoder, InterfaceTypeTrait> {}

export {};
