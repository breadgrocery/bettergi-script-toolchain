import type { HostType, ReferenceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../../System/IDisposable";
import "../Algorithm";
import "../ICvPtrHolder";
import "../InputArray";
import "../OutputArray";
import "../Scalar";

declare const qualityBaseBrand: unique symbol;
export interface QualityBase
  extends
    Omit<OpenCvSharp.Algorithm, "clear" | "compute" | "empty" | "getQualityMap">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [qualityBaseBrand]: true;
  readonly empty: boolean;
  getQualityMap(dst: OpenCvSharp.OutputArray): VoidResult;
  compute(img: OpenCvSharp.InputArray): OpenCvSharp.Scalar;
  clear(): VoidResult;
}

declare global {
  namespace OpenCvSharp.Quality {
    type QualityBase = import("./QualityBase").QualityBase;
  }
}

export interface QualityBaseHostType extends HostType<QualityBase, ReferenceTypeTrait> {}

export {};
