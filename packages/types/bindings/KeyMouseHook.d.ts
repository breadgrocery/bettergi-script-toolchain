import type { KeyMouseHookHostType } from "../types/BetterGenshinImpact/Core/Script/Dependence/KeyMouseHook";

declare global {
  /**
   * 键鼠钩子 HostType
   * @since 0.55.0
   */
  const KeyMouseHook: KeyMouseHookHostType;
  type KeyMouseHook = BetterGenshinImpact.Core.Script.Dependence.KeyMouseHook;
}

export {};
