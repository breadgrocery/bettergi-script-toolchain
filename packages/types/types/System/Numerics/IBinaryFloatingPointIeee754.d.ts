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
import "./IBinaryNumber";
import "./IBitwiseOperators";
import "./IComparisonOperators";
import "./IDecrementOperators";
import "./IDivisionOperators";
import "./IEqualityOperators";
import "./IExponentialFunctions";
import "./IFloatingPoint";
import "./IFloatingPointConstants";
import "./IFloatingPointIeee754";
import "./IHyperbolicFunctions";
import "./IIncrementOperators";
import "./ILogarithmicFunctions";
import "./IModulusOperators";
import "./IMultiplicativeIdentity";
import "./IMultiplyOperators";
import "./INumber";
import "./INumberBase";
import "./IPowerFunctions";
import "./IRootFunctions";
import "./ISignedNumber";
import "./ISubtractionOperators";
import "./ITrigonometricFunctions";
import "./IUnaryNegationOperators";
import "./IUnaryPlusOperators";

declare const iBinaryFloatingPointIeee754Arity1InputBrand: unique symbol;
export interface _IBinaryFloatingPointIeee754Arity1Input<TSelf> {
  readonly [iBinaryFloatingPointIeee754Arity1InputBrand]: true;
}

export interface _IBinaryFloatingPointIeee754Arity1<TSelf>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_IBinaryFloatingPointIeee754Arity1Input<TSelf>>,
    _IBinaryFloatingPointIeee754Arity1Input<TSelf> {}

export interface _IBinaryFloatingPointIeee754Arity1HostType<TSelf> extends HostType<
  _IBinaryFloatingPointIeee754Arity1<TSelf>,
  InterfaceTypeTrait
> {}

export type IBinaryFloatingPointIeee754Family<T1 = FamilyArgumentOmitted> =
  _IBinaryFloatingPointIeee754Arity1<T1>;

declare global {
  namespace System.Numerics {
    type IBinaryFloatingPointIeee754<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./IBinaryFloatingPointIeee754").IBinaryFloatingPointIeee754Family<T1>;
  }
}

export type IBinaryFloatingPointIeee754InputFamily<T1 = FamilyArgumentOmitted> =
  _IBinaryFloatingPointIeee754Arity1Input<T1>;
export type IBinaryFloatingPointIeee754Input<T1> = _IBinaryFloatingPointIeee754Arity1Input<T1>;

declare global {
  namespace System.Numerics {
    type IBinaryFloatingPointIeee754Input<T1> =
      import("./IBinaryFloatingPointIeee754").IBinaryFloatingPointIeee754Input<T1>;
  }
}

export type IBinaryFloatingPointIeee754HostType<T1> =
  _IBinaryFloatingPointIeee754Arity1HostType<T1>;

export {};
