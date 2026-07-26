import type { HostType, InterfaceTypeTrait } from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";

declare const iDeserializationCallbackInputBrand: unique symbol;
export interface IDeserializationCallbackInput {
  readonly [iDeserializationCallbackInputBrand]: true;
}

export interface IDeserializationCallback
  extends
    Microsoft.ClearScript.ClrInterfaceView<IDeserializationCallbackInput>,
    IDeserializationCallbackInput {
  onDeserialization(sender: unknown | null): VoidResult;
}

declare global {
  namespace System.Runtime.Serialization {
    type IDeserializationCallbackInput =
      import("./IDeserializationCallback").IDeserializationCallbackInput;
  }
}

declare global {
  namespace System.Runtime.Serialization {
    type IDeserializationCallback = import("./IDeserializationCallback").IDeserializationCallback;
  }
}

export interface IDeserializationCallbackHostType extends HostType<
  IDeserializationCallback,
  InterfaceTypeTrait
> {}

export {};
