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

declare const lBPHFaceRecognizerBrand: unique symbol;
export interface LBPHFaceRecognizer
  extends
    Omit<
      OpenCvSharp.Face.FaceRecognizer,
      | "getGridX"
      | "getGridY"
      | "getHistograms"
      | "getLabels"
      | "getNeighbors"
      | "getRadius"
      | "getThreshold"
      | "setGridX"
      | "setGridY"
      | "setNeighbors"
      | "setRadius"
      | "setThreshold"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [lBPHFaceRecognizerBrand]: true;
  getGridX(): number;
  setGridX(val: number | StrongNumeric<Int32Host>): VoidResult;
  getGridY(): number;
  setGridY(val: number | StrongNumeric<Int32Host>): VoidResult;
  getRadius(): number;
  setRadius(val: number | StrongNumeric<Int32Host>): VoidResult;
  getNeighbors(): number;
  setNeighbors(val: number | StrongNumeric<Int32Host>): VoidResult;
  getThreshold(): number;
  setThreshold(val: number | StrongNumeric<DoubleHost>): VoidResult;
  getHistograms(): HostArray<OpenCvSharp.Mat>;
  getLabels(): OpenCvSharp.Mat;
}

declare global {
  namespace OpenCvSharp.Face {
    type LBPHFaceRecognizer = import("./LBPHFaceRecognizer").LBPHFaceRecognizer;
  }
}

export interface LBPHFaceRecognizerHostType extends HostType<
  LBPHFaceRecognizer,
  ReferenceTypeTrait
> {
  create(): OpenCvSharp.Face.LBPHFaceRecognizer;
  create(radius: number | StrongNumeric<Int32Host>): OpenCvSharp.Face.LBPHFaceRecognizer;
  create(
    radius: number | StrongNumeric<Int32Host>,
    neighbors: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Face.LBPHFaceRecognizer;
  create(
    radius: number | StrongNumeric<Int32Host>,
    neighbors: number | StrongNumeric<Int32Host>,
    gridX: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Face.LBPHFaceRecognizer;
  create(
    radius: number | StrongNumeric<Int32Host>,
    neighbors: number | StrongNumeric<Int32Host>,
    gridX: number | StrongNumeric<Int32Host>,
    gridY: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Face.LBPHFaceRecognizer;
  create(
    radius: number | StrongNumeric<Int32Host>,
    neighbors: number | StrongNumeric<Int32Host>,
    gridX: number | StrongNumeric<Int32Host>,
    gridY: number | StrongNumeric<Int32Host>,
    threshold: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Face.LBPHFaceRecognizer;
}

export {};
