import type { CancellationTokenHostType } from "../types/System/Threading/CancellationToken";

declare global {
  /**
   * 取消标记 HostType
   * @since 0.45.1
   */
  const CancellationToken: CancellationTokenHostType;
  type CancellationToken = System.Threading.CancellationToken;
}

export {};
