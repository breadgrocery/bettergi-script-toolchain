import type {
  ByteHost,
  ClrHostValue,
  DecimalHost,
  DoubleHost,
  EnumInput,
  HostArray,
  HostType,
  Int32Host,
  Int64Host,
  SingleHost,
  StrongNumeric,
  UInt32Host,
  UInt64Host,
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
import "./MidpointRounding";
import "./Numerics/IAdditionOperators";
import "./Numerics/IAdditiveIdentity";
import "./Numerics/IComparisonOperators";
import "./Numerics/IDecrementOperators";
import "./Numerics/IDivisionOperators";
import "./Numerics/IEqualityOperators";
import "./Numerics/IFloatingPoint";
import "./Numerics/IFloatingPointConstants";
import "./Numerics/IIncrementOperators";
import "./Numerics/IMinMaxValue";
import "./Numerics/IModulusOperators";
import "./Numerics/IMultiplicativeIdentity";
import "./Numerics/IMultiplyOperators";
import "./Numerics/INumber";
import "./Numerics/INumberBase";
import "./Numerics/ISignedNumber";
import "./Numerics/ISubtractionOperators";
import "./Numerics/IUnaryNegationOperators";
import "./Numerics/IUnaryPlusOperators";
import "./Runtime/Serialization/IDeserializationCallback";
import "./Runtime/Serialization/ISerializable";
import "./TypeCode";
import "./ValueType";

declare const decimalBrand: unique symbol;
export interface Decimal
  extends
    ClrHostValue,
    System.ISpanFormattableInput,
    System.IFormattableInput,
    System.IComparableInput,
    System.IConvertibleInput,
    System.IComparableInput<number>,
    System.IEquatableInput<number>,
    System.Runtime.Serialization.ISerializableInput,
    System.Runtime.Serialization.IDeserializationCallbackInput,
    System.Numerics.IFloatingPointInput<number>,
    System.Numerics.IFloatingPointConstantsInput<number>,
    System.Numerics.INumberBaseInput<number>,
    System.Numerics.IAdditionOperatorsInput<number, number, number>,
    System.Numerics.IAdditiveIdentityInput<number, number>,
    System.Numerics.IDecrementOperatorsInput<number>,
    System.Numerics.IDivisionOperatorsInput<number, number, number>,
    System.Numerics.IEqualityOperatorsInput<number, number, boolean>,
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
    System.Numerics.INumberInput<number>,
    System.Numerics.IComparisonOperatorsInput<number, number, boolean>,
    System.Numerics.IModulusOperatorsInput<number, number, number>,
    System.Numerics.ISignedNumberInput<number>,
    System.Numerics.IMinMaxValueInput<number> {
  readonly [decimalBrand]: true;
  compareTo(value: number | StrongNumeric<DecimalHost>): number;
  compareTo(value: unknown | null): number;
  equals(value: number | StrongNumeric<DecimalHost>): boolean;
  equals(value: unknown | null): boolean;
  getHashCode(): number;
  getTypeCode(): System.TypeCode;
  readonly scale: number;
  toString(): string;
  toString(format: string | null): string;
  toString(format: string | null, provider: System.IFormatProvider | null): string;
  toString(provider: System.IFormatProvider | null): string;
}

declare global {
  namespace System {
    type Decimal = import("./Decimal").Decimal;
  }
}

export interface DecimalHostType extends HostType<Decimal, ValueTypeTrait> {
  new (value: number | StrongNumeric<Int32Host>): Decimal;
  new (value: number | StrongNumeric<UInt32Host>): Decimal;
  new (value: number | StrongNumeric<Int64Host>): Decimal;
  new (value: number | StrongNumeric<UInt64Host>): Decimal;
  new (value: number | StrongNumeric<SingleHost>): Decimal;
  new (value: number | StrongNumeric<DoubleHost>): Decimal;
  new (bits: HostArray<number | StrongNumeric<Int32Host>>): Decimal;
  new (
    lo: number | StrongNumeric<Int32Host>,
    mid: number | StrongNumeric<Int32Host>,
    hi: number | StrongNumeric<Int32Host>,
    isNegative: boolean,
    scale: number | StrongNumeric<ByteHost>
  ): Decimal;
  readonly zero: number;
  readonly one: number;
  readonly minusOne: number;
  readonly maxValue: number;
  readonly minValue: number;
  fromOACurrency(cy: number | StrongNumeric<Int64Host>): number;
  toOACurrency(value: number | StrongNumeric<DecimalHost>): number;
  add(d1: number | StrongNumeric<DecimalHost>, d2: number | StrongNumeric<DecimalHost>): number;
  ceiling(d: number | StrongNumeric<DecimalHost>): number;
  compare(d1: number | StrongNumeric<DecimalHost>, d2: number | StrongNumeric<DecimalHost>): number;
  divide(d1: number | StrongNumeric<DecimalHost>, d2: number | StrongNumeric<DecimalHost>): number;
  equals(d1: number | StrongNumeric<DecimalHost>, d2: number | StrongNumeric<DecimalHost>): boolean;
  floor(d: number | StrongNumeric<DecimalHost>): number;
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
  getBits(d: number | StrongNumeric<DecimalHost>): HostArray<number>;
  remainder(
    d1: number | StrongNumeric<DecimalHost>,
    d2: number | StrongNumeric<DecimalHost>
  ): number;
  multiply(
    d1: number | StrongNumeric<DecimalHost>,
    d2: number | StrongNumeric<DecimalHost>
  ): number;
  negate(d: number | StrongNumeric<DecimalHost>): number;
  round(d: number | StrongNumeric<DecimalHost>): number;
  round(
    d: number | StrongNumeric<DecimalHost>,
    decimals: number | StrongNumeric<Int32Host>
  ): number;
  round(d: number | StrongNumeric<DecimalHost>, mode: EnumInput<System.MidpointRounding>): number;
  round(
    d: number | StrongNumeric<DecimalHost>,
    decimals: number | StrongNumeric<Int32Host>,
    mode: EnumInput<System.MidpointRounding>
  ): number;
  subtract(
    d1: number | StrongNumeric<DecimalHost>,
    d2: number | StrongNumeric<DecimalHost>
  ): number;
  toByte(value: number | StrongNumeric<DecimalHost>): number;
  toSByte(value: number | StrongNumeric<DecimalHost>): number;
  toInt16(value: number | StrongNumeric<DecimalHost>): number;
  toDouble(d: number | StrongNumeric<DecimalHost>): number;
  toInt32(d: number | StrongNumeric<DecimalHost>): number;
  toInt64(d: number | StrongNumeric<DecimalHost>): number;
  toUInt16(value: number | StrongNumeric<DecimalHost>): number;
  toUInt32(d: number | StrongNumeric<DecimalHost>): number;
  toUInt64(d: number | StrongNumeric<DecimalHost>): number;
  toSingle(d: number | StrongNumeric<DecimalHost>): number;
  truncate(d: number | StrongNumeric<DecimalHost>): number;
  clamp(
    value: number | StrongNumeric<DecimalHost>,
    min: number | StrongNumeric<DecimalHost>,
    max: number | StrongNumeric<DecimalHost>
  ): number;
  copySign(
    value: number | StrongNumeric<DecimalHost>,
    sign: number | StrongNumeric<DecimalHost>
  ): number;
  max(x: number | StrongNumeric<DecimalHost>, y: number | StrongNumeric<DecimalHost>): number;
  min(x: number | StrongNumeric<DecimalHost>, y: number | StrongNumeric<DecimalHost>): number;
  sign(d: number | StrongNumeric<DecimalHost>): number;
  abs(value: number | StrongNumeric<DecimalHost>): number;
  createChecked<TOther>(type1: HostType<TOther>, value: TOther): number;
  createSaturating<TOther>(type1: HostType<TOther>, value: TOther): number;
  createTruncating<TOther>(type1: HostType<TOther>, value: TOther): number;
  isCanonical(value: number | StrongNumeric<DecimalHost>): boolean;
  isEvenInteger(value: number | StrongNumeric<DecimalHost>): boolean;
  isInteger(value: number | StrongNumeric<DecimalHost>): boolean;
  isNegative(value: number | StrongNumeric<DecimalHost>): boolean;
  isOddInteger(value: number | StrongNumeric<DecimalHost>): boolean;
  isPositive(value: number | StrongNumeric<DecimalHost>): boolean;
  maxMagnitude(
    x: number | StrongNumeric<DecimalHost>,
    y: number | StrongNumeric<DecimalHost>
  ): number;
  minMagnitude(
    x: number | StrongNumeric<DecimalHost>,
    y: number | StrongNumeric<DecimalHost>
  ): number;
  tryParse(
    s: string | null,
    provider: System.IFormatProvider | null,
    result: HostVariableOut<number>
  ): boolean;
}

export {};
