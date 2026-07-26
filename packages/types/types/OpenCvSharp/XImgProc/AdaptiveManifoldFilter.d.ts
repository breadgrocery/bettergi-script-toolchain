import type {
  DoubleHost,
  HostType,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../../System/IDisposable";
import "../Algorithm";
import "../ICvPtrHolder";
import "../InputArray";
import "../OutputArray";

declare const adaptiveManifoldFilterBrand: unique symbol;
export interface AdaptiveManifoldFilter
  extends
    Omit<
      OpenCvSharp.Algorithm,
      "adjustOutliers" | "filter" | "pcaIterations" | "sigmaR" | "sigmaS" | "treeHeight" | "useRNG"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [adaptiveManifoldFilterBrand]: true;
  sigmaS: number;
  sigmaR: number;
  treeHeight: number;
  pcaIterations: number;
  adjustOutliers: boolean;
  useRNG: boolean;
  filter(src: OpenCvSharp.InputArray, dst: OpenCvSharp.OutputArray): VoidResult;
  filter(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    joint: OpenCvSharp.InputArray | null
  ): VoidResult;
}

declare global {
  namespace OpenCvSharp.XImgProc {
    type AdaptiveManifoldFilter = import("./AdaptiveManifoldFilter").AdaptiveManifoldFilter;
  }
}

export interface AdaptiveManifoldFilterHostType extends HostType<
  AdaptiveManifoldFilter,
  ReferenceTypeTrait
> {
  create(
    sigmaS: number | StrongNumeric<DoubleHost>,
    sigmaR: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.XImgProc.AdaptiveManifoldFilter;
  create(
    sigmaS: number | StrongNumeric<DoubleHost>,
    sigmaR: number | StrongNumeric<DoubleHost>,
    adjustOutliers: boolean
  ): OpenCvSharp.XImgProc.AdaptiveManifoldFilter;
}

export {};
