import type {
  ClrHostValue,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../Microsoft/ClearScript/HostType";
import "../../../System/Threading/CancellationToken";
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
   * 全局战斗进行中标志
   * @since 0.52.0
   */
  fightStatusFlag: boolean;
  /**
   * 当前战斗关联的路径追踪点位，无关联时为 null
   * @since 0.52.0
   */
  fightWaypoint: BetterGenshinImpact.GameTask.AutoPathing.Model.WaypointForTrack;
}

export {};
