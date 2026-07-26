import type { HostType, ReferenceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import "../../System/IDisposable";
import "../ICvPtrHolder";
import "../InputArray";
import "../OutputArray";
import "../Scalar";
import "./QualityBase";

declare const qualityMSEBrand: unique symbol;
export interface QualityMSE
  extends OpenCvSharp.Quality.QualityBase, System.IDisposableInput, OpenCvSharp.ICvPtrHolderInput {
  readonly [qualityMSEBrand]: true;
}

declare global {
  namespace OpenCvSharp.Quality {
    type QualityMSE = import("./QualityMSE").QualityMSE;
  }
}

export interface QualityMSEHostType extends HostType<QualityMSE, ReferenceTypeTrait> {
  create(ref: OpenCvSharp.InputArray): OpenCvSharp.Quality.QualityMSE;
  compute(
    ref: OpenCvSharp.InputArray,
    cmp: OpenCvSharp.InputArray,
    qualityMap: OpenCvSharp.OutputArray | null
  ): OpenCvSharp.Scalar;
}

export {};
