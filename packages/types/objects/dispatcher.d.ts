import "../types/BetterGenshinImpact/Core/Script/Dependence/Model/RealtimeTimer";
import "../types/BetterGenshinImpact/Core/Script/Dependence/Model/SoloTask";
import "../types/BetterGenshinImpact/GameTask/AutoDomain/AutoDomainParam";
import "../types/BetterGenshinImpact/GameTask/AutoFight/AutoFightParam";
import "../types/System/Threading/CancellationToken";
import "../types/System/Threading/CancellationTokenSource";

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
    function addTimer(timer: BetterGenshinImpact.Core.Script.Dependence.Model.RealtimeTimer): void;

    /**
     * 添加实时任务（不会清理之前的任务）
     * @param timer 实时任务触发器
     * @since 0.43.5
     */
    function addTrigger(
      timer: BetterGenshinImpact.Core.Script.Dependence.Model.RealtimeTimer
    ): void;

    /**
     * 运行独立任务
     * @param soloTask 独立任务
     * @since 0.34.5
     */
    function runTask(
      soloTask: BetterGenshinImpact.Core.Script.Dependence.Model.SoloTask,
      customCts: System.Threading.CancellationTokenSource
    ): Promise<void>;

    /**
     * 运行独立任务
     * @param soloTask 独立任务
     * @since 0.45.1
     */
    function runTask(
      soloTask: BetterGenshinImpact.Core.Script.Dependence.Model.SoloTask
    ): Promise<void>;
    // overload
    function runTask(
      soloTask: BetterGenshinImpact.Core.Script.Dependence.Model.SoloTask,
      customCt: System.Threading.CancellationToken | null
    ): Promise<void>;

    /**
     * 获取关联的取消令牌源
     * @since 0.46.0
     */
    function getLinkedCancellationTokenSource(): System.Threading.CancellationTokenSource;

    /**
     * 获取关联的取消令牌
     * @since 0.46.0
     */
    function getLinkedCancellationToken(): System.Threading.CancellationToken;

    /**
     * 运行自动秘境任务
     * @param param 秘境任务参数
     * @since 0.52.0
     */
    function runAutoDomainTask(
      param: BetterGenshinImpact.GameTask.AutoDomain.AutoDomainParam
    ): Promise<void>;
    // overload
    function runAutoDomainTask(
      param: BetterGenshinImpact.GameTask.AutoDomain.AutoDomainParam,
      customCt: System.Threading.CancellationToken | null
    ): Promise<void>;

    /**
     * 运行自动战斗任务
     * @param param 战斗任务参数
     * @since 0.52.0
     */
    function runAutoFightTask(
      param: BetterGenshinImpact.GameTask.AutoFight.AutoFightParam
    ): Promise<void>;
    // overload
    function runAutoFightTask(
      param: BetterGenshinImpact.GameTask.AutoFight.AutoFightParam,
      customCt: System.Threading.CancellationToken | null
    ): Promise<void>;
  }
}

export {};
