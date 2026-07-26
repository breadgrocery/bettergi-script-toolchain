import type { HostDelegate } from "../types/Microsoft/ClearScript/HostType";
import type { VoidResult } from "../types/Microsoft/ClearScript/VoidResult";

interface inputTextHostDelegate extends HostDelegate {
  (text: string): VoidResult;
  invoke(text: string): VoidResult;
}

declare global {
  /**
   * 向游戏输入文本
   * @since 0.45.1
   */
  const inputText: inputTextHostDelegate;
}

export {};
