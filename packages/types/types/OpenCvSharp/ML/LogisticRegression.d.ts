import type {
  ClrHostValue,
  EnumTypeTrait,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import "../../System/Enum";
import "../../System/IComparable";
import "../../System/IConvertible";
import "../../System/IDisposable";
import "../../System/IFormattable";
import "../../System/ISpanFormattable";
import "../ICvPtrHolder";
import "../InputArray";
import "../Mat";
import "../OutputArray";
import "../TermCriteria";
import "./StatModel";

declare const logisticRegressionBrand: unique symbol;
export interface LogisticRegression
  extends
    Omit<
      OpenCvSharp.ML.StatModel,
      | "getLearntThetas"
      | "iterations"
      | "learningRate"
      | "miniBatchSize"
      | "predict"
      | "regularization"
      | "termCriteria"
      | "trainMethod"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [logisticRegressionBrand]: true;
  learningRate: number;
  iterations: number;
  regularization: LogisticRegression_RegKinds;
  trainMethod: LogisticRegression_Methods;
  miniBatchSize: number;
  termCriteria: OpenCvSharp.TermCriteria;
  predict(samples: OpenCvSharp.InputArray): number;
  predict(samples: OpenCvSharp.InputArray, results: OpenCvSharp.OutputArray | null): number;
  predict(
    samples: OpenCvSharp.InputArray,
    results: OpenCvSharp.OutputArray | null,
    flags: number | StrongNumeric<Int32Host>
  ): number;
  getLearntThetas(): OpenCvSharp.Mat;
}

declare const logisticRegression_RegKindsBrand: unique symbol;
export interface LogisticRegression_RegKinds extends ClrHostValue {
  readonly [logisticRegression_RegKindsBrand]: true;
}

export interface LogisticRegression_RegKindsHostType extends HostType<
  LogisticRegression_RegKinds,
  EnumTypeTrait
> {
  readonly regDisable: LogisticRegression_RegKinds;
  readonly regL1: LogisticRegression_RegKinds;
  readonly regL2: LogisticRegression_RegKinds;
}

declare global {
  namespace OpenCvSharp.ML.LogisticRegression {
    type RegKinds = import("./LogisticRegression").LogisticRegression_RegKinds;
  }
}

declare const logisticRegression_MethodsBrand: unique symbol;
export interface LogisticRegression_Methods extends ClrHostValue {
  readonly [logisticRegression_MethodsBrand]: true;
}

export interface LogisticRegression_MethodsHostType extends HostType<
  LogisticRegression_Methods,
  EnumTypeTrait
> {
  readonly batch: LogisticRegression_Methods;
  readonly miniBatch: LogisticRegression_Methods;
}

declare global {
  namespace OpenCvSharp.ML.LogisticRegression {
    type Methods = import("./LogisticRegression").LogisticRegression_Methods;
  }
}

declare global {
  namespace OpenCvSharp.ML {
    type LogisticRegression = import("./LogisticRegression").LogisticRegression;
  }
}

export interface LogisticRegressionHostType extends HostType<
  LogisticRegression,
  ReferenceTypeTrait
> {
  create(): OpenCvSharp.ML.LogisticRegression;
  load(filePath: string): OpenCvSharp.ML.LogisticRegression;
  loadFromString(strModel: string): OpenCvSharp.ML.LogisticRegression;
  readonly RegKinds: LogisticRegression_RegKindsHostType;
  readonly Methods: LogisticRegression_MethodsHostType;
}

export {};
