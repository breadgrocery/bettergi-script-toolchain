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

declare const dashCapBrand: unique symbol;
export interface DashCap extends ClrHostValue {
  readonly [dashCapBrand]: true;
}

declare global {
  namespace System.Drawing.Drawing2D {
    type DashCap = import("./DashCap").DashCap;
  }
}

export interface DashCapHostType extends HostType<DashCap, EnumTypeTrait> {
  readonly flat: DashCap;
  readonly round: DashCap;
  readonly triangle: DashCap;
}

export {};
