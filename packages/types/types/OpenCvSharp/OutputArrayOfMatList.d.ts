import type { HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/Collections/Generic/IEnumerable";
import "../System/IDisposable";
import "./ICvPtrHolder";
import "./Mat";
import "./OutputArray";

declare const outputArrayOfMatListBrand: unique symbol;
export interface OutputArrayOfMatList
  extends
    Omit<OpenCvSharp.OutputArray, "assignResult" | "getVectorOfMat">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [outputArrayOfMatListBrand]: true;
  getVectorOfMat(): System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>;
  assignResult(): VoidResult;
}

declare global {
  namespace OpenCvSharp {
    type OutputArrayOfMatList = import("./OutputArrayOfMatList").OutputArrayOfMatList;
  }
}

export interface OutputArrayOfMatListHostType extends HostType<
  OutputArrayOfMatList,
  ReferenceTypeTrait
> {}

export {};
