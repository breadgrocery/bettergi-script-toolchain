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

declare const fisherFaceRecognizerBrand: unique symbol;
export interface FisherFaceRecognizer
  extends
    OpenCvSharp.Face.BasicFaceRecognizer,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [fisherFaceRecognizerBrand]: true;
}

declare global {
  namespace OpenCvSharp.Face {
    type FisherFaceRecognizer = import("./FisherFaceRecognizer").FisherFaceRecognizer;
  }
}

export interface FisherFaceRecognizerHostType extends HostType<
  FisherFaceRecognizer,
  ReferenceTypeTrait
> {
  create(): OpenCvSharp.Face.FisherFaceRecognizer;
  create(numComponents: number | StrongNumeric<Int32Host>): OpenCvSharp.Face.FisherFaceRecognizer;
  create(
    numComponents: number | StrongNumeric<Int32Host>,
    threshold: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Face.FisherFaceRecognizer;
}

export {};
