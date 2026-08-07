import "../../../CommunityToolkit/Mvvm/ComponentModel/ObservableObject";
import type {
  ClrHostValue,
  EnumTypeTrait,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../../System/ComponentModel/INotifyPropertyChanged";
import "../../../System/ComponentModel/INotifyPropertyChanging";
import "../../../System/Enum";
import "../../../System/IComparable";
import "../../../System/IConvertible";
import "../../../System/IFormattable";
import "../../../System/ISpanFormattable";

/**
 * 精英掉落拾取模式
 * @since 0.52.0
 */
export type OnlyPickEliteDropsMode =
  | "Closed" // 关闭
  | "AllowAutoPickupForNonElite" // 非精英允许自动拾取
  | "DisableAutoPickupForNonElite" // 非精英关闭自动拾取
  | (string & {});

/**
 * 战斗策略名称；`根据队伍自动选择` 表示按当前队伍匹配策略目录，其余为 `User/AutoFight` 下策略文件名（不含扩展名）
 * @since 0.52.0
 */
export type CombatStrategyName = "根据队伍自动选择" | (string & {});

/**
 * 战斗策略文件种类标识
 * 与上游 `AutoFightParam.ResolveStrategyPath` 返回的第二项对齐：优先命中 `.json`，否则回退 `.txt`；自动选队目录亦标为 `txt`
 * @since 0.52.0
 */
export type StrategyFileKind =
  | "json" // JSON 战斗策略
  | "txt" // 文本 / 简易策略（含「根据队伍自动选择」目录）
  | (string & {});

/**
 * 队伍内角色槽位序号（字符串），从 1 开始；空字符串表示不指定
 * @since 0.52.0
 */
export type PartySlotIndex = "1" | "2" | "3" | "4" | "" | (string & {});

/**
 * 自动战斗配置
 * @since 0.52.0
 */
declare const autoFightConfigBrand: unique symbol;
export interface AutoFightConfig
  extends
    Omit<
      CommunityToolkit.Mvvm.ComponentModel.ObservableObject,
      | "actionSchedulerByCd"
      | "battleThresholdForLoot"
      | "burstEnabled"
      | "damageNumberRecognitionMode"
      | "drawRecognitionResults"
      | "enableCombatTargeting"
      | "expBasedPickupEnabled"
      | "fightFinishDetectEnabled"
      | "finishDetectConfig"
      | "guardianAvatar"
      | "guardianAvatarHold"
      | "guardianCombatSkip"
      | "kazuhaPartyName"
      | "kazuhaPickupEnabled"
      | "lockLostWaitTime"
      | "onlyPickEliteDropsMode"
      | "pickDropsAfterFightEnabled"
      | "pickDropsAfterFightSeconds"
      | "qinDoublePickUp"
      | "skipModel"
      | "strategyName"
      | "swimmingEnabled"
      | "teamNames"
      | "targetingDetectionInterval"
      | "timeout"
    >,
    System.ComponentModel.INotifyPropertyChangedInput,
    System.ComponentModel.INotifyPropertyChangingInput {
  readonly [autoFightConfigBrand]: true;
  /**
   * 按技能冷却优化出招的角色配置，英文逗号分隔人名或人名与秒数，多种用分号分隔，例如 `白术;钟离,12;`
   * @since 0.52.0
   */
  actionSchedulerByCd: string;
  /**
   * 触发战后拾取所需的最低战斗人次，小于该值且不小于 2 时跳过拾取，null 表示不限制
   * @since 0.52.0
   */
  battleThresholdForLoot: number | null;
  /**
   * 是否优先释放元素爆发
   * @since 0.52.0
   */
  burstEnabled: boolean;
  /**
   * 是否仅在检测到精英怪经验值图标时执行战后拾取
   * @since 0.52.0
   */
  expBasedPickupEnabled: boolean;
  /**
   * 是否启用战斗结束检测
   * @since 0.52.0
   */
  fightFinishDetectEnabled: boolean;
  /**
   * 战斗结束检测配置
   * @since 0.52.0
   */
  finishDetectConfig: AutoFightConfig_FightFinishDetectConfig;
  /**
   * 盾奶位是否长按元素战技
   * @since 0.52.0
   */
  guardianAvatarHold: boolean;
  /**
   * 盾奶位角色队伍序号，从 1 开始，空字符串表示不指定
   * @since 0.52.0
   */
  guardianAvatar: PartySlotIndex;
  /**
   * 是否跳过盾奶位自身的战斗策略脚本
   * @since 0.52.0
   */
  guardianCombatSkip: boolean;
  /**
   * 战后万叶拾取时切换的备用队伍名称，当前队伍无枫原万叶时使用
   * @since 0.52.0
   */
  kazuhaPartyName: string;
  /**
   * 是否在战斗结束后使用枫原万叶聚集并拾取掉落物
   * @since 0.52.0
   */
  kazuhaPickupEnabled: boolean;
  /**
   * 只拾取精英掉落模式：`Closed` 关闭、`AllowAutoPickupForNonElite` 非精英允许脚下自动拾取、`DisableAutoPickupForNonElite` 非精英关闭拾取
   * @since 0.52.0
   */
  onlyPickEliteDropsMode: OnlyPickEliteDropsMode;
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
   * 是否在战后使用琴二次长按元素战技拾取
   * @since 0.52.0
   */
  qinDoublePickUp: boolean;
  /**
   * 是否启用跳过模型
   * @since 0.52.0
   */
  skipModel: boolean;
  /**
   * 战斗策略名称，`根据队伍自动选择` 表示按当前队伍匹配策略
   * @since 0.52.0
   */
  strategyName: CombatStrategyName;
  /**
   * 是否启用游泳脱困检测
   * @since 0.52.0
   */
  swimmingEnabled: boolean;
  /**
   * 强制指定队伍角色名称，英文逗号分隔，空字符串表示不强制
   * @since 0.52.0
   */
  teamNames: string;
  /**
   * 战斗超时时长，单位秒，默认 120
   * @since 0.52.0
   */
  timeout: number;
  /**
   * 是否在战斗中持续尝试面朝敌人
   * @since 0.63.0
   */
  enableCombatTargeting: boolean;
  /**
   * 敌人不可见后开始旋转索敌前的等待时长，单位秒，默认 0.5
   * @since 0.63.0
   */
  lockLostWaitTime: number;
  /**
   * 索敌识别间隔，单位毫秒，默认 50
   * @since 0.63.0
   */
  targetingDetectionInterval: number;
  /**
   * 伤害数字识别模式
   * @since 0.63.0
   */
  damageNumberRecognitionMode: DamageNumberRecognitionMode;
  /**
   * 是否在遮罩窗口绘制血条、伤害数字等识别结果
   * @since 0.63.0
   */
  drawRecognitionResults: boolean;
}

/**
 * 战斗结束检测配置
 * @since 0.52.0
 */
declare const autoFightConfig_FightFinishDetectConfigBrand: unique symbol;
export interface AutoFightConfig_FightFinishDetectConfig
  extends
    Omit<
      CommunityToolkit.Mvvm.ComponentModel.ObservableObject,
      | "battleEndProgressBarColor"
      | "battleEndProgressBarColorTolerance"
      | "beforeDetectDelay"
      | "checkBeforeBurst"
      | "checkEndDelay"
      | "fastCheckEnabled"
      | "fastCheckParams"
      | "isFirstCheck"
      | "rotaryFactor"
      | "rotateFindEnemyEnabled"
      | "skipFightEndCheckWhenEnemyVisible"
    >,
    System.ComponentModel.INotifyPropertyChangedInput,
    System.ComponentModel.INotifyPropertyChangingInput {
  readonly [autoFightConfig_FightFinishDetectConfigBrand]: true;
  /**
   * 战斗结束进度条颜色容差，`6` 表示三通道相同容差，`6,6,6` 可分别设置，格式为 RGB
   * @since 0.52.0
   */
  battleEndProgressBarColorTolerance: string;
  /**
   * 判断战斗结束的进度条颜色，`RGB` 格式，默认 `95,235,255`
   * @since 0.52.0
   */
  battleEndProgressBarColor: string;
  /**
   * 按下切换队伍后检测屏幕色块的延迟，单位秒，默认 `0.4`，频繁误判时可适当提高
   * @since 0.52.0
   */
  beforeDetectDelay: string;
  /**
   * 是否在释放元素爆发前检查战斗结束
   * @since 0.52.0
   */
  checkBeforeBurst: boolean;
  /**
   * 检查战斗结束前的延时，单位秒，可指定角色，格式如 `2.5;白术,1.5;钟离,1.0;`
   * @since 0.52.0
   */
  checkEndDelay: string;
  /**
   * 是否启用快速检查战斗结束
   * @since 0.52.0
   */
  fastCheckEnabled: boolean;
  /**
   * 快速检查参数，数字为间隔秒数，人名为该角色执行一轮后检查，分号分隔，例如 `15,白术;钟离;`
   * @since 0.52.0
   */
  fastCheckParams: string;
  /**
   * 是否在首次检查时进行面敌
   * @since 0.52.0
   */
  isFirstCheck: boolean;
  /**
   * 旋转寻敌的旋转因子，范围 1–13，默认 12，越大越快
   * @since 0.52.0
   */
  rotaryFactor: number;
  /**
   * 是否启用旋转寻找敌人
   * @since 0.52.0
   */
  rotateFindEnemyEnabled: boolean;
  /**
   * 是否在敌人可见时跳过战斗结束检查；与旋转寻找敌人互斥
   * @since 0.63.0
   */
  skipFightEndCheckWhenEnemyVisible: boolean;
}

export interface AutoFightConfig_FightFinishDetectConfigHostType extends HostType<
  AutoFightConfig_FightFinishDetectConfig,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  /**
   * 构造实例
   * @since 0.52.0
   */
  new (): AutoFightConfig_FightFinishDetectConfig;
}

declare global {
  namespace BetterGenshinImpact.GameTask.AutoFight.AutoFightConfig {
    type FightFinishDetectConfig =
      import("./AutoFightConfig").AutoFightConfig_FightFinishDetectConfig;
  }
}

declare global {
  namespace BetterGenshinImpact.GameTask.AutoFight {
    type AutoFightConfig = import("./AutoFightConfig").AutoFightConfig;
    type CombatStrategyName = import("./AutoFightConfig").CombatStrategyName;
    type DamageNumberRecognitionMode = import("./AutoFightConfig").DamageNumberRecognitionMode;
    type OnlyPickEliteDropsMode = import("./AutoFightConfig").OnlyPickEliteDropsMode;
    type PartySlotIndex = import("./AutoFightConfig").PartySlotIndex;
    type StrategyFileKind = import("./AutoFightConfig").StrategyFileKind;
  }
}

export interface AutoFightConfigHostType extends HostType<
  AutoFightConfig,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  /**
   * 构造实例
   * @since 0.52.0
   */
  new (): AutoFightConfig;
  readonly FightFinishDetectConfig: AutoFightConfig_FightFinishDetectConfigHostType;
}

/**
 * 战斗索敌使用的伤害数字识别模式
 * @since 0.63.0
 */
declare const damageNumberRecognitionModeBrand: unique symbol;
export interface DamageNumberRecognitionMode extends ClrHostValue {
  readonly [damageNumberRecognitionModeBrand]: true;
}

export interface DamageNumberRecognitionModeHostType extends HostType<
  DamageNumberRecognitionMode,
  EnumTypeTrait
> {
  /**
   * 禁用伤害数字识别
   * @since 0.63.0
   */
  readonly disabled: DamageNumberRecognitionMode;
  /**
   * 使用 OCR 识别伤害数字
   * @since 0.63.0
   */
  readonly ocr: DamageNumberRecognitionMode;
  /**
   * 使用颜色识别伤害数字
   * @since 0.63.0
   */
  readonly color: DamageNumberRecognitionMode;
}

export {};
