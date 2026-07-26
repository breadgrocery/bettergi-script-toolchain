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

declare const xmlTypeCodeBrand: unique symbol;
export interface XmlTypeCode extends ClrHostValue {
  readonly [xmlTypeCodeBrand]: true;
}

declare global {
  namespace System.Xml.Schema {
    type XmlTypeCode = import("./XmlTypeCode").XmlTypeCode;
  }
}

export interface XmlTypeCodeHostType extends HostType<XmlTypeCode, EnumTypeTrait> {
  readonly none: XmlTypeCode;
  readonly item: XmlTypeCode;
  readonly node: XmlTypeCode;
  readonly document: XmlTypeCode;
  readonly element: XmlTypeCode;
  readonly attribute: XmlTypeCode;
  readonly namespace: XmlTypeCode;
  readonly processingInstruction: XmlTypeCode;
  readonly comment: XmlTypeCode;
  readonly text: XmlTypeCode;
  readonly anyAtomicType: XmlTypeCode;
  readonly untypedAtomic: XmlTypeCode;
  readonly string: XmlTypeCode;
  readonly boolean: XmlTypeCode;
  readonly decimal: XmlTypeCode;
  readonly float: XmlTypeCode;
  readonly double: XmlTypeCode;
  readonly duration: XmlTypeCode;
  readonly dateTime: XmlTypeCode;
  readonly time: XmlTypeCode;
  readonly date: XmlTypeCode;
  readonly gYearMonth: XmlTypeCode;
  readonly gYear: XmlTypeCode;
  readonly gMonthDay: XmlTypeCode;
  readonly gDay: XmlTypeCode;
  readonly gMonth: XmlTypeCode;
  readonly hexBinary: XmlTypeCode;
  readonly base64Binary: XmlTypeCode;
  readonly anyUri: XmlTypeCode;
  readonly qName: XmlTypeCode;
  readonly notation: XmlTypeCode;
  readonly normalizedString: XmlTypeCode;
  readonly token: XmlTypeCode;
  readonly language: XmlTypeCode;
  readonly nmToken: XmlTypeCode;
  readonly name: XmlTypeCode;
  readonly ncName: XmlTypeCode;
  readonly id: XmlTypeCode;
  readonly idref: XmlTypeCode;
  readonly entity: XmlTypeCode;
  readonly integer: XmlTypeCode;
  readonly nonPositiveInteger: XmlTypeCode;
  readonly negativeInteger: XmlTypeCode;
  readonly long: XmlTypeCode;
  readonly int: XmlTypeCode;
  readonly short: XmlTypeCode;
  readonly byte: XmlTypeCode;
  readonly nonNegativeInteger: XmlTypeCode;
  readonly unsignedLong: XmlTypeCode;
  readonly unsignedInt: XmlTypeCode;
  readonly unsignedShort: XmlTypeCode;
  readonly unsignedByte: XmlTypeCode;
  readonly positiveInteger: XmlTypeCode;
  readonly yearMonthDuration: XmlTypeCode;
  readonly dayTimeDuration: XmlTypeCode;
}

export {};
