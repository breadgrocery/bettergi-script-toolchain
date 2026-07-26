import "../../../System/Enum";
import "../../../System/IComparable";
import "../../../System/IConvertible";
import "../../../System/IFormattable";
import "../../../System/ISpanFormattable";
import type { ClrHostValue, EnumTypeTrait, HostType } from "../../ClearScript/HostType";

declare const ortAllocatorTypeBrand: unique symbol;
export interface OrtAllocatorType extends ClrHostValue {
  readonly [ortAllocatorTypeBrand]: true;
}

declare global {
  namespace Microsoft.ML.OnnxRuntime {
    type OrtAllocatorType = import("./OrtAllocatorType").OrtAllocatorType;
  }
}

export interface OrtAllocatorTypeHostType extends HostType<OrtAllocatorType, EnumTypeTrait> {
  readonly deviceAllocator: OrtAllocatorType;
  readonly arenaAllocator: OrtAllocatorType;
}

export {};
