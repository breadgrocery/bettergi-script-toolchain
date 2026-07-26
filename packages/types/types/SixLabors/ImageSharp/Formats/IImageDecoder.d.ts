import type { HostType, InterfaceTypeTrait } from "../../../Microsoft/ClearScript/HostType";
import "../../../System/IO/Stream";
import "../../../System/Threading/CancellationToken";
import "../Image";
import "../ImageInfo";
import "./DecoderOptions";

declare const iImageDecoderInputBrand: unique symbol;
export interface IImageDecoderInput {
  readonly [iImageDecoderInputBrand]: true;
}

export interface IImageDecoder
  extends Microsoft.ClearScript.ClrInterfaceView<IImageDecoderInput>, IImageDecoderInput {
  identify(
    options: SixLabors.ImageSharp.Formats.DecoderOptions,
    stream: System.IO.Stream
  ): SixLabors.ImageSharp.ImageInfo;
  identifyAsync(
    options: SixLabors.ImageSharp.Formats.DecoderOptions,
    stream: System.IO.Stream
  ): Promise<SixLabors.ImageSharp.ImageInfo>;
  identifyAsync(
    options: SixLabors.ImageSharp.Formats.DecoderOptions,
    stream: System.IO.Stream,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<SixLabors.ImageSharp.ImageInfo>;
  decode(
    options: SixLabors.ImageSharp.Formats.DecoderOptions,
    stream: System.IO.Stream
  ): SixLabors.ImageSharp.Image;
  decode<TPixel>(
    type1: HostType<TPixel>,
    options: SixLabors.ImageSharp.Formats.DecoderOptions,
    stream: System.IO.Stream
  ): SixLabors.ImageSharp.Image<TPixel>;
  decodeAsync(
    options: SixLabors.ImageSharp.Formats.DecoderOptions,
    stream: System.IO.Stream
  ): Promise<SixLabors.ImageSharp.Image>;
  decodeAsync(
    options: SixLabors.ImageSharp.Formats.DecoderOptions,
    stream: System.IO.Stream,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<SixLabors.ImageSharp.Image>;
  decodeAsync<TPixel>(
    type1: HostType<TPixel>,
    options: SixLabors.ImageSharp.Formats.DecoderOptions,
    stream: System.IO.Stream
  ): Promise<SixLabors.ImageSharp.Image<TPixel>>;
  decodeAsync<TPixel>(
    type1: HostType<TPixel>,
    options: SixLabors.ImageSharp.Formats.DecoderOptions,
    stream: System.IO.Stream,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<SixLabors.ImageSharp.Image<TPixel>>;
}

declare global {
  namespace SixLabors.ImageSharp.Formats {
    type IImageDecoderInput = import("./IImageDecoder").IImageDecoderInput;
  }
}

declare global {
  namespace SixLabors.ImageSharp.Formats {
    type IImageDecoder = import("./IImageDecoder").IImageDecoder;
  }
}

export interface IImageDecoderHostType extends HostType<IImageDecoder, InterfaceTypeTrait> {}

export {};
