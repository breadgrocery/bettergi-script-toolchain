import type {
  ClrHostValue,
  DoubleHost,
  HostType,
  StrongNumeric,
  UInt32Host,
  ValueTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import "../../System/IEquatable";
import "../../System/IFormatProvider";
import "../../System/ValueType";

declare const rationalBrand: unique symbol;
export interface Rational extends ClrHostValue {
  readonly [rationalBrand]: true;
  readonly numerator: number;
  readonly denominator: number;
  equals(obj: unknown | null): boolean;
  equals(other: SixLabors.ImageSharp.Rational): boolean;
  getHashCode(): number;
  toDouble(): number;
  toSingle(): number;
  toString(): string;
  toString(provider: System.IFormatProvider): string;
}

declare global {
  namespace SixLabors.ImageSharp {
    type Rational = import("./Rational").Rational;
  }
}

export interface RationalHostType extends HostType<Rational, ValueTypeTrait> {
  new (value: number | StrongNumeric<UInt32Host>): Rational;
  new (
    numerator: number | StrongNumeric<UInt32Host>,
    denominator: number | StrongNumeric<UInt32Host>
  ): Rational;
  new (
    numerator: number | StrongNumeric<UInt32Host>,
    denominator: number | StrongNumeric<UInt32Host>,
    simplify: boolean
  ): Rational;
  new (value: number | StrongNumeric<DoubleHost>): Rational;
  new (value: number | StrongNumeric<DoubleHost>, bestPrecision: boolean): Rational;
  fromDouble(value: number | StrongNumeric<DoubleHost>): SixLabors.ImageSharp.Rational;
  fromDouble(
    value: number | StrongNumeric<DoubleHost>,
    bestPrecision: boolean
  ): SixLabors.ImageSharp.Rational;
}

export {};
