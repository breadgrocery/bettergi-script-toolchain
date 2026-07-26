import type { HostDelegate } from "../types/Microsoft/ClearScript/HostType";

interface getVersionHostDelegate extends HostDelegate {
  (): string;
  invoke(): string;
}

declare global {
  /**
   * 获取 BetterGI 版本号
   * @since 0.56.2
   */
  const getVersion: getVersionHostDelegate;
}

export {};
