import type { HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import "../System/IDisposable";
import "./ICvPtrHolder";
import "./MergeExposures";

declare const mergeDebevecBrand: unique symbol;
export interface MergeDebevec
  extends OpenCvSharp.MergeExposures, System.IDisposableInput, OpenCvSharp.ICvPtrHolderInput {
  readonly [mergeDebevecBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type MergeDebevec = import("./MergeDebevec").MergeDebevec;
  }
}

export interface MergeDebevecHostType extends HostType<MergeDebevec, ReferenceTypeTrait> {
  create(): OpenCvSharp.MergeDebevec;
}

export {};
