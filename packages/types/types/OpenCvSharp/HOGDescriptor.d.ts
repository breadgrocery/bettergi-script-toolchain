import type {
  ClrHostValue,
  DoubleHost,
  EnumInput,
  HostArray,
  HostType,
  Int32Host,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  SingleHost,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/Collections/Generic/IReadOnlyList";
import "../System/IDisposable";
import "../System/Nullable";
import "./DisposableCvObject";
import "./HistogramNormType";
import "./ICvPtrHolder";
import "./Mat";
import "./Point";
import "./Rect";
import "./Size";

declare const detectionROIBrand: unique symbol;
export interface DetectionROI extends ClrHostValue {
  readonly [detectionROIBrand]: true;
  readonly scale: number;
  readonly locations: System.Collections.Generic.IReadOnlyList<OpenCvSharp.Point>;
  readonly confidences: System.Collections.Generic.IReadOnlyList<number>;
}

declare global {
  namespace OpenCvSharp {
    type DetectionROI = import("./HOGDescriptor").DetectionROI;
  }
}

export interface DetectionROIHostType extends HostType<DetectionROI, ReferenceTypeTrait> {
  new (
    scale: number | StrongNumeric<DoubleHost>,
    locations: HostArray<OpenCvSharp.Point>,
    confidences: HostArray<number | StrongNumeric<DoubleHost>>
  ): DetectionROI;
}

declare const hOGDescriptorBrand: unique symbol;
export interface HOGDescriptor
  extends
    Omit<
      OpenCvSharp.DisposableCvObject,
      | "blockSize"
      | "blockStride"
      | "cellSize"
      | "checkDetectorSize"
      | "compute"
      | "computeGradient"
      | "derivAperture"
      | "detect"
      | "detectMultiScale"
      | "detectMultiScaleROI"
      | "detectROI"
      | "gammaCorrection"
      | "getDescriptorSize"
      | "getWinSigma"
      | "groupRectangles"
      | "histogramNormType"
      | "l2HysThreshold"
      | "load"
      | "nLevels"
      | "nbins"
      | "save"
      | "setSVMDetector"
      | "signedGradient"
      | "winSigma"
      | "winSize"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [hOGDescriptorBrand]: true;
  winSize: OpenCvSharp.Size;
  blockSize: OpenCvSharp.Size;
  blockStride: OpenCvSharp.Size;
  cellSize: OpenCvSharp.Size;
  nbins: number;
  derivAperture: number;
  winSigma: number;
  histogramNormType: OpenCvSharp.HistogramNormType;
  l2HysThreshold: number;
  gammaCorrection: boolean;
  nLevels: number;
  signedGradient: boolean;
  setSVMDetector(svmDetector: HostArray<number | StrongNumeric<SingleHost>>): VoidResult;
  load(fileName: string): boolean;
  load(fileName: string, objName: string | null): boolean;
  save(fileName: string): VoidResult;
  save(fileName: string, objName: string | null): VoidResult;
  getDescriptorSize(): number;
  checkDetectorSize(): boolean;
  getWinSigma(): number;
  compute(img: OpenCvSharp.Mat): HostArray<number>;
  compute(img: OpenCvSharp.Mat, winStride: OpenCvSharp.Size | null | null): HostArray<number>;
  compute(
    img: OpenCvSharp.Mat,
    winStride: OpenCvSharp.Size | null | null,
    padding: OpenCvSharp.Size | null | null
  ): HostArray<number>;
  compute(
    img: OpenCvSharp.Mat,
    winStride: OpenCvSharp.Size | null | null,
    padding: OpenCvSharp.Size | null | null,
    locations: HostArray<OpenCvSharp.Point> | null
  ): HostArray<number>;
  detect(img: OpenCvSharp.Mat): HostArray<OpenCvSharp.Point>;
  detect(
    img: OpenCvSharp.Mat,
    hitThreshold: number | StrongNumeric<DoubleHost>
  ): HostArray<OpenCvSharp.Point>;
  detect(
    img: OpenCvSharp.Mat,
    hitThreshold: number | StrongNumeric<DoubleHost>,
    winStride: OpenCvSharp.Size | null | null
  ): HostArray<OpenCvSharp.Point>;
  detect(
    img: OpenCvSharp.Mat,
    hitThreshold: number | StrongNumeric<DoubleHost>,
    winStride: OpenCvSharp.Size | null | null,
    padding: OpenCvSharp.Size | null | null
  ): HostArray<OpenCvSharp.Point>;
  detect(
    img: OpenCvSharp.Mat,
    hitThreshold: number | StrongNumeric<DoubleHost>,
    winStride: OpenCvSharp.Size | null | null,
    padding: OpenCvSharp.Size | null | null,
    searchLocations: HostArray<OpenCvSharp.Point> | null
  ): HostArray<OpenCvSharp.Point>;
  detect(
    img: OpenCvSharp.Mat,
    weights: HostVariableOut<HostArray<number>>
  ): HostArray<OpenCvSharp.Point>;
  detect(
    img: OpenCvSharp.Mat,
    weights: HostVariableOut<HostArray<number>>,
    hitThreshold: number | StrongNumeric<DoubleHost>
  ): HostArray<OpenCvSharp.Point>;
  detect(
    img: OpenCvSharp.Mat,
    weights: HostVariableOut<HostArray<number>>,
    hitThreshold: number | StrongNumeric<DoubleHost>,
    winStride: OpenCvSharp.Size | null | null
  ): HostArray<OpenCvSharp.Point>;
  detect(
    img: OpenCvSharp.Mat,
    weights: HostVariableOut<HostArray<number>>,
    hitThreshold: number | StrongNumeric<DoubleHost>,
    winStride: OpenCvSharp.Size | null | null,
    padding: OpenCvSharp.Size | null | null
  ): HostArray<OpenCvSharp.Point>;
  detect(
    img: OpenCvSharp.Mat,
    weights: HostVariableOut<HostArray<number>>,
    hitThreshold: number | StrongNumeric<DoubleHost>,
    winStride: OpenCvSharp.Size | null | null,
    padding: OpenCvSharp.Size | null | null,
    searchLocations: HostArray<OpenCvSharp.Point> | null
  ): HostArray<OpenCvSharp.Point>;
  detectMultiScale(img: OpenCvSharp.Mat): HostArray<OpenCvSharp.Rect>;
  detectMultiScale(
    img: OpenCvSharp.Mat,
    foundWeights: HostVariableOut<HostArray<number>>
  ): HostArray<OpenCvSharp.Rect>;
  detectMultiScale(
    img: OpenCvSharp.Mat,
    foundWeights: HostVariableOut<HostArray<number>>,
    hitThreshold: number | StrongNumeric<DoubleHost>
  ): HostArray<OpenCvSharp.Rect>;
  detectMultiScale(
    img: OpenCvSharp.Mat,
    foundWeights: HostVariableOut<HostArray<number>>,
    hitThreshold: number | StrongNumeric<DoubleHost>,
    winStride: OpenCvSharp.Size | null | null
  ): HostArray<OpenCvSharp.Rect>;
  detectMultiScale(
    img: OpenCvSharp.Mat,
    foundWeights: HostVariableOut<HostArray<number>>,
    hitThreshold: number | StrongNumeric<DoubleHost>,
    winStride: OpenCvSharp.Size | null | null,
    padding: OpenCvSharp.Size | null | null
  ): HostArray<OpenCvSharp.Rect>;
  detectMultiScale(
    img: OpenCvSharp.Mat,
    foundWeights: HostVariableOut<HostArray<number>>,
    hitThreshold: number | StrongNumeric<DoubleHost>,
    winStride: OpenCvSharp.Size | null | null,
    padding: OpenCvSharp.Size | null | null,
    scale: number | StrongNumeric<DoubleHost>
  ): HostArray<OpenCvSharp.Rect>;
  detectMultiScale(
    img: OpenCvSharp.Mat,
    foundWeights: HostVariableOut<HostArray<number>>,
    hitThreshold: number | StrongNumeric<DoubleHost>,
    winStride: OpenCvSharp.Size | null | null,
    padding: OpenCvSharp.Size | null | null,
    scale: number | StrongNumeric<DoubleHost>,
    groupThreshold: number | StrongNumeric<Int32Host>
  ): HostArray<OpenCvSharp.Rect>;
  detectMultiScale(
    img: OpenCvSharp.Mat,
    hitThreshold: number | StrongNumeric<DoubleHost>
  ): HostArray<OpenCvSharp.Rect>;
  detectMultiScale(
    img: OpenCvSharp.Mat,
    hitThreshold: number | StrongNumeric<DoubleHost>,
    winStride: OpenCvSharp.Size | null | null
  ): HostArray<OpenCvSharp.Rect>;
  detectMultiScale(
    img: OpenCvSharp.Mat,
    hitThreshold: number | StrongNumeric<DoubleHost>,
    winStride: OpenCvSharp.Size | null | null,
    padding: OpenCvSharp.Size | null | null
  ): HostArray<OpenCvSharp.Rect>;
  detectMultiScale(
    img: OpenCvSharp.Mat,
    hitThreshold: number | StrongNumeric<DoubleHost>,
    winStride: OpenCvSharp.Size | null | null,
    padding: OpenCvSharp.Size | null | null,
    scale: number | StrongNumeric<DoubleHost>
  ): HostArray<OpenCvSharp.Rect>;
  detectMultiScale(
    img: OpenCvSharp.Mat,
    hitThreshold: number | StrongNumeric<DoubleHost>,
    winStride: OpenCvSharp.Size | null | null,
    padding: OpenCvSharp.Size | null | null,
    scale: number | StrongNumeric<DoubleHost>,
    groupThreshold: number | StrongNumeric<Int32Host>
  ): HostArray<OpenCvSharp.Rect>;
  computeGradient(
    img: OpenCvSharp.Mat,
    grad: OpenCvSharp.Mat,
    angleOfs: OpenCvSharp.Mat
  ): VoidResult;
  computeGradient(
    img: OpenCvSharp.Mat,
    grad: OpenCvSharp.Mat,
    angleOfs: OpenCvSharp.Mat,
    paddingTL: OpenCvSharp.Size | null | null
  ): VoidResult;
  computeGradient(
    img: OpenCvSharp.Mat,
    grad: OpenCvSharp.Mat,
    angleOfs: OpenCvSharp.Mat,
    paddingTL: OpenCvSharp.Size | null | null,
    paddingBR: OpenCvSharp.Size | null | null
  ): VoidResult;
  detectROI(
    img: OpenCvSharp.Mat,
    locations: HostArray<OpenCvSharp.Point>,
    foundLocations: HostVariableOut<HostArray<OpenCvSharp.Point>>,
    confidences: HostVariableOut<HostArray<number>>
  ): VoidResult;
  detectROI(
    img: OpenCvSharp.Mat,
    locations: HostArray<OpenCvSharp.Point>,
    foundLocations: HostVariableOut<HostArray<OpenCvSharp.Point>>,
    confidences: HostVariableOut<HostArray<number>>,
    hitThreshold: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  detectROI(
    img: OpenCvSharp.Mat,
    locations: HostArray<OpenCvSharp.Point>,
    foundLocations: HostVariableOut<HostArray<OpenCvSharp.Point>>,
    confidences: HostVariableOut<HostArray<number>>,
    hitThreshold: number | StrongNumeric<DoubleHost>,
    winStride: OpenCvSharp.Size | null | null
  ): VoidResult;
  detectROI(
    img: OpenCvSharp.Mat,
    locations: HostArray<OpenCvSharp.Point>,
    foundLocations: HostVariableOut<HostArray<OpenCvSharp.Point>>,
    confidences: HostVariableOut<HostArray<number>>,
    hitThreshold: number | StrongNumeric<DoubleHost>,
    winStride: OpenCvSharp.Size | null | null,
    padding: OpenCvSharp.Size | null | null
  ): VoidResult;
  detectMultiScaleROI(
    img: OpenCvSharp.Mat,
    foundLocations: HostVariableOut<HostArray<OpenCvSharp.Rect>>,
    locations: HostVariableOut<HostArray<OpenCvSharp.DetectionROI>>
  ): VoidResult;
  detectMultiScaleROI(
    img: OpenCvSharp.Mat,
    foundLocations: HostVariableOut<HostArray<OpenCvSharp.Rect>>,
    locations: HostVariableOut<HostArray<OpenCvSharp.DetectionROI>>,
    hitThreshold: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  detectMultiScaleROI(
    img: OpenCvSharp.Mat,
    foundLocations: HostVariableOut<HostArray<OpenCvSharp.Rect>>,
    locations: HostVariableOut<HostArray<OpenCvSharp.DetectionROI>>,
    hitThreshold: number | StrongNumeric<DoubleHost>,
    groupThreshold: number | StrongNumeric<Int32Host>
  ): VoidResult;
  groupRectangles(
    rectList: HostVariableOut<HostArray<OpenCvSharp.Rect>>,
    weights: HostVariableOut<HostArray<number>>,
    groupThreshold: number | StrongNumeric<Int32Host>,
    eps: number | StrongNumeric<DoubleHost>
  ): VoidResult;
}

declare global {
  namespace OpenCvSharp {
    type HOGDescriptor = import("./HOGDescriptor").HOGDescriptor;
  }
}

export interface HOGDescriptorHostType extends HostType<
  HOGDescriptor,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): HOGDescriptor;
  new (): HOGDescriptor;
  new (winSize: OpenCvSharp.Size | null | null): HOGDescriptor;
  new (
    winSize: OpenCvSharp.Size | null | null,
    blockSize: OpenCvSharp.Size | null | null
  ): HOGDescriptor;
  new (
    winSize: OpenCvSharp.Size | null | null,
    blockSize: OpenCvSharp.Size | null | null,
    blockStride: OpenCvSharp.Size | null | null
  ): HOGDescriptor;
  new (
    winSize: OpenCvSharp.Size | null | null,
    blockSize: OpenCvSharp.Size | null | null,
    blockStride: OpenCvSharp.Size | null | null,
    cellSize: OpenCvSharp.Size | null | null
  ): HOGDescriptor;
  new (
    winSize: OpenCvSharp.Size | null | null,
    blockSize: OpenCvSharp.Size | null | null,
    blockStride: OpenCvSharp.Size | null | null,
    cellSize: OpenCvSharp.Size | null | null,
    nbins: number | StrongNumeric<Int32Host>
  ): HOGDescriptor;
  new (
    winSize: OpenCvSharp.Size | null | null,
    blockSize: OpenCvSharp.Size | null | null,
    blockStride: OpenCvSharp.Size | null | null,
    cellSize: OpenCvSharp.Size | null | null,
    nbins: number | StrongNumeric<Int32Host>,
    derivAperture: number | StrongNumeric<Int32Host>
  ): HOGDescriptor;
  new (
    winSize: OpenCvSharp.Size | null | null,
    blockSize: OpenCvSharp.Size | null | null,
    blockStride: OpenCvSharp.Size | null | null,
    cellSize: OpenCvSharp.Size | null | null,
    nbins: number | StrongNumeric<Int32Host>,
    derivAperture: number | StrongNumeric<Int32Host>,
    winSigma: number | StrongNumeric<DoubleHost>
  ): HOGDescriptor;
  new (
    winSize: OpenCvSharp.Size | null | null,
    blockSize: OpenCvSharp.Size | null | null,
    blockStride: OpenCvSharp.Size | null | null,
    cellSize: OpenCvSharp.Size | null | null,
    nbins: number | StrongNumeric<Int32Host>,
    derivAperture: number | StrongNumeric<Int32Host>,
    winSigma: number | StrongNumeric<DoubleHost>,
    histogramNormType: EnumInput<OpenCvSharp.HistogramNormType>
  ): HOGDescriptor;
  new (
    winSize: OpenCvSharp.Size | null | null,
    blockSize: OpenCvSharp.Size | null | null,
    blockStride: OpenCvSharp.Size | null | null,
    cellSize: OpenCvSharp.Size | null | null,
    nbins: number | StrongNumeric<Int32Host>,
    derivAperture: number | StrongNumeric<Int32Host>,
    winSigma: number | StrongNumeric<DoubleHost>,
    histogramNormType: EnumInput<OpenCvSharp.HistogramNormType>,
    l2HysThreshold: number | StrongNumeric<DoubleHost>
  ): HOGDescriptor;
  new (
    winSize: OpenCvSharp.Size | null | null,
    blockSize: OpenCvSharp.Size | null | null,
    blockStride: OpenCvSharp.Size | null | null,
    cellSize: OpenCvSharp.Size | null | null,
    nbins: number | StrongNumeric<Int32Host>,
    derivAperture: number | StrongNumeric<Int32Host>,
    winSigma: number | StrongNumeric<DoubleHost>,
    histogramNormType: EnumInput<OpenCvSharp.HistogramNormType>,
    l2HysThreshold: number | StrongNumeric<DoubleHost>,
    gammaCorrection: boolean
  ): HOGDescriptor;
  new (
    winSize: OpenCvSharp.Size | null | null,
    blockSize: OpenCvSharp.Size | null | null,
    blockStride: OpenCvSharp.Size | null | null,
    cellSize: OpenCvSharp.Size | null | null,
    nbins: number | StrongNumeric<Int32Host>,
    derivAperture: number | StrongNumeric<Int32Host>,
    winSigma: number | StrongNumeric<DoubleHost>,
    histogramNormType: EnumInput<OpenCvSharp.HistogramNormType>,
    l2HysThreshold: number | StrongNumeric<DoubleHost>,
    gammaCorrection: boolean,
    nlevels: number | StrongNumeric<Int32Host>
  ): HOGDescriptor;
  new (fileName: string): HOGDescriptor;
  readonly defaultPeopleDetector: HostArray<number>;
  readonly daimlerPeopleDetector: HostArray<number>;
  readonly l2Hys: number;
  readonly defaultNlevels: number;
  getDefaultPeopleDetector(): HostArray<number>;
  getDaimlerPeopleDetector(): HostArray<number>;
}

export {};
