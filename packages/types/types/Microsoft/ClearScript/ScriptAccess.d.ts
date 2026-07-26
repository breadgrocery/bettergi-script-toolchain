import "../../System/Enum";
import "../../System/IComparable";
import "../../System/IConvertible";
import "../../System/IFormattable";
import "../../System/ISpanFormattable";
import type { ClrHostValue, EnumTypeTrait, HostType } from "./HostType";

declare const scriptAccessBrand: unique symbol;
export interface ScriptAccess extends ClrHostValue {
  readonly [scriptAccessBrand]: true;
}

declare global {
  namespace Microsoft.ClearScript {
    type ScriptAccess = import("./ScriptAccess").ScriptAccess;
  }
}

export interface ScriptAccessHostType extends HostType<ScriptAccess, EnumTypeTrait> {
  readonly full: ScriptAccess;
  readonly readOnly: ScriptAccess;
  readonly none: ScriptAccess;
}

export {};
