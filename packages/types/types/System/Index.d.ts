import type {
  ClrHostValue,
  HostType,
  Int32Host,
  StrongNumeric,
  ValueTypeTrait
} from "../Microsoft/ClearScript/HostType";
import "./IEquatable";
import "./ValueType";

declare const indexBrand: unique symbol;
export interface Index extends ClrHostValue {
  readonly [indexBrand]: true;
  equals(other: System.Index): boolean;
  equals(value: unknown | null): boolean;
  getHashCode(): number;
  getOffset(length: number | StrongNumeric<Int32Host>): number;
  readonly isFromEnd: boolean;
  readonly value: number;
  toString(): string;
}

declare global {
  namespace System {
    type Index = import("./Index").Index;
  }
}

export interface IndexHostType extends HostType<Index, ValueTypeTrait> {
  new (value: number | StrongNumeric<Int32Host>): Index;
  new (value: number | StrongNumeric<Int32Host>, fromEnd: boolean): Index;
  readonly start: System.Index;
  readonly end: System.Index;
  fromStart(value: number | StrongNumeric<Int32Host>): System.Index;
  fromEnd(value: number | StrongNumeric<Int32Host>): System.Index;
}

export {};
