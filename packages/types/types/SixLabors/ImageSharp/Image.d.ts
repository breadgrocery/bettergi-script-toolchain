import type {
  ClrHostValue,
  FamilyArgumentOmitted,
  HostType,
  Int32Host,
  IsFamilyArgumentOmitted,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../../System/Buffers/IMemoryOwner";
import "../../System/IDisposable";
import "../../System/IO/Stream";
import "../../System/Memory";
import "../../System/Threading/CancellationToken";
import "./Advanced/IConfigurationProvider";
import "./Configuration";
import "./Formats/DecoderOptions";
import "./Formats/IImageEncoder";
import "./Formats/IImageFormat";
import "./Formats/PixelTypeInfo";
import "./ImageFrameCollection";
import "./ImageInfo";
import "./Metadata/ImageMetadata";
import "./PixelAccessorAction";
import "./Rectangle";
import "./Size";

declare const imageArity0Brand: unique symbol;
export interface _ImageArity0
  extends
    ClrHostValue,
    System.IDisposableInput,
    SixLabors.ImageSharp.Advanced.IConfigurationProviderInput {
  readonly [imageArity0Brand]: true;
  readonly configuration: SixLabors.ImageSharp.Configuration;
  readonly pixelType: SixLabors.ImageSharp.Formats.PixelTypeInfo;
  readonly width: number;
  readonly height: number;
  readonly metadata: SixLabors.ImageSharp.Metadata.ImageMetadata;
  readonly size: SixLabors.ImageSharp.Size;
  readonly bounds: SixLabors.ImageSharp.Rectangle;
  readonly frames: SixLabors.ImageSharp.ImageFrameCollection;
  save(stream: System.IO.Stream, encoder: SixLabors.ImageSharp.Formats.IImageEncoder): VoidResult;
  saveAsync(
    stream: System.IO.Stream,
    encoder: SixLabors.ImageSharp.Formats.IImageEncoder
  ): Promise<void>;
  saveAsync(
    stream: System.IO.Stream,
    encoder: SixLabors.ImageSharp.Formats.IImageEncoder,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<void>;
  cloneAs<TPixel2>(type1: HostType<TPixel2>): SixLabors.ImageSharp.Image<TPixel2>;
  cloneAs<TPixel2>(
    type1: HostType<TPixel2>,
    configuration: SixLabors.ImageSharp.Configuration
  ): SixLabors.ImageSharp.Image<TPixel2>;
  dispose(): VoidResult;
}

export interface _ImageArity0HostType extends HostType<_ImageArity0, ReferenceTypeTrait> {
  detectFormat(path: string): SixLabors.ImageSharp.Formats.IImageFormat;
  detectFormat(
    options: SixLabors.ImageSharp.Formats.DecoderOptions,
    path: string
  ): SixLabors.ImageSharp.Formats.IImageFormat;
  detectFormatAsync(path: string): Promise<SixLabors.ImageSharp.Formats.IImageFormat>;
  detectFormatAsync(
    path: string,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<SixLabors.ImageSharp.Formats.IImageFormat>;
  detectFormatAsync(
    options: SixLabors.ImageSharp.Formats.DecoderOptions,
    path: string
  ): Promise<SixLabors.ImageSharp.Formats.IImageFormat>;
  detectFormatAsync(
    options: SixLabors.ImageSharp.Formats.DecoderOptions,
    path: string,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<SixLabors.ImageSharp.Formats.IImageFormat>;
  identify(path: string): SixLabors.ImageSharp.ImageInfo;
  identify(
    options: SixLabors.ImageSharp.Formats.DecoderOptions,
    path: string
  ): SixLabors.ImageSharp.ImageInfo;
  identifyAsync(path: string): Promise<SixLabors.ImageSharp.ImageInfo>;
  identifyAsync(
    path: string,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<SixLabors.ImageSharp.ImageInfo>;
  identifyAsync(
    options: SixLabors.ImageSharp.Formats.DecoderOptions,
    path: string
  ): Promise<SixLabors.ImageSharp.ImageInfo>;
  identifyAsync(
    options: SixLabors.ImageSharp.Formats.DecoderOptions,
    path: string,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<SixLabors.ImageSharp.ImageInfo>;
  load(path: string): SixLabors.ImageSharp.Image;
  load(
    options: SixLabors.ImageSharp.Formats.DecoderOptions,
    path: string
  ): SixLabors.ImageSharp.Image;
  loadAsync(path: string): Promise<SixLabors.ImageSharp.Image>;
  loadAsync(
    path: string,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<SixLabors.ImageSharp.Image>;
  loadAsync(
    options: SixLabors.ImageSharp.Formats.DecoderOptions,
    path: string
  ): Promise<SixLabors.ImageSharp.Image>;
  loadAsync(
    options: SixLabors.ImageSharp.Formats.DecoderOptions,
    path: string,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<SixLabors.ImageSharp.Image>;
  load<TPixel>(type1: HostType<TPixel>, path: string): SixLabors.ImageSharp.Image<TPixel>;
  load<TPixel>(
    type1: HostType<TPixel>,
    options: SixLabors.ImageSharp.Formats.DecoderOptions,
    path: string
  ): SixLabors.ImageSharp.Image<TPixel>;
  loadAsync<TPixel>(
    type1: HostType<TPixel>,
    path: string
  ): Promise<SixLabors.ImageSharp.Image<TPixel>>;
  loadAsync<TPixel>(
    type1: HostType<TPixel>,
    path: string,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<SixLabors.ImageSharp.Image<TPixel>>;
  loadAsync<TPixel>(
    type1: HostType<TPixel>,
    options: SixLabors.ImageSharp.Formats.DecoderOptions,
    path: string
  ): Promise<SixLabors.ImageSharp.Image<TPixel>>;
  loadAsync<TPixel>(
    type1: HostType<TPixel>,
    options: SixLabors.ImageSharp.Formats.DecoderOptions,
    path: string,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<SixLabors.ImageSharp.Image<TPixel>>;
  detectFormat(stream: System.IO.Stream): SixLabors.ImageSharp.Formats.IImageFormat;
  detectFormat(
    options: SixLabors.ImageSharp.Formats.DecoderOptions,
    stream: System.IO.Stream
  ): SixLabors.ImageSharp.Formats.IImageFormat;
  detectFormatAsync(stream: System.IO.Stream): Promise<SixLabors.ImageSharp.Formats.IImageFormat>;
  detectFormatAsync(
    stream: System.IO.Stream,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<SixLabors.ImageSharp.Formats.IImageFormat>;
  detectFormatAsync(
    options: SixLabors.ImageSharp.Formats.DecoderOptions,
    stream: System.IO.Stream
  ): Promise<SixLabors.ImageSharp.Formats.IImageFormat>;
  detectFormatAsync(
    options: SixLabors.ImageSharp.Formats.DecoderOptions,
    stream: System.IO.Stream,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<SixLabors.ImageSharp.Formats.IImageFormat>;
  identify(stream: System.IO.Stream): SixLabors.ImageSharp.ImageInfo;
  identify(
    options: SixLabors.ImageSharp.Formats.DecoderOptions,
    stream: System.IO.Stream
  ): SixLabors.ImageSharp.ImageInfo;
  identifyAsync(stream: System.IO.Stream): Promise<SixLabors.ImageSharp.ImageInfo>;
  identifyAsync(
    stream: System.IO.Stream,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<SixLabors.ImageSharp.ImageInfo>;
  identifyAsync(
    options: SixLabors.ImageSharp.Formats.DecoderOptions,
    stream: System.IO.Stream
  ): Promise<SixLabors.ImageSharp.ImageInfo>;
  identifyAsync(
    options: SixLabors.ImageSharp.Formats.DecoderOptions,
    stream: System.IO.Stream,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<SixLabors.ImageSharp.ImageInfo>;
  load(stream: System.IO.Stream): SixLabors.ImageSharp.Image;
  load(
    options: SixLabors.ImageSharp.Formats.DecoderOptions,
    stream: System.IO.Stream
  ): SixLabors.ImageSharp.Image;
  loadAsync(stream: System.IO.Stream): Promise<SixLabors.ImageSharp.Image>;
  loadAsync(
    stream: System.IO.Stream,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<SixLabors.ImageSharp.Image>;
  loadAsync(
    options: SixLabors.ImageSharp.Formats.DecoderOptions,
    stream: System.IO.Stream
  ): Promise<SixLabors.ImageSharp.Image>;
  loadAsync(
    options: SixLabors.ImageSharp.Formats.DecoderOptions,
    stream: System.IO.Stream,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<SixLabors.ImageSharp.Image>;
  load<TPixel>(
    type1: HostType<TPixel>,
    stream: System.IO.Stream
  ): SixLabors.ImageSharp.Image<TPixel>;
  load<TPixel>(
    type1: HostType<TPixel>,
    options: SixLabors.ImageSharp.Formats.DecoderOptions,
    stream: System.IO.Stream
  ): SixLabors.ImageSharp.Image<TPixel>;
  loadAsync<TPixel>(
    type1: HostType<TPixel>,
    stream: System.IO.Stream
  ): Promise<SixLabors.ImageSharp.Image<TPixel>>;
  loadAsync<TPixel>(
    type1: HostType<TPixel>,
    stream: System.IO.Stream,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<SixLabors.ImageSharp.Image<TPixel>>;
  loadAsync<TPixel>(
    type1: HostType<TPixel>,
    options: SixLabors.ImageSharp.Formats.DecoderOptions,
    stream: System.IO.Stream
  ): Promise<SixLabors.ImageSharp.Image<TPixel>>;
  loadAsync<TPixel>(
    type1: HostType<TPixel>,
    options: SixLabors.ImageSharp.Formats.DecoderOptions,
    stream: System.IO.Stream,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<SixLabors.ImageSharp.Image<TPixel>>;
  wrapMemory<TPixel>(
    type1: HostType<TPixel>,
    configuration: SixLabors.ImageSharp.Configuration,
    pixelMemory: System.Memory<TPixel>,
    width: number | StrongNumeric<Int32Host>,
    height: number | StrongNumeric<Int32Host>,
    metadata: SixLabors.ImageSharp.Metadata.ImageMetadata
  ): SixLabors.ImageSharp.Image<TPixel>;
  wrapMemory<TPixel>(
    type1: HostType<TPixel>,
    configuration: SixLabors.ImageSharp.Configuration,
    pixelMemory: System.Memory<TPixel>,
    width: number | StrongNumeric<Int32Host>,
    height: number | StrongNumeric<Int32Host>
  ): SixLabors.ImageSharp.Image<TPixel>;
  wrapMemory<TPixel>(
    type1: HostType<TPixel>,
    pixelMemory: System.Memory<TPixel>,
    width: number | StrongNumeric<Int32Host>,
    height: number | StrongNumeric<Int32Host>
  ): SixLabors.ImageSharp.Image<TPixel>;
  wrapMemory<TPixel>(
    type1: HostType<TPixel>,
    configuration: SixLabors.ImageSharp.Configuration,
    pixelMemoryOwner: System.Buffers.IMemoryOwner<TPixel>,
    width: number | StrongNumeric<Int32Host>,
    height: number | StrongNumeric<Int32Host>,
    metadata: SixLabors.ImageSharp.Metadata.ImageMetadata
  ): SixLabors.ImageSharp.Image<TPixel>;
  wrapMemory<TPixel>(
    type1: HostType<TPixel>,
    configuration: SixLabors.ImageSharp.Configuration,
    pixelMemoryOwner: System.Buffers.IMemoryOwner<TPixel>,
    width: number | StrongNumeric<Int32Host>,
    height: number | StrongNumeric<Int32Host>
  ): SixLabors.ImageSharp.Image<TPixel>;
  wrapMemory<TPixel>(
    type1: HostType<TPixel>,
    pixelMemoryOwner: System.Buffers.IMemoryOwner<TPixel>,
    width: number | StrongNumeric<Int32Host>,
    height: number | StrongNumeric<Int32Host>
  ): SixLabors.ImageSharp.Image<TPixel>;
  wrapMemory<TPixel>(
    type1: HostType<TPixel>,
    configuration: SixLabors.ImageSharp.Configuration,
    byteMemory: System.Memory<number>,
    width: number | StrongNumeric<Int32Host>,
    height: number | StrongNumeric<Int32Host>,
    metadata: SixLabors.ImageSharp.Metadata.ImageMetadata
  ): SixLabors.ImageSharp.Image<TPixel>;
  wrapMemory<TPixel>(
    type1: HostType<TPixel>,
    configuration: SixLabors.ImageSharp.Configuration,
    byteMemory: System.Memory<number>,
    width: number | StrongNumeric<Int32Host>,
    height: number | StrongNumeric<Int32Host>
  ): SixLabors.ImageSharp.Image<TPixel>;
  wrapMemory<TPixel>(
    type1: HostType<TPixel>,
    byteMemory: System.Memory<number>,
    width: number | StrongNumeric<Int32Host>,
    height: number | StrongNumeric<Int32Host>
  ): SixLabors.ImageSharp.Image<TPixel>;
  wrapMemory<TPixel>(
    type1: HostType<TPixel>,
    configuration: SixLabors.ImageSharp.Configuration,
    byteMemoryOwner: System.Buffers.IMemoryOwner<number>,
    width: number | StrongNumeric<Int32Host>,
    height: number | StrongNumeric<Int32Host>,
    metadata: SixLabors.ImageSharp.Metadata.ImageMetadata
  ): SixLabors.ImageSharp.Image<TPixel>;
  wrapMemory<TPixel>(
    type1: HostType<TPixel>,
    configuration: SixLabors.ImageSharp.Configuration,
    byteMemoryOwner: System.Buffers.IMemoryOwner<number>,
    width: number | StrongNumeric<Int32Host>,
    height: number | StrongNumeric<Int32Host>
  ): SixLabors.ImageSharp.Image<TPixel>;
  wrapMemory<TPixel>(
    type1: HostType<TPixel>,
    byteMemoryOwner: System.Buffers.IMemoryOwner<number>,
    width: number | StrongNumeric<Int32Host>,
    height: number | StrongNumeric<Int32Host>
  ): SixLabors.ImageSharp.Image<TPixel>;
}

declare const imageArity1Brand: unique symbol;
export interface _ImageArity1<TPixel>
  extends
    Omit<
      _ImageArity0,
      | "clone"
      | "cloneAs"
      | "copyPixelDataTo"
      | "dangerousTryGetSinglePixelMemory"
      | "frames"
      | "item"
      | "processPixelRows"
      | "toString"
    >,
    System.IDisposableInput,
    SixLabors.ImageSharp.Advanced.IConfigurationProviderInput {
  readonly [imageArity1Brand]: true;
  readonly frames: SixLabors.ImageSharp.ImageFrameCollection<TPixel>;
  item: {
    (x: number | StrongNumeric<Int32Host>, y: number | StrongNumeric<Int32Host>): TPixel;
    get(x: number | StrongNumeric<Int32Host>, y: number | StrongNumeric<Int32Host>): TPixel;
    set(
      x: number | StrongNumeric<Int32Host>,
      y: number | StrongNumeric<Int32Host>,
      value: TPixel
    ): TPixel;
  };
  processPixelRows(processPixels: SixLabors.ImageSharp.PixelAccessorAction<TPixel>): VoidResult;
  processPixelRows<TPixel2, TPixel3>(
    type1: HostType<TPixel2>,
    type2: HostType<TPixel3>,
    image2: SixLabors.ImageSharp.Image<TPixel2>,
    image3: SixLabors.ImageSharp.Image<TPixel3>,
    processPixels: SixLabors.ImageSharp.PixelAccessorAction<TPixel, TPixel2, TPixel3>
  ): VoidResult;
  processPixelRows<TPixel2>(
    type1: HostType<TPixel2>,
    image2: SixLabors.ImageSharp.Image<TPixel2>,
    processPixels: SixLabors.ImageSharp.PixelAccessorAction<TPixel, TPixel2>
  ): VoidResult;
  dangerousTryGetSinglePixelMemory(memory: HostVariableOut<System.Memory<TPixel>>): boolean;
  clone(): SixLabors.ImageSharp.Image;
  clone(configuration: SixLabors.ImageSharp.Configuration): SixLabors.ImageSharp.Image;
  cloneAs<TPixel2>(
    type1: HostType<TPixel2>,
    configuration: SixLabors.ImageSharp.Configuration
  ): SixLabors.ImageSharp.Image<TPixel2>;
  toString(): string;
}

export interface _ImageArity1HostType<TPixel> extends HostType<
  _ImageArity1<TPixel>,
  ReferenceTypeTrait
> {
  new (
    configuration: SixLabors.ImageSharp.Configuration,
    width: number | StrongNumeric<Int32Host>,
    height: number | StrongNumeric<Int32Host>
  ): _ImageArity1<TPixel>;
  new (
    configuration: SixLabors.ImageSharp.Configuration,
    width: number | StrongNumeric<Int32Host>,
    height: number | StrongNumeric<Int32Host>,
    backgroundColor: TPixel
  ): _ImageArity1<TPixel>;
  new (
    width: number | StrongNumeric<Int32Host>,
    height: number | StrongNumeric<Int32Host>,
    backgroundColor: TPixel
  ): _ImageArity1<TPixel>;
  new (
    width: number | StrongNumeric<Int32Host>,
    height: number | StrongNumeric<Int32Host>
  ): _ImageArity1<TPixel>;
}

export type ImageFamily<T1 = FamilyArgumentOmitted> =
  IsFamilyArgumentOmitted<T1> extends true ? _ImageArity0 : _ImageArity1<T1>;

declare global {
  namespace SixLabors.ImageSharp {
    type Image<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./Image").ImageFamily<T1>;
  }
}

export type ImageHostType = _ImageArity0HostType;

export {};
