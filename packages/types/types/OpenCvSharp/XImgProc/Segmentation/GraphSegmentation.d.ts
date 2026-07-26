import type {
  DoubleHost,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  SingleHost,
  StrongNumeric
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../../System/IDisposable";
import "../../Algorithm";
import "../../ICvPtrHolder";
import "../../InputArray";
import "../../OutputArray";

declare const graphSegmentationBrand: unique symbol;
export interface GraphSegmentation
  extends
    Omit<OpenCvSharp.Algorithm, "k" | "minSize" | "processImage" | "sigma">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [graphSegmentationBrand]: true;
  sigma: number;
  k: number;
  minSize: number;
  processImage(src: OpenCvSharp.InputArray, dst: OpenCvSharp.OutputArray): VoidResult;
}

declare global {
  namespace OpenCvSharp.XImgProc.Segmentation {
    type GraphSegmentation = import("./GraphSegmentation").GraphSegmentation;
  }
}

export interface GraphSegmentationHostType extends HostType<GraphSegmentation, ReferenceTypeTrait> {
  create(): OpenCvSharp.XImgProc.Segmentation.GraphSegmentation;
  create(
    sigma: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.XImgProc.Segmentation.GraphSegmentation;
  create(
    sigma: number | StrongNumeric<DoubleHost>,
    k: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.XImgProc.Segmentation.GraphSegmentation;
  create(
    sigma: number | StrongNumeric<DoubleHost>,
    k: number | StrongNumeric<SingleHost>,
    minSize: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.XImgProc.Segmentation.GraphSegmentation;
}

export {};
