import type {
  EnumInput,
  FamilyArgumentOmitted,
  HostType,
  InterfaceTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../../Microsoft/ClearScript/HostVariable";
import "../Globalization/NumberStyles";
import "../IEquatable";
import "../IFormatProvider";
import "../IFormattable";
import "../IParsable";
import "../ISpanFormattable";
import "../ISpanParsable";
import "../IUtf8SpanFormattable";
import "../IUtf8SpanParsable";
import "./IAdditionOperators";
import "./IAdditiveIdentity";
import "./IDecrementOperators";
import "./IDivisionOperators";
import "./IEqualityOperators";
import "./IIncrementOperators";
import "./IMultiplicativeIdentity";
import "./IMultiplyOperators";
import "./ISubtractionOperators";
import "./IUnaryNegationOperators";
import "./IUnaryPlusOperators";

declare const iNumberBaseArity1InputBrand: unique symbol;
export interface _INumberBaseArity1Input<TSelf> {
  readonly [iNumberBaseArity1InputBrand]: true;
}

export interface _INumberBaseArity1<TSelf>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_INumberBaseArity1Input<TSelf>>,
    _INumberBaseArity1Input<TSelf> {}

export interface _INumberBaseArity1HostType<TSelf> extends HostType<
  _INumberBaseArity1<TSelf>,
  InterfaceTypeTrait
> {
  readonly one: TSelf;
  readonly radix: number;
  readonly zero: TSelf;
  abs(value: TSelf): TSelf;
  createChecked<TOther>(type1: HostType<TOther>, value: TOther): TSelf;
  createSaturating<TOther>(type1: HostType<TOther>, value: TOther): TSelf;
  createTruncating<TOther>(type1: HostType<TOther>, value: TOther): TSelf;
  isCanonical(value: TSelf): boolean;
  isComplexNumber(value: TSelf): boolean;
  isEvenInteger(value: TSelf): boolean;
  isFinite(value: TSelf): boolean;
  isImaginaryNumber(value: TSelf): boolean;
  isInfinity(value: TSelf): boolean;
  isInteger(value: TSelf): boolean;
  isNaN(value: TSelf): boolean;
  isNegative(value: TSelf): boolean;
  isNegativeInfinity(value: TSelf): boolean;
  isNormal(value: TSelf): boolean;
  isOddInteger(value: TSelf): boolean;
  isPositive(value: TSelf): boolean;
  isPositiveInfinity(value: TSelf): boolean;
  isRealNumber(value: TSelf): boolean;
  isSubnormal(value: TSelf): boolean;
  isZero(value: TSelf): boolean;
  maxMagnitude(x: TSelf, y: TSelf): TSelf;
  maxMagnitudeNumber(x: TSelf, y: TSelf): TSelf;
  minMagnitude(x: TSelf, y: TSelf): TSelf;
  minMagnitudeNumber(x: TSelf, y: TSelf): TSelf;
  parse(
    s: string,
    style: EnumInput<System.Globalization.NumberStyles>,
    provider: System.IFormatProvider | null
  ): TSelf;
  tryParse(
    s: string | null,
    style: EnumInput<System.Globalization.NumberStyles>,
    provider: System.IFormatProvider | null,
    result: HostVariableOut<TSelf>
  ): boolean;
}

export type INumberBaseFamily<T1 = FamilyArgumentOmitted> = _INumberBaseArity1<T1>;

declare global {
  namespace System.Numerics {
    type INumberBase<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./INumberBase").INumberBaseFamily<T1>;
  }
}

export type INumberBaseInputFamily<T1 = FamilyArgumentOmitted> = _INumberBaseArity1Input<T1>;
export type INumberBaseInput<T1> = _INumberBaseArity1Input<T1>;

declare global {
  namespace System.Numerics {
    type INumberBaseInput<T1> = import("./INumberBase").INumberBaseInput<T1>;
  }
}

export type INumberBaseHostType<T1> = _INumberBaseArity1HostType<T1>;

export {};
