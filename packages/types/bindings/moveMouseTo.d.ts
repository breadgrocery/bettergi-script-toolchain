import type {
  HostDelegate,
  Int32Host,
  StrongNumeric
} from "../types/Microsoft/ClearScript/HostType";
import type { VoidResult } from "../types/Microsoft/ClearScript/VoidResult";

interface moveMouseToHostDelegate extends HostDelegate {
  (x: number | StrongNumeric<Int32Host>, y: number | StrongNumeric<Int32Host>): VoidResult;
  invoke(x: number | StrongNumeric<Int32Host>, y: number | StrongNumeric<Int32Host>): VoidResult;
}

declare global {
  /**
   * 移动鼠标到绝对坐标
   * @since 0.43.1
   */
  const moveMouseTo: moveMouseToHostDelegate;
}

export {};
