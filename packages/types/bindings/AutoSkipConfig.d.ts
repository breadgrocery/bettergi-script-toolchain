import type { AutoSkipConfigHostType } from "../types/BetterGenshinImpact/GameTask/AutoSkip/AutoSkipConfig";

declare global {
  /**
   * 自动剧情跳过配置 HostType
   * @since 0.55.0
   */
  const AutoSkipConfig: AutoSkipConfigHostType;
  type AutoSkipConfig = BetterGenshinImpact.GameTask.AutoSkip.AutoSkipConfig;
}

export {};
