import type { HostType, ReferenceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../../System/IDisposable";
import "../ICvPtrHolder";
import "../InputArray";
import "../OutputArray";
import "./WhiteBalancer";

declare const learningBasedWBBrand: unique symbol;
export interface LearningBasedWB
  extends
    Omit<
      OpenCvSharp.XPhoto.WhiteBalancer,
      | "balanceWhite"
      | "extractSimpleFeatures"
      | "histBinNum"
      | "rangeMaxVal"
      | "saturationThreshold"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [learningBasedWBBrand]: true;
  histBinNum: number;
  rangeMaxVal: number;
  saturationThreshold: number;
  balanceWhite(src: OpenCvSharp.InputArray, dst: OpenCvSharp.OutputArray): VoidResult;
  extractSimpleFeatures(src: OpenCvSharp.InputArray, dst: OpenCvSharp.OutputArray): VoidResult;
}

declare global {
  namespace OpenCvSharp.XPhoto {
    type LearningBasedWB = import("./LearningBasedWB").LearningBasedWB;
  }
}

export interface LearningBasedWBHostType extends HostType<LearningBasedWB, ReferenceTypeTrait> {
  create(model: string | null): OpenCvSharp.XPhoto.LearningBasedWB;
}

export {};
