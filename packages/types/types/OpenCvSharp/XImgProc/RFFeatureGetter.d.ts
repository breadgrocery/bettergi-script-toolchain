import type {
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../../System/IDisposable";
import "../Algorithm";
import "../ICvPtrHolder";
import "../Mat";

declare const rFFeatureGetterBrand: unique symbol;
export interface RFFeatureGetter
  extends
    Omit<OpenCvSharp.Algorithm, "getFeatures">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [rFFeatureGetterBrand]: true;
  getFeatures(
    src: OpenCvSharp.Mat,
    features: OpenCvSharp.Mat,
    gnrmRad: number | StrongNumeric<Int32Host>,
    gsmthRad: number | StrongNumeric<Int32Host>,
    shrink: number | StrongNumeric<Int32Host>,
    outNum: number | StrongNumeric<Int32Host>,
    gradNum: number | StrongNumeric<Int32Host>
  ): VoidResult;
}

declare global {
  namespace OpenCvSharp.XImgProc {
    type RFFeatureGetter = import("./RFFeatureGetter").RFFeatureGetter;
  }
}

export interface RFFeatureGetterHostType extends HostType<RFFeatureGetter, ReferenceTypeTrait> {
  create(): OpenCvSharp.XImgProc.RFFeatureGetter;
}

export {};
