import type {
  HostDelegate,
  Int32Host,
  StrongNumeric
} from "../types/Microsoft/ClearScript/HostType";
import type { VoidResult } from "../types/Microsoft/ClearScript/VoidResult";

interface verticalScrollHostDelegate extends HostDelegate {
  (scrollAmountInClicks: number | StrongNumeric<Int32Host>): VoidResult;
  invoke(scrollAmountInClicks: number | StrongNumeric<Int32Host>): VoidResult;
}

declare global {
  /**
   * 垂直滚动鼠标滚轮
   * @since 0.45.1
   */
  const verticalScroll: verticalScrollHostDelegate;
}

export {};
