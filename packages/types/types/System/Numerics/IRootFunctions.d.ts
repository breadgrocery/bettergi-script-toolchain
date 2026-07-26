import type {
  FamilyArgumentOmitted,
  HostType,
  Int32Host,
  InterfaceTypeTrait,
  StrongNumeric
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

declare const iRootFunctionsArity1InputBrand: unique symbol;
export interface _IRootFunctionsArity1Input<TSelf> {
  readonly [iRootFunctionsArity1InputBrand]: true;
}

export interface _IRootFunctionsArity1<TSelf>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_IRootFunctionsArity1Input<TSelf>>,
    _IRootFunctionsArity1Input<TSelf> {}

export interface _IRootFunctionsArity1HostType<TSelf> extends HostType<
  _IRootFunctionsArity1<TSelf>,
  InterfaceTypeTrait
> {
  cbrt(x: TSelf): TSelf;
  hypot(x: TSelf, y: TSelf): TSelf;
  rootN(x: TSelf, n: number | StrongNumeric<Int32Host>): TSelf;
  sqrt(x: TSelf): TSelf;
}

export type IRootFunctionsFamily<T1 = FamilyArgumentOmitted> = _IRootFunctionsArity1<T1>;

declare global {
  namespace System.Numerics {
    type IRootFunctions<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./IRootFunctions").IRootFunctionsFamily<T1>;
  }
}

export type IRootFunctionsInputFamily<T1 = FamilyArgumentOmitted> = _IRootFunctionsArity1Input<T1>;
export type IRootFunctionsInput<T1> = _IRootFunctionsArity1Input<T1>;

declare global {
  namespace System.Numerics {
    type IRootFunctionsInput<T1> = import("./IRootFunctions").IRootFunctionsInput<T1>;
  }
}

export type IRootFunctionsHostType<T1> = _IRootFunctionsArity1HostType<T1>;

export {};
