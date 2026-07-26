import "../../../System/Enum";
import "../../../System/IComparable";
import "../../../System/IConvertible";
import "../../../System/IFormattable";
import "../../../System/ISpanFormattable";
import type { ClrHostValue, EnumTypeTrait, HostType } from "../../ClearScript/HostType";

declare const executionModeBrand: unique symbol;
export interface ExecutionMode extends ClrHostValue {
  readonly [executionModeBrand]: true;
}

declare global {
  namespace Microsoft.ML.OnnxRuntime {
    type ExecutionMode = import("./ExecutionMode").ExecutionMode;
  }
}

export interface ExecutionModeHostType extends HostType<ExecutionMode, EnumTypeTrait> {
  readonly orT_SEQUENTIAL: ExecutionMode;
  readonly orT_PARALLEL: ExecutionMode;
}

export {};
