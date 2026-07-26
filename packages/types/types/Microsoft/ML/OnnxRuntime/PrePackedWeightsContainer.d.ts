import "../../../System/IDisposable";
import "../../../System/Runtime/InteropServices/SafeHandle";
import type {
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../ClearScript/HostType";

declare const prePackedWeightsContainerBrand: unique symbol;
export interface PrePackedWeightsContainer
  extends Omit<System.Runtime.InteropServices.SafeHandle, "isInvalid">, System.IDisposableInput {
  readonly [prePackedWeightsContainerBrand]: true;
  readonly isInvalid: boolean;
}

declare global {
  namespace Microsoft.ML.OnnxRuntime {
    type PrePackedWeightsContainer =
      import("./PrePackedWeightsContainer").PrePackedWeightsContainer;
  }
}

export interface PrePackedWeightsContainerHostType extends HostType<
  PrePackedWeightsContainer,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): PrePackedWeightsContainer;
}

export {};
