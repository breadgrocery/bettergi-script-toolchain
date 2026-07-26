import type { HostArray, HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/Collections/Generic/IEnumerable";
import "../System/IDisposable";
import "./ICvPtrHolder";
import "./InputArray";
import "./Rect";
import "./Size";
import "./TextDetector";

declare const textDetectorCNNBrand: unique symbol;
export interface TextDetectorCNN
  extends
    Omit<OpenCvSharp.TextDetector, "detect">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [textDetectorCNNBrand]: true;
  detect(
    inputImage: OpenCvSharp.InputArray,
    bbox: HostVariableOut<HostArray<OpenCvSharp.Rect>>,
    confidence: HostVariableOut<HostArray<number>>
  ): VoidResult;
}

declare global {
  namespace OpenCvSharp {
    type TextDetectorCNN = import("./TextDetectorCNN").TextDetectorCNN;
  }
}

export interface TextDetectorCNNHostType extends HostType<TextDetectorCNN, ReferenceTypeTrait> {
  create(
    modelArchFilename: string,
    modelWeightsFilename: string,
    detectionSizes: System.Collections.Generic.IEnumerable<OpenCvSharp.Size>
  ): OpenCvSharp.TextDetectorCNN;
  create(modelArchFilename: string, modelWeightsFilename: string): OpenCvSharp.TextDetectorCNN;
}

export {};
