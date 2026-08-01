import "../../../CommunityToolkit/Mvvm/ComponentModel/ObservableObject";
import type {
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../../System/Collections/Generic/List";
import "../../../System/ComponentModel/INotifyPropertyChanged";
import "../../../System/ComponentModel/INotifyPropertyChanging";
import type { ResinName } from "../AutoDomain/AutoDomainTask";
import type { CombatStrategyName } from "../AutoFight/AutoFightConfig";

/**
 * 自动幽境危战配置
 * @since 0.58.0
 */
declare const autoStygianOnslaughtConfigBrand: unique symbol;
export interface AutoStygianOnslaughtConfig
  extends
    Omit<
      CommunityToolkit.Mvvm.ComponentModel.ObservableObject,
      | "autoArtifactSalvage"
      | "bossNum"
      | "condensedResinUseCount"
      | "fightTeamName"
      | "fragileResinUseCount"
      | "originalResinUseCount"
      | "resinPriorityList"
      | "specifyResinUse"
      | "strategyName"
      | "transientResinUseCount"
    >,
    System.ComponentModel.INotifyPropertyChangedInput,
    System.ComponentModel.INotifyPropertyChangingInput {
  readonly [autoStygianOnslaughtConfigBrand]: true;
  /**
   * 是否在结束后自动分解圣遗物
   * @since 0.58.0
   */
  autoArtifactSalvage: boolean;
  /**
   * 挑战 Boss 序号，取值 1–3
   * @since 0.58.0
   */
  bossNum: number;
  /**
   * 使用浓缩树脂刷取的次数
   * @since 0.58.0
   */
  condensedResinUseCount: number;
  /**
   * 指定战斗队伍名称
   * @since 0.58.0
   */
  fightTeamName: string;
  /**
   * 使用脆弱树脂刷取的次数
   * @since 0.58.0
   */
  fragileResinUseCount: number;
  /**
   * 使用原粹树脂刷取的次数
   * @since 0.58.0
   */
  originalResinUseCount: number;
  /**
   * 使用树脂的优先级列表，默认浓缩树脂优先于原粹树脂
   * @since 0.58.0
   */
  resinPriorityList: System.Collections.Generic.List<ResinName>;
  /**
   * 是否启用指定树脂使用次数模式
   * @since 0.58.0
   */
  specifyResinUse: boolean;
  /**
   * 战斗策略名称，`根据队伍自动选择` 表示按当前队伍匹配策略
   * @since 0.58.0
   */
  strategyName: CombatStrategyName;
  /**
   * 使用须臾树脂刷取的次数
   * @since 0.58.0
   */
  transientResinUseCount: number;
}

declare global {
  namespace BetterGenshinImpact.GameTask.AutoStygianOnslaught {
    type AutoStygianOnslaughtConfig =
      import("./AutoStygianOnslaughtConfig").AutoStygianOnslaughtConfig;
  }
}

export interface AutoStygianOnslaughtConfigHostType extends HostType<
  AutoStygianOnslaughtConfig,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  /**
   * 构造实例
   * @since 0.58.0
   */
  new (): AutoStygianOnslaughtConfig;
}

export {};
