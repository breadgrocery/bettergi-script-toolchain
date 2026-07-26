import type {
  ByteHost,
  CharHost,
  ClrHostValue,
  DecimalHost,
  DoubleHost,
  HostArray,
  HostType,
  Int16Host,
  Int32Host,
  Int64Host,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  SByteHost,
  SingleHost,
  StrongNumeric,
  UInt16Host,
  UInt32Host,
  UInt64Host,
  ValueTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import type { HostVariableRef } from "../../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../Collections/Generic/IEnumerable";
import "../IFormatProvider";
import "../ReadOnlyMemory";
import "../Runtime/Serialization/ISerializable";
import "../ValueType";
import "./CompositeFormat";

declare const stringBuilderBrand: unique symbol;
export interface StringBuilder
  extends ClrHostValue, System.Runtime.Serialization.ISerializableInput {
  readonly [stringBuilderBrand]: true;
  append(
    handler: HostVariableRef<StringBuilder_AppendInterpolatedStringHandler>
  ): System.Text.StringBuilder;
  append(
    provider: System.IFormatProvider | null,
    handler: HostVariableRef<StringBuilder_AppendInterpolatedStringHandler>
  ): System.Text.StringBuilder;
  append(value: HostArray<number | StrongNumeric<CharHost>> | null): System.Text.StringBuilder;
  append(
    value: HostArray<number | StrongNumeric<CharHost>> | null,
    startIndex: number | StrongNumeric<Int32Host>,
    charCount: number | StrongNumeric<Int32Host>
  ): System.Text.StringBuilder;
  append(value: System.ReadOnlyMemory<number>): System.Text.StringBuilder;
  append(value: System.Text.StringBuilder | null): System.Text.StringBuilder;
  append(
    value: System.Text.StringBuilder | null,
    startIndex: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): System.Text.StringBuilder;
  append(value: boolean): System.Text.StringBuilder;
  append(value: number | StrongNumeric<ByteHost>): System.Text.StringBuilder;
  append(value: number | StrongNumeric<CharHost>): System.Text.StringBuilder;
  append(
    value: number | StrongNumeric<CharHost>,
    repeatCount: number | StrongNumeric<Int32Host>
  ): System.Text.StringBuilder;
  append(value: number | StrongNumeric<DecimalHost>): System.Text.StringBuilder;
  append(value: number | StrongNumeric<DoubleHost>): System.Text.StringBuilder;
  append(value: number | StrongNumeric<Int16Host>): System.Text.StringBuilder;
  append(value: number | StrongNumeric<Int32Host>): System.Text.StringBuilder;
  append(value: number | StrongNumeric<Int64Host>): System.Text.StringBuilder;
  append(value: number | StrongNumeric<SByteHost>): System.Text.StringBuilder;
  append(value: number | StrongNumeric<SingleHost>): System.Text.StringBuilder;
  append(value: number | StrongNumeric<UInt16Host>): System.Text.StringBuilder;
  append(value: number | StrongNumeric<UInt32Host>): System.Text.StringBuilder;
  append(value: number | StrongNumeric<UInt64Host>): System.Text.StringBuilder;
  append(value: string | null): System.Text.StringBuilder;
  append(
    value: string | null,
    startIndex: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): System.Text.StringBuilder;
  append(value: unknown | null): System.Text.StringBuilder;
  appendFormat(format: string, ...args: unknown[]): System.Text.StringBuilder;
  appendFormat(format: string, arg0: unknown | null): System.Text.StringBuilder;
  appendFormat(
    format: string,
    arg0: unknown | null,
    arg1: unknown | null
  ): System.Text.StringBuilder;
  appendFormat(
    format: string,
    arg0: unknown | null,
    arg1: unknown | null,
    arg2: unknown | null
  ): System.Text.StringBuilder;
  appendFormat(format: string, args: HostArray<unknown>): System.Text.StringBuilder;
  appendFormat(
    provider: System.IFormatProvider | null,
    format: System.Text.CompositeFormat,
    ...args: unknown[]
  ): System.Text.StringBuilder;
  appendFormat(
    provider: System.IFormatProvider | null,
    format: System.Text.CompositeFormat,
    args: HostArray<unknown>
  ): System.Text.StringBuilder;
  appendFormat(
    provider: System.IFormatProvider | null,
    format: string,
    ...args: unknown[]
  ): System.Text.StringBuilder;
  appendFormat(
    provider: System.IFormatProvider | null,
    format: string,
    arg0: unknown | null
  ): System.Text.StringBuilder;
  appendFormat(
    provider: System.IFormatProvider | null,
    format: string,
    arg0: unknown | null,
    arg1: unknown | null
  ): System.Text.StringBuilder;
  appendFormat(
    provider: System.IFormatProvider | null,
    format: string,
    arg0: unknown | null,
    arg1: unknown | null,
    arg2: unknown | null
  ): System.Text.StringBuilder;
  appendFormat(
    provider: System.IFormatProvider | null,
    format: string,
    args: HostArray<unknown>
  ): System.Text.StringBuilder;
  appendFormat<TArg0, TArg1, TArg2>(
    type1: HostType<TArg0>,
    type2: HostType<TArg1>,
    type3: HostType<TArg2>,
    provider: System.IFormatProvider | null,
    format: System.Text.CompositeFormat,
    arg0: TArg0 | null,
    arg1: TArg1 | null,
    arg2: TArg2 | null
  ): System.Text.StringBuilder;
  appendFormat<TArg0, TArg1>(
    type1: HostType<TArg0>,
    type2: HostType<TArg1>,
    provider: System.IFormatProvider | null,
    format: System.Text.CompositeFormat,
    arg0: TArg0 | null,
    arg1: TArg1 | null
  ): System.Text.StringBuilder;
  appendFormat<TArg0>(
    type1: HostType<TArg0>,
    provider: System.IFormatProvider | null,
    format: System.Text.CompositeFormat,
    arg0: TArg0 | null
  ): System.Text.StringBuilder;
  appendJoin(
    separator: number | StrongNumeric<CharHost>,
    ...values: string[]
  ): System.Text.StringBuilder;
  appendJoin(
    separator: number | StrongNumeric<CharHost>,
    ...values: unknown[]
  ): System.Text.StringBuilder;
  appendJoin(
    separator: number | StrongNumeric<CharHost>,
    values: HostArray<string>
  ): System.Text.StringBuilder;
  appendJoin(
    separator: number | StrongNumeric<CharHost>,
    values: HostArray<unknown>
  ): System.Text.StringBuilder;
  appendJoin(separator: string | null, ...values: string[]): System.Text.StringBuilder;
  appendJoin(separator: string | null, ...values: unknown[]): System.Text.StringBuilder;
  appendJoin(separator: string | null, values: HostArray<string>): System.Text.StringBuilder;
  appendJoin(separator: string | null, values: HostArray<unknown>): System.Text.StringBuilder;
  appendJoin<T>(
    type1: HostType<T>,
    separator: number | StrongNumeric<CharHost>,
    values: System.Collections.Generic.IEnumerable<T>
  ): System.Text.StringBuilder;
  appendJoin<T>(
    type1: HostType<T>,
    separator: string | null,
    values: System.Collections.Generic.IEnumerable<T>
  ): System.Text.StringBuilder;
  appendLine(): System.Text.StringBuilder;
  appendLine(
    handler: HostVariableRef<StringBuilder_AppendInterpolatedStringHandler>
  ): System.Text.StringBuilder;
  appendLine(
    provider: System.IFormatProvider | null,
    handler: HostVariableRef<StringBuilder_AppendInterpolatedStringHandler>
  ): System.Text.StringBuilder;
  appendLine(value: string | null): System.Text.StringBuilder;
  capacity: number;
  clear(): System.Text.StringBuilder;
  copyTo(
    sourceIndex: number | StrongNumeric<Int32Host>,
    destination: HostArray<number | StrongNumeric<CharHost>>,
    destinationIndex: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): VoidResult;
  ensureCapacity(capacity: number | StrongNumeric<Int32Host>): number;
  equals(sb: System.Text.StringBuilder | null): boolean;
  getChunks(): StringBuilder_ChunkEnumerator;
  insert(
    index: number | StrongNumeric<Int32Host>,
    value: HostArray<number | StrongNumeric<CharHost>> | null
  ): System.Text.StringBuilder;
  insert(
    index: number | StrongNumeric<Int32Host>,
    value: HostArray<number | StrongNumeric<CharHost>> | null,
    startIndex: number | StrongNumeric<Int32Host>,
    charCount: number | StrongNumeric<Int32Host>
  ): System.Text.StringBuilder;
  insert(index: number | StrongNumeric<Int32Host>, value: boolean): System.Text.StringBuilder;
  insert(
    index: number | StrongNumeric<Int32Host>,
    value: number | StrongNumeric<ByteHost>
  ): System.Text.StringBuilder;
  insert(
    index: number | StrongNumeric<Int32Host>,
    value: number | StrongNumeric<CharHost>
  ): System.Text.StringBuilder;
  insert(
    index: number | StrongNumeric<Int32Host>,
    value: number | StrongNumeric<DecimalHost>
  ): System.Text.StringBuilder;
  insert(
    index: number | StrongNumeric<Int32Host>,
    value: number | StrongNumeric<DoubleHost>
  ): System.Text.StringBuilder;
  insert(
    index: number | StrongNumeric<Int32Host>,
    value: number | StrongNumeric<Int16Host>
  ): System.Text.StringBuilder;
  insert(
    index: number | StrongNumeric<Int32Host>,
    value: number | StrongNumeric<Int32Host>
  ): System.Text.StringBuilder;
  insert(
    index: number | StrongNumeric<Int32Host>,
    value: number | StrongNumeric<Int64Host>
  ): System.Text.StringBuilder;
  insert(
    index: number | StrongNumeric<Int32Host>,
    value: number | StrongNumeric<SByteHost>
  ): System.Text.StringBuilder;
  insert(
    index: number | StrongNumeric<Int32Host>,
    value: number | StrongNumeric<SingleHost>
  ): System.Text.StringBuilder;
  insert(
    index: number | StrongNumeric<Int32Host>,
    value: number | StrongNumeric<UInt16Host>
  ): System.Text.StringBuilder;
  insert(
    index: number | StrongNumeric<Int32Host>,
    value: number | StrongNumeric<UInt32Host>
  ): System.Text.StringBuilder;
  insert(
    index: number | StrongNumeric<Int32Host>,
    value: number | StrongNumeric<UInt64Host>
  ): System.Text.StringBuilder;
  insert(index: number | StrongNumeric<Int32Host>, value: string | null): System.Text.StringBuilder;
  insert(
    index: number | StrongNumeric<Int32Host>,
    value: string | null,
    count: number | StrongNumeric<Int32Host>
  ): System.Text.StringBuilder;
  insert(
    index: number | StrongNumeric<Int32Host>,
    value: unknown | null
  ): System.Text.StringBuilder;
  item: {
    (index: number | StrongNumeric<Int32Host>): number;
    get(index: number | StrongNumeric<Int32Host>): number;
    set(index: number | StrongNumeric<Int32Host>, value: number | StrongNumeric<CharHost>): number;
  };
  length: number;
  readonly maxCapacity: number;
  remove(
    startIndex: number | StrongNumeric<Int32Host>,
    length: number | StrongNumeric<Int32Host>
  ): System.Text.StringBuilder;
  replace(
    oldChar: number | StrongNumeric<CharHost>,
    newChar: number | StrongNumeric<CharHost>
  ): System.Text.StringBuilder;
  replace(
    oldChar: number | StrongNumeric<CharHost>,
    newChar: number | StrongNumeric<CharHost>,
    startIndex: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): System.Text.StringBuilder;
  replace(oldValue: string, newValue: string | null): System.Text.StringBuilder;
  replace(
    oldValue: string,
    newValue: string | null,
    startIndex: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): System.Text.StringBuilder;
  toString(): string;
  toString(
    startIndex: number | StrongNumeric<Int32Host>,
    length: number | StrongNumeric<Int32Host>
  ): string;
}

declare const stringBuilder_ChunkEnumeratorBrand: unique symbol;
export interface StringBuilder_ChunkEnumerator extends ClrHostValue {
  readonly [stringBuilder_ChunkEnumeratorBrand]: true;
  getEnumerator(): System.Text.StringBuilder.ChunkEnumerator;
  moveNext(): boolean;
  readonly current: System.ReadOnlyMemory<number>;
}

export interface StringBuilder_ChunkEnumeratorHostType extends HostType<
  StringBuilder_ChunkEnumerator,
  ValueTypeTrait
> {}

declare global {
  namespace System.Text.StringBuilder {
    type ChunkEnumerator = import("./StringBuilder").StringBuilder_ChunkEnumerator;
  }
}

declare const stringBuilder_AppendInterpolatedStringHandlerBrand: unique symbol;
export interface StringBuilder_AppendInterpolatedStringHandler extends ClrHostValue {
  readonly [stringBuilder_AppendInterpolatedStringHandlerBrand]: true;
  appendFormatted(value: string | null): VoidResult;
  appendFormatted(value: string | null): VoidResult;
  appendFormatted(value: string | null, alignment: number | StrongNumeric<Int32Host>): VoidResult;
  appendFormatted(
    value: string | null,
    alignment: number | StrongNumeric<Int32Host>,
    format: string | null
  ): VoidResult;
  appendFormatted(value: unknown | null): VoidResult;
  appendFormatted(value: unknown | null, alignment: number | StrongNumeric<Int32Host>): VoidResult;
  appendFormatted(
    value: unknown | null,
    alignment: number | StrongNumeric<Int32Host>,
    format: string | null
  ): VoidResult;
  appendFormatted<T>(type1: HostType<T>, value: T | null): VoidResult;
  appendFormatted<T>(
    type1: HostType<T>,
    value: T | null,
    alignment: number | StrongNumeric<Int32Host>
  ): VoidResult;
  appendFormatted<T>(
    type1: HostType<T>,
    value: T,
    alignment: number | StrongNumeric<Int32Host>,
    format: string | null
  ): VoidResult;
  appendFormatted<T>(type1: HostType<T>, value: T, format: string | null): VoidResult;
  appendLiteral(value: string): VoidResult;
}

export interface StringBuilder_AppendInterpolatedStringHandlerHostType extends HostType<
  StringBuilder_AppendInterpolatedStringHandler,
  ValueTypeTrait
> {
  new (
    literalLength: number | StrongNumeric<Int32Host>,
    formattedCount: number | StrongNumeric<Int32Host>,
    stringBuilder: System.Text.StringBuilder
  ): StringBuilder_AppendInterpolatedStringHandler;
  new (
    literalLength: number | StrongNumeric<Int32Host>,
    formattedCount: number | StrongNumeric<Int32Host>,
    stringBuilder: System.Text.StringBuilder,
    provider: System.IFormatProvider | null
  ): StringBuilder_AppendInterpolatedStringHandler;
}

declare global {
  namespace System.Text.StringBuilder {
    type AppendInterpolatedStringHandler =
      import("./StringBuilder").StringBuilder_AppendInterpolatedStringHandler;
  }
}

declare global {
  namespace System.Text {
    type StringBuilder = import("./StringBuilder").StringBuilder;
  }
}

export interface StringBuilderHostType extends HostType<
  StringBuilder,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): StringBuilder;
  new (capacity: number | StrongNumeric<Int32Host>): StringBuilder;
  new (value: string | null): StringBuilder;
  new (value: string | null, capacity: number | StrongNumeric<Int32Host>): StringBuilder;
  new (
    value: string | null,
    startIndex: number | StrongNumeric<Int32Host>,
    length: number | StrongNumeric<Int32Host>,
    capacity: number | StrongNumeric<Int32Host>
  ): StringBuilder;
  new (
    capacity: number | StrongNumeric<Int32Host>,
    maxCapacity: number | StrongNumeric<Int32Host>
  ): StringBuilder;
  readonly ChunkEnumerator: StringBuilder_ChunkEnumeratorHostType;
  readonly AppendInterpolatedStringHandler: StringBuilder_AppendInterpolatedStringHandlerHostType;
}

export {};
