import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const digitShapesBrand: unique symbol;
export interface DigitShapes extends ClrHostValue {
  readonly [digitShapesBrand]: true;
}

declare global {
  namespace System.Globalization {
    type DigitShapes = import("./DigitShapes").DigitShapes;
  }
}

export interface DigitShapesHostType extends HostType<DigitShapes, EnumTypeTrait> {
  readonly context: DigitShapes;
  readonly none: DigitShapes;
  readonly nativeNational: DigitShapes;
}

export {};
