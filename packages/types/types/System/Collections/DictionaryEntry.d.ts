import type { ClrHostValue, HostType, ValueTypeTrait } from "../../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../ValueType";

declare const dictionaryEntryBrand: unique symbol;
export interface DictionaryEntry extends ClrHostValue {
  readonly [dictionaryEntryBrand]: true;
  deconstruct(key: HostVariableOut<unknown>, value: HostVariableOut<unknown>): VoidResult;
  key: unknown;
  toString(): string;
  value: unknown;
}

declare global {
  namespace System.Collections {
    type DictionaryEntry = import("./DictionaryEntry").DictionaryEntry;
  }
}

export interface DictionaryEntryHostType extends HostType<DictionaryEntry, ValueTypeTrait> {
  new (key: unknown, value: unknown | null): DictionaryEntry;
}

export {};
