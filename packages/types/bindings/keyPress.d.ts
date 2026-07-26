import type { KeyCode } from "../types/BetterGenshinImpact/Helpers/User32Helper";
import type { HostDelegate } from "../types/Microsoft/ClearScript/HostType";
import type { VoidResult } from "../types/Microsoft/ClearScript/VoidResult";

interface keyPressHostDelegate extends HostDelegate {
  (key: KeyCode): VoidResult;
  invoke(key: KeyCode): VoidResult;
}

declare global {
  /**
   * 单击键盘或鼠标按键
   * @since 0.43.1
   */
  const keyPress: keyPressHostDelegate;
}

export {};
