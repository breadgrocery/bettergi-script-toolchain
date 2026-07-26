import type { ClrHostValue, ClrInterfaceView } from "./HostType";
import type { ClrInput } from "./HostVariable";

declare const propertyBagInputBrand: unique symbol;
declare const propertyBagBrand: unique symbol;

export interface PropertyBagInput {
  readonly [propertyBagInputBrand]: true;
}

export interface IPropertyBag extends ClrInterfaceView<PropertyBagInput>, PropertyBagInput {
  readonly count: number;
}

export interface PropertyBag extends ClrHostValue, PropertyBagInput {
  readonly [propertyBagBrand]: true;
  readonly count: number;
}

declare global {
  namespace Microsoft.ClearScript {
    type PropertyBagInput = import("./PropertyBag").PropertyBagInput;
    type IPropertyBag = import("./PropertyBag").IPropertyBag;
    type PropertyBag = import("./PropertyBag").PropertyBag;
  }
}

export {};
