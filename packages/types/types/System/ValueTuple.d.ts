import type {
  ClrHostValue,
  FamilyArgumentOmitted,
  HostType,
  IsFamilyArgumentOmitted,
  ValueTypeTrait
} from "../Microsoft/ClearScript/HostType";
import "./Collections/IStructuralComparable";
import "./Collections/IStructuralEquatable";
import "./IComparable";
import "./IEquatable";
import "./Runtime/CompilerServices/ITuple";
import "./ValueType";

declare const valueTupleArity2Brand: unique symbol;
export interface _ValueTupleArity2<T1, T2>
  extends
    ClrHostValue,
    System.Collections.IStructuralEquatableInput,
    System.Collections.IStructuralComparableInput,
    System.IComparableInput,
    System.Runtime.CompilerServices.ITupleInput {
  readonly [valueTupleArity2Brand]: true;
  compareTo(other: System.ValueTuple): number;
  equals(obj: unknown | null): boolean;
  equals(other: System.ValueTuple): boolean;
  getHashCode(): number;
  item1: T1;
  item2: T2;
  toString(): string;
}

export interface _ValueTupleArity2HostType<T1, T2> extends HostType<
  _ValueTupleArity2<T1, T2>,
  ValueTypeTrait
> {
  new (item1: T1, item2: T2): _ValueTupleArity2<T1, T2>;
}

declare const valueTupleArity3Brand: unique symbol;
export interface _ValueTupleArity3<T1, T2, T3>
  extends
    ClrHostValue,
    System.Collections.IStructuralEquatableInput,
    System.Collections.IStructuralComparableInput,
    System.IComparableInput,
    System.Runtime.CompilerServices.ITupleInput {
  readonly [valueTupleArity3Brand]: true;
  compareTo(other: System.ValueTuple): number;
  equals(obj: unknown | null): boolean;
  equals(other: System.ValueTuple): boolean;
  getHashCode(): number;
  item1: T1;
  item2: T2;
  item3: T3;
  toString(): string;
}

export interface _ValueTupleArity3HostType<T1, T2, T3> extends HostType<
  _ValueTupleArity3<T1, T2, T3>,
  ValueTypeTrait
> {
  new (item1: T1, item2: T2, item3: T3): _ValueTupleArity3<T1, T2, T3>;
}

declare const valueTupleArity4Brand: unique symbol;
export interface _ValueTupleArity4<T1, T2, T3, T4>
  extends
    ClrHostValue,
    System.Collections.IStructuralEquatableInput,
    System.Collections.IStructuralComparableInput,
    System.IComparableInput,
    System.Runtime.CompilerServices.ITupleInput {
  readonly [valueTupleArity4Brand]: true;
  compareTo(other: System.ValueTuple): number;
  equals(obj: unknown | null): boolean;
  equals(other: System.ValueTuple): boolean;
  getHashCode(): number;
  item1: T1;
  item2: T2;
  item3: T3;
  item4: T4;
  toString(): string;
}

export interface _ValueTupleArity4HostType<T1, T2, T3, T4> extends HostType<
  _ValueTupleArity4<T1, T2, T3, T4>,
  ValueTypeTrait
> {
  new (item1: T1, item2: T2, item3: T3, item4: T4): _ValueTupleArity4<T1, T2, T3, T4>;
}

export type ValueTupleFamily<
  T1 = FamilyArgumentOmitted,
  T2 = FamilyArgumentOmitted,
  T3 = FamilyArgumentOmitted,
  T4 = FamilyArgumentOmitted
> =
  IsFamilyArgumentOmitted<T1> extends true
    ? never
    : IsFamilyArgumentOmitted<T2> extends true
      ? never
      : IsFamilyArgumentOmitted<T3> extends true
        ? _ValueTupleArity2<T1, T2>
        : IsFamilyArgumentOmitted<T4> extends true
          ? _ValueTupleArity3<T1, T2, T3>
          : _ValueTupleArity4<T1, T2, T3, T4>;

declare global {
  namespace System {
    type ValueTuple<
      T1 = Microsoft.ClearScript.FamilyArgumentOmitted,
      T2 = Microsoft.ClearScript.FamilyArgumentOmitted,
      T3 = Microsoft.ClearScript.FamilyArgumentOmitted,
      T4 = Microsoft.ClearScript.FamilyArgumentOmitted
    > = import("./ValueTuple").ValueTupleFamily<T1, T2, T3, T4>;
  }
}

export type ValueTupleHostType<T1, T2> = _ValueTupleArity2HostType<T1, T2>;

export {};
