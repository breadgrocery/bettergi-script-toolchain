import type {
  ClrHostValue,
  HostArray,
  HostType,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";

declare const regionDataBrand: unique symbol;
export interface RegionData extends ClrHostValue {
  readonly [regionDataBrand]: true;
  data: HostArray<number>;
}

declare global {
  namespace System.Drawing.Drawing2D {
    type RegionData = import("./RegionData").RegionData;
  }
}

export interface RegionDataHostType extends HostType<RegionData, ReferenceTypeTrait> {}

export {};
