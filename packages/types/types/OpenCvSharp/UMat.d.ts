import type {
  DoubleHost,
  EnumInput,
  HostArray,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/Collections/Generic/IEnumerable";
import "../System/IDisposable";
import "../System/IntPtr";
import "../System/Nullable";
import "../System/Range";
import "./AccessFlag";
import "./DecompTypes";
import "./DisposableCvObject";
import "./ICvPtrHolder";
import "./InputArray";
import "./Mat";
import "./MatDiagType";
import "./MatType";
import "./OutputArray";
import "./Point";
import "./Range";
import "./Rect";
import "./Scalar";
import "./Size";
import "./UMatUsageFlags";

declare const uMatBrand: unique symbol;
export interface UMat
  extends
    Omit<
      OpenCvSharp.DisposableCvObject,
      | "adjustROI"
      | "alignment"
      | "assignTo"
      | "channels"
      | "checkVector"
      | "clone"
      | "col"
      | "colRange"
      | "cols"
      | "convertTo"
      | "copyTo"
      | "create"
      | "depth"
      | "diag"
      | "dims"
      | "dot"
      | "elemSize"
      | "elemSize1"
      | "empty"
      | "emptyClone"
      | "flags"
      | "getMat"
      | "height"
      | "inv"
      | "isContinuous"
      | "isSubmatrix"
      | "item"
      | "locateROI"
      | "mul"
      | "release"
      | "reshape"
      | "row"
      | "rowRange"
      | "rows"
      | "setTo"
      | "size"
      | "step"
      | "step1"
      | "subMat"
      | "t"
      | "toString"
      | "total"
      | "type"
      | "width"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [uMatBrand]: true;
  release(): VoidResult;
  item: {
    (
      rowStart: number | StrongNumeric<Int32Host>,
      rowEnd: number | StrongNumeric<Int32Host>,
      colStart: number | StrongNumeric<Int32Host>,
      colEnd: number | StrongNumeric<Int32Host>
    ): OpenCvSharp.UMat;
    get(
      rowStart: number | StrongNumeric<Int32Host>,
      rowEnd: number | StrongNumeric<Int32Host>,
      colStart: number | StrongNumeric<Int32Host>,
      colEnd: number | StrongNumeric<Int32Host>
    ): OpenCvSharp.UMat;
    set(
      rowStart: number | StrongNumeric<Int32Host>,
      rowEnd: number | StrongNumeric<Int32Host>,
      colStart: number | StrongNumeric<Int32Host>,
      colEnd: number | StrongNumeric<Int32Host>,
      value: OpenCvSharp.UMat
    ): OpenCvSharp.UMat;
    (rowRange: System.Range, colRange: System.Range): OpenCvSharp.UMat;
    get(rowRange: System.Range, colRange: System.Range): OpenCvSharp.UMat;
    set(rowRange: System.Range, colRange: System.Range, value: OpenCvSharp.UMat): OpenCvSharp.UMat;
    (rowRange: OpenCvSharp.Range, colRange: OpenCvSharp.Range): OpenCvSharp.UMat;
    get(rowRange: OpenCvSharp.Range, colRange: OpenCvSharp.Range): OpenCvSharp.UMat;
    set(
      rowRange: OpenCvSharp.Range,
      colRange: OpenCvSharp.Range,
      value: OpenCvSharp.UMat
    ): OpenCvSharp.UMat;
    (roi: OpenCvSharp.Rect): OpenCvSharp.UMat;
    get(roi: OpenCvSharp.Rect): OpenCvSharp.UMat;
    set(roi: OpenCvSharp.Rect, value: OpenCvSharp.UMat): OpenCvSharp.UMat;
    (ranges: HostArray<OpenCvSharp.Range>): OpenCvSharp.UMat;
    get(ranges: HostArray<OpenCvSharp.Range>): OpenCvSharp.UMat;
    set(ranges: HostArray<OpenCvSharp.Range>, value: OpenCvSharp.UMat): OpenCvSharp.UMat;
  };
  getMat(accessFlags: EnumInput<OpenCvSharp.AccessFlag>): OpenCvSharp.Mat;
  col(x: number | StrongNumeric<Int32Host>): OpenCvSharp.UMat;
  colRange(range: OpenCvSharp.Range): OpenCvSharp.UMat;
  colRange(range: System.Range): OpenCvSharp.UMat;
  colRange(
    startCol: number | StrongNumeric<Int32Host>,
    endCol: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.UMat;
  row(y: number | StrongNumeric<Int32Host>): OpenCvSharp.UMat;
  rowRange(range: OpenCvSharp.Range): OpenCvSharp.UMat;
  rowRange(range: System.Range): OpenCvSharp.UMat;
  rowRange(
    startRow: number | StrongNumeric<Int32Host>,
    endRow: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.UMat;
  diag(): OpenCvSharp.UMat;
  diag(d: EnumInput<OpenCvSharp.MatDiagType>): OpenCvSharp.UMat;
  clone(): OpenCvSharp.UMat;
  clone(roi: OpenCvSharp.Rect): OpenCvSharp.UMat;
  copyTo(m: OpenCvSharp.OutputArray): VoidResult;
  copyTo(m: OpenCvSharp.OutputArray, mask: OpenCvSharp.InputArray | null): VoidResult;
  copyTo(m: OpenCvSharp.UMat): VoidResult;
  copyTo(m: OpenCvSharp.UMat, mask: OpenCvSharp.InputArray | null): VoidResult;
  convertTo(m: OpenCvSharp.OutputArray, rtype: OpenCvSharp.MatType): VoidResult;
  convertTo(
    m: OpenCvSharp.OutputArray,
    rtype: OpenCvSharp.MatType,
    alpha: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  convertTo(
    m: OpenCvSharp.OutputArray,
    rtype: OpenCvSharp.MatType,
    alpha: number | StrongNumeric<DoubleHost>,
    beta: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  assignTo(m: OpenCvSharp.UMat): VoidResult;
  assignTo(m: OpenCvSharp.UMat, type: OpenCvSharp.MatType | null | null): VoidResult;
  setTo(value: OpenCvSharp.InputArray): OpenCvSharp.UMat;
  setTo(value: OpenCvSharp.InputArray, mask: OpenCvSharp.UMat | null): OpenCvSharp.UMat;
  setTo(value: OpenCvSharp.Scalar): OpenCvSharp.UMat;
  setTo(value: OpenCvSharp.Scalar, mask: OpenCvSharp.UMat | null): OpenCvSharp.UMat;
  reshape(cn: number | StrongNumeric<Int32Host>): OpenCvSharp.UMat;
  reshape(
    cn: number | StrongNumeric<Int32Host>,
    ...newDims: (number | StrongNumeric<Int32Host>)[]
  ): OpenCvSharp.UMat;
  reshape(
    cn: number | StrongNumeric<Int32Host>,
    newDims: HostArray<number | StrongNumeric<Int32Host>>
  ): OpenCvSharp.UMat;
  reshape(
    cn: number | StrongNumeric<Int32Host>,
    rows: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.UMat;
  t(): OpenCvSharp.UMat;
  inv(): OpenCvSharp.UMat;
  inv(method: EnumInput<OpenCvSharp.DecompTypes>): OpenCvSharp.UMat;
  mul(m: OpenCvSharp.InputArray): OpenCvSharp.UMat;
  mul(m: OpenCvSharp.InputArray, scale: number | StrongNumeric<DoubleHost>): OpenCvSharp.UMat;
  dot(m: OpenCvSharp.InputArray): number;
  create(
    rows: number | StrongNumeric<Int32Host>,
    cols: number | StrongNumeric<Int32Host>,
    type: OpenCvSharp.MatType
  ): VoidResult;
  create(size: OpenCvSharp.Size, type: OpenCvSharp.MatType): VoidResult;
  create(type: OpenCvSharp.MatType, ...sizes: (number | StrongNumeric<Int32Host>)[]): VoidResult;
  create(
    type: OpenCvSharp.MatType,
    sizes: HostArray<number | StrongNumeric<Int32Host>>
  ): VoidResult;
  locateROI(
    wholeSize: HostVariableOut<OpenCvSharp.Size>,
    ofs: HostVariableOut<OpenCvSharp.Point>
  ): VoidResult;
  adjustROI(
    dtop: number | StrongNumeric<Int32Host>,
    dbottom: number | StrongNumeric<Int32Host>,
    dleft: number | StrongNumeric<Int32Host>,
    dright: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.UMat;
  subMat(...ranges: OpenCvSharp.Range[]): OpenCvSharp.UMat;
  subMat(ranges: HostArray<OpenCvSharp.Range>): OpenCvSharp.UMat;
  subMat(roi: OpenCvSharp.Rect): OpenCvSharp.UMat;
  subMat(rowRange: OpenCvSharp.Range, colRange: OpenCvSharp.Range): OpenCvSharp.UMat;
  subMat(rowRange: System.Range, colRange: System.Range): OpenCvSharp.UMat;
  subMat(
    rowStart: number | StrongNumeric<Int32Host>,
    rowEnd: number | StrongNumeric<Int32Host>,
    colStart: number | StrongNumeric<Int32Host>,
    colEnd: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.UMat;
  isContinuous(): boolean;
  isSubmatrix(): boolean;
  elemSize(): number;
  elemSize1(): number;
  type(): OpenCvSharp.MatType;
  depth(): number;
  channels(): number;
  step1(): number;
  step1(i: number | StrongNumeric<Int32Host>): number;
  empty(): boolean;
  total(): number;
  checkVector(elemChannels: number | StrongNumeric<Int32Host>): number;
  checkVector(
    elemChannels: number | StrongNumeric<Int32Host>,
    depth: number | StrongNumeric<Int32Host>
  ): number;
  checkVector(
    elemChannels: number | StrongNumeric<Int32Host>,
    depth: number | StrongNumeric<Int32Host>,
    requireContinuous: boolean
  ): number;
  readonly flags: number;
  readonly dims: number;
  readonly rows: number;
  readonly height: number;
  readonly cols: number;
  readonly width: number;
  size(): OpenCvSharp.Size;
  size(dim: number | StrongNumeric<Int32Host>): number;
  step(): number;
  step(i: number | StrongNumeric<Int32Host>): number;
  toString(): string;
  emptyClone(): OpenCvSharp.UMat;
  emptyClone(usageFlags: EnumInput<OpenCvSharp.UMatUsageFlags>): OpenCvSharp.UMat;
  alignment(): OpenCvSharp.UMat;
  alignment(n: number | StrongNumeric<Int32Host>): OpenCvSharp.UMat;
  alignment(
    n: number | StrongNumeric<Int32Host>,
    usageFlags: EnumInput<OpenCvSharp.UMatUsageFlags>
  ): OpenCvSharp.UMat;
}

declare global {
  namespace OpenCvSharp {
    type UMat = import("./UMat").UMat;
  }
}

export interface UMatHostType extends HostType<UMat, ReferenceTypeTrait> {
  new (): UMat;
  new (usageFlags: EnumInput<OpenCvSharp.UMatUsageFlags>): UMat;
  new (
    rows: number | StrongNumeric<Int32Host>,
    cols: number | StrongNumeric<Int32Host>,
    type: OpenCvSharp.MatType
  ): UMat;
  new (
    rows: number | StrongNumeric<Int32Host>,
    cols: number | StrongNumeric<Int32Host>,
    type: OpenCvSharp.MatType,
    usageFlags: EnumInput<OpenCvSharp.UMatUsageFlags>
  ): UMat;
  new (size: OpenCvSharp.Size, type: OpenCvSharp.MatType): UMat;
  new (
    size: OpenCvSharp.Size,
    type: OpenCvSharp.MatType,
    usageFlags: EnumInput<OpenCvSharp.UMatUsageFlags>
  ): UMat;
  new (
    rows: number | StrongNumeric<Int32Host>,
    cols: number | StrongNumeric<Int32Host>,
    type: OpenCvSharp.MatType,
    s: OpenCvSharp.Scalar
  ): UMat;
  new (
    rows: number | StrongNumeric<Int32Host>,
    cols: number | StrongNumeric<Int32Host>,
    type: OpenCvSharp.MatType,
    s: OpenCvSharp.Scalar,
    usageFlags: EnumInput<OpenCvSharp.UMatUsageFlags>
  ): UMat;
  new (size: OpenCvSharp.Size, type: OpenCvSharp.MatType, s: OpenCvSharp.Scalar): UMat;
  new (
    size: OpenCvSharp.Size,
    type: OpenCvSharp.MatType,
    s: OpenCvSharp.Scalar,
    usageFlags: EnumInput<OpenCvSharp.UMatUsageFlags>
  ): UMat;
  new (m: OpenCvSharp.UMat, rowRange: OpenCvSharp.Range, colRange: OpenCvSharp.Range): UMat;
  new (
    m: OpenCvSharp.UMat,
    rowRange: OpenCvSharp.Range,
    colRange: OpenCvSharp.Range,
    usageFlags: EnumInput<OpenCvSharp.UMatUsageFlags>
  ): UMat;
  new (m: OpenCvSharp.UMat, ranges: HostArray<OpenCvSharp.Range>): UMat;
  new (m: OpenCvSharp.UMat, ...ranges: OpenCvSharp.Range[]): UMat;
  new (m: OpenCvSharp.UMat, roi: OpenCvSharp.Rect): UMat;
  new (sizes: System.Collections.Generic.IEnumerable<number>, type: OpenCvSharp.MatType): UMat;
  new (
    sizes: System.Collections.Generic.IEnumerable<number>,
    type: OpenCvSharp.MatType,
    s: OpenCvSharp.Scalar
  ): UMat;
  fromNativePointer(ptr: System.IntPtr): OpenCvSharp.UMat;
  diag(d: OpenCvSharp.UMat): OpenCvSharp.UMat;
  zeros(
    rows: number | StrongNumeric<Int32Host>,
    cols: number | StrongNumeric<Int32Host>,
    type: OpenCvSharp.MatType
  ): OpenCvSharp.UMat;
  zeros(size: OpenCvSharp.Size, type: OpenCvSharp.MatType): OpenCvSharp.UMat;
  zeros(
    type: OpenCvSharp.MatType,
    sizes: HostArray<number | StrongNumeric<Int32Host>>
  ): OpenCvSharp.UMat;
  zeros(
    type: OpenCvSharp.MatType,
    ...sizes: (number | StrongNumeric<Int32Host>)[]
  ): OpenCvSharp.UMat;
  ones(
    rows: number | StrongNumeric<Int32Host>,
    cols: number | StrongNumeric<Int32Host>,
    type: OpenCvSharp.MatType
  ): OpenCvSharp.UMat;
  ones(size: OpenCvSharp.Size, type: OpenCvSharp.MatType): OpenCvSharp.UMat;
  ones(
    type: OpenCvSharp.MatType,
    sizes: HostArray<number | StrongNumeric<Int32Host>>
  ): OpenCvSharp.UMat;
  ones(
    type: OpenCvSharp.MatType,
    ...sizes: (number | StrongNumeric<Int32Host>)[]
  ): OpenCvSharp.UMat;
  eye(size: OpenCvSharp.Size, type: OpenCvSharp.MatType): OpenCvSharp.UMat;
  eye(
    rows: number | StrongNumeric<Int32Host>,
    cols: number | StrongNumeric<Int32Host>,
    type: OpenCvSharp.MatType
  ): OpenCvSharp.UMat;
}

export {};
