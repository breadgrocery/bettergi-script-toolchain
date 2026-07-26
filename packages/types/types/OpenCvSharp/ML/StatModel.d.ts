import type {
  ClrHostValue,
  EnumInput,
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
import "../Algorithm";
import "../ICvPtrHolder";
import "../InputArray";
import "../OutputArray";
import "./SampleTypes";
import "./TrainData";

declare const statModelBrand: unique symbol;
export interface StatModel
  extends
    Omit<
      OpenCvSharp.Algorithm,
      "calcError" | "empty" | "getVarCount" | "isClassifier" | "isTrained" | "predict" | "train"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [statModelBrand]: true;
  getVarCount(): number;
  empty(): boolean;
  isTrained(): boolean;
  isClassifier(): boolean;
  train(
    samples: OpenCvSharp.InputArray,
    layout: EnumInput<OpenCvSharp.ML.SampleTypes>,
    responses: OpenCvSharp.InputArray
  ): boolean;
  train(trainData: OpenCvSharp.ML.TrainData): boolean;
  train(trainData: OpenCvSharp.ML.TrainData, flags: number | StrongNumeric<Int32Host>): boolean;
  calcError(data: OpenCvSharp.ML.TrainData, test: boolean, resp: OpenCvSharp.OutputArray): number;
  predict(samples: OpenCvSharp.InputArray): number;
  predict(samples: OpenCvSharp.InputArray, results: OpenCvSharp.OutputArray | null): number;
  predict(
    samples: OpenCvSharp.InputArray,
    results: OpenCvSharp.OutputArray | null,
    flags: EnumInput<StatModel_Flags>
  ): number;
}

declare const statModel_FlagsBrand: unique symbol;
export interface StatModel_Flags extends ClrHostValue {
  readonly [statModel_FlagsBrand]: true;
}

export interface StatModel_FlagsHostType extends HostType<StatModel_Flags, EnumTypeTrait> {
  readonly updateModel: StatModel_Flags;
  readonly rawOutput: StatModel_Flags;
  readonly compressedInput: StatModel_Flags;
  readonly preprocessedInput: StatModel_Flags;
}

declare global {
  namespace OpenCvSharp.ML.StatModel {
    type Flags = import("./StatModel").StatModel_Flags;
  }
}

declare global {
  namespace OpenCvSharp.ML {
    type StatModel = import("./StatModel").StatModel;
  }
}

export interface StatModelHostType extends HostType<StatModel, ReferenceTypeTrait> {
  readonly Flags: StatModel_FlagsHostType;
}

export {};
