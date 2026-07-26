import type {
  HostArray,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../../System/IDisposable";
import "../../../System/IntPtr";
import "../../DisposableCvObject";
import "../../ICvPtrHolder";
import "../../Point2d";
import "./IStdVector";

declare const vectorOfPoint2dBrand: unique symbol;
export interface VectorOfPoint2d
  extends
    Omit<OpenCvSharp.DisposableCvObject, "elemPtr" | "size" | "toArray">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput,
    OpenCvSharp.Internal.Vectors.IStdVectorInput<OpenCvSharp.Point2d> {
  readonly [vectorOfPoint2dBrand]: true;
  readonly size: number;
  readonly elemPtr: System.IntPtr;
  toArray(): HostArray<OpenCvSharp.Point2d>;
}

declare global {
  namespace OpenCvSharp.Internal.Vectors {
    type VectorOfPoint2d = import("./VectorOfPoint2d").VectorOfPoint2d;
  }
}

export interface VectorOfPoint2dHostType extends HostType<
  VectorOfPoint2d,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): VectorOfPoint2d;
}

export {};
