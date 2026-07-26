import "../types/BetterGenshinImpact/Core/Script/Dependence/CustomHostFunctions";
import "../types/Microsoft/ClearScript/HostFunctions";
import type {
  ClrHostValue,
  DoubleHost,
  HostType,
  Int32Host,
  StrongNumeric
} from "../types/Microsoft/ClearScript/HostType";
import type { ClrInput, HostVariable } from "../types/Microsoft/ClearScript/HostVariable";
import "../types/Microsoft/ClearScript/V8/V8ProxyHelpers";
import type { VoidResult } from "../types/Microsoft/ClearScript/VoidResult";

declare global {
  namespace BetterGI {
    /**
     * BetterGI 扩展的 ClearScript 宿主函数面
     * @since 0.58.0
     */
    type Host = BetterGenshinImpact.Core.Script.Dependence.CustomHostFunctions;
  }

  /**
   * BetterGI 注册的 ClearScript 宿主函数
   * @since 0.58.0
   */
  const host: BetterGI.Host;
}

export {};
