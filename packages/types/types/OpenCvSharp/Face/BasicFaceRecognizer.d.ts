import type {
  DoubleHost,
  HostArray,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../../System/IDisposable";
import "../ICvPtrHolder";
import "../Mat";
import "./FaceRecognizer";

declare const basicFaceRecognizerBrand: unique symbol;
export interface BasicFaceRecognizer
  extends
    Omit<
      OpenCvSharp.Face.FaceRecognizer,
      | "getEigenValues"
      | "getEigenVectors"
      | "getLabels"
      | "getMean"
      | "getNumComponents"
      | "getProjections"
      | "getThreshold"
      | "setNumComponents"
      | "setThreshold"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [basicFaceRecognizerBrand]: true;
  getNumComponents(): number;
  setNumComponents(val: number | StrongNumeric<Int32Host>): VoidResult;
  getThreshold(): number;
  setThreshold(val: number | StrongNumeric<DoubleHost>): VoidResult;
  getProjections(): HostArray<OpenCvSharp.Mat>;
  getLabels(): OpenCvSharp.Mat;
  getEigenValues(): OpenCvSharp.Mat;
  getEigenVectors(): OpenCvSharp.Mat;
  getMean(): OpenCvSharp.Mat;
}

declare global {
  namespace OpenCvSharp.Face {
    type BasicFaceRecognizer = import("./BasicFaceRecognizer").BasicFaceRecognizer;
  }
}

export interface BasicFaceRecognizerHostType extends HostType<
  BasicFaceRecognizer,
  ReferenceTypeTrait
> {}

export {};
