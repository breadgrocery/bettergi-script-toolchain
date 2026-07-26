import type { ClrHostValue, HostType, ValueTypeTrait } from "../Microsoft/ClearScript/HostType";
import "./ValueType";

declare const uriCreationOptionsBrand: unique symbol;
export interface UriCreationOptions extends ClrHostValue {
  readonly [uriCreationOptionsBrand]: true;
  dangerousDisablePathAndQueryCanonicalization: boolean;
}

declare global {
  namespace System {
    type UriCreationOptions = import("./UriCreationOptions").UriCreationOptions;
  }
}

export interface UriCreationOptionsHostType extends HostType<UriCreationOptions, ValueTypeTrait> {}

export {};
