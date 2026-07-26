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

declare const backgroundSubtractorMOG2Brand: unique symbol;
export interface BackgroundSubtractorMOG2
  extends
    Omit<
      OpenCvSharp.BackgroundSubtractor,
      | "backgroundRatio"
      | "complexityReductionThreshold"
      | "detectShadows"
      | "history"
      | "nMixtures"
      | "shadowThreshold"
      | "shadowValue"
      | "varInit"
      | "varMax"
      | "varMin"
      | "varThreshold"
      | "varThresholdGen"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [backgroundSubtractorMOG2Brand]: true;
  history: number;
  nMixtures: number;
  backgroundRatio: number;
  varThreshold: number;
  varThresholdGen: number;
  varInit: number;
  varMin: number;
  varMax: number;
  complexityReductionThreshold: number;
  detectShadows: boolean;
  shadowValue: number;
  shadowThreshold: number;
}

declare global {
  namespace OpenCvSharp {
    type BackgroundSubtractorMOG2 = import("./BackgroundSubtractorMog2").BackgroundSubtractorMOG2;
  }
}

export interface BackgroundSubtractorMOG2HostType extends HostType<
  BackgroundSubtractorMOG2,
  ReferenceTypeTrait
> {
  create(): OpenCvSharp.BackgroundSubtractorMOG2;
  create(history: number | StrongNumeric<Int32Host>): OpenCvSharp.BackgroundSubtractorMOG2;
  create(
    history: number | StrongNumeric<Int32Host>,
    varThreshold: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.BackgroundSubtractorMOG2;
  create(
    history: number | StrongNumeric<Int32Host>,
    varThreshold: number | StrongNumeric<DoubleHost>,
    detectShadows: boolean
  ): OpenCvSharp.BackgroundSubtractorMOG2;
}

export {};
