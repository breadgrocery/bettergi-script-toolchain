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

declare const iFloatingPointConstantsArity1InputBrand: unique symbol;
export interface _IFloatingPointConstantsArity1Input<TSelf> {
  readonly [iFloatingPointConstantsArity1InputBrand]: true;
}

export interface _IFloatingPointConstantsArity1<TSelf>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_IFloatingPointConstantsArity1Input<TSelf>>,
    _IFloatingPointConstantsArity1Input<TSelf> {}

export interface _IFloatingPointConstantsArity1HostType<TSelf> extends HostType<
  _IFloatingPointConstantsArity1<TSelf>,
  InterfaceTypeTrait
> {
  readonly e: TSelf;
  readonly pi: TSelf;
  readonly tau: TSelf;
}

export type IFloatingPointConstantsFamily<T1 = FamilyArgumentOmitted> =
  _IFloatingPointConstantsArity1<T1>;

declare global {
  namespace System.Numerics {
    type IFloatingPointConstants<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./IFloatingPointConstants").IFloatingPointConstantsFamily<T1>;
  }
}

export type IFloatingPointConstantsInputFamily<T1 = FamilyArgumentOmitted> =
  _IFloatingPointConstantsArity1Input<T1>;
export type IFloatingPointConstantsInput<T1> = _IFloatingPointConstantsArity1Input<T1>;

declare global {
  namespace System.Numerics {
    type IFloatingPointConstantsInput<T1> =
      import("./IFloatingPointConstants").IFloatingPointConstantsInput<T1>;
  }
}

export type IFloatingPointConstantsHostType<T1> = _IFloatingPointConstantsArity1HostType<T1>;

export {};
