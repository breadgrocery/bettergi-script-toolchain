export type RealtimeTimerName =
  | "RecognitionTest" // 自定义占位触发器（一个用于开发测试的识别、或者全局占位触发器 这个触发器启动的时候，直接独占）
  | "GameLoading" // 自动开门
  | "AutoPick" // 自动拾取
  | "QuickTeleport" // 快速传送
  | "AutoSkip" // 自动剧情
  | "AutoFish" // 自动钓鱼
  | "AutoCook" // 自动烹饪
  | "AutoEat" // 自动吃药
  | (string & {});

declare global {
  namespace BetterGenshinImpact.Core.Script.Dependence.Model {
    class RealtimeTimer {
      /** 任务名称 */
      name: RealtimeTimerName | null;

      /**
       * 触发间隔（毫秒）
       * @default 50
       */
      interval: number;

      /** 任务配置 */
      config: any | null;

      constructor(name: RealtimeTimerName);

      constructor(name: RealtimeTimerName, config: any);
    }
  }
}

export {};
