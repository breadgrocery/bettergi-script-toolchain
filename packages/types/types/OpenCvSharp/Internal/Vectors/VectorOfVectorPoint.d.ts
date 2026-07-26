import type {
  HostArray,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../../System/Collections/Generic/IReadOnlyList";
import "../../../System/IDisposable";
import "../../../System/UIntPtr";
import "../../DisposableCvObject";
import "../../ICvPtrHolder";
import "../../Point";
import "./IStdVector";

declare const vectorOfVectorPointBrand: unique symbol;
export interface VectorOfVectorPoint
  extends
    Omit<OpenCvSharp.DisposableCvObject, "getSize1" | "getSize2" | "size" | "toArray">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput,
    OpenCvSharp.Internal.Vectors.IStdVectorInput<HostArray<OpenCvSharp.Point>> {
  readonly [vectorOfVectorPointBrand]: true;
  getSize1(): number;
  readonly size: number;
  getSize2(): System.Collections.Generic.IReadOnlyList<number>;
  toArray(): HostArray<HostArray<OpenCvSharp.Point>>;
}

declare global {
  namespace OpenCvSharp.Internal.Vectors {
    type VectorOfVectorPoint = import("./VectorOfVectorPoint").VectorOfVectorPoint;
  }
}

export interface VectorOfVectorPointHostType extends HostType<
  VectorOfVectorPoint,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): VectorOfVectorPoint;
  new (size: System.UIntPtr): VectorOfVectorPoint;
}

export {};
