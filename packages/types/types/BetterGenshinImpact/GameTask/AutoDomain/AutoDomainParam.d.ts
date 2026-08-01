import type {
  HostArray,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../../System/Collections/Generic/List";
import type { CombatStrategyName } from "../AutoFight/AutoFightConfig";
import "../Model/BaseTaskParam";
import type { ArtifactStar, DomainName, ResinName, SundaySelectedValue } from "./AutoDomainTask";
import "./AutoDomainTask";

/**
 * 自动秘境参数
 * @since 0.52.0
 */
declare const autoDomainParamBrand: unique symbol;
export interface AutoDomainParam extends Omit<
  BetterGenshinImpact.GameTask.Model.BaseTaskParam<BetterGenshinImpact.GameTask.AutoDomain.AutoDomainTask>,
  | "autoArtifactSalvage"
  | "combatStrategyPath"
  | "condensedResinUseCount"
  | "domainName"
  | "domainRoundNum"
  | "fragileResinUseCount"
  | "maxArtifactStar"
  | "originalResin20UseCount"
  | "originalResin40UseCount"
  | "originalResinUseCount"
  | "partyName"
  | "resinPriorityList"
  | "rewardRecognitionEnabled"
  | "setCombatStrategyPath"
  | "setDefault"
  | "setResinPriorityList"
  | "specifyResinUse"
  | "sundaySelectedValue"
  | "transientResinUseCount"
> {
  readonly [autoDomainParamBrand]: true;
  /**
   * 秘境刷取轮数，构造时传入 0 会改为 9999
   * @since 0.52.0
   */
  domainRoundNum: number;
  /**
   * 战斗策略文件或策略目录的完整路径
   * @since 0.52.0
   */
  combatStrategyPath: string;
  /**
   * 刷取秘境使用的队伍名称
   * @since 0.52.0
   */
  partyName: string;
  /**
   * 需要刷取的秘境名称；空字符串表示未指定
   * @since 0.52.0
   */
  domainName: DomainName;
  /**
   * 周日 / 限时全开秘境奖励选项序号；空字符串表示不指定
   * @since 0.52.0
   */
  sundaySelectedValue: SundaySelectedValue;
  /**
   * 是否在结束后自动分解圣遗物
   * @since 0.52.0
   */
  autoArtifactSalvage: boolean;
  /**
   * 分解圣遗物的最大星级，取值 1–4，默认 `4`
   * @since 0.52.0
   */
  maxArtifactStar: ArtifactStar;
  /**
   * 是否启用指定树脂使用次数模式
   * @since 0.52.0
   */
  specifyResinUse: boolean;
  /**
   * 使用树脂的优先级列表，默认浓缩树脂优先于原粹树脂
   * @since 0.52.0
   */
  resinPriorityList: System.Collections.Generic.List<ResinName>;
  /**
   * 使用原粹树脂刷取副本的次数
   * @since 0.52.0
   */
  originalResinUseCount: number;
  /**
   * 使用 20 点原粹树脂刷取副本的次数
   * @since 0.57.0
   */
  originalResin20UseCount: number;
  /**
   * 使用 40 点原粹树脂刷取副本的次数
   * @since 0.57.0
   */
  originalResin40UseCount: number;
  /**
   * 使用浓缩树脂刷取副本的次数
   * @since 0.52.0
   */
  condensedResinUseCount: number;
  /**
   * 使用须臾树脂刷取副本的次数
   * @since 0.52.0
   */
  transientResinUseCount: number;
  /**
   * 使用脆弱树脂刷取副本的次数
   * @since 0.52.0
   */
  fragileResinUseCount: number;
  /**
   * 是否启用奖励名称识别，默认关闭
   * @since 0.62.0
   */
  rewardRecognitionEnabled: boolean;
  /**
   * 从当前全局自动秘境配置填充默认参数
   * @returns ClearScript 宿主空结果
   * @since 0.52.0
   */
  setDefault(): VoidResult;
  /**
   * 设置战斗策略路径
   * @param strategyName 策略名称，省略或为空时使用全局自动战斗配置中的策略名称
   * @returns 解析后的策略路径
   * @since 0.52.0
   */
  setCombatStrategyPath(): string;
  setCombatStrategyPath(strategyName: CombatStrategyName | null): string;
  /**
   * 设置使用树脂的优先级列表
   * @param priorities 树脂名称数组，顺序即优先级
   * @returns ClearScript 宿主空结果
   * @since 0.52.0
   */
  setResinPriorityList(priorities: HostArray<ResinName>): VoidResult;
  setResinPriorityList(...priorities: ResinName[]): VoidResult;
}

declare global {
  namespace BetterGenshinImpact.GameTask.AutoDomain {
    type AutoDomainParam = import("./AutoDomainParam").AutoDomainParam;
  }
}

export interface AutoDomainParamHostType extends HostType<AutoDomainParam, ReferenceTypeTrait> {
  /**
   * 使用刷取轮数与策略路径构造参数
   * @param domainRoundNum 秘境刷取轮数，0 会改为 9999
   * @param path 战斗策略文件或策略目录路径
   * @since 0.52.0
   */
  new (domainRoundNum: number | StrongNumeric<Int32Host>, path: string): AutoDomainParam;
  /**
   * 使用刷取轮数构造参数并按全局配置解析策略路径
   * @param domainRoundNum 秘境刷取轮数，省略或为 0 时改为 9999
   * @since 0.52.0
   */
  new (): AutoDomainParam;
  new (domainRoundNum: number | StrongNumeric<Int32Host>): AutoDomainParam;
}

export {};
