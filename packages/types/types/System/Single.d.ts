import type {
  ClrHostValue,
  EnumInput,
  HostType,
  Int32Host,
  SingleHost,
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

declare const singleBrand: unique symbol;
export interface Single
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
  readonly [singleBrand]: true;
  compareTo(value: number | StrongNumeric<SingleHost>): number;
  compareTo(value: unknown | null): number;
  equals(obj: number | StrongNumeric<SingleHost>): boolean;
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
    type Single = import("./Single").Single;
  }
}

export interface SingleHostType extends HostType<Single, ValueTypeTrait> {
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
  isFinite(f: number | StrongNumeric<SingleHost>): boolean;
  isInfinity(f: number | StrongNumeric<SingleHost>): boolean;
  isNaN(f: number | StrongNumeric<SingleHost>): boolean;
  isNegative(f: number | StrongNumeric<SingleHost>): boolean;
  isNegativeInfinity(f: number | StrongNumeric<SingleHost>): boolean;
  isNormal(f: number | StrongNumeric<SingleHost>): boolean;
  isPositiveInfinity(f: number | StrongNumeric<SingleHost>): boolean;
  isSubnormal(f: number | StrongNumeric<SingleHost>): boolean;
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
  isPow2(value: number | StrongNumeric<SingleHost>): boolean;
  log2(value: number | StrongNumeric<SingleHost>): number;
  exp(x: number | StrongNumeric<SingleHost>): number;
  expM1(x: number | StrongNumeric<SingleHost>): number;
  exp2(x: number | StrongNumeric<SingleHost>): number;
  exp2M1(x: number | StrongNumeric<SingleHost>): number;
  exp10(x: number | StrongNumeric<SingleHost>): number;
  exp10M1(x: number | StrongNumeric<SingleHost>): number;
  ceiling(x: number | StrongNumeric<SingleHost>): number;
  floor(x: number | StrongNumeric<SingleHost>): number;
  round(x: number | StrongNumeric<SingleHost>): number;
  round(x: number | StrongNumeric<SingleHost>, digits: number | StrongNumeric<Int32Host>): number;
  round(x: number | StrongNumeric<SingleHost>, mode: EnumInput<System.MidpointRounding>): number;
  round(
    x: number | StrongNumeric<SingleHost>,
    digits: number | StrongNumeric<Int32Host>,
    mode: EnumInput<System.MidpointRounding>
  ): number;
  truncate(x: number | StrongNumeric<SingleHost>): number;
  atan2(y: number | StrongNumeric<SingleHost>, x: number | StrongNumeric<SingleHost>): number;
  atan2Pi(y: number | StrongNumeric<SingleHost>, x: number | StrongNumeric<SingleHost>): number;
  bitDecrement(x: number | StrongNumeric<SingleHost>): number;
  bitIncrement(x: number | StrongNumeric<SingleHost>): number;
  fusedMultiplyAdd(
    left: number | StrongNumeric<SingleHost>,
    right: number | StrongNumeric<SingleHost>,
    addend: number | StrongNumeric<SingleHost>
  ): number;
  ieee754Remainder(
    left: number | StrongNumeric<SingleHost>,
    right: number | StrongNumeric<SingleHost>
  ): number;
  iLogB(x: number | StrongNumeric<SingleHost>): number;
  lerp(
    value1: number | StrongNumeric<SingleHost>,
    value2: number | StrongNumeric<SingleHost>,
    amount: number | StrongNumeric<SingleHost>
  ): number;
  reciprocalEstimate(x: number | StrongNumeric<SingleHost>): number;
  reciprocalSqrtEstimate(x: number | StrongNumeric<SingleHost>): number;
  scaleB(x: number | StrongNumeric<SingleHost>, n: number | StrongNumeric<Int32Host>): number;
  acosh(x: number | StrongNumeric<SingleHost>): number;
  asinh(x: number | StrongNumeric<SingleHost>): number;
  atanh(x: number | StrongNumeric<SingleHost>): number;
  cosh(x: number | StrongNumeric<SingleHost>): number;
  sinh(x: number | StrongNumeric<SingleHost>): number;
  tanh(x: number | StrongNumeric<SingleHost>): number;
  log(x: number | StrongNumeric<SingleHost>): number;
  log(x: number | StrongNumeric<SingleHost>, newBase: number | StrongNumeric<SingleHost>): number;
  logP1(x: number | StrongNumeric<SingleHost>): number;
  log10(x: number | StrongNumeric<SingleHost>): number;
  log2P1(x: number | StrongNumeric<SingleHost>): number;
  log10P1(x: number | StrongNumeric<SingleHost>): number;
  clamp(
    value: number | StrongNumeric<SingleHost>,
    min: number | StrongNumeric<SingleHost>,
    max: number | StrongNumeric<SingleHost>
  ): number;
  copySign(
    value: number | StrongNumeric<SingleHost>,
    sign: number | StrongNumeric<SingleHost>
  ): number;
  max(x: number | StrongNumeric<SingleHost>, y: number | StrongNumeric<SingleHost>): number;
  maxNumber(x: number | StrongNumeric<SingleHost>, y: number | StrongNumeric<SingleHost>): number;
  min(x: number | StrongNumeric<SingleHost>, y: number | StrongNumeric<SingleHost>): number;
  minNumber(x: number | StrongNumeric<SingleHost>, y: number | StrongNumeric<SingleHost>): number;
  sign(value: number | StrongNumeric<SingleHost>): number;
  abs(value: number | StrongNumeric<SingleHost>): number;
  createChecked<TOther>(type1: HostType<TOther>, value: TOther): number;
  createSaturating<TOther>(type1: HostType<TOther>, value: TOther): number;
  createTruncating<TOther>(type1: HostType<TOther>, value: TOther): number;
  isEvenInteger(value: number | StrongNumeric<SingleHost>): boolean;
  isInteger(value: number | StrongNumeric<SingleHost>): boolean;
  isOddInteger(value: number | StrongNumeric<SingleHost>): boolean;
  isPositive(value: number | StrongNumeric<SingleHost>): boolean;
  isRealNumber(value: number | StrongNumeric<SingleHost>): boolean;
  maxMagnitude(
    x: number | StrongNumeric<SingleHost>,
    y: number | StrongNumeric<SingleHost>
  ): number;
  maxMagnitudeNumber(
    x: number | StrongNumeric<SingleHost>,
    y: number | StrongNumeric<SingleHost>
  ): number;
  minMagnitude(
    x: number | StrongNumeric<SingleHost>,
    y: number | StrongNumeric<SingleHost>
  ): number;
  minMagnitudeNumber(
    x: number | StrongNumeric<SingleHost>,
    y: number | StrongNumeric<SingleHost>
  ): number;
  tryParse(
    s: string | null,
    provider: System.IFormatProvider | null,
    result: HostVariableOut<number>
  ): boolean;
  pow(x: number | StrongNumeric<SingleHost>, y: number | StrongNumeric<SingleHost>): number;
  cbrt(x: number | StrongNumeric<SingleHost>): number;
  hypot(x: number | StrongNumeric<SingleHost>, y: number | StrongNumeric<SingleHost>): number;
  rootN(x: number | StrongNumeric<SingleHost>, n: number | StrongNumeric<Int32Host>): number;
  sqrt(x: number | StrongNumeric<SingleHost>): number;
  acos(x: number | StrongNumeric<SingleHost>): number;
  acosPi(x: number | StrongNumeric<SingleHost>): number;
  asin(x: number | StrongNumeric<SingleHost>): number;
  asinPi(x: number | StrongNumeric<SingleHost>): number;
  atan(x: number | StrongNumeric<SingleHost>): number;
  atanPi(x: number | StrongNumeric<SingleHost>): number;
  cos(x: number | StrongNumeric<SingleHost>): number;
  cosPi(x: number | StrongNumeric<SingleHost>): number;
  degreesToRadians(degrees: number | StrongNumeric<SingleHost>): number;
  radiansToDegrees(radians: number | StrongNumeric<SingleHost>): number;
  sin(x: number | StrongNumeric<SingleHost>): number;
  sinCos(x: number | StrongNumeric<SingleHost>): System.ValueTuple<number, number>;
  sinCosPi(x: number | StrongNumeric<SingleHost>): System.ValueTuple<number, number>;
  sinPi(x: number | StrongNumeric<SingleHost>): number;
  tan(x: number | StrongNumeric<SingleHost>): number;
  tanPi(x: number | StrongNumeric<SingleHost>): number;
}

export {};
