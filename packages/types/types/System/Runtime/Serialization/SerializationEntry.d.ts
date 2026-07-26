import type {
  ClrHostValue,
  HostType,
  ValueTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../V8SplitProxyHelpers";
import "../../ValueType";

declare const serializationEntryBrand: unique symbol;
export interface SerializationEntry extends ClrHostValue {
  readonly [serializationEntryBrand]: true;
  readonly name: string;
  readonly objectType: System.Type;
  readonly value: unknown;
}

declare global {
  namespace System.Runtime.Serialization {
    type SerializationEntry = import("./SerializationEntry").SerializationEntry;
  }
}

export interface SerializationEntryHostType extends HostType<SerializationEntry, ValueTypeTrait> {}

export {};
