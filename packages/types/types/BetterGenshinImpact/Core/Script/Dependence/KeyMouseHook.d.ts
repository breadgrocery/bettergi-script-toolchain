import { type KeyCodeString, type KeyDataString } from "../../../../System/Windows/Forms/Keys";

type MouseButton = "Left" | "Right" | "Middle" | "XButton1" | "XButton2";

declare global {
  namespace BetterGenshinImpact.Core.Script.Dependence {
    class KeyMouseHook {
      /**
       * 注册键盘按下事件回调
       * @param callback 回调函数
       * @param useCodeOnly 是否仅返回 KeyCode，否则返回 KeyData（默认为 true）
       * @since 0.55.0
       */
      onKeyDown(callback: (keyCode: KeyCodeString) => void, useCodeOnly?: true): void;
      // overload
      onKeyDown(callback: (keyData: KeyDataString) => void, useCodeOnly: false): void;

      /**
       * 注册键盘释放事件回调
       * @param callback 回调函数
       * @param useCodeOnly 是否仅返回 KeyCode，否则返回 KeyData（默认为 true）
       * @since 0.55.0
       */
      onKeyUp(callback: (keyCode: KeyCodeString) => void, useCodeOnly?: true): void;
      // overload
      onKeyUp(callback: (keyData: KeyDataString) => void, useCodeOnly: false): void;

      /**
       * 注册鼠标移动事件回调
       * @param callback 回调函数
       * @since 0.55.0
       */
      onMouseDown(callback: (button: MouseButton) => void): void;

      /**
       * 注册鼠标释放事件回调
       * @param callback 回调函数
       * @since 0.55.0
       */
      onMouseUp(callback: (keyCode: MouseButton) => void): void;

      /**
       * 注册鼠标移动事件回调
       * @param callback 回调函数
       * @param interval 回调节流间隔（单位：毫秒，默认值：200）
       */
      onMouseMove(callback: (x: number, y: number) => void): void;
      // overload
      onMouseMove(callback: (x: number, y: number) => void, interval: number): void;

      /**
       * 注册鼠标滚轮事件回调
       * @param callback 回调函数
       * @since 0.55.0
       */
      onMouseWheel(callback: (delta: number, x: number, y: number) => void): void;

      /**
       * 清空回调列表
       * @since 0.55.0
       */
      removeAllListeners(): void;

      /**
       * 取消所有注册键鼠事件回调
       * @since 0.55.0
       */
      dispose(): void;

      constructor();
    }
  }
  export import KeyMouseHook = BetterGenshinImpact.Core.Script.Dependence.KeyMouseHook;
}

export {};
