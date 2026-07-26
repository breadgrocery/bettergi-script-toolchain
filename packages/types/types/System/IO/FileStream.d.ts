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
import "../../Microsoft/Win32/SafeHandles/SafeFileHandle";
import "../AsyncCallback";
import "../IAsyncDisposable";
import "../IAsyncResult";
import "../IDisposable";
import "../IntPtr";
import "../Memory";
import "../ReadOnlyMemory";
import "../Threading/CancellationToken";
import "../Threading/Tasks/ValueTask";
import "./FileAccess";
import "./FileMode";
import "./FileOptions";
import "./FileShare";
import "./FileStreamOptions";
import "./SeekOrigin";
import "./Stream";

declare const fileStreamBrand: unique symbol;
export interface FileStream
  extends
    Omit<
      System.IO.Stream,
      | "beginRead"
      | "beginWrite"
      | "canRead"
      | "canSeek"
      | "canWrite"
      | "copyTo"
      | "copyToAsync"
      | "disposeAsync"
      | "endRead"
      | "endWrite"
      | "flush"
      | "flushAsync"
      | "handle"
      | "isAsync"
      | "length"
      | "lock"
      | "name"
      | "position"
      | "read"
      | "readAsync"
      | "readByte"
      | "safeFileHandle"
      | "seek"
      | "setLength"
      | "unlock"
      | "write"
      | "writeAsync"
      | "writeByte"
    >,
    System.IDisposableInput,
    System.IAsyncDisposableInput {
  readonly [fileStreamBrand]: true;
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
  copyTo(destination: System.IO.Stream, bufferSize: number | StrongNumeric<Int32Host>): VoidResult;
  copyToAsync(
    destination: System.IO.Stream,
    bufferSize: number | StrongNumeric<Int32Host>,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<void>;
  disposeAsync(): System.Threading.Tasks.ValueTask;
  endRead(asyncResult: System.IAsyncResult): number;
  endWrite(asyncResult: System.IAsyncResult): VoidResult;
  flush(): VoidResult;
  flush(flushToDisk: boolean): VoidResult;
  flushAsync(cancellationToken: System.Threading.CancellationToken): Promise<void>;
  lock(
    position: number | StrongNumeric<Int64Host>,
    length: number | StrongNumeric<Int64Host>
  ): VoidResult;
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
  readonly handle: System.IntPtr;
  readonly isAsync: boolean;
  readonly length: number;
  readonly name: string;
  readonly safeFileHandle: Microsoft.Win32.SafeHandles.SafeFileHandle;
  seek(offset: number | StrongNumeric<Int64Host>, origin: EnumInput<System.IO.SeekOrigin>): number;
  setLength(value: number | StrongNumeric<Int64Host>): VoidResult;
  unlock(
    position: number | StrongNumeric<Int64Host>,
    length: number | StrongNumeric<Int64Host>
  ): VoidResult;
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
}

declare global {
  namespace System.IO {
    type FileStream = import("./FileStream").FileStream;
  }
}

export interface FileStreamHostType extends HostType<FileStream, ReferenceTypeTrait> {
  new (handle: System.IntPtr, access: EnumInput<System.IO.FileAccess>): FileStream;
  new (
    handle: System.IntPtr,
    access: EnumInput<System.IO.FileAccess>,
    ownsHandle: boolean
  ): FileStream;
  new (
    handle: System.IntPtr,
    access: EnumInput<System.IO.FileAccess>,
    ownsHandle: boolean,
    bufferSize: number | StrongNumeric<Int32Host>
  ): FileStream;
  new (
    handle: System.IntPtr,
    access: EnumInput<System.IO.FileAccess>,
    ownsHandle: boolean,
    bufferSize: number | StrongNumeric<Int32Host>,
    isAsync: boolean
  ): FileStream;
  new (
    handle: Microsoft.Win32.SafeHandles.SafeFileHandle,
    access: EnumInput<System.IO.FileAccess>
  ): FileStream;
  new (
    handle: Microsoft.Win32.SafeHandles.SafeFileHandle,
    access: EnumInput<System.IO.FileAccess>,
    bufferSize: number | StrongNumeric<Int32Host>
  ): FileStream;
  new (
    handle: Microsoft.Win32.SafeHandles.SafeFileHandle,
    access: EnumInput<System.IO.FileAccess>,
    bufferSize: number | StrongNumeric<Int32Host>,
    isAsync: boolean
  ): FileStream;
  new (path: string, mode: EnumInput<System.IO.FileMode>): FileStream;
  new (
    path: string,
    mode: EnumInput<System.IO.FileMode>,
    access: EnumInput<System.IO.FileAccess>
  ): FileStream;
  new (
    path: string,
    mode: EnumInput<System.IO.FileMode>,
    access: EnumInput<System.IO.FileAccess>,
    share: EnumInput<System.IO.FileShare>
  ): FileStream;
  new (
    path: string,
    mode: EnumInput<System.IO.FileMode>,
    access: EnumInput<System.IO.FileAccess>,
    share: EnumInput<System.IO.FileShare>,
    bufferSize: number | StrongNumeric<Int32Host>
  ): FileStream;
  new (
    path: string,
    mode: EnumInput<System.IO.FileMode>,
    access: EnumInput<System.IO.FileAccess>,
    share: EnumInput<System.IO.FileShare>,
    bufferSize: number | StrongNumeric<Int32Host>,
    useAsync: boolean
  ): FileStream;
  new (
    path: string,
    mode: EnumInput<System.IO.FileMode>,
    access: EnumInput<System.IO.FileAccess>,
    share: EnumInput<System.IO.FileShare>,
    bufferSize: number | StrongNumeric<Int32Host>,
    options: EnumInput<System.IO.FileOptions>
  ): FileStream;
  new (path: string, options: System.IO.FileStreamOptions): FileStream;
}

export {};
