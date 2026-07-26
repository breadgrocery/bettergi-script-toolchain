import type {
  ClrHostValue,
  EnumTypeTrait,
  HostArray,
  HostType,
  ReferenceTypeTrait
} from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IDisposable";
import "../System/IFormattable";
import "../System/ISpanFormattable";
import "./Algorithm";
import "./ICvPtrHolder";
import "./InputArray";
import "./Mat";
import "./OutputArray";
import "./TermCriteria";
import "./Vec2d";

declare const eMBrand: unique symbol;
export interface EM
  extends
    Omit<
      OpenCvSharp.Algorithm,
      | "clustersNumber"
      | "covarianceMatrixType"
      | "getCovs"
      | "getMeans"
      | "getWeights"
      | "predict2"
      | "termCriteria"
      | "trainE"
      | "trainEM"
      | "trainM"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [eMBrand]: true;
  clustersNumber: number;
  covarianceMatrixType: number;
  termCriteria: OpenCvSharp.TermCriteria;
  getWeights(): OpenCvSharp.Mat;
  getMeans(): OpenCvSharp.Mat;
  getCovs(): HostArray<OpenCvSharp.Mat>;
  trainEM(samples: OpenCvSharp.InputArray): boolean;
  trainEM(samples: OpenCvSharp.InputArray, logLikelihoods: OpenCvSharp.OutputArray | null): boolean;
  trainEM(
    samples: OpenCvSharp.InputArray,
    logLikelihoods: OpenCvSharp.OutputArray | null,
    labels: OpenCvSharp.OutputArray | null
  ): boolean;
  trainEM(
    samples: OpenCvSharp.InputArray,
    logLikelihoods: OpenCvSharp.OutputArray | null,
    labels: OpenCvSharp.OutputArray | null,
    probs: OpenCvSharp.OutputArray | null
  ): boolean;
  trainE(samples: OpenCvSharp.InputArray, means0: OpenCvSharp.InputArray): boolean;
  trainE(
    samples: OpenCvSharp.InputArray,
    means0: OpenCvSharp.InputArray,
    covs0: OpenCvSharp.InputArray | null
  ): boolean;
  trainE(
    samples: OpenCvSharp.InputArray,
    means0: OpenCvSharp.InputArray,
    covs0: OpenCvSharp.InputArray | null,
    weights0: OpenCvSharp.InputArray | null
  ): boolean;
  trainE(
    samples: OpenCvSharp.InputArray,
    means0: OpenCvSharp.InputArray,
    covs0: OpenCvSharp.InputArray | null,
    weights0: OpenCvSharp.InputArray | null,
    logLikelihoods: OpenCvSharp.OutputArray | null
  ): boolean;
  trainE(
    samples: OpenCvSharp.InputArray,
    means0: OpenCvSharp.InputArray,
    covs0: OpenCvSharp.InputArray | null,
    weights0: OpenCvSharp.InputArray | null,
    logLikelihoods: OpenCvSharp.OutputArray | null,
    labels: OpenCvSharp.OutputArray | null
  ): boolean;
  trainE(
    samples: OpenCvSharp.InputArray,
    means0: OpenCvSharp.InputArray,
    covs0: OpenCvSharp.InputArray | null,
    weights0: OpenCvSharp.InputArray | null,
    logLikelihoods: OpenCvSharp.OutputArray | null,
    labels: OpenCvSharp.OutputArray | null,
    probs: OpenCvSharp.OutputArray | null
  ): boolean;
  trainM(samples: OpenCvSharp.InputArray, probs0: OpenCvSharp.InputArray): boolean;
  trainM(
    samples: OpenCvSharp.InputArray,
    probs0: OpenCvSharp.InputArray,
    logLikelihoods: OpenCvSharp.OutputArray | null
  ): boolean;
  trainM(
    samples: OpenCvSharp.InputArray,
    probs0: OpenCvSharp.InputArray,
    logLikelihoods: OpenCvSharp.OutputArray | null,
    labels: OpenCvSharp.OutputArray | null
  ): boolean;
  trainM(
    samples: OpenCvSharp.InputArray,
    probs0: OpenCvSharp.InputArray,
    logLikelihoods: OpenCvSharp.OutputArray | null,
    labels: OpenCvSharp.OutputArray | null,
    probs: OpenCvSharp.OutputArray | null
  ): boolean;
  predict2(sample: OpenCvSharp.InputArray): OpenCvSharp.Vec2d;
  predict2(
    sample: OpenCvSharp.InputArray,
    probs: OpenCvSharp.OutputArray | null
  ): OpenCvSharp.Vec2d;
}

declare global {
  namespace OpenCvSharp {
    type EM = import("./EM").EM;
  }
}

export interface EMHostType extends HostType<EM, ReferenceTypeTrait> {
  readonly defaulT_NCLUSTERS: number;
  readonly defaulT_MAX_ITERS: number;
  create(): OpenCvSharp.EM;
  load(filePath: string): OpenCvSharp.EM;
  loadFromString(strModel: string): OpenCvSharp.EM;
}

declare const eMStartStepBrand: unique symbol;
export interface EMStartStep extends ClrHostValue {
  readonly [eMStartStepBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type EMStartStep = import("./EM").EMStartStep;
  }
}

export interface EMStartStepHostType extends HostType<EMStartStep, EnumTypeTrait> {
  readonly e: EMStartStep;
  readonly m: EMStartStep;
  readonly auto: EMStartStep;
}

declare const eMTypesBrand: unique symbol;
export interface EMTypes extends ClrHostValue {
  readonly [eMTypesBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type EMTypes = import("./EM").EMTypes;
  }
}

export interface EMTypesHostType extends HostType<EMTypes, EnumTypeTrait> {
  readonly covMatSpherical: EMTypes;
  readonly covMatDiagonal: EMTypes;
  readonly covMatGeneric: EMTypes;
  readonly covMatDefault: EMTypes;
}

export {};
