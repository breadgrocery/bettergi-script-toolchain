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

declare const xmlSchemaFormBrand: unique symbol;
export interface XmlSchemaForm extends ClrHostValue {
  readonly [xmlSchemaFormBrand]: true;
}

declare global {
  namespace System.Xml.Schema {
    type XmlSchemaForm = import("./XmlSchemaForm").XmlSchemaForm;
  }
}

export interface XmlSchemaFormHostType extends HostType<XmlSchemaForm, EnumTypeTrait> {
  readonly none: XmlSchemaForm;
  readonly qualified: XmlSchemaForm;
  readonly unqualified: XmlSchemaForm;
}

export {};
