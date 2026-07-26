import type {
  ClrHostValue,
  EnumTypeTrait,
  HostType
} from "../../../Microsoft/ClearScript/HostType";
import "../../Enum";
import "../../IComparable";
import "../../IConvertible";
import "../../IFormattable";
import "../../ISpanFormattable";

declare const lineJoinBrand: unique symbol;
export interface LineJoin extends ClrHostValue {
  readonly [lineJoinBrand]: true;
}

declare global {
  namespace System.Drawing.Drawing2D {
    type LineJoin = import("./LineJoin").LineJoin;
  }
}

export interface LineJoinHostType extends HostType<LineJoin, EnumTypeTrait> {
  readonly miter: LineJoin;
  readonly bevel: LineJoin;
  readonly round: LineJoin;
  readonly miterClipped: LineJoin;
}

export {};
