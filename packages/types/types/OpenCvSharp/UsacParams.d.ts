import type {
  ClrHostValue,
  EnumTypeTrait,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  ValueTypeTrait
} from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IEquatable";
import "../System/IFormattable";
import "../System/ISpanFormattable";
import "../System/ValueType";

declare const localOptimMethodBrand: unique symbol;
export interface LocalOptimMethod extends ClrHostValue {
  readonly [localOptimMethodBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type LocalOptimMethod = import("./UsacParams").LocalOptimMethod;
  }
}

export interface LocalOptimMethodHostType extends HostType<LocalOptimMethod, EnumTypeTrait> {
  readonly null: LocalOptimMethod;
  readonly inneR_LO: LocalOptimMethod;
  readonly inneR_AND_ITER_LO: LocalOptimMethod;
  readonly gc: LocalOptimMethod;
  readonly sigma: LocalOptimMethod;
}

declare const neighborSearchMethodBrand: unique symbol;
export interface NeighborSearchMethod extends ClrHostValue {
  readonly [neighborSearchMethodBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type NeighborSearchMethod = import("./UsacParams").NeighborSearchMethod;
  }
}

export interface NeighborSearchMethodHostType extends HostType<
  NeighborSearchMethod,
  EnumTypeTrait
> {
  readonly flanN_KNN: NeighborSearchMethod;
  readonly grid: NeighborSearchMethod;
  readonly flanN_RADIUS: NeighborSearchMethod;
}

declare const samplingMethodBrand: unique symbol;
export interface SamplingMethod extends ClrHostValue {
  readonly [samplingMethodBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type SamplingMethod = import("./UsacParams").SamplingMethod;
  }
}

export interface SamplingMethodHostType extends HostType<SamplingMethod, EnumTypeTrait> {
  readonly uniform: SamplingMethod;
  readonly progressivE_NAPSAC: SamplingMethod;
  readonly napsac: SamplingMethod;
  readonly prosac: SamplingMethod;
}

declare const scoreMethodBrand: unique symbol;
export interface ScoreMethod extends ClrHostValue {
  readonly [scoreMethodBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type ScoreMethod = import("./UsacParams").ScoreMethod;
  }
}

export interface ScoreMethodHostType extends HostType<ScoreMethod, EnumTypeTrait> {
  readonly ransac: ScoreMethod;
  readonly msac: ScoreMethod;
  readonly magsac: ScoreMethod;
  readonly lmeds: ScoreMethod;
}

declare const usacParamsBrand: unique symbol;
export interface UsacParams extends ClrHostValue {
  readonly [usacParamsBrand]: true;
  confidence: number;
  isParallel: boolean;
  loIterations: number;
  loMethod: OpenCvSharp.LocalOptimMethod;
  loSampleSize: number;
  maxIterations: number;
  neighborsSearch: OpenCvSharp.NeighborSearchMethod;
  randomGeneratorState: number;
  sampler: OpenCvSharp.SamplingMethod;
  score: OpenCvSharp.ScoreMethod;
  threshold: number;
  toNativeStruct(): OpenCvSharp.WUsacParams;
  equals(obj: unknown | null): boolean;
  equals(other: OpenCvSharp.UsacParams | null): boolean;
  getHashCode(): number;
  toString(): string;
}

declare global {
  namespace OpenCvSharp {
    type UsacParams = import("./UsacParams").UsacParams;
  }
}

export interface UsacParamsHostType extends HostType<
  UsacParams,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): UsacParams;
}

declare const wUsacParamsBrand: unique symbol;
export interface WUsacParams extends ClrHostValue {
  readonly [wUsacParamsBrand]: true;
  confidence: number;
  isParallel: number;
  loIterations: number;
  loMethod: OpenCvSharp.LocalOptimMethod;
  loSampleSize: number;
  maxIterations: number;
  neighborsSearch: OpenCvSharp.NeighborSearchMethod;
  randomGeneratorState: number;
  sampler: OpenCvSharp.SamplingMethod;
  score: OpenCvSharp.ScoreMethod;
  threshold: number;
}

declare global {
  namespace OpenCvSharp {
    type WUsacParams = import("./UsacParams").WUsacParams;
  }
}

export interface WUsacParamsHostType extends HostType<WUsacParams, ValueTypeTrait> {}

export {};
