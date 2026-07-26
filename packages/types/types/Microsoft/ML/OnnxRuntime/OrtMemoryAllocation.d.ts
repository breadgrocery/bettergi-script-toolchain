import "../../../System/IDisposable";
import "../../../System/Runtime/InteropServices/SafeHandle";
import type { HostType, ReferenceTypeTrait } from "../../ClearScript/HostType";
import "./OrtMemoryInfo";

declare const ortMemoryAllocationBrand: unique symbol;
export interface OrtMemoryAllocation
  extends
    Omit<System.Runtime.InteropServices.SafeHandle, "info" | "isInvalid" | "size">,
    System.IDisposableInput {
  readonly [ortMemoryAllocationBrand]: true;
  readonly info: Microsoft.ML.OnnxRuntime.OrtMemoryInfo;
  readonly isInvalid: boolean;
  readonly size: number;
}

declare global {
  namespace Microsoft.ML.OnnxRuntime {
    type OrtMemoryAllocation = import("./OrtMemoryAllocation").OrtMemoryAllocation;
  }
}

export interface OrtMemoryAllocationHostType extends HostType<
  OrtMemoryAllocation,
  ReferenceTypeTrait
> {}

export {};
