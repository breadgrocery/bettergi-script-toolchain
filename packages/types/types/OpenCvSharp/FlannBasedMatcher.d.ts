import type { HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/Collections/Generic/IEnumerable";
import "../System/IDisposable";
import "./DescriptorMatcher";
import "./Flann/IndexParams";
import "./Flann/SearchParams";
import "./ICvPtrHolder";
import "./Mat";

declare const flannBasedMatcherBrand: unique symbol;
export interface FlannBasedMatcher
  extends
    Omit<OpenCvSharp.DescriptorMatcher, "add" | "clear" | "isMaskSupported" | "train">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [flannBasedMatcherBrand]: true;
  isMaskSupported(): boolean;
  add(descriptors: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>): VoidResult;
  clear(): VoidResult;
  train(): VoidResult;
}

declare global {
  namespace OpenCvSharp {
    type FlannBasedMatcher = import("./FlannBasedMatcher").FlannBasedMatcher;
  }
}

export interface FlannBasedMatcherHostType extends HostType<FlannBasedMatcher, ReferenceTypeTrait> {
  new (): FlannBasedMatcher;
  new (indexParams: OpenCvSharp.Flann.IndexParams | null): FlannBasedMatcher;
  new (
    indexParams: OpenCvSharp.Flann.IndexParams | null,
    searchParams: OpenCvSharp.Flann.SearchParams | null
  ): FlannBasedMatcher;
}

export {};
