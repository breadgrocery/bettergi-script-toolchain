import type { HostType, ReferenceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../../System/IDisposable";
import "../ICvPtrHolder";
import "../InputArray";
import "../OutputArray";
import "./ImgHashBase";

declare const pHashBrand: unique symbol;
export interface PHash
  extends
    Omit<OpenCvSharp.ImgHash.ImgHashBase, "compute">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [pHashBrand]: true;
  compute(inputArr: OpenCvSharp.InputArray, outputArr: OpenCvSharp.OutputArray): VoidResult;
}

declare global {
  namespace OpenCvSharp.ImgHash {
    type PHash = import("./PHash").PHash;
  }
}

export interface PHashHostType extends HostType<PHash, ReferenceTypeTrait> {
  create(): OpenCvSharp.ImgHash.PHash;
}

export {};
