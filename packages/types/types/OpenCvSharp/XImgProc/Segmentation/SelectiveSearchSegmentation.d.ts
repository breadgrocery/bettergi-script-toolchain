import type {
  HostArray,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  SingleHost,
  StrongNumeric
} from "../../../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../../../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../../System/IDisposable";
import "../../Algorithm";
import "../../ICvPtrHolder";
import "../../InputArray";
import "../../Rect";
import "./GraphSegmentation";
import "./SelectiveSearchSegmentationStrategy";

declare const selectiveSearchSegmentationBrand: unique symbol;
export interface SelectiveSearchSegmentation
  extends
    Omit<
      OpenCvSharp.Algorithm,
      | "addGraphSegmentation"
      | "addImage"
      | "addStrategy"
      | "clearGraphSegmentations"
      | "clearImages"
      | "clearStrategies"
      | "process"
      | "setBaseImage"
      | "switchToSelectiveSearchFast"
      | "switchToSelectiveSearchQuality"
      | "switchToSingleStrategy"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [selectiveSearchSegmentationBrand]: true;
  setBaseImage(img: OpenCvSharp.InputArray): VoidResult;
  switchToSingleStrategy(): VoidResult;
  switchToSingleStrategy(k: number | StrongNumeric<Int32Host>): VoidResult;
  switchToSingleStrategy(
    k: number | StrongNumeric<Int32Host>,
    sigma: number | StrongNumeric<SingleHost>
  ): VoidResult;
  switchToSelectiveSearchFast(): VoidResult;
  switchToSelectiveSearchFast(baseK: number | StrongNumeric<Int32Host>): VoidResult;
  switchToSelectiveSearchFast(
    baseK: number | StrongNumeric<Int32Host>,
    incK: number | StrongNumeric<Int32Host>
  ): VoidResult;
  switchToSelectiveSearchFast(
    baseK: number | StrongNumeric<Int32Host>,
    incK: number | StrongNumeric<Int32Host>,
    sigma: number | StrongNumeric<SingleHost>
  ): VoidResult;
  switchToSelectiveSearchQuality(): VoidResult;
  switchToSelectiveSearchQuality(baseK: number | StrongNumeric<Int32Host>): VoidResult;
  switchToSelectiveSearchQuality(
    baseK: number | StrongNumeric<Int32Host>,
    incK: number | StrongNumeric<Int32Host>
  ): VoidResult;
  switchToSelectiveSearchQuality(
    baseK: number | StrongNumeric<Int32Host>,
    incK: number | StrongNumeric<Int32Host>,
    sigma: number | StrongNumeric<SingleHost>
  ): VoidResult;
  addImage(img: OpenCvSharp.InputArray): VoidResult;
  clearImages(): VoidResult;
  addGraphSegmentation(g: OpenCvSharp.XImgProc.Segmentation.GraphSegmentation): VoidResult;
  clearGraphSegmentations(): VoidResult;
  addStrategy(s: OpenCvSharp.XImgProc.Segmentation.SelectiveSearchSegmentationStrategy): VoidResult;
  clearStrategies(): VoidResult;
  process(rects: HostVariableOut<HostArray<OpenCvSharp.Rect>>): VoidResult;
}

declare global {
  namespace OpenCvSharp.XImgProc.Segmentation {
    type SelectiveSearchSegmentation =
      import("./SelectiveSearchSegmentation").SelectiveSearchSegmentation;
  }
}

export interface SelectiveSearchSegmentationHostType extends HostType<
  SelectiveSearchSegmentation,
  ReferenceTypeTrait
> {
  create(): OpenCvSharp.XImgProc.Segmentation.SelectiveSearchSegmentation;
}

export {};
