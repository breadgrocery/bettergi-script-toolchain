import type { HostArray, HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import type { HostVariableOut, HostVariableRef } from "../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/IDisposable";
import "./DescriptorMatcher";
import "./DisposableCvObject";
import "./Feature2D";
import "./ICvPtrHolder";
import "./InputArray";
import "./KeyPoint";
import "./Mat";
import "./OutputArray";

declare const bOWImgDescriptorExtractorBrand: unique symbol;
export interface BOWImgDescriptorExtractor
  extends
    Omit<
      OpenCvSharp.DisposableCvObject,
      | "compute"
      | "compute2"
      | "descriptorSize"
      | "descriptorType"
      | "getVocabulary"
      | "setVocabulary"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [bOWImgDescriptorExtractorBrand]: true;
  setVocabulary(vocabulary: OpenCvSharp.Mat): VoidResult;
  getVocabulary(): OpenCvSharp.Mat;
  compute(
    image: OpenCvSharp.InputArray,
    keypoints: HostVariableRef<HostArray<OpenCvSharp.KeyPoint>>,
    imgDescriptor: OpenCvSharp.OutputArray,
    pointIdxsOfClusters: HostVariableOut<HostArray<HostArray<number>>>
  ): VoidResult;
  compute(
    image: OpenCvSharp.InputArray,
    keypoints: HostVariableRef<HostArray<OpenCvSharp.KeyPoint>>,
    imgDescriptor: OpenCvSharp.OutputArray,
    pointIdxsOfClusters: HostVariableOut<HostArray<HostArray<number>>>,
    descriptors: OpenCvSharp.Mat | null
  ): VoidResult;
  compute(
    keypointDescriptors: OpenCvSharp.InputArray,
    imgDescriptor: OpenCvSharp.OutputArray,
    pointIdxsOfClusters: HostVariableOut<HostArray<HostArray<number>>>
  ): VoidResult;
  compute2(
    image: OpenCvSharp.Mat,
    keypoints: HostVariableRef<HostArray<OpenCvSharp.KeyPoint>>,
    imgDescriptor: OpenCvSharp.Mat
  ): VoidResult;
  descriptorSize(): number;
  descriptorType(): number;
}

declare global {
  namespace OpenCvSharp {
    type BOWImgDescriptorExtractor =
      import("./BOWImgDescriptorExtractor").BOWImgDescriptorExtractor;
  }
}

export interface BOWImgDescriptorExtractorHostType extends HostType<
  BOWImgDescriptorExtractor,
  ReferenceTypeTrait
> {
  new (
    dextractor: OpenCvSharp.Feature2D,
    dmatcher: OpenCvSharp.DescriptorMatcher
  ): BOWImgDescriptorExtractor;
  new (dmatcher: OpenCvSharp.DescriptorMatcher): BOWImgDescriptorExtractor;
}

export {};
