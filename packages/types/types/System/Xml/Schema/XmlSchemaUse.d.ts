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

declare const xmlSchemaUseBrand: unique symbol;
export interface XmlSchemaUse extends ClrHostValue {
  readonly [xmlSchemaUseBrand]: true;
}

declare global {
  namespace System.Xml.Schema {
    type XmlSchemaUse = import("./XmlSchemaUse").XmlSchemaUse;
  }
}

export interface XmlSchemaUseHostType extends HostType<XmlSchemaUse, EnumTypeTrait> {
  readonly none: XmlSchemaUse;
  readonly optional: XmlSchemaUse;
  readonly prohibited: XmlSchemaUse;
  readonly required: XmlSchemaUse;
}

export {};
