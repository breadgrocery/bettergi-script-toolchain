import type {
  ByteHost,
  ClrHostValue,
  HostArray,
  HostType,
  Int16Host,
  Int32Host,
  StrongNumeric,
  UInt16Host,
  UInt32Host,
  ValueTypeTrait
} from "../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../Microsoft/ClearScript/HostVariable";
import "./IComparable";
import "./IEquatable";
import "./IFormatProvider";
import "./IFormattable";
import "./IParsable";
import "./ISpanFormattable";
import "./ISpanParsable";
import "./IUtf8SpanFormattable";
import "./ValueType";

declare const guidBrand: unique symbol;
export interface Guid
  extends
    ClrHostValue,
    System.ISpanFormattableInput,
    System.IFormattableInput,
    System.IComparableInput,
    System.IUtf8SpanFormattableInput {
  readonly [guidBrand]: true;
  compareTo(value: System.Guid): number;
  compareTo(value: unknown | null): number;
  equals(g: System.Guid): boolean;
  equals(o: unknown | null): boolean;
  getHashCode(): number;
  toByteArray(): HostArray<number>;
  toByteArray(bigEndian: boolean): HostArray<number>;
  toString(): string;
  toString(format: string | null): string;
  toString(format: string | null, provider: System.IFormatProvider | null): string;
}

declare global {
  namespace System {
    type Guid = import("./Guid").Guid;
  }
}

export interface GuidHostType extends HostType<Guid, ValueTypeTrait> {
  new (b: HostArray<number | StrongNumeric<ByteHost>>): Guid;
  new (
    a: number | StrongNumeric<UInt32Host>,
    b: number | StrongNumeric<UInt16Host>,
    c: number | StrongNumeric<UInt16Host>,
    d: number | StrongNumeric<ByteHost>,
    e: number | StrongNumeric<ByteHost>,
    f: number | StrongNumeric<ByteHost>,
    g: number | StrongNumeric<ByteHost>,
    h: number | StrongNumeric<ByteHost>,
    i: number | StrongNumeric<ByteHost>,
    j: number | StrongNumeric<ByteHost>,
    k: number | StrongNumeric<ByteHost>
  ): Guid;
  new (
    a: number | StrongNumeric<Int32Host>,
    b: number | StrongNumeric<Int16Host>,
    c: number | StrongNumeric<Int16Host>,
    d: HostArray<number | StrongNumeric<ByteHost>>
  ): Guid;
  new (
    a: number | StrongNumeric<Int32Host>,
    b: number | StrongNumeric<Int16Host>,
    c: number | StrongNumeric<Int16Host>,
    d: number | StrongNumeric<ByteHost>,
    e: number | StrongNumeric<ByteHost>,
    f: number | StrongNumeric<ByteHost>,
    g: number | StrongNumeric<ByteHost>,
    h: number | StrongNumeric<ByteHost>,
    i: number | StrongNumeric<ByteHost>,
    j: number | StrongNumeric<ByteHost>,
    k: number | StrongNumeric<ByteHost>
  ): Guid;
  new (g: string): Guid;
  readonly empty: System.Guid;
  parse(input: string): System.Guid;
  tryParse(input: string | null, result: HostVariableOut<System.Guid>): boolean;
  parseExact(input: string, format: string): System.Guid;
  tryParseExact(
    input: string | null,
    format: string | null,
    result: HostVariableOut<System.Guid>
  ): boolean;
  parse(s: string, provider: System.IFormatProvider | null): System.Guid;
  tryParse(
    s: string | null,
    provider: System.IFormatProvider | null,
    result: HostVariableOut<System.Guid>
  ): boolean;
  newGuid(): System.Guid;
}

export {};
