export type RealtimeTimerName =
  | "AutoPick" // 自动拾取
  | "AutoSkip" // 自动剧情
  | "AutoFish" // 半自动战斗
  | "QuickTeleport" // 快速传送
  | "AutoCook" // 自动烹饪
  | (string & {});

declare global {
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

export {};
