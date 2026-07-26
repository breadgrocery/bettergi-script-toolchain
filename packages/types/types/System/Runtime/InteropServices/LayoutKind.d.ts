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

declare const layoutKindBrand: unique symbol;
export interface LayoutKind extends ClrHostValue {
  readonly [layoutKindBrand]: true;
}

declare global {
  namespace System.Runtime.InteropServices {
    type LayoutKind = import("./LayoutKind").LayoutKind;
  }
}

export interface LayoutKindHostType extends HostType<LayoutKind, EnumTypeTrait> {
  readonly sequential: LayoutKind;
  readonly explicit: LayoutKind;
  readonly auto: LayoutKind;
}

export {};
