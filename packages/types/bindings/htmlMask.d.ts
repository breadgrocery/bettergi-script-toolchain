/**
 * 脚本侧 HTML 遮罩全局（ClearScript 宿主对象）。
 * 启用：`import "@bettergi/types/htmlMask/host"` 或整包 `@bettergi/types`。
 * 遮罩页（WebView）侧见 `@bettergi/types/htmlMask/webview`。
 */
import "../types/BetterGenshinImpact/Core/Script/Dependence/HtmlMask";

declare global {
  /**
   * HTML 遮罩
   * @since 0.61.0
   */
  const htmlMask: BetterGenshinImpact.Core.Script.Dependence.HtmlMask;
}

export {};
