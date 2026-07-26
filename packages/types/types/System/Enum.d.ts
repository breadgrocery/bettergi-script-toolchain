import type {
  ByteHost,
  ClrHostValue,
  HostArray,
  HostType,
  Int16Host,
  Int32Host,
  Int64Host,
  ReferenceTypeTrait,
  SByteHost,
  StrongNumeric,
  UInt16Host,
  UInt32Host,
  UInt64Host
} from "../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../Microsoft/ClearScript/HostVariable";
import "./Array";
import "./IComparable";
import "./IConvertible";
import "./IFormatProvider";
import "./IFormattable";
import "./ISpanFormattable";
import "./TypeCode";
import "./V8SplitProxyHelpers";
import "./ValueType";

declare const enumBrand: unique symbol;
export interface Enum
  extends
    ClrHostValue,
    System.IComparableInput,
    System.ISpanFormattableInput,
    System.IFormattableInput,
    System.IConvertibleInput {
  readonly [enumBrand]: true;
  compareTo(target: unknown | null): number;
  equals(obj: unknown | null): boolean;
  getHashCode(): number;
  getTypeCode(): System.TypeCode;
  hasFlag(flag: System.Enum): boolean;
  toString(): string;
  toString(format: string | null): string;
  toString(format: string | null, provider: System.IFormatProvider | null): string;
  toString(provider: System.IFormatProvider | null): string;
}

declare global {
  namespace System {
    type Enum = import("./Enum").Enum;
  }
}

export interface EnumHostType extends HostType<Enum, ReferenceTypeTrait> {
  getName<TEnum>(type1: HostType<TEnum>, value: TEnum): string;
  getName(enumType: System.Type, value: unknown): string;
  getNames<TEnum>(type1: HostType<TEnum>): HostArray<string>;
  getNames(enumType: System.Type): HostArray<string>;
  getUnderlyingType(enumType: System.Type): System.Type;
  getValues<TEnum>(type1: HostType<TEnum>): HostArray<TEnum>;
  getValues(enumType: System.Type): System.Array;
  getValuesAsUnderlyingType<TEnum>(type1: HostType<TEnum>): System.Array;
  getValuesAsUnderlyingType(enumType: System.Type): System.Array;
  isDefined<TEnum>(type1: HostType<TEnum>, value: TEnum): boolean;
  isDefined(enumType: System.Type, value: unknown): boolean;
  parse(enumType: System.Type, value: string): unknown;
  parse(enumType: System.Type, value: string, ignoreCase: boolean): unknown;
  parse<TEnum>(type1: HostType<TEnum>, value: string): TEnum;
  parse<TEnum>(type1: HostType<TEnum>, value: string, ignoreCase: boolean): TEnum;
  tryParse(enumType: System.Type, value: string | null, result: HostVariableOut<unknown>): boolean;
  tryParse(
    enumType: System.Type,
    value: string | null,
    ignoreCase: boolean,
    result: HostVariableOut<unknown>
  ): boolean;
  tryParse<TEnum>(
    type1: HostType<TEnum>,
    value: string | null,
    result: HostVariableOut<TEnum>
  ): boolean;
  tryParse<TEnum>(
    type1: HostType<TEnum>,
    value: string | null,
    ignoreCase: boolean,
    result: HostVariableOut<TEnum>
  ): boolean;
  format(enumType: System.Type, value: unknown, format: string): string;
  toObject(enumType: System.Type, value: unknown): unknown;
  toObject(enumType: System.Type, value: number | StrongNumeric<SByteHost>): unknown;
  toObject(enumType: System.Type, value: number | StrongNumeric<Int16Host>): unknown;
  toObject(enumType: System.Type, value: number | StrongNumeric<Int32Host>): unknown;
  toObject(enumType: System.Type, value: number | StrongNumeric<ByteHost>): unknown;
  toObject(enumType: System.Type, value: number | StrongNumeric<UInt16Host>): unknown;
  toObject(enumType: System.Type, value: number | StrongNumeric<UInt32Host>): unknown;
  toObject(enumType: System.Type, value: number | StrongNumeric<Int64Host>): unknown;
  toObject(enumType: System.Type, value: number | StrongNumeric<UInt64Host>): unknown;
}

export {};
