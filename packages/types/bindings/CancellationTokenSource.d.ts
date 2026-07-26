import type { CancellationTokenSourceHostType } from "../types/System/Threading/CancellationTokenSource";

declare global {
  /**
   * 取消标记源 HostType
   * @since 0.45.1
   */
  const CancellationTokenSource: CancellationTokenSourceHostType;
  type CancellationTokenSource = System.Threading.CancellationTokenSource;
}

export {};
