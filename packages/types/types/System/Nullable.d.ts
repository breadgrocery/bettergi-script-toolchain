import type {
  ClrHostValue,
  FamilyArgumentOmitted,
  HostType,
  ValueTypeTrait
} from "../Microsoft/ClearScript/HostType";
import "./ValueType";

declare const nullableArity1Brand: unique symbol;
export interface _NullableArity1<T> extends ClrHostValue {
  readonly [nullableArity1Brand]: true;
  equals(other: unknown | null): boolean;
  getHashCode(): number;
  getValueOrDefault(): T;
  getValueOrDefault(defaultValue: T): T;
  readonly hasValue: boolean;
  readonly value: T;
  toString(): string;
}

export interface _NullableArity1HostType<T> extends HostType<_NullableArity1<T>, ValueTypeTrait> {
  new (value: T): _NullableArity1<T>;
}

export type NullableFamily<T1 = FamilyArgumentOmitted> = _NullableArity1<T1>;

declare global {
  namespace System {
    type Nullable<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./Nullable").NullableFamily<T1>;
  }
}

export type NullableHostType<T1> = _NullableArity1HostType<T1>;

export {};
