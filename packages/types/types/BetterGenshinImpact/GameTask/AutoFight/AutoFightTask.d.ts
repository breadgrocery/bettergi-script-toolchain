import type {
  ClrHostValue,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../../../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../../System/Collections/Generic/Dictionary";
import "../../../System/Collections/Generic/List";
import "../../../System/DateTime";
import "../../../System/Threading/CancellationToken";
import "../../../System/ValueTuple";
import "../AutoPathing/Model/WaypointForTrack";
import "../ISoloTask";
import "./AutoFightParam";
import "./Model/CombatScenes";

/**
 * 自动战斗独立任务
 * @since 0.52.0
 */
declare const autoFightTaskBrand: unique symbol;
export interface AutoFightTask extends ClrHostValue, BetterGenshinImpact.GameTask.ISoloTaskInput {
  readonly [autoFightTaskBrand]: true;
  /**
   * 独立任务名称
   * @since 0.52.0
   */
  readonly name: string;
  /**
   * 识别当前队伍战斗场景，失败时最多重试 5 次
   * @returns 已初始化的战斗场景
   * @since 0.52.0
   */
  getCombatScenesWithRetry(): BetterGenshinImpact.GameTask.AutoFight.Model.CombatScenes;
  /**
   * 启动自动战斗任务
   * @param ct 取消令牌
   * @returns 在任务完成后兑现的 Promise
   * @since 0.52.0
   */
  start(ct: System.Threading.CancellationToken): Promise<void>;
  /**
   * 检查战斗是否已结束
   * @param delayTime 检查前延时，单位毫秒，默认 1500
   * @param detectDelayTime 切换队伍后检测色块的延时，单位毫秒，默认 450
   * @returns 在检测完成后兑现是否结束的 Promise
   * @since 0.52.0
   */
  checkFightFinish(): Promise<boolean>;
  checkFightFinish(delayTime: number | StrongNumeric<Int32Host>): Promise<boolean>;
  checkFightFinish(
    delayTime: number | StrongNumeric<Int32Host>,
    detectDelayTime: number | StrongNumeric<Int32Host>
  ): Promise<boolean>;
}

/**
 * 战斗结束检测的运行时配置，由自动战斗参数解析而来，供 TXT 与 JSON 策略共用
 * @since 0.64.0
 */
declare const autoFightTask_TaskFightFinishDetectConfigBrand: unique symbol;
export interface AutoFightTask_TaskFightFinishDetectConfig extends ClrHostValue {
  readonly [autoFightTask_TaskFightFinishDetectConfigBrand]: true;
  /**
   * 检查战斗结束前的默认延时，单位毫秒，默认 1500
   * @since 0.64.0
   */
  delayTime: number;
  /**
   * 按下切换队伍后检测色块的延时，单位毫秒，默认 450
   * @since 0.64.0
   */
  detectDelayTime: number;
  /**
   * 按角色名覆盖的检查延时，单位毫秒
   * @since 0.64.0
   */
  delayTimes: System.Collections.Generic.Dictionary<string, number>;
  /**
   * 快速检查间隔，单位秒，默认 5
   * @since 0.64.0
   */
  checkTime: number;
  /**
   * 触发快速检查的角色名列表
   * @since 0.64.0
   */
  checkNames: System.Collections.Generic.List<string>;
  /**
   * 是否启用快速检查战斗结束
   * @since 0.64.0
   */
  fastCheckEnabled: boolean;
  /**
   * 是否在切人后再执行战斗结束检查；无需等待上一动作后摇，目前仅 JSON 策略下生效
   * @since 0.64.0
   */
  checkAfterSwitchAvatar: boolean;
  /**
   * 是否启用旋转寻找敌人
   * @since 0.64.0
   */
  rotateFindEnemyEnabled: boolean;
  /**
   * 是否在敌人可见时跳过战斗结束检查；检测到敌人血条时跳过，与旋转寻找敌人互斥
   * @since 0.64.0
   */
  skipFightEndCheckWhenEnemyVisible: boolean;
  /**
   * 开战后阻断战斗结束检查的时长，单位秒；默认 0 不阻断，大于 0 时该时间内的检查视为战斗未结束
   * @since 0.64.0
   */
  blockCheckBeforeBattleSeconds: number;
  /**
   * 是否启用派蒙辅助检测；按 L 后当派蒙头像可见时提前跳出战斗结束检测
   * @since 0.64.0
   */
  paimonEndCheckEnabled: boolean;
  /**
   * 派蒙辅助检测延时，单位毫秒
   * @since 0.64.0
   */
  paimonEndCheckDelayMs: number;
  /**
   * 判断战斗结束的进度条颜色，RGB 三元组
   * @since 0.64.0
   */
  readonly battleEndProgressBarColor: System.ValueTuple<number, number, number>;
  /**
   * 战斗结束进度条颜色容差，RGB 三元组
   * @since 0.64.0
   */
  readonly battleEndProgressBarColorTolerance: System.ValueTuple<number, number, number>;
}

export interface AutoFightTask_TaskFightFinishDetectConfigHostType extends HostType<
  AutoFightTask_TaskFightFinishDetectConfig,
  ReferenceTypeTrait
> {
  /**
   * 由自动战斗参数中的战斗结束检测配置构造运行时配置
   * @param finishDetectConfig 自动战斗参数中的战斗结束检测配置
   * @since 0.64.0
   */
  new (
    finishDetectConfig: BetterGenshinImpact.GameTask.AutoFight.AutoFightParam.FightFinishDetectConfig
  ): AutoFightTask_TaskFightFinishDetectConfig;
  /**
   * 解析快速检查参数字符串
   * @param input 快速检查参数；数字为间隔秒数，人名为对应角色动作后触发，分号分隔
   * @param checkTime 解析得到的检查间隔秒数
   * @param names 解析得到的角色名列表，方法会追加去重后的人名
   * @returns ClearScript 宿主空结果
   * @since 0.64.0
   */
  parseCheckTimeString(
    input: string,
    checkTime: HostVariableOut<number>,
    names: System.Collections.Generic.List<string>
  ): VoidResult;
  /**
   * 解析检查结束延时字符串
   * @param input 延时配置；纯数字为默认秒数，`名字,秒数` 为角色覆盖，分号分隔
   * @param delayTime 解析得到的默认延时，单位毫秒
   * @param nameDelayMap 角色名到延时毫秒的映射，方法会写入覆盖值
   * @returns ClearScript 宿主空结果
   * @since 0.64.0
   */
  parseFastCheckEndDelayString(
    input: string,
    delayTime: HostVariableOut<number>,
    nameDelayMap: System.Collections.Generic.Dictionary<string, number>
  ): VoidResult;
}

declare global {
  namespace BetterGenshinImpact.GameTask.AutoFight.AutoFightTask {
    type TaskFightFinishDetectConfig =
      import("./AutoFightTask").AutoFightTask_TaskFightFinishDetectConfig;
  }
}

declare global {
  namespace BetterGenshinImpact.GameTask.AutoFight {
    type AutoFightTask = import("./AutoFightTask").AutoFightTask;
  }
}

export interface AutoFightTaskHostType extends HostType<AutoFightTask, ReferenceTypeTrait> {
  /**
   * 使用自动战斗参数创建任务
   * @param taskParam 自动战斗参数
   * @since 0.52.0
   */
  new (taskParam: BetterGenshinImpact.GameTask.AutoFight.AutoFightParam): AutoFightTask;
  /**
   * 重置「敌人可见时跳过战斗结束检查」的连续跳过计数；每场战斗开始时调用，TXT 与 JSON 策略共用
   * @returns ClearScript 宿主空结果
   * @since 0.64.0
   */
  resetSkipCheckCounter(): VoidResult;
  /**
   * 全局战斗进行中标志
   * @since 0.52.0
   */
  fightStatusFlag: boolean;
  /**
   * 当前战斗关联的路径追踪点位，无关联时为 null
   * @since 0.52.0
   */
  fightWaypoint: BetterGenshinImpact.GameTask.AutoPathing.Model.WaypointForTrack;
  /**
   * 最近一次战斗结束检查的时间；TXT 与 JSON 策略共用，供更快触发检查判断间隔
   * @since 0.64.0
   */
  lastFightFinishCheckTime: System.DateTime;
  /**
   * 本次战斗的开战时间；TXT 与 JSON 策略共用，供开战后一段时间阻断战斗结束检查
   * @since 0.64.0
   */
  fightStartTime: System.DateTime;
  /**
   * 检查战斗是否已结束；TXT 与 JSON 策略共用的统一实现
   * @param finishDetectConfig 战斗结束检测运行时配置
   * @param ct 取消令牌
   * @param delayTime 检查前延时，单位毫秒，默认 1500
   * @param detectDelayTime 切换队伍后检测色块的延时，单位毫秒，默认 450
   * @returns 在检测完成后兑现是否结束的 Promise
   * @since 0.64.0
   */
  checkFightFinish(
    finishDetectConfig: BetterGenshinImpact.GameTask.AutoFight.AutoFightTask.TaskFightFinishDetectConfig,
    ct: System.Threading.CancellationToken
  ): Promise<boolean>;
  checkFightFinish(
    finishDetectConfig: BetterGenshinImpact.GameTask.AutoFight.AutoFightTask.TaskFightFinishDetectConfig,
    ct: System.Threading.CancellationToken,
    delayTime: number | StrongNumeric<Int32Host>
  ): Promise<boolean>;
  checkFightFinish(
    finishDetectConfig: BetterGenshinImpact.GameTask.AutoFight.AutoFightTask.TaskFightFinishDetectConfig,
    ct: System.Threading.CancellationToken,
    delayTime: number | StrongNumeric<Int32Host>,
    detectDelayTime: number | StrongNumeric<Int32Host>
  ): Promise<boolean>;
  readonly TaskFightFinishDetectConfig: AutoFightTask_TaskFightFinishDetectConfigHostType;
}

export {};
