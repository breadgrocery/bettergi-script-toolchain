import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const algorithmParamTypeBrand: unique symbol;
export interface AlgorithmParamType extends ClrHostValue {
  readonly [algorithmParamTypeBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type AlgorithmParamType = import("./AlgorithmParamType").AlgorithmParamType;
  }
}

export interface AlgorithmParamTypeHostType extends HostType<AlgorithmParamType, EnumTypeTrait> {
  readonly int: AlgorithmParamType;
  readonly boolean: AlgorithmParamType;
  readonly real: AlgorithmParamType;
  readonly string: AlgorithmParamType;
  readonly mat: AlgorithmParamType;
  readonly matVector: AlgorithmParamType;
  readonly algorithm: AlgorithmParamType;
  readonly float: AlgorithmParamType;
  readonly unsignedInt: AlgorithmParamType;
  readonly uInt64: AlgorithmParamType;
  readonly short: AlgorithmParamType;
  readonly uChar: AlgorithmParamType;
}

export {};
