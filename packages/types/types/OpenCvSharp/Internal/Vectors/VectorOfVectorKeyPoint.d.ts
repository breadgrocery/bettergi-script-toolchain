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
import "../../KeyPoint";
import "./IStdVector";

declare const vectorOfVectorKeyPointBrand: unique symbol;
export interface VectorOfVectorKeyPoint
  extends
    Omit<OpenCvSharp.DisposableCvObject, "getSize1" | "getSize2" | "size" | "toArray">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput,
    OpenCvSharp.Internal.Vectors.IStdVectorInput<HostArray<OpenCvSharp.KeyPoint>> {
  readonly [vectorOfVectorKeyPointBrand]: true;
  getSize1(): number;
  readonly size: number;
  getSize2(): System.Collections.Generic.IReadOnlyList<number>;
  toArray(): HostArray<HostArray<OpenCvSharp.KeyPoint>>;
}

declare global {
  namespace OpenCvSharp.Internal.Vectors {
    type VectorOfVectorKeyPoint = import("./VectorOfVectorKeyPoint").VectorOfVectorKeyPoint;
  }
}

export interface VectorOfVectorKeyPointHostType extends HostType<
  VectorOfVectorKeyPoint,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): VectorOfVectorKeyPoint;
  new (values: HostArray<HostArray<OpenCvSharp.KeyPoint>>): VectorOfVectorKeyPoint;
}

export {};
