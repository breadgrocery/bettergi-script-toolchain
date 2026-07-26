import type { HostType, ReferenceTypeTrait } from "../../../Microsoft/ClearScript/HostType";
import "../../EventArgs";
import "./XmlSchemaException";
import "./XmlSeverityType";

declare const validationEventArgsBrand: unique symbol;
export interface ValidationEventArgs extends Omit<
  System.EventArgs,
  "exception" | "message" | "severity"
> {
  readonly [validationEventArgsBrand]: true;
  readonly exception: System.Xml.Schema.XmlSchemaException;
  readonly message: string;
  readonly severity: System.Xml.Schema.XmlSeverityType;
}

declare global {
  namespace System.Xml.Schema {
    type ValidationEventArgs = import("./ValidationEventArgs").ValidationEventArgs;
  }
}

export interface ValidationEventArgsHostType extends HostType<
  ValidationEventArgs,
  ReferenceTypeTrait
> {}

export {};
