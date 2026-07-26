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

declare const vectorOfDoubleBrand: unique symbol;
export interface VectorOfDouble
  extends
    Omit<OpenCvSharp.DisposableCvObject, "elemPtr" | "size" | "toArray">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput,
    OpenCvSharp.Internal.Vectors.IStdVectorInput<number> {
  readonly [vectorOfDoubleBrand]: true;
  readonly size: number;
  readonly elemPtr: System.IntPtr;
  toArray(): HostArray<number>;
}

declare global {
  namespace OpenCvSharp.Internal.Vectors {
    type VectorOfDouble = import("./VectorOfDouble").VectorOfDouble;
  }
}

export interface VectorOfDoubleHostType extends HostType<
  VectorOfDouble,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): VectorOfDouble;
  new (size: System.UIntPtr): VectorOfDouble;
  new (data: System.Collections.Generic.IEnumerable<number>): VectorOfDouble;
}

export {};
