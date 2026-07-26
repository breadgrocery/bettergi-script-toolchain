import type {
  ClrHostValue,
  HostType,
  Int32Host,
  StrongNumeric,
  ValueTypeTrait
} from "../Microsoft/ClearScript/HostType";
import "./IEquatable";
import "./Index";
import "./ValueTuple";
import "./ValueType";

declare const rangeBrand: unique symbol;
export interface Range extends ClrHostValue {
  readonly [rangeBrand]: true;
  readonly start: System.Index;
  readonly end: System.Index;
  equals(other: System.Range): boolean;
  equals(value: unknown | null): boolean;
  getHashCode(): number;
  getOffsetAndLength(length: number | StrongNumeric<Int32Host>): System.ValueTuple<number, number>;
  toString(): string;
}

declare global {
  namespace System {
    type Range = import("./Range").Range;
  }
}

export interface RangeHostType extends HostType<Range, ValueTypeTrait> {
  new (start: System.Index, end: System.Index): Range;
  readonly all: System.Range;
  startAt(start: System.Index): System.Range;
  endAt(end: System.Index): System.Range;
}

export {};
