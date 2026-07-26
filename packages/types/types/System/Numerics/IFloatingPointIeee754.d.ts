import type {
  FamilyArgumentOmitted,
  HostType,
  Int32Host,
  InterfaceTypeTrait,
  StrongNumeric
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
import "./IExponentialFunctions";
import "./IFloatingPoint";
import "./IFloatingPointConstants";
import "./IHyperbolicFunctions";
import "./IIncrementOperators";
import "./ILogarithmicFunctions";
import "./IModulusOperators";
import "./IMultiplicativeIdentity";
import "./IMultiplyOperators";
import "./INumber";
import "./INumberBase";
import "./IPowerFunctions";
import "./IRootFunctions";
import "./ISignedNumber";
import "./ISubtractionOperators";
import "./ITrigonometricFunctions";
import "./IUnaryNegationOperators";
import "./IUnaryPlusOperators";

declare const iFloatingPointIeee754Arity1InputBrand: unique symbol;
export interface _IFloatingPointIeee754Arity1Input<TSelf> {
  readonly [iFloatingPointIeee754Arity1InputBrand]: true;
}

export interface _IFloatingPointIeee754Arity1<TSelf>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_IFloatingPointIeee754Arity1Input<TSelf>>,
    _IFloatingPointIeee754Arity1Input<TSelf> {}

export interface _IFloatingPointIeee754Arity1HostType<TSelf> extends HostType<
  _IFloatingPointIeee754Arity1<TSelf>,
  InterfaceTypeTrait
> {
  readonly epsilon: TSelf;
  readonly naN: TSelf;
  readonly negativeInfinity: TSelf;
  readonly negativeZero: TSelf;
  readonly positiveInfinity: TSelf;
  atan2(y: TSelf, x: TSelf): TSelf;
  atan2Pi(y: TSelf, x: TSelf): TSelf;
  bitDecrement(x: TSelf): TSelf;
  bitIncrement(x: TSelf): TSelf;
  fusedMultiplyAdd(left: TSelf, right: TSelf, addend: TSelf): TSelf;
  ieee754Remainder(left: TSelf, right: TSelf): TSelf;
  iLogB(x: TSelf): number;
  lerp(value1: TSelf, value2: TSelf, amount: TSelf): TSelf;
  reciprocalEstimate(x: TSelf): TSelf;
  reciprocalSqrtEstimate(x: TSelf): TSelf;
  scaleB(x: TSelf, n: number | StrongNumeric<Int32Host>): TSelf;
}

export type IFloatingPointIeee754Family<T1 = FamilyArgumentOmitted> =
  _IFloatingPointIeee754Arity1<T1>;

declare global {
  namespace System.Numerics {
    type IFloatingPointIeee754<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./IFloatingPointIeee754").IFloatingPointIeee754Family<T1>;
  }
}

export type IFloatingPointIeee754InputFamily<T1 = FamilyArgumentOmitted> =
  _IFloatingPointIeee754Arity1Input<T1>;
export type IFloatingPointIeee754Input<T1> = _IFloatingPointIeee754Arity1Input<T1>;

declare global {
  namespace System.Numerics {
    type IFloatingPointIeee754Input<T1> =
      import("./IFloatingPointIeee754").IFloatingPointIeee754Input<T1>;
  }
}

export type IFloatingPointIeee754HostType<T1> = _IFloatingPointIeee754Arity1HostType<T1>;

export {};
