import type {
  EnumInput,
  HostArray,
  HostType,
  ReferenceTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../../System/IDisposable";
import "../ICvPtrHolder";
import "./BlockMeanHashMode";
import "./ImgHashBase";

declare const blockMeanHashBrand: unique symbol;
export interface BlockMeanHash
  extends
    Omit<OpenCvSharp.ImgHash.ImgHashBase, "getMean" | "setMode">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [blockMeanHashBrand]: true;
  setMode(mode: EnumInput<OpenCvSharp.ImgHash.BlockMeanHashMode>): VoidResult;
  getMean(): HostArray<number>;
}

declare global {
  namespace OpenCvSharp.ImgHash {
    type BlockMeanHash = import("./BlockMeanHash").BlockMeanHash;
  }
}

export interface BlockMeanHashHostType extends HostType<BlockMeanHash, ReferenceTypeTrait> {
  create(): OpenCvSharp.ImgHash.BlockMeanHash;
  create(mode: EnumInput<OpenCvSharp.ImgHash.BlockMeanHashMode>): OpenCvSharp.ImgHash.BlockMeanHash;
}

export {};
