import type {
  ClrHostValue,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../../../Microsoft/ClearScript/VoidResult";
import type { KeyCode } from "../../../../Helpers/User32Helper";

/**
 * 基于 PostMessage 的输入模拟
 * @since 0.43.1
 */
declare const postMessageBrand: unique symbol;
export interface PostMessage extends ClrHostValue {
  readonly [postMessageBrand]: true;
  /**
   * 按下按键
   * @param key 按键编码
   * @returns ClearScript 宿主空结果
   * @since 0.43.1
   */
  keyDown(key: KeyCode): VoidResult;
  /**
   * 释放按键
   * @param key 按键编码
   * @returns ClearScript 宿主空结果
   * @since 0.43.1
   */
  keyUp(key: KeyCode): VoidResult;
  /**
   * 单击按键
   * @param key 按键编码
   * @returns ClearScript 宿主空结果
   * @since 0.43.1
   */
  keyPress(key: KeyCode): VoidResult;
  /**
   * 单击鼠标左键
   * @returns ClearScript 宿主空结果
   * @since 0.43.1
   */
  click(): VoidResult;
}

declare global {
  namespace BetterGenshinImpact.Core.Script.Dependence.Simulator {
    type PostMessage = import("./PostMessage").PostMessage;
  }
}

export interface PostMessageHostType extends HostType<
  PostMessage,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  /**
   * 构造实例
   * @since 0.43.1
   */
  new (): PostMessage;
}

export {};
