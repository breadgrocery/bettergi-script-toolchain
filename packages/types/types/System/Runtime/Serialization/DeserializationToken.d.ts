import type {
  ClrHostValue,
  HostType,
  ValueTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../IDisposable";
import "../../ValueType";

declare const deserializationTokenBrand: unique symbol;
export interface DeserializationToken extends ClrHostValue, System.IDisposableInput {
  readonly [deserializationTokenBrand]: true;
  dispose(): VoidResult;
}

declare global {
  namespace System.Runtime.Serialization {
    type DeserializationToken = import("./DeserializationToken").DeserializationToken;
  }
}

export interface DeserializationTokenHostType extends HostType<
  DeserializationToken,
  ValueTypeTrait
> {}

export {};
