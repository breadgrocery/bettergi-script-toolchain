import type {
  HostArray,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "./Collections/Generic/IEnumerable";
import "./Collections/ObjectModel/ReadOnlyCollection";
import "./Func";
import "./Runtime/Serialization/ISerializable";
import "./Runtime/Serialization/SerializationInfo";
import "./Runtime/Serialization/StreamingContext";
import "./WebSocket";

declare const aggregateExceptionBrand: unique symbol;
export interface AggregateException
  extends
    Omit<
      System.Exception,
      | "flatten"
      | "getBaseException"
      | "getObjectData"
      | "handle"
      | "innerExceptions"
      | "message"
      | "toString"
    >,
    System.Runtime.Serialization.ISerializableInput {
  readonly [aggregateExceptionBrand]: true;
  flatten(): System.AggregateException;
  getBaseException(): System.Exception;
  getObjectData(
    info: System.Runtime.Serialization.SerializationInfo,
    context: System.Runtime.Serialization.StreamingContext
  ): VoidResult;
  handle(predicate: System.Func<System.Exception, boolean>): VoidResult;
  readonly innerExceptions: System.Collections.ObjectModel.ReadOnlyCollection<System.Exception>;
  readonly message: string;
  toString(): string;
}

declare global {
  namespace System {
    type AggregateException = import("./AggregateException").AggregateException;
  }
}

export interface AggregateExceptionHostType extends HostType<
  AggregateException,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): AggregateException;
  new (message: string | null): AggregateException;
  new (message: string | null, innerException: System.Exception): AggregateException;
  new (
    innerExceptions: System.Collections.Generic.IEnumerable<System.Exception>
  ): AggregateException;
  new (innerExceptions: HostArray<System.Exception>): AggregateException;
  new (...innerExceptions: System.Exception[]): AggregateException;
  new (
    message: string | null,
    innerExceptions: System.Collections.Generic.IEnumerable<System.Exception>
  ): AggregateException;
  new (message: string | null, innerExceptions: HostArray<System.Exception>): AggregateException;
  new (message: string | null, ...innerExceptions: System.Exception[]): AggregateException;
}

export {};
