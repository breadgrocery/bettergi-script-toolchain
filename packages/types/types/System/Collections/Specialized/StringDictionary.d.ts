import type {
  ClrHostValue,
  HostType,
  Int32Host,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../Array";
import "../ICollection";
import "../IEnumerable";
import "../IEnumerator";

declare const stringDictionaryBrand: unique symbol;
export interface StringDictionary extends ClrHostValue, System.Collections.IEnumerableInput {
  readonly [stringDictionaryBrand]: true;
  add(key: string, value: string | null): VoidResult;
  clear(): VoidResult;
  containsKey(key: string): boolean;
  containsValue(value: string | null): boolean;
  copyTo(array: System.Array, index: number | StrongNumeric<Int32Host>): VoidResult;
  getEnumerator(): System.Collections.IEnumerator;
  item: {
    (key: string): string;
    get(key: string): string;
    set(key: string, value: string): string;
  };
  readonly count: number;
  readonly isSynchronized: boolean;
  readonly keys: System.Collections.ICollection;
  readonly syncRoot: unknown;
  readonly values: System.Collections.ICollection;
  remove(key: string): VoidResult;
}

declare global {
  namespace System.Collections.Specialized {
    type StringDictionary = import("./StringDictionary").StringDictionary;
  }
}

export interface StringDictionaryHostType extends HostType<
  StringDictionary,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): StringDictionary;
}

export {};
