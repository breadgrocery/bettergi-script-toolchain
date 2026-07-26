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

declare const xmlDataTypeBrand: unique symbol;
export interface XmlDataType extends ClrHostValue {
  readonly [xmlDataTypeBrand]: true;
}

declare global {
  namespace System.Xml.XPath {
    type XmlDataType = import("./XmlDataType").XmlDataType;
  }
}

export interface XmlDataTypeHostType extends HostType<XmlDataType, EnumTypeTrait> {
  readonly text: XmlDataType;
  readonly number: XmlDataType;
}

export {};
