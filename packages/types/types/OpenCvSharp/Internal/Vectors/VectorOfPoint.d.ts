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
import "../../Point";
import "./IStdVector";

declare const vectorOfPointBrand: unique symbol;
export interface VectorOfPoint
  extends
    Omit<OpenCvSharp.DisposableCvObject, "elemPtr" | "size" | "toArray">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput,
    OpenCvSharp.Internal.Vectors.IStdVectorInput<OpenCvSharp.Point> {
  readonly [vectorOfPointBrand]: true;
  readonly size: number;
  readonly elemPtr: System.IntPtr;
  toArray(): HostArray<OpenCvSharp.Point>;
}

declare global {
  namespace OpenCvSharp.Internal.Vectors {
    type VectorOfPoint = import("./VectorOfPoint").VectorOfPoint;
  }
}

export interface VectorOfPointHostType extends HostType<
  VectorOfPoint,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): VectorOfPoint;
  new (size: System.UIntPtr): VectorOfPoint;
  new (data: System.Collections.Generic.IEnumerable<OpenCvSharp.Point>): VectorOfPoint;
}

export {};
