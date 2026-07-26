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
import "../../Vec2f";
import "./IStdVector";

declare const vectorOfVec2fBrand: unique symbol;
export interface VectorOfVec2f
  extends
    Omit<OpenCvSharp.DisposableCvObject, "elemPtr" | "size" | "toArray">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput,
    OpenCvSharp.Internal.Vectors.IStdVectorInput<OpenCvSharp.Vec2f> {
  readonly [vectorOfVec2fBrand]: true;
  readonly size: number;
  readonly elemPtr: System.IntPtr;
  toArray(): HostArray<OpenCvSharp.Vec2f>;
  toArray<T>(type1: HostType<T>): HostArray<T>;
}

declare global {
  namespace OpenCvSharp.Internal.Vectors {
    type VectorOfVec2f = import("./VectorOfVec2f").VectorOfVec2f;
  }
}

export interface VectorOfVec2fHostType extends HostType<
  VectorOfVec2f,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): VectorOfVec2f;
}

export {};
