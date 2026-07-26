import type { EventSource } from "../../Microsoft/ClearScript/HostEvent";
import type {
  ClrHostValue,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "./ConformanceLevel";
import "./DtdProcessing";
import "./Schema/ValidationEventHandler";
import "./Schema/XmlSchemaSet";
import "./Schema/XmlSchemaValidationFlags";
import "./ValidationType";
import "./XmlNameTable";
import "./XmlResolver";

declare const xmlReaderSettingsBrand: unique symbol;
export interface XmlReaderSettings extends ClrHostValue {
  readonly [xmlReaderSettingsBrand]: true;
  async: boolean;
  checkCharacters: boolean;
  clone(): System.Xml.XmlReaderSettings;
  closeInput: boolean;
  conformanceLevel: System.Xml.ConformanceLevel;
  dtdProcessing: System.Xml.DtdProcessing;
  get xmlResolver(): never;
  set xmlResolver(value: System.Xml.XmlResolver);
  ignoreComments: boolean;
  ignoreProcessingInstructions: boolean;
  ignoreWhitespace: boolean;
  lineNumberOffset: number;
  linePositionOffset: number;
  maxCharactersFromEntities: number;
  maxCharactersInDocument: number;
  nameTable: System.Xml.XmlNameTable;
  prohibitDtd: boolean;
  readonly validationEventHandler: EventSource<
    (sender: unknown, e: System.Xml.Schema.ValidationEventArgs) => void
  >;
  reset(): VoidResult;
  schemas: System.Xml.Schema.XmlSchemaSet;
  validationFlags: System.Xml.Schema.XmlSchemaValidationFlags;
  validationType: System.Xml.ValidationType;
}

declare global {
  namespace System.Xml {
    type XmlReaderSettings = import("./XmlReaderSettings").XmlReaderSettings;
  }
}

export interface XmlReaderSettingsHostType extends HostType<
  XmlReaderSettings,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): XmlReaderSettings;
}

export {};
