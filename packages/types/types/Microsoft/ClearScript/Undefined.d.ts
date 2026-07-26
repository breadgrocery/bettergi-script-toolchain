import type { ClrHostValue } from "./HostType";

declare const undefinedHostBrand: unique symbol;

export interface Undefined extends ClrHostValue {
  readonly [undefinedHostBrand]: true;
}

declare global {
  namespace Microsoft.ClearScript {
    type Undefined = import("./Undefined").Undefined;
  }
}

export {};
