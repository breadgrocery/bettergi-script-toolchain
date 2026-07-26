import type {
  HostType,
  Int32Host,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/IDisposable";
import "./DisposableCvObject";
import "./ICvPtrHolder";
import "./Mat";

declare const kalmanFilterBrand: unique symbol;
export interface KalmanFilter
  extends
    Omit<
      OpenCvSharp.DisposableCvObject,
      | "controlMatrix"
      | "correct"
      | "errorCovPost"
      | "errorCovPre"
      | "gain"
      | "init"
      | "measurementMatrix"
      | "measurementNoiseCov"
      | "predict"
      | "processNoiseCov"
      | "statePost"
      | "statePre"
      | "transitionMatrix"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [kalmanFilterBrand]: true;
  statePre: OpenCvSharp.Mat;
  statePost: OpenCvSharp.Mat;
  transitionMatrix: OpenCvSharp.Mat;
  controlMatrix: OpenCvSharp.Mat;
  measurementMatrix: OpenCvSharp.Mat;
  processNoiseCov: OpenCvSharp.Mat;
  measurementNoiseCov: OpenCvSharp.Mat;
  errorCovPre: OpenCvSharp.Mat;
  gain: OpenCvSharp.Mat;
  errorCovPost: OpenCvSharp.Mat;
  init(
    dynamParams: number | StrongNumeric<Int32Host>,
    measureParams: number | StrongNumeric<Int32Host>
  ): VoidResult;
  init(
    dynamParams: number | StrongNumeric<Int32Host>,
    measureParams: number | StrongNumeric<Int32Host>,
    controlParams: number | StrongNumeric<Int32Host>
  ): VoidResult;
  init(
    dynamParams: number | StrongNumeric<Int32Host>,
    measureParams: number | StrongNumeric<Int32Host>,
    controlParams: number | StrongNumeric<Int32Host>,
    type: number | StrongNumeric<Int32Host>
  ): VoidResult;
  predict(): OpenCvSharp.Mat;
  predict(control: OpenCvSharp.Mat | null): OpenCvSharp.Mat;
  correct(measurement: OpenCvSharp.Mat): OpenCvSharp.Mat;
}

declare global {
  namespace OpenCvSharp {
    type KalmanFilter = import("./KalmanFilter").KalmanFilter;
  }
}

export interface KalmanFilterHostType extends HostType<
  KalmanFilter,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): KalmanFilter;
  new (
    dynamParams: number | StrongNumeric<Int32Host>,
    measureParams: number | StrongNumeric<Int32Host>
  ): KalmanFilter;
  new (
    dynamParams: number | StrongNumeric<Int32Host>,
    measureParams: number | StrongNumeric<Int32Host>,
    controlParams: number | StrongNumeric<Int32Host>
  ): KalmanFilter;
  new (
    dynamParams: number | StrongNumeric<Int32Host>,
    measureParams: number | StrongNumeric<Int32Host>,
    controlParams: number | StrongNumeric<Int32Host>,
    type: number | StrongNumeric<Int32Host>
  ): KalmanFilter;
}

export {};
