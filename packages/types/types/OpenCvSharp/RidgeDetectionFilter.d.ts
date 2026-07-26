import type {
  DoubleHost,
  EnumInput,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/IDisposable";
import "../System/Nullable";
import "./Algorithm";
import "./BorderTypes";
import "./ICvPtrHolder";
import "./InputArray";
import "./MatType";
import "./OutputArray";

declare const ridgeDetectionFilterBrand: unique symbol;
export interface RidgeDetectionFilter
  extends
    Omit<OpenCvSharp.Algorithm, "getRidgeFilteredImage">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [ridgeDetectionFilterBrand]: true;
  getRidgeFilteredImage(src: OpenCvSharp.InputArray, dst: OpenCvSharp.OutputArray): VoidResult;
}

declare global {
  namespace OpenCvSharp {
    type RidgeDetectionFilter = import("./RidgeDetectionFilter").RidgeDetectionFilter;
  }
}

export interface RidgeDetectionFilterHostType extends HostType<
  RidgeDetectionFilter,
  ReferenceTypeTrait
> {
  create(): OpenCvSharp.RidgeDetectionFilter;
  create(ddepth: OpenCvSharp.MatType | null | null): OpenCvSharp.RidgeDetectionFilter;
  create(
    ddepth: OpenCvSharp.MatType | null | null,
    dx: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.RidgeDetectionFilter;
  create(
    ddepth: OpenCvSharp.MatType | null | null,
    dx: number | StrongNumeric<Int32Host>,
    dy: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.RidgeDetectionFilter;
  create(
    ddepth: OpenCvSharp.MatType | null | null,
    dx: number | StrongNumeric<Int32Host>,
    dy: number | StrongNumeric<Int32Host>,
    ksize: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.RidgeDetectionFilter;
  create(
    ddepth: OpenCvSharp.MatType | null | null,
    dx: number | StrongNumeric<Int32Host>,
    dy: number | StrongNumeric<Int32Host>,
    ksize: number | StrongNumeric<Int32Host>,
    outDtype: OpenCvSharp.MatType | null | null
  ): OpenCvSharp.RidgeDetectionFilter;
  create(
    ddepth: OpenCvSharp.MatType | null | null,
    dx: number | StrongNumeric<Int32Host>,
    dy: number | StrongNumeric<Int32Host>,
    ksize: number | StrongNumeric<Int32Host>,
    outDtype: OpenCvSharp.MatType | null | null,
    scale: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.RidgeDetectionFilter;
  create(
    ddepth: OpenCvSharp.MatType | null | null,
    dx: number | StrongNumeric<Int32Host>,
    dy: number | StrongNumeric<Int32Host>,
    ksize: number | StrongNumeric<Int32Host>,
    outDtype: OpenCvSharp.MatType | null | null,
    scale: number | StrongNumeric<DoubleHost>,
    delta: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.RidgeDetectionFilter;
  create(
    ddepth: OpenCvSharp.MatType | null | null,
    dx: number | StrongNumeric<Int32Host>,
    dy: number | StrongNumeric<Int32Host>,
    ksize: number | StrongNumeric<Int32Host>,
    outDtype: OpenCvSharp.MatType | null | null,
    scale: number | StrongNumeric<DoubleHost>,
    delta: number | StrongNumeric<DoubleHost>,
    borderType: EnumInput<OpenCvSharp.BorderTypes>
  ): OpenCvSharp.RidgeDetectionFilter;
}

export {};
