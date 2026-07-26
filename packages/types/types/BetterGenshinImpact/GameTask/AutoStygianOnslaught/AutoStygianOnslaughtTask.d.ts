import type {
  ClrHostValue,
  EnumTypeTrait,
  HostType,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../../System/Enum";
import "../../../System/IComparable";
import "../../../System/IConvertible";
import "../../../System/IFormattable";
import "../../../System/ISpanFormattable";
import "../../../System/Threading/CancellationToken";
import "../../Core/BgiVision/BvPage";
import "../Common/StateMachine/StateMachineBase";
import "../ISoloTask";
import "./AutoStygianOnslaughtParam";

/**
 * 自动幽境危战独立任务，基于注册式状态机驱动界面流转
 * @since 0.58.0
 */
declare const autoStygianOnslaughtTaskBrand: unique symbol;
export interface AutoStygianOnslaughtTask
  extends
    Omit<
      BetterGenshinImpact.GameTask.Common.StateMachine.StateMachineBase<
        BetterGenshinImpact.GameTask.AutoStygianOnslaught.StygianState,
        BetterGenshinImpact.Core.BgiVision.BvPage
      >,
      "name" | "start"
    >,
    BetterGenshinImpact.GameTask.ISoloTaskInput {
  readonly [autoStygianOnslaughtTaskBrand]: true;
  /**
   * 独立任务名称
   * @since 0.58.0
   */
  readonly name: string;
  /**
   * 启动自动幽境危战任务
   * @param ct 取消令牌
   * @returns 在任务完成后兑现的 Promise
   * @since 0.58.0
   */
  start(ct: System.Threading.CancellationToken): Promise<void>;
}

declare global {
  namespace BetterGenshinImpact.GameTask.AutoStygianOnslaught {
    type AutoStygianOnslaughtTask = import("./AutoStygianOnslaughtTask").AutoStygianOnslaughtTask;
  }
}

export interface AutoStygianOnslaughtTaskHostType extends HostType<
  AutoStygianOnslaughtTask,
  ReferenceTypeTrait
> {
  /**
   * 使用任务参数创建并解析其中的战斗策略路径
   * @param taskParam 自动幽境危战参数
   * @since 0.58.0
   */
  new (
    taskParam: BetterGenshinImpact.GameTask.AutoStygianOnslaught.AutoStygianOnslaughtParam
  ): AutoStygianOnslaughtTask;
  /**
   * 使用任务参数与显式策略路径创建任务
   * @param taskParam 自动幽境危战参数
   * @param path 战斗策略文件路径
   * @since 0.58.0
   */
  new (
    taskParam: BetterGenshinImpact.GameTask.AutoStygianOnslaught.AutoStygianOnslaughtParam,
    path: string
  ): AutoStygianOnslaughtTask;
}

/**
 * 幽境危战状态机状态，每个成员对应一个明确的界面场景
 * @since 0.58.0
 */
declare const stygianStateBrand: unique symbol;
export interface StygianState extends ClrHostValue {
  readonly [stygianStateBrand]: true;
}

declare global {
  namespace BetterGenshinImpact.GameTask.AutoStygianOnslaught {
    type StygianState = import("./AutoStygianOnslaughtTask").StygianState;
  }
}

export interface StygianStateHostType extends HostType<StygianState, EnumTypeTrait> {
  /**
   * 未知状态
   * @since 0.58.0
   */
  readonly unknown: StygianState;
  /**
   * 主世界（有派蒙图标）
   * @since 0.58.0
   */
  readonly mainWorld: StygianState;
  /**
   * 活动菜单（活动一览）
   * @since 0.58.0
   */
  readonly eventMenu: StygianState;
  /**
   * 幽境危战页面（前往挑战）
   * @since 0.58.0
   */
  readonly stygianOnslaughtPage: StygianState;
  /**
   * 传送地图（传送按钮）
   * @since 0.58.0
   */
  readonly teleportMap: StygianState;
  /**
   * 秘境入口（交互提示）
   * @since 0.58.0
   */
  readonly domainEntrance: StygianState;
  /**
   * 难度选择（单人挑战、困难、至危挑战）
   * @since 0.58.0
   */
  readonly difficultySelect: StygianState;
  /**
   * 秘境加载中
   * @since 0.58.0
   */
  readonly domainLoading: StygianState;
  /**
   * 秘境门厅（地脉异常图标且有背包图标，可走到钥匙）
   * @since 0.58.0
   */
  readonly domainLobby: StygianState;
  /**
   * Boss 选择界面（开始挑战、角色预览）
   * @since 0.58.0
   */
  readonly bossSelect: StygianState;
  /**
   * 战斗场地（地脉异常图标且无背包图标，准备战斗）
   * @since 0.58.0
   */
  readonly battleArena: StygianState;
  /**
   * 战斗加载中
   * @since 0.58.0
   */
  readonly battleLoading: StygianState;
  /**
   * 战斗中（无明显界面）
   * @since 0.58.0
   */
  readonly inBattle: StygianState;
  /**
   * 战斗结果-胜利（有返回按钮）
   * @since 0.58.0
   */
  readonly battleResultWin: StygianState;
  /**
   * 战斗结果-失败
   * @since 0.58.0
   */
  readonly battleResultLose: StygianState;
  /**
   * 地脉花领取界面
   * @since 0.58.0
   */
  readonly leylineFlowerPrompt: StygianState;
  /**
   * 树脂选择界面
   * @since 0.58.0
   */
  readonly resinSelect: StygianState;
  /**
   * 继续或退出选择
   * @since 0.58.0
   */
  readonly continueOrExit: StygianState;
  /**
   * 退出中
   * @since 0.58.0
   */
  readonly exiting: StygianState;
}

export {};
