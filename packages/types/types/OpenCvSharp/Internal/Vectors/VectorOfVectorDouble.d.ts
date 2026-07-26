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

declare const vectorOfVectorDoubleBrand: unique symbol;
export interface VectorOfVectorDouble
  extends
    Omit<OpenCvSharp.DisposableCvObject, "getSize1" | "getSize2" | "size" | "toArray">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput,
    OpenCvSharp.Internal.Vectors.IStdVectorInput<HostArray<number>> {
  readonly [vectorOfVectorDoubleBrand]: true;
  getSize1(): number;
  readonly size: number;
  getSize2(): System.Collections.Generic.IReadOnlyList<number>;
  toArray(): HostArray<HostArray<number>>;
}

declare global {
  namespace OpenCvSharp.Internal.Vectors {
    type VectorOfVectorDouble = import("./VectorOfVectorDouble").VectorOfVectorDouble;
  }
}

export interface VectorOfVectorDoubleHostType extends HostType<
  VectorOfVectorDouble,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): VectorOfVectorDouble;
}

export {};
