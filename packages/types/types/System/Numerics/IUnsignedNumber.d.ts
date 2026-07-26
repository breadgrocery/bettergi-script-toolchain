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

declare const iUnsignedNumberArity1InputBrand: unique symbol;
export interface _IUnsignedNumberArity1Input<TSelf> {
  readonly [iUnsignedNumberArity1InputBrand]: true;
}

export interface _IUnsignedNumberArity1<TSelf>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_IUnsignedNumberArity1Input<TSelf>>,
    _IUnsignedNumberArity1Input<TSelf> {}

export interface _IUnsignedNumberArity1HostType<TSelf> extends HostType<
  _IUnsignedNumberArity1<TSelf>,
  InterfaceTypeTrait
> {}

export type IUnsignedNumberFamily<T1 = FamilyArgumentOmitted> = _IUnsignedNumberArity1<T1>;

declare global {
  namespace System.Numerics {
    type IUnsignedNumber<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./IUnsignedNumber").IUnsignedNumberFamily<T1>;
  }
}

export type IUnsignedNumberInputFamily<T1 = FamilyArgumentOmitted> =
  _IUnsignedNumberArity1Input<T1>;
export type IUnsignedNumberInput<T1> = _IUnsignedNumberArity1Input<T1>;

declare global {
  namespace System.Numerics {
    type IUnsignedNumberInput<T1> = import("./IUnsignedNumber").IUnsignedNumberInput<T1>;
  }
}

export type IUnsignedNumberHostType<T1> = _IUnsignedNumberArity1HostType<T1>;

export {};
