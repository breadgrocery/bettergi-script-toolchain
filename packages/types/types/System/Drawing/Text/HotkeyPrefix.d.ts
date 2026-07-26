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

declare const hotkeyPrefixBrand: unique symbol;
export interface HotkeyPrefix extends ClrHostValue {
  readonly [hotkeyPrefixBrand]: true;
}

declare global {
  namespace System.Drawing.Text {
    type HotkeyPrefix = import("./HotkeyPrefix").HotkeyPrefix;
  }
}

export interface HotkeyPrefixHostType extends HostType<HotkeyPrefix, EnumTypeTrait> {
  readonly none: HotkeyPrefix;
  readonly show: HotkeyPrefix;
  readonly hide: HotkeyPrefix;
}

export {};
