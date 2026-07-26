import type { HostType, InterfaceTypeTrait } from "../../../Microsoft/ClearScript/HostType";
import "./XmlSchemaAttribute";
import "./XmlSchemaElement";
import "./XmlSchemaSimpleType";
import "./XmlSchemaType";
import "./XmlSchemaValidity";

declare const iXmlSchemaInfoInputBrand: unique symbol;
export interface IXmlSchemaInfoInput {
  readonly [iXmlSchemaInfoInputBrand]: true;
}

export interface IXmlSchemaInfo
  extends Microsoft.ClearScript.ClrInterfaceView<IXmlSchemaInfoInput>, IXmlSchemaInfoInput {
  readonly isDefault: boolean;
  readonly isNil: boolean;
  readonly memberType: System.Xml.Schema.XmlSchemaSimpleType;
  readonly schemaAttribute: System.Xml.Schema.XmlSchemaAttribute;
  readonly schemaElement: System.Xml.Schema.XmlSchemaElement;
  readonly schemaType: System.Xml.Schema.XmlSchemaType;
  readonly validity: System.Xml.Schema.XmlSchemaValidity;
}

declare global {
  namespace System.Xml.Schema {
    type IXmlSchemaInfoInput = import("./IXmlSchemaInfo").IXmlSchemaInfoInput;
  }
}

declare global {
  namespace System.Xml.Schema {
    type IXmlSchemaInfo = import("./IXmlSchemaInfo").IXmlSchemaInfo;
  }
}

export interface IXmlSchemaInfoHostType extends HostType<IXmlSchemaInfo, InterfaceTypeTrait> {}

export {};
