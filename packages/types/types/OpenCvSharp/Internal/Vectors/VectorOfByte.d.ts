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

declare const vectorOfByteBrand: unique symbol;
export interface VectorOfByte
  extends
    Omit<OpenCvSharp.DisposableCvObject, "elemPtr" | "size" | "toArray">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput,
    OpenCvSharp.Internal.Vectors.IStdVectorInput<number> {
  readonly [vectorOfByteBrand]: true;
  readonly size: number;
  readonly elemPtr: System.IntPtr;
  toArray(): HostArray<number>;
}

declare global {
  namespace OpenCvSharp.Internal.Vectors {
    type VectorOfByte = import("./VectorOfByte").VectorOfByte;
  }
}

export interface VectorOfByteHostType extends HostType<
  VectorOfByte,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): VectorOfByte;
  new (size: System.UIntPtr): VectorOfByte;
  new (data: System.Collections.Generic.IEnumerable<number>): VectorOfByte;
}

export {};
