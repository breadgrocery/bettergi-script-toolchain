import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const borderTypesBrand: unique symbol;
export interface BorderTypes extends ClrHostValue {
  readonly [borderTypesBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type BorderTypes = import("./BorderTypes").BorderTypes;
  }
}

export interface BorderTypesHostType extends HostType<BorderTypes, EnumTypeTrait> {
  readonly constant: BorderTypes;
  readonly replicate: BorderTypes;
  readonly reflect: BorderTypes;
  readonly wrap: BorderTypes;
  readonly reflect101: BorderTypes;
  readonly transparent: BorderTypes;
  readonly default: BorderTypes;
  readonly isolated: BorderTypes;
}

export {};
