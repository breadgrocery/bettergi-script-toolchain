import "../../../System/Enum";
import "../../../System/IComparable";
import "../../../System/IConvertible";
import "../../../System/IFormattable";
import "../../../System/ISpanFormattable";
import type { ClrHostValue, EnumTypeTrait, HostType } from "../../ClearScript/HostType";

declare const ortMemTypeBrand: unique symbol;
export interface OrtMemType extends ClrHostValue {
  readonly [ortMemTypeBrand]: true;
}

declare global {
  namespace Microsoft.ML.OnnxRuntime {
    type OrtMemType = import("./OrtMemType").OrtMemType;
  }
}

export interface OrtMemTypeHostType extends HostType<OrtMemType, EnumTypeTrait> {
  readonly cpuInput: OrtMemType;
  readonly cpuOutput: OrtMemType;
  readonly cpu: OrtMemType;
  readonly default: OrtMemType;
}

export {};
