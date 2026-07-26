import type {
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import "../System/IDisposable";
import "./Feature2D";
import "./ICvPtrHolder";

declare const fastFeatureDetectorBrand: unique symbol;
export interface FastFeatureDetector
  extends
    Omit<OpenCvSharp.Feature2D, "nonmaxSuppression" | "threshold" | "type">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [fastFeatureDetectorBrand]: true;
  threshold: number;
  nonmaxSuppression: boolean;
  type: number;
}

declare global {
  namespace OpenCvSharp {
    type FastFeatureDetector = import("./FastFeatureDetector").FastFeatureDetector;
  }
}

export interface FastFeatureDetectorHostType extends HostType<
  FastFeatureDetector,
  ReferenceTypeTrait
> {
  create(): OpenCvSharp.FastFeatureDetector;
  create(threshold: number | StrongNumeric<Int32Host>): OpenCvSharp.FastFeatureDetector;
  create(
    threshold: number | StrongNumeric<Int32Host>,
    nonmaxSuppression: boolean
  ): OpenCvSharp.FastFeatureDetector;
}

export {};
