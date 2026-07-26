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

declare const charSetBrand: unique symbol;
export interface CharSet extends ClrHostValue {
  readonly [charSetBrand]: true;
}

declare global {
  namespace System.Runtime.InteropServices {
    type CharSet = import("./CharSet").CharSet;
  }
}

export interface CharSetHostType extends HostType<CharSet, EnumTypeTrait> {
  readonly none: CharSet;
  readonly ansi: CharSet;
  readonly unicode: CharSet;
  readonly auto: CharSet;
}

export {};
