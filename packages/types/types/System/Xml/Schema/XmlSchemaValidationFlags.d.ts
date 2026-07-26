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

declare const xmlSchemaValidationFlagsBrand: unique symbol;
export interface XmlSchemaValidationFlags extends ClrHostValue {
  readonly [xmlSchemaValidationFlagsBrand]: true;
}

declare global {
  namespace System.Xml.Schema {
    type XmlSchemaValidationFlags = import("./XmlSchemaValidationFlags").XmlSchemaValidationFlags;
  }
}

export interface XmlSchemaValidationFlagsHostType extends HostType<
  XmlSchemaValidationFlags,
  EnumTypeTrait
> {
  readonly none: XmlSchemaValidationFlags;
  readonly processInlineSchema: XmlSchemaValidationFlags;
  readonly processSchemaLocation: XmlSchemaValidationFlags;
  readonly reportValidationWarnings: XmlSchemaValidationFlags;
  readonly processIdentityConstraints: XmlSchemaValidationFlags;
  readonly allowXmlAttributes: XmlSchemaValidationFlags;
}

export {};
