import type {
  DoubleHost,
  HostArray,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  SingleHost,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../../System/Collections/Generic/IEnumerable";
import "../../System/IDisposable";
import "../Algorithm";
import "../ICvPtrHolder";
import "../InputArray";
import "../InputOutputArray";
import "../OutputArray";
import "../Vec4f";

declare const fastLineDetectorBrand: unique symbol;
export interface FastLineDetector
  extends
    Omit<OpenCvSharp.Algorithm, "detect" | "drawSegments">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [fastLineDetectorBrand]: true;
  detect(image: OpenCvSharp.InputArray): HostArray<OpenCvSharp.Vec4f>;
  detect(image: OpenCvSharp.InputArray, lines: OpenCvSharp.OutputArray): VoidResult;
  drawSegments(image: OpenCvSharp.InputOutputArray, lines: OpenCvSharp.InputArray): VoidResult;
  drawSegments(
    image: OpenCvSharp.InputOutputArray,
    lines: OpenCvSharp.InputArray,
    drawArrow: boolean
  ): VoidResult;
  drawSegments(
    image: OpenCvSharp.InputOutputArray,
    lines: System.Collections.Generic.IEnumerable<OpenCvSharp.Vec4f>
  ): VoidResult;
  drawSegments(
    image: OpenCvSharp.InputOutputArray,
    lines: System.Collections.Generic.IEnumerable<OpenCvSharp.Vec4f>,
    drawArrow: boolean
  ): VoidResult;
}

declare global {
  namespace OpenCvSharp.XImgProc {
    type FastLineDetector = import("./FastLineDetector").FastLineDetector;
  }
}

export interface FastLineDetectorHostType extends HostType<FastLineDetector, ReferenceTypeTrait> {
  create(): OpenCvSharp.XImgProc.FastLineDetector;
  create(lengthThreshold: number | StrongNumeric<Int32Host>): OpenCvSharp.XImgProc.FastLineDetector;
  create(
    lengthThreshold: number | StrongNumeric<Int32Host>,
    distanceThreshold: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.XImgProc.FastLineDetector;
  create(
    lengthThreshold: number | StrongNumeric<Int32Host>,
    distanceThreshold: number | StrongNumeric<SingleHost>,
    cannyTh1: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.XImgProc.FastLineDetector;
  create(
    lengthThreshold: number | StrongNumeric<Int32Host>,
    distanceThreshold: number | StrongNumeric<SingleHost>,
    cannyTh1: number | StrongNumeric<DoubleHost>,
    cannyTh2: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.XImgProc.FastLineDetector;
  create(
    lengthThreshold: number | StrongNumeric<Int32Host>,
    distanceThreshold: number | StrongNumeric<SingleHost>,
    cannyTh1: number | StrongNumeric<DoubleHost>,
    cannyTh2: number | StrongNumeric<DoubleHost>,
    cannyApertureSize: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.XImgProc.FastLineDetector;
  create(
    lengthThreshold: number | StrongNumeric<Int32Host>,
    distanceThreshold: number | StrongNumeric<SingleHost>,
    cannyTh1: number | StrongNumeric<DoubleHost>,
    cannyTh2: number | StrongNumeric<DoubleHost>,
    cannyApertureSize: number | StrongNumeric<Int32Host>,
    doMerge: boolean
  ): OpenCvSharp.XImgProc.FastLineDetector;
}

export {};
