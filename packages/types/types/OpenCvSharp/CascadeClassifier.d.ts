import type {
  DoubleHost,
  EnumInput,
  HostArray,
  HostType,
  Int32Host,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../Microsoft/ClearScript/HostVariable";
import "../System/IDisposable";
import "../System/Nullable";
import "./DisposableCvObject";
import "./FileNode";
import "./HaarDetectionTypes";
import "./ICvPtrHolder";
import "./Mat";
import "./Rect";
import "./Size";

declare const cascadeClassifierBrand: unique symbol;
export interface CascadeClassifier
  extends
    Omit<
      OpenCvSharp.DisposableCvObject,
      | "detectMultiScale"
      | "empty"
      | "getFeatureType"
      | "getOriginalWindowSize"
      | "isOldFormatCascade"
      | "load"
      | "read"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [cascadeClassifierBrand]: true;
  empty(): boolean;
  load(fileName: string): boolean;
  read(fn: OpenCvSharp.FileNode): boolean;
  detectMultiScale(image: OpenCvSharp.Mat): HostArray<OpenCvSharp.Rect>;
  detectMultiScale(
    image: OpenCvSharp.Mat,
    rejectLevels: HostVariableOut<HostArray<number>>,
    levelWeights: HostVariableOut<HostArray<number>>
  ): HostArray<OpenCvSharp.Rect>;
  detectMultiScale(
    image: OpenCvSharp.Mat,
    rejectLevels: HostVariableOut<HostArray<number>>,
    levelWeights: HostVariableOut<HostArray<number>>,
    scaleFactor: number | StrongNumeric<DoubleHost>
  ): HostArray<OpenCvSharp.Rect>;
  detectMultiScale(
    image: OpenCvSharp.Mat,
    rejectLevels: HostVariableOut<HostArray<number>>,
    levelWeights: HostVariableOut<HostArray<number>>,
    scaleFactor: number | StrongNumeric<DoubleHost>,
    minNeighbors: number | StrongNumeric<Int32Host>
  ): HostArray<OpenCvSharp.Rect>;
  detectMultiScale(
    image: OpenCvSharp.Mat,
    rejectLevels: HostVariableOut<HostArray<number>>,
    levelWeights: HostVariableOut<HostArray<number>>,
    scaleFactor: number | StrongNumeric<DoubleHost>,
    minNeighbors: number | StrongNumeric<Int32Host>,
    flags: EnumInput<OpenCvSharp.HaarDetectionTypes>
  ): HostArray<OpenCvSharp.Rect>;
  detectMultiScale(
    image: OpenCvSharp.Mat,
    rejectLevels: HostVariableOut<HostArray<number>>,
    levelWeights: HostVariableOut<HostArray<number>>,
    scaleFactor: number | StrongNumeric<DoubleHost>,
    minNeighbors: number | StrongNumeric<Int32Host>,
    flags: EnumInput<OpenCvSharp.HaarDetectionTypes>,
    minSize: OpenCvSharp.Size | null | null
  ): HostArray<OpenCvSharp.Rect>;
  detectMultiScale(
    image: OpenCvSharp.Mat,
    rejectLevels: HostVariableOut<HostArray<number>>,
    levelWeights: HostVariableOut<HostArray<number>>,
    scaleFactor: number | StrongNumeric<DoubleHost>,
    minNeighbors: number | StrongNumeric<Int32Host>,
    flags: EnumInput<OpenCvSharp.HaarDetectionTypes>,
    minSize: OpenCvSharp.Size | null | null,
    maxSize: OpenCvSharp.Size | null | null
  ): HostArray<OpenCvSharp.Rect>;
  detectMultiScale(
    image: OpenCvSharp.Mat,
    rejectLevels: HostVariableOut<HostArray<number>>,
    levelWeights: HostVariableOut<HostArray<number>>,
    scaleFactor: number | StrongNumeric<DoubleHost>,
    minNeighbors: number | StrongNumeric<Int32Host>,
    flags: EnumInput<OpenCvSharp.HaarDetectionTypes>,
    minSize: OpenCvSharp.Size | null | null,
    maxSize: OpenCvSharp.Size | null | null,
    outputRejectLevels: boolean
  ): HostArray<OpenCvSharp.Rect>;
  detectMultiScale(
    image: OpenCvSharp.Mat,
    scaleFactor: number | StrongNumeric<DoubleHost>
  ): HostArray<OpenCvSharp.Rect>;
  detectMultiScale(
    image: OpenCvSharp.Mat,
    scaleFactor: number | StrongNumeric<DoubleHost>,
    minNeighbors: number | StrongNumeric<Int32Host>
  ): HostArray<OpenCvSharp.Rect>;
  detectMultiScale(
    image: OpenCvSharp.Mat,
    scaleFactor: number | StrongNumeric<DoubleHost>,
    minNeighbors: number | StrongNumeric<Int32Host>,
    flags: EnumInput<OpenCvSharp.HaarDetectionTypes>
  ): HostArray<OpenCvSharp.Rect>;
  detectMultiScale(
    image: OpenCvSharp.Mat,
    scaleFactor: number | StrongNumeric<DoubleHost>,
    minNeighbors: number | StrongNumeric<Int32Host>,
    flags: EnumInput<OpenCvSharp.HaarDetectionTypes>,
    minSize: OpenCvSharp.Size | null | null
  ): HostArray<OpenCvSharp.Rect>;
  detectMultiScale(
    image: OpenCvSharp.Mat,
    scaleFactor: number | StrongNumeric<DoubleHost>,
    minNeighbors: number | StrongNumeric<Int32Host>,
    flags: EnumInput<OpenCvSharp.HaarDetectionTypes>,
    minSize: OpenCvSharp.Size | null | null,
    maxSize: OpenCvSharp.Size | null | null
  ): HostArray<OpenCvSharp.Rect>;
  isOldFormatCascade(): boolean;
  getOriginalWindowSize(): OpenCvSharp.Size;
  getFeatureType(): number;
}

declare global {
  namespace OpenCvSharp {
    type CascadeClassifier = import("./CascadeClassifier").CascadeClassifier;
  }
}

export interface CascadeClassifierHostType extends HostType<
  CascadeClassifier,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): CascadeClassifier;
  new (fileName: string): CascadeClassifier;
}

export {};
