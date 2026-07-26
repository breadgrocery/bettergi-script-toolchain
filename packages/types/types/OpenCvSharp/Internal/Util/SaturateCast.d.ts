import type {
  ByteHost,
  ClrHostValue,
  DoubleHost,
  HostType,
  Int16Host,
  Int32Host,
  Int64Host,
  SByteHost,
  SingleHost,
  StaticTypeTrait,
  StrongNumeric,
  UInt16Host,
  UInt32Host,
  UInt64Host
} from "../../../Microsoft/ClearScript/HostType";

declare const saturateCastBrand: unique symbol;
export interface SaturateCast extends ClrHostValue {
  readonly [saturateCastBrand]: true;
}

declare global {
  namespace OpenCvSharp.Internal.Util {
    type SaturateCast = import("./SaturateCast").SaturateCast;
  }
}

export interface SaturateCastHostType extends HostType<SaturateCast, StaticTypeTrait> {
  toByte(v: number | StrongNumeric<SByteHost>): number;
  toByte(v: number | StrongNumeric<UInt16Host>): number;
  toByte(v: number | StrongNumeric<Int32Host>): number;
  toByte(v: number | StrongNumeric<Int16Host>): number;
  toByte(v: number | StrongNumeric<UInt32Host>): number;
  toByte(v: number | StrongNumeric<SingleHost>): number;
  toByte(v: number | StrongNumeric<DoubleHost>): number;
  toByte(v: number | StrongNumeric<Int64Host>): number;
  toByte(v: number | StrongNumeric<UInt64Host>): number;
  toSByte(v: number | StrongNumeric<ByteHost>): number;
  toSByte(v: number | StrongNumeric<UInt16Host>): number;
  toSByte(v: number | StrongNumeric<Int32Host>): number;
  toSByte(v: number | StrongNumeric<Int16Host>): number;
  toSByte(v: number | StrongNumeric<UInt32Host>): number;
  toSByte(v: number | StrongNumeric<SingleHost>): number;
  toSByte(v: number | StrongNumeric<DoubleHost>): number;
  toSByte(v: number | StrongNumeric<Int64Host>): number;
  toSByte(v: number | StrongNumeric<UInt64Host>): number;
  toUInt16(v: number | StrongNumeric<SByteHost>): number;
  toUInt16(v: number | StrongNumeric<Int16Host>): number;
  toUInt16(v: number | StrongNumeric<Int32Host>): number;
  toUInt16(v: number | StrongNumeric<UInt32Host>): number;
  toUInt16(v: number | StrongNumeric<SingleHost>): number;
  toUInt16(v: number | StrongNumeric<DoubleHost>): number;
  toUInt16(v: number | StrongNumeric<Int64Host>): number;
  toUInt16(v: number | StrongNumeric<UInt64Host>): number;
  toInt16(v: number | StrongNumeric<UInt16Host>): number;
  toInt16(v: number | StrongNumeric<Int32Host>): number;
  toInt16(v: number | StrongNumeric<UInt32Host>): number;
  toInt16(v: number | StrongNumeric<SingleHost>): number;
  toInt16(v: number | StrongNumeric<DoubleHost>): number;
  toInt16(v: number | StrongNumeric<Int64Host>): number;
  toInt16(v: number | StrongNumeric<UInt64Host>): number;
  toInt32(v: number | StrongNumeric<UInt32Host>): number;
  toInt32(v: number | StrongNumeric<Int64Host>): number;
  toInt32(v: number | StrongNumeric<UInt64Host>): number;
  toInt32(v: number | StrongNumeric<SingleHost>): number;
  toInt32(v: number | StrongNumeric<DoubleHost>): number;
  toUInt32(v: number | StrongNumeric<SByteHost>): number;
  toUInt32(v: number | StrongNumeric<Int16Host>): number;
  toUInt32(v: number | StrongNumeric<Int32Host>): number;
  toUInt32(v: number | StrongNumeric<Int64Host>): number;
  toUInt32(v: number | StrongNumeric<UInt64Host>): number;
  toUInt32(v: number | StrongNumeric<SingleHost>): number;
  toUInt32(v: number | StrongNumeric<DoubleHost>): number;
  toUInt64(v: number | StrongNumeric<SByteHost>): number;
  toUInt64(v: number | StrongNumeric<Int16Host>): number;
  toUInt64(v: number | StrongNumeric<Int32Host>): number;
  toUInt64(v: number | StrongNumeric<Int64Host>): number;
  toInt64(v: number | StrongNumeric<UInt64Host>): number;
}

export {};
