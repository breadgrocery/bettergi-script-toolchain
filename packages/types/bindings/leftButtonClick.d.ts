import type { HostDelegate } from "../types/Microsoft/ClearScript/HostType";
import type { VoidResult } from "../types/Microsoft/ClearScript/VoidResult";

interface leftButtonClickHostDelegate extends HostDelegate {
  (): VoidResult;
  invoke(): VoidResult;
}

declare global {
  /**
   * 单击鼠标左键
   * @since 0.43.1
   */
  const leftButtonClick: leftButtonClickHostDelegate;
}

export {};
