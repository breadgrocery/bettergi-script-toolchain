import type { HostType, ReferenceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../../System/IDisposable";
import "../Algorithm";
import "../ICvPtrHolder";
import "../InputArray";
import "../OutputArray";

declare const imgHashBaseBrand: unique symbol;
export interface ImgHashBase
  extends
    Omit<OpenCvSharp.Algorithm, "compare" | "compute">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [imgHashBaseBrand]: true;
  compute(inputArr: OpenCvSharp.InputArray, outputArr: OpenCvSharp.OutputArray): VoidResult;
  compare(hashOne: OpenCvSharp.InputArray, hashTwo: OpenCvSharp.InputArray): number;
}

declare global {
  namespace OpenCvSharp.ImgHash {
    type ImgHashBase = import("./ImgHashBase").ImgHashBase;
  }
}

export interface ImgHashBaseHostType extends HostType<ImgHashBase, ReferenceTypeTrait> {}

export {};
