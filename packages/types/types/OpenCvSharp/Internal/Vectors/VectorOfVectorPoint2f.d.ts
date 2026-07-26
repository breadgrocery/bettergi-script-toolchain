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
import "../../Point2f";
import "./IStdVector";

declare const vectorOfVectorPoint2fBrand: unique symbol;
export interface VectorOfVectorPoint2f
  extends
    Omit<OpenCvSharp.DisposableCvObject, "getSize1" | "getSize2" | "size" | "toArray">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput,
    OpenCvSharp.Internal.Vectors.IStdVectorInput<HostArray<OpenCvSharp.Point2f>> {
  readonly [vectorOfVectorPoint2fBrand]: true;
  getSize1(): number;
  readonly size: number;
  getSize2(): System.Collections.Generic.IReadOnlyList<number>;
  toArray(): HostArray<HostArray<OpenCvSharp.Point2f>>;
}

declare global {
  namespace OpenCvSharp.Internal.Vectors {
    type VectorOfVectorPoint2f = import("./VectorOfVectorPoint2f").VectorOfVectorPoint2f;
  }
}

export interface VectorOfVectorPoint2fHostType extends HostType<
  VectorOfVectorPoint2f,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): VectorOfVectorPoint2f;
}

export {};
