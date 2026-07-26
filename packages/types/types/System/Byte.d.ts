import type {
  ByteHost,
  ClrHostValue,
  EnumInput,
  HostType,
  Int32Host,
  StrongNumeric,
  ValueTypeTrait
} from "../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../Microsoft/ClearScript/HostVariable";
import "./Globalization/NumberStyles";
import "./IComparable";
import "./IConvertible";
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
import "./TypeCode";
import "./ValueTuple";
import "./ValueType";

declare const byteBrand: unique symbol;
export interface Byte
  extends
    ClrHostValue,
    System.IComparableInput,
    System.IConvertibleInput,
    System.ISpanFormattableInput,
    System.IFormattableInput,
    System.IComparableInput<number>,
    System.IEquatableInput<number>,
    System.Numerics.IBinaryIntegerInput<number>,
    System.Numerics.IBinaryNumberInput<number>,
    System.Numerics.IBitwiseOperatorsInput<number, number, number>,
    System.Numerics.INumberInput<number>,
    System.Numerics.IComparisonOperatorsInput<number, number, boolean>,
    System.Numerics.IEqualityOperatorsInput<number, number, boolean>,
    System.Numerics.IModulusOperatorsInput<number, number, number>,
    System.Numerics.INumberBaseInput<number>,
    System.Numerics.IAdditionOperatorsInput<number, number, number>,
    System.Numerics.IAdditiveIdentityInput<number, number>,
    System.Numerics.IDecrementOperatorsInput<number>,
    System.Numerics.IDivisionOperatorsInput<number, number, number>,
    System.Numerics.IIncrementOperatorsInput<number>,
    System.Numerics.IMultiplicativeIdentityInput<number, number>,
    System.Numerics.IMultiplyOperatorsInput<number, number, number>,
    System.ISpanParsableInput<number>,
    System.IParsableInput<number>,
    System.Numerics.ISubtractionOperatorsInput<number, number, number>,
    System.Numerics.IUnaryPlusOperatorsInput<number, number>,
    System.Numerics.IUnaryNegationOperatorsInput<number, number>,
    System.IUtf8SpanFormattableInput,
    System.IUtf8SpanParsableInput<number>,
    System.Numerics.IShiftOperatorsInput<number, number, number>,
    System.Numerics.IMinMaxValueInput<number>,
    System.Numerics.IUnsignedNumberInput<number> {
  readonly [byteBrand]: true;
  compareTo(value: number | StrongNumeric<ByteHost>): number;
  compareTo(value: unknown | null): number;
  equals(obj: number | StrongNumeric<ByteHost>): boolean;
  equals(obj: unknown | null): boolean;
  getHashCode(): number;
  getTypeCode(): System.TypeCode;
  toString(): string;
  toString(format: string | null): string;
  toString(format: string | null, provider: System.IFormatProvider | null): string;
  toString(provider: System.IFormatProvider | null): string;
}

declare global {
  namespace System {
    type Byte = import("./Byte").Byte;
  }
}

export interface ByteHostType extends HostType<Byte, ValueTypeTrait> {
  readonly maxValue: number;
  readonly minValue: number;
  parse(s: string): number;
  parse(s: string, style: EnumInput<System.Globalization.NumberStyles>): number;
  parse(s: string, provider: System.IFormatProvider | null): number;
  parse(
    s: string,
    style: EnumInput<System.Globalization.NumberStyles>,
    provider: System.IFormatProvider | null
  ): number;
  tryParse(s: string | null, result: HostVariableOut<number>): boolean;
  tryParse(
    s: string | null,
    style: EnumInput<System.Globalization.NumberStyles>,
    provider: System.IFormatProvider | null,
    result: HostVariableOut<number>
  ): boolean;
  divRem(
    left: number | StrongNumeric<ByteHost>,
    right: number | StrongNumeric<ByteHost>
  ): System.ValueTuple<number, number>;
  leadingZeroCount(value: number | StrongNumeric<ByteHost>): number;
  popCount(value: number | StrongNumeric<ByteHost>): number;
  rotateLeft(
    value: number | StrongNumeric<ByteHost>,
    rotateAmount: number | StrongNumeric<Int32Host>
  ): number;
  rotateRight(
    value: number | StrongNumeric<ByteHost>,
    rotateAmount: number | StrongNumeric<Int32Host>
  ): number;
  trailingZeroCount(value: number | StrongNumeric<ByteHost>): number;
  isPow2(value: number | StrongNumeric<ByteHost>): boolean;
  log2(value: number | StrongNumeric<ByteHost>): number;
  clamp(
    value: number | StrongNumeric<ByteHost>,
    min: number | StrongNumeric<ByteHost>,
    max: number | StrongNumeric<ByteHost>
  ): number;
  max(x: number | StrongNumeric<ByteHost>, y: number | StrongNumeric<ByteHost>): number;
  min(x: number | StrongNumeric<ByteHost>, y: number | StrongNumeric<ByteHost>): number;
  sign(value: number | StrongNumeric<ByteHost>): number;
  createChecked<TOther>(type1: HostType<TOther>, value: TOther): number;
  createSaturating<TOther>(type1: HostType<TOther>, value: TOther): number;
  createTruncating<TOther>(type1: HostType<TOther>, value: TOther): number;
  isEvenInteger(value: number | StrongNumeric<ByteHost>): boolean;
  isOddInteger(value: number | StrongNumeric<ByteHost>): boolean;
  tryParse(
    s: string | null,
    provider: System.IFormatProvider | null,
    result: HostVariableOut<number>
  ): boolean;
}

export {};
