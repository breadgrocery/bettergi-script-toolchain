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

declare const xmlSchemaDerivationMethodBrand: unique symbol;
export interface XmlSchemaDerivationMethod extends ClrHostValue {
  readonly [xmlSchemaDerivationMethodBrand]: true;
}

declare global {
  namespace System.Xml.Schema {
    type XmlSchemaDerivationMethod =
      import("./XmlSchemaDerivationMethod").XmlSchemaDerivationMethod;
  }
}

export interface XmlSchemaDerivationMethodHostType extends HostType<
  XmlSchemaDerivationMethod,
  EnumTypeTrait
> {
  readonly empty: XmlSchemaDerivationMethod;
  readonly substitution: XmlSchemaDerivationMethod;
  readonly extension: XmlSchemaDerivationMethod;
  readonly restriction: XmlSchemaDerivationMethod;
  readonly list: XmlSchemaDerivationMethod;
  readonly union: XmlSchemaDerivationMethod;
  readonly all: XmlSchemaDerivationMethod;
  readonly none: XmlSchemaDerivationMethod;
}

export {};
