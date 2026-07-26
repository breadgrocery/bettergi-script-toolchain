import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "./Enum";
import "./IComparable";
import "./IConvertible";
import "./IFormattable";
import "./ISpanFormattable";

declare const uriFormatBrand: unique symbol;
export interface UriFormat extends ClrHostValue {
  readonly [uriFormatBrand]: true;
}

declare global {
  namespace System {
    type UriFormat = import("./UriFormat").UriFormat;
  }
}

export interface UriFormatHostType extends HostType<UriFormat, EnumTypeTrait> {
  readonly uriEscaped: UriFormat;
  readonly unescaped: UriFormat;
  readonly safeUnescaped: UriFormat;
}

export {};
