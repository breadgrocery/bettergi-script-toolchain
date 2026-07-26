import type {
  ClrHostValue,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../../System/Nullable";
import "../Configuration";
import "../Processing/Processors/Transforms/IResampler";
import "../Size";

declare const decoderOptionsBrand: unique symbol;
export interface DecoderOptions extends ClrHostValue {
  readonly [decoderOptionsBrand]: true;
  configuration: SixLabors.ImageSharp.Configuration;
  targetSize: SixLabors.ImageSharp.Size | null;
  sampler: SixLabors.ImageSharp.Processing.Processors.Transforms.IResampler;
  skipMetadata: boolean;
  maxFrames: number;
}

declare global {
  namespace SixLabors.ImageSharp.Formats {
    type DecoderOptions = import("./DecoderOptions").DecoderOptions;
  }
}

export interface DecoderOptionsHostType extends HostType<
  DecoderOptions,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): DecoderOptions;
}

export {};
