import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "./Enum";
import "./IComparable";
import "./IConvertible";
import "./IFormattable";
import "./ISpanFormattable";

declare const uriPartialBrand: unique symbol;
export interface UriPartial extends ClrHostValue {
  readonly [uriPartialBrand]: true;
}

declare global {
  namespace System {
    type UriPartial = import("./UriPartial").UriPartial;
  }
}

export interface UriPartialHostType extends HostType<UriPartial, EnumTypeTrait> {
  readonly scheme: UriPartial;
  readonly authority: UriPartial;
  readonly path: UriPartial;
  readonly query: UriPartial;
}

export {};
