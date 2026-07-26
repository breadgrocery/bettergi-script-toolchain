import type { HostDelegate, HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import "./Delegate";
import "./ICloneable";
import "./Runtime/Serialization/ISerializable";
import "./Runtime/Serialization/SerializationInfo";
import "./Runtime/Serialization/StreamingContext";

declare const delegateMulticastDelegateBrand: unique symbol;
export interface MulticastDelegate extends HostDelegate {
  readonly [delegateMulticastDelegateBrand]: true;
}

declare global {
  namespace System {
    type MulticastDelegate = import("./MulticastDelegate").MulticastDelegate;
  }
}

export interface MulticastDelegateHostType extends HostType<
  MulticastDelegate,
  ReferenceTypeTrait
> {}

export {};
