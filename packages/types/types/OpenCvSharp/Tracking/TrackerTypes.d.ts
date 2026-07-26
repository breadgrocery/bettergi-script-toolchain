import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../../System/Enum";
import "../../System/IComparable";
import "../../System/IConvertible";
import "../../System/IFormattable";
import "../../System/ISpanFormattable";

declare const trackerTypesBrand: unique symbol;
export interface TrackerTypes extends ClrHostValue {
  readonly [trackerTypesBrand]: true;
}

declare global {
  namespace OpenCvSharp.Tracking {
    type TrackerTypes = import("./TrackerTypes").TrackerTypes;
  }
}

export interface TrackerTypesHostType extends HostType<TrackerTypes, EnumTypeTrait> {
  readonly boosting: TrackerTypes;
  readonly goturn: TrackerTypes;
  readonly tld: TrackerTypes;
  readonly kcf: TrackerTypes;
  readonly medianFlow: TrackerTypes;
  readonly mil: TrackerTypes;
}

export {};
