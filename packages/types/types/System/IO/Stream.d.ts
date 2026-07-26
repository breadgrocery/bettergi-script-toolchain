import type {
  ByteHost,
  EnumInput,
  HostArray,
  HostType,
  Int32Host,
  Int64Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../AsyncCallback";
import "../IAsyncDisposable";
import "../IAsyncResult";
import "../IDisposable";
import "../MarshalByRefObject";
import "../Memory";
import "../ReadOnlyMemory";
import "../Threading/CancellationToken";
import "../Threading/Tasks/ValueTask";
import "./SeekOrigin";

declare const streamBrand: unique symbol;
export interface Stream
  extends
    Omit<
      System.MarshalByRefObject,
      | "beginRead"
      | "beginWrite"
      | "canRead"
      | "canSeek"
      | "canTimeout"
      | "canWrite"
      | "close"
      | "copyTo"
      | "copyToAsync"
      | "dispose"
      | "disposeAsync"
      | "endRead"
      | "endWrite"
      | "flush"
      | "flushAsync"
      | "length"
      | "position"
      | "read"
      | "readAsync"
      | "readAtLeast"
      | "readAtLeastAsync"
      | "readByte"
      | "readExactly"
      | "readExactlyAsync"
      | "readTimeout"
      | "seek"
      | "setLength"
      | "write"
      | "writeAsync"
      | "writeByte"
      | "writeTimeout"
    >,
    System.IDisposableInput,
    System.IAsyncDisposableInput {
  readonly [streamBrand]: true;
  beginRead(
    buffer: HostArray<number | StrongNumeric<ByteHost>>,
    offset: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>,
    callback: System.AsyncCallback | null,
    state: unknown | null
  ): System.IAsyncResult;
  beginWrite(
    buffer: HostArray<number | StrongNumeric<ByteHost>>,
    offset: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>,
    callback: System.AsyncCallback | null,
    state: unknown | null
  ): System.IAsyncResult;
  close(): VoidResult;
  copyTo(destination: System.IO.Stream): VoidResult;
  copyTo(destination: System.IO.Stream, bufferSize: number | StrongNumeric<Int32Host>): VoidResult;
  copyToAsync(destination: System.IO.Stream): Promise<void>;
  copyToAsync(
    destination: System.IO.Stream,
    bufferSize: number | StrongNumeric<Int32Host>
  ): Promise<void>;
  copyToAsync(
    destination: System.IO.Stream,
    bufferSize: number | StrongNumeric<Int32Host>,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<void>;
  copyToAsync(
    destination: System.IO.Stream,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<void>;
  dispose(): VoidResult;
  disposeAsync(): System.Threading.Tasks.ValueTask;
  endRead(asyncResult: System.IAsyncResult): number;
  endWrite(asyncResult: System.IAsyncResult): VoidResult;
  flush(): VoidResult;
  flushAsync(): Promise<void>;
  flushAsync(cancellationToken: System.Threading.CancellationToken): Promise<void>;
  position: number;
  read(
    buffer: HostArray<number | StrongNumeric<ByteHost>>,
    offset: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): number;
  readAsync(
    buffer: HostArray<number | StrongNumeric<ByteHost>>,
    offset: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): Promise<number>;
  readAsync(
    buffer: HostArray<number | StrongNumeric<ByteHost>>,
    offset: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<number>;
  readAsync(buffer: System.Memory<number>): System.Threading.Tasks.ValueTask<number>;
  readAsync(
    buffer: System.Memory<number>,
    cancellationToken: System.Threading.CancellationToken
  ): System.Threading.Tasks.ValueTask<number>;
  readAtLeastAsync(
    buffer: System.Memory<number>,
    minimumBytes: number | StrongNumeric<Int32Host>
  ): System.Threading.Tasks.ValueTask<number>;
  readAtLeastAsync(
    buffer: System.Memory<number>,
    minimumBytes: number | StrongNumeric<Int32Host>,
    throwOnEndOfStream: boolean
  ): System.Threading.Tasks.ValueTask<number>;
  readAtLeastAsync(
    buffer: System.Memory<number>,
    minimumBytes: number | StrongNumeric<Int32Host>,
    throwOnEndOfStream: boolean,
    cancellationToken: System.Threading.CancellationToken
  ): System.Threading.Tasks.ValueTask<number>;
  readByte(): number;
  readExactly(
    buffer: HostArray<number | StrongNumeric<ByteHost>>,
    offset: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): VoidResult;
  readExactlyAsync(
    buffer: HostArray<number | StrongNumeric<ByteHost>>,
    offset: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): System.Threading.Tasks.ValueTask;
  readExactlyAsync(
    buffer: HostArray<number | StrongNumeric<ByteHost>>,
    offset: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>,
    cancellationToken: System.Threading.CancellationToken
  ): System.Threading.Tasks.ValueTask;
  readExactlyAsync(buffer: System.Memory<number>): System.Threading.Tasks.ValueTask;
  readExactlyAsync(
    buffer: System.Memory<number>,
    cancellationToken: System.Threading.CancellationToken
  ): System.Threading.Tasks.ValueTask;
  readTimeout: number;
  readonly canRead: boolean;
  readonly canSeek: boolean;
  readonly canTimeout: boolean;
  readonly canWrite: boolean;
  readonly length: number;
  seek(offset: number | StrongNumeric<Int64Host>, origin: EnumInput<System.IO.SeekOrigin>): number;
  setLength(value: number | StrongNumeric<Int64Host>): VoidResult;
  write(
    buffer: HostArray<number | StrongNumeric<ByteHost>>,
    offset: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): VoidResult;
  writeAsync(
    buffer: HostArray<number | StrongNumeric<ByteHost>>,
    offset: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): Promise<void>;
  writeAsync(
    buffer: HostArray<number | StrongNumeric<ByteHost>>,
    offset: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<void>;
  writeAsync(buffer: System.ReadOnlyMemory<number>): System.Threading.Tasks.ValueTask;
  writeAsync(
    buffer: System.ReadOnlyMemory<number>,
    cancellationToken: System.Threading.CancellationToken
  ): System.Threading.Tasks.ValueTask;
  writeByte(value: number | StrongNumeric<ByteHost>): VoidResult;
  writeTimeout: number;
}

declare global {
  namespace System.IO {
    type Stream = import("./Stream").Stream;
  }
}

export interface StreamHostType extends HostType<Stream, ReferenceTypeTrait> {
  readonly null: System.IO.Stream;
  synchronized(stream: System.IO.Stream): System.IO.Stream;
}

export {};
