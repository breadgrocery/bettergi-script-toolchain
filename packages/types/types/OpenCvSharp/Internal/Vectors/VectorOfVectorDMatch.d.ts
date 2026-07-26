import type {
  HostArray,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../../System/Collections/Generic/IReadOnlyList";
import "../../../System/IDisposable";
import "../../DMatch";
import "../../DisposableCvObject";
import "../../ICvPtrHolder";
import "./IStdVector";

declare const vectorOfVectorDMatchBrand: unique symbol;
export interface VectorOfVectorDMatch
  extends
    Omit<OpenCvSharp.DisposableCvObject, "getSize1" | "getSize2" | "size" | "toArray">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput,
    OpenCvSharp.Internal.Vectors.IStdVectorInput<HostArray<OpenCvSharp.DMatch>> {
  readonly [vectorOfVectorDMatchBrand]: true;
  getSize1(): number;
  readonly size: number;
  getSize2(): System.Collections.Generic.IReadOnlyList<number>;
  toArray(): HostArray<HostArray<OpenCvSharp.DMatch>>;
}

declare global {
  namespace OpenCvSharp.Internal.Vectors {
    type VectorOfVectorDMatch = import("./VectorOfVectorDMatch").VectorOfVectorDMatch;
  }
}

export interface VectorOfVectorDMatchHostType extends HostType<
  VectorOfVectorDMatch,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): VectorOfVectorDMatch;
}

export {};
