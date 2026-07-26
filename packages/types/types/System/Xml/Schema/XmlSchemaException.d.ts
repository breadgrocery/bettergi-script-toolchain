import type {
  HostType,
  Int32Host,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../Runtime/Serialization/ISerializable";
import "../../Runtime/Serialization/SerializationInfo";
import "../../Runtime/Serialization/StreamingContext";
import "../../SystemException";
import "../../WebSocket";
import "./XmlSchemaObject";

declare const xmlSchemaExceptionBrand: unique symbol;
export interface XmlSchemaException
  extends
    Omit<
      System.SystemException,
      | "getObjectData"
      | "lineNumber"
      | "linePosition"
      | "message"
      | "sourceSchemaObject"
      | "sourceUri"
    >,
    System.Runtime.Serialization.ISerializableInput {
  readonly [xmlSchemaExceptionBrand]: true;
  getObjectData(
    info: System.Runtime.Serialization.SerializationInfo,
    context: System.Runtime.Serialization.StreamingContext
  ): VoidResult;
  readonly lineNumber: number;
  readonly linePosition: number;
  readonly message: string;
  readonly sourceSchemaObject: System.Xml.Schema.XmlSchemaObject;
  readonly sourceUri: string;
}

declare global {
  namespace System.Xml.Schema {
    type XmlSchemaException = import("./XmlSchemaException").XmlSchemaException;
  }
}

export interface XmlSchemaExceptionHostType extends HostType<
  XmlSchemaException,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): XmlSchemaException;
  new (message: string | null): XmlSchemaException;
  new (message: string | null, innerException: System.Exception | null): XmlSchemaException;
  new (
    message: string | null,
    innerException: System.Exception | null,
    lineNumber: number | StrongNumeric<Int32Host>,
    linePosition: number | StrongNumeric<Int32Host>
  ): XmlSchemaException;
}

export {};
