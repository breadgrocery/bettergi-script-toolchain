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
import "../../Rect2d";
import "./IStdVector";

declare const vectorOfRect2dBrand: unique symbol;
export interface VectorOfRect2d
  extends
    Omit<OpenCvSharp.DisposableCvObject, "elemPtr" | "size" | "toArray">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput,
    OpenCvSharp.Internal.Vectors.IStdVectorInput<OpenCvSharp.Rect2d> {
  readonly [vectorOfRect2dBrand]: true;
  readonly size: number;
  readonly elemPtr: System.IntPtr;
  toArray(): HostArray<OpenCvSharp.Rect2d>;
}

declare global {
  namespace OpenCvSharp.Internal.Vectors {
    type VectorOfRect2d = import("./VectorOfRect2d").VectorOfRect2d;
  }
}

export interface VectorOfRect2dHostType extends HostType<
  VectorOfRect2d,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): VectorOfRect2d;
  new (size: System.UIntPtr): VectorOfRect2d;
  new (data: System.Collections.Generic.IEnumerable<OpenCvSharp.Rect2d>): VectorOfRect2d;
}

export {};
