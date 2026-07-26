import type {
  DoubleHost,
  HostDelegate,
  Int32Host,
  StrongNumeric
} from "../types/Microsoft/ClearScript/HostType";
import type { VoidResult } from "../types/Microsoft/ClearScript/VoidResult";

declare const setGameMetricsDelegateBrand: unique symbol;

interface SetGameMetricsDelegate extends HostDelegate {
  readonly [setGameMetricsDelegateBrand]: true;
  (width: number | StrongNumeric<Int32Host>, height: number | StrongNumeric<Int32Host>): VoidResult;
  (
    width: number | StrongNumeric<Int32Host>,
    height: number | StrongNumeric<Int32Host>,
    dpi: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  invoke(
    width: number | StrongNumeric<Int32Host>,
    height: number | StrongNumeric<Int32Host>
  ): VoidResult;
  invoke(
    width: number | StrongNumeric<Int32Host>,
    height: number | StrongNumeric<Int32Host>,
    dpi: number | StrongNumeric<DoubleHost>
  ): VoidResult;
}

declare global {
  /**
   * 设置游戏窗口度量
   * @since 0.43.1
   */
  const setGameMetrics: SetGameMetricsDelegate;
}

export {};
