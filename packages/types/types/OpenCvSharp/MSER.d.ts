import type {
  DoubleHost,
  HostArray,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/IDisposable";
import "./Feature2D";
import "./ICvPtrHolder";
import "./InputArray";
import "./Point";
import "./Rect";

declare const mSERBrand: unique symbol;
export interface MSER
  extends
    Omit<OpenCvSharp.Feature2D, "delta" | "detectRegions" | "maxArea" | "minArea" | "pass2Only">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [mSERBrand]: true;
  delta: number;
  minArea: number;
  maxArea: number;
  pass2Only: boolean;
  detectRegions(
    image: OpenCvSharp.InputArray,
    msers: HostVariableOut<HostArray<HostArray<OpenCvSharp.Point>>>,
    bboxes: HostVariableOut<HostArray<OpenCvSharp.Rect>>
  ): VoidResult;
}

declare global {
  namespace OpenCvSharp {
    type MSER = import("./MSER").MSER;
  }
}

export interface MSERHostType extends HostType<MSER, ReferenceTypeTrait> {
  create(): OpenCvSharp.MSER;
  create(delta: number | StrongNumeric<Int32Host>): OpenCvSharp.MSER;
  create(
    delta: number | StrongNumeric<Int32Host>,
    minArea: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.MSER;
  create(
    delta: number | StrongNumeric<Int32Host>,
    minArea: number | StrongNumeric<Int32Host>,
    maxArea: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.MSER;
  create(
    delta: number | StrongNumeric<Int32Host>,
    minArea: number | StrongNumeric<Int32Host>,
    maxArea: number | StrongNumeric<Int32Host>,
    maxVariation: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.MSER;
  create(
    delta: number | StrongNumeric<Int32Host>,
    minArea: number | StrongNumeric<Int32Host>,
    maxArea: number | StrongNumeric<Int32Host>,
    maxVariation: number | StrongNumeric<DoubleHost>,
    minDiversity: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.MSER;
  create(
    delta: number | StrongNumeric<Int32Host>,
    minArea: number | StrongNumeric<Int32Host>,
    maxArea: number | StrongNumeric<Int32Host>,
    maxVariation: number | StrongNumeric<DoubleHost>,
    minDiversity: number | StrongNumeric<DoubleHost>,
    maxEvolution: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.MSER;
  create(
    delta: number | StrongNumeric<Int32Host>,
    minArea: number | StrongNumeric<Int32Host>,
    maxArea: number | StrongNumeric<Int32Host>,
    maxVariation: number | StrongNumeric<DoubleHost>,
    minDiversity: number | StrongNumeric<DoubleHost>,
    maxEvolution: number | StrongNumeric<Int32Host>,
    areaThreshold: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.MSER;
  create(
    delta: number | StrongNumeric<Int32Host>,
    minArea: number | StrongNumeric<Int32Host>,
    maxArea: number | StrongNumeric<Int32Host>,
    maxVariation: number | StrongNumeric<DoubleHost>,
    minDiversity: number | StrongNumeric<DoubleHost>,
    maxEvolution: number | StrongNumeric<Int32Host>,
    areaThreshold: number | StrongNumeric<DoubleHost>,
    minMargin: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.MSER;
  create(
    delta: number | StrongNumeric<Int32Host>,
    minArea: number | StrongNumeric<Int32Host>,
    maxArea: number | StrongNumeric<Int32Host>,
    maxVariation: number | StrongNumeric<DoubleHost>,
    minDiversity: number | StrongNumeric<DoubleHost>,
    maxEvolution: number | StrongNumeric<Int32Host>,
    areaThreshold: number | StrongNumeric<DoubleHost>,
    minMargin: number | StrongNumeric<DoubleHost>,
    edgeBlurSize: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.MSER;
}

export {};
