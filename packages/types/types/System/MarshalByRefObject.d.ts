import type { ClrHostValue, HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";

declare const marshalByRefObjectBrand: unique symbol;
export interface MarshalByRefObject extends ClrHostValue {
  readonly [marshalByRefObjectBrand]: true;
  getLifetimeService(): unknown;
  initializeLifetimeService(): unknown;
}

declare global {
  namespace System {
    type MarshalByRefObject = import("./MarshalByRefObject").MarshalByRefObject;
  }
}

export interface MarshalByRefObjectHostType extends HostType<
  MarshalByRefObject,
  ReferenceTypeTrait
> {}

export {};
