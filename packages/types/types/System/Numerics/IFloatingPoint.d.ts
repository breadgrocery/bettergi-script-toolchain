import type {
  ByteHost,
  EnumInput,
  FamilyArgumentOmitted,
  HostArray,
  HostType,
  Int32Host,
  InterfaceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import "../IComparable";
import "../IEquatable";
import "../IFormattable";
import "../IParsable";
import "../ISpanFormattable";
import "../ISpanParsable";
import "../IUtf8SpanFormattable";
import "../IUtf8SpanParsable";
import "../MidpointRounding";
import "./IAdditionOperators";
import "./IAdditiveIdentity";
import "./IComparisonOperators";
import "./IDecrementOperators";
import "./IDivisionOperators";
import "./IEqualityOperators";
import "./IFloatingPointConstants";
import "./IIncrementOperators";
import "./IModulusOperators";
import "./IMultiplicativeIdentity";
import "./IMultiplyOperators";
import "./INumber";
import "./INumberBase";
import "./ISignedNumber";
import "./ISubtractionOperators";
import "./IUnaryNegationOperators";
import "./IUnaryPlusOperators";

declare const iFloatingPointArity1InputBrand: unique symbol;
export interface _IFloatingPointArity1Input<TSelf> {
  readonly [iFloatingPointArity1InputBrand]: true;
}

export interface _IFloatingPointArity1<TSelf>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_IFloatingPointArity1Input<TSelf>>,
    _IFloatingPointArity1Input<TSelf> {
  getExponentByteCount(): number;
  getExponentShortestBitLength(): number;
  getSignificandBitLength(): number;
  getSignificandByteCount(): number;
  writeExponentBigEndian(destination: HostArray<number | StrongNumeric<ByteHost>>): number;
  writeExponentBigEndian(
    destination: HostArray<number | StrongNumeric<ByteHost>>,
    startIndex: number | StrongNumeric<Int32Host>
  ): number;
  writeExponentLittleEndian(destination: HostArray<number | StrongNumeric<ByteHost>>): number;
  writeExponentLittleEndian(
    destination: HostArray<number | StrongNumeric<ByteHost>>,
    startIndex: number | StrongNumeric<Int32Host>
  ): number;
  writeSignificandBigEndian(destination: HostArray<number | StrongNumeric<ByteHost>>): number;
  writeSignificandBigEndian(
    destination: HostArray<number | StrongNumeric<ByteHost>>,
    startIndex: number | StrongNumeric<Int32Host>
  ): number;
  writeSignificandLittleEndian(destination: HostArray<number | StrongNumeric<ByteHost>>): number;
  writeSignificandLittleEndian(
    destination: HostArray<number | StrongNumeric<ByteHost>>,
    startIndex: number | StrongNumeric<Int32Host>
  ): number;
}

export interface _IFloatingPointArity1HostType<TSelf> extends HostType<
  _IFloatingPointArity1<TSelf>,
  InterfaceTypeTrait
> {
  ceiling(x: TSelf): TSelf;
  floor(x: TSelf): TSelf;
  round(x: TSelf): TSelf;
  round(x: TSelf, digits: number | StrongNumeric<Int32Host>): TSelf;
  round(x: TSelf, mode: EnumInput<System.MidpointRounding>): TSelf;
  round(
    x: TSelf,
    digits: number | StrongNumeric<Int32Host>,
    mode: EnumInput<System.MidpointRounding>
  ): TSelf;
  truncate(x: TSelf): TSelf;
}

export type IFloatingPointFamily<T1 = FamilyArgumentOmitted> = _IFloatingPointArity1<T1>;

declare global {
  namespace System.Numerics {
    type IFloatingPoint<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./IFloatingPoint").IFloatingPointFamily<T1>;
  }
}

export type IFloatingPointInputFamily<T1 = FamilyArgumentOmitted> = _IFloatingPointArity1Input<T1>;
export type IFloatingPointInput<T1> = _IFloatingPointArity1Input<T1>;

declare global {
  namespace System.Numerics {
    type IFloatingPointInput<T1> = import("./IFloatingPoint").IFloatingPointInput<T1>;
  }
}

export type IFloatingPointHostType<T1> = _IFloatingPointArity1HostType<T1>;

export {};
