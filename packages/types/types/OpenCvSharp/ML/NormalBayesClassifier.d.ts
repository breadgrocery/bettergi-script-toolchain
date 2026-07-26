import type {
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import "../../System/IDisposable";
import "../ICvPtrHolder";
import "../InputArray";
import "../OutputArray";
import "./StatModel";

declare const normalBayesClassifierBrand: unique symbol;
export interface NormalBayesClassifier
  extends
    Omit<OpenCvSharp.ML.StatModel, "predictProb">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [normalBayesClassifierBrand]: true;
  predictProb(
    inputs: OpenCvSharp.InputArray,
    outputs: OpenCvSharp.OutputArray,
    outputProbs: OpenCvSharp.OutputArray
  ): number;
  predictProb(
    inputs: OpenCvSharp.InputArray,
    outputs: OpenCvSharp.OutputArray,
    outputProbs: OpenCvSharp.OutputArray,
    flags: number | StrongNumeric<Int32Host>
  ): number;
}

declare global {
  namespace OpenCvSharp.ML {
    type NormalBayesClassifier = import("./NormalBayesClassifier").NormalBayesClassifier;
  }
}

export interface NormalBayesClassifierHostType extends HostType<
  NormalBayesClassifier,
  ReferenceTypeTrait
> {
  create(): OpenCvSharp.ML.NormalBayesClassifier;
  load(filePath: string): OpenCvSharp.ML.NormalBayesClassifier;
  loadFromString(strModel: string): OpenCvSharp.ML.NormalBayesClassifier;
}

export {};
