import type { HostDelegate } from "../types/Microsoft/ClearScript/HostType";
import type { VoidResult } from "../types/Microsoft/ClearScript/VoidResult";

interface middleButtonUpHostDelegate extends HostDelegate {
  (): VoidResult;
  invoke(): VoidResult;
}

declare global {
  /**
   * 抬起鼠标中键
   * @since 0.43.1
   */
  const middleButtonUp: middleButtonUpHostDelegate;
}

export {};
