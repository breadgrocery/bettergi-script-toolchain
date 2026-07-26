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

declare const vectorOfFloatBrand: unique symbol;
export interface VectorOfFloat
  extends
    Omit<OpenCvSharp.DisposableCvObject, "elemPtr" | "size" | "toArray">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput,
    OpenCvSharp.Internal.Vectors.IStdVectorInput<number> {
  readonly [vectorOfFloatBrand]: true;
  readonly size: number;
  readonly elemPtr: System.IntPtr;
  toArray(): HostArray<number>;
}

declare global {
  namespace OpenCvSharp.Internal.Vectors {
    type VectorOfFloat = import("./VectorOfFloat").VectorOfFloat;
  }
}

export interface VectorOfFloatHostType extends HostType<
  VectorOfFloat,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): VectorOfFloat;
  new (size: System.UIntPtr): VectorOfFloat;
  new (data: System.Collections.Generic.IEnumerable<number>): VectorOfFloat;
}

export {};
