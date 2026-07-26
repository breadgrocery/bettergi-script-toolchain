import type {
  HostArray,
  HostType,
  Int32Host,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../Microsoft/ClearScript/HostType";
import "../../../System/Collections/Generic/IEnumerable";
import "../../../System/IDisposable";
import "../../../System/IntPtr";
import "../../DisposableCvObject";
import "../../ICvPtrHolder";
import "../../Mat";
import "./IStdVector";

declare const vectorOfMatBrand: unique symbol;
export interface VectorOfMat
  extends
    Omit<OpenCvSharp.DisposableCvObject, "elemPtr" | "size" | "toArray">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput,
    OpenCvSharp.Internal.Vectors.IStdVectorInput<OpenCvSharp.Mat> {
  readonly [vectorOfMatBrand]: true;
  readonly size: number;
  readonly elemPtr: System.IntPtr;
  toArray(): HostArray<OpenCvSharp.Mat>;
  toArray<T>(type1: HostType<T>): HostArray<T>;
}

declare global {
  namespace OpenCvSharp.Internal.Vectors {
    type VectorOfMat = import("./VectorOfMat").VectorOfMat;
  }
}

export interface VectorOfMatHostType extends HostType<
  VectorOfMat,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): VectorOfMat;
  new (size: number | StrongNumeric<Int32Host>): VectorOfMat;
  new (mats: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>): VectorOfMat;
}

export {};
