import type {
  HostArray,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../../System/Collections/Generic/List";
import "../Model/BaseTaskParam";
import "./AutoStygianOnslaughtConfig";
import "./AutoStygianOnslaughtTask";

/**
 * 自动幽境危战参数
 * @since 0.58.0
 */
declare const autoStygianOnslaughtParamBrand: unique symbol;
export interface AutoStygianOnslaughtParam extends Omit<
  BetterGenshinImpact.GameTask.Model.BaseTaskParam<BetterGenshinImpact.GameTask.AutoStygianOnslaught.AutoStygianOnslaughtTask>,
  | "autoArtifactSalvage"
  | "bossNum"
  | "combatScriptBagPath"
  | "condensedResinUseCount"
  | "fightTeamName"
  | "fragileResinUseCount"
  | "originalResinUseCount"
  | "resinPriorityList"
  | "setAutoStygianOnslaughtConfig"
  | "setCombatStrategyPath"
  | "setDefault"
  | "setResinPriorityList"
  | "specifyResinUse"
  | "transientResinUseCount"
> {
  readonly [autoStygianOnslaughtParamBrand]: true;
  /**
   * 挑战 Boss 序号，取值 1–3
   * @since 0.58.0
   */
  bossNum: number;
  /**
   * 是否在结束后自动分解圣遗物
   * @since 0.58.0
   */
  autoArtifactSalvage: boolean;
  /**
   * 是否启用指定树脂使用次数模式
   * @since 0.58.0
   */
  specifyResinUse: boolean;
  /**
   * 使用树脂的优先级列表，默认浓缩树脂优先于原粹树脂
   * @since 0.58.0
   */
  resinPriorityList: System.Collections.Generic.List<string>;
  /**
   * 使用原粹树脂刷取的次数
   * @since 0.58.0
   */
  originalResinUseCount: number;
  /**
   * 使用浓缩树脂刷取的次数
   * @since 0.58.0
   */
  condensedResinUseCount: number;
  /**
   * 使用须臾树脂刷取的次数
   * @since 0.58.0
   */
  transientResinUseCount: number;
  /**
   * 使用脆弱树脂刷取的次数
   * @since 0.58.0
   */
  fragileResinUseCount: number;
  /**
   * 指定战斗队伍名称
   * @since 0.58.0
   */
  fightTeamName: string;
  /**
   * 战斗策略脚本包路径
   * @since 0.58.0
   */
  combatScriptBagPath: string;
  /**
   * 从当前全局自动幽境危战配置填充默认参数
   * @returns ClearScript 宿主空结果
   * @since 0.58.0
   */
  setDefault(): VoidResult;
  /**
   * 从指定自动幽境危战配置复制可配置项
   * @param config 自动幽境危战配置
   * @returns ClearScript 宿主空结果
   * @since 0.58.0
   */
  setAutoStygianOnslaughtConfig(
    config: BetterGenshinImpact.GameTask.AutoStygianOnslaught.AutoStygianOnslaughtConfig
  ): VoidResult;
  /**
   * 设置使用树脂的优先级列表
   * @param priorities 树脂名称数组，顺序即优先级
   * @returns ClearScript 宿主空结果
   * @since 0.58.0
   */
  setResinPriorityList(priorities: HostArray<string>): VoidResult;
  setResinPriorityList(...priorities: string[]): VoidResult;
  /**
   * 设置战斗策略路径
   * @param strategyName 策略名称，省略或为空时使用全局自动战斗配置中的策略名称
   * @returns ClearScript 宿主空结果
   * @since 0.58.0
   */
  setCombatStrategyPath(): VoidResult;
  setCombatStrategyPath(strategyName: string | null): VoidResult;
}

declare global {
  namespace BetterGenshinImpact.GameTask.AutoStygianOnslaught {
    type AutoStygianOnslaughtParam =
      import("./AutoStygianOnslaughtParam").AutoStygianOnslaughtParam;
  }
}

export interface AutoStygianOnslaughtParamHostType extends HostType<
  AutoStygianOnslaughtParam,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  /**
   * 使用当前全局配置创建参数
   * @since 0.58.0
   */
  new (): AutoStygianOnslaughtParam;
  /**
   * 使用当前全局配置创建参数，并覆盖战斗策略脚本包路径
   * @param combatScriptBagPath 战斗策略脚本包路径
   * @since 0.58.0
   */
  new (combatScriptBagPath: string): AutoStygianOnslaughtParam;
}

export {};
