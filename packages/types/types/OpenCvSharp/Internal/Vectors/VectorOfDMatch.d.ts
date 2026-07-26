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
import "../../DMatch";
import "../../DisposableCvObject";
import "../../ICvPtrHolder";
import "./IStdVector";

declare const vectorOfDMatchBrand: unique symbol;
export interface VectorOfDMatch
  extends
    Omit<OpenCvSharp.DisposableCvObject, "elemPtr" | "size" | "toArray">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput,
    OpenCvSharp.Internal.Vectors.IStdVectorInput<OpenCvSharp.DMatch> {
  readonly [vectorOfDMatchBrand]: true;
  readonly size: number;
  readonly elemPtr: System.IntPtr;
  toArray(): HostArray<OpenCvSharp.DMatch>;
}

declare global {
  namespace OpenCvSharp.Internal.Vectors {
    type VectorOfDMatch = import("./VectorOfDMatch").VectorOfDMatch;
  }
}

export interface VectorOfDMatchHostType extends HostType<
  VectorOfDMatch,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): VectorOfDMatch;
  new (size: System.UIntPtr): VectorOfDMatch;
  new (data: System.Collections.Generic.IEnumerable<OpenCvSharp.DMatch>): VectorOfDMatch;
}

export {};
