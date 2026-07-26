import type {
  ClrHostValue,
  HostArray,
  HostType,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";

declare const propertyItemBrand: unique symbol;
export interface PropertyItem extends ClrHostValue {
  readonly [propertyItemBrand]: true;
  id: number;
  len: number;
  type: number;
  value: HostArray<number>;
}

declare global {
  namespace System.Drawing.Imaging {
    type PropertyItem = import("./PropertyItem").PropertyItem;
  }
}

export interface PropertyItemHostType extends HostType<PropertyItem, ReferenceTypeTrait> {}

export {};
