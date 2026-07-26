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

declare const xmlSchemaDatatypeVarietyBrand: unique symbol;
export interface XmlSchemaDatatypeVariety extends ClrHostValue {
  readonly [xmlSchemaDatatypeVarietyBrand]: true;
}

declare global {
  namespace System.Xml.Schema {
    type XmlSchemaDatatypeVariety = import("./XmlSchemaDatatypeVariety").XmlSchemaDatatypeVariety;
  }
}

export interface XmlSchemaDatatypeVarietyHostType extends HostType<
  XmlSchemaDatatypeVariety,
  EnumTypeTrait
> {
  readonly atomic: XmlSchemaDatatypeVariety;
  readonly list: XmlSchemaDatatypeVariety;
  readonly union: XmlSchemaDatatypeVariety;
}

export {};
