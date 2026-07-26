import type { HostArray, HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import type { HostVariableOut, HostVariableRef } from "../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/Collections/Generic/IEnumerable";
import "../System/IDisposable";
import "./Algorithm";
import "./ICvPtrHolder";
import "./InputArray";
import "./KeyPoint";
import "./Mat";
import "./OutputArray";

declare const feature2DBrand: unique symbol;
export interface Feature2D
  extends
    Omit<
      OpenCvSharp.Algorithm,
      | "compute"
      | "defaultNorm"
      | "descriptorSize"
      | "descriptorType"
      | "detect"
      | "detectAndCompute"
      | "empty"
      | "getDefaultName"
      | "read"
      | "write"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [feature2DBrand]: true;
  readonly descriptorSize: number;
  readonly descriptorType: number;
  readonly defaultNorm: number;
  empty(): boolean;
  detect(image: OpenCvSharp.InputArray): HostArray<OpenCvSharp.KeyPoint>;
  detect(
    image: OpenCvSharp.InputArray,
    mask: OpenCvSharp.Mat | null
  ): HostArray<OpenCvSharp.KeyPoint>;
  detect(image: OpenCvSharp.Mat): HostArray<OpenCvSharp.KeyPoint>;
  detect(image: OpenCvSharp.Mat, mask: OpenCvSharp.Mat | null): HostArray<OpenCvSharp.KeyPoint>;
  detect(
    images: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>
  ): HostArray<HostArray<OpenCvSharp.KeyPoint>>;
  detect(
    images: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    masks: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat> | null
  ): HostArray<HostArray<OpenCvSharp.KeyPoint>>;
  compute(
    image: OpenCvSharp.InputArray,
    keypoints: HostVariableRef<HostArray<OpenCvSharp.KeyPoint>>,
    descriptors: OpenCvSharp.OutputArray
  ): VoidResult;
  compute(
    images: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    keypoints: HostVariableRef<HostArray<HostArray<OpenCvSharp.KeyPoint>>>,
    descriptors: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>
  ): VoidResult;
  detectAndCompute(
    image: OpenCvSharp.InputArray,
    mask: OpenCvSharp.InputArray | null,
    keypoints: HostVariableOut<HostArray<OpenCvSharp.KeyPoint>>,
    descriptors: OpenCvSharp.OutputArray
  ): VoidResult;
  detectAndCompute(
    image: OpenCvSharp.InputArray,
    mask: OpenCvSharp.InputArray | null,
    keypoints: HostVariableOut<HostArray<OpenCvSharp.KeyPoint>>,
    descriptors: OpenCvSharp.OutputArray,
    useProvidedKeypoints: boolean
  ): VoidResult;
  write(fileName: string): VoidResult;
  read(fileName: string): VoidResult;
  getDefaultName(): string;
}

declare global {
  namespace OpenCvSharp {
    type Feature2D = import("./Feature2D").Feature2D;
  }
}

export interface Feature2DHostType extends HostType<Feature2D, ReferenceTypeTrait> {}

export {};
