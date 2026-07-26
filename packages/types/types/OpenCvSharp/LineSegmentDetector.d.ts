import type {
  DoubleHost,
  EnumInput,
  HostArray,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/IDisposable";
import "./Algorithm";
import "./ICvPtrHolder";
import "./InputArray";
import "./InputOutputArray";
import "./LineSegmentDetectorModes";
import "./OutputArray";
import "./Size";
import "./Vec4f";

declare const lineSegmentDetectorBrand: unique symbol;
export interface LineSegmentDetector
  extends
    Omit<OpenCvSharp.Algorithm, "compareSegments" | "detect" | "drawSegments">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [lineSegmentDetectorBrand]: true;
  detect(
    image: OpenCvSharp.InputArray,
    lines: HostVariableOut<HostArray<OpenCvSharp.Vec4f>>,
    width: HostVariableOut<HostArray<number>>,
    prec: HostVariableOut<HostArray<number>>,
    nfa: HostVariableOut<HostArray<number>>
  ): VoidResult;
  detect(image: OpenCvSharp.InputArray, lines: OpenCvSharp.OutputArray): VoidResult;
  detect(
    image: OpenCvSharp.InputArray,
    lines: OpenCvSharp.OutputArray,
    width: OpenCvSharp.OutputArray | null
  ): VoidResult;
  detect(
    image: OpenCvSharp.InputArray,
    lines: OpenCvSharp.OutputArray,
    width: OpenCvSharp.OutputArray | null,
    prec: OpenCvSharp.OutputArray | null
  ): VoidResult;
  detect(
    image: OpenCvSharp.InputArray,
    lines: OpenCvSharp.OutputArray,
    width: OpenCvSharp.OutputArray | null,
    prec: OpenCvSharp.OutputArray | null,
    nfa: OpenCvSharp.OutputArray | null
  ): VoidResult;
  drawSegments(image: OpenCvSharp.InputOutputArray, lines: OpenCvSharp.InputArray): VoidResult;
  compareSegments(
    size: OpenCvSharp.Size,
    lines1: OpenCvSharp.InputArray,
    lines2: OpenCvSharp.InputArray
  ): number;
  compareSegments(
    size: OpenCvSharp.Size,
    lines1: OpenCvSharp.InputArray,
    lines2: OpenCvSharp.InputArray,
    image: OpenCvSharp.InputOutputArray | null
  ): number;
}

declare global {
  namespace OpenCvSharp {
    type LineSegmentDetector = import("./LineSegmentDetector").LineSegmentDetector;
  }
}

export interface LineSegmentDetectorHostType extends HostType<
  LineSegmentDetector,
  ReferenceTypeTrait
> {
  create(): OpenCvSharp.LineSegmentDetector;
  create(refine: EnumInput<OpenCvSharp.LineSegmentDetectorModes>): OpenCvSharp.LineSegmentDetector;
  create(
    refine: EnumInput<OpenCvSharp.LineSegmentDetectorModes>,
    scale: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.LineSegmentDetector;
  create(
    refine: EnumInput<OpenCvSharp.LineSegmentDetectorModes>,
    scale: number | StrongNumeric<DoubleHost>,
    sigmaScale: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.LineSegmentDetector;
  create(
    refine: EnumInput<OpenCvSharp.LineSegmentDetectorModes>,
    scale: number | StrongNumeric<DoubleHost>,
    sigmaScale: number | StrongNumeric<DoubleHost>,
    quant: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.LineSegmentDetector;
  create(
    refine: EnumInput<OpenCvSharp.LineSegmentDetectorModes>,
    scale: number | StrongNumeric<DoubleHost>,
    sigmaScale: number | StrongNumeric<DoubleHost>,
    quant: number | StrongNumeric<DoubleHost>,
    angTh: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.LineSegmentDetector;
  create(
    refine: EnumInput<OpenCvSharp.LineSegmentDetectorModes>,
    scale: number | StrongNumeric<DoubleHost>,
    sigmaScale: number | StrongNumeric<DoubleHost>,
    quant: number | StrongNumeric<DoubleHost>,
    angTh: number | StrongNumeric<DoubleHost>,
    logEps: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.LineSegmentDetector;
  create(
    refine: EnumInput<OpenCvSharp.LineSegmentDetectorModes>,
    scale: number | StrongNumeric<DoubleHost>,
    sigmaScale: number | StrongNumeric<DoubleHost>,
    quant: number | StrongNumeric<DoubleHost>,
    angTh: number | StrongNumeric<DoubleHost>,
    logEps: number | StrongNumeric<DoubleHost>,
    densityTh: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.LineSegmentDetector;
  create(
    refine: EnumInput<OpenCvSharp.LineSegmentDetectorModes>,
    scale: number | StrongNumeric<DoubleHost>,
    sigmaScale: number | StrongNumeric<DoubleHost>,
    quant: number | StrongNumeric<DoubleHost>,
    angTh: number | StrongNumeric<DoubleHost>,
    logEps: number | StrongNumeric<DoubleHost>,
    densityTh: number | StrongNumeric<DoubleHost>,
    nBins: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.LineSegmentDetector;
}

export {};
