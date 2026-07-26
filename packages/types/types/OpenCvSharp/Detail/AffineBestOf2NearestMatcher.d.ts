import type {
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  SingleHost,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import "../../System/IDisposable";
import "../ICvPtrHolder";
import "./BestOf2NearestMatcher";

declare const affineBestOf2NearestMatcherBrand: unique symbol;
export interface AffineBestOf2NearestMatcher
  extends
    OpenCvSharp.Detail.BestOf2NearestMatcher,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [affineBestOf2NearestMatcherBrand]: true;
}

declare global {
  namespace OpenCvSharp.Detail {
    type AffineBestOf2NearestMatcher =
      import("./AffineBestOf2NearestMatcher").AffineBestOf2NearestMatcher;
  }
}

export interface AffineBestOf2NearestMatcherHostType extends HostType<
  AffineBestOf2NearestMatcher,
  ReferenceTypeTrait
> {
  new (): AffineBestOf2NearestMatcher;
  new (fullAffine: boolean): AffineBestOf2NearestMatcher;
  new (fullAffine: boolean, tryUseGpu: boolean): AffineBestOf2NearestMatcher;
  new (
    fullAffine: boolean,
    tryUseGpu: boolean,
    matchConf: number | StrongNumeric<SingleHost>
  ): AffineBestOf2NearestMatcher;
  new (
    fullAffine: boolean,
    tryUseGpu: boolean,
    matchConf: number | StrongNumeric<SingleHost>,
    numMatchesThresh1: number | StrongNumeric<Int32Host>
  ): AffineBestOf2NearestMatcher;
}

export {};
