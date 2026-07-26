import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const seekOriginBrand: unique symbol;
export interface SeekOrigin extends ClrHostValue {
  readonly [seekOriginBrand]: true;
}

declare global {
  namespace System.IO {
    type SeekOrigin = import("./SeekOrigin").SeekOrigin;
  }
}

export interface SeekOriginHostType extends HostType<SeekOrigin, EnumTypeTrait> {
  readonly begin: SeekOrigin;
  readonly current: SeekOrigin;
  readonly end: SeekOrigin;
}

export {};
