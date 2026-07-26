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
import "../../Predicate";
import "../../Runtime/Serialization/IDeserializationCallback";
import "../../Runtime/Serialization/ISerializable";
import "../../Runtime/Serialization/SerializationInfo";
import "../../Runtime/Serialization/StreamingContext";
import "../../ValueType";
import "../IEnumerable";
import "../IEnumerator";
import "./ICollection";
import "./IEnumerable";
import "./IEnumerator";
import "./IEqualityComparer";
import "./IReadOnlyCollection";
import "./IReadOnlySet";
import "./ISet";

declare const hashSetArity1Brand: unique symbol;
export interface _HashSetArity1<T>
  extends
    ClrHostValue,
    System.Collections.Generic.ICollectionInput<T>,
    System.Collections.Generic.IEnumerableInput<T>,
    System.Collections.IEnumerableInput,
    System.Collections.Generic.ISetInput<T>,
    System.Collections.Generic.IReadOnlyCollectionInput<T>,
    System.Collections.Generic.IReadOnlySetInput<T>,
    System.Runtime.Serialization.ISerializableInput,
    System.Runtime.Serialization.IDeserializationCallbackInput {
  readonly [hashSetArity1Brand]: true;
  add(item: T | null): boolean;
  clear(): VoidResult;
  contains(item: T | null): boolean;
  copyTo(array: HostArray<T>): VoidResult;
  copyTo(array: HostArray<T>, arrayIndex: number | StrongNumeric<Int32Host>): VoidResult;
  copyTo(
    array: HostArray<T>,
    arrayIndex: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): VoidResult;
  ensureCapacity(capacity: number | StrongNumeric<Int32Host>): number;
  exceptWith(other: System.Collections.Generic.IEnumerable<T>): VoidResult;
  getEnumerator(): _HashSetArity1_Enumerator<T>;
  getObjectData(
    info: System.Runtime.Serialization.SerializationInfo,
    context: System.Runtime.Serialization.StreamingContext
  ): VoidResult;
  intersectWith(other: System.Collections.Generic.IEnumerable<T>): VoidResult;
  isProperSubsetOf(other: System.Collections.Generic.IEnumerable<T>): boolean;
  isProperSupersetOf(other: System.Collections.Generic.IEnumerable<T>): boolean;
  isSubsetOf(other: System.Collections.Generic.IEnumerable<T>): boolean;
  isSupersetOf(other: System.Collections.Generic.IEnumerable<T>): boolean;
  onDeserialization(sender: unknown | null): VoidResult;
  overlaps(other: System.Collections.Generic.IEnumerable<T>): boolean;
  readonly comparer: System.Collections.Generic.IEqualityComparer<T>;
  readonly count: number;
  remove(item: T | null): boolean;
  removeWhere(match: System.Predicate<T>): number;
  setEquals(other: System.Collections.Generic.IEnumerable<T>): boolean;
  symmetricExceptWith(other: System.Collections.Generic.IEnumerable<T>): VoidResult;
  trimExcess(): VoidResult;
  tryGetValue(equalValue: T | null, actualValue: HostVariableOut<T>): boolean;
  unionWith(other: System.Collections.Generic.IEnumerable<T>): VoidResult;
}

declare const hashSetArity1_EnumeratorBrand: unique symbol;
export interface _HashSetArity1_Enumerator<T>
  extends
    ClrHostValue,
    System.Collections.Generic.IEnumeratorInput<T>,
    System.IDisposableInput,
    System.Collections.IEnumeratorInput {
  readonly [hashSetArity1_EnumeratorBrand]: true;
  moveNext(): boolean;
  readonly current: T;
  dispose(): VoidResult;
}

export interface _HashSetArity1_EnumeratorHostType<T> extends HostType<
  _HashSetArity1_Enumerator<T>,
  ValueTypeTrait
> {}

declare global {
  namespace System.Collections.Generic.HashSet {
    type Enumerator<T> = import("./HashSet")._HashSetArity1_Enumerator<T>;
  }
}

export interface _HashSetArity1HostType<T> extends HostType<
  _HashSetArity1<T>,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): _HashSetArity1<T>;
  new (comparer: System.Collections.Generic.IEqualityComparer<T> | null): _HashSetArity1<T>;
  new (capacity: number | StrongNumeric<Int32Host>): _HashSetArity1<T>;
  new (collection: System.Collections.Generic.IEnumerable<T>): _HashSetArity1<T>;
  new (
    collection: System.Collections.Generic.IEnumerable<T>,
    comparer: System.Collections.Generic.IEqualityComparer<T> | null
  ): _HashSetArity1<T>;
  new (
    capacity: number | StrongNumeric<Int32Host>,
    comparer: System.Collections.Generic.IEqualityComparer<T> | null
  ): _HashSetArity1<T>;
  createSetComparer(): System.Collections.Generic.IEqualityComparer<System.Collections.Generic.HashSet>;
  readonly Enumerator: _HashSetArity1_EnumeratorHostType<any>;
}

export type HashSetFamily<T1 = FamilyArgumentOmitted> = _HashSetArity1<T1>;

declare global {
  namespace System.Collections.Generic {
    type HashSet<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./HashSet").HashSetFamily<T1>;
  }
}

export type HashSetHostType<T1> = _HashSetArity1HostType<T1>;

export {};
