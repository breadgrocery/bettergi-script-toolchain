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

declare const fastGlobalSmootherFilterBrand: unique symbol;
export interface FastGlobalSmootherFilter
  extends
    Omit<OpenCvSharp.Algorithm, "filter">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [fastGlobalSmootherFilterBrand]: true;
  filter(src: OpenCvSharp.InputArray, dst: OpenCvSharp.OutputArray): VoidResult;
}

declare global {
  namespace OpenCvSharp.XImgProc {
    type FastGlobalSmootherFilter = import("./FastGlobalSmootherFilter").FastGlobalSmootherFilter;
  }
}

export interface FastGlobalSmootherFilterHostType extends HostType<
  FastGlobalSmootherFilter,
  ReferenceTypeTrait
> {
  create(
    guide: OpenCvSharp.InputArray,
    lambda: number | StrongNumeric<DoubleHost>,
    sigmaColor: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.XImgProc.FastGlobalSmootherFilter;
  create(
    guide: OpenCvSharp.InputArray,
    lambda: number | StrongNumeric<DoubleHost>,
    sigmaColor: number | StrongNumeric<DoubleHost>,
    lambdaAttenuation: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.XImgProc.FastGlobalSmootherFilter;
  create(
    guide: OpenCvSharp.InputArray,
    lambda: number | StrongNumeric<DoubleHost>,
    sigmaColor: number | StrongNumeric<DoubleHost>,
    lambdaAttenuation: number | StrongNumeric<DoubleHost>,
    numIter: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.XImgProc.FastGlobalSmootherFilter;
}

export {};
