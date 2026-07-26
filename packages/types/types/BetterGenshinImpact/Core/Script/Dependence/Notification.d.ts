import type {
  ClrHostValue,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../../Microsoft/ClearScript/VoidResult";

/**
 * 脚本通知推送
 * @since 0.44.3
 */
declare const notificationBrand: unique symbol;
export interface Notification extends ClrHostValue {
  readonly [notificationBrand]: true;
  /**
   * 发送成功通知
   * @param message 通知正文
   * @returns ClearScript 宿主空结果
   * @since 0.44.3
   */
  send(message: string): VoidResult;
  /**
   * 发送错误通知
   * @param message 错误通知正文
   * @returns ClearScript 宿主空结果
   * @since 0.44.3
   */
  error(message: string): VoidResult;
}

declare global {
  namespace BetterGenshinImpact.Core.Script.Dependence {
    type Notification = import("./Notification").Notification;
  }
}

export interface NotificationHostType extends HostType<
  Notification,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  /**
   * 构造实例
   * @since 0.44.3
   */
  new (): Notification;
}

export {};
