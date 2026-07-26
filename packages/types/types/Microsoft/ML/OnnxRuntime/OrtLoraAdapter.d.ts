import "../../../System/IDisposable";
import "../../../System/Runtime/InteropServices/SafeHandle";
import type {
  ByteHost,
  HostArray,
  HostType,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../ClearScript/HostType";
import "./OrtAllocator";

declare const ortLoraAdapterBrand: unique symbol;
export interface OrtLoraAdapter
  extends Omit<System.Runtime.InteropServices.SafeHandle, "isInvalid">, System.IDisposableInput {
  readonly [ortLoraAdapterBrand]: true;
  readonly isInvalid: boolean;
}

declare global {
  namespace Microsoft.ML.OnnxRuntime {
    type OrtLoraAdapter = import("./OrtLoraAdapter").OrtLoraAdapter;
  }
}

export interface OrtLoraAdapterHostType extends HostType<OrtLoraAdapter, ReferenceTypeTrait> {
  create(
    adapterPath: string,
    ortAllocator: Microsoft.ML.OnnxRuntime.OrtAllocator
  ): Microsoft.ML.OnnxRuntime.OrtLoraAdapter;
  create(
    bytes: HostArray<number | StrongNumeric<ByteHost>>,
    ortAllocator: Microsoft.ML.OnnxRuntime.OrtAllocator
  ): Microsoft.ML.OnnxRuntime.OrtLoraAdapter;
}

export {};
