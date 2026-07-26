import type {
  ClrHostValue,
  HostType,
  Int32Host,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../../Microsoft/ClearScript/HostType";
import "../../../../Microsoft/ClearScript/ScriptObject";
import type { VoidResult } from "../../../../Microsoft/ClearScript/VoidResult";
import "../../../../System/IDisposable";

/**
 * 钩子回报的鼠标按键
 * @since 0.55.0
 */
export type MouseButton =
  | "Left" // 左键
  | "Right" // 右键
  | "Middle" // 中键
  | "XButton1" // 侧键 1
  | "XButton2" // 侧键 2
  | (string & {});

/**
 * 键鼠输入钩子
 * @since 0.55.0
 */
declare const keyMouseHookBrand: unique symbol;
export interface KeyMouseHook extends ClrHostValue, System.IDisposableInput {
  readonly [keyMouseHookBrand]: true;
  /**
   * 注册键盘按下事件回调
   * @param callback 回调函数
   * @param useCodeOnly 是否仅返回 KeyCode，默认为 true
   * @returns ClearScript 宿主空结果
   * @since 0.55.0
   */
  onKeyDown(callback: Microsoft.ClearScript.ScriptObject): VoidResult;
  onKeyDown(callback: Microsoft.ClearScript.ScriptObject, useCodeOnly: boolean): VoidResult;
  /**
   * 注册键盘释放事件回调
   * @param callback 回调函数
   * @param useCodeOnly 是否仅返回 KeyCode，默认为 true
   * @returns ClearScript 宿主空结果
   * @since 0.55.0
   */
  onKeyUp(callback: Microsoft.ClearScript.ScriptObject): VoidResult;
  onKeyUp(callback: Microsoft.ClearScript.ScriptObject, useCodeOnly: boolean): VoidResult;
  /**
   * 注册鼠标按下事件回调
   * @param callback 回调，参数为按键名与游戏窗口局部坐标
   * @returns ClearScript 宿主空结果
   * @since 0.55.0
   */
  onMouseDown(callback: (button: MouseButton, x: number, y: number) => void): VoidResult;
  /**
   * 注册鼠标抬起事件回调
   * @param callback 回调，参数为按键名与游戏窗口局部坐标
   * @returns ClearScript 宿主空结果
   * @since 0.55.0
   */
  onMouseUp(callback: (button: MouseButton, x: number, y: number) => void): VoidResult;
  /**
   * 注册鼠标移动事件回调
   * @param callback 回调函数
   * @param interval 回调间隔，单位毫秒，默认 200
   * @returns ClearScript 宿主空结果
   * @since 0.55.0
   */
  onMouseMove(callback: (x: number, y: number) => void): VoidResult;
  onMouseMove(
    callback: (x: number, y: number) => void,
    interval: number | StrongNumeric<Int32Host>
  ): VoidResult;
  /**
   * 注册鼠标滚轮事件回调
   * @param callback 回调函数
   * @returns ClearScript 宿主空结果
   * @since 0.55.0
   */
  onMouseWheel(callback: (delta: number, x: number, y: number) => void): VoidResult;
  /**
   * 移除全部监听
   * @returns ClearScript 宿主空结果
   * @since 0.55.0
   */
  removeAllListeners(): VoidResult;
  /**
   * 释放钩子资源
   * @returns ClearScript 宿主空结果
   * @since 0.55.0
   */
  dispose(): VoidResult;
}

declare global {
  namespace BetterGenshinImpact.Core.Script.Dependence {
    type KeyMouseHook = import("./KeyMouseHook").KeyMouseHook;
  }
}

export interface KeyMouseHookHostType extends HostType<
  KeyMouseHook,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  /**
   * 构造实例
   * @since 0.55.0
   */
  new (): KeyMouseHook;
}

export {};
