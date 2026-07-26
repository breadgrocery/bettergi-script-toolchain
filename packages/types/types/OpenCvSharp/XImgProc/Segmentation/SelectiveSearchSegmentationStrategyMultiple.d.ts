import type {
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../../System/IDisposable";
import "../../ICvPtrHolder";
import "../../InputArray";
import "./SelectiveSearchSegmentationStrategy";

declare const selectiveSearchSegmentationStrategyMultipleBrand: unique symbol;
export interface SelectiveSearchSegmentationStrategyMultiple
  extends
    Omit<
      OpenCvSharp.XImgProc.Segmentation.SelectiveSearchSegmentationStrategy,
      "get" | "merge" | "setImage"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [selectiveSearchSegmentationStrategyMultipleBrand]: true;
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
    type SelectiveSearchSegmentationStrategyMultiple =
      import("./SelectiveSearchSegmentationStrategyMultiple").SelectiveSearchSegmentationStrategyMultiple;
  }
}

export interface SelectiveSearchSegmentationStrategyMultipleHostType extends HostType<
  SelectiveSearchSegmentationStrategyMultiple,
  ReferenceTypeTrait
> {
  create(): OpenCvSharp.XImgProc.Segmentation.SelectiveSearchSegmentationStrategyMultiple;
  create(
    s1: OpenCvSharp.XImgProc.Segmentation.SelectiveSearchSegmentationStrategy
  ): OpenCvSharp.XImgProc.Segmentation.SelectiveSearchSegmentationStrategyMultiple;
  create(
    s1: OpenCvSharp.XImgProc.Segmentation.SelectiveSearchSegmentationStrategy,
    s2: OpenCvSharp.XImgProc.Segmentation.SelectiveSearchSegmentationStrategy
  ): OpenCvSharp.XImgProc.Segmentation.SelectiveSearchSegmentationStrategyMultiple;
  create(
    s1: OpenCvSharp.XImgProc.Segmentation.SelectiveSearchSegmentationStrategy,
    s2: OpenCvSharp.XImgProc.Segmentation.SelectiveSearchSegmentationStrategy,
    s3: OpenCvSharp.XImgProc.Segmentation.SelectiveSearchSegmentationStrategy
  ): OpenCvSharp.XImgProc.Segmentation.SelectiveSearchSegmentationStrategyMultiple;
  create(
    s1: OpenCvSharp.XImgProc.Segmentation.SelectiveSearchSegmentationStrategy,
    s2: OpenCvSharp.XImgProc.Segmentation.SelectiveSearchSegmentationStrategy,
    s3: OpenCvSharp.XImgProc.Segmentation.SelectiveSearchSegmentationStrategy,
    s4: OpenCvSharp.XImgProc.Segmentation.SelectiveSearchSegmentationStrategy
  ): OpenCvSharp.XImgProc.Segmentation.SelectiveSearchSegmentationStrategyMultiple;
}

export {};
