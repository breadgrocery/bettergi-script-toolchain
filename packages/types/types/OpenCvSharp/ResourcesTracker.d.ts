import type {
  ClrHostValue,
  HostArray,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/IDisposable";
import "./Mat";
import "./MatType";
import "./Scalar";
import "./Size";
import "./UMat";

declare const resourcesTrackerBrand: unique symbol;
export interface ResourcesTracker extends ClrHostValue, System.IDisposableInput {
  readonly [resourcesTrackerBrand]: true;
  t<TCvObject>(type1: HostType<TCvObject>, obj: TCvObject): TCvObject;
  t<TCvObject>(type1: HostType<TCvObject>, objects: HostArray<TCvObject>): HostArray<TCvObject>;
  newMat(): OpenCvSharp.Mat;
  newMat(
    size: OpenCvSharp.Size,
    matType: OpenCvSharp.MatType,
    scalar: OpenCvSharp.Scalar
  ): OpenCvSharp.Mat;
  newUMat(): OpenCvSharp.UMat;
  newUMat(
    size: OpenCvSharp.Size,
    matType: OpenCvSharp.MatType,
    scalar: OpenCvSharp.Scalar
  ): OpenCvSharp.UMat;
  dispose(): VoidResult;
}

declare global {
  namespace OpenCvSharp {
    type ResourcesTracker = import("./ResourcesTracker").ResourcesTracker;
  }
}

export interface ResourcesTrackerHostType extends HostType<
  ResourcesTracker,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): ResourcesTracker;
}

export {};
