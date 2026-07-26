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

declare const backgroundSubtractorKNNBrand: unique symbol;
export interface BackgroundSubtractorKNN
  extends
    Omit<
      OpenCvSharp.BackgroundSubtractor,
      | "detectShadows"
      | "dist2Threshold"
      | "history"
      | "knnSamples"
      | "nSamples"
      | "shadowThreshold"
      | "shadowValue"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [backgroundSubtractorKNNBrand]: true;
  history: number;
  nSamples: number;
  dist2Threshold: number;
  knnSamples: number;
  detectShadows: boolean;
  shadowValue: number;
  shadowThreshold: number;
}

declare global {
  namespace OpenCvSharp {
    type BackgroundSubtractorKNN = import("./BackgroundSubtractorKNN").BackgroundSubtractorKNN;
  }
}

export interface BackgroundSubtractorKNNHostType extends HostType<
  BackgroundSubtractorKNN,
  ReferenceTypeTrait
> {
  create(): OpenCvSharp.BackgroundSubtractorKNN;
  create(history: number | StrongNumeric<Int32Host>): OpenCvSharp.BackgroundSubtractorKNN;
  create(
    history: number | StrongNumeric<Int32Host>,
    dist2Threshold: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.BackgroundSubtractorKNN;
  create(
    history: number | StrongNumeric<Int32Host>,
    dist2Threshold: number | StrongNumeric<DoubleHost>,
    detectShadows: boolean
  ): OpenCvSharp.BackgroundSubtractorKNN;
}

export {};
