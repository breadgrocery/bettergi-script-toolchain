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

declare const xmlSeverityTypeBrand: unique symbol;
export interface XmlSeverityType extends ClrHostValue {
  readonly [xmlSeverityTypeBrand]: true;
}

declare global {
  namespace System.Xml.Schema {
    type XmlSeverityType = import("./XmlSeverityType").XmlSeverityType;
  }
}

export interface XmlSeverityTypeHostType extends HostType<XmlSeverityType, EnumTypeTrait> {
  readonly error: XmlSeverityType;
  readonly warning: XmlSeverityType;
}

export {};
