import type { HostArray, HostType, ReferenceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../../System/Collections/Generic/IEnumerable";
import "../../System/IDisposable";
import "../DisposableCvObject";
import "../ICvPtrHolder";
import "../Mat";
import "./ImageFeatures";
import "./MatchesInfo";

declare const featuresMatcherBrand: unique symbol;
export interface FeaturesMatcher
  extends
    Omit<OpenCvSharp.DisposableCvObject, "apply" | "collectGarbage" | "isThreadSafe">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [featuresMatcherBrand]: true;
  apply(
    features1: OpenCvSharp.Detail.ImageFeatures,
    features2: OpenCvSharp.Detail.ImageFeatures
  ): OpenCvSharp.Detail.MatchesInfo;
  apply(
    features: System.Collections.Generic.IEnumerable<OpenCvSharp.Detail.ImageFeatures>
  ): HostArray<OpenCvSharp.Detail.MatchesInfo>;
  apply(
    features: System.Collections.Generic.IEnumerable<OpenCvSharp.Detail.ImageFeatures>,
    mask: OpenCvSharp.Mat | null
  ): HostArray<OpenCvSharp.Detail.MatchesInfo>;
  isThreadSafe(): boolean;
  collectGarbage(): VoidResult;
}

declare global {
  namespace OpenCvSharp.Detail {
    type FeaturesMatcher = import("./FeaturesMatcher").FeaturesMatcher;
  }
}

export interface FeaturesMatcherHostType extends HostType<FeaturesMatcher, ReferenceTypeTrait> {}

export {};
