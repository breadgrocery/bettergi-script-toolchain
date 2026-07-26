import type {
  ClrHostValue,
  EnumInput,
  HostType,
  ValueTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../ValueType";
import "./StreamingContextStates";

declare const streamingContextBrand: unique symbol;
export interface StreamingContext extends ClrHostValue {
  readonly [streamingContextBrand]: true;
  equals(obj: unknown | null): boolean;
  getHashCode(): number;
  readonly context: unknown;
  readonly state: System.Runtime.Serialization.StreamingContextStates;
}

declare global {
  namespace System.Runtime.Serialization {
    type StreamingContext = import("./StreamingContext").StreamingContext;
  }
}

export interface StreamingContextHostType extends HostType<StreamingContext, ValueTypeTrait> {
  new (state: EnumInput<System.Runtime.Serialization.StreamingContextStates>): StreamingContext;
  new (
    state: EnumInput<System.Runtime.Serialization.StreamingContextStates>,
    additional: unknown | null
  ): StreamingContext;
}

export {};
