import type { KeyCode } from "../types/BetterGenshinImpact/Helpers/User32Helper";
import type { HostDelegate } from "../types/Microsoft/ClearScript/HostType";
import type { VoidResult } from "../types/Microsoft/ClearScript/VoidResult";

interface keyDownHostDelegate extends HostDelegate {
  (key: KeyCode): VoidResult;
  invoke(key: KeyCode): VoidResult;
}

declare global {
  /**
   * 按下键盘或鼠标按键
   * @since 0.43.1
   */
  const keyDown: keyDownHostDelegate;
}

export {};
