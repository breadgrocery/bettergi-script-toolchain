/**
 * HTML 遮罩页（WebView2）侧通信桥类型。
 * 对应宿主 `HtmlMaskWindow` 在 DocumentCreated 时注入的 helper，
 * 与脚本侧 `@bettergi/types/htmlMask/host`（ClearScript `htmlMask` 全局）相对。
 *
 * 启用：`import "@bettergi/types/htmlMask/webview"` 或
 * `/// <reference types="@bettergi/types/htmlMask/webview" />`
 *
 * @see BetterGenshinImpact.View.HtmlMaskWindow
 * @since 0.61.0
 */

/**
 * 遮罩页与脚本之间的消息信封
 * 宿主 JSON 使用 camelCase（url / data / requestId）
 * @since 0.61.0
 */
export interface HtmlMaskWebViewMessage {
  /** 消息路径；页→脚本的 request 与脚本→页的推送均使用 */
  url?: string;
  /** 业务载荷；解析失败时可能不存在 */
  data?: unknown;
  /**
   * 请求-应答关联 ID
   * - 页发起 request 时由注入脚本生成（`__req_*`）
   * - 脚本发起 request 时由宿主生成；页 onMessage 若返回值非 undefined 则自动回传
   */
  requestId?: string;
}

/**
 * 注入到遮罩页的 `window.htmlMask` 助手
 * 内部还含 `_callbacks` / `_seq` / `_dispatch`，属实现细节，不纳入公开类型
 * @since 0.61.0
 */
export interface HtmlMaskWebView {
  /**
   * 向脚本侧发起请求并等待响应
   * 经 `chrome.webview.postMessage` 送出 `{ url, data, requestId }`；
   * 匹配到带同一 requestId 的入站消息后 resolve 整包对象
   * @param url 消息路径
   * @param data 载荷，省略时按 `{}` 发送
   * @since 0.61.0
   */
  request(url: string, data?: unknown): Promise<HtmlMaskWebViewMessage>;

  /**
   * 脚本推送到页的消息回调
   * - 入站 JSON 解析成功：参数为消息对象
   * - 解析失败：参数为原始字符串，且仍调用本回调
   * - 若消息带 `requestId` 且返回值不是 `undefined`，助手会将结果
   *   （支持 Promise）以 `{ requestId, url: "/__response__", data }` 回传脚本
   * @since 0.61.0
   */
  onMessage: ((msg: HtmlMaskWebViewMessage | string) => unknown) | null;
}

/**
 * WebView2 提供的 `chrome.webview` 子集（遮罩页实际使用的面）
 * @since 0.61.0
 */
export interface ChromeWebView {
  /**
   * 向宿主发送字符串消息（须为 JSON 文本）
   * @since 0.61.0
   */
  postMessage(message: string): void;
  /**
   * 监听宿主 `PostWebMessageAsString` 推送
   * @since 0.61.0
   */
  addEventListener(type: "message", listener: (event: { data: string }) => void): void;
}

declare global {
  interface Window {
    /**
     * HTML 遮罩页通信桥（宿主注入；非宿主环境可能不存在）
     * @since 0.61.0
     */
    htmlMask?: HtmlMaskWebView;
    /**
     * WebView2 宿主对象；仅 WebView 内可用
     * @since 0.61.0
     */
    chrome?: {
      webview?: ChromeWebView;
    };
  }
}

export {};
