import type {
  ClrHostValue,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../../System/ValueTuple";
import "../Model/BaseTaskParam";
import "./AutoFightConfig";
import type { OnlyPickEliteDropsMode } from "./AutoFightConfig";
import "./AutoFightTask";

/**
 * 自动战斗参数
 * @since 0.52.0
 */
declare const autoFightParamBrand: unique symbol;
export interface AutoFightParam extends Omit<
  BetterGenshinImpact.GameTask.Model.BaseTaskParam<BetterGenshinImpact.GameTask.AutoFight.AutoFightTask>,
  | "actionSchedulerByCd"
  | "battleThresholdForLoot"
  | "burstEnabled"
  | "checkBeforeBurst"
  | "combatStrategyPath"
  | "expBasedPickupEnabled"
  | "fightFinishDetectEnabled"
  | "finishDetectConfig"
  | "guardianAvatar"
  | "guardianAvatarHold"
  | "guardianCombatSkip"
  | "isFirstCheck"
  | "kazuhaPartyName"
  | "kazuhaPickupEnabled"
  | "onlyPickEliteDropsMode"
  | "pickDropsAfterFightEnabled"
  | "pickDropsAfterFightSeconds"
  | "qinDoublePickUp"
  | "rotaryFactor"
  | "setCombatStrategyPath"
  | "setDefault"
  | "timeout"
> {
  readonly [autoFightParamBrand]: true;
  /**
   * 战斗结束检测配置
   * @since 0.52.0
   */
  finishDetectConfig: AutoFightParam_FightFinishDetectConfig;
  /**
   * 战斗策略文件或策略目录的完整路径
   * @since 0.52.0
   */
  combatStrategyPath: string;
  /**
   * 是否启用战斗结束检测
   * @since 0.52.0
   */
  fightFinishDetectEnabled: boolean;
  /**
   * 是否在战斗结束后拾取掉落物
   * @since 0.52.0
   */
  pickDropsAfterFightEnabled: boolean;
  /**
   * 战斗结束后拾取掉落物的等待时长，单位秒，默认 15
   * @since 0.52.0
   */
  pickDropsAfterFightSeconds: number;
  /**
   * 触发战后拾取所需的最低战斗人次，小于该值时跳过拾取，默认 -1 表示不限制
   * @since 0.52.0
   */
  battleThresholdForLoot: number;
  /**
   * 战斗超时时长，单位秒，默认 120
   * @since 0.52.0
   */
  timeout: number;
  /**
   * 是否在战斗结束后使用枫原万叶聚集并拾取掉落物
   * @since 0.52.0
   */
  kazuhaPickupEnabled: boolean;
  /**
   * 按技能冷却优化出招的角色配置，英文逗号分隔人名或人名与秒数，多种用分号分隔
   * @since 0.52.0
   */
  actionSchedulerByCd: string;
  /**
   * 战后万叶拾取时切换的备用队伍名称，当前队伍无枫原万叶时使用
   * @since 0.52.0
   */
  kazuhaPartyName: string;
  /**
   * 只拾取精英掉落模式：`Closed` 关闭、`AllowAutoPickupForNonElite` 非精英允许脚下自动拾取、`DisableAutoPickupForNonElite` 非精英关闭拾取
   * @since 0.52.0
   */
  onlyPickEliteDropsMode: OnlyPickEliteDropsMode;
  /**
   * 盾奶位角色队伍序号，从 1 开始，空字符串表示不指定
   * @since 0.52.0
   */
  guardianAvatar: string;
  /**
   * 是否跳过盾奶位自身的战斗策略脚本
   * @since 0.52.0
   */
  guardianCombatSkip: boolean;
  /**
   * 盾奶位是否长按元素战技
   * @since 0.52.0
   */
  guardianAvatarHold: boolean;
  /**
   * 是否在释放元素爆发前检查战斗结束
   * @since 0.52.0
   */
  checkBeforeBurst: boolean;
  /**
   * 是否在首次检查时进行面敌
   * @since 0.52.0
   */
  isFirstCheck: boolean;
  /**
   * 旋转寻敌的旋转因子，范围 1–13，越大越快
   * @since 0.52.0
   */
  rotaryFactor: number;
  /**
   * 是否优先释放元素爆发
   * @since 0.52.0
   */
  burstEnabled: boolean;
  /**
   * 是否在战后使用琴二次长按元素战技拾取
   * @since 0.52.0
   */
  qinDoublePickUp: boolean;
  /**
   * 是否仅在检测到精英怪经验值图标时执行战后拾取
   * @since 0.61.0
   */
  expBasedPickupEnabled: boolean;
  /**
   * 设置战斗策略路径
   * @param strategyName 策略名称，省略或为空时使用全局自动战斗配置中的策略名称
   * @returns ClearScript 宿主空结果
   * @since 0.52.0
   */
  setCombatStrategyPath(): VoidResult;
  setCombatStrategyPath(strategyName: string | null): VoidResult;
  /**
   * 从当前全局自动战斗配置填充默认参数
   * @returns ClearScript 宿主空结果
   * @since 0.52.0
   */
  setDefault(): VoidResult;
}

/**
 * 战斗结束检测配置
 * @since 0.52.0
 */
declare const autoFightParam_FightFinishDetectConfigBrand: unique symbol;
export interface AutoFightParam_FightFinishDetectConfig extends ClrHostValue {
  readonly [autoFightParam_FightFinishDetectConfigBrand]: true;
  /**
   * 判断战斗结束的进度条颜色，`RGB` 格式，默认 `95,235,255`
   * @since 0.52.0
   */
  battleEndProgressBarColor: string;
  /**
   * 战斗结束进度条颜色容差，`6` 表示三通道相同容差，`6,6,6` 可分别设置
   * @since 0.52.0
   */
  battleEndProgressBarColorTolerance: string;
  /**
   * 是否启用快速检查战斗结束
   * @since 0.52.0
   */
  fastCheckEnabled: boolean;
  /**
   * 快速检查参数，数字为间隔秒数，人名为该角色执行一轮后检查，分号分隔
   * @since 0.52.0
   */
  fastCheckParams: string;
  /**
   * 检查战斗结束前的延时，单位秒，可指定角色
   * @since 0.52.0
   */
  checkEndDelay: string;
  /**
   * 按下切换队伍后检测屏幕色块的延迟，单位秒
   * @since 0.52.0
   */
  beforeDetectDelay: string;
  /**
   * 是否启用旋转寻找敌人
   * @since 0.52.0
   */
  rotateFindEnemyEnabled: boolean;
}

export interface AutoFightParam_FightFinishDetectConfigHostType extends HostType<
  AutoFightParam_FightFinishDetectConfig,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  /**
   * 构造实例
   * @since 0.52.0
   */
  new (): AutoFightParam_FightFinishDetectConfig;
}

declare global {
  namespace BetterGenshinImpact.GameTask.AutoFight.AutoFightParam {
    type FightFinishDetectConfig =
      import("./AutoFightParam").AutoFightParam_FightFinishDetectConfig;
  }
}

declare global {
  namespace BetterGenshinImpact.GameTask.AutoFight {
    type AutoFightParam = import("./AutoFightParam").AutoFightParam;
  }
}

export interface AutoFightParamHostType extends HostType<AutoFightParam, ReferenceTypeTrait> {
  /**
   * 使用指定策略路径与自动战斗配置构造参数
   * @param path 战斗策略文件或策略目录路径
   * @param autoFightConfig 自动战斗配置
   * @since 0.52.0
   */
  new (
    path: string,
    autoFightConfig: BetterGenshinImpact.GameTask.AutoFight.AutoFightConfig
  ): AutoFightParam;
  /**
   * 使用策略名称构造参数并填充全局默认配置
   * @param strategyName 策略名称，省略或为空时使用全局自动战斗配置中的策略名称
   * @since 0.52.0
   */
  new (): AutoFightParam;
  new (strategyName: string | null): AutoFightParam;
  /**
   * 是否启用游泳脱困检测
   * @since 0.52.0
   */
  swimmingEnabled: boolean;
  /**
   * 解析策略文件路径，优先检测 `.json`，未命中则回退 `.txt`
   * @param strategyName 策略名称（不含扩展名）
   * @returns 完整路径与类型标识组成的元组，类型为 `json` 或 `txt`
   * @since 0.52.0
   */
  resolveStrategyPath(strategyName: string): System.ValueTuple<string, string>;
  readonly FightFinishDetectConfig: AutoFightParam_FightFinishDetectConfigHostType;
}

export {};
