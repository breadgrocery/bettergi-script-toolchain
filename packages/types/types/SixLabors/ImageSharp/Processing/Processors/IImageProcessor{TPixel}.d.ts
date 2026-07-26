import type {
  FamilyArgumentOmitted,
  HostType,
  InterfaceTypeTrait
} from "../../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../../Microsoft/ClearScript/VoidResult";
import "../../../../System/IDisposable";

declare const iImageProcessorArity1InputBrand: unique symbol;
export interface _IImageProcessorArity1Input<TPixel> {
  readonly [iImageProcessorArity1InputBrand]: true;
}

export interface _IImageProcessorArity1<TPixel>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_IImageProcessorArity1Input<TPixel>>,
    _IImageProcessorArity1Input<TPixel> {
  execute(): VoidResult;
}

export interface _IImageProcessorArity1HostType<TPixel> extends HostType<
  _IImageProcessorArity1<TPixel>,
  InterfaceTypeTrait
> {}

export type IImageProcessorFamily<T1 = FamilyArgumentOmitted> = _IImageProcessorArity1<T1>;

declare global {
  namespace SixLabors.ImageSharp.Processing.Processors {
    type IImageProcessor<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./IImageProcessor{TPixel}").IImageProcessorFamily<T1>;
  }
}

export type IImageProcessorInputFamily<T1 = FamilyArgumentOmitted> =
  _IImageProcessorArity1Input<T1>;
export type IImageProcessorInput<T1> = _IImageProcessorArity1Input<T1>;

declare global {
  namespace SixLabors.ImageSharp.Processing.Processors {
    type IImageProcessorInput<T1> = import("./IImageProcessor{TPixel}").IImageProcessorInput<T1>;
  }
}

export type IImageProcessorHostType<T1> = _IImageProcessorArity1HostType<T1>;

export {};
