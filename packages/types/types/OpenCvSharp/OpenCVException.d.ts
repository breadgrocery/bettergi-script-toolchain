import type {
  EnumInput,
  HostType,
  Int32Host,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/Runtime/Serialization/ISerializable";
import "../System/Runtime/Serialization/SerializationInfo";
import "../System/Runtime/Serialization/StreamingContext";
import "../System/WebSocket";
import "./ErrorCode";

declare const openCVExceptionBrand: unique symbol;
export interface OpenCVException
  extends
    Omit<
      System.Exception,
      "errMsg" | "fileName" | "funcName" | "getObjectData" | "line" | "status"
    >,
    System.Runtime.Serialization.ISerializableInput {
  readonly [openCVExceptionBrand]: true;
  status: OpenCvSharp.ErrorCode;
  funcName: string;
  errMsg: string;
  fileName: string;
  line: number;
  getObjectData(
    info: System.Runtime.Serialization.SerializationInfo,
    context: System.Runtime.Serialization.StreamingContext
  ): VoidResult;
}

declare global {
  namespace OpenCvSharp {
    type OpenCVException = import("./OpenCVException").OpenCVException;
  }
}

export interface OpenCVExceptionHostType extends HostType<
  OpenCVException,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (
    status: EnumInput<OpenCvSharp.ErrorCode>,
    funcName: string,
    errMsg: string,
    fileName: string,
    line: number | StrongNumeric<Int32Host>
  ): OpenCVException;
  new (): OpenCVException;
  new (message: string): OpenCVException;
  new (message: string, innerException: System.Exception): OpenCVException;
}

export {};
