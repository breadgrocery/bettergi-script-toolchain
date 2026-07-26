import type {
  DoubleHost,
  HostArray,
  HostType,
  Int32Host,
  Int64Host,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/Collections/Generic/IEnumerable";
import "../System/IDisposable";
import "../System/IntPtr";
import "../System/Nullable";
import "./DisposableCvObject";
import "./ICvPtrHolder";
import "./Mat";
import "./MatType";
import "./SparseMatIndexer";

declare const sparseMatBrand: unique symbol;
export interface SparseMat
  extends
    Omit<
      OpenCvSharp.DisposableCvObject,
      | "addRef"
      | "assignFrom"
      | "assignTo"
      | "channels"
      | "clear"
      | "clone"
      | "convertTo"
      | "copyTo"
      | "create"
      | "depth"
      | "dims"
      | "elemSize"
      | "elemSize1"
      | "find"
      | "get"
      | "getIndexer"
      | "hash"
      | "nzCount"
      | "ptr"
      | "ref"
      | "release"
      | "set"
      | "size"
      | "toString"
      | "type"
      | "value"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [sparseMatBrand]: true;
  release(): VoidResult;
  assignFrom(m: OpenCvSharp.Mat): OpenCvSharp.SparseMat;
  assignFrom(m: OpenCvSharp.SparseMat): OpenCvSharp.SparseMat;
  clone(): OpenCvSharp.SparseMat;
  copyTo(m: OpenCvSharp.Mat): VoidResult;
  copyTo(m: OpenCvSharp.SparseMat): VoidResult;
  convertTo(m: OpenCvSharp.Mat, rtype: OpenCvSharp.MatType): VoidResult;
  convertTo(
    m: OpenCvSharp.Mat,
    rtype: OpenCvSharp.MatType,
    alpha: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  convertTo(
    m: OpenCvSharp.Mat,
    rtype: OpenCvSharp.MatType,
    alpha: number | StrongNumeric<DoubleHost>,
    beta: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  convertTo(m: OpenCvSharp.SparseMat, rtype: OpenCvSharp.MatType): VoidResult;
  convertTo(
    m: OpenCvSharp.SparseMat,
    rtype: OpenCvSharp.MatType,
    alpha: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  assignTo(m: OpenCvSharp.SparseMat): VoidResult;
  assignTo(m: OpenCvSharp.SparseMat, type: OpenCvSharp.MatType | null | null): VoidResult;
  create(type: OpenCvSharp.MatType, ...sizes: (number | StrongNumeric<Int32Host>)[]): VoidResult;
  create(
    type: OpenCvSharp.MatType,
    sizes: HostArray<number | StrongNumeric<Int32Host>>
  ): VoidResult;
  clear(): VoidResult;
  addRef(): VoidResult;
  elemSize(): number;
  elemSize1(): number;
  type(): OpenCvSharp.MatType;
  depth(): number;
  dims(): number;
  channels(): number;
  size(): HostArray<number>;
  size(dim: number | StrongNumeric<Int32Host>): number;
  nzCount(): number;
  hash(...idx: (number | StrongNumeric<Int32Host>)[]): number;
  hash(i0: number | StrongNumeric<Int32Host>): number;
  hash(i0: number | StrongNumeric<Int32Host>, i1: number | StrongNumeric<Int32Host>): number;
  hash(
    i0: number | StrongNumeric<Int32Host>,
    i1: number | StrongNumeric<Int32Host>,
    i2: number | StrongNumeric<Int32Host>
  ): number;
  hash(idx: HostArray<number | StrongNumeric<Int32Host>>): number;
  ptr(i0: number | StrongNumeric<Int32Host>, createMissing: boolean): System.IntPtr;
  ptr(
    i0: number | StrongNumeric<Int32Host>,
    createMissing: boolean,
    hashVal: number | StrongNumeric<Int64Host> | null | null
  ): System.IntPtr;
  ptr(
    i0: number | StrongNumeric<Int32Host>,
    i1: number | StrongNumeric<Int32Host>,
    createMissing: boolean
  ): System.IntPtr;
  ptr(
    i0: number | StrongNumeric<Int32Host>,
    i1: number | StrongNumeric<Int32Host>,
    createMissing: boolean,
    hashVal: number | StrongNumeric<Int64Host> | null | null
  ): System.IntPtr;
  ptr(
    i0: number | StrongNumeric<Int32Host>,
    i1: number | StrongNumeric<Int32Host>,
    i2: number | StrongNumeric<Int32Host>,
    createMissing: boolean
  ): System.IntPtr;
  ptr(
    i0: number | StrongNumeric<Int32Host>,
    i1: number | StrongNumeric<Int32Host>,
    i2: number | StrongNumeric<Int32Host>,
    createMissing: boolean,
    hashVal: number | StrongNumeric<Int64Host> | null | null
  ): System.IntPtr;
  ptr(idx: HostArray<number | StrongNumeric<Int32Host>>, createMissing: boolean): System.IntPtr;
  ptr(
    idx: HostArray<number | StrongNumeric<Int32Host>>,
    createMissing: boolean,
    hashVal: number | StrongNumeric<Int64Host> | null | null
  ): System.IntPtr;
  find<T>(type1: HostType<T>, i0: number | StrongNumeric<Int32Host>): T | null;
  find<T>(
    type1: HostType<T>,
    i0: number | StrongNumeric<Int32Host>,
    hashVal: number | StrongNumeric<Int64Host> | null | null
  ): T | null;
  find<T>(
    type1: HostType<T>,
    i0: number | StrongNumeric<Int32Host>,
    i1: number | StrongNumeric<Int32Host>
  ): T | null;
  find<T>(
    type1: HostType<T>,
    i0: number | StrongNumeric<Int32Host>,
    i1: number | StrongNumeric<Int32Host>,
    hashVal: number | StrongNumeric<Int64Host> | null | null
  ): T | null;
  find<T>(
    type1: HostType<T>,
    i0: number | StrongNumeric<Int32Host>,
    i1: number | StrongNumeric<Int32Host>,
    i2: number | StrongNumeric<Int32Host>
  ): T | null;
  find<T>(
    type1: HostType<T>,
    i0: number | StrongNumeric<Int32Host>,
    i1: number | StrongNumeric<Int32Host>,
    i2: number | StrongNumeric<Int32Host>,
    hashVal: number | StrongNumeric<Int64Host> | null | null
  ): T | null;
  find<T>(type1: HostType<T>, idx: HostArray<number | StrongNumeric<Int32Host>>): T | null;
  find<T>(
    type1: HostType<T>,
    idx: HostArray<number | StrongNumeric<Int32Host>>,
    hashVal: number | StrongNumeric<Int64Host> | null | null
  ): T | null;
  value<T>(type1: HostType<T>, i0: number | StrongNumeric<Int32Host>): T;
  value<T>(
    type1: HostType<T>,
    i0: number | StrongNumeric<Int32Host>,
    hashVal: number | StrongNumeric<Int64Host> | null | null
  ): T;
  value<T>(
    type1: HostType<T>,
    i0: number | StrongNumeric<Int32Host>,
    i1: number | StrongNumeric<Int32Host>
  ): T;
  value<T>(
    type1: HostType<T>,
    i0: number | StrongNumeric<Int32Host>,
    i1: number | StrongNumeric<Int32Host>,
    hashVal: number | StrongNumeric<Int64Host> | null | null
  ): T;
  value<T>(
    type1: HostType<T>,
    i0: number | StrongNumeric<Int32Host>,
    i1: number | StrongNumeric<Int32Host>,
    i2: number | StrongNumeric<Int32Host>
  ): T;
  value<T>(
    type1: HostType<T>,
    i0: number | StrongNumeric<Int32Host>,
    i1: number | StrongNumeric<Int32Host>,
    i2: number | StrongNumeric<Int32Host>,
    hashVal: number | StrongNumeric<Int64Host> | null | null
  ): T;
  value<T>(type1: HostType<T>, idx: HostArray<number | StrongNumeric<Int32Host>>): T;
  value<T>(
    type1: HostType<T>,
    idx: HostArray<number | StrongNumeric<Int32Host>>,
    hashVal: number | StrongNumeric<Int64Host> | null | null
  ): T;
  ref<T>(type1: HostType<T>): SparseMat_Indexer<T>;
  getIndexer<T>(type1: HostType<T>): SparseMat_Indexer<T>;
  get<T>(type1: HostType<T>, i0: number | StrongNumeric<Int32Host>): T;
  get<T>(
    type1: HostType<T>,
    i0: number | StrongNumeric<Int32Host>,
    hashVal: number | StrongNumeric<Int64Host> | null | null
  ): T;
  get<T>(
    type1: HostType<T>,
    i0: number | StrongNumeric<Int32Host>,
    i1: number | StrongNumeric<Int32Host>
  ): T;
  get<T>(
    type1: HostType<T>,
    i0: number | StrongNumeric<Int32Host>,
    i1: number | StrongNumeric<Int32Host>,
    hashVal: number | StrongNumeric<Int64Host> | null | null
  ): T;
  get<T>(
    type1: HostType<T>,
    i0: number | StrongNumeric<Int32Host>,
    i1: number | StrongNumeric<Int32Host>,
    i2: number | StrongNumeric<Int32Host>
  ): T;
  get<T>(
    type1: HostType<T>,
    i0: number | StrongNumeric<Int32Host>,
    i1: number | StrongNumeric<Int32Host>,
    i2: number | StrongNumeric<Int32Host>,
    hashVal: number | StrongNumeric<Int64Host> | null | null
  ): T;
  get<T>(type1: HostType<T>, idx: HostArray<number | StrongNumeric<Int32Host>>): T;
  get<T>(
    type1: HostType<T>,
    idx: HostArray<number | StrongNumeric<Int32Host>>,
    hashVal: number | StrongNumeric<Int64Host> | null | null
  ): T;
  set<T>(
    type1: HostType<T>,
    i0: number | StrongNumeric<Int32Host>,
    i1: number | StrongNumeric<Int32Host>,
    i2: number | StrongNumeric<Int32Host>,
    value: T
  ): VoidResult;
  set<T>(
    type1: HostType<T>,
    i0: number | StrongNumeric<Int32Host>,
    i1: number | StrongNumeric<Int32Host>,
    i2: number | StrongNumeric<Int32Host>,
    value: T,
    hashVal: number | StrongNumeric<Int64Host> | null | null
  ): VoidResult;
  set<T>(
    type1: HostType<T>,
    i0: number | StrongNumeric<Int32Host>,
    i1: number | StrongNumeric<Int32Host>,
    value: T
  ): VoidResult;
  set<T>(
    type1: HostType<T>,
    i0: number | StrongNumeric<Int32Host>,
    i1: number | StrongNumeric<Int32Host>,
    value: T,
    hashVal: number | StrongNumeric<Int64Host> | null | null
  ): VoidResult;
  set<T>(type1: HostType<T>, i0: number | StrongNumeric<Int32Host>, value: T): VoidResult;
  set<T>(
    type1: HostType<T>,
    i0: number | StrongNumeric<Int32Host>,
    value: T,
    hashVal: number | StrongNumeric<Int64Host> | null | null
  ): VoidResult;
  set<T>(
    type1: HostType<T>,
    idx: HostArray<number | StrongNumeric<Int32Host>>,
    value: T
  ): VoidResult;
  set<T>(
    type1: HostType<T>,
    idx: HostArray<number | StrongNumeric<Int32Host>>,
    value: T,
    hashVal: number | StrongNumeric<Int64Host> | null | null
  ): VoidResult;
  toString(): string;
}

declare const sparseMat_IndexerBrand: unique symbol;
export interface SparseMat_Indexer<T> extends Omit<OpenCvSharp.SparseMatIndexer<T>, "item"> {
  readonly [sparseMat_IndexerBrand]: true;
  item: {
    (i0: number | StrongNumeric<Int32Host>, hashVal: number | StrongNumeric<Int64Host> | null): T;
    get(
      i0: number | StrongNumeric<Int32Host>,
      hashVal: number | StrongNumeric<Int64Host> | null
    ): T;
    set(
      i0: number | StrongNumeric<Int32Host>,
      hashVal: number | StrongNumeric<Int64Host> | null,
      value: T
    ): T;
    (
      i0: number | StrongNumeric<Int32Host>,
      i1: number | StrongNumeric<Int32Host>,
      hashVal: number | StrongNumeric<Int64Host> | null
    ): T;
    get(
      i0: number | StrongNumeric<Int32Host>,
      i1: number | StrongNumeric<Int32Host>,
      hashVal: number | StrongNumeric<Int64Host> | null
    ): T;
    set(
      i0: number | StrongNumeric<Int32Host>,
      i1: number | StrongNumeric<Int32Host>,
      hashVal: number | StrongNumeric<Int64Host> | null,
      value: T
    ): T;
    (
      i0: number | StrongNumeric<Int32Host>,
      i1: number | StrongNumeric<Int32Host>,
      i2: number | StrongNumeric<Int32Host>,
      hashVal: number | StrongNumeric<Int64Host> | null
    ): T;
    get(
      i0: number | StrongNumeric<Int32Host>,
      i1: number | StrongNumeric<Int32Host>,
      i2: number | StrongNumeric<Int32Host>,
      hashVal: number | StrongNumeric<Int64Host> | null
    ): T;
    set(
      i0: number | StrongNumeric<Int32Host>,
      i1: number | StrongNumeric<Int32Host>,
      i2: number | StrongNumeric<Int32Host>,
      hashVal: number | StrongNumeric<Int64Host> | null,
      value: T
    ): T;
    (
      idx: HostArray<number | StrongNumeric<Int32Host>>,
      hashVal: number | StrongNumeric<Int64Host> | null
    ): T;
    get(
      idx: HostArray<number | StrongNumeric<Int32Host>>,
      hashVal: number | StrongNumeric<Int64Host> | null
    ): T;
    set(
      idx: HostArray<number | StrongNumeric<Int32Host>>,
      hashVal: number | StrongNumeric<Int64Host> | null,
      value: T
    ): T;
  };
}

export interface SparseMat_IndexerHostType<T> extends HostType<
  SparseMat_Indexer<T>,
  ReferenceTypeTrait
> {}

declare global {
  namespace OpenCvSharp.SparseMat {
    type Indexer<T> = import("./SparseMat").SparseMat_Indexer<T>;
  }
}

declare global {
  namespace OpenCvSharp {
    type SparseMat = import("./SparseMat").SparseMat;
  }
}

export interface SparseMatHostType extends HostType<
  SparseMat,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (ptr: System.IntPtr): SparseMat;
  new (): SparseMat;
  new (sizes: System.Collections.Generic.IEnumerable<number>, type: OpenCvSharp.MatType): SparseMat;
  new (m: OpenCvSharp.Mat): SparseMat;
  fromMat(mat: OpenCvSharp.Mat): OpenCvSharp.SparseMat;
  readonly Indexer: SparseMat_IndexerHostType<any>;
}

export {};
