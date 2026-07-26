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
import "../../Rect";
import "./IStdVector";

declare const vectorOfRectBrand: unique symbol;
export interface VectorOfRect
  extends
    Omit<OpenCvSharp.DisposableCvObject, "elemPtr" | "size" | "toArray">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput,
    OpenCvSharp.Internal.Vectors.IStdVectorInput<OpenCvSharp.Rect> {
  readonly [vectorOfRectBrand]: true;
  readonly size: number;
  readonly elemPtr: System.IntPtr;
  toArray(): HostArray<OpenCvSharp.Rect>;
}

declare global {
  namespace OpenCvSharp.Internal.Vectors {
    type VectorOfRect = import("./VectorOfRect").VectorOfRect;
  }
}

export interface VectorOfRectHostType extends HostType<
  VectorOfRect,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): VectorOfRect;
  new (size: System.UIntPtr): VectorOfRect;
  new (data: System.Collections.Generic.IEnumerable<OpenCvSharp.Rect>): VectorOfRect;
}

export {};
