import type {
  ByteHost,
  HostArray,
  HostType,
  Int32Host,
  Int64Host,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/Collections/Generic/IEnumerator";
import "../System/Collections/IEnumerator";
import "../System/IDisposable";
import "../System/IEquatable";
import "../System/IntPtr";
import "./DisposableCvObject";
import "./FileNode";
import "./ICvPtrHolder";

declare const fileNodeIteratorBrand: unique symbol;
export interface FileNodeIterator
  extends
    Omit<
      OpenCvSharp.DisposableCvObject,
      "current" | "equals" | "getHashCode" | "lessThan" | "minus" | "moveNext" | "readRaw" | "reset"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput,
    System.Collections.Generic.IEnumeratorInput<OpenCvSharp.FileNode>,
    System.Collections.IEnumeratorInput {
  readonly [fileNodeIteratorBrand]: true;
  readonly current: OpenCvSharp.FileNode;
  reset(): VoidResult;
  moveNext(): boolean;
  moveNext(ofs: number | StrongNumeric<Int32Host>): boolean;
  readRaw(
    fmt: string,
    vec: HostArray<number | StrongNumeric<ByteHost>>
  ): OpenCvSharp.FileNodeIterator;
  readRaw(
    fmt: string,
    vec: HostArray<number | StrongNumeric<ByteHost>>,
    maxCount: number | StrongNumeric<Int64Host>
  ): OpenCvSharp.FileNodeIterator;
  readRaw(fmt: string, vec: System.IntPtr): OpenCvSharp.FileNodeIterator;
  readRaw(
    fmt: string,
    vec: System.IntPtr,
    maxCount: number | StrongNumeric<Int64Host>
  ): OpenCvSharp.FileNodeIterator;
  equals(obj: unknown | null): boolean;
  equals(other: OpenCvSharp.FileNodeIterator | null): boolean;
  getHashCode(): number;
  minus(it: OpenCvSharp.FileNodeIterator): number;
  lessThan(it: OpenCvSharp.FileNodeIterator): boolean;
}

declare global {
  namespace OpenCvSharp {
    type FileNodeIterator = import("./FileNodeIterator").FileNodeIterator;
  }
}

export interface FileNodeIteratorHostType extends HostType<
  FileNodeIterator,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): FileNodeIterator;
  new (ptr: System.IntPtr): FileNodeIterator;
}

export {};
