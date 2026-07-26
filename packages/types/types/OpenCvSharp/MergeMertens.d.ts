import type { HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/Collections/Generic/IEnumerable";
import "../System/IDisposable";
import "./ICvPtrHolder";
import "./Mat";
import "./MergeExposures";
import "./OutputArray";

declare const mergeMertensBrand: unique symbol;
export interface MergeMertens
  extends
    Omit<OpenCvSharp.MergeExposures, "process">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [mergeMertensBrand]: true;
  process(
    src: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    dst: OpenCvSharp.OutputArray
  ): VoidResult;
}

declare global {
  namespace OpenCvSharp {
    type MergeMertens = import("./MergeMertens").MergeMertens;
  }
}

export interface MergeMertensHostType extends HostType<MergeMertens, ReferenceTypeTrait> {
  create(): OpenCvSharp.MergeMertens;
}

export {};
