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

declare const xmlSchemaContentProcessingBrand: unique symbol;
export interface XmlSchemaContentProcessing extends ClrHostValue {
  readonly [xmlSchemaContentProcessingBrand]: true;
}

declare global {
  namespace System.Xml.Schema {
    type XmlSchemaContentProcessing =
      import("./XmlSchemaContentProcessing").XmlSchemaContentProcessing;
  }
}

export interface XmlSchemaContentProcessingHostType extends HostType<
  XmlSchemaContentProcessing,
  EnumTypeTrait
> {
  readonly none: XmlSchemaContentProcessing;
  readonly skip: XmlSchemaContentProcessing;
  readonly lax: XmlSchemaContentProcessing;
  readonly strict: XmlSchemaContentProcessing;
}

export {};
