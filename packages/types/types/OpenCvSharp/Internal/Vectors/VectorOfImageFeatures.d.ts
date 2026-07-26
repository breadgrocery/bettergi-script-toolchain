import type {
  HostArray,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../../System/IDisposable";
import "../../Detail/ImageFeatures";
import "../../DisposableCvObject";
import "../../ICvPtrHolder";
import "./IStdVector";

declare const vectorOfImageFeaturesBrand: unique symbol;
export interface VectorOfImageFeatures
  extends
    Omit<OpenCvSharp.DisposableCvObject, "size" | "toArray">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput,
    OpenCvSharp.Internal.Vectors.IStdVectorInput<OpenCvSharp.Detail.ImageFeatures> {
  readonly [vectorOfImageFeaturesBrand]: true;
  readonly size: number;
  toArray(): HostArray<OpenCvSharp.Detail.ImageFeatures>;
}

declare global {
  namespace OpenCvSharp.Internal.Vectors {
    type VectorOfImageFeatures = import("./VectorOfImageFeatures").VectorOfImageFeatures;
  }
}

export interface VectorOfImageFeaturesHostType extends HostType<
  VectorOfImageFeatures,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): VectorOfImageFeatures;
}

export {};
