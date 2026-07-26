import type {
  ClrHostValue,
  HostType,
  Int32Host,
  StrongNumeric,
  ValueTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import "../IEquatable";
import "../ValueType";

declare const characterRangeBrand: unique symbol;
export interface CharacterRange extends ClrHostValue {
  readonly [characterRangeBrand]: true;
  equals(obj: unknown | null): boolean;
  equals(other: System.Drawing.CharacterRange): boolean;
  first: number;
  getHashCode(): number;
  length: number;
}

declare global {
  namespace System.Drawing {
    type CharacterRange = import("./CharacterRange").CharacterRange;
  }
}

export interface CharacterRangeHostType extends HostType<CharacterRange, ValueTypeTrait> {
  new (
    first: number | StrongNumeric<Int32Host>,
    length: number | StrongNumeric<Int32Host>
  ): CharacterRange;
}

export {};
