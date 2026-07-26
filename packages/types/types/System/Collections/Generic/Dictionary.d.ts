import type {
  ClrHostValue,
  FamilyArgumentOmitted,
  HostArray,
  HostType,
  Int32Host,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  StrongNumeric,
  ValueTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../../../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../IDisposable";
import "../../Runtime/Serialization/IDeserializationCallback";
import "../../Runtime/Serialization/ISerializable";
import "../../Runtime/Serialization/SerializationInfo";
import "../../Runtime/Serialization/StreamingContext";
import "../../ValueType";
import "../ICollection";
import "../IDictionary";
import "../IDictionaryEnumerator";
import "../IEnumerable";
import "../IEnumerator";
import "./ICollection";
import "./IDictionary";
import "./IEnumerable";
import "./IEnumerator";
import "./IEqualityComparer";
import "./IReadOnlyCollection";
import "./IReadOnlyDictionary";
import "./KeyValuePair";

declare const dictionaryArity2Brand: unique symbol;
export interface _DictionaryArity2<TKey, TValue>
  extends
    ClrHostValue,
    System.Collections.Generic.IDictionaryInput<TKey, TValue>,
    System.Collections.Generic.ICollectionInput<
      System.Collections.Generic.KeyValuePair<TKey, TValue>
    >,
    System.Collections.Generic.IEnumerableInput<
      System.Collections.Generic.KeyValuePair<TKey, TValue>
    >,
    System.Collections.IEnumerableInput,
    System.Collections.IDictionaryInput,
    System.Collections.ICollectionInput,
    System.Collections.Generic.IReadOnlyDictionaryInput<TKey, TValue>,
    System.Collections.Generic.IReadOnlyCollectionInput<
      System.Collections.Generic.KeyValuePair<TKey, TValue>
    >,
    System.Runtime.Serialization.ISerializableInput,
    System.Runtime.Serialization.IDeserializationCallbackInput {
  readonly [dictionaryArity2Brand]: true;
  add(key: TKey, value: TValue | null): VoidResult;
  clear(): VoidResult;
  containsKey(key: TKey): boolean;
  containsValue(value: TValue | null): boolean;
  ensureCapacity(capacity: number | StrongNumeric<Int32Host>): number;
  getEnumerator(): _DictionaryArity2_Enumerator<TKey, TValue>;
  getObjectData(
    info: System.Runtime.Serialization.SerializationInfo,
    context: System.Runtime.Serialization.StreamingContext
  ): VoidResult;
  item: { (key: TKey): TValue; get(key: TKey): TValue; set(key: TKey, value: TValue): TValue };
  onDeserialization(sender: unknown | null): VoidResult;
  readonly comparer: System.Collections.Generic.IEqualityComparer<TKey>;
  readonly count: number;
  readonly keys: _DictionaryArity2_KeyCollection<TKey, TValue>;
  readonly values: _DictionaryArity2_ValueCollection<TKey, TValue>;
  remove(key: TKey): boolean;
  remove(key: TKey, value: HostVariableOut<TValue>): boolean;
  trimExcess(): VoidResult;
  trimExcess(capacity: number | StrongNumeric<Int32Host>): VoidResult;
  tryAdd(key: TKey, value: TValue | null): boolean;
  tryGetValue(key: TKey, value: HostVariableOut<TValue>): boolean;
}

declare const dictionaryArity2_EnumeratorBrand: unique symbol;
export interface _DictionaryArity2_Enumerator<TKey, TValue>
  extends
    ClrHostValue,
    System.Collections.Generic.IEnumeratorInput<
      System.Collections.Generic.KeyValuePair<TKey, TValue>
    >,
    System.IDisposableInput,
    System.Collections.IEnumeratorInput,
    System.Collections.IDictionaryEnumeratorInput {
  readonly [dictionaryArity2_EnumeratorBrand]: true;
  moveNext(): boolean;
  readonly current: System.Collections.Generic.KeyValuePair<TKey, TValue>;
  dispose(): VoidResult;
}

export interface _DictionaryArity2_EnumeratorHostType<TKey, TValue> extends HostType<
  _DictionaryArity2_Enumerator<TKey, TValue>,
  ValueTypeTrait
> {}

declare global {
  namespace System.Collections.Generic.Dictionary {
    type Enumerator<TKey, TValue> = import("./Dictionary")._DictionaryArity2_Enumerator<
      TKey,
      TValue
    >;
  }
}

declare const dictionaryArity2_KeyCollectionBrand: unique symbol;
export interface _DictionaryArity2_KeyCollection<TKey, TValue>
  extends
    ClrHostValue,
    System.Collections.Generic.ICollectionInput<TKey>,
    System.Collections.Generic.IEnumerableInput<TKey>,
    System.Collections.IEnumerableInput,
    System.Collections.ICollectionInput,
    System.Collections.Generic.IReadOnlyCollectionInput<TKey> {
  readonly [dictionaryArity2_KeyCollectionBrand]: true;
  contains(item: TKey): boolean;
  copyTo(array: HostArray<TKey>, index: number | StrongNumeric<Int32Host>): VoidResult;
  getEnumerator(): _DictionaryArity2_KeyCollection_Enumerator<TKey, TValue>;
  readonly count: number;
}

declare const dictionaryArity2_KeyCollection_EnumeratorBrand: unique symbol;
export interface _DictionaryArity2_KeyCollection_Enumerator<TKey, TValue>
  extends
    ClrHostValue,
    System.Collections.Generic.IEnumeratorInput<TKey>,
    System.IDisposableInput,
    System.Collections.IEnumeratorInput {
  readonly [dictionaryArity2_KeyCollection_EnumeratorBrand]: true;
  moveNext(): boolean;
  readonly current: TKey;
  dispose(): VoidResult;
}

export interface _DictionaryArity2_KeyCollection_EnumeratorHostType<TKey, TValue> extends HostType<
  _DictionaryArity2_KeyCollection_Enumerator<TKey, TValue>,
  ValueTypeTrait
> {}

declare global {
  namespace System.Collections.Generic.Dictionary.KeyCollection {
    type Enumerator<TKey, TValue> =
      import("./Dictionary")._DictionaryArity2_KeyCollection_Enumerator<TKey, TValue>;
  }
}

export interface _DictionaryArity2_KeyCollectionHostType<TKey, TValue> extends HostType<
  _DictionaryArity2_KeyCollection<TKey, TValue>,
  ReferenceTypeTrait
> {
  new (
    dictionary: System.Collections.Generic.Dictionary<TKey, TValue>
  ): _DictionaryArity2_KeyCollection<TKey, TValue>;
  readonly Enumerator: _DictionaryArity2_KeyCollection_EnumeratorHostType<any, any>;
}

declare global {
  namespace System.Collections.Generic.Dictionary {
    type KeyCollection<TKey, TValue> = import("./Dictionary")._DictionaryArity2_KeyCollection<
      TKey,
      TValue
    >;
  }
}

declare const dictionaryArity2_ValueCollectionBrand: unique symbol;
export interface _DictionaryArity2_ValueCollection<TKey, TValue>
  extends
    ClrHostValue,
    System.Collections.Generic.ICollectionInput<TValue>,
    System.Collections.Generic.IEnumerableInput<TValue>,
    System.Collections.IEnumerableInput,
    System.Collections.ICollectionInput,
    System.Collections.Generic.IReadOnlyCollectionInput<TValue> {
  readonly [dictionaryArity2_ValueCollectionBrand]: true;
  copyTo(array: HostArray<TValue>, index: number | StrongNumeric<Int32Host>): VoidResult;
  getEnumerator(): _DictionaryArity2_ValueCollection_Enumerator<TKey, TValue>;
  readonly count: number;
}

declare const dictionaryArity2_ValueCollection_EnumeratorBrand: unique symbol;
export interface _DictionaryArity2_ValueCollection_Enumerator<TKey, TValue>
  extends
    ClrHostValue,
    System.Collections.Generic.IEnumeratorInput<TValue>,
    System.IDisposableInput,
    System.Collections.IEnumeratorInput {
  readonly [dictionaryArity2_ValueCollection_EnumeratorBrand]: true;
  moveNext(): boolean;
  readonly current: TValue;
  dispose(): VoidResult;
}

export interface _DictionaryArity2_ValueCollection_EnumeratorHostType<
  TKey,
  TValue
> extends HostType<_DictionaryArity2_ValueCollection_Enumerator<TKey, TValue>, ValueTypeTrait> {}

declare global {
  namespace System.Collections.Generic.Dictionary.ValueCollection {
    type Enumerator<TKey, TValue> =
      import("./Dictionary")._DictionaryArity2_ValueCollection_Enumerator<TKey, TValue>;
  }
}

export interface _DictionaryArity2_ValueCollectionHostType<TKey, TValue> extends HostType<
  _DictionaryArity2_ValueCollection<TKey, TValue>,
  ReferenceTypeTrait
> {
  new (
    dictionary: System.Collections.Generic.Dictionary<TKey, TValue>
  ): _DictionaryArity2_ValueCollection<TKey, TValue>;
  readonly Enumerator: _DictionaryArity2_ValueCollection_EnumeratorHostType<any, any>;
}

declare global {
  namespace System.Collections.Generic.Dictionary {
    type ValueCollection<TKey, TValue> = import("./Dictionary")._DictionaryArity2_ValueCollection<
      TKey,
      TValue
    >;
  }
}

export interface _DictionaryArity2HostType<TKey, TValue> extends HostType<
  _DictionaryArity2<TKey, TValue>,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): _DictionaryArity2<TKey, TValue>;
  new (capacity: number | StrongNumeric<Int32Host>): _DictionaryArity2<TKey, TValue>;
  new (
    comparer: System.Collections.Generic.IEqualityComparer<TKey> | null
  ): _DictionaryArity2<TKey, TValue>;
  new (
    capacity: number | StrongNumeric<Int32Host>,
    comparer: System.Collections.Generic.IEqualityComparer<TKey> | null
  ): _DictionaryArity2<TKey, TValue>;
  new (
    dictionary: System.Collections.Generic.IDictionary<TKey, TValue>
  ): _DictionaryArity2<TKey, TValue>;
  new (
    dictionary: System.Collections.Generic.IDictionary<TKey, TValue>,
    comparer: System.Collections.Generic.IEqualityComparer<TKey> | null
  ): _DictionaryArity2<TKey, TValue>;
  new (
    collection: System.Collections.Generic.IEnumerable<
      System.Collections.Generic.KeyValuePair<TKey, TValue>
    >
  ): _DictionaryArity2<TKey, TValue>;
  new (
    collection: System.Collections.Generic.IEnumerable<
      System.Collections.Generic.KeyValuePair<TKey, TValue>
    >,
    comparer: System.Collections.Generic.IEqualityComparer<TKey> | null
  ): _DictionaryArity2<TKey, TValue>;
  readonly Enumerator: _DictionaryArity2_EnumeratorHostType<any, any>;
  readonly KeyCollection: _DictionaryArity2_KeyCollectionHostType<any, any>;
  readonly ValueCollection: _DictionaryArity2_ValueCollectionHostType<any, any>;
}

export type DictionaryFamily<
  T1 = FamilyArgumentOmitted,
  T2 = FamilyArgumentOmitted
> = _DictionaryArity2<T1, T2>;

declare global {
  namespace System.Collections.Generic {
    type Dictionary<
      T1 = Microsoft.ClearScript.FamilyArgumentOmitted,
      T2 = Microsoft.ClearScript.FamilyArgumentOmitted
    > = import("./Dictionary").DictionaryFamily<T1, T2>;
  }
}

export type DictionaryHostType<T1, T2> = _DictionaryArity2HostType<T1, T2>;

declare const dictionary_EnumeratorBrand: unique symbol;
export interface Dictionary_Enumerator<TKey, TValue>
  extends
    ClrHostValue,
    System.Collections.Generic.IEnumeratorInput<TKey>,
    System.IDisposableInput,
    System.Collections.IEnumeratorInput {
  readonly [dictionary_EnumeratorBrand]: true;
  moveNext(): boolean;
  readonly current: TKey;
  dispose(): VoidResult;
}

export interface Dictionary_EnumeratorHostType<TKey, TValue> extends HostType<
  Dictionary_Enumerator<TKey, TValue>,
  ValueTypeTrait
> {}

export {};
