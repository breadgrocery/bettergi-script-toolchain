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
import "../../Point3f";
import "./IStdVector";

declare const vectorOfPoint3fBrand: unique symbol;
export interface VectorOfPoint3f
  extends
    Omit<OpenCvSharp.DisposableCvObject, "elemPtr" | "size" | "toArray">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput,
    OpenCvSharp.Internal.Vectors.IStdVectorInput<OpenCvSharp.Point3f> {
  readonly [vectorOfPoint3fBrand]: true;
  readonly size: number;
  readonly elemPtr: System.IntPtr;
  toArray(): HostArray<OpenCvSharp.Point3f>;
}

declare global {
  namespace OpenCvSharp.Internal.Vectors {
    type VectorOfPoint3f = import("./VectorOfPoint3f").VectorOfPoint3f;
  }
}

export interface VectorOfPoint3fHostType extends HostType<
  VectorOfPoint3f,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): VectorOfPoint3f;
  new (size: System.UIntPtr): VectorOfPoint3f;
  new (data: System.Collections.Generic.IEnumerable<OpenCvSharp.Point3f>): VectorOfPoint3f;
}

export {};
