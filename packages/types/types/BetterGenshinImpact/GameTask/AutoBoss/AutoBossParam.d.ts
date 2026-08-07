import type {
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import type { CombatStrategyName } from "../AutoFight/AutoFightConfig";
import "../Model/BaseTaskParam";
import type { BossName } from "./AutoBossConfig";
import "./AutoBossConfig";
import "./AutoBossTask";

/**
 * 自动首领讨伐任务参数，供独立任务、一条龙和脚本统一传递配置
 * @since 0.62.0
 */
declare const autoBossParamBrand: unique symbol;
export interface AutoBossParam extends Omit<
  BetterGenshinImpact.GameTask.Model.BaseTaskParam<BetterGenshinImpact.GameTask.AutoBoss.AutoBossTask>,
  | "bossName"
  | "combatStrategyPath"
  | "returnToStatueAfterEachRound"
  | "reviveRetryCount"
  | "rewardRecognitionEnabled"
  | "runCount"
  | "setAutoBossConfig"
  | "setCombatStrategyPath"
  | "setDefault"
  | "specifyRunCount"
  | "strategyName"
  | "teamName"
  | "timeout"
  | "useFragileResin"
  | "useTransientResin"
> {
  readonly [autoBossParamBrand]: true;
  /**
   * 需要讨伐的 Boss 名称；空字符串表示未指定，启动前须为受支持名单内名称
   * @since 0.62.0
   */
  bossName: BossName;
  /**
   * 界面中选择的战斗策略名称；无自定义策略路径时会同步更新实际策略路径
   * @since 0.62.0
   */
  strategyName: CombatStrategyName;
  /**
   * 实际用于解析自动战斗脚本的路径，脚本可直接设置该路径以覆盖界面选择
   * @since 0.62.0
   */
  combatStrategyPath: string;
  /**
   * 讨伐前需要切换到的队伍名称，为空时保持当前队伍
   * @since 0.62.0
   */
  teamName: string;
  /**
   * 是否启用指定讨伐次数模式；关闭时刷取至原粹树脂耗尽
   * @since 0.62.0
   */
  specifyRunCount: boolean;
  /**
   * 指定模式下成功领取奖励的目标次数
   * @since 0.62.0
   */
  runCount: number;
  /**
   * 指定讨伐次数模式下原粹树脂不足时是否允许使用须臾树脂补充
   * @since 0.62.0
   */
  useTransientResin: boolean;
  /**
   * 指定讨伐次数模式下原粹树脂不足时是否允许使用脆弱树脂补充
   * @since 0.62.0
   */
  useFragileResin: boolean;
  /**
   * 检测到角色死亡后回神像恢复并重试当前首领讨伐的最大次数
   * @since 0.62.0
   */
  reviveRetryCount: number;
  /**
   * 每轮领奖后是否先返回七天神像，再重新前往 Boss
   * @since 0.62.0
   */
  returnToStatueAfterEachRound: boolean;
  /**
   * 是否启用奖励名称识别，默认关闭
   * @since 0.62.0
   */
  rewardRecognitionEnabled: boolean;
  /**
   * 战斗超时时长，单位秒，默认 240
   * @since 0.63.0
   */
  timeout: number;
  /**
   * 从当前全局自动首领讨伐配置填充默认参数
   * @returns ClearScript 宿主空结果
   * @since 0.62.0
   */
  setDefault(): VoidResult;
  /**
   * 从指定自动首领讨伐配置复制可配置项，不覆盖已通过构造参数或属性设置的自定义战斗策略路径
   * @param config 自动首领讨伐配置
   * @returns ClearScript 宿主空结果
   * @since 0.62.0
   */
  setAutoBossConfig(config: BetterGenshinImpact.GameTask.AutoBoss.AutoBossConfig): VoidResult;
  /**
   * 根据战斗策略名称重新计算实际策略路径，并清除自定义路径标记
   * @param strategyName 战斗策略名称，为空时使用当前全局自动首领讨伐配置的策略名称
   * @returns ClearScript 宿主空结果
   * @since 0.62.0
   */
  setCombatStrategyPath(): VoidResult;
  setCombatStrategyPath(strategyName: CombatStrategyName | null): VoidResult;
}

declare global {
  namespace BetterGenshinImpact.GameTask.AutoBoss {
    type AutoBossParam = import("./AutoBossParam").AutoBossParam;
  }
}

export interface AutoBossParamHostType extends HostType<
  AutoBossParam,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  /**
   * 使用当前全局自动首领讨伐配置创建参数
   * @since 0.62.0
   */
  new (): AutoBossParam;
  /**
   * 使用当前全局自动首领讨伐配置创建参数，并用传入路径覆盖实际战斗策略路径
   * @param combatStrategyPath 自动战斗策略文件或策略目录路径
   * @since 0.62.0
   */
  new (combatStrategyPath: string): AutoBossParam;
}

export {};
