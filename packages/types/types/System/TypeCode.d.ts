import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "./Enum";
import "./IComparable";
import "./IConvertible";
import "./IFormattable";
import "./ISpanFormattable";

declare const typeCodeBrand: unique symbol;
export interface TypeCode extends ClrHostValue {
  readonly [typeCodeBrand]: true;
}

declare global {
  namespace System {
    type TypeCode = import("./TypeCode").TypeCode;
  }
}

export interface TypeCodeHostType extends HostType<TypeCode, EnumTypeTrait> {
  readonly empty: TypeCode;
  readonly object: TypeCode;
  readonly dbNull: TypeCode;
  readonly boolean: TypeCode;
  readonly char: TypeCode;
  readonly sByte: TypeCode;
  readonly byte: TypeCode;
  readonly int16: TypeCode;
  readonly uInt16: TypeCode;
  readonly int32: TypeCode;
  readonly uInt32: TypeCode;
  readonly int64: TypeCode;
  readonly uInt64: TypeCode;
  readonly single: TypeCode;
  readonly double: TypeCode;
  readonly decimal: TypeCode;
  readonly dateTime: TypeCode;
  readonly string: TypeCode;
}

export {};
