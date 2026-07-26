import type {
  ClrHostValue,
  DoubleHost,
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
import "./MidpointRounding";
import "./Numerics/IAdditionOperators";
import "./Numerics/IAdditiveIdentity";
import "./Numerics/IBinaryFloatingPointIeee754";
import "./Numerics/IBinaryNumber";
import "./Numerics/IBitwiseOperators";
import "./Numerics/IComparisonOperators";
import "./Numerics/IDecrementOperators";
import "./Numerics/IDivisionOperators";
import "./Numerics/IEqualityOperators";
import "./Numerics/IExponentialFunctions";
import "./Numerics/IFloatingPoint";
import "./Numerics/IFloatingPointConstants";
import "./Numerics/IFloatingPointIeee754";
import "./Numerics/IHyperbolicFunctions";
import "./Numerics/IIncrementOperators";
import "./Numerics/ILogarithmicFunctions";
import "./Numerics/IMinMaxValue";
import "./Numerics/IModulusOperators";
import "./Numerics/IMultiplicativeIdentity";
import "./Numerics/IMultiplyOperators";
import "./Numerics/INumber";
import "./Numerics/INumberBase";
import "./Numerics/IPowerFunctions";
import "./Numerics/IRootFunctions";
import "./Numerics/ISignedNumber";
import "./Numerics/ISubtractionOperators";
import "./Numerics/ITrigonometricFunctions";
import "./Numerics/IUnaryNegationOperators";
import "./Numerics/IUnaryPlusOperators";
import "./TypeCode";
import "./ValueTuple";
import "./ValueType";

declare const doubleBrand: unique symbol;
export interface Double
  extends
    ClrHostValue,
    System.IComparableInput,
    System.IConvertibleInput,
    System.ISpanFormattableInput,
    System.IFormattableInput,
    System.IComparableInput<number>,
    System.IEquatableInput<number>,
    System.Numerics.IBinaryFloatingPointIeee754Input<number>,
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
    System.Numerics.IFloatingPointIeee754Input<number>,
    System.Numerics.IExponentialFunctionsInput<number>,
    System.Numerics.IFloatingPointConstantsInput<number>,
    System.Numerics.IFloatingPointInput<number>,
    System.Numerics.ISignedNumberInput<number>,
    System.Numerics.IHyperbolicFunctionsInput<number>,
    System.Numerics.ILogarithmicFunctionsInput<number>,
    System.Numerics.IPowerFunctionsInput<number>,
    System.Numerics.IRootFunctionsInput<number>,
    System.Numerics.ITrigonometricFunctionsInput<number>,
    System.Numerics.IMinMaxValueInput<number> {
  readonly [doubleBrand]: true;
  compareTo(value: number | StrongNumeric<DoubleHost>): number;
  compareTo(value: unknown | null): number;
  equals(obj: number | StrongNumeric<DoubleHost>): boolean;
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
    type Double = import("./Double").Double;
  }
}

export interface DoubleHostType extends HostType<Double, ValueTypeTrait> {
  readonly minValue: number;
  readonly maxValue: number;
  readonly epsilon: number;
  readonly negativeInfinity: number;
  readonly positiveInfinity: number;
  readonly naN: number;
  readonly negativeZero: number;
  readonly e: number;
  readonly pi: number;
  readonly tau: number;
  isFinite(d: number | StrongNumeric<DoubleHost>): boolean;
  isInfinity(d: number | StrongNumeric<DoubleHost>): boolean;
  isNaN(d: number | StrongNumeric<DoubleHost>): boolean;
  isNegative(d: number | StrongNumeric<DoubleHost>): boolean;
  isNegativeInfinity(d: number | StrongNumeric<DoubleHost>): boolean;
  isNormal(d: number | StrongNumeric<DoubleHost>): boolean;
  isPositiveInfinity(d: number | StrongNumeric<DoubleHost>): boolean;
  isSubnormal(d: number | StrongNumeric<DoubleHost>): boolean;
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
  isPow2(value: number | StrongNumeric<DoubleHost>): boolean;
  log2(value: number | StrongNumeric<DoubleHost>): number;
  exp(x: number | StrongNumeric<DoubleHost>): number;
  expM1(x: number | StrongNumeric<DoubleHost>): number;
  exp2(x: number | StrongNumeric<DoubleHost>): number;
  exp2M1(x: number | StrongNumeric<DoubleHost>): number;
  exp10(x: number | StrongNumeric<DoubleHost>): number;
  exp10M1(x: number | StrongNumeric<DoubleHost>): number;
  ceiling(x: number | StrongNumeric<DoubleHost>): number;
  floor(x: number | StrongNumeric<DoubleHost>): number;
  round(x: number | StrongNumeric<DoubleHost>): number;
  round(x: number | StrongNumeric<DoubleHost>, digits: number | StrongNumeric<Int32Host>): number;
  round(x: number | StrongNumeric<DoubleHost>, mode: EnumInput<System.MidpointRounding>): number;
  round(
    x: number | StrongNumeric<DoubleHost>,
    digits: number | StrongNumeric<Int32Host>,
    mode: EnumInput<System.MidpointRounding>
  ): number;
  truncate(x: number | StrongNumeric<DoubleHost>): number;
  atan2(y: number | StrongNumeric<DoubleHost>, x: number | StrongNumeric<DoubleHost>): number;
  atan2Pi(y: number | StrongNumeric<DoubleHost>, x: number | StrongNumeric<DoubleHost>): number;
  bitDecrement(x: number | StrongNumeric<DoubleHost>): number;
  bitIncrement(x: number | StrongNumeric<DoubleHost>): number;
  fusedMultiplyAdd(
    left: number | StrongNumeric<DoubleHost>,
    right: number | StrongNumeric<DoubleHost>,
    addend: number | StrongNumeric<DoubleHost>
  ): number;
  ieee754Remainder(
    left: number | StrongNumeric<DoubleHost>,
    right: number | StrongNumeric<DoubleHost>
  ): number;
  iLogB(x: number | StrongNumeric<DoubleHost>): number;
  lerp(
    value1: number | StrongNumeric<DoubleHost>,
    value2: number | StrongNumeric<DoubleHost>,
    amount: number | StrongNumeric<DoubleHost>
  ): number;
  reciprocalEstimate(x: number | StrongNumeric<DoubleHost>): number;
  reciprocalSqrtEstimate(x: number | StrongNumeric<DoubleHost>): number;
  scaleB(x: number | StrongNumeric<DoubleHost>, n: number | StrongNumeric<Int32Host>): number;
  acosh(x: number | StrongNumeric<DoubleHost>): number;
  asinh(x: number | StrongNumeric<DoubleHost>): number;
  atanh(x: number | StrongNumeric<DoubleHost>): number;
  cosh(x: number | StrongNumeric<DoubleHost>): number;
  sinh(x: number | StrongNumeric<DoubleHost>): number;
  tanh(x: number | StrongNumeric<DoubleHost>): number;
  log(x: number | StrongNumeric<DoubleHost>): number;
  log(x: number | StrongNumeric<DoubleHost>, newBase: number | StrongNumeric<DoubleHost>): number;
  logP1(x: number | StrongNumeric<DoubleHost>): number;
  log2P1(x: number | StrongNumeric<DoubleHost>): number;
  log10(x: number | StrongNumeric<DoubleHost>): number;
  log10P1(x: number | StrongNumeric<DoubleHost>): number;
  clamp(
    value: number | StrongNumeric<DoubleHost>,
    min: number | StrongNumeric<DoubleHost>,
    max: number | StrongNumeric<DoubleHost>
  ): number;
  copySign(
    value: number | StrongNumeric<DoubleHost>,
    sign: number | StrongNumeric<DoubleHost>
  ): number;
  max(x: number | StrongNumeric<DoubleHost>, y: number | StrongNumeric<DoubleHost>): number;
  maxNumber(x: number | StrongNumeric<DoubleHost>, y: number | StrongNumeric<DoubleHost>): number;
  min(x: number | StrongNumeric<DoubleHost>, y: number | StrongNumeric<DoubleHost>): number;
  minNumber(x: number | StrongNumeric<DoubleHost>, y: number | StrongNumeric<DoubleHost>): number;
  sign(value: number | StrongNumeric<DoubleHost>): number;
  abs(value: number | StrongNumeric<DoubleHost>): number;
  createChecked<TOther>(type1: HostType<TOther>, value: TOther): number;
  createSaturating<TOther>(type1: HostType<TOther>, value: TOther): number;
  createTruncating<TOther>(type1: HostType<TOther>, value: TOther): number;
  isEvenInteger(value: number | StrongNumeric<DoubleHost>): boolean;
  isInteger(value: number | StrongNumeric<DoubleHost>): boolean;
  isOddInteger(value: number | StrongNumeric<DoubleHost>): boolean;
  isPositive(value: number | StrongNumeric<DoubleHost>): boolean;
  isRealNumber(value: number | StrongNumeric<DoubleHost>): boolean;
  maxMagnitude(
    x: number | StrongNumeric<DoubleHost>,
    y: number | StrongNumeric<DoubleHost>
  ): number;
  maxMagnitudeNumber(
    x: number | StrongNumeric<DoubleHost>,
    y: number | StrongNumeric<DoubleHost>
  ): number;
  minMagnitude(
    x: number | StrongNumeric<DoubleHost>,
    y: number | StrongNumeric<DoubleHost>
  ): number;
  minMagnitudeNumber(
    x: number | StrongNumeric<DoubleHost>,
    y: number | StrongNumeric<DoubleHost>
  ): number;
  tryParse(
    s: string | null,
    provider: System.IFormatProvider | null,
    result: HostVariableOut<number>
  ): boolean;
  pow(x: number | StrongNumeric<DoubleHost>, y: number | StrongNumeric<DoubleHost>): number;
  cbrt(x: number | StrongNumeric<DoubleHost>): number;
  hypot(x: number | StrongNumeric<DoubleHost>, y: number | StrongNumeric<DoubleHost>): number;
  rootN(x: number | StrongNumeric<DoubleHost>, n: number | StrongNumeric<Int32Host>): number;
  sqrt(x: number | StrongNumeric<DoubleHost>): number;
  acos(x: number | StrongNumeric<DoubleHost>): number;
  acosPi(x: number | StrongNumeric<DoubleHost>): number;
  asin(x: number | StrongNumeric<DoubleHost>): number;
  asinPi(x: number | StrongNumeric<DoubleHost>): number;
  atan(x: number | StrongNumeric<DoubleHost>): number;
  atanPi(x: number | StrongNumeric<DoubleHost>): number;
  cos(x: number | StrongNumeric<DoubleHost>): number;
  cosPi(x: number | StrongNumeric<DoubleHost>): number;
  degreesToRadians(degrees: number | StrongNumeric<DoubleHost>): number;
  radiansToDegrees(radians: number | StrongNumeric<DoubleHost>): number;
  sin(x: number | StrongNumeric<DoubleHost>): number;
  sinCos(x: number | StrongNumeric<DoubleHost>): System.ValueTuple<number, number>;
  sinCosPi(x: number | StrongNumeric<DoubleHost>): System.ValueTuple<number, number>;
  sinPi(x: number | StrongNumeric<DoubleHost>): number;
  tan(x: number | StrongNumeric<DoubleHost>): number;
  tanPi(x: number | StrongNumeric<DoubleHost>): number;
}

export {};
