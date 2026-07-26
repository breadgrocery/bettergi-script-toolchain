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
import "../../ML/DTrees";
import "./IStdVector";

declare const vectorOfDTreesNodeBrand: unique symbol;
export interface VectorOfDTreesNode
  extends
    Omit<OpenCvSharp.DisposableCvObject, "elemPtr" | "size" | "toArray">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput,
    OpenCvSharp.Internal.Vectors.IStdVectorInput<OpenCvSharp.ML.DTrees.Node> {
  readonly [vectorOfDTreesNodeBrand]: true;
  readonly size: number;
  readonly elemPtr: System.IntPtr;
  toArray(): HostArray<OpenCvSharp.ML.DTrees.Node>;
}

declare global {
  namespace OpenCvSharp.Internal.Vectors {
    type VectorOfDTreesNode = import("./VectorOfDTreesNode").VectorOfDTreesNode;
  }
}

export interface VectorOfDTreesNodeHostType extends HostType<
  VectorOfDTreesNode,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): VectorOfDTreesNode;
}

export {};
