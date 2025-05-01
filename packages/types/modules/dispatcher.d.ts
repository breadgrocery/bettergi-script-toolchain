import "../csharp/BetterGenshinImpact/Core/Script/Dependence/Model/RealtimeTimer";
import "../csharp/BetterGenshinImpact/Core/Script/Dependence/Model/SoloTask";

declare global {
  /** @since 0.32.5 */
  namespace dispatcher {
    /**
     * 清理所有实时任务
     * @since 0.43.5
     */
    function clearAllTriggers(): void;

    /**
     * 添加实时任务（会清理之前的所有任务）
     * @param timer 实时任务触发器
     * @since 0.32.5
     */
    function addTimer(timer: RealtimeTimer): void;

    /**
     * 添加实时任务（不会清理之前的任务）
     * @param timer 实时任务触发器
     * @since 0.43.5
     */
    function addTrigger(timer: RealtimeTimer): void;

    /**
     * 运行独立任务
     * @param soloTask 独立任务
     * @since 0.34.5
     */
    function runTask(soloTask: SoloTask): Promise<void>;
  }
}

export {};
