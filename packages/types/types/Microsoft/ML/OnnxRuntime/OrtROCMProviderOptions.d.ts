import "../../../System/Collections/Generic/Dictionary";
import "../../../System/IDisposable";
import "../../../System/Runtime/InteropServices/SafeHandle";
import type {
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../ClearScript/HostType";
import type { VoidResult } from "../../ClearScript/VoidResult";

declare const ortROCMProviderOptionsBrand: unique symbol;
export interface OrtROCMProviderOptions
  extends
    Omit<System.Runtime.InteropServices.SafeHandle, "getOptions" | "isInvalid" | "updateOptions">,
    System.IDisposableInput {
  readonly [ortROCMProviderOptionsBrand]: true;
  getOptions(): string;
  readonly isInvalid: boolean;
  updateOptions(providerOptions: System.Collections.Generic.Dictionary<string, string>): VoidResult;
}

declare global {
  namespace Microsoft.ML.OnnxRuntime {
    type OrtROCMProviderOptions = import("./OrtROCMProviderOptions").OrtROCMProviderOptions;
  }
}

export interface OrtROCMProviderOptionsHostType extends HostType<
  OrtROCMProviderOptions,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): OrtROCMProviderOptions;
}

export {};
