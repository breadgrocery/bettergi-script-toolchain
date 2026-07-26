import type { HostType, ReferenceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../../System/IDisposable";
import "../ICvPtrHolder";
import "../InputArray";
import "../ML/SVM";
import "../Mat";
import "../OutputArray";
import "../Scalar";
import "./QualityBase";

declare const qualityBRISQUEBrand: unique symbol;
export interface QualityBRISQUE
  extends OpenCvSharp.Quality.QualityBase, System.IDisposableInput, OpenCvSharp.ICvPtrHolderInput {
  readonly [qualityBRISQUEBrand]: true;
}

declare global {
  namespace OpenCvSharp.Quality {
    type QualityBRISQUE = import("./QualityBRISQUE").QualityBRISQUE;
  }
}

export interface QualityBRISQUEHostType extends HostType<QualityBRISQUE, ReferenceTypeTrait> {
  create(modelFilePath: string, rangeFilePath: string): OpenCvSharp.Quality.QualityBRISQUE;
  create(model: OpenCvSharp.ML.SVM, range: OpenCvSharp.Mat): OpenCvSharp.Quality.QualityBRISQUE;
  compute(
    img: OpenCvSharp.InputArray,
    modelFilePath: string,
    rangeFilePath: string
  ): OpenCvSharp.Scalar;
  computeFeatures(img: OpenCvSharp.InputArray, features: OpenCvSharp.OutputArray): VoidResult;
}

export {};
