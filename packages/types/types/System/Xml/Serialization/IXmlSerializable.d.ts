import type { HostType, InterfaceTypeTrait } from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../Schema/XmlSchema";
import "../XmlReader";
import "../XmlWriter";

declare const iXmlSerializableInputBrand: unique symbol;
export interface IXmlSerializableInput {
  readonly [iXmlSerializableInputBrand]: true;
}

export interface IXmlSerializable
  extends Microsoft.ClearScript.ClrInterfaceView<IXmlSerializableInput>, IXmlSerializableInput {
  getSchema(): System.Xml.Schema.XmlSchema;
  readXml(reader: System.Xml.XmlReader): VoidResult;
  writeXml(writer: System.Xml.XmlWriter): VoidResult;
}

declare global {
  namespace System.Xml.Serialization {
    type IXmlSerializableInput = import("./IXmlSerializable").IXmlSerializableInput;
  }
}

declare global {
  namespace System.Xml.Serialization {
    type IXmlSerializable = import("./IXmlSerializable").IXmlSerializable;
  }
}

export interface IXmlSerializableHostType extends HostType<IXmlSerializable, InterfaceTypeTrait> {}

export {};
