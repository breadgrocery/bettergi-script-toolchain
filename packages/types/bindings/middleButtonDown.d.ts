import type { HostDelegate } from "../types/Microsoft/ClearScript/HostType";
import type { VoidResult } from "../types/Microsoft/ClearScript/VoidResult";

interface middleButtonDownHostDelegate extends HostDelegate {
  (): VoidResult;
  invoke(): VoidResult;
}

declare global {
  /**
   * 按下鼠标中键
   * @since 0.43.1
   */
  const middleButtonDown: middleButtonDownHostDelegate;
}

export {};
