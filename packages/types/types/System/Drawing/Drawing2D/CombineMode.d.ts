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

declare const combineModeBrand: unique symbol;
export interface CombineMode extends ClrHostValue {
  readonly [combineModeBrand]: true;
}

declare global {
  namespace System.Drawing.Drawing2D {
    type CombineMode = import("./CombineMode").CombineMode;
  }
}

export interface CombineModeHostType extends HostType<CombineMode, EnumTypeTrait> {
  readonly replace: CombineMode;
  readonly intersect: CombineMode;
  readonly union: CombineMode;
  readonly xor: CombineMode;
  readonly exclude: CombineMode;
  readonly complement: CombineMode;
}

export {};
