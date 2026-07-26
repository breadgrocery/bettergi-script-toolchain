import type {
  ClrHostValue,
  HostType,
  Int32Host,
  StrongNumeric,
  UInt32Host,
  ValueTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import "../../System/IComparable";
import "../../System/IEquatable";
import "../../System/IFormatProvider";
import "../../System/ValueType";

declare const numberBrand: unique symbol;
export interface Number extends ClrHostValue {
  readonly [numberBrand]: true;
  compareTo(other: SixLabors.ImageSharp.Number): number;
  equals(obj: unknown | null): boolean;
  equals(other: SixLabors.ImageSharp.Number): boolean;
  getHashCode(): number;
  toString(): string;
  toString(provider: System.IFormatProvider): string;
}

declare global {
  namespace SixLabors.ImageSharp {
    type Number = import("./Number").Number;
  }
}

export interface NumberHostType extends HostType<Number, ValueTypeTrait> {
  new (value: number | StrongNumeric<Int32Host>): Number;
  new (value: number | StrongNumeric<UInt32Host>): Number;
}

export {};
