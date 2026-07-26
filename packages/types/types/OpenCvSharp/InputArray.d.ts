import type {
  DoubleHost,
  HostArray,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/Collections/Generic/IEnumerable";
import "../System/IDisposable";
import "../System/IntPtr";
import "./DisposableCvObject";
import "./ICvPtrHolder";
import "./IVec";
import "./InOutArrayKind";
import "./Mat";
import "./MatExpr";
import "./MatType";
import "./OutputArray";
import "./Scalar";
import "./Size";
import "./UMat";

declare const inputArrayBrand: unique symbol;
export interface InputArray
  extends
    Omit<
      OpenCvSharp.DisposableCvObject,
      | "channels"
      | "cols"
      | "copyTo"
      | "depth"
      | "dims"
      | "empty"
      | "getFlags"
      | "getMat"
      | "getMatVector"
      | "getObj"
      | "getSz"
      | "getUMat"
      | "isContinuous"
      | "isGpuMatVector"
      | "isMat"
      | "isMatVector"
      | "isMatx"
      | "isSubmatrix"
      | "isUMat"
      | "isUMatVector"
      | "isVector"
      | "kind"
      | "offset"
      | "rows"
      | "sameSize"
      | "size"
      | "sizeND"
      | "step"
      | "total"
      | "type"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [inputArrayBrand]: true;
  getMat(): OpenCvSharp.Mat;
  getMat(i: number | StrongNumeric<Int32Host>): OpenCvSharp.Mat;
  getMatVector(): HostArray<OpenCvSharp.Mat>;
  getUMat(): OpenCvSharp.UMat;
  getUMat(i: number | StrongNumeric<Int32Host>): OpenCvSharp.UMat;
  getFlags(): number;
  getObj(): System.IntPtr;
  getSz(): OpenCvSharp.Size;
  kind(): OpenCvSharp.InOutArrayKind;
  dims(): number;
  dims(i: number | StrongNumeric<Int32Host>): number;
  cols(): number;
  cols(i: number | StrongNumeric<Int32Host>): number;
  rows(): number;
  rows(i: number | StrongNumeric<Int32Host>): number;
  size(): OpenCvSharp.Size;
  size(i: number | StrongNumeric<Int32Host>): OpenCvSharp.Size;
  sizeND(sz: HostArray<number | StrongNumeric<Int32Host>>): number;
  sizeND(
    sz: HostArray<number | StrongNumeric<Int32Host>>,
    i: number | StrongNumeric<Int32Host>
  ): number;
  sameSize(arr: OpenCvSharp.InputArray): boolean;
  total(): number;
  total(i: number | StrongNumeric<Int32Host>): number;
  type(): number;
  type(i: number | StrongNumeric<Int32Host>): number;
  depth(): number;
  depth(i: number | StrongNumeric<Int32Host>): number;
  channels(): number;
  channels(i: number | StrongNumeric<Int32Host>): number;
  isContinuous(): boolean;
  isContinuous(i: number | StrongNumeric<Int32Host>): boolean;
  isSubmatrix(): boolean;
  isSubmatrix(i: number | StrongNumeric<Int32Host>): boolean;
  empty(): boolean;
  copyTo(arr: OpenCvSharp.OutputArray): VoidResult;
  copyTo(arr: OpenCvSharp.OutputArray, mask: OpenCvSharp.InputArray): VoidResult;
  offset(): number;
  offset(i: number | StrongNumeric<Int32Host>): number;
  step(): number;
  step(i: number | StrongNumeric<Int32Host>): number;
  isMat(): boolean;
  isUMat(): boolean;
  isMatVector(): boolean;
  isUMatVector(): boolean;
  isMatx(): boolean;
  isVector(): boolean;
  isGpuMatVector(): boolean;
}

declare global {
  namespace OpenCvSharp {
    type InputArray = import("./InputArray").InputArray;
  }
}

export interface InputArrayHostType extends HostType<InputArray, ReferenceTypeTrait> {
  readonly kinD_SHIFT: number;
  readonly kinD_MASK: number;
  create(mat: OpenCvSharp.Mat): OpenCvSharp.InputArray;
  create(mat: OpenCvSharp.UMat): OpenCvSharp.InputArray;
  create(expr: OpenCvSharp.MatExpr): OpenCvSharp.InputArray;
  create(val: OpenCvSharp.Scalar): OpenCvSharp.InputArray;
  create(val: number | StrongNumeric<DoubleHost>): OpenCvSharp.InputArray;
  create(
    matVector: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>
  ): OpenCvSharp.InputArray;
  create<T>(
    type1: HostType<T>,
    enumerable: System.Collections.Generic.IEnumerable<T>
  ): OpenCvSharp.InputArray;
  create<T>(
    type1: HostType<T>,
    enumerable: System.Collections.Generic.IEnumerable<T>,
    type: OpenCvSharp.MatType
  ): OpenCvSharp.InputArray;
  create<T>(type1: HostType<T>, array: HostArray<T>): OpenCvSharp.InputArray;
  create<T>(
    type1: HostType<T>,
    array: HostArray<T>,
    type: OpenCvSharp.MatType
  ): OpenCvSharp.InputArray;
  create<T>(type1: HostType<T>, array: HostArray<T>): OpenCvSharp.InputArray;
  create<T>(
    type1: HostType<T>,
    array: HostArray<T>,
    type: OpenCvSharp.MatType
  ): OpenCvSharp.InputArray;
  create(vec: OpenCvSharp.IVec): OpenCvSharp.InputArray;
}

export {};
