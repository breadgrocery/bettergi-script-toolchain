import type {
  ClrHostValue,
  HostType,
  ReferenceTypeTrait
} from "../../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../../Microsoft/ClearScript/VoidResult";
import "../../../../System/Collections/Generic/Dictionary";
import "../../../../System/Nullable";
import "../../../../System/Threading/CancellationToken";
import "../../../../System/Threading/CancellationTokenSource";
import "../../../GameTask/AutoBoss/AutoBossParam";
import "../../../GameTask/AutoDomain/AutoDomainParam";
import "../../../GameTask/AutoFight/AutoFightParam";
import type { AvatarName } from "../../../GameTask/AutoFight/Model/Avatar";
import "../../../GameTask/AutoLeyLineOutcrop/AutoLeyLineOutcropParam";
import "../../../GameTask/AutoStygianOnslaught/AutoStygianOnslaughtParam";
import "../../../GameTask/Common/Job/CountInventoryItemParam";
import "./Model/RealtimeTimer";
import "./Model/SoloTask";

/**
 * 独立任务与实时触发调度
 * @since 0.43.1
 */
declare const dispatcherBrand: unique symbol;
export interface Dispatcher extends ClrHostValue {
  readonly [dispatcherBrand]: true;
  /**
   * 添加实时任务并清理既有任务
   * @param timer 实时任务触发器
   * @returns ClearScript 宿主空结果
   * @since 0.43.1
   */
  addTimer(timer: BetterGenshinImpact.Core.Script.Dependence.Model.RealtimeTimer): VoidResult;
  /**
   * 移除全部实时任务
   * @returns ClearScript 宿主空结果
   * @since 0.44.3
   */
  clearAllTriggers(): VoidResult;
  /**
   * 添加实时任务且保留既有任务
   * @param timer 实时任务触发器
   * @returns ClearScript 宿主空结果
   * @since 0.44.3
   */
  addTrigger(timer: BetterGenshinImpact.Core.Script.Dependence.Model.RealtimeTimer): VoidResult;
  /**
   * 运行独立任务
   * @param soloTask 独立任务描述
   * @param customCt 可选取消令牌
   * @returns 在任务完成后兑现结果的 Promise
   * @since 0.46.0
   */
  runTask(soloTask: BetterGenshinImpact.Core.Script.Dependence.Model.SoloTask): Promise<unknown>;
  /**
   * 运行独立任务
   * @param soloTask 独立任务描述
   * @param customCts 可选取消源
   * @returns 在任务完成后兑现的 Promise
   * @since 0.46.0
   */
  runTask(
    soloTask: BetterGenshinImpact.Core.Script.Dependence.Model.SoloTask,
    customCts: System.Threading.CancellationTokenSource
  ): Promise<void>;
  /**
   * 空运行入口，无实际效果
   * @returns ClearScript 宿主空结果
   * @since 0.46.0
   */
  runTask(): VoidResult;
  runTask(
    soloTask: BetterGenshinImpact.Core.Script.Dependence.Model.SoloTask,
    customCt: System.Threading.CancellationToken | null | null
  ): Promise<unknown>;
  /**
   * 获取与调度器关联的取消源
   * @returns 链接到全局取消令牌的取消源
   * @since 0.46.0
   */
  getLinkedCancellationTokenSource(): System.Threading.CancellationTokenSource;
  /**
   * 获取与调度器关联的取消令牌
   * @returns 链接到全局取消令牌的取消令牌
   * @since 0.46.0
   */
  getLinkedCancellationToken(): System.Threading.CancellationToken;
  /**
   * 运行自动秘境任务
   * @param param 秘境任务参数
   * @param customCt 自定义取消令牌
   * @returns 在任务完成后兑现掉落统计字典的 Promise
   * @since 0.52.0
   */
  runAutoDomainTask(
    param: BetterGenshinImpact.GameTask.AutoDomain.AutoDomainParam
  ): Promise<System.Collections.Generic.Dictionary<string, number>>;
  runAutoDomainTask(
    param: BetterGenshinImpact.GameTask.AutoDomain.AutoDomainParam,
    customCt: System.Threading.CancellationToken | null | null
  ): Promise<System.Collections.Generic.Dictionary<string, number>>;
  /**
   * 运行自动首领讨伐任务
   * @param param 自动首领讨伐任务参数
   * @param customCt 自定义取消令牌
   * @returns 在任务完成后兑现掉落统计字典的 Promise
   * @since 0.62.0
   */
  runAutoBossTask(
    param: BetterGenshinImpact.GameTask.AutoBoss.AutoBossParam
  ): Promise<System.Collections.Generic.Dictionary<string, number>>;
  runAutoBossTask(
    param: BetterGenshinImpact.GameTask.AutoBoss.AutoBossParam,
    customCt: System.Threading.CancellationToken | null | null
  ): Promise<System.Collections.Generic.Dictionary<string, number>>;
  /**
   * 运行自动战斗任务
   * @param param 战斗任务参数
   * @param customCt 自定义取消令牌
   * @returns 在任务完成后兑现的 Promise
   * @since 0.52.0
   */
  runAutoFightTask(param: BetterGenshinImpact.GameTask.AutoFight.AutoFightParam): Promise<void>;
  runAutoFightTask(
    param: BetterGenshinImpact.GameTask.AutoFight.AutoFightParam,
    customCt: System.Threading.CancellationToken | null | null
  ): Promise<void>;
  /**
   * 运行简易战斗策略脚本
   * 使用策略语言直接控制角色执行动作（如 e、q、attack 等），适合快速操作
   * @param script 策略字符串，支持逗号/换行/分号分隔指令，可选角色名前缀
   * @param avatarName 指定操作的角色名，省略时操作当前角色
   * @param customCt 自定义取消令牌
   * @returns 在任务完成后兑现的 Promise
   * @since 0.63.0
   */
  runCombatScript(script: string): Promise<void>;
  runCombatScript(script: string, avatarName: AvatarName | null): Promise<void>;
  runCombatScript(
    script: string,
    avatarName: AvatarName | null,
    customCt: System.Threading.CancellationToken | null | null
  ): Promise<void>;
  /**
   * 运行自动地脉花任务
   * @param param 自动地脉花任务参数
   * @param customCt 自定义取消令牌
   * @returns 在任务完成后兑现的 Promise
   * @since 0.58.0
   */
  runAutoLeyLineOutcropTask(
    param: BetterGenshinImpact.GameTask.AutoLeyLineOutcrop.AutoLeyLineOutcropParam
  ): Promise<void>;
  runAutoLeyLineOutcropTask(
    param: BetterGenshinImpact.GameTask.AutoLeyLineOutcrop.AutoLeyLineOutcropParam,
    customCt: System.Threading.CancellationToken | null | null
  ): Promise<void>;
  /**
   * 运行自动幽境危战任务
   * @param param 自动幽境危战任务参数
   * @param customCt 自定义取消令牌
   * @returns 在任务完成后兑现的 Promise
   * @since 0.58.0
   */
  runAutoStygianOnslaughtTask(
    param: BetterGenshinImpact.GameTask.AutoStygianOnslaught.AutoStygianOnslaughtParam
  ): Promise<void>;
  runAutoStygianOnslaughtTask(
    param: BetterGenshinImpact.GameTask.AutoStygianOnslaught.AutoStygianOnslaughtParam,
    customCt: System.Threading.CancellationToken | null | null
  ): Promise<void>;
  /**
   * 运行背包物品计数任务
   * @param param 背包物品计数参数
   * @param customCt 自定义取消令牌
   * @returns 在任务完成后兑现结果的 Promise；单物品返回数量，多物品返回名称到数量的脚本对象
   * @since 0.62.0
   */
  runCountInventoryItemTask(
    param: BetterGenshinImpact.GameTask.Common.Job.CountInventoryItemParam
  ): Promise<unknown>;
  runCountInventoryItemTask(
    param: BetterGenshinImpact.GameTask.Common.Job.CountInventoryItemParam,
    customCt: System.Threading.CancellationToken | null | null
  ): Promise<unknown>;
}

declare global {
  namespace BetterGenshinImpact.Core.Script.Dependence {
    type Dispatcher = import("./Dispatcher").Dispatcher;
  }
}

export interface DispatcherHostType extends HostType<Dispatcher, ReferenceTypeTrait> {
  /**
   * 构造实例
   * @param config 调度配置
   * @since 0.43.1
   */
  new (config: unknown): Dispatcher;
}

export {};
