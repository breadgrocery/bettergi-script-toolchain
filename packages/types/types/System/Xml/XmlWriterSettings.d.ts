import type {
  ClrHostValue,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../Text/Encoding";
import "./ConformanceLevel";
import "./NamespaceHandling";
import "./NewLineHandling";
import "./XmlOutputMethod";

declare const xmlWriterSettingsBrand: unique symbol;
export interface XmlWriterSettings extends ClrHostValue {
  readonly [xmlWriterSettingsBrand]: true;
  async: boolean;
  checkCharacters: boolean;
  clone(): System.Xml.XmlWriterSettings;
  closeOutput: boolean;
  conformanceLevel: System.Xml.ConformanceLevel;
  doNotEscapeUriAttributes: boolean;
  encoding: System.Text.Encoding;
  indent: boolean;
  indentChars: string;
  namespaceHandling: System.Xml.NamespaceHandling;
  newLineChars: string;
  newLineHandling: System.Xml.NewLineHandling;
  newLineOnAttributes: boolean;
  omitXmlDeclaration: boolean;
  readonly outputMethod: System.Xml.XmlOutputMethod;
  reset(): VoidResult;
  writeEndDocumentOnClose: boolean;
}

declare global {
  namespace System.Xml {
    type XmlWriterSettings = import("./XmlWriterSettings").XmlWriterSettings;
  }
}

export interface XmlWriterSettingsHostType extends HostType<
  XmlWriterSettings,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): XmlWriterSettings;
}

export {};
