import type {
  DoubleHost,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import "../System/IDisposable";
import "./BackgroundSubtractor";
import "./ICvPtrHolder";

declare const backgroundSubtractorGMGBrand: unique symbol;
export interface BackgroundSubtractorGMG
  extends
    Omit<
      OpenCvSharp.BackgroundSubtractor,
      | "backgroundPrior"
      | "decisionThreshold"
      | "defaultLearningRate"
      | "maxFeatures"
      | "maxVal"
      | "minVal"
      | "numFrames"
      | "quantizationLevels"
      | "smoothingRadius"
      | "updateBackgroundModel"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [backgroundSubtractorGMGBrand]: true;
  maxFeatures: number;
  defaultLearningRate: number;
  numFrames: number;
  quantizationLevels: number;
  backgroundPrior: number;
  smoothingRadius: number;
  decisionThreshold: number;
  updateBackgroundModel: boolean;
  minVal: number;
  maxVal: number;
}

declare global {
  namespace OpenCvSharp {
    type BackgroundSubtractorGMG = import("./BackgroundSubtractorGMG").BackgroundSubtractorGMG;
  }
}

export interface BackgroundSubtractorGMGHostType extends HostType<
  BackgroundSubtractorGMG,
  ReferenceTypeTrait
> {
  create(): OpenCvSharp.BackgroundSubtractorGMG;
  create(
    initializationFrames: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.BackgroundSubtractorGMG;
  create(
    initializationFrames: number | StrongNumeric<Int32Host>,
    decisionThreshold: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.BackgroundSubtractorGMG;
}

export {};
