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
import "../MarshalByRefObject";
import "../Memory";
import "../Threading/CancellationToken";
import "../Threading/Tasks/ValueTask";

declare const textReaderBrand: unique symbol;
export interface TextReader
  extends
    Omit<
      System.MarshalByRefObject,
      | "close"
      | "dispose"
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
  readonly [textReaderBrand]: true;
  close(): VoidResult;
  dispose(): VoidResult;
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
}

declare global {
  namespace System.IO {
    type TextReader = import("./TextReader").TextReader;
  }
}

export interface TextReaderHostType extends HostType<TextReader, ReferenceTypeTrait> {
  readonly null: System.IO.TextReader;
  synchronized(reader: System.IO.TextReader): System.IO.TextReader;
}

export {};
