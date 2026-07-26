import type {
  ClrHostValue,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  ValueTypeTrait
} from "../Microsoft/ClearScript/HostType";
import "../System/IDisposable";
import "../System/ValueType";
import "./Feature2D";
import "./ICvPtrHolder";

declare const simpleBlobDetectorBrand: unique symbol;
export interface SimpleBlobDetector
  extends OpenCvSharp.Feature2D, System.IDisposableInput, OpenCvSharp.ICvPtrHolderInput {
  readonly [simpleBlobDetectorBrand]: true;
}

declare const simpleBlobDetector_ParamsBrand: unique symbol;
export interface SimpleBlobDetector_Params extends ClrHostValue {
  readonly [simpleBlobDetector_ParamsBrand]: true;
  thresholdStep: number;
  minThreshold: number;
  maxThreshold: number;
  minRepeatability: number;
  minDistBetweenBlobs: number;
  filterByColor: boolean;
  blobColor: number;
  filterByArea: boolean;
  minArea: number;
  maxArea: number;
  filterByCircularity: boolean;
  minCircularity: number;
  maxCircularity: number;
  filterByInertia: boolean;
  minInertiaRatio: number;
  maxInertiaRatio: number;
  filterByConvexity: boolean;
  minConvexity: number;
  maxConvexity: number;
}

export interface SimpleBlobDetector_ParamsHostType extends HostType<
  SimpleBlobDetector_Params,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): SimpleBlobDetector_Params;
}

declare global {
  namespace OpenCvSharp.SimpleBlobDetector {
    type Params = import("./SimpleBlobDetector").SimpleBlobDetector_Params;
  }
}

declare const simpleBlobDetector_WParamsBrand: unique symbol;
export interface SimpleBlobDetector_WParams extends ClrHostValue {
  readonly [simpleBlobDetector_WParamsBrand]: true;
  thresholdStep: number;
  minThreshold: number;
  maxThreshold: number;
  minRepeatability: number;
  minDistBetweenBlobs: number;
  filterByColor: number;
  blobColor: number;
  filterByArea: number;
  minArea: number;
  maxArea: number;
  filterByCircularity: number;
  minCircularity: number;
  maxCircularity: number;
  filterByInertia: number;
  minInertiaRatio: number;
  maxInertiaRatio: number;
  filterByConvexity: number;
  minConvexity: number;
  maxConvexity: number;
}

export interface SimpleBlobDetector_WParamsHostType extends HostType<
  SimpleBlobDetector_WParams,
  ValueTypeTrait
> {}

declare global {
  namespace OpenCvSharp.SimpleBlobDetector {
    type WParams = import("./SimpleBlobDetector").SimpleBlobDetector_WParams;
  }
}

declare global {
  namespace OpenCvSharp {
    type SimpleBlobDetector = import("./SimpleBlobDetector").SimpleBlobDetector;
  }
}

export interface SimpleBlobDetectorHostType extends HostType<
  SimpleBlobDetector,
  ReferenceTypeTrait
> {
  create(): OpenCvSharp.SimpleBlobDetector;
  create(parameters: SimpleBlobDetector_Params | null): OpenCvSharp.SimpleBlobDetector;
  readonly Params: SimpleBlobDetector_ParamsHostType;
  readonly WParams: SimpleBlobDetector_WParamsHostType;
}

export {};
