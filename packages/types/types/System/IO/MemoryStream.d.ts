import type {
  ByteHost,
  EnumInput,
  HostArray,
  HostType,
  Int32Host,
  Int64Host,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../ArraySegment";
import "../IAsyncDisposable";
import "../IDisposable";
import "../Memory";
import "../ReadOnlyMemory";
import "../Threading/CancellationToken";
import "../Threading/Tasks/ValueTask";
import "./SeekOrigin";
import "./Stream";

declare const memoryStreamBrand: unique symbol;
export interface MemoryStream
  extends
    Omit<
      System.IO.Stream,
      | "canRead"
      | "canSeek"
      | "canWrite"
      | "capacity"
      | "copyTo"
      | "copyToAsync"
      | "flush"
      | "flushAsync"
      | "getBuffer"
      | "length"
      | "position"
      | "read"
      | "readAsync"
      | "readByte"
      | "seek"
      | "setLength"
      | "toArray"
      | "tryGetBuffer"
      | "write"
      | "writeAsync"
      | "writeByte"
      | "writeTo"
    >,
    System.IDisposableInput,
    System.IAsyncDisposableInput {
  readonly [memoryStreamBrand]: true;
  capacity: number;
  copyTo(destination: System.IO.Stream, bufferSize: number | StrongNumeric<Int32Host>): VoidResult;
  copyToAsync(
    destination: System.IO.Stream,
    bufferSize: number | StrongNumeric<Int32Host>,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<void>;
  flush(): VoidResult;
  flushAsync(cancellationToken: System.Threading.CancellationToken): Promise<void>;
  getBuffer(): HostArray<number>;
  position: number;
  read(
    buffer: HostArray<number | StrongNumeric<ByteHost>>,
    offset: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): number;
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
  readByte(): number;
  readonly canRead: boolean;
  readonly canSeek: boolean;
  readonly canWrite: boolean;
  readonly length: number;
  seek(offset: number | StrongNumeric<Int64Host>, loc: EnumInput<System.IO.SeekOrigin>): number;
  setLength(value: number | StrongNumeric<Int64Host>): VoidResult;
  toArray(): HostArray<number>;
  tryGetBuffer(buffer: HostVariableOut<System.ArraySegment<number>>): boolean;
  write(
    buffer: HostArray<number | StrongNumeric<ByteHost>>,
    offset: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): VoidResult;
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
  writeTo(stream: System.IO.Stream): VoidResult;
}

declare global {
  namespace System.IO {
    type MemoryStream = import("./MemoryStream").MemoryStream;
  }
}

export interface MemoryStreamHostType extends HostType<
  MemoryStream,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): MemoryStream;
  new (capacity: number | StrongNumeric<Int32Host>): MemoryStream;
  new (buffer: HostArray<number | StrongNumeric<ByteHost>>): MemoryStream;
  new (buffer: HostArray<number | StrongNumeric<ByteHost>>, writable: boolean): MemoryStream;
  new (
    buffer: HostArray<number | StrongNumeric<ByteHost>>,
    index: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): MemoryStream;
  new (
    buffer: HostArray<number | StrongNumeric<ByteHost>>,
    index: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>,
    writable: boolean
  ): MemoryStream;
  new (
    buffer: HostArray<number | StrongNumeric<ByteHost>>,
    index: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>,
    writable: boolean,
    publiclyVisible: boolean
  ): MemoryStream;
}

export {};
