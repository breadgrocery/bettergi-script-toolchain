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

declare const iExponentialFunctionsArity1InputBrand: unique symbol;
export interface _IExponentialFunctionsArity1Input<TSelf> {
  readonly [iExponentialFunctionsArity1InputBrand]: true;
}

export interface _IExponentialFunctionsArity1<TSelf>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_IExponentialFunctionsArity1Input<TSelf>>,
    _IExponentialFunctionsArity1Input<TSelf> {}

export interface _IExponentialFunctionsArity1HostType<TSelf> extends HostType<
  _IExponentialFunctionsArity1<TSelf>,
  InterfaceTypeTrait
> {
  exp(x: TSelf): TSelf;
  expM1(x: TSelf): TSelf;
  exp2(x: TSelf): TSelf;
  exp2M1(x: TSelf): TSelf;
  exp10(x: TSelf): TSelf;
  exp10M1(x: TSelf): TSelf;
}

export type IExponentialFunctionsFamily<T1 = FamilyArgumentOmitted> =
  _IExponentialFunctionsArity1<T1>;

declare global {
  namespace System.Numerics {
    type IExponentialFunctions<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./IExponentialFunctions").IExponentialFunctionsFamily<T1>;
  }
}

export type IExponentialFunctionsInputFamily<T1 = FamilyArgumentOmitted> =
  _IExponentialFunctionsArity1Input<T1>;
export type IExponentialFunctionsInput<T1> = _IExponentialFunctionsArity1Input<T1>;

declare global {
  namespace System.Numerics {
    type IExponentialFunctionsInput<T1> =
      import("./IExponentialFunctions").IExponentialFunctionsInput<T1>;
  }
}

export type IExponentialFunctionsHostType<T1> = _IExponentialFunctionsArity1HostType<T1>;

export {};
