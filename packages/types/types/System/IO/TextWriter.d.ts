import type {
  CharHost,
  DecimalHost,
  DoubleHost,
  HostArray,
  HostType,
  Int32Host,
  Int64Host,
  ReferenceTypeTrait,
  SingleHost,
  StrongNumeric,
  UInt32Host,
  UInt64Host
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../IAsyncDisposable";
import "../IDisposable";
import "../IFormatProvider";
import "../MarshalByRefObject";
import "../ReadOnlyMemory";
import "../Text/Encoding";
import "../Text/StringBuilder";
import "../Threading/CancellationToken";
import "../Threading/Tasks/ValueTask";

declare const textWriterBrand: unique symbol;
export interface TextWriter
  extends
    Omit<
      System.MarshalByRefObject,
      | "close"
      | "dispose"
      | "disposeAsync"
      | "encoding"
      | "flush"
      | "flushAsync"
      | "formatProvider"
      | "newLine"
      | "write"
      | "writeAsync"
      | "writeLine"
      | "writeLineAsync"
    >,
    System.IDisposableInput,
    System.IAsyncDisposableInput {
  readonly [textWriterBrand]: true;
  close(): VoidResult;
  dispose(): VoidResult;
  disposeAsync(): System.Threading.Tasks.ValueTask;
  flush(): VoidResult;
  flushAsync(): Promise<void>;
  flushAsync(cancellationToken: System.Threading.CancellationToken): Promise<void>;
  newLine: string;
  readonly encoding: System.Text.Encoding;
  readonly formatProvider: System.IFormatProvider;
  write(buffer: HostArray<number | StrongNumeric<CharHost>> | null): VoidResult;
  write(
    buffer: HostArray<number | StrongNumeric<CharHost>>,
    index: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): VoidResult;
  write(format: string, ...arg: unknown[]): VoidResult;
  write(format: string, arg0: unknown | null): VoidResult;
  write(format: string, arg0: unknown | null, arg1: unknown | null): VoidResult;
  write(
    format: string,
    arg0: unknown | null,
    arg1: unknown | null,
    arg2: unknown | null
  ): VoidResult;
  write(format: string, arg: HostArray<unknown>): VoidResult;
  write(value: System.Text.StringBuilder | null): VoidResult;
  write(value: boolean): VoidResult;
  write(value: number | StrongNumeric<CharHost>): VoidResult;
  write(value: number | StrongNumeric<DecimalHost>): VoidResult;
  write(value: number | StrongNumeric<DoubleHost>): VoidResult;
  write(value: number | StrongNumeric<Int32Host>): VoidResult;
  write(value: number | StrongNumeric<Int64Host>): VoidResult;
  write(value: number | StrongNumeric<SingleHost>): VoidResult;
  write(value: number | StrongNumeric<UInt32Host>): VoidResult;
  write(value: number | StrongNumeric<UInt64Host>): VoidResult;
  write(value: string | null): VoidResult;
  write(value: unknown | null): VoidResult;
  writeAsync(buffer: HostArray<number | StrongNumeric<CharHost>> | null): Promise<void>;
  writeAsync(
    buffer: HostArray<number | StrongNumeric<CharHost>>,
    index: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): Promise<void>;
  writeAsync(buffer: System.ReadOnlyMemory<number>): Promise<void>;
  writeAsync(
    buffer: System.ReadOnlyMemory<number>,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<void>;
  writeAsync(value: System.Text.StringBuilder | null): Promise<void>;
  writeAsync(
    value: System.Text.StringBuilder | null,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<void>;
  writeAsync(value: number | StrongNumeric<CharHost>): Promise<void>;
  writeAsync(value: string | null): Promise<void>;
  writeLine(): VoidResult;
  writeLine(buffer: HostArray<number | StrongNumeric<CharHost>> | null): VoidResult;
  writeLine(
    buffer: HostArray<number | StrongNumeric<CharHost>>,
    index: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): VoidResult;
  writeLine(format: string, ...arg: unknown[]): VoidResult;
  writeLine(format: string, arg0: unknown | null): VoidResult;
  writeLine(format: string, arg0: unknown | null, arg1: unknown | null): VoidResult;
  writeLine(
    format: string,
    arg0: unknown | null,
    arg1: unknown | null,
    arg2: unknown | null
  ): VoidResult;
  writeLine(format: string, arg: HostArray<unknown>): VoidResult;
  writeLine(value: System.Text.StringBuilder | null): VoidResult;
  writeLine(value: boolean): VoidResult;
  writeLine(value: number | StrongNumeric<CharHost>): VoidResult;
  writeLine(value: number | StrongNumeric<DecimalHost>): VoidResult;
  writeLine(value: number | StrongNumeric<DoubleHost>): VoidResult;
  writeLine(value: number | StrongNumeric<Int32Host>): VoidResult;
  writeLine(value: number | StrongNumeric<Int64Host>): VoidResult;
  writeLine(value: number | StrongNumeric<SingleHost>): VoidResult;
  writeLine(value: number | StrongNumeric<UInt32Host>): VoidResult;
  writeLine(value: number | StrongNumeric<UInt64Host>): VoidResult;
  writeLine(value: string | null): VoidResult;
  writeLine(value: unknown | null): VoidResult;
  writeLineAsync(): Promise<void>;
  writeLineAsync(buffer: HostArray<number | StrongNumeric<CharHost>> | null): Promise<void>;
  writeLineAsync(
    buffer: HostArray<number | StrongNumeric<CharHost>>,
    index: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): Promise<void>;
  writeLineAsync(buffer: System.ReadOnlyMemory<number>): Promise<void>;
  writeLineAsync(
    buffer: System.ReadOnlyMemory<number>,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<void>;
  writeLineAsync(value: System.Text.StringBuilder | null): Promise<void>;
  writeLineAsync(
    value: System.Text.StringBuilder | null,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<void>;
  writeLineAsync(value: number | StrongNumeric<CharHost>): Promise<void>;
  writeLineAsync(value: string | null): Promise<void>;
}

declare global {
  namespace System.IO {
    type TextWriter = import("./TextWriter").TextWriter;
  }
}

export interface TextWriterHostType extends HostType<TextWriter, ReferenceTypeTrait> {
  readonly null: System.IO.TextWriter;
  synchronized(writer: System.IO.TextWriter): System.IO.TextWriter;
}

export {};
