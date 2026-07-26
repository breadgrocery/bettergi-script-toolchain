import type { HostArray, HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/IDisposable";
import "./DisposableCvObject";
import "./ICvPtrHolder";
import "./InputArray";
import "./Rect";

declare const textDetectorBrand: unique symbol;
export interface TextDetector
  extends
    Omit<OpenCvSharp.DisposableCvObject, "detect">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [textDetectorBrand]: true;
  detect(
    inputImage: OpenCvSharp.InputArray,
    bbox: HostVariableOut<HostArray<OpenCvSharp.Rect>>,
    confidence: HostVariableOut<HostArray<number>>
  ): VoidResult;
}

declare global {
  namespace OpenCvSharp {
    type TextDetector = import("./TextDetector").TextDetector;
  }
}

export interface TextDetectorHostType extends HostType<TextDetector, ReferenceTypeTrait> {}

export {};
