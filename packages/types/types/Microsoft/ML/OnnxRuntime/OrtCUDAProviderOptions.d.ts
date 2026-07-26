import "../../../System/Collections/Generic/Dictionary";
import "../../../System/IDisposable";
import "../../../System/Runtime/InteropServices/SafeHandle";
import type {
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../ClearScript/HostType";
import type { VoidResult } from "../../ClearScript/VoidResult";

declare const ortCUDAProviderOptionsBrand: unique symbol;
export interface OrtCUDAProviderOptions
  extends
    Omit<System.Runtime.InteropServices.SafeHandle, "getOptions" | "isInvalid" | "updateOptions">,
    System.IDisposableInput {
  readonly [ortCUDAProviderOptionsBrand]: true;
  getOptions(): string;
  readonly isInvalid: boolean;
  updateOptions(providerOptions: System.Collections.Generic.Dictionary<string, string>): VoidResult;
}

declare global {
  namespace Microsoft.ML.OnnxRuntime {
    type OrtCUDAProviderOptions = import("./OrtCUDAProviderOptions").OrtCUDAProviderOptions;
  }
}

export interface OrtCUDAProviderOptionsHostType extends HostType<
  OrtCUDAProviderOptions,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): OrtCUDAProviderOptions;
}

export {};
