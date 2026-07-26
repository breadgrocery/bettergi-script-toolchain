import type {
  HostDelegate,
  Int32Host,
  StrongNumeric
} from "../types/Microsoft/ClearScript/HostType";
import type { VoidResult } from "../types/Microsoft/ClearScript/VoidResult";

interface moveMouseByHostDelegate extends HostDelegate {
  (x: number | StrongNumeric<Int32Host>, y: number | StrongNumeric<Int32Host>): VoidResult;
  invoke(x: number | StrongNumeric<Int32Host>, y: number | StrongNumeric<Int32Host>): VoidResult;
}

declare global {
  /**
   * 相对移动鼠标
   * @since 0.43.1
   */
  const moveMouseBy: moveMouseByHostDelegate;
}

export {};
