import "../../../CommunityToolkit/Mvvm/ComponentModel/ObservableObject";
import type {
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../../System/ComponentModel/INotifyPropertyChanged";
import "../../../System/ComponentModel/INotifyPropertyChanging";

/**
 * 自动首领讨伐的持久化配置，由独立任务页使用
 * @since 0.62.0
 */
declare const autoBossConfigBrand: unique symbol;
export interface AutoBossConfig
  extends
    Omit<
      CommunityToolkit.Mvvm.ComponentModel.ObservableObject,
      | "bossName"
      | "returnToStatueAfterEachRound"
      | "reviveRetryCount"
      | "rewardRecognitionEnabled"
      | "runCount"
      | "specifyRunCount"
      | "strategyName"
      | "teamName"
      | "useFragileResin"
      | "useTransientResin"
    >,
    System.ComponentModel.INotifyPropertyChangedInput,
    System.ComponentModel.INotifyPropertyChangingInput {
  readonly [autoBossConfigBrand]: true;
  /**
   * 需要讨伐的 Boss 名称
   * @since 0.62.0
   */
  bossName: string;
  /**
   * 每轮领奖后是否先返回七天神像，再重新前往 Boss
   * @since 0.62.0
   */
  returnToStatueAfterEachRound: boolean;
  /**
   * 检测到角色死亡后回神像恢复并重试当前首领讨伐的最大次数
   * @since 0.62.0
   */
  reviveRetryCount: number;
  /**
   * 是否启用奖励名称识别，默认关闭
   * @since 0.62.0
   */
  rewardRecognitionEnabled: boolean;
  /**
   * 指定模式下成功领取奖励的目标次数
   * @since 0.62.0
   */
  runCount: number;
  /**
   * 是否启用指定讨伐次数模式；关闭时刷取至原粹树脂耗尽
   * @since 0.62.0
   */
  specifyRunCount: boolean;
  /**
   * 战斗策略名称，`根据队伍自动选择` 表示按当前队伍匹配策略
   * @since 0.62.0
   */
  strategyName: string;
  /**
   * 讨伐前需要切换到的队伍名称，为空时保持当前队伍
   * @since 0.62.0
   */
  teamName: string;
  /**
   * 指定讨伐次数模式下原粹树脂不足时是否允许使用脆弱树脂补充
   * @since 0.62.0
   */
  useFragileResin: boolean;
  /**
   * 指定讨伐次数模式下原粹树脂不足时是否允许使用须臾树脂补充
   * @since 0.62.0
   */
  useTransientResin: boolean;
}

declare global {
  namespace BetterGenshinImpact.GameTask.AutoBoss {
    type AutoBossConfig = import("./AutoBossConfig").AutoBossConfig;
  }
}

export interface AutoBossConfigHostType extends HostType<
  AutoBossConfig,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  /**
   * 构造实例
   * @since 0.62.0
   */
  new (): AutoBossConfig;
}

export {};
