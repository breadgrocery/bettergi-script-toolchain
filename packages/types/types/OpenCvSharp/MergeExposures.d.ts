import type { HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/Collections/Generic/IEnumerable";
import "../System/IDisposable";
import "./Algorithm";
import "./ICvPtrHolder";
import "./InputArray";
import "./Mat";
import "./OutputArray";

declare const mergeExposuresBrand: unique symbol;
export interface MergeExposures
  extends
    Omit<OpenCvSharp.Algorithm, "process">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [mergeExposuresBrand]: true;
  process(
    src: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    dst: OpenCvSharp.OutputArray,
    times: System.Collections.Generic.IEnumerable<number>,
    response: OpenCvSharp.InputArray
  ): VoidResult;
}

declare global {
  namespace OpenCvSharp {
    type MergeExposures = import("./MergeExposures").MergeExposures;
  }
}

export interface MergeExposuresHostType extends HostType<MergeExposures, ReferenceTypeTrait> {}

export {};
