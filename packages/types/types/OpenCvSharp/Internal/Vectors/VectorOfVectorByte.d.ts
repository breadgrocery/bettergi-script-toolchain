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

declare const vectorOfVectorByteBrand: unique symbol;
export interface VectorOfVectorByte
  extends
    Omit<OpenCvSharp.DisposableCvObject, "getSize1" | "getSize2" | "size" | "toArray">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput,
    OpenCvSharp.Internal.Vectors.IStdVectorInput<HostArray<number>> {
  readonly [vectorOfVectorByteBrand]: true;
  getSize1(): number;
  readonly size: number;
  getSize2(): System.Collections.Generic.IReadOnlyList<number>;
  toArray(): HostArray<HostArray<number>>;
}

declare global {
  namespace OpenCvSharp.Internal.Vectors {
    type VectorOfVectorByte = import("./VectorOfVectorByte").VectorOfVectorByte;
  }
}

export interface VectorOfVectorByteHostType extends HostType<
  VectorOfVectorByte,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): VectorOfVectorByte;
}

export {};
