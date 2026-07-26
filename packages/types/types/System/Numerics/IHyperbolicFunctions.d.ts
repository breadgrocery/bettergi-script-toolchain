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

declare const iHyperbolicFunctionsArity1InputBrand: unique symbol;
export interface _IHyperbolicFunctionsArity1Input<TSelf> {
  readonly [iHyperbolicFunctionsArity1InputBrand]: true;
}

export interface _IHyperbolicFunctionsArity1<TSelf>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_IHyperbolicFunctionsArity1Input<TSelf>>,
    _IHyperbolicFunctionsArity1Input<TSelf> {}

export interface _IHyperbolicFunctionsArity1HostType<TSelf> extends HostType<
  _IHyperbolicFunctionsArity1<TSelf>,
  InterfaceTypeTrait
> {
  acosh(x: TSelf): TSelf;
  asinh(x: TSelf): TSelf;
  atanh(x: TSelf): TSelf;
  cosh(x: TSelf): TSelf;
  sinh(x: TSelf): TSelf;
  tanh(x: TSelf): TSelf;
}

export type IHyperbolicFunctionsFamily<T1 = FamilyArgumentOmitted> =
  _IHyperbolicFunctionsArity1<T1>;

declare global {
  namespace System.Numerics {
    type IHyperbolicFunctions<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./IHyperbolicFunctions").IHyperbolicFunctionsFamily<T1>;
  }
}

export type IHyperbolicFunctionsInputFamily<T1 = FamilyArgumentOmitted> =
  _IHyperbolicFunctionsArity1Input<T1>;
export type IHyperbolicFunctionsInput<T1> = _IHyperbolicFunctionsArity1Input<T1>;

declare global {
  namespace System.Numerics {
    type IHyperbolicFunctionsInput<T1> =
      import("./IHyperbolicFunctions").IHyperbolicFunctionsInput<T1>;
  }
}

export type IHyperbolicFunctionsHostType<T1> = _IHyperbolicFunctionsArity1HostType<T1>;

export {};
