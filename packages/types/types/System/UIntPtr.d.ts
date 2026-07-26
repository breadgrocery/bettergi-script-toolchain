import type {
  ClrHostValue,
  EnumInput,
  HostType,
  Int32Host,
  StrongNumeric,
  UInt32Host,
  UInt64Host,
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
import "./Numerics/ISubtractionOperators";
import "./Numerics/IUnaryNegationOperators";
import "./Numerics/IUnaryPlusOperators";
import "./Numerics/IUnsignedNumber";
import "./Runtime/Serialization/ISerializable";
import "./ValueTuple";
import "./ValueType";

declare const uIntPtrBrand: unique symbol;
export interface UIntPtr
  extends
    ClrHostValue,
    System.IComparableInput,
    System.ISpanFormattableInput,
    System.IFormattableInput,
    System.Runtime.Serialization.ISerializableInput,
    System.IUtf8SpanFormattableInput {
  readonly [uIntPtrBrand]: true;
  compareTo(value: System.UIntPtr): number;
  compareTo(value: unknown | null): number;
  equals(obj: unknown | null): boolean;
  equals(other: System.UIntPtr): boolean;
  getHashCode(): number;
  toString(): string;
  toString(format: string | null): string;
  toString(format: string | null, provider: System.IFormatProvider | null): string;
  toString(provider: System.IFormatProvider | null): string;
  toUInt32(): number;
  toUInt64(): number;
}

declare global {
  namespace System {
    type UIntPtr = import("./UIntPtr").UIntPtr;
  }
}

export interface UIntPtrHostType extends HostType<UIntPtr, ValueTypeTrait> {
  new (value: number | StrongNumeric<UInt32Host>): UIntPtr;
  new (value: number | StrongNumeric<UInt64Host>): UIntPtr;
  readonly zero: System.UIntPtr;
  readonly size: number;
  readonly maxValue: System.UIntPtr;
  readonly minValue: System.UIntPtr;
  add(pointer: System.UIntPtr, offset: number | StrongNumeric<Int32Host>): System.UIntPtr;
  subtract(pointer: System.UIntPtr, offset: number | StrongNumeric<Int32Host>): System.UIntPtr;
  parse(s: string): System.UIntPtr;
  parse(s: string, style: EnumInput<System.Globalization.NumberStyles>): System.UIntPtr;
  parse(s: string, provider: System.IFormatProvider | null): System.UIntPtr;
  parse(
    s: string,
    style: EnumInput<System.Globalization.NumberStyles>,
    provider: System.IFormatProvider | null
  ): System.UIntPtr;
  tryParse(s: string | null, result: HostVariableOut<System.UIntPtr>): boolean;
  tryParse(
    s: string | null,
    style: EnumInput<System.Globalization.NumberStyles>,
    provider: System.IFormatProvider | null,
    result: HostVariableOut<System.UIntPtr>
  ): boolean;
  tryParse(
    s: string | null,
    provider: System.IFormatProvider | null,
    result: HostVariableOut<System.UIntPtr>
  ): boolean;
  divRem(
    left: System.UIntPtr,
    right: System.UIntPtr
  ): System.ValueTuple<System.UIntPtr, System.UIntPtr>;
  leadingZeroCount(value: System.UIntPtr): System.UIntPtr;
  popCount(value: System.UIntPtr): System.UIntPtr;
  rotateLeft(
    value: System.UIntPtr,
    rotateAmount: number | StrongNumeric<Int32Host>
  ): System.UIntPtr;
  rotateRight(
    value: System.UIntPtr,
    rotateAmount: number | StrongNumeric<Int32Host>
  ): System.UIntPtr;
  trailingZeroCount(value: System.UIntPtr): System.UIntPtr;
  isPow2(value: System.UIntPtr): boolean;
  log2(value: System.UIntPtr): System.UIntPtr;
  clamp(value: System.UIntPtr, min: System.UIntPtr, max: System.UIntPtr): System.UIntPtr;
  max(x: System.UIntPtr, y: System.UIntPtr): System.UIntPtr;
  min(x: System.UIntPtr, y: System.UIntPtr): System.UIntPtr;
  sign(value: System.UIntPtr): number;
  createChecked<TOther>(type1: HostType<TOther>, value: TOther): System.UIntPtr;
  createSaturating<TOther>(type1: HostType<TOther>, value: TOther): System.UIntPtr;
  createTruncating<TOther>(type1: HostType<TOther>, value: TOther): System.UIntPtr;
  isEvenInteger(value: System.UIntPtr): boolean;
  isOddInteger(value: System.UIntPtr): boolean;
}

export {};
