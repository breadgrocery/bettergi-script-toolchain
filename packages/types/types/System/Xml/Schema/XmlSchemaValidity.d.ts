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

declare const xmlSchemaValidityBrand: unique symbol;
export interface XmlSchemaValidity extends ClrHostValue {
  readonly [xmlSchemaValidityBrand]: true;
}

declare global {
  namespace System.Xml.Schema {
    type XmlSchemaValidity = import("./XmlSchemaValidity").XmlSchemaValidity;
  }
}

export interface XmlSchemaValidityHostType extends HostType<XmlSchemaValidity, EnumTypeTrait> {
  readonly notKnown: XmlSchemaValidity;
  readonly valid: XmlSchemaValidity;
  readonly invalid: XmlSchemaValidity;
}

export {};
