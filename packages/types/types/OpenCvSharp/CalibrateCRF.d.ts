import type { HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/Collections/Generic/IEnumerable";
import "../System/IDisposable";
import "./Algorithm";
import "./ICvPtrHolder";
import "./Mat";
import "./OutputArray";

declare const calibrateCRFBrand: unique symbol;
export interface CalibrateCRF
  extends
    Omit<OpenCvSharp.Algorithm, "process">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [calibrateCRFBrand]: true;
  process(
    src: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    dst: OpenCvSharp.OutputArray,
    times: System.Collections.Generic.IEnumerable<number>
  ): VoidResult;
}

declare global {
  namespace OpenCvSharp {
    type CalibrateCRF = import("./CalibrateCRF").CalibrateCRF;
  }
}

export interface CalibrateCRFHostType extends HostType<CalibrateCRF, ReferenceTypeTrait> {}

export {};
