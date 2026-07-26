import type {
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import "../../System/IDisposable";
import "../Feature2D";
import "../ICvPtrHolder";

declare const starDetectorBrand: unique symbol;
export interface StarDetector
  extends OpenCvSharp.Feature2D, System.IDisposableInput, OpenCvSharp.ICvPtrHolderInput {
  readonly [starDetectorBrand]: true;
}

declare global {
  namespace OpenCvSharp.XFeatures2D {
    type StarDetector = import("./StarDetector").StarDetector;
  }
}

export interface StarDetectorHostType extends HostType<StarDetector, ReferenceTypeTrait> {
  create(): OpenCvSharp.XFeatures2D.StarDetector;
  create(maxSize: number | StrongNumeric<Int32Host>): OpenCvSharp.XFeatures2D.StarDetector;
  create(
    maxSize: number | StrongNumeric<Int32Host>,
    responseThreshold: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.XFeatures2D.StarDetector;
  create(
    maxSize: number | StrongNumeric<Int32Host>,
    responseThreshold: number | StrongNumeric<Int32Host>,
    lineThresholdProjected: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.XFeatures2D.StarDetector;
  create(
    maxSize: number | StrongNumeric<Int32Host>,
    responseThreshold: number | StrongNumeric<Int32Host>,
    lineThresholdProjected: number | StrongNumeric<Int32Host>,
    lineThresholdBinarized: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.XFeatures2D.StarDetector;
  create(
    maxSize: number | StrongNumeric<Int32Host>,
    responseThreshold: number | StrongNumeric<Int32Host>,
    lineThresholdProjected: number | StrongNumeric<Int32Host>,
    lineThresholdBinarized: number | StrongNumeric<Int32Host>,
    suppressNonmaxSize: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.XFeatures2D.StarDetector;
}

export {};
