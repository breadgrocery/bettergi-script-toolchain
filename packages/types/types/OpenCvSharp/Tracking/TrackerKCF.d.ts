import type {
  ClrHostValue,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import "../../System/IDisposable";
import "../ICvPtrHolder";
import "../Tracker";

declare const trackerKCFBrand: unique symbol;
export interface TrackerKCF
  extends OpenCvSharp.Tracker, System.IDisposableInput, OpenCvSharp.ICvPtrHolderInput {
  readonly [trackerKCFBrand]: true;
}

declare const trackerKCF_ParamsBrand: unique symbol;
export interface TrackerKCF_Params extends ClrHostValue {
  readonly [trackerKCF_ParamsBrand]: true;
  detectThresh: number;
  sigma: number;
  lambda: number;
  interpFactor: number;
  outputSigmaFactor: number;
  pcaLearningRate: number;
  resize: boolean;
  splitCoeff: boolean;
  wrapKernel: boolean;
  compressFeature: boolean;
  maxPatchSize: number;
  compressedSize: number;
  descPca: number;
  descNpca: number;
}

export interface TrackerKCF_ParamsHostType extends HostType<
  TrackerKCF_Params,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): TrackerKCF_Params;
}

declare global {
  namespace OpenCvSharp.Tracking.TrackerKCF {
    type Params = import("./TrackerKCF").TrackerKCF_Params;
  }
}

declare global {
  namespace OpenCvSharp.Tracking {
    type TrackerKCF = import("./TrackerKCF").TrackerKCF;
  }
}

export interface TrackerKCFHostType extends HostType<TrackerKCF, ReferenceTypeTrait> {
  create(): OpenCvSharp.Tracking.TrackerKCF;
  create(parameters: TrackerKCF_Params): OpenCvSharp.Tracking.TrackerKCF;
  readonly Params: TrackerKCF_ParamsHostType;
}

export {};
