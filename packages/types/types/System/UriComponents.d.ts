import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "./Enum";
import "./IComparable";
import "./IConvertible";
import "./IFormattable";
import "./ISpanFormattable";

declare const uriComponentsBrand: unique symbol;
export interface UriComponents extends ClrHostValue {
  readonly [uriComponentsBrand]: true;
}

declare global {
  namespace System {
    type UriComponents = import("./UriComponents").UriComponents;
  }
}

export interface UriComponentsHostType extends HostType<UriComponents, EnumTypeTrait> {
  readonly scheme: UriComponents;
  readonly userInfo: UriComponents;
  readonly host: UriComponents;
  readonly port: UriComponents;
  readonly path: UriComponents;
  readonly query: UriComponents;
  readonly fragment: UriComponents;
  readonly strongPort: UriComponents;
  readonly normalizedHost: UriComponents;
  readonly keepDelimiter: UriComponents;
  readonly serializationInfoString: UriComponents;
  readonly absoluteUri: UriComponents;
  readonly hostAndPort: UriComponents;
  readonly strongAuthority: UriComponents;
  readonly schemeAndServer: UriComponents;
  readonly httpRequestUrl: UriComponents;
  readonly pathAndQuery: UriComponents;
}

export {};
