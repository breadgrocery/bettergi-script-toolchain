import type {
  DoubleHost,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../../System/IDisposable";
import "../Algorithm";
import "../ICvPtrHolder";
import "../InputArray";
import "../OutputArray";

declare const fastBilateralSolverFilterBrand: unique symbol;
export interface FastBilateralSolverFilter
  extends
    Omit<OpenCvSharp.Algorithm, "filter">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [fastBilateralSolverFilterBrand]: true;
  filter(
    src: OpenCvSharp.InputArray,
    confidence: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray
  ): VoidResult;
}

declare global {
  namespace OpenCvSharp.XImgProc {
    type FastBilateralSolverFilter =
      import("./FastBilateralSolverFilter").FastBilateralSolverFilter;
  }
}

export interface FastBilateralSolverFilterHostType extends HostType<
  FastBilateralSolverFilter,
  ReferenceTypeTrait
> {
  create(
    guide: OpenCvSharp.InputArray,
    sigmaSpatial: number | StrongNumeric<DoubleHost>,
    sigmaLuma: number | StrongNumeric<DoubleHost>,
    sigmaChroma: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.XImgProc.FastBilateralSolverFilter;
  create(
    guide: OpenCvSharp.InputArray,
    sigmaSpatial: number | StrongNumeric<DoubleHost>,
    sigmaLuma: number | StrongNumeric<DoubleHost>,
    sigmaChroma: number | StrongNumeric<DoubleHost>,
    lambda: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.XImgProc.FastBilateralSolverFilter;
  create(
    guide: OpenCvSharp.InputArray,
    sigmaSpatial: number | StrongNumeric<DoubleHost>,
    sigmaLuma: number | StrongNumeric<DoubleHost>,
    sigmaChroma: number | StrongNumeric<DoubleHost>,
    lambda: number | StrongNumeric<DoubleHost>,
    numIter: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.XImgProc.FastBilateralSolverFilter;
  create(
    guide: OpenCvSharp.InputArray,
    sigmaSpatial: number | StrongNumeric<DoubleHost>,
    sigmaLuma: number | StrongNumeric<DoubleHost>,
    sigmaChroma: number | StrongNumeric<DoubleHost>,
    lambda: number | StrongNumeric<DoubleHost>,
    numIter: number | StrongNumeric<Int32Host>,
    maxTol: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.XImgProc.FastBilateralSolverFilter;
}

export {};
