import type { PropertyBag } from "./PropertyBag";

export type HostTypeCollection = PropertyBag;

declare global {
  namespace Microsoft.ClearScript {
    type HostTypeCollection = import("./HostTypeCollection").HostTypeCollection;
  }
}

export {};
