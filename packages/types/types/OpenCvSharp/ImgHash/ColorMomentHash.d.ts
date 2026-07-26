import type { HostType, ReferenceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../../System/IDisposable";
import "../ICvPtrHolder";
import "../InputArray";
import "../OutputArray";
import "./ImgHashBase";

declare const colorMomentHashBrand: unique symbol;
export interface ColorMomentHash
  extends
    Omit<OpenCvSharp.ImgHash.ImgHashBase, "compute">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [colorMomentHashBrand]: true;
  compute(inputArr: OpenCvSharp.InputArray, outputArr: OpenCvSharp.OutputArray): VoidResult;
}

declare global {
  namespace OpenCvSharp.ImgHash {
    type ColorMomentHash = import("./ColorMomentHash").ColorMomentHash;
  }
}

export interface ColorMomentHashHostType extends HostType<ColorMomentHash, ReferenceTypeTrait> {
  create(): OpenCvSharp.ImgHash.ColorMomentHash;
}

export {};
