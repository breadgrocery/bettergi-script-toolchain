import type {
  HostType,
  Int32Host,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import type { CountryName } from "../Common/Map/MapScriptNames";
import "../Model/BaseTaskParam";
import "./AutoLeyLineOutcropConfig";
import "./AutoLeyLineOutcropFightConfig";
import "./AutoLeyLineOutcropTask";

/**
 * 地脉花类型
 * @since 0.58.0
 */
export type LeyLineOutcropType = "启示之花" | "藏金之花" | (string & {});

/**
 * 自动地脉花参数
 * @since 0.58.0
 */
declare const autoLeyLineOutcropParamBrand: unique symbol;
export interface AutoLeyLineOutcropParam extends Omit<
  BetterGenshinImpact.GameTask.Model.BaseTaskParam<BetterGenshinImpact.GameTask.AutoLeyLineOutcrop.AutoLeyLineOutcropTask>,
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
  | "setAutoLeyLineOutcropConfig"
  | "setDefault"
  | "team"
  | "timeout"
  | "useAdventurerHandbook"
  | "useFragileResin"
  | "useTransientResin"
> {
  readonly [autoLeyLineOutcropParamBrand]: true;
  /**
   * 刷取次数
   * @since 0.58.0
   */
  count: number;
  /**
   * 目标地区名称
   * @since 0.58.0
   */
  country: CountryName;
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
   * 是否开启树脂耗尽模式
   * @since 0.58.0
   */
  isResinExhaustionMode: boolean;
  /**
   * 是否使用冒险之证寻找地脉花
   * @since 0.58.0
   */
  useAdventurerHandbook: boolean;
  /**
   * 好感队名称
   * @since 0.58.0
   */
  friendshipTeam: string;
  /**
   * 战斗队伍名称
   * @since 0.58.0
   */
  team: string;
  /**
   * 战斗超时时长，单位秒
   * @since 0.58.0
   */
  timeout: number;
  /**
   * 地脉花独立战斗配置
   * @since 0.58.0
   */
  fightConfig: BetterGenshinImpact.GameTask.AutoLeyLineOutcrop.AutoLeyLineOutcropFightConfig;
  /**
   * 是否前往合成台合成浓缩树脂
   * @since 0.58.0
   */
  isGoToSynthesizer: boolean;
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
  /**
   * 是否通过 BetterGI 通知系统发送详细通知
   * @since 0.58.0
   */
  isNotification: boolean;
  /**
   * 是否在领取奖励后扫描掉落物光柱
   * @since 0.59.0
   */
  scanDropsAfterRewardEnabled: boolean;
  /**
   * 领取奖励后扫描掉落物光柱的最长时长，单位秒
   * @since 0.59.0
   */
  scanDropsAfterRewardSeconds: number;
  /**
   * 从当前全局自动地脉花配置填充默认参数
   * @returns ClearScript 宿主空结果
   * @since 0.58.0
   */
  setDefault(): VoidResult;
  /**
   * 从指定自动地脉花配置复制可配置项
   * @param config 自动地脉花配置
   * @returns ClearScript 宿主空结果
   * @since 0.58.0
   */
  setAutoLeyLineOutcropConfig(
    config: BetterGenshinImpact.GameTask.AutoLeyLineOutcrop.AutoLeyLineOutcropConfig
  ): VoidResult;
}

declare global {
  namespace BetterGenshinImpact.GameTask.AutoLeyLineOutcrop {
    type AutoLeyLineOutcropParam = import("./AutoLeyLineOutcropParam").AutoLeyLineOutcropParam;
  }
}

export interface AutoLeyLineOutcropParamHostType extends HostType<
  AutoLeyLineOutcropParam,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  /**
   * 使用当前全局配置创建参数
   * @since 0.58.0
   */
  new (): AutoLeyLineOutcropParam;
  /**
   * 使用刷取次数、地区与地脉花类型创建参数
   * @param count 刷取次数
   * @param country 目标地区名称
   * @param leyLineOutcropType 地脉花类型
   * @since 0.58.0
   */
  new (
    count: number | StrongNumeric<Int32Host>,
    country: CountryName,
    leyLineOutcropType: LeyLineOutcropType
  ): AutoLeyLineOutcropParam;
}

export {};
