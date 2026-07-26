import type {
  DoubleHost,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import "../../System/IDisposable";
import "../ICvPtrHolder";
import "./BasicFaceRecognizer";

declare const eigenFaceRecognizerBrand: unique symbol;
export interface EigenFaceRecognizer
  extends
    OpenCvSharp.Face.BasicFaceRecognizer,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [eigenFaceRecognizerBrand]: true;
}

declare global {
  namespace OpenCvSharp.Face {
    type EigenFaceRecognizer = import("./EigenFaceRecognizer").EigenFaceRecognizer;
  }
}

export interface EigenFaceRecognizerHostType extends HostType<
  EigenFaceRecognizer,
  ReferenceTypeTrait
> {
  create(): OpenCvSharp.Face.EigenFaceRecognizer;
  create(numComponents: number | StrongNumeric<Int32Host>): OpenCvSharp.Face.EigenFaceRecognizer;
  create(
    numComponents: number | StrongNumeric<Int32Host>,
    threshold: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Face.EigenFaceRecognizer;
}

export {};
