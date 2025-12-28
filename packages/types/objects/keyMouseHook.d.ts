import { type KeyCodeString, type KeyDataString } from "../types/System/Windows/Forms/Keys";

type MouseButton = "Left" | "Right" | "Middle" | "XButton1" | "XButton2";

declare global {
  /** @since 0.55.0 */
  namespace keyMouseHook {
    /**
     * 注册键盘按下事件回调
     * @param callback 回调函数
     * @param useCodeOnly 是否仅返回 KeyCode，否则返回 KeyData（默认为 true）
     * @since 0.55.0
     */
    function onKeyDown(callback: (keyCode: KeyCodeString) => void, useCodeOnly?: true): void;
    // overload
    function onKeyDown(callback: (keyData: KeyDataString) => void, useCodeOnly: false): void;

    /**
     * 注册键盘释放事件回调
     * @param callback 回调函数
     * @param useCodeOnly 是否仅返回 KeyCode，否则返回 KeyData（默认为 true）
     * @since 0.55.0
     */
    function onKeyUp(callback: (keyCode: KeyCodeString) => void, useCodeOnly?: true): void;
    // overload
    function onKeyUp(callback: (keyData: KeyDataString) => void, useCodeOnly: false): void;

    /**
     * 注册鼠标移动事件回调
     * @param callback 回调函数
     * @since 0.55.0
     */
    function onMouseDown(callback: (button: MouseButton) => void): void;

    /**
     * 注册鼠标释放事件回调
     * @param callback 回调函数
     * @since 0.55.0
     */
    function onMouseUp(callback: (keyCode: MouseButton) => void): void;

    /**
     * 注册鼠标移动事件回调
     * @param callback 回调函数
     * @param interval 回调节流间隔（单位：毫秒，默认值：200）
     */
    function onMouseMove(callback: (x: number, y: number) => void, interval?: number): void;

    /**
     * 注册鼠标滚轮事件回调
     * @param callback 回调函数
     * @since 0.55.0
     */
    function onMouseWheel(callback: (delta: number, x: number, y: number) => void): void;

    /**
     * 清空回调列表
     * @since 0.55.0
     */
    function removeAllListeners(): void;

    /**
     * 取消所有注册键鼠事件回调
     * @since 0.55.0
     */
    function dispose(): void;
  }
}

export {};
