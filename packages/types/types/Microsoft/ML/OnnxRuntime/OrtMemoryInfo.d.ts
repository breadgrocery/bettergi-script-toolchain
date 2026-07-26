import "../../../System/IDisposable";
import "../../../System/Runtime/InteropServices/SafeHandle";
import type {
  ByteHost,
  EnumInput,
  HostArray,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../ClearScript/HostType";
import "./OrtAllocatorType";
import "./OrtMemType";

declare const ortMemoryInfoBrand: unique symbol;
export interface OrtMemoryInfo
  extends
    Omit<
      System.Runtime.InteropServices.SafeHandle,
      "equals" | "getAllocatorType" | "getHashCode" | "getMemoryType" | "id" | "isInvalid" | "name"
    >,
    System.IDisposableInput {
  readonly [ortMemoryInfoBrand]: true;
  equals(obj: unknown): boolean;
  equals(other: Microsoft.ML.OnnxRuntime.OrtMemoryInfo): boolean;
  getAllocatorType(): Microsoft.ML.OnnxRuntime.OrtAllocatorType;
  getHashCode(): number;
  getMemoryType(): Microsoft.ML.OnnxRuntime.OrtMemType;
  readonly id: number;
  readonly isInvalid: boolean;
  readonly name: string;
}

declare global {
  namespace Microsoft.ML.OnnxRuntime {
    type OrtMemoryInfo = import("./OrtMemoryInfo").OrtMemoryInfo;
  }
}

export interface OrtMemoryInfoHostType extends HostType<OrtMemoryInfo, ReferenceTypeTrait> {
  new (
    utf8AllocatorName: HostArray<number | StrongNumeric<ByteHost>>,
    allocatorType: EnumInput<Microsoft.ML.OnnxRuntime.OrtAllocatorType>,
    deviceId: number | StrongNumeric<Int32Host>,
    memoryType: EnumInput<Microsoft.ML.OnnxRuntime.OrtMemType>
  ): OrtMemoryInfo;
  new (
    allocatorName: string,
    allocatorType: EnumInput<Microsoft.ML.OnnxRuntime.OrtAllocatorType>,
    deviceId: number | StrongNumeric<Int32Host>,
    memoryType: EnumInput<Microsoft.ML.OnnxRuntime.OrtMemType>
  ): OrtMemoryInfo;
  readonly allocatorCPU: HostArray<number>;
  readonly allocatorCUDA: HostArray<number>;
  readonly allocatorCUDA_PINNED: HostArray<number>;
  readonly allocatorHIP: HostArray<number>;
  readonly allocatorHIP_PINNED: HostArray<number>;
  readonly defaultInstance: Microsoft.ML.OnnxRuntime.OrtMemoryInfo;
}

export {};
