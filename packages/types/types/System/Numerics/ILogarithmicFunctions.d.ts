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

declare const iLogarithmicFunctionsArity1InputBrand: unique symbol;
export interface _ILogarithmicFunctionsArity1Input<TSelf> {
  readonly [iLogarithmicFunctionsArity1InputBrand]: true;
}

export interface _ILogarithmicFunctionsArity1<TSelf>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_ILogarithmicFunctionsArity1Input<TSelf>>,
    _ILogarithmicFunctionsArity1Input<TSelf> {}

export interface _ILogarithmicFunctionsArity1HostType<TSelf> extends HostType<
  _ILogarithmicFunctionsArity1<TSelf>,
  InterfaceTypeTrait
> {
  log(x: TSelf): TSelf;
  log(x: TSelf, newBase: TSelf): TSelf;
  logP1(x: TSelf): TSelf;
  log2(x: TSelf): TSelf;
  log2P1(x: TSelf): TSelf;
  log10(x: TSelf): TSelf;
  log10P1(x: TSelf): TSelf;
}

export type ILogarithmicFunctionsFamily<T1 = FamilyArgumentOmitted> =
  _ILogarithmicFunctionsArity1<T1>;

declare global {
  namespace System.Numerics {
    type ILogarithmicFunctions<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./ILogarithmicFunctions").ILogarithmicFunctionsFamily<T1>;
  }
}

export type ILogarithmicFunctionsInputFamily<T1 = FamilyArgumentOmitted> =
  _ILogarithmicFunctionsArity1Input<T1>;
export type ILogarithmicFunctionsInput<T1> = _ILogarithmicFunctionsArity1Input<T1>;

declare global {
  namespace System.Numerics {
    type ILogarithmicFunctionsInput<T1> =
      import("./ILogarithmicFunctions").ILogarithmicFunctionsInput<T1>;
  }
}

export type ILogarithmicFunctionsHostType<T1> = _ILogarithmicFunctionsArity1HostType<T1>;

export {};
