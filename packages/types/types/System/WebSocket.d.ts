import type {
  ClrHostValue,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "./Collections/IDictionary";
import "./Reflection/MethodBase";
import "./Runtime/Serialization/ISerializable";
import "./Runtime/Serialization/SerializationInfo";
import "./Runtime/Serialization/StreamingContext";
import "./V8SplitProxyHelpers";

declare const exceptionBrand: unique symbol;
export interface Exception extends ClrHostValue, System.Runtime.Serialization.ISerializableInput {
  readonly [exceptionBrand]: true;
  getBaseException(): System.Exception;
  getObjectData(
    info: System.Runtime.Serialization.SerializationInfo,
    context: System.Runtime.Serialization.StreamingContext
  ): VoidResult;
  getType(): System.Type;
  hResult: number;
  helpLink: string;
  readonly data: System.Collections.IDictionary;
  readonly innerException: System.Exception;
  readonly message: string;
  readonly stackTrace: string;
  readonly targetSite: System.Reflection.MethodBase;
  source: string;
  toString(): string;
}

declare global {
  namespace System {
    type Exception = import("./WebSocket").Exception;
  }
}

export interface ExceptionHostType extends HostType<
  Exception,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): Exception;
  new (message: string | null): Exception;
  new (message: string | null, innerException: System.Exception | null): Exception;
}

export {};
