import type {
  HostArray,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../../System/Collections/Generic/IEnumerable";
import "../../../System/IDisposable";
import "../../../System/IntPtr";
import "../../DisposableCvObject";
import "../../ICvPtrHolder";
import "../../Vec4f";
import "./IStdVector";

declare const vectorOfVec4fBrand: unique symbol;
export interface VectorOfVec4f
  extends
    Omit<OpenCvSharp.DisposableCvObject, "elemPtr" | "size" | "toArray">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput,
    OpenCvSharp.Internal.Vectors.IStdVectorInput<OpenCvSharp.Vec4f> {
  readonly [vectorOfVec4fBrand]: true;
  readonly size: number;
  readonly elemPtr: System.IntPtr;
  toArray(): HostArray<OpenCvSharp.Vec4f>;
  toArray<T>(type1: HostType<T>): HostArray<T>;
}

declare global {
  namespace OpenCvSharp.Internal.Vectors {
    type VectorOfVec4f = import("./VectorOfVec4f").VectorOfVec4f;
  }
}

export interface VectorOfVec4fHostType extends HostType<
  VectorOfVec4f,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): VectorOfVec4f;
  new (data: System.Collections.Generic.IEnumerable<OpenCvSharp.Vec4f>): VectorOfVec4f;
}

export {};
