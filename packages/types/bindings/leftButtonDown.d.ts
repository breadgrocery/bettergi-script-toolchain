import type { HostDelegate } from "../types/Microsoft/ClearScript/HostType";
import type { VoidResult } from "../types/Microsoft/ClearScript/VoidResult";

interface leftButtonDownHostDelegate extends HostDelegate {
  (): VoidResult;
  invoke(): VoidResult;
}

declare global {
  /**
   * 按下鼠标左键
   * @since 0.43.1
   */
  const leftButtonDown: leftButtonDownHostDelegate;
}

export {};
