import type {
  ByteHost,
  CharHost,
  ClrHostValue,
  DecimalHost,
  DoubleHost,
  HostType,
  Int16Host,
  Int32Host,
  Int64Host,
  ReferenceTypeTrait,
  SByteHost,
  SingleHost,
  StrongNumeric,
  UInt16Host,
  UInt32Host,
  UInt64Host
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../DateTime";
import "../../V8SplitProxyHelpers";
import "./DeserializationToken";
import "./IFormatterConverter";
import "./SerializationInfoEnumerator";

declare const serializationInfoBrand: unique symbol;
export interface SerializationInfo extends ClrHostValue {
  readonly [serializationInfoBrand]: true;
  addValue(name: string, value: System.DateTime): VoidResult;
  addValue(name: string, value: boolean): VoidResult;
  addValue(name: string, value: number | StrongNumeric<ByteHost>): VoidResult;
  addValue(name: string, value: number | StrongNumeric<CharHost>): VoidResult;
  addValue(name: string, value: number | StrongNumeric<DecimalHost>): VoidResult;
  addValue(name: string, value: number | StrongNumeric<DoubleHost>): VoidResult;
  addValue(name: string, value: number | StrongNumeric<Int16Host>): VoidResult;
  addValue(name: string, value: number | StrongNumeric<Int32Host>): VoidResult;
  addValue(name: string, value: number | StrongNumeric<Int64Host>): VoidResult;
  addValue(name: string, value: number | StrongNumeric<SByteHost>): VoidResult;
  addValue(name: string, value: number | StrongNumeric<SingleHost>): VoidResult;
  addValue(name: string, value: number | StrongNumeric<UInt16Host>): VoidResult;
  addValue(name: string, value: number | StrongNumeric<UInt32Host>): VoidResult;
  addValue(name: string, value: number | StrongNumeric<UInt64Host>): VoidResult;
  addValue(name: string, value: unknown | null): VoidResult;
  addValue(name: string, value: unknown | null, type: System.Type): VoidResult;
  assemblyName: string;
  fullTypeName: string;
  getBoolean(name: string): boolean;
  getByte(name: string): number;
  getChar(name: string): number;
  getDateTime(name: string): System.DateTime;
  getDecimal(name: string): number;
  getDouble(name: string): number;
  getEnumerator(): System.Runtime.Serialization.SerializationInfoEnumerator;
  getInt16(name: string): number;
  getInt32(name: string): number;
  getInt64(name: string): number;
  getSByte(name: string): number;
  getSingle(name: string): number;
  getString(name: string): string;
  getUInt16(name: string): number;
  getUInt32(name: string): number;
  getUInt64(name: string): number;
  getValue(name: string, type: System.Type): unknown;
  readonly isAssemblyNameSetExplicit: boolean;
  readonly isFullTypeNameSetExplicit: boolean;
  readonly memberCount: number;
  readonly objectType: System.Type;
  setType(type: System.Type): VoidResult;
}

declare global {
  namespace System.Runtime.Serialization {
    type SerializationInfo = import("./SerializationInfo").SerializationInfo;
  }
}

export interface SerializationInfoHostType extends HostType<SerializationInfo, ReferenceTypeTrait> {
  new (
    type: System.Type,
    converter: System.Runtime.Serialization.IFormatterConverter
  ): SerializationInfo;
  new (
    type: System.Type,
    converter: System.Runtime.Serialization.IFormatterConverter,
    requireSameTokenInPartialTrust: boolean
  ): SerializationInfo;
  startDeserialization(): System.Runtime.Serialization.DeserializationToken;
}

export {};
