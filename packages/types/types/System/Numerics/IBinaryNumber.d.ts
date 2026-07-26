import type {
  FamilyArgumentOmitted,
  HostType,
  InterfaceTypeTrait
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
import "./IBitwiseOperators";
import "./IComparisonOperators";
import "./IDecrementOperators";
import "./IDivisionOperators";
import "./IEqualityOperators";
import "./IIncrementOperators";
import "./IModulusOperators";
import "./IMultiplicativeIdentity";
import "./IMultiplyOperators";
import "./INumber";
import "./INumberBase";
import "./ISubtractionOperators";
import "./IUnaryNegationOperators";
import "./IUnaryPlusOperators";

declare const iBinaryNumberArity1InputBrand: unique symbol;
export interface _IBinaryNumberArity1Input<TSelf> {
  readonly [iBinaryNumberArity1InputBrand]: true;
}

export interface _IBinaryNumberArity1<TSelf>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_IBinaryNumberArity1Input<TSelf>>,
    _IBinaryNumberArity1Input<TSelf> {}

export interface _IBinaryNumberArity1HostType<TSelf> extends HostType<
  _IBinaryNumberArity1<TSelf>,
  InterfaceTypeTrait
> {
  readonly allBitsSet: TSelf;
  isPow2(value: TSelf): boolean;
  log2(value: TSelf): TSelf;
}

export type IBinaryNumberFamily<T1 = FamilyArgumentOmitted> = _IBinaryNumberArity1<T1>;

declare global {
  namespace System.Numerics {
    type IBinaryNumber<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./IBinaryNumber").IBinaryNumberFamily<T1>;
  }
}

export type IBinaryNumberInputFamily<T1 = FamilyArgumentOmitted> = _IBinaryNumberArity1Input<T1>;
export type IBinaryNumberInput<T1> = _IBinaryNumberArity1Input<T1>;

declare global {
  namespace System.Numerics {
    type IBinaryNumberInput<T1> = import("./IBinaryNumber").IBinaryNumberInput<T1>;
  }
}

export type IBinaryNumberHostType<T1> = _IBinaryNumberArity1HostType<T1>;

export {};
