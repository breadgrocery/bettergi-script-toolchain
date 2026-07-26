import type { PostMessageHostType } from "../types/BetterGenshinImpact/Core/Script/Dependence/Simulator/PostMessage";

declare global {
  /**
   * 游戏窗口 PostMessage 输入模拟 HostType
   * @since 0.43.1
   */
  const PostMessage: PostMessageHostType;
  type PostMessage = BetterGenshinImpact.Core.Script.Dependence.Simulator.PostMessage;
}

export {};
