import type { HostType, InterfaceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "./ICollection";
import "./IDictionaryEnumerator";
import "./IEnumerable";

declare const iDictionaryInputBrand: unique symbol;
export interface IDictionaryInput {
  readonly [iDictionaryInputBrand]: true;
}

export interface IDictionary
  extends Microsoft.ClearScript.ClrInterfaceView<IDictionaryInput>, IDictionaryInput {
  add(key: unknown, value: unknown | null): VoidResult;
  clear(): VoidResult;
  contains(key: unknown): boolean;
  getEnumerator(): System.Collections.IDictionaryEnumerator;
  item: {
    (key: unknown): unknown;
    get(key: unknown): unknown;
    set(key: unknown, value: unknown): unknown;
  };
  readonly isFixedSize: boolean;
  readonly isReadOnly: boolean;
  readonly keys: System.Collections.ICollection;
  readonly values: System.Collections.ICollection;
  remove(key: unknown): VoidResult;
}

declare global {
  namespace System.Collections {
    type IDictionaryInput = import("./IDictionary").IDictionaryInput;
  }
}

declare global {
  namespace System.Collections {
    type IDictionary = import("./IDictionary").IDictionary;
  }
}

export interface IDictionaryHostType extends HostType<IDictionary, InterfaceTypeTrait> {}

export {};
