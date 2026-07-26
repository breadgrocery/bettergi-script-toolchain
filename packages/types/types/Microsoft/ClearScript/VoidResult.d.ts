import type { ClrHostValue } from "./HostType";

declare const voidResultBrand: unique symbol;

export interface VoidResult extends ClrHostValue {
  readonly [voidResultBrand]: true;
}

declare global {
  namespace Microsoft.ClearScript {
    type VoidResult = import("./VoidResult").VoidResult;
  }
}

export {};
