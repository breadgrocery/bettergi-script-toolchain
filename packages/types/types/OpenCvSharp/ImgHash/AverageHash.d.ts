import type { HostType, ReferenceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import "../../System/IDisposable";
import "../ICvPtrHolder";
import "./ImgHashBase";

declare const averageHashBrand: unique symbol;
export interface AverageHash
  extends OpenCvSharp.ImgHash.ImgHashBase, System.IDisposableInput, OpenCvSharp.ICvPtrHolderInput {
  readonly [averageHashBrand]: true;
}

declare global {
  namespace OpenCvSharp.ImgHash {
    type AverageHash = import("./AverageHash").AverageHash;
  }
}

export interface AverageHashHostType extends HostType<AverageHash, ReferenceTypeTrait> {
  create(): OpenCvSharp.ImgHash.AverageHash;
}

export {};
