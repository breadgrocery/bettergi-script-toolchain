import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const xmlSpaceBrand: unique symbol;
export interface XmlSpace extends ClrHostValue {
  readonly [xmlSpaceBrand]: true;
}

declare global {
  namespace System.Xml {
    type XmlSpace = import("./XmlSpace").XmlSpace;
  }
}

export interface XmlSpaceHostType extends HostType<XmlSpace, EnumTypeTrait> {
  readonly none: XmlSpace;
  readonly default: XmlSpace;
  readonly preserve: XmlSpace;
}

export {};
