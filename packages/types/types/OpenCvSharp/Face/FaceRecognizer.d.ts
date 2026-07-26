import type {
  DoubleHost,
  HostArray,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../../System/Collections/Generic/IEnumerable";
import "../../System/IDisposable";
import "../Algorithm";
import "../FileNode";
import "../FileStorage";
import "../ICvPtrHolder";
import "../InputArray";
import "../Mat";

declare const faceRecognizerBrand: unique symbol;
export interface FaceRecognizer
  extends
    Omit<
      OpenCvSharp.Algorithm,
      | "getLabelInfo"
      | "getLabelsByString"
      | "getThreshold"
      | "predict"
      | "read"
      | "setLabelInfo"
      | "setThreshold"
      | "train"
      | "update"
      | "write"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [faceRecognizerBrand]: true;
  train(
    src: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    labels: System.Collections.Generic.IEnumerable<number>
  ): VoidResult;
  update(
    src: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    labels: System.Collections.Generic.IEnumerable<number>
  ): VoidResult;
  predict(src: OpenCvSharp.InputArray): number;
  predict(
    src: OpenCvSharp.InputArray,
    label: HostVariableOut<number>,
    confidence: HostVariableOut<number>
  ): VoidResult;
  write(fileName: string): VoidResult;
  write(fs: OpenCvSharp.FileStorage): VoidResult;
  read(fileName: string): VoidResult;
  read(fn: OpenCvSharp.FileNode): VoidResult;
  setLabelInfo(label: number | StrongNumeric<Int32Host>, strInfo: string): VoidResult;
  getLabelInfo(label: number | StrongNumeric<Int32Host>): string;
  getLabelsByString(str: string): HostArray<number>;
  getThreshold(): number;
  setThreshold(val: number | StrongNumeric<DoubleHost>): VoidResult;
}

declare global {
  namespace OpenCvSharp.Face {
    type FaceRecognizer = import("./FaceRecognizer").FaceRecognizer;
  }
}

export interface FaceRecognizerHostType extends HostType<FaceRecognizer, ReferenceTypeTrait> {}

export {};
