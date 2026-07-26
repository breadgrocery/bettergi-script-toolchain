import "../../../System/Collections/Generic/Dictionary";
import "../../../System/IDisposable";
import "../../../System/Runtime/InteropServices/SafeHandle";
import type {
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../ClearScript/HostType";
import type { VoidResult } from "../../ClearScript/VoidResult";

declare const ortTensorRTProviderOptionsBrand: unique symbol;
export interface OrtTensorRTProviderOptions
  extends
    Omit<
      System.Runtime.InteropServices.SafeHandle,
      "getDeviceId" | "getOptions" | "isInvalid" | "updateOptions"
    >,
    System.IDisposableInput {
  readonly [ortTensorRTProviderOptionsBrand]: true;
  getDeviceId(): number;
  getOptions(): string;
  readonly isInvalid: boolean;
  updateOptions(providerOptions: System.Collections.Generic.Dictionary<string, string>): VoidResult;
}

declare global {
  namespace Microsoft.ML.OnnxRuntime {
    type OrtTensorRTProviderOptions =
      import("./OrtTensorRTProviderOptions").OrtTensorRTProviderOptions;
  }
}

export interface OrtTensorRTProviderOptionsHostType extends HostType<
  OrtTensorRTProviderOptions,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): OrtTensorRTProviderOptions;
}

export {};
