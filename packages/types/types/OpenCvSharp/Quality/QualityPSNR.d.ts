import type {
  DoubleHost,
  HostType,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import "../../System/IDisposable";
import "../ICvPtrHolder";
import "../InputArray";
import "../OutputArray";
import "../Scalar";
import "./QualityBase";

declare const qualityPSNRBrand: unique symbol;
export interface QualityPSNR
  extends
    Omit<OpenCvSharp.Quality.QualityBase, "maxPixelValue">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [qualityPSNRBrand]: true;
  maxPixelValue: number;
}

declare global {
  namespace OpenCvSharp.Quality {
    type QualityPSNR = import("./QualityPSNR").QualityPSNR;
  }
}

export interface QualityPSNRHostType extends HostType<QualityPSNR, ReferenceTypeTrait> {
  create(ref: OpenCvSharp.InputArray): OpenCvSharp.Quality.QualityPSNR;
  create(
    ref: OpenCvSharp.InputArray,
    maxPixelValue: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Quality.QualityPSNR;
  compute(
    ref: OpenCvSharp.InputArray,
    cmp: OpenCvSharp.InputArray,
    qualityMap: OpenCvSharp.OutputArray | null
  ): OpenCvSharp.Scalar;
  compute(
    ref: OpenCvSharp.InputArray,
    cmp: OpenCvSharp.InputArray,
    qualityMap: OpenCvSharp.OutputArray | null,
    maxPixelValue: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Scalar;
}

export {};
