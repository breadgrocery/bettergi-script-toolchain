import type {
  CharHost,
  HostArray,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../IDisposable";
import "../Memory";
import "../Text/Encoding";
import "../Threading/CancellationToken";
import "../Threading/Tasks/ValueTask";
import "./FileStreamOptions";
import "./Stream";
import "./TextReader";

declare const streamReaderBrand: unique symbol;
export interface StreamReader
  extends
    Omit<
      System.IO.TextReader,
      | "baseStream"
      | "close"
      | "currentEncoding"
      | "discardBufferedData"
      | "endOfStream"
      | "peek"
      | "read"
      | "readAsync"
      | "readBlock"
      | "readBlockAsync"
      | "readLine"
      | "readLineAsync"
      | "readToEnd"
      | "readToEndAsync"
    >,
    System.IDisposableInput {
  readonly [streamReaderBrand]: true;
  close(): VoidResult;
  discardBufferedData(): VoidResult;
  peek(): number;
  read(): number;
  read(
    buffer: HostArray<number | StrongNumeric<CharHost>>,
    index: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): number;
  readAsync(
    buffer: HostArray<number | StrongNumeric<CharHost>>,
    index: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): Promise<number>;
  readAsync(buffer: System.Memory<number>): System.Threading.Tasks.ValueTask<number>;
  readAsync(
    buffer: System.Memory<number>,
    cancellationToken: System.Threading.CancellationToken
  ): System.Threading.Tasks.ValueTask<number>;
  readBlock(
    buffer: HostArray<number | StrongNumeric<CharHost>>,
    index: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): number;
  readBlockAsync(
    buffer: HostArray<number | StrongNumeric<CharHost>>,
    index: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): Promise<number>;
  readBlockAsync(buffer: System.Memory<number>): System.Threading.Tasks.ValueTask<number>;
  readBlockAsync(
    buffer: System.Memory<number>,
    cancellationToken: System.Threading.CancellationToken
  ): System.Threading.Tasks.ValueTask<number>;
  readLine(): string;
  readLineAsync(): Promise<string>;
  readLineAsync(
    cancellationToken: System.Threading.CancellationToken
  ): System.Threading.Tasks.ValueTask<string>;
  readToEnd(): string;
  readToEndAsync(): Promise<string>;
  readToEndAsync(cancellationToken: System.Threading.CancellationToken): Promise<string>;
  readonly baseStream: System.IO.Stream;
  readonly currentEncoding: System.Text.Encoding;
  readonly endOfStream: boolean;
}

declare global {
  namespace System.IO {
    type StreamReader = import("./StreamReader").StreamReader;
  }
}

export interface StreamReaderHostType extends HostType<StreamReader, ReferenceTypeTrait> {
  new (stream: System.IO.Stream): StreamReader;
  new (stream: System.IO.Stream, detectEncodingFromByteOrderMarks: boolean): StreamReader;
  new (stream: System.IO.Stream, encoding: System.Text.Encoding): StreamReader;
  new (
    stream: System.IO.Stream,
    encoding: System.Text.Encoding,
    detectEncodingFromByteOrderMarks: boolean
  ): StreamReader;
  new (
    stream: System.IO.Stream,
    encoding: System.Text.Encoding,
    detectEncodingFromByteOrderMarks: boolean,
    bufferSize: number | StrongNumeric<Int32Host>
  ): StreamReader;
  new (stream: System.IO.Stream): StreamReader;
  new (stream: System.IO.Stream, encoding: System.Text.Encoding | null): StreamReader;
  new (
    stream: System.IO.Stream,
    encoding: System.Text.Encoding | null,
    detectEncodingFromByteOrderMarks: boolean
  ): StreamReader;
  new (
    stream: System.IO.Stream,
    encoding: System.Text.Encoding | null,
    detectEncodingFromByteOrderMarks: boolean,
    bufferSize: number | StrongNumeric<Int32Host>
  ): StreamReader;
  new (
    stream: System.IO.Stream,
    encoding: System.Text.Encoding | null,
    detectEncodingFromByteOrderMarks: boolean,
    bufferSize: number | StrongNumeric<Int32Host>,
    leaveOpen: boolean
  ): StreamReader;
  new (path: string): StreamReader;
  new (path: string, detectEncodingFromByteOrderMarks: boolean): StreamReader;
  new (path: string, encoding: System.Text.Encoding): StreamReader;
  new (
    path: string,
    encoding: System.Text.Encoding,
    detectEncodingFromByteOrderMarks: boolean
  ): StreamReader;
  new (
    path: string,
    encoding: System.Text.Encoding,
    detectEncodingFromByteOrderMarks: boolean,
    bufferSize: number | StrongNumeric<Int32Host>
  ): StreamReader;
  new (path: string, options: System.IO.FileStreamOptions): StreamReader;
  new (
    path: string,
    encoding: System.Text.Encoding,
    detectEncodingFromByteOrderMarks: boolean,
    options: System.IO.FileStreamOptions
  ): StreamReader;
  readonly null: System.IO.StreamReader;
}

export {};
