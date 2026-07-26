import "../../../System/Enum";
import "../../../System/IComparable";
import "../../../System/IConvertible";
import "../../../System/IFormattable";
import "../../../System/ISpanFormattable";
import type { ClrHostValue, EnumTypeTrait, HostType } from "../../ClearScript/HostType";

declare const graphOptimizationLevelBrand: unique symbol;
export interface GraphOptimizationLevel extends ClrHostValue {
  readonly [graphOptimizationLevelBrand]: true;
}

declare global {
  namespace Microsoft.ML.OnnxRuntime {
    type GraphOptimizationLevel = import("./GraphOptimizationLevel").GraphOptimizationLevel;
  }
}

export interface GraphOptimizationLevelHostType extends HostType<
  GraphOptimizationLevel,
  EnumTypeTrait
> {
  readonly orT_DISABLE_ALL: GraphOptimizationLevel;
  readonly orT_ENABLE_BASIC: GraphOptimizationLevel;
  readonly orT_ENABLE_EXTENDED: GraphOptimizationLevel;
  readonly orT_ENABLE_ALL: GraphOptimizationLevel;
}

export {};
