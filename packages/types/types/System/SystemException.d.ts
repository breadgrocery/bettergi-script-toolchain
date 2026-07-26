import type {
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../Microsoft/ClearScript/HostType";
import "./Runtime/Serialization/ISerializable";
import "./WebSocket";

declare const systemExceptionBrand: unique symbol;
export interface SystemException
  extends System.Exception, System.Runtime.Serialization.ISerializableInput {
  readonly [systemExceptionBrand]: true;
}

declare global {
  namespace System {
    type SystemException = import("./SystemException").SystemException;
  }
}

export interface SystemExceptionHostType extends HostType<
  SystemException,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): SystemException;
  new (message: string | null): SystemException;
  new (message: string | null, innerException: System.Exception | null): SystemException;
}

export {};
