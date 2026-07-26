import type {
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  SingleHost,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../../System/IDisposable";
import "../ICvPtrHolder";
import "./FeaturesMatcher";

declare const bestOf2NearestMatcherBrand: unique symbol;
export interface BestOf2NearestMatcher
  extends
    Omit<OpenCvSharp.Detail.FeaturesMatcher, "collectGarbage">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [bestOf2NearestMatcherBrand]: true;
  collectGarbage(): VoidResult;
}

declare global {
  namespace OpenCvSharp.Detail {
    type BestOf2NearestMatcher = import("./BestOf2NearestMatcher").BestOf2NearestMatcher;
  }
}

export interface BestOf2NearestMatcherHostType extends HostType<
  BestOf2NearestMatcher,
  ReferenceTypeTrait
> {
  new (): BestOf2NearestMatcher;
  new (tryUseGpu: boolean): BestOf2NearestMatcher;
  new (tryUseGpu: boolean, matchConf: number | StrongNumeric<SingleHost>): BestOf2NearestMatcher;
  new (
    tryUseGpu: boolean,
    matchConf: number | StrongNumeric<SingleHost>,
    numMatchesThresh1: number | StrongNumeric<Int32Host>
  ): BestOf2NearestMatcher;
  new (
    tryUseGpu: boolean,
    matchConf: number | StrongNumeric<SingleHost>,
    numMatchesThresh1: number | StrongNumeric<Int32Host>,
    numMatchesThresh2: number | StrongNumeric<Int32Host>
  ): BestOf2NearestMatcher;
}

export {};
