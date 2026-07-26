import type {
  ClrHostValue,
  EnumInput,
  EnumTypeTrait,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IDisposable";
import "../System/IFormattable";
import "../System/ISpanFormattable";
import "./Feature2D";
import "./ICvPtrHolder";

declare const agastFeatureDetectorBrand: unique symbol;
export interface AgastFeatureDetector
  extends
    Omit<OpenCvSharp.Feature2D, "nonmaxSuppression" | "threshold" | "type">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [agastFeatureDetectorBrand]: true;
  threshold: number;
  nonmaxSuppression: number;
  type: AgastFeatureDetector_DetectorType;
}

declare const agastFeatureDetector_DetectorTypeBrand: unique symbol;
export interface AgastFeatureDetector_DetectorType extends ClrHostValue {
  readonly [agastFeatureDetector_DetectorTypeBrand]: true;
}

export interface AgastFeatureDetector_DetectorTypeHostType extends HostType<
  AgastFeatureDetector_DetectorType,
  EnumTypeTrait
> {
  readonly agasT_5_8: AgastFeatureDetector_DetectorType;
  readonly agasT_7_12d: AgastFeatureDetector_DetectorType;
  readonly agasT_7_12s: AgastFeatureDetector_DetectorType;
  readonly oasT_9_16: AgastFeatureDetector_DetectorType;
}

declare global {
  namespace OpenCvSharp.AgastFeatureDetector {
    type DetectorType = import("./AgastFeatureDetector").AgastFeatureDetector_DetectorType;
  }
}

declare global {
  namespace OpenCvSharp {
    type AgastFeatureDetector = import("./AgastFeatureDetector").AgastFeatureDetector;
  }
}

export interface AgastFeatureDetectorHostType extends HostType<
  AgastFeatureDetector,
  ReferenceTypeTrait
> {
  create(): OpenCvSharp.AgastFeatureDetector;
  create(threshold: number | StrongNumeric<Int32Host>): OpenCvSharp.AgastFeatureDetector;
  create(
    threshold: number | StrongNumeric<Int32Host>,
    nonmaxSuppression: boolean
  ): OpenCvSharp.AgastFeatureDetector;
  create(
    threshold: number | StrongNumeric<Int32Host>,
    nonmaxSuppression: boolean,
    type: EnumInput<AgastFeatureDetector_DetectorType>
  ): OpenCvSharp.AgastFeatureDetector;
  readonly DetectorType: AgastFeatureDetector_DetectorTypeHostType;
}

export {};
