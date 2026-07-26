import type {
  ClrHostValue,
  HostType,
  ReferenceTypeTrait,
  ValueTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../../System/IDisposable";
import "../../System/ValueType";
import "../ICvPtrHolder";
import "../InputArray";
import "../Tracker";

declare const trackerCSRTBrand: unique symbol;
export interface TrackerCSRT
  extends
    Omit<OpenCvSharp.Tracker, "setInitialMask">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [trackerCSRTBrand]: true;
  setInitialMask(mask: OpenCvSharp.InputArray): VoidResult;
}

declare const trackerCSRT_ParamsBrand: unique symbol;
export interface TrackerCSRT_Params extends ClrHostValue {
  readonly [trackerCSRT_ParamsBrand]: true;
  useHog: number;
  useColorNames: number;
  useGray: number;
  useRgb: number;
  useChannelWeights: number;
  useSegmentation: number;
  windowFunction: string;
  kaiserAlpha: number;
  chebAttenuation: number;
  templateSize: number;
  gslSigma: number;
  hogOrientations: number;
  hogClip: number;
  padding: number;
  filterLr: number;
  weightsLr: number;
  numHogChannelsUsed: number;
  admmIterations: number;
  histogramBins: number;
  histogramLr: number;
  backgroundRatio: number;
  numberOfScales: number;
  scaleSigmaFactor: number;
  scaleModelMaxArea: number;
  scaleLr: number;
  scaleStep: number;
  psrThreshold: number;
}

export interface TrackerCSRT_ParamsHostType extends HostType<TrackerCSRT_Params, ValueTypeTrait> {}

declare global {
  namespace OpenCvSharp.Tracking.TrackerCSRT {
    type Params = import("./TrackerCSRT").TrackerCSRT_Params;
  }
}

declare global {
  namespace OpenCvSharp.Tracking {
    type TrackerCSRT = import("./TrackerCSRT").TrackerCSRT;
  }
}

export interface TrackerCSRTHostType extends HostType<TrackerCSRT, ReferenceTypeTrait> {
  create(): OpenCvSharp.Tracking.TrackerCSRT;
  create(parameters: TrackerCSRT_Params): OpenCvSharp.Tracking.TrackerCSRT;
  readonly Params: TrackerCSRT_ParamsHostType;
}

export {};
