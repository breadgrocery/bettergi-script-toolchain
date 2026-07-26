import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "./Enum";
import "./IComparable";
import "./IConvertible";
import "./IFormattable";
import "./ISpanFormattable";

declare const uriKindBrand: unique symbol;
export interface UriKind extends ClrHostValue {
  readonly [uriKindBrand]: true;
}

declare global {
  namespace System {
    type UriKind = import("./UriKind").UriKind;
  }
}

export interface UriKindHostType extends HostType<UriKind, EnumTypeTrait> {
  readonly relativeOrAbsolute: UriKind;
  readonly absolute: UriKind;
  readonly relative: UriKind;
}

export {};
