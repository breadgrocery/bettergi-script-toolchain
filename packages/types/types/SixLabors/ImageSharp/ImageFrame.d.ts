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
import "../../System/IDisposable";
import "../../System/Memory";
import "./Advanced/IConfigurationProvider";
import "./Configuration";
import "./Memory/Buffer2D{T}";
import "./Metadata/ImageFrameMetadata";
import "./PixelAccessorAction";
import "./Rectangle";
import "./Size";

declare const imageFrameArity0Brand: unique symbol;
export interface _ImageFrameArity0
  extends
    ClrHostValue,
    SixLabors.ImageSharp.Advanced.IConfigurationProviderInput,
    System.IDisposableInput {
  readonly [imageFrameArity0Brand]: true;
  readonly width: number;
  readonly height: number;
  readonly metadata: SixLabors.ImageSharp.Metadata.ImageFrameMetadata;
  readonly configuration: SixLabors.ImageSharp.Configuration;
  size(): SixLabors.ImageSharp.Size;
  bounds(): SixLabors.ImageSharp.Rectangle;
  dispose(): VoidResult;
}

export interface _ImageFrameArity0HostType extends HostType<
  _ImageFrameArity0,
  ReferenceTypeTrait
> {}

declare const imageFrameArity1Brand: unique symbol;
export interface _ImageFrameArity1<TPixel>
  extends
    Omit<
      _ImageFrameArity0,
      | "copyPixelDataTo"
      | "dangerousTryGetSinglePixelMemory"
      | "item"
      | "pixelBuffer"
      | "processPixelRows"
      | "toString"
    >,
    SixLabors.ImageSharp.Advanced.IConfigurationProviderInput,
    System.IDisposableInput {
  readonly [imageFrameArity1Brand]: true;
  readonly pixelBuffer: SixLabors.ImageSharp.Memory.Buffer2D<TPixel>;
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
    frame2: SixLabors.ImageSharp.ImageFrame<TPixel2>,
    frame3: SixLabors.ImageSharp.ImageFrame<TPixel3>,
    processPixels: SixLabors.ImageSharp.PixelAccessorAction<TPixel, TPixel2, TPixel3>
  ): VoidResult;
  processPixelRows<TPixel2>(
    type1: HostType<TPixel2>,
    frame2: SixLabors.ImageSharp.ImageFrame<TPixel2>,
    processPixels: SixLabors.ImageSharp.PixelAccessorAction<TPixel, TPixel2>
  ): VoidResult;
  dangerousTryGetSinglePixelMemory(memory: HostVariableOut<System.Memory<TPixel>>): boolean;
  toString(): string;
}

export interface _ImageFrameArity1HostType<TPixel> extends HostType<
  _ImageFrameArity1<TPixel>,
  ReferenceTypeTrait
> {}

export type ImageFrameFamily<T1 = FamilyArgumentOmitted> =
  IsFamilyArgumentOmitted<T1> extends true ? _ImageFrameArity0 : _ImageFrameArity1<T1>;

declare global {
  namespace SixLabors.ImageSharp {
    type ImageFrame<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./ImageFrame").ImageFrameFamily<T1>;
  }
}

export type ImageFrameHostType = _ImageFrameArity0HostType;

export {};
