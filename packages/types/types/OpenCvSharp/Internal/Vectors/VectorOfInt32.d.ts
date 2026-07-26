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
import "./IStdVector";

declare const vectorOfInt32Brand: unique symbol;
export interface VectorOfInt32
  extends
    Omit<OpenCvSharp.DisposableCvObject, "elemPtr" | "size" | "toArray">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput,
    OpenCvSharp.Internal.Vectors.IStdVectorInput<number> {
  readonly [vectorOfInt32Brand]: true;
  readonly size: number;
  readonly elemPtr: System.IntPtr;
  toArray(): HostArray<number>;
}

declare global {
  namespace OpenCvSharp.Internal.Vectors {
    type VectorOfInt32 = import("./VectorOfInt32").VectorOfInt32;
  }
}

export interface VectorOfInt32HostType extends HostType<
  VectorOfInt32,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): VectorOfInt32;
  new (size: System.UIntPtr): VectorOfInt32;
  new (data: System.Collections.Generic.IEnumerable<number>): VectorOfInt32;
}

export {};
