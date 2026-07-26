import type {
  HostType,
  InterfaceTypeTrait,
  SingleHost,
  StrongNumeric
} from "../../../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../../../Microsoft/ClearScript/VoidResult";
import "./IResamplingTransformImageProcessor{TPixel}";

declare const iResamplerInputBrand: unique symbol;
export interface IResamplerInput {
  readonly [iResamplerInputBrand]: true;
}

export interface IResampler
  extends Microsoft.ClearScript.ClrInterfaceView<IResamplerInput>, IResamplerInput {
  readonly radius: number;
  getValue(x: number | StrongNumeric<SingleHost>): number;
  applyTransform<TPixel>(
    type1: HostType<TPixel>,
    processor: SixLabors.ImageSharp.Processing.Processors.Transforms.IResamplingTransformImageProcessor<TPixel>
  ): VoidResult;
}

declare global {
  namespace SixLabors.ImageSharp.Processing.Processors.Transforms {
    type IResamplerInput = import("./IResampler").IResamplerInput;
  }
}

declare global {
  namespace SixLabors.ImageSharp.Processing.Processors.Transforms {
    type IResampler = import("./IResampler").IResampler;
  }
}

export interface IResamplerHostType extends HostType<IResampler, InterfaceTypeTrait> {}

export {};
