import type {
  FamilyArgumentOmitted,
  HostType,
  InterfaceTypeTrait
} from "../../../../../Microsoft/ClearScript/HostType";
import type { HostVariableRef } from "../../../../../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../../../../../Microsoft/ClearScript/VoidResult";
import "../../../../../System/IDisposable";
import "../IImageProcessor{TPixel}";

declare const iResamplingTransformImageProcessorArity1InputBrand: unique symbol;
export interface _IResamplingTransformImageProcessorArity1Input<TPixel> {
  readonly [iResamplingTransformImageProcessorArity1InputBrand]: true;
}

export interface _IResamplingTransformImageProcessorArity1<TPixel>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_IResamplingTransformImageProcessorArity1Input<TPixel>>,
    _IResamplingTransformImageProcessorArity1Input<TPixel> {
  applyTransform<TResampler>(
    type1: HostType<TResampler>,
    sampler: HostVariableRef<TResampler>
  ): VoidResult;
}

export interface _IResamplingTransformImageProcessorArity1HostType<TPixel> extends HostType<
  _IResamplingTransformImageProcessorArity1<TPixel>,
  InterfaceTypeTrait
> {}

export type IResamplingTransformImageProcessorFamily<T1 = FamilyArgumentOmitted> =
  _IResamplingTransformImageProcessorArity1<T1>;

declare global {
  namespace SixLabors.ImageSharp.Processing.Processors.Transforms {
    type IResamplingTransformImageProcessor<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./IResamplingTransformImageProcessor{TPixel}").IResamplingTransformImageProcessorFamily<T1>;
  }
}

export type IResamplingTransformImageProcessorInputFamily<T1 = FamilyArgumentOmitted> =
  _IResamplingTransformImageProcessorArity1Input<T1>;
export type IResamplingTransformImageProcessorInput<T1> =
  _IResamplingTransformImageProcessorArity1Input<T1>;

declare global {
  namespace SixLabors.ImageSharp.Processing.Processors.Transforms {
    type IResamplingTransformImageProcessorInput<T1> =
      import("./IResamplingTransformImageProcessor{TPixel}").IResamplingTransformImageProcessorInput<T1>;
  }
}

export type IResamplingTransformImageProcessorHostType<T1> =
  _IResamplingTransformImageProcessorArity1HostType<T1>;

export {};
