import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const markerTypesBrand: unique symbol;
export interface MarkerTypes extends ClrHostValue {
  readonly [markerTypesBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type MarkerTypes = import("./MarkerTypes").MarkerTypes;
  }
}

export interface MarkerTypesHostType extends HostType<MarkerTypes, EnumTypeTrait> {
  readonly cross: MarkerTypes;
  readonly tiltedCross: MarkerTypes;
  readonly star: MarkerTypes;
  readonly diamond: MarkerTypes;
  readonly square: MarkerTypes;
  readonly triangleUp: MarkerTypes;
  readonly triangleDown: MarkerTypes;
}

export {};
