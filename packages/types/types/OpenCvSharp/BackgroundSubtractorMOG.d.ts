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

declare const backgroundSubtractorMOGBrand: unique symbol;
export interface BackgroundSubtractorMOG
  extends
    Omit<
      OpenCvSharp.BackgroundSubtractor,
      "backgroundRatio" | "history" | "nMixtures" | "noiseSigma"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [backgroundSubtractorMOGBrand]: true;
  history: number;
  nMixtures: number;
  backgroundRatio: number;
  noiseSigma: number;
}

declare global {
  namespace OpenCvSharp {
    type BackgroundSubtractorMOG = import("./BackgroundSubtractorMOG").BackgroundSubtractorMOG;
  }
}

export interface BackgroundSubtractorMOGHostType extends HostType<
  BackgroundSubtractorMOG,
  ReferenceTypeTrait
> {
  create(): OpenCvSharp.BackgroundSubtractorMOG;
  create(history: number | StrongNumeric<Int32Host>): OpenCvSharp.BackgroundSubtractorMOG;
  create(
    history: number | StrongNumeric<Int32Host>,
    nMixtures: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.BackgroundSubtractorMOG;
  create(
    history: number | StrongNumeric<Int32Host>,
    nMixtures: number | StrongNumeric<Int32Host>,
    backgroundRatio: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.BackgroundSubtractorMOG;
  create(
    history: number | StrongNumeric<Int32Host>,
    nMixtures: number | StrongNumeric<Int32Host>,
    backgroundRatio: number | StrongNumeric<DoubleHost>,
    noiseSigma: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.BackgroundSubtractorMOG;
}

export {};
