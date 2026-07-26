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

declare const coordinateSpaceBrand: unique symbol;
export interface CoordinateSpace extends ClrHostValue {
  readonly [coordinateSpaceBrand]: true;
}

declare global {
  namespace System.Drawing.Drawing2D {
    type CoordinateSpace = import("./CoordinateSpace").CoordinateSpace;
  }
}

export interface CoordinateSpaceHostType extends HostType<CoordinateSpace, EnumTypeTrait> {
  readonly world: CoordinateSpace;
  readonly page: CoordinateSpace;
  readonly device: CoordinateSpace;
}

export {};
