import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const xmlNodeChangedActionBrand: unique symbol;
export interface XmlNodeChangedAction extends ClrHostValue {
  readonly [xmlNodeChangedActionBrand]: true;
}

declare global {
  namespace System.Xml {
    type XmlNodeChangedAction = import("./XmlNodeChangedAction").XmlNodeChangedAction;
  }
}

export interface XmlNodeChangedActionHostType extends HostType<
  XmlNodeChangedAction,
  EnumTypeTrait
> {
  readonly insert: XmlNodeChangedAction;
  readonly remove: XmlNodeChangedAction;
  readonly change: XmlNodeChangedAction;
}

export {};
