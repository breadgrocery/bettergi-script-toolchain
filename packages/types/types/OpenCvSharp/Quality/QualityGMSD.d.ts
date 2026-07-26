import type { HostType, ReferenceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import "../../System/IDisposable";
import "../ICvPtrHolder";
import "../InputArray";
import "../OutputArray";
import "../Scalar";
import "./QualityBase";

declare const qualityGMSDBrand: unique symbol;
export interface QualityGMSD
  extends OpenCvSharp.Quality.QualityBase, System.IDisposableInput, OpenCvSharp.ICvPtrHolderInput {
  readonly [qualityGMSDBrand]: true;
}

declare global {
  namespace OpenCvSharp.Quality {
    type QualityGMSD = import("./QualityGMSD").QualityGMSD;
  }
}

export interface QualityGMSDHostType extends HostType<QualityGMSD, ReferenceTypeTrait> {
  create(ref: OpenCvSharp.InputArray): OpenCvSharp.Quality.QualityGMSD;
  compute(
    ref: OpenCvSharp.InputArray,
    cmp: OpenCvSharp.InputArray,
    qualityMap: OpenCvSharp.OutputArray | null
  ): OpenCvSharp.Scalar;
}

export {};
