import type {
  HostArray,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../../System/Collections/Generic/IEnumerable";
import "../../../System/IDisposable";
import "../../../System/IntPtr";
import "../../../System/UIntPtr";
import "../../DisposableCvObject";
import "../../ICvPtrHolder";
import "../../KeyPoint";
import "./IStdVector";

declare const vectorOfKeyPointBrand: unique symbol;
export interface VectorOfKeyPoint
  extends
    Omit<OpenCvSharp.DisposableCvObject, "elemPtr" | "size" | "toArray">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput,
    OpenCvSharp.Internal.Vectors.IStdVectorInput<OpenCvSharp.KeyPoint> {
  readonly [vectorOfKeyPointBrand]: true;
  readonly size: number;
  readonly elemPtr: System.IntPtr;
  toArray(): HostArray<OpenCvSharp.KeyPoint>;
}

declare global {
  namespace OpenCvSharp.Internal.Vectors {
    type VectorOfKeyPoint = import("./VectorOfKeyPoint").VectorOfKeyPoint;
  }
}

export interface VectorOfKeyPointHostType extends HostType<
  VectorOfKeyPoint,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): VectorOfKeyPoint;
  new (size: System.UIntPtr): VectorOfKeyPoint;
  new (data: System.Collections.Generic.IEnumerable<OpenCvSharp.KeyPoint>): VectorOfKeyPoint;
}

export {};
