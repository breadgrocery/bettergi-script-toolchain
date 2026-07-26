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
import "../../Point2f";
import "./IStdVector";

declare const vectorOfPoint2fBrand: unique symbol;
export interface VectorOfPoint2f
  extends
    Omit<OpenCvSharp.DisposableCvObject, "elemPtr" | "size" | "toArray">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput,
    OpenCvSharp.Internal.Vectors.IStdVectorInput<OpenCvSharp.Point2f> {
  readonly [vectorOfPoint2fBrand]: true;
  readonly size: number;
  readonly elemPtr: System.IntPtr;
  toArray(): HostArray<OpenCvSharp.Point2f>;
}

declare global {
  namespace OpenCvSharp.Internal.Vectors {
    type VectorOfPoint2f = import("./VectorOfPoint2f").VectorOfPoint2f;
  }
}

export interface VectorOfPoint2fHostType extends HostType<
  VectorOfPoint2f,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): VectorOfPoint2f;
  new (size: System.UIntPtr): VectorOfPoint2f;
  new (data: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>): VectorOfPoint2f;
}

export {};
