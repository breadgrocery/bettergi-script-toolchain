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

declare const xObjectChangeBrand: unique symbol;
export interface XObjectChange extends ClrHostValue {
  readonly [xObjectChangeBrand]: true;
}

declare global {
  namespace System.Xml.Linq {
    type XObjectChange = import("./XObjectChange").XObjectChange;
  }
}

export interface XObjectChangeHostType extends HostType<XObjectChange, EnumTypeTrait> {
  readonly add: XObjectChange;
  readonly remove: XObjectChange;
  readonly name: XObjectChange;
  readonly value: XObjectChange;
}

export {};
