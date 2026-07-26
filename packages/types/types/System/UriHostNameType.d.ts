import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "./Enum";
import "./IComparable";
import "./IConvertible";
import "./IFormattable";
import "./ISpanFormattable";

declare const uriHostNameTypeBrand: unique symbol;
export interface UriHostNameType extends ClrHostValue {
  readonly [uriHostNameTypeBrand]: true;
}

declare global {
  namespace System {
    type UriHostNameType = import("./UriHostNameType").UriHostNameType;
  }
}

export interface UriHostNameTypeHostType extends HostType<UriHostNameType, EnumTypeTrait> {
  readonly unknown: UriHostNameType;
  readonly basic: UriHostNameType;
  readonly dns: UriHostNameType;
  readonly iPv4: UriHostNameType;
  readonly iPv6: UriHostNameType;
}

export {};
