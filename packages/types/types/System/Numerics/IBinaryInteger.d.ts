import type {
  ByteHost,
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
import "../ValueTuple";
import "./IAdditionOperators";
import "./IAdditiveIdentity";
import "./IBinaryNumber";
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
import "./IShiftOperators";
import "./ISubtractionOperators";
import "./IUnaryNegationOperators";
import "./IUnaryPlusOperators";

declare const iBinaryIntegerArity1InputBrand: unique symbol;
export interface _IBinaryIntegerArity1Input<TSelf> {
  readonly [iBinaryIntegerArity1InputBrand]: true;
}

export interface _IBinaryIntegerArity1<TSelf>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_IBinaryIntegerArity1Input<TSelf>>,
    _IBinaryIntegerArity1Input<TSelf> {
  getByteCount(): number;
  getShortestBitLength(): number;
  writeBigEndian(destination: HostArray<number | StrongNumeric<ByteHost>>): number;
  writeBigEndian(
    destination: HostArray<number | StrongNumeric<ByteHost>>,
    startIndex: number | StrongNumeric<Int32Host>
  ): number;
  writeLittleEndian(destination: HostArray<number | StrongNumeric<ByteHost>>): number;
  writeLittleEndian(
    destination: HostArray<number | StrongNumeric<ByteHost>>,
    startIndex: number | StrongNumeric<Int32Host>
  ): number;
}

export interface _IBinaryIntegerArity1HostType<TSelf> extends HostType<
  _IBinaryIntegerArity1<TSelf>,
  InterfaceTypeTrait
> {
  divRem(left: TSelf, right: TSelf): System.ValueTuple<TSelf, TSelf>;
  leadingZeroCount(value: TSelf): TSelf;
  popCount(value: TSelf): TSelf;
  readBigEndian(source: HostArray<number | StrongNumeric<ByteHost>>, isUnsigned: boolean): TSelf;
  readBigEndian(
    source: HostArray<number | StrongNumeric<ByteHost>>,
    startIndex: number | StrongNumeric<Int32Host>,
    isUnsigned: boolean
  ): TSelf;
  readLittleEndian(source: HostArray<number | StrongNumeric<ByteHost>>, isUnsigned: boolean): TSelf;
  readLittleEndian(
    source: HostArray<number | StrongNumeric<ByteHost>>,
    startIndex: number | StrongNumeric<Int32Host>,
    isUnsigned: boolean
  ): TSelf;
  rotateLeft(value: TSelf, rotateAmount: number | StrongNumeric<Int32Host>): TSelf;
  rotateRight(value: TSelf, rotateAmount: number | StrongNumeric<Int32Host>): TSelf;
  trailingZeroCount(value: TSelf): TSelf;
}

export type IBinaryIntegerFamily<T1 = FamilyArgumentOmitted> = _IBinaryIntegerArity1<T1>;

declare global {
  namespace System.Numerics {
    type IBinaryInteger<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./IBinaryInteger").IBinaryIntegerFamily<T1>;
  }
}

export type IBinaryIntegerInputFamily<T1 = FamilyArgumentOmitted> = _IBinaryIntegerArity1Input<T1>;
export type IBinaryIntegerInput<T1> = _IBinaryIntegerArity1Input<T1>;

declare global {
  namespace System.Numerics {
    type IBinaryIntegerInput<T1> = import("./IBinaryInteger").IBinaryIntegerInput<T1>;
  }
}

export type IBinaryIntegerHostType<T1> = _IBinaryIntegerArity1HostType<T1>;

export {};
