import type {
  ClrHostValue,
  DoubleHost,
  HostType,
  Int32Host,
  StrongNumeric,
  ValueTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import "../../System/IEquatable";
import "../../System/IFormatProvider";
import "../../System/ValueType";

declare const signedRationalBrand: unique symbol;
export interface SignedRational extends ClrHostValue {
  readonly [signedRationalBrand]: true;
  readonly numerator: number;
  readonly denominator: number;
  equals(obj: unknown | null): boolean;
  equals(other: SixLabors.ImageSharp.SignedRational): boolean;
  getHashCode(): number;
  toDouble(): number;
  toString(): string;
  toString(provider: System.IFormatProvider): string;
}

declare global {
  namespace SixLabors.ImageSharp {
    type SignedRational = import("./SignedRational").SignedRational;
  }
}

export interface SignedRationalHostType extends HostType<SignedRational, ValueTypeTrait> {
  new (value: number | StrongNumeric<Int32Host>): SignedRational;
  new (
    numerator: number | StrongNumeric<Int32Host>,
    denominator: number | StrongNumeric<Int32Host>
  ): SignedRational;
  new (
    numerator: number | StrongNumeric<Int32Host>,
    denominator: number | StrongNumeric<Int32Host>,
    simplify: boolean
  ): SignedRational;
  new (value: number | StrongNumeric<DoubleHost>): SignedRational;
  new (value: number | StrongNumeric<DoubleHost>, bestPrecision: boolean): SignedRational;
  fromDouble(value: number | StrongNumeric<DoubleHost>): SixLabors.ImageSharp.SignedRational;
  fromDouble(
    value: number | StrongNumeric<DoubleHost>,
    bestPrecision: boolean
  ): SixLabors.ImageSharp.SignedRational;
}

export {};
