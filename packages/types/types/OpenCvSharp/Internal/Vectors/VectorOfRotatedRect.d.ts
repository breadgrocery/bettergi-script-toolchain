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
import "../../RotatedRect";
import "./IStdVector";

declare const vectorOfRotatedRectBrand: unique symbol;
export interface VectorOfRotatedRect
  extends
    Omit<OpenCvSharp.DisposableCvObject, "elemPtr" | "size" | "toArray">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput,
    OpenCvSharp.Internal.Vectors.IStdVectorInput<OpenCvSharp.RotatedRect> {
  readonly [vectorOfRotatedRectBrand]: true;
  readonly size: number;
  readonly elemPtr: System.IntPtr;
  toArray(): HostArray<OpenCvSharp.RotatedRect>;
}

declare global {
  namespace OpenCvSharp.Internal.Vectors {
    type VectorOfRotatedRect = import("./VectorOfRotatedRect").VectorOfRotatedRect;
  }
}

export interface VectorOfRotatedRectHostType extends HostType<
  VectorOfRotatedRect,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): VectorOfRotatedRect;
  new (size: System.UIntPtr): VectorOfRotatedRect;
  new (data: System.Collections.Generic.IEnumerable<OpenCvSharp.RotatedRect>): VectorOfRotatedRect;
}

export {};
