import type { HostType, InterfaceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import "./DictionaryEntry";
import "./IEnumerator";

declare const iDictionaryEnumeratorInputBrand: unique symbol;
export interface IDictionaryEnumeratorInput {
  readonly [iDictionaryEnumeratorInputBrand]: true;
}

export interface IDictionaryEnumerator
  extends
    Microsoft.ClearScript.ClrInterfaceView<IDictionaryEnumeratorInput>,
    IDictionaryEnumeratorInput {
  readonly entry: System.Collections.DictionaryEntry;
  readonly key: unknown;
  readonly value: unknown;
}

declare global {
  namespace System.Collections {
    type IDictionaryEnumeratorInput = import("./IDictionaryEnumerator").IDictionaryEnumeratorInput;
  }
}

declare global {
  namespace System.Collections {
    type IDictionaryEnumerator = import("./IDictionaryEnumerator").IDictionaryEnumerator;
  }
}

export interface IDictionaryEnumeratorHostType extends HostType<
  IDictionaryEnumerator,
  InterfaceTypeTrait
> {}

export {};
