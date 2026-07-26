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

declare const iSignedNumberArity1InputBrand: unique symbol;
export interface _ISignedNumberArity1Input<TSelf> {
  readonly [iSignedNumberArity1InputBrand]: true;
}

export interface _ISignedNumberArity1<TSelf>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_ISignedNumberArity1Input<TSelf>>,
    _ISignedNumberArity1Input<TSelf> {}

export interface _ISignedNumberArity1HostType<TSelf> extends HostType<
  _ISignedNumberArity1<TSelf>,
  InterfaceTypeTrait
> {
  readonly negativeOne: TSelf;
}

export type ISignedNumberFamily<T1 = FamilyArgumentOmitted> = _ISignedNumberArity1<T1>;

declare global {
  namespace System.Numerics {
    type ISignedNumber<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./ISignedNumber").ISignedNumberFamily<T1>;
  }
}

export type ISignedNumberInputFamily<T1 = FamilyArgumentOmitted> = _ISignedNumberArity1Input<T1>;
export type ISignedNumberInput<T1> = _ISignedNumberArity1Input<T1>;

declare global {
  namespace System.Numerics {
    type ISignedNumberInput<T1> = import("./ISignedNumber").ISignedNumberInput<T1>;
  }
}

export type ISignedNumberHostType<T1> = _ISignedNumberArity1HostType<T1>;

export {};
