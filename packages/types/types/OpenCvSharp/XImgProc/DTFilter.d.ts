import type {
  DoubleHost,
  EnumInput,
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
import "./EdgeAwareFiltersList";

declare const dTFilterBrand: unique symbol;
export interface DTFilter
  extends
    Omit<OpenCvSharp.Algorithm, "filter">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [dTFilterBrand]: true;
  filter(src: OpenCvSharp.InputArray, dst: OpenCvSharp.OutputArray): VoidResult;
  filter(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    dDepth: number | StrongNumeric<Int32Host>
  ): VoidResult;
}

declare global {
  namespace OpenCvSharp.XImgProc {
    type DTFilter = import("./DTFilter").DTFilter;
  }
}

export interface DTFilterHostType extends HostType<DTFilter, ReferenceTypeTrait> {
  create(
    guide: OpenCvSharp.InputArray,
    sigmaSpatial: number | StrongNumeric<DoubleHost>,
    sigmaColor: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.XImgProc.DTFilter;
  create(
    guide: OpenCvSharp.InputArray,
    sigmaSpatial: number | StrongNumeric<DoubleHost>,
    sigmaColor: number | StrongNumeric<DoubleHost>,
    mode: EnumInput<OpenCvSharp.XImgProc.EdgeAwareFiltersList>
  ): OpenCvSharp.XImgProc.DTFilter;
  create(
    guide: OpenCvSharp.InputArray,
    sigmaSpatial: number | StrongNumeric<DoubleHost>,
    sigmaColor: number | StrongNumeric<DoubleHost>,
    mode: EnumInput<OpenCvSharp.XImgProc.EdgeAwareFiltersList>,
    numIters: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.XImgProc.DTFilter;
}

export {};
