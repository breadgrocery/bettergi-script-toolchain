import type {
  ClrHostValue,
  HostType,
  ReferenceTypeTrait,
  ValueTypeTrait
} from "../Microsoft/ClearScript/HostType";
import "../System/IDisposable";
import "../System/ValueType";
import "./ICvPtrHolder";
import "./Tracker";

declare const trackerMILBrand: unique symbol;
export interface TrackerMIL
  extends OpenCvSharp.Tracker, System.IDisposableInput, OpenCvSharp.ICvPtrHolderInput {
  readonly [trackerMILBrand]: true;
}

declare const trackerMIL_ParamsBrand: unique symbol;
export interface TrackerMIL_Params extends ClrHostValue {
  readonly [trackerMIL_ParamsBrand]: true;
  samplerInitInRadius: number;
  samplerInitMaxNegNum: number;
  samplerSearchWinSize: number;
  samplerTrackInRadius: number;
  samplerTrackMaxPosNum: number;
  samplerTrackMaxNegNum: number;
  featureSetNumFeatures: number;
}

export interface TrackerMIL_ParamsHostType extends HostType<TrackerMIL_Params, ValueTypeTrait> {}

declare global {
  namespace OpenCvSharp.TrackerMIL {
    type Params = import("./TrackerMIL").TrackerMIL_Params;
  }
}

declare global {
  namespace OpenCvSharp {
    type TrackerMIL = import("./TrackerMIL").TrackerMIL;
  }
}

export interface TrackerMILHostType extends HostType<TrackerMIL, ReferenceTypeTrait> {
  create(): OpenCvSharp.TrackerMIL;
  create(parameters: TrackerMIL_Params): OpenCvSharp.TrackerMIL;
  readonly Params: TrackerMIL_ParamsHostType;
}

export {};
