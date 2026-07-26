import "../../System/Enum";
import "../../System/IComparable";
import "../../System/IConvertible";
import "../../System/IFormattable";
import "../../System/ISpanFormattable";
import type { ClrHostValue, EnumTypeTrait, HostType } from "./HostType";

declare const hostItemFlagsBrand: unique symbol;
export interface HostItemFlags extends ClrHostValue {
  readonly [hostItemFlagsBrand]: true;
}

declare global {
  namespace Microsoft.ClearScript {
    type HostItemFlags = import("./HostItemFlags").HostItemFlags;
  }
}

export interface HostItemFlagsHostType extends HostType<HostItemFlags, EnumTypeTrait> {
  readonly none: HostItemFlags;
  readonly globalMembers: HostItemFlags;
  readonly privateAccess: HostItemFlags;
  readonly hideDynamicMembers: HostItemFlags;
  readonly directAccess: HostItemFlags;
}

export {};
