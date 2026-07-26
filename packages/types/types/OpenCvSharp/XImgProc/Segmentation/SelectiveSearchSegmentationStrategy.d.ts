import type {
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../../System/IDisposable";
import "../../Algorithm";
import "../../ICvPtrHolder";
import "../../InputArray";
import "../../Ptr";

declare const selectiveSearchSegmentationStrategyBrand: unique symbol;
export interface SelectiveSearchSegmentationStrategy
  extends
    Omit<OpenCvSharp.Algorithm, "get" | "merge" | "ptrObj" | "setImage">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [selectiveSearchSegmentationStrategyBrand]: true;
  readonly ptrObj: OpenCvSharp.Ptr;
  setImage(
    img: OpenCvSharp.InputArray,
    regions: OpenCvSharp.InputArray,
    sizes: OpenCvSharp.InputArray
  ): VoidResult;
  setImage(
    img: OpenCvSharp.InputArray,
    regions: OpenCvSharp.InputArray,
    sizes: OpenCvSharp.InputArray,
    imageId: number | StrongNumeric<Int32Host>
  ): VoidResult;
  get(r1: number | StrongNumeric<Int32Host>, r2: number | StrongNumeric<Int32Host>): number;
  merge(r1: number | StrongNumeric<Int32Host>, r2: number | StrongNumeric<Int32Host>): VoidResult;
}

declare global {
  namespace OpenCvSharp.XImgProc.Segmentation {
    type SelectiveSearchSegmentationStrategy =
      import("./SelectiveSearchSegmentationStrategy").SelectiveSearchSegmentationStrategy;
  }
}

export interface SelectiveSearchSegmentationStrategyHostType extends HostType<
  SelectiveSearchSegmentationStrategy,
  ReferenceTypeTrait
> {}

declare const selectiveSearchSegmentationStrategyColorBrand: unique symbol;
export interface SelectiveSearchSegmentationStrategyColor
  extends
    OpenCvSharp.XImgProc.Segmentation.SelectiveSearchSegmentationStrategy,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [selectiveSearchSegmentationStrategyColorBrand]: true;
}

declare global {
  namespace OpenCvSharp.XImgProc.Segmentation {
    type SelectiveSearchSegmentationStrategyColor =
      import("./SelectiveSearchSegmentationStrategy").SelectiveSearchSegmentationStrategyColor;
  }
}

export interface SelectiveSearchSegmentationStrategyColorHostType extends HostType<
  SelectiveSearchSegmentationStrategyColor,
  ReferenceTypeTrait
> {
  create(): OpenCvSharp.XImgProc.Segmentation.SelectiveSearchSegmentationStrategyColor;
}

declare const selectiveSearchSegmentationStrategyFillBrand: unique symbol;
export interface SelectiveSearchSegmentationStrategyFill
  extends
    OpenCvSharp.XImgProc.Segmentation.SelectiveSearchSegmentationStrategy,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [selectiveSearchSegmentationStrategyFillBrand]: true;
}

declare global {
  namespace OpenCvSharp.XImgProc.Segmentation {
    type SelectiveSearchSegmentationStrategyFill =
      import("./SelectiveSearchSegmentationStrategy").SelectiveSearchSegmentationStrategyFill;
  }
}

export interface SelectiveSearchSegmentationStrategyFillHostType extends HostType<
  SelectiveSearchSegmentationStrategyFill,
  ReferenceTypeTrait
> {
  create(): OpenCvSharp.XImgProc.Segmentation.SelectiveSearchSegmentationStrategyFill;
}

declare const selectiveSearchSegmentationStrategySizeBrand: unique symbol;
export interface SelectiveSearchSegmentationStrategySize
  extends
    OpenCvSharp.XImgProc.Segmentation.SelectiveSearchSegmentationStrategy,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [selectiveSearchSegmentationStrategySizeBrand]: true;
}

declare global {
  namespace OpenCvSharp.XImgProc.Segmentation {
    type SelectiveSearchSegmentationStrategySize =
      import("./SelectiveSearchSegmentationStrategy").SelectiveSearchSegmentationStrategySize;
  }
}

export interface SelectiveSearchSegmentationStrategySizeHostType extends HostType<
  SelectiveSearchSegmentationStrategySize,
  ReferenceTypeTrait
> {
  create(): OpenCvSharp.XImgProc.Segmentation.SelectiveSearchSegmentationStrategySize;
}

declare const selectiveSearchSegmentationStrategyTextureBrand: unique symbol;
export interface SelectiveSearchSegmentationStrategyTexture
  extends
    OpenCvSharp.XImgProc.Segmentation.SelectiveSearchSegmentationStrategy,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [selectiveSearchSegmentationStrategyTextureBrand]: true;
}

declare global {
  namespace OpenCvSharp.XImgProc.Segmentation {
    type SelectiveSearchSegmentationStrategyTexture =
      import("./SelectiveSearchSegmentationStrategy").SelectiveSearchSegmentationStrategyTexture;
  }
}

export interface SelectiveSearchSegmentationStrategyTextureHostType extends HostType<
  SelectiveSearchSegmentationStrategyTexture,
  ReferenceTypeTrait
> {
  create(): OpenCvSharp.XImgProc.Segmentation.SelectiveSearchSegmentationStrategyTexture;
}

export {};
