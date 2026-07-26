import type { HostDelegate } from "../types/Microsoft/ClearScript/HostType";
import type { VoidResult } from "../types/Microsoft/ClearScript/VoidResult";

interface rightButtonClickHostDelegate extends HostDelegate {
  (): VoidResult;
  invoke(): VoidResult;
}

declare global {
  /**
   * 单击鼠标右键
   * @since 0.43.1
   */
  const rightButtonClick: rightButtonClickHostDelegate;
}

export {};
