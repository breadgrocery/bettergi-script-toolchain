import type {
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../../Microsoft/ClearScript/HostType";
import "../../../../System/Runtime/Serialization/ISerializable";
import "../../../../System/WebSocket";

/**
 * 需要重试当前任务时抛出的异常
 * @since 0.65.0
 */
declare const retryExceptionBrand: unique symbol;
export interface RetryException
  extends System.Exception, System.Runtime.Serialization.ISerializableInput {
  readonly [retryExceptionBrand]: true;
}

declare global {
  namespace BetterGenshinImpact.GameTask.AutoGeniusInvokation.Exception {
    type RetryException = import("./RetryException").RetryException;
  }
}

export interface RetryExceptionHostType extends HostType<
  RetryException,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  /**
   * 构造实例
   * @since 0.65.0
   */
  new (): RetryException;
  /**
   * 使用说明信息构造实例
   * @param message 异常说明
   * @since 0.65.0
   */
  new (message: string): RetryException;
}

export {};
