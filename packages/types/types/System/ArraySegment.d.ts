import type {
  ClrHostValue,
  FamilyArgumentOmitted,
  HostArray,
  HostType,
  Int32Host,
  StrongNumeric,
  ValueTypeTrait
} from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "./Collections/Generic/ICollection";
import "./Collections/Generic/IEnumerable";
import "./Collections/Generic/IEnumerator";
import "./Collections/Generic/IList";
import "./Collections/Generic/IReadOnlyCollection";
import "./Collections/Generic/IReadOnlyList";
import "./Collections/IEnumerable";
import "./Collections/IEnumerator";
import "./IDisposable";
import "./ValueType";

declare const arraySegmentArity1Brand: unique symbol;
export interface _ArraySegmentArity1<T>
  extends
    ClrHostValue,
    System.Collections.Generic.IListInput<T>,
    System.Collections.Generic.ICollectionInput<T>,
    System.Collections.Generic.IEnumerableInput<T>,
    System.Collections.IEnumerableInput,
    System.Collections.Generic.IReadOnlyListInput<T>,
    System.Collections.Generic.IReadOnlyCollectionInput<T> {
  readonly [arraySegmentArity1Brand]: true;
  copyTo(destination: HostArray<T>): VoidResult;
  copyTo(
    destination: HostArray<T>,
    destinationIndex: number | StrongNumeric<Int32Host>
  ): VoidResult;
  copyTo(destination: System.ArraySegment): VoidResult;
  equals(obj: System.ArraySegment): boolean;
  equals(obj: unknown | null): boolean;
  getEnumerator(): _ArraySegmentArity1_Enumerator<T>;
  getHashCode(): number;
  item: {
    (index: number | StrongNumeric<Int32Host>): T;
    get(index: number | StrongNumeric<Int32Host>): T;
    set(index: number | StrongNumeric<Int32Host>, value: T): T;
  };
  readonly array: HostArray<T>;
  readonly count: number;
  readonly offset: number;
  slice(index: number | StrongNumeric<Int32Host>): System.ArraySegment;
  slice(
    index: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): System.ArraySegment;
  toArray(): HostArray<T>;
}

declare const arraySegmentArity1_EnumeratorBrand: unique symbol;
export interface _ArraySegmentArity1_Enumerator<T>
  extends
    ClrHostValue,
    System.Collections.Generic.IEnumeratorInput<T>,
    System.IDisposableInput,
    System.Collections.IEnumeratorInput {
  readonly [arraySegmentArity1_EnumeratorBrand]: true;
  moveNext(): boolean;
  readonly current: T;
  dispose(): VoidResult;
}

export interface _ArraySegmentArity1_EnumeratorHostType<T> extends HostType<
  _ArraySegmentArity1_Enumerator<T>,
  ValueTypeTrait
> {}

declare global {
  namespace System.ArraySegment {
    type Enumerator<T> = import("./ArraySegment")._ArraySegmentArity1_Enumerator<T>;
  }
}

export interface _ArraySegmentArity1HostType<T> extends HostType<
  _ArraySegmentArity1<T>,
  ValueTypeTrait
> {
  new (array: HostArray<T>): _ArraySegmentArity1<T>;
  new (
    array: HostArray<T>,
    offset: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): _ArraySegmentArity1<T>;
  readonly empty: System.ArraySegment;
  readonly Enumerator: _ArraySegmentArity1_EnumeratorHostType<any>;
}

export type ArraySegmentFamily<T1 = FamilyArgumentOmitted> = _ArraySegmentArity1<T1>;

declare global {
  namespace System {
    type ArraySegment<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./ArraySegment").ArraySegmentFamily<T1>;
  }
}

export type ArraySegmentHostType<T1> = _ArraySegmentArity1HostType<T1>;

export {};
