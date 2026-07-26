import type {
  HostArray,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../../System/IDisposable";
import "../../../System/IntPtr";
import "../../DisposableCvObject";
import "../../ICvPtrHolder";
import "../../Vec3f";
import "./IStdVector";

declare const vectorOfVec3fBrand: unique symbol;
export interface VectorOfVec3f
  extends
    Omit<OpenCvSharp.DisposableCvObject, "elemPtr" | "size" | "toArray">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput,
    OpenCvSharp.Internal.Vectors.IStdVectorInput<OpenCvSharp.Vec3f> {
  readonly [vectorOfVec3fBrand]: true;
  readonly size: number;
  readonly elemPtr: System.IntPtr;
  toArray(): HostArray<OpenCvSharp.Vec3f>;
  toArray<T>(type1: HostType<T>): HostArray<T>;
}

declare global {
  namespace OpenCvSharp.Internal.Vectors {
    type VectorOfVec3f = import("./VectorOfVec3f").VectorOfVec3f;
  }
}

export interface VectorOfVec3fHostType extends HostType<
  VectorOfVec3f,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): VectorOfVec3f;
}

export {};
