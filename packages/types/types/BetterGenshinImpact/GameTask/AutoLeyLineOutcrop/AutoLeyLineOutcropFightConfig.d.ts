import "../../../CommunityToolkit/Mvvm/ComponentModel/ObservableObject";
import type {
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../../System/ComponentModel/INotifyPropertyChanged";
import "../../../System/ComponentModel/INotifyPropertyChanging";
import "../AutoFight/AutoFightConfig";
import type { CombatStrategyName, PartySlotIndex } from "../AutoFight/AutoFightConfig";

/**
 * 地脉花独立战斗配置
 * @since 0.58.0
 */
declare const autoLeyLineOutcropFightConfigBrand: unique symbol;
export interface AutoLeyLineOutcropFightConfig
  extends
    Omit<
      CommunityToolkit.Mvvm.ComponentModel.ObservableObject,
      | "actionSchedulerByCd"
      | "burstEnabled"
      | "copyFromAutoFightConfig"
      | "fightFinishDetectEnabled"
      | "finishDetectConfig"
      | "guardianAvatar"
      | "guardianAvatarHold"
      | "guardianCombatSkip"
      | "kazuhaPickupEnabled"
      | "qinDoublePickUp"
      | "seekEnemyEnabled"
      | "seekEnemyIntervalSeconds"
      | "seekEnemyRotaryFactor"
      | "strategyName"
      | "swimmingEnabled"
      | "teamNames"
      | "timeout"
      | "toAutoFightConfig"
    >,
    System.ComponentModel.INotifyPropertyChangedInput,
    System.ComponentModel.INotifyPropertyChangingInput {
  readonly [autoLeyLineOutcropFightConfigBrand]: true;
  /**
   * 从自动战斗配置复制兼容字段
   * @param source 源自动战斗配置
   * @returns ClearScript 宿主空结果
   * @since 0.58.0
   */
  copyFromAutoFightConfig(
    source: BetterGenshinImpact.GameTask.AutoFight.AutoFightConfig
  ): VoidResult;
  /**
   * 转换为自动战斗配置；地脉花战斗会关闭战后拾取相关选项
   * @returns 转换后的自动战斗配置
   * @since 0.58.0
   */
  toAutoFightConfig(): BetterGenshinImpact.GameTask.AutoFight.AutoFightConfig;
  /**
   * 按技能冷却优化出招的角色配置
   * @since 0.58.0
   */
  actionSchedulerByCd: string;
  /**
   * 是否优先释放元素爆发
   * @since 0.58.0
   */
  burstEnabled: boolean;
  /**
   * 是否启用战斗结束检测
   * @since 0.58.0
   */
  fightFinishDetectEnabled: boolean;
  /**
   * 战斗结束检测配置
   * @since 0.58.0
   */
  finishDetectConfig: AutoLeyLineOutcropFightConfig_FightFinishDetectConfig;
  /**
   * 盾奶位是否长按元素战技
   * @since 0.58.0
   */
  guardianAvatarHold: boolean;
  /**
   * 盾奶位角色队伍序号，从 1 开始，空字符串表示不指定
   * @since 0.58.0
   */
  guardianAvatar: PartySlotIndex;
  /**
   * 是否跳过盾奶位自身的战斗策略脚本
   * @since 0.58.0
   */
  guardianCombatSkip: boolean;
  /**
   * 是否在战斗结束后使用枫原万叶聚集并拾取掉落物
   * @since 0.58.0
   */
  kazuhaPickupEnabled: boolean;
  /**
   * 是否在战后使用琴二次长按元素战技拾取
   * @since 0.58.0
   */
  qinDoublePickUp: boolean;
  /**
   * 是否启用寻敌
   * @since 0.58.0
   */
  seekEnemyEnabled: boolean;
  /**
   * 寻敌间隔，单位秒，默认 3
   * @since 0.58.0
   */
  seekEnemyIntervalSeconds: number;
  /**
   * 寻敌旋转因子，默认 6
   * @since 0.58.0
   */
  seekEnemyRotaryFactor: number;
  /**
   * 战斗策略名称，`根据队伍自动选择` 表示按当前队伍匹配策略
   * @since 0.58.0
   */
  strategyName: CombatStrategyName;
  /**
   * 是否启用游泳脱困检测
   * @since 0.58.0
   */
  swimmingEnabled: boolean;
  /**
   * 强制指定队伍角色名称，英文逗号分隔，空字符串表示不强制
   * @since 0.58.0
   */
  teamNames: string;
  /**
   * 战斗超时时长，单位秒，默认 120
   * @since 0.58.0
   */
  timeout: number;
}

/**
 * 地脉花战斗结束检测配置
 * @since 0.58.0
 */
declare const autoLeyLineOutcropFightConfig_FightFinishDetectConfigBrand: unique symbol;
export interface AutoLeyLineOutcropFightConfig_FightFinishDetectConfig
  extends
    Omit<
      CommunityToolkit.Mvvm.ComponentModel.ObservableObject,
      | "battleEndProgressBarColor"
      | "battleEndProgressBarColorTolerance"
      | "beforeDetectDelay"
      | "blockCheckBeforeBattleSeconds"
      | "checkAfterSwitchAvatar"
      | "checkBeforeBurst"
      | "checkEndDelay"
      | "fastCheckEnabled"
      | "fastCheckParams"
      | "isFirstCheck"
      | "paimonEndCheckDelay"
      | "paimonEndCheckEnabled"
      | "rotaryFactor"
      | "rotateFindEnemyEnabled"
      | "skipFightEndCheckWhenEnemyVisible"
    >,
    System.ComponentModel.INotifyPropertyChangedInput,
    System.ComponentModel.INotifyPropertyChangingInput {
  readonly [autoLeyLineOutcropFightConfig_FightFinishDetectConfigBrand]: true;
  /**
   * 战斗结束进度条颜色容差，`6` 表示三通道相同容差，`6,6,6` 可分别设置
   * @since 0.58.0
   */
  battleEndProgressBarColorTolerance: string;
  /**
   * 判断战斗结束的进度条颜色，`RGB` 格式
   * @since 0.58.0
   */
  battleEndProgressBarColor: string;
  /**
   * 按下切换队伍后检测屏幕色块的延迟，单位秒
   * @since 0.58.0
   */
  beforeDetectDelay: string;
  /**
   * 是否在释放元素爆发前检查战斗结束
   * @since 0.58.0
   */
  checkBeforeBurst: boolean;
  /**
   * 检查战斗结束前的延时，单位秒，可指定角色
   * @since 0.58.0
   */
  checkEndDelay: string;
  /**
   * 是否启用快速检查战斗结束
   * @since 0.58.0
   */
  fastCheckEnabled: boolean;
  /**
   * 快速检查参数，数字为间隔秒数，人名为该角色执行一轮后检查，分号分隔
   * @since 0.58.0
   */
  fastCheckParams: string;
  /**
   * 是否在切人后再执行战斗结束检查；无需等待上一动作后摇，目前仅 JSON 策略下生效
   * @since 0.64.0
   */
  checkAfterSwitchAvatar: boolean;
  /**
   * 是否在首次检查时进行面敌
   * @since 0.58.0
   */
  isFirstCheck: boolean;
  /**
   * 旋转寻敌的旋转因子，越大越快
   * @since 0.58.0
   */
  rotaryFactor: number;
  /**
   * 是否启用旋转寻找敌人
   * @since 0.58.0
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
   * 派蒙辅助检测延时，单位秒
   * @since 0.64.0
   */
  paimonEndCheckDelay: number;
}

export interface AutoLeyLineOutcropFightConfig_FightFinishDetectConfigHostType extends HostType<
  AutoLeyLineOutcropFightConfig_FightFinishDetectConfig,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  /**
   * 构造实例
   * @since 0.58.0
   */
  new (): AutoLeyLineOutcropFightConfig_FightFinishDetectConfig;
}

declare global {
  namespace BetterGenshinImpact.GameTask.AutoLeyLineOutcrop.AutoLeyLineOutcropFightConfig {
    type FightFinishDetectConfig =
      import("./AutoLeyLineOutcropFightConfig").AutoLeyLineOutcropFightConfig_FightFinishDetectConfig;
  }
}

declare global {
  namespace BetterGenshinImpact.GameTask.AutoLeyLineOutcrop {
    type AutoLeyLineOutcropFightConfig =
      import("./AutoLeyLineOutcropFightConfig").AutoLeyLineOutcropFightConfig;
  }
}

export interface AutoLeyLineOutcropFightConfigHostType extends HostType<
  AutoLeyLineOutcropFightConfig,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  /**
   * 构造实例
   * @since 0.58.0
   */
  new (): AutoLeyLineOutcropFightConfig;
  readonly FightFinishDetectConfig: AutoLeyLineOutcropFightConfig_FightFinishDetectConfigHostType;
}

export {};
