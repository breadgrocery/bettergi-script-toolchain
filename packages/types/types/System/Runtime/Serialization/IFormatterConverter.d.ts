import type {
  EnumInput,
  HostType,
  InterfaceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../DateTime";
import "../../TypeCode";
import "../../V8SplitProxyHelpers";

declare const iFormatterConverterInputBrand: unique symbol;
export interface IFormatterConverterInput {
  readonly [iFormatterConverterInputBrand]: true;
}

export interface IFormatterConverter
  extends
    Microsoft.ClearScript.ClrInterfaceView<IFormatterConverterInput>,
    IFormatterConverterInput {
  convert(value: unknown, typeCode: EnumInput<System.TypeCode>): unknown;
  convert(value: unknown, type: System.Type): unknown;
  toBoolean(value: unknown): boolean;
  toByte(value: unknown): number;
  toChar(value: unknown): number;
  toDateTime(value: unknown): System.DateTime;
  toDecimal(value: unknown): number;
  toDouble(value: unknown): number;
  toInt16(value: unknown): number;
  toInt32(value: unknown): number;
  toInt64(value: unknown): number;
  toSByte(value: unknown): number;
  toSingle(value: unknown): number;
  toString(value: unknown): string;
  toUInt16(value: unknown): number;
  toUInt32(value: unknown): number;
  toUInt64(value: unknown): number;
}

declare global {
  namespace System.Runtime.Serialization {
    type IFormatterConverterInput = import("./IFormatterConverter").IFormatterConverterInput;
  }
}

declare global {
  namespace System.Runtime.Serialization {
    type IFormatterConverter = import("./IFormatterConverter").IFormatterConverter;
  }
}

export interface IFormatterConverterHostType extends HostType<
  IFormatterConverter,
  InterfaceTypeTrait
> {}

export {};
