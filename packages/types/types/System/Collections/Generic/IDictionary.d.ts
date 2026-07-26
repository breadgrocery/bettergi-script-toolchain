import type {
  FamilyArgumentOmitted,
  HostType,
  InterfaceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../../../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../IEnumerable";
import "./ICollection";
import "./IEnumerable";
import "./KeyValuePair";

declare const iDictionaryArity2InputBrand: unique symbol;
export interface _IDictionaryArity2Input<TKey, TValue> {
  readonly [iDictionaryArity2InputBrand]: true;
}

export interface _IDictionaryArity2<TKey, TValue>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_IDictionaryArity2Input<TKey, TValue>>,
    _IDictionaryArity2Input<TKey, TValue> {
  add(key: TKey | null, value: TValue | null): VoidResult;
  containsKey(key: TKey | null): boolean;
  item: { (key: TKey): TValue; get(key: TKey): TValue; set(key: TKey, value: TValue): TValue };
  readonly keys: System.Collections.Generic.ICollection<TKey>;
  readonly values: System.Collections.Generic.ICollection<TValue>;
  remove(key: TKey | null): boolean;
  tryGetValue(key: TKey | null, value: HostVariableOut<TValue>): boolean;
}

export interface _IDictionaryArity2HostType<TKey, TValue> extends HostType<
  _IDictionaryArity2<TKey, TValue>,
  InterfaceTypeTrait
> {}

export type IDictionaryFamily<
  T1 = FamilyArgumentOmitted,
  T2 = FamilyArgumentOmitted
> = _IDictionaryArity2<T1, T2>;

declare global {
  namespace System.Collections.Generic {
    type IDictionary<
      T1 = Microsoft.ClearScript.FamilyArgumentOmitted,
      T2 = Microsoft.ClearScript.FamilyArgumentOmitted
    > = import("./IDictionary").IDictionaryFamily<T1, T2>;
  }
}

export type IDictionaryInputFamily<
  T1 = FamilyArgumentOmitted,
  T2 = FamilyArgumentOmitted
> = _IDictionaryArity2Input<T1, T2>;
export type IDictionaryInput<T1, T2> = _IDictionaryArity2Input<T1, T2>;

declare global {
  namespace System.Collections.Generic {
    type IDictionaryInput<T1, T2> = import("./IDictionary").IDictionaryInput<T1, T2>;
  }
}

export type IDictionaryHostType<T1, T2> = _IDictionaryArity2HostType<T1, T2>;

export {};
