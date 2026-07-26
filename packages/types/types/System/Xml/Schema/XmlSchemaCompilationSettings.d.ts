import type {
  ClrHostValue,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";

declare const xmlSchemaCompilationSettingsBrand: unique symbol;
export interface XmlSchemaCompilationSettings extends ClrHostValue {
  readonly [xmlSchemaCompilationSettingsBrand]: true;
  enableUpaCheck: boolean;
}

declare global {
  namespace System.Xml.Schema {
    type XmlSchemaCompilationSettings =
      import("./XmlSchemaCompilationSettings").XmlSchemaCompilationSettings;
  }
}

export interface XmlSchemaCompilationSettingsHostType extends HostType<
  XmlSchemaCompilationSettings,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): XmlSchemaCompilationSettings;
}

export {};
