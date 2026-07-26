import type {
  FamilyArgumentOmitted,
  HostType,
  InterfaceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../../../Microsoft/ClearScript/HostVariable";
import "../IEnumerable";
import "./IEnumerable";
import "./IReadOnlyCollection";
import "./KeyValuePair";

declare const iReadOnlyDictionaryArity2InputBrand: unique symbol;
export interface _IReadOnlyDictionaryArity2Input<TKey, TValue> {
  readonly [iReadOnlyDictionaryArity2InputBrand]: true;
}

export interface _IReadOnlyDictionaryArity2<TKey, TValue>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_IReadOnlyDictionaryArity2Input<TKey, TValue>>,
    _IReadOnlyDictionaryArity2Input<TKey, TValue> {
  containsKey(key: TKey | null): boolean;
  item: { (key: TKey): TValue; get(key: TKey): TValue };
  readonly keys: System.Collections.Generic.IEnumerable<TKey>;
  readonly values: System.Collections.Generic.IEnumerable<TValue>;
  tryGetValue(key: TKey | null, value: HostVariableOut<TValue>): boolean;
}

export interface _IReadOnlyDictionaryArity2HostType<TKey, TValue> extends HostType<
  _IReadOnlyDictionaryArity2<TKey, TValue>,
  InterfaceTypeTrait
> {}

export type IReadOnlyDictionaryFamily<
  T1 = FamilyArgumentOmitted,
  T2 = FamilyArgumentOmitted
> = _IReadOnlyDictionaryArity2<T1, T2>;

declare global {
  namespace System.Collections.Generic {
    type IReadOnlyDictionary<
      T1 = Microsoft.ClearScript.FamilyArgumentOmitted,
      T2 = Microsoft.ClearScript.FamilyArgumentOmitted
    > = import("./IReadOnlyDictionary").IReadOnlyDictionaryFamily<T1, T2>;
  }
}

export type IReadOnlyDictionaryInputFamily<
  T1 = FamilyArgumentOmitted,
  T2 = FamilyArgumentOmitted
> = _IReadOnlyDictionaryArity2Input<T1, T2>;
export type IReadOnlyDictionaryInput<T1, T2> = _IReadOnlyDictionaryArity2Input<T1, T2>;

declare global {
  namespace System.Collections.Generic {
    type IReadOnlyDictionaryInput<T1, T2> =
      import("./IReadOnlyDictionary").IReadOnlyDictionaryInput<T1, T2>;
  }
}

export type IReadOnlyDictionaryHostType<T1, T2> = _IReadOnlyDictionaryArity2HostType<T1, T2>;

export {};
