import "../../../System/Enum";
import "../../../System/IComparable";
import "../../../System/IConvertible";
import "../../../System/IFormattable";
import "../../../System/ISpanFormattable";
import type { ClrHostValue, EnumTypeTrait, HostType } from "../../ClearScript/HostType";

declare const coreMLFlagsBrand: unique symbol;
export interface CoreMLFlags extends ClrHostValue {
  readonly [coreMLFlagsBrand]: true;
}

declare global {
  namespace Microsoft.ML.OnnxRuntime {
    type CoreMLFlags = import("./CoreMLFlags").CoreMLFlags;
  }
}

export interface CoreMLFlagsHostType extends HostType<CoreMLFlags, EnumTypeTrait> {
  readonly coremL_FLAG_USE_NONE: CoreMLFlags;
  readonly coremL_FLAG_USE_CPU_ONLY: CoreMLFlags;
  readonly coremL_FLAG_ENABLE_ON_SUBGRAPH: CoreMLFlags;
  readonly coremL_FLAG_ONLY_ENABLE_DEVICE_WITH_ANE: CoreMLFlags;
  readonly coremL_FLAG_ONLY_ALLOW_STATIC_INPUT_SHAPES: CoreMLFlags;
  readonly coremL_FLAG_CREATE_MLPROGRAM: CoreMLFlags;
  readonly coremL_FLAG_USE_CPU_AND_GPU: CoreMLFlags;
  readonly coremL_FLAG_LAST: CoreMLFlags;
}

export {};
