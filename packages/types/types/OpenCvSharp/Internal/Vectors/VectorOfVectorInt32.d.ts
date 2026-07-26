import type {
  HostArray,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../../System/Collections/Generic/IReadOnlyList";
import "../../../System/IDisposable";
import "../../DisposableCvObject";
import "../../ICvPtrHolder";
import "./IStdVector";

declare const vectorOfVectorInt32Brand: unique symbol;
export interface VectorOfVectorInt32
  extends
    Omit<OpenCvSharp.DisposableCvObject, "getSize1" | "getSize2" | "size" | "toArray">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput,
    OpenCvSharp.Internal.Vectors.IStdVectorInput<HostArray<number>> {
  readonly [vectorOfVectorInt32Brand]: true;
  getSize1(): number;
  readonly size: number;
  getSize2(): System.Collections.Generic.IReadOnlyList<number>;
  toArray(): HostArray<HostArray<number>>;
}

declare global {
  namespace OpenCvSharp.Internal.Vectors {
    type VectorOfVectorInt32 = import("./VectorOfVectorInt32").VectorOfVectorInt32;
  }
}

export interface VectorOfVectorInt32HostType extends HostType<
  VectorOfVectorInt32,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): VectorOfVectorInt32;
}

export {};
