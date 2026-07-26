import type {
  HostDelegate,
  Int32Host,
  StrongNumeric
} from "../types/Microsoft/ClearScript/HostType";
import type { VoidResult } from "../types/Microsoft/ClearScript/VoidResult";

interface clickHostDelegate extends HostDelegate {
  (x: number | StrongNumeric<Int32Host>, y: number | StrongNumeric<Int32Host>): VoidResult;
  invoke(x: number | StrongNumeric<Int32Host>, y: number | StrongNumeric<Int32Host>): VoidResult;
}

declare global {
  /**
   * 在指定坐标单击
   * @since 0.43.1
   */
  const click: clickHostDelegate;
}

export {};
