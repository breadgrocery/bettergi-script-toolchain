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

declare const guidedFilterBrand: unique symbol;
export interface GuidedFilter
  extends
    Omit<OpenCvSharp.Algorithm, "filter">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [guidedFilterBrand]: true;
  filter(src: OpenCvSharp.InputArray, dst: OpenCvSharp.OutputArray): VoidResult;
  filter(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    dDepth: number | StrongNumeric<Int32Host>
  ): VoidResult;
}

declare global {
  namespace OpenCvSharp.XImgProc {
    type GuidedFilter = import("./GuidedFilter").GuidedFilter;
  }
}

export interface GuidedFilterHostType extends HostType<GuidedFilter, ReferenceTypeTrait> {
  create(
    guide: OpenCvSharp.InputArray,
    radius: number | StrongNumeric<Int32Host>,
    eps: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.XImgProc.GuidedFilter;
}

export {};
