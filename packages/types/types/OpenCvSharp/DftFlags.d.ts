import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const dftFlagsBrand: unique symbol;
export interface DftFlags extends ClrHostValue {
  readonly [dftFlagsBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type DftFlags = import("./DftFlags").DftFlags;
  }
}

export interface DftFlagsHostType extends HostType<DftFlags, EnumTypeTrait> {
  readonly none: DftFlags;
  readonly inverse: DftFlags;
  readonly scale: DftFlags;
  readonly rows: DftFlags;
  readonly complexOutput: DftFlags;
  readonly realOutput: DftFlags;
}

export {};
