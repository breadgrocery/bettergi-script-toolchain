import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const distanceTypesBrand: unique symbol;
export interface DistanceTypes extends ClrHostValue {
  readonly [distanceTypesBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type DistanceTypes = import("./DistanceTypes").DistanceTypes;
  }
}

export interface DistanceTypesHostType extends HostType<DistanceTypes, EnumTypeTrait> {
  readonly user: DistanceTypes;
  readonly l1: DistanceTypes;
  readonly l2: DistanceTypes;
  readonly c: DistanceTypes;
  readonly l12: DistanceTypes;
  readonly fair: DistanceTypes;
  readonly welsch: DistanceTypes;
  readonly huber: DistanceTypes;
}

export {};
