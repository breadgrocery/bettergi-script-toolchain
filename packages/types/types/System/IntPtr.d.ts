import type {
  ClrHostValue,
  EnumInput,
  HostType,
  Int32Host,
  Int64Host,
  StrongNumeric,
  ValueTypeTrait
} from "../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../Microsoft/ClearScript/HostVariable";
import "./Globalization/NumberStyles";
import "./IComparable";
import "./IEquatable";
import "./IFormatProvider";
import "./IFormattable";
import "./IParsable";
import "./ISpanFormattable";
import "./ISpanParsable";
import "./IUtf8SpanFormattable";
import "./IUtf8SpanParsable";
import "./Numerics/IAdditionOperators";
import "./Numerics/IAdditiveIdentity";
import "./Numerics/IBinaryInteger";
import "./Numerics/IBinaryNumber";
import "./Numerics/IBitwiseOperators";
import "./Numerics/IComparisonOperators";
import "./Numerics/IDecrementOperators";
import "./Numerics/IDivisionOperators";
import "./Numerics/IEqualityOperators";
import "./Numerics/IIncrementOperators";
import "./Numerics/IMinMaxValue";
import "./Numerics/IModulusOperators";
import "./Numerics/IMultiplicativeIdentity";
import "./Numerics/IMultiplyOperators";
import "./Numerics/INumber";
import "./Numerics/INumberBase";
import "./Numerics/IShiftOperators";
import "./Numerics/ISignedNumber";
import "./Numerics/ISubtractionOperators";
import "./Numerics/IUnaryNegationOperators";
import "./Numerics/IUnaryPlusOperators";
import "./Runtime/Serialization/ISerializable";
import "./ValueTuple";
import "./ValueType";

declare const intPtrBrand: unique symbol;
export interface IntPtr
  extends
    ClrHostValue,
    System.IComparableInput,
    System.ISpanFormattableInput,
    System.IFormattableInput,
    System.Runtime.Serialization.ISerializableInput,
    System.IUtf8SpanFormattableInput {
  readonly [intPtrBrand]: true;
  compareTo(value: System.IntPtr): number;
  compareTo(value: unknown | null): number;
  equals(obj: unknown | null): boolean;
  equals(other: System.IntPtr): boolean;
  getHashCode(): number;
  toInt32(): number;
  toInt64(): number;
  toString(): string;
  toString(format: string | null): string;
  toString(format: string | null, provider: System.IFormatProvider | null): string;
  toString(provider: System.IFormatProvider | null): string;
}

declare global {
  namespace System {
    type IntPtr = import("./IntPtr").IntPtr;
  }
}

export interface IntPtrHostType extends HostType<IntPtr, ValueTypeTrait> {
  new (value: number | StrongNumeric<Int32Host>): IntPtr;
  new (value: number | StrongNumeric<Int64Host>): IntPtr;
  readonly zero: System.IntPtr;
  readonly size: number;
  readonly maxValue: System.IntPtr;
  readonly minValue: System.IntPtr;
  add(pointer: System.IntPtr, offset: number | StrongNumeric<Int32Host>): System.IntPtr;
  subtract(pointer: System.IntPtr, offset: number | StrongNumeric<Int32Host>): System.IntPtr;
  parse(s: string): System.IntPtr;
  parse(s: string, style: EnumInput<System.Globalization.NumberStyles>): System.IntPtr;
  parse(s: string, provider: System.IFormatProvider | null): System.IntPtr;
  parse(
    s: string,
    style: EnumInput<System.Globalization.NumberStyles>,
    provider: System.IFormatProvider | null
  ): System.IntPtr;
  tryParse(s: string | null, result: HostVariableOut<System.IntPtr>): boolean;
  tryParse(
    s: string | null,
    provider: System.IFormatProvider | null,
    result: HostVariableOut<System.IntPtr>
  ): boolean;
  tryParse(
    s: string | null,
    style: EnumInput<System.Globalization.NumberStyles>,
    provider: System.IFormatProvider | null,
    result: HostVariableOut<System.IntPtr>
  ): boolean;
  divRem(
    left: System.IntPtr,
    right: System.IntPtr
  ): System.ValueTuple<System.IntPtr, System.IntPtr>;
  leadingZeroCount(value: System.IntPtr): System.IntPtr;
  popCount(value: System.IntPtr): System.IntPtr;
  rotateLeft(value: System.IntPtr, rotateAmount: number | StrongNumeric<Int32Host>): System.IntPtr;
  rotateRight(value: System.IntPtr, rotateAmount: number | StrongNumeric<Int32Host>): System.IntPtr;
  trailingZeroCount(value: System.IntPtr): System.IntPtr;
  isPow2(value: System.IntPtr): boolean;
  log2(value: System.IntPtr): System.IntPtr;
  clamp(value: System.IntPtr, min: System.IntPtr, max: System.IntPtr): System.IntPtr;
  copySign(value: System.IntPtr, sign: System.IntPtr): System.IntPtr;
  max(x: System.IntPtr, y: System.IntPtr): System.IntPtr;
  min(x: System.IntPtr, y: System.IntPtr): System.IntPtr;
  sign(value: System.IntPtr): number;
  abs(value: System.IntPtr): System.IntPtr;
  createChecked<TOther>(type1: HostType<TOther>, value: TOther): System.IntPtr;
  createSaturating<TOther>(type1: HostType<TOther>, value: TOther): System.IntPtr;
  createTruncating<TOther>(type1: HostType<TOther>, value: TOther): System.IntPtr;
  isEvenInteger(value: System.IntPtr): boolean;
  isNegative(value: System.IntPtr): boolean;
  isOddInteger(value: System.IntPtr): boolean;
  isPositive(value: System.IntPtr): boolean;
  maxMagnitude(x: System.IntPtr, y: System.IntPtr): System.IntPtr;
  minMagnitude(x: System.IntPtr, y: System.IntPtr): System.IntPtr;
}

export {};
