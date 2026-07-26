import type {
  FamilyArgumentOmitted,
  HostType,
  InterfaceTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import "../IEquatable";
import "../IFormattable";
import "../IParsable";
import "../ISpanFormattable";
import "../ISpanParsable";
import "../IUtf8SpanFormattable";
import "../IUtf8SpanParsable";
import "../ValueTuple";
import "./IAdditionOperators";
import "./IAdditiveIdentity";
import "./IDecrementOperators";
import "./IDivisionOperators";
import "./IEqualityOperators";
import "./IFloatingPointConstants";
import "./IIncrementOperators";
import "./IMultiplicativeIdentity";
import "./IMultiplyOperators";
import "./INumberBase";
import "./ISubtractionOperators";
import "./IUnaryNegationOperators";
import "./IUnaryPlusOperators";

declare const iTrigonometricFunctionsArity1InputBrand: unique symbol;
export interface _ITrigonometricFunctionsArity1Input<TSelf> {
  readonly [iTrigonometricFunctionsArity1InputBrand]: true;
}

export interface _ITrigonometricFunctionsArity1<TSelf>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_ITrigonometricFunctionsArity1Input<TSelf>>,
    _ITrigonometricFunctionsArity1Input<TSelf> {}

export interface _ITrigonometricFunctionsArity1HostType<TSelf> extends HostType<
  _ITrigonometricFunctionsArity1<TSelf>,
  InterfaceTypeTrait
> {
  acos(x: TSelf): TSelf;
  acosPi(x: TSelf): TSelf;
  asin(x: TSelf): TSelf;
  asinPi(x: TSelf): TSelf;
  atan(x: TSelf): TSelf;
  atanPi(x: TSelf): TSelf;
  cos(x: TSelf): TSelf;
  cosPi(x: TSelf): TSelf;
  degreesToRadians(degrees: TSelf): TSelf;
  radiansToDegrees(radians: TSelf): TSelf;
  sin(x: TSelf): TSelf;
  sinCos(x: TSelf): System.ValueTuple<TSelf, TSelf>;
  sinCosPi(x: TSelf): System.ValueTuple<TSelf, TSelf>;
  sinPi(x: TSelf): TSelf;
  tan(x: TSelf): TSelf;
  tanPi(x: TSelf): TSelf;
}

export type ITrigonometricFunctionsFamily<T1 = FamilyArgumentOmitted> =
  _ITrigonometricFunctionsArity1<T1>;

declare global {
  namespace System.Numerics {
    type ITrigonometricFunctions<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./ITrigonometricFunctions").ITrigonometricFunctionsFamily<T1>;
  }
}

export type ITrigonometricFunctionsInputFamily<T1 = FamilyArgumentOmitted> =
  _ITrigonometricFunctionsArity1Input<T1>;
export type ITrigonometricFunctionsInput<T1> = _ITrigonometricFunctionsArity1Input<T1>;

declare global {
  namespace System.Numerics {
    type ITrigonometricFunctionsInput<T1> =
      import("./ITrigonometricFunctions").ITrigonometricFunctionsInput<T1>;
  }
}

export type ITrigonometricFunctionsHostType<T1> = _ITrigonometricFunctionsArity1HostType<T1>;

export {};
