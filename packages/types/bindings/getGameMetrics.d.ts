import type { HostArray, HostDelegate } from "../types/Microsoft/ClearScript/HostType";

interface getGameMetricsHostDelegate extends HostDelegate {
  (): HostArray<number>;
  invoke(): HostArray<number>;
}

declare global {
  /**
   * 获取游戏窗口度量
   * @since 0.53.0
   */
  const getGameMetrics: getGameMetricsHostDelegate;
}

export {};
