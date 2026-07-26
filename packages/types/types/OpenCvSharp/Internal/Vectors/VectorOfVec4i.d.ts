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
import "../../Vec4i";
import "./IStdVector";

declare const vectorOfVec4iBrand: unique symbol;
export interface VectorOfVec4i
  extends
    Omit<OpenCvSharp.DisposableCvObject, "elemPtr" | "size" | "toArray">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput,
    OpenCvSharp.Internal.Vectors.IStdVectorInput<OpenCvSharp.Vec4i> {
  readonly [vectorOfVec4iBrand]: true;
  readonly size: number;
  readonly elemPtr: System.IntPtr;
  toArray(): HostArray<OpenCvSharp.Vec4i>;
  toArray<T>(type1: HostType<T>): HostArray<T>;
}

declare global {
  namespace OpenCvSharp.Internal.Vectors {
    type VectorOfVec4i = import("./VectorOfVec4i").VectorOfVec4i;
  }
}

export interface VectorOfVec4iHostType extends HostType<
  VectorOfVec4i,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): VectorOfVec4i;
  new (data: System.Collections.Generic.IEnumerable<OpenCvSharp.Vec4i>): VectorOfVec4i;
}

export {};
