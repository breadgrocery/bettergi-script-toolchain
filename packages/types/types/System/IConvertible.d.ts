import type { HostType, InterfaceTypeTrait } from "../Microsoft/ClearScript/HostType";
import "./DateTime";
import "./IFormatProvider";
import "./TypeCode";
import "./V8SplitProxyHelpers";

declare const iConvertibleInputBrand: unique symbol;
export interface IConvertibleInput {
  readonly [iConvertibleInputBrand]: true;
}

export interface IConvertible
  extends Microsoft.ClearScript.ClrInterfaceView<IConvertibleInput>, IConvertibleInput {
  getTypeCode(): System.TypeCode;
  toBoolean(provider: System.IFormatProvider | null): boolean;
  toByte(provider: System.IFormatProvider | null): number;
  toChar(provider: System.IFormatProvider | null): number;
  toDateTime(provider: System.IFormatProvider | null): System.DateTime;
  toDecimal(provider: System.IFormatProvider | null): number;
  toDouble(provider: System.IFormatProvider | null): number;
  toInt16(provider: System.IFormatProvider | null): number;
  toInt32(provider: System.IFormatProvider | null): number;
  toInt64(provider: System.IFormatProvider | null): number;
  toSByte(provider: System.IFormatProvider | null): number;
  toSingle(provider: System.IFormatProvider | null): number;
  toString(provider: System.IFormatProvider | null): string;
  toType(conversionType: System.Type, provider: System.IFormatProvider | null): unknown;
  toUInt16(provider: System.IFormatProvider | null): number;
  toUInt32(provider: System.IFormatProvider | null): number;
  toUInt64(provider: System.IFormatProvider | null): number;
}

declare global {
  namespace System {
    type IConvertibleInput = import("./IConvertible").IConvertibleInput;
  }
}

declare global {
  namespace System {
    type IConvertible = import("./IConvertible").IConvertible;
  }
}

export interface IConvertibleHostType extends HostType<IConvertible, InterfaceTypeTrait> {}

export {};
