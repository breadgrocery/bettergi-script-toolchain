import type {
  CharHost,
  HostArray,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../IAsyncDisposable";
import "../IDisposable";
import "../ReadOnlyMemory";
import "../Text/Encoding";
import "../Threading/CancellationToken";
import "../Threading/Tasks/ValueTask";
import "./FileStreamOptions";
import "./Stream";
import "./TextWriter";

declare const streamWriterBrand: unique symbol;
export interface StreamWriter
  extends
    Omit<
      System.IO.TextWriter,
      | "autoFlush"
      | "baseStream"
      | "close"
      | "disposeAsync"
      | "encoding"
      | "flush"
      | "flushAsync"
      | "write"
      | "writeAsync"
      | "writeLine"
      | "writeLineAsync"
    >,
    System.IDisposableInput,
    System.IAsyncDisposableInput {
  readonly [streamWriterBrand]: true;
  autoFlush: boolean;
  close(): VoidResult;
  disposeAsync(): System.Threading.Tasks.ValueTask;
  flush(): VoidResult;
  flushAsync(): Promise<void>;
  flushAsync(cancellationToken: System.Threading.CancellationToken): Promise<void>;
  readonly baseStream: System.IO.Stream;
  readonly encoding: System.Text.Encoding;
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
  write(value: number | StrongNumeric<CharHost>): VoidResult;
  write(value: string | null): VoidResult;
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
  writeAsync(value: number | StrongNumeric<CharHost>): Promise<void>;
  writeAsync(value: string | null): Promise<void>;
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
  writeLine(value: string | null): VoidResult;
  writeLineAsync(): Promise<void>;
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
  writeLineAsync(value: number | StrongNumeric<CharHost>): Promise<void>;
  writeLineAsync(value: string | null): Promise<void>;
}

declare global {
  namespace System.IO {
    type StreamWriter = import("./StreamWriter").StreamWriter;
  }
}

export interface StreamWriterHostType extends HostType<StreamWriter, ReferenceTypeTrait> {
  new (stream: System.IO.Stream): StreamWriter;
  new (stream: System.IO.Stream, encoding: System.Text.Encoding): StreamWriter;
  new (
    stream: System.IO.Stream,
    encoding: System.Text.Encoding,
    bufferSize: number | StrongNumeric<Int32Host>
  ): StreamWriter;
  new (stream: System.IO.Stream): StreamWriter;
  new (stream: System.IO.Stream, encoding: System.Text.Encoding | null): StreamWriter;
  new (
    stream: System.IO.Stream,
    encoding: System.Text.Encoding | null,
    bufferSize: number | StrongNumeric<Int32Host>
  ): StreamWriter;
  new (
    stream: System.IO.Stream,
    encoding: System.Text.Encoding | null,
    bufferSize: number | StrongNumeric<Int32Host>,
    leaveOpen: boolean
  ): StreamWriter;
  new (path: string): StreamWriter;
  new (path: string, append: boolean): StreamWriter;
  new (path: string, append: boolean, encoding: System.Text.Encoding): StreamWriter;
  new (
    path: string,
    append: boolean,
    encoding: System.Text.Encoding,
    bufferSize: number | StrongNumeric<Int32Host>
  ): StreamWriter;
  new (path: string, options: System.IO.FileStreamOptions): StreamWriter;
  new (
    path: string,
    encoding: System.Text.Encoding,
    options: System.IO.FileStreamOptions
  ): StreamWriter;
  readonly null: System.IO.StreamWriter;
}

export {};
