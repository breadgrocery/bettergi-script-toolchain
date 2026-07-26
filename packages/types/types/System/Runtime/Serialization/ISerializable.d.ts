import type { HostType, InterfaceTypeTrait } from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "./SerializationInfo";
import "./StreamingContext";

declare const iSerializableInputBrand: unique symbol;
export interface ISerializableInput {
  readonly [iSerializableInputBrand]: true;
}

export interface ISerializable
  extends Microsoft.ClearScript.ClrInterfaceView<ISerializableInput>, ISerializableInput {
  getObjectData(
    info: System.Runtime.Serialization.SerializationInfo,
    context: System.Runtime.Serialization.StreamingContext
  ): VoidResult;
}

declare global {
  namespace System.Runtime.Serialization {
    type ISerializableInput = import("./ISerializable").ISerializableInput;
  }
}

declare global {
  namespace System.Runtime.Serialization {
    type ISerializable = import("./ISerializable").ISerializable;
  }
}

export interface ISerializableHostType extends HostType<ISerializable, InterfaceTypeTrait> {}

export {};
