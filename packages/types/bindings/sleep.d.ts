import type {
  HostDelegate,
  Int32Host,
  StrongNumeric
} from "../types/Microsoft/ClearScript/HostType";

interface sleepHostDelegate extends HostDelegate {
  (millisecondsTimeout: number | StrongNumeric<Int32Host>): Promise<void>;
  invoke(millisecondsTimeout: number | StrongNumeric<Int32Host>): Promise<void>;
}

declare global {
  /**
   * 异步等待指定毫秒数
   * @since 0.43.1
   */
  const sleep: sleepHostDelegate;
}

export {};
