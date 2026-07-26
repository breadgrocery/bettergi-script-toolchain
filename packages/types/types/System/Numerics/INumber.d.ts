import type {
  FamilyArgumentOmitted,
  HostType,
  InterfaceTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import "../IComparable";
import "../IEquatable";
import "../IFormattable";
import "../IParsable";
import "../ISpanFormattable";
import "../ISpanParsable";
import "../IUtf8SpanFormattable";
import "../IUtf8SpanParsable";
import "./IAdditionOperators";
import "./IAdditiveIdentity";
import "./IComparisonOperators";
import "./IDecrementOperators";
import "./IDivisionOperators";
import "./IEqualityOperators";
import "./IIncrementOperators";
import "./IModulusOperators";
import "./IMultiplicativeIdentity";
import "./IMultiplyOperators";
import "./INumberBase";
import "./ISubtractionOperators";
import "./IUnaryNegationOperators";
import "./IUnaryPlusOperators";

declare const iNumberArity1InputBrand: unique symbol;
export interface _INumberArity1Input<TSelf> {
  readonly [iNumberArity1InputBrand]: true;
}

export interface _INumberArity1<TSelf>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_INumberArity1Input<TSelf>>,
    _INumberArity1Input<TSelf> {}

export interface _INumberArity1HostType<TSelf> extends HostType<
  _INumberArity1<TSelf>,
  InterfaceTypeTrait
> {
  clamp(value: TSelf, min: TSelf, max: TSelf): TSelf;
  copySign(value: TSelf, sign: TSelf): TSelf;
  max(x: TSelf, y: TSelf): TSelf;
  maxNumber(x: TSelf, y: TSelf): TSelf;
  min(x: TSelf, y: TSelf): TSelf;
  minNumber(x: TSelf, y: TSelf): TSelf;
  sign(value: TSelf): number;
}

export type INumberFamily<T1 = FamilyArgumentOmitted> = _INumberArity1<T1>;

declare global {
  namespace System.Numerics {
    type INumber<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./INumber").INumberFamily<T1>;
  }
}

export type INumberInputFamily<T1 = FamilyArgumentOmitted> = _INumberArity1Input<T1>;
export type INumberInput<T1> = _INumberArity1Input<T1>;

declare global {
  namespace System.Numerics {
    type INumberInput<T1> = import("./INumber").INumberInput<T1>;
  }
}

export type INumberHostType<T1> = _INumberArity1HostType<T1>;

export {};
