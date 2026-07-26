import type { HostType, ReferenceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import "../../System/IDisposable";
import "../ICvPtrHolder";
import "../InputArray";
import "../OutputArray";
import "../Scalar";
import "./QualityBase";

declare const qualitySSIMBrand: unique symbol;
export interface QualitySSIM
  extends OpenCvSharp.Quality.QualityBase, System.IDisposableInput, OpenCvSharp.ICvPtrHolderInput {
  readonly [qualitySSIMBrand]: true;
}

declare global {
  namespace OpenCvSharp.Quality {
    type QualitySSIM = import("./QualitySSIM").QualitySSIM;
  }
}

export interface QualitySSIMHostType extends HostType<QualitySSIM, ReferenceTypeTrait> {
  create(ref: OpenCvSharp.InputArray): OpenCvSharp.Quality.QualitySSIM;
  compute(
    ref: OpenCvSharp.InputArray,
    cmp: OpenCvSharp.InputArray,
    qualityMap: OpenCvSharp.OutputArray | null
  ): OpenCvSharp.Scalar;
}

export {};
