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
import "../../System/Nullable";
import "../ICvPtrHolder";
import "../Mat";
import "../OutputArray";
import "../TermCriteria";
import "./ParamGrid";
import "./StatModel";
import "./TrainData";

declare const sVMBrand: unique symbol;
export interface SVM
  extends
    Omit<
      OpenCvSharp.ML.StatModel,
      | "c"
      | "classWeights"
      | "coef0"
      | "degree"
      | "gamma"
      | "getDecisionFunction"
      | "getSupportVectors"
      | "kernelType"
      | "nu"
      | "p"
      | "termCriteria"
      | "trainAuto"
      | "type"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [sVMBrand]: true;
  type: SVM_Types;
  gamma: number;
  coef0: number;
  degree: number;
  c: number;
  nu: number;
  p: number;
  classWeights: OpenCvSharp.Mat;
  termCriteria: OpenCvSharp.TermCriteria;
  kernelType: SVM_KernelTypes;
  trainAuto(data: OpenCvSharp.ML.TrainData): boolean;
  trainAuto(data: OpenCvSharp.ML.TrainData, kFold: number | StrongNumeric<Int32Host>): boolean;
  trainAuto(
    data: OpenCvSharp.ML.TrainData,
    kFold: number | StrongNumeric<Int32Host>,
    cGrid: OpenCvSharp.ML.ParamGrid | null | null
  ): boolean;
  trainAuto(
    data: OpenCvSharp.ML.TrainData,
    kFold: number | StrongNumeric<Int32Host>,
    cGrid: OpenCvSharp.ML.ParamGrid | null | null,
    gammaGrid: OpenCvSharp.ML.ParamGrid | null | null
  ): boolean;
  trainAuto(
    data: OpenCvSharp.ML.TrainData,
    kFold: number | StrongNumeric<Int32Host>,
    cGrid: OpenCvSharp.ML.ParamGrid | null | null,
    gammaGrid: OpenCvSharp.ML.ParamGrid | null | null,
    pGrid: OpenCvSharp.ML.ParamGrid | null | null
  ): boolean;
  trainAuto(
    data: OpenCvSharp.ML.TrainData,
    kFold: number | StrongNumeric<Int32Host>,
    cGrid: OpenCvSharp.ML.ParamGrid | null | null,
    gammaGrid: OpenCvSharp.ML.ParamGrid | null | null,
    pGrid: OpenCvSharp.ML.ParamGrid | null | null,
    nuGrid: OpenCvSharp.ML.ParamGrid | null | null
  ): boolean;
  trainAuto(
    data: OpenCvSharp.ML.TrainData,
    kFold: number | StrongNumeric<Int32Host>,
    cGrid: OpenCvSharp.ML.ParamGrid | null | null,
    gammaGrid: OpenCvSharp.ML.ParamGrid | null | null,
    pGrid: OpenCvSharp.ML.ParamGrid | null | null,
    nuGrid: OpenCvSharp.ML.ParamGrid | null | null,
    coeffGrid: OpenCvSharp.ML.ParamGrid | null | null
  ): boolean;
  trainAuto(
    data: OpenCvSharp.ML.TrainData,
    kFold: number | StrongNumeric<Int32Host>,
    cGrid: OpenCvSharp.ML.ParamGrid | null | null,
    gammaGrid: OpenCvSharp.ML.ParamGrid | null | null,
    pGrid: OpenCvSharp.ML.ParamGrid | null | null,
    nuGrid: OpenCvSharp.ML.ParamGrid | null | null,
    coeffGrid: OpenCvSharp.ML.ParamGrid | null | null,
    degreeGrid: OpenCvSharp.ML.ParamGrid | null | null
  ): boolean;
  trainAuto(
    data: OpenCvSharp.ML.TrainData,
    kFold: number | StrongNumeric<Int32Host>,
    cGrid: OpenCvSharp.ML.ParamGrid | null | null,
    gammaGrid: OpenCvSharp.ML.ParamGrid | null | null,
    pGrid: OpenCvSharp.ML.ParamGrid | null | null,
    nuGrid: OpenCvSharp.ML.ParamGrid | null | null,
    coeffGrid: OpenCvSharp.ML.ParamGrid | null | null,
    degreeGrid: OpenCvSharp.ML.ParamGrid | null | null,
    balanced: boolean
  ): boolean;
  getSupportVectors(): OpenCvSharp.Mat;
  getDecisionFunction(
    i: number | StrongNumeric<Int32Host>,
    alpha: OpenCvSharp.OutputArray,
    svidx: OpenCvSharp.OutputArray
  ): number;
}

declare const sVM_TypesBrand: unique symbol;
export interface SVM_Types extends ClrHostValue {
  readonly [sVM_TypesBrand]: true;
}

export interface SVM_TypesHostType extends HostType<SVM_Types, EnumTypeTrait> {
  readonly cSvc: SVM_Types;
  readonly nuSvc: SVM_Types;
  readonly oneClass: SVM_Types;
  readonly epsSvr: SVM_Types;
  readonly nuSvr: SVM_Types;
}

declare global {
  namespace OpenCvSharp.ML.SVM {
    type Types = import("./SVM").SVM_Types;
  }
}

declare const sVM_KernelTypesBrand: unique symbol;
export interface SVM_KernelTypes extends ClrHostValue {
  readonly [sVM_KernelTypesBrand]: true;
}

export interface SVM_KernelTypesHostType extends HostType<SVM_KernelTypes, EnumTypeTrait> {
  readonly custom: SVM_KernelTypes;
  readonly linear: SVM_KernelTypes;
  readonly poly: SVM_KernelTypes;
  readonly rbf: SVM_KernelTypes;
  readonly sigmoid: SVM_KernelTypes;
  readonly chi2: SVM_KernelTypes;
  readonly inter: SVM_KernelTypes;
}

declare global {
  namespace OpenCvSharp.ML.SVM {
    type KernelTypes = import("./SVM").SVM_KernelTypes;
  }
}

declare const sVM_ParamTypesBrand: unique symbol;
export interface SVM_ParamTypes extends ClrHostValue {
  readonly [sVM_ParamTypesBrand]: true;
}

export interface SVM_ParamTypesHostType extends HostType<SVM_ParamTypes, EnumTypeTrait> {
  readonly c: SVM_ParamTypes;
  readonly gamma: SVM_ParamTypes;
  readonly p: SVM_ParamTypes;
  readonly nu: SVM_ParamTypes;
  readonly coef: SVM_ParamTypes;
  readonly degree: SVM_ParamTypes;
}

declare global {
  namespace OpenCvSharp.ML.SVM {
    type ParamTypes = import("./SVM").SVM_ParamTypes;
  }
}

declare global {
  namespace OpenCvSharp.ML {
    type SVM = import("./SVM").SVM;
  }
}

export interface SVMHostType extends HostType<SVM, ReferenceTypeTrait> {
  create(): OpenCvSharp.ML.SVM;
  load(filePath: string): OpenCvSharp.ML.SVM;
  loadFromString(strModel: string): OpenCvSharp.ML.SVM;
  getDefaultGrid(paramId: EnumInput<SVM_ParamTypes>): OpenCvSharp.ML.ParamGrid;
  readonly Types: SVM_TypesHostType;
  readonly KernelTypes: SVM_KernelTypesHostType;
  readonly ParamTypes: SVM_ParamTypesHostType;
}

export {};
