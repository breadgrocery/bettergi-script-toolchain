import "../../../System/Enum";
import "../../../System/IComparable";
import "../../../System/IConvertible";
import "../../../System/IFormattable";
import "../../../System/ISpanFormattable";
import type { ClrHostValue, EnumTypeTrait, HostType } from "../../ClearScript/HostType";

declare const nnapiFlagsBrand: unique symbol;
export interface NnapiFlags extends ClrHostValue {
  readonly [nnapiFlagsBrand]: true;
}

declare global {
  namespace Microsoft.ML.OnnxRuntime {
    type NnapiFlags = import("./NnapiFlags").NnapiFlags;
  }
}

export interface NnapiFlagsHostType extends HostType<NnapiFlags, EnumTypeTrait> {
  readonly nnapI_FLAG_USE_NONE: NnapiFlags;
  readonly nnapI_FLAG_USE_FP16: NnapiFlags;
  readonly nnapI_FLAG_USE_NCHW: NnapiFlags;
  readonly nnapI_FLAG_CPU_DISABLED: NnapiFlags;
  readonly nnapI_FLAG_CPU_ONLY: NnapiFlags;
  readonly nnapI_FLAG_LAST: NnapiFlags;
}

export {};
