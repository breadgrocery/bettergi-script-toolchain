import type {
  ClrHostValue,
  DoubleHost,
  EnumInput,
  EnumTypeTrait,
  HostType,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../../System/Enum";
import "../../System/IComparable";
import "../../System/IConvertible";
import "../../System/IDisposable";
import "../../System/IFormattable";
import "../../System/ISpanFormattable";
import "../ICvPtrHolder";
import "../InputArray";
import "../Mat";
import "../TermCriteria";
import "./StatModel";

declare const aNN_MLPBrand: unique symbol;
export interface ANN_MLP
  extends
    Omit<
      OpenCvSharp.ML.StatModel,
      | "backpropMomentumScale"
      | "backpropWeightScale"
      | "getLayerSizes"
      | "getTrainMethod"
      | "rpropDW0"
      | "rpropDWMax"
      | "rpropDWMin"
      | "rpropDWMinus"
      | "rpropDWPlus"
      | "setActivationFunction"
      | "setLayerSizes"
      | "setTrainMethod"
      | "termCriteria"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [aNN_MLPBrand]: true;
  termCriteria: OpenCvSharp.TermCriteria;
  backpropWeightScale: number;
  backpropMomentumScale: number;
  rpropDW0: number;
  rpropDWPlus: number;
  rpropDWMinus: number;
  rpropDWMin: number;
  rpropDWMax: number;
  setTrainMethod(method: EnumInput<ANN_MLP_TrainingMethods>): VoidResult;
  setTrainMethod(
    method: EnumInput<ANN_MLP_TrainingMethods>,
    param1: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  setTrainMethod(
    method: EnumInput<ANN_MLP_TrainingMethods>,
    param1: number | StrongNumeric<DoubleHost>,
    param2: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  getTrainMethod(): ANN_MLP_TrainingMethods;
  setActivationFunction(type: EnumInput<ANN_MLP_ActivationFunctions>): VoidResult;
  setActivationFunction(
    type: EnumInput<ANN_MLP_ActivationFunctions>,
    param1: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  setActivationFunction(
    type: EnumInput<ANN_MLP_ActivationFunctions>,
    param1: number | StrongNumeric<DoubleHost>,
    param2: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  setLayerSizes(layerSizes: OpenCvSharp.InputArray): VoidResult;
  getLayerSizes(): OpenCvSharp.Mat;
}

declare const aNN_MLP_ActivationFunctionsBrand: unique symbol;
export interface ANN_MLP_ActivationFunctions extends ClrHostValue {
  readonly [aNN_MLP_ActivationFunctionsBrand]: true;
}

export interface ANN_MLP_ActivationFunctionsHostType extends HostType<
  ANN_MLP_ActivationFunctions,
  EnumTypeTrait
> {
  readonly identity: ANN_MLP_ActivationFunctions;
  readonly sigmoidSym: ANN_MLP_ActivationFunctions;
  readonly gaussian: ANN_MLP_ActivationFunctions;
}

declare global {
  namespace OpenCvSharp.ML.ANN_MLP {
    type ActivationFunctions = import("./ANN_MLP").ANN_MLP_ActivationFunctions;
  }
}

declare const aNN_MLP_TrainFlagsBrand: unique symbol;
export interface ANN_MLP_TrainFlags extends ClrHostValue {
  readonly [aNN_MLP_TrainFlagsBrand]: true;
}

export interface ANN_MLP_TrainFlagsHostType extends HostType<ANN_MLP_TrainFlags, EnumTypeTrait> {
  readonly updateWeights: ANN_MLP_TrainFlags;
  readonly noInputScale: ANN_MLP_TrainFlags;
  readonly noOutputScale: ANN_MLP_TrainFlags;
}

declare global {
  namespace OpenCvSharp.ML.ANN_MLP {
    type TrainFlags = import("./ANN_MLP").ANN_MLP_TrainFlags;
  }
}

declare const aNN_MLP_TrainingMethodsBrand: unique symbol;
export interface ANN_MLP_TrainingMethods extends ClrHostValue {
  readonly [aNN_MLP_TrainingMethodsBrand]: true;
}

export interface ANN_MLP_TrainingMethodsHostType extends HostType<
  ANN_MLP_TrainingMethods,
  EnumTypeTrait
> {
  readonly backProp: ANN_MLP_TrainingMethods;
  readonly rProp: ANN_MLP_TrainingMethods;
}

declare global {
  namespace OpenCvSharp.ML.ANN_MLP {
    type TrainingMethods = import("./ANN_MLP").ANN_MLP_TrainingMethods;
  }
}

declare global {
  namespace OpenCvSharp.ML {
    type ANN_MLP = import("./ANN_MLP").ANN_MLP;
  }
}

export interface ANN_MLPHostType extends HostType<ANN_MLP, ReferenceTypeTrait> {
  create(): OpenCvSharp.ML.ANN_MLP;
  load(filePath: string): OpenCvSharp.ML.ANN_MLP;
  loadFromString(strModel: string): OpenCvSharp.ML.ANN_MLP;
  readonly ActivationFunctions: ANN_MLP_ActivationFunctionsHostType;
  readonly TrainFlags: ANN_MLP_TrainFlagsHostType;
  readonly TrainingMethods: ANN_MLP_TrainingMethodsHostType;
}

export {};
