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

declare const trackerGOTURNBrand: unique symbol;
export interface TrackerGOTURN
  extends OpenCvSharp.Tracker, System.IDisposableInput, OpenCvSharp.ICvPtrHolderInput {
  readonly [trackerGOTURNBrand]: true;
}

declare const trackerGOTURN_ParamsBrand: unique symbol;
export interface TrackerGOTURN_Params extends ClrHostValue {
  readonly [trackerGOTURN_ParamsBrand]: true;
}

export interface TrackerGOTURN_ParamsHostType extends HostType<
  TrackerGOTURN_Params,
  ValueTypeTrait
> {}

declare global {
  namespace OpenCvSharp.TrackerGOTURN {
    type Params = import("./TrackerGOTURN").TrackerGOTURN_Params;
  }
}

declare global {
  namespace OpenCvSharp {
    type TrackerGOTURN = import("./TrackerGOTURN").TrackerGOTURN;
  }
}

export interface TrackerGOTURNHostType extends HostType<TrackerGOTURN, ReferenceTypeTrait> {
  create(): OpenCvSharp.TrackerGOTURN;
  create(parameters: TrackerGOTURN_Params): OpenCvSharp.TrackerGOTURN;
  readonly Params: TrackerGOTURN_ParamsHostType;
}

export {};
