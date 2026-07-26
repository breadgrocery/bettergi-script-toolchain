import type {
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../Microsoft/ClearScript/HostType";
import "../System/Runtime/Serialization/ISerializable";
import "../System/WebSocket";

declare const openCvSharpExceptionBrand: unique symbol;
export interface OpenCvSharpException
  extends System.Exception, System.Runtime.Serialization.ISerializableInput {
  readonly [openCvSharpExceptionBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type OpenCvSharpException = import("./OpenCvSharpException").OpenCvSharpException;
  }
}

export interface OpenCvSharpExceptionHostType extends HostType<
  OpenCvSharpException,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): OpenCvSharpException;
  new (message: string): OpenCvSharpException;
  new (message: string, innerException: System.Exception): OpenCvSharpException;
}

export {};
