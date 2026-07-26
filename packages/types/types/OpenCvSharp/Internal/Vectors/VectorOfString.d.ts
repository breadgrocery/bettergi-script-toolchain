import type {
  HostArray,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../../System/IDisposable";
import "../../../System/UIntPtr";
import "../../DisposableCvObject";
import "../../ICvPtrHolder";
import "./IStdVector";

declare const vectorOfStringBrand: unique symbol;
export interface VectorOfString
  extends
    Omit<OpenCvSharp.DisposableCvObject, "size" | "toArray">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput,
    OpenCvSharp.Internal.Vectors.IStdVectorInput<string> {
  readonly [vectorOfStringBrand]: true;
  readonly size: number;
  toArray(): HostArray<string>;
}

declare global {
  namespace OpenCvSharp.Internal.Vectors {
    type VectorOfString = import("./VectorOfString").VectorOfString;
  }
}

export interface VectorOfStringHostType extends HostType<
  VectorOfString,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): VectorOfString;
  new (size: System.UIntPtr): VectorOfString;
}

export {};
