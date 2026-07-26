import "../../../CommunityToolkit/Mvvm/ComponentModel/ObservableObject";
import type {
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../../System/ComponentModel/INotifyPropertyChanged";
import "../../../System/ComponentModel/INotifyPropertyChanging";
import type { CountryName } from "../Common/Map/MapScriptNames";
import "./AutoLeyLineOutcropFightConfig";
import type { LeyLineOutcropType } from "./AutoLeyLineOutcropParam";

/**
 * 自动地脉花配置
 * @since 0.58.0
 */
declare const autoLeyLineOutcropConfigBrand: unique symbol;
export interface AutoLeyLineOutcropConfig
  extends
    Omit<
      CommunityToolkit.Mvvm.ComponentModel.ObservableObject,
      | "count"
      | "country"
      | "fightConfig"
      | "friendshipTeam"
      | "isGoToSynthesizer"
      | "isNotification"
      | "isResinExhaustionMode"
      | "leyLineOutcropType"
      | "openModeCountMin"
      | "scanDropsAfterRewardEnabled"
      | "scanDropsAfterRewardSeconds"
      | "team"
      | "timeout"
      | "useAdventurerHandbook"
      | "useFragileResin"
      | "useTransientResin"
    >,
    System.ComponentModel.INotifyPropertyChangedInput,
    System.ComponentModel.INotifyPropertyChangingInput {
  readonly [autoLeyLineOutcropConfigBrand]: true;
  /**
   * 刷取次数
   * @since 0.58.0
   */
  count: number;
  /**
   * 目标地区名称，默认 `蒙德`
   * @since 0.58.0
   */
  country: CountryName;
  /**
   * 地脉花独立战斗配置
   * @since 0.58.0
   */
  fightConfig: BetterGenshinImpact.GameTask.AutoLeyLineOutcrop.AutoLeyLineOutcropFightConfig;
  /**
   * 好感队名称
   * @since 0.58.0
   */
  friendshipTeam: string;
  /**
   * 是否前往合成台合成浓缩树脂
   * @since 0.58.0
   */
  isGoToSynthesizer: boolean;
  /**
   * 是否通过 BetterGI 通知系统发送详细通知
   * @since 0.58.0
   */
  isNotification: boolean;
  /**
   * 是否开启树脂耗尽模式
   * @since 0.58.0
   */
  isResinExhaustionMode: boolean;
  /**
   * 地脉花类型
   * @since 0.58.0
   */
  leyLineOutcropType: LeyLineOutcropType;
  /**
   * 树脂耗尽模式下是否取配置次数与可刷次数的较小值
   * @since 0.58.0
   */
  openModeCountMin: boolean;
  /**
   * 是否在领取地脉花奖励后扫描周围掉落物光柱
   * @since 0.58.0
   */
  scanDropsAfterRewardEnabled: boolean;
  /**
   * 领取奖励后扫描掉落物光柱的最长时长，单位秒，默认 12
   * @since 0.58.0
   */
  scanDropsAfterRewardSeconds: number;
  /**
   * 战斗队伍名称
   * @since 0.58.0
   */
  team: string;
  /**
   * 战斗超时时长，单位秒，默认 120
   * @since 0.58.0
   */
  timeout: number;
  /**
   * 是否使用冒险之证寻找地脉花
   * @since 0.58.0
   */
  useAdventurerHandbook: boolean;
  /**
   * 是否允许使用脆弱树脂
   * @since 0.58.0
   */
  useFragileResin: boolean;
  /**
   * 是否允许使用须臾树脂
   * @since 0.58.0
   */
  useTransientResin: boolean;
}

declare global {
  namespace BetterGenshinImpact.GameTask.AutoLeyLineOutcrop {
    type AutoLeyLineOutcropConfig = import("./AutoLeyLineOutcropConfig").AutoLeyLineOutcropConfig;
  }
}

export interface AutoLeyLineOutcropConfigHostType extends HostType<
  AutoLeyLineOutcropConfig,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  /**
   * 构造实例
   * @since 0.58.0
   */
  new (): AutoLeyLineOutcropConfig;
}

export {};
