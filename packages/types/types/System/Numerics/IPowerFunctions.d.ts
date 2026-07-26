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
import "./IIncrementOperators";
import "./IMultiplicativeIdentity";
import "./IMultiplyOperators";
import "./INumberBase";
import "./ISubtractionOperators";
import "./IUnaryNegationOperators";
import "./IUnaryPlusOperators";

declare const iPowerFunctionsArity1InputBrand: unique symbol;
export interface _IPowerFunctionsArity1Input<TSelf> {
  readonly [iPowerFunctionsArity1InputBrand]: true;
}

export interface _IPowerFunctionsArity1<TSelf>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_IPowerFunctionsArity1Input<TSelf>>,
    _IPowerFunctionsArity1Input<TSelf> {}

export interface _IPowerFunctionsArity1HostType<TSelf> extends HostType<
  _IPowerFunctionsArity1<TSelf>,
  InterfaceTypeTrait
> {
  pow(x: TSelf, y: TSelf): TSelf;
}

export type IPowerFunctionsFamily<T1 = FamilyArgumentOmitted> = _IPowerFunctionsArity1<T1>;

declare global {
  namespace System.Numerics {
    type IPowerFunctions<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./IPowerFunctions").IPowerFunctionsFamily<T1>;
  }
}

export type IPowerFunctionsInputFamily<T1 = FamilyArgumentOmitted> =
  _IPowerFunctionsArity1Input<T1>;
export type IPowerFunctionsInput<T1> = _IPowerFunctionsArity1Input<T1>;

declare global {
  namespace System.Numerics {
    type IPowerFunctionsInput<T1> = import("./IPowerFunctions").IPowerFunctionsInput<T1>;
  }
}

export type IPowerFunctionsHostType<T1> = _IPowerFunctionsArity1HostType<T1>;

export {};
