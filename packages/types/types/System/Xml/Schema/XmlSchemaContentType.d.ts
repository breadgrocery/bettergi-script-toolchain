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

declare const xmlSchemaContentTypeBrand: unique symbol;
export interface XmlSchemaContentType extends ClrHostValue {
  readonly [xmlSchemaContentTypeBrand]: true;
}

declare global {
  namespace System.Xml.Schema {
    type XmlSchemaContentType = import("./XmlSchemaContentType").XmlSchemaContentType;
  }
}

export interface XmlSchemaContentTypeHostType extends HostType<
  XmlSchemaContentType,
  EnumTypeTrait
> {
  readonly textOnly: XmlSchemaContentType;
  readonly empty: XmlSchemaContentType;
  readonly elementOnly: XmlSchemaContentType;
  readonly mixed: XmlSchemaContentType;
}

export {};
