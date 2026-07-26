import "../../../System/IDisposable";
import "../../../System/Runtime/InteropServices/SafeHandle";
import type {
  HostType,
  ReferenceTypeTrait,
  StrongNumeric,
  UInt32Host
} from "../../ClearScript/HostType";
import "./InferenceSession";
import "./OrtMemoryAllocation";
import "./OrtMemoryInfo";

declare const ortAllocatorBrand: unique symbol;
export interface OrtAllocator
  extends
    Omit<System.Runtime.InteropServices.SafeHandle, "allocate" | "info" | "isInvalid">,
    System.IDisposableInput {
  readonly [ortAllocatorBrand]: true;
  allocate(size: number | StrongNumeric<UInt32Host>): Microsoft.ML.OnnxRuntime.OrtMemoryAllocation;
  readonly info: Microsoft.ML.OnnxRuntime.OrtMemoryInfo;
  readonly isInvalid: boolean;
}

declare global {
  namespace Microsoft.ML.OnnxRuntime {
    type OrtAllocator = import("./OrtAllocator").OrtAllocator;
  }
}

export interface OrtAllocatorHostType extends HostType<OrtAllocator, ReferenceTypeTrait> {
  new (
    session: Microsoft.ML.OnnxRuntime.InferenceSession,
    memInfo: Microsoft.ML.OnnxRuntime.OrtMemoryInfo
  ): OrtAllocator;
  readonly defaultInstance: Microsoft.ML.OnnxRuntime.OrtAllocator;
}

export {};
