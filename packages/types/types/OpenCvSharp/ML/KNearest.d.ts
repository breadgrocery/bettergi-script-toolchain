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
import "../OutputArray";
import "./StatModel";

declare const kNearestBrand: unique symbol;
export interface KNearest
  extends
    Omit<
      OpenCvSharp.ML.StatModel,
      "algorithmType" | "defaultK" | "emax" | "findNearest" | "isClassifier"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [kNearestBrand]: true;
  defaultK: number;
  isClassifier: boolean;
  emax: number;
  algorithmType: KNearest_Types;
  findNearest(
    samples: OpenCvSharp.InputArray,
    k: number | StrongNumeric<Int32Host>,
    results: OpenCvSharp.OutputArray
  ): number;
  findNearest(
    samples: OpenCvSharp.InputArray,
    k: number | StrongNumeric<Int32Host>,
    results: OpenCvSharp.OutputArray,
    neighborResponses: OpenCvSharp.OutputArray | null
  ): number;
  findNearest(
    samples: OpenCvSharp.InputArray,
    k: number | StrongNumeric<Int32Host>,
    results: OpenCvSharp.OutputArray,
    neighborResponses: OpenCvSharp.OutputArray | null,
    dist: OpenCvSharp.OutputArray | null
  ): number;
}

declare const kNearest_TypesBrand: unique symbol;
export interface KNearest_Types extends ClrHostValue {
  readonly [kNearest_TypesBrand]: true;
}

export interface KNearest_TypesHostType extends HostType<KNearest_Types, EnumTypeTrait> {
  readonly bruteForce: KNearest_Types;
  readonly kdTree: KNearest_Types;
}

declare global {
  namespace OpenCvSharp.ML.KNearest {
    type Types = import("./KNearest").KNearest_Types;
  }
}

declare global {
  namespace OpenCvSharp.ML {
    type KNearest = import("./KNearest").KNearest;
  }
}

export interface KNearestHostType extends HostType<KNearest, ReferenceTypeTrait> {
  create(): OpenCvSharp.ML.KNearest;
  load(filePath: string): OpenCvSharp.ML.KNearest;
  loadFromString(strModel: string): OpenCvSharp.ML.KNearest;
  readonly Types: KNearest_TypesHostType;
}

export {};
