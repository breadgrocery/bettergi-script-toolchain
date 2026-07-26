import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const lineTypesBrand: unique symbol;
export interface LineTypes extends ClrHostValue {
  readonly [lineTypesBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type LineTypes = import("./LineTypes").LineTypes;
  }
}

export interface LineTypesHostType extends HostType<LineTypes, EnumTypeTrait> {
  readonly link8: LineTypes;
  readonly link4: LineTypes;
  readonly antiAlias: LineTypes;
}

export {};
