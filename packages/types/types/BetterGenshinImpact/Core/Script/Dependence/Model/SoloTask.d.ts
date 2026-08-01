import type {
  ClrHostValue,
  HostType,
  ReferenceTypeTrait
} from "../../../../../Microsoft/ClearScript/HostType";
import "../../../../../Microsoft/ClearScript/ScriptObject";
import "../../../../GameTask/Common/Job/CountInventoryItemParam";
import "../../../../GameTask/Model/GameUI/GridScreenName";

/**
 * 任务名 → SoloTask.Config（唯一真源；配置一律 inline，无额外 type 名）
 * @see Dispatcher.RunTask switch / BuildFromSoloTaskConfig
 * @since 0.43.1
 */
export type SoloTaskConfigMap = {
  /** 自动七圣召唤  */
  AutoGeniusInvokation: {
    /** 七圣策略文本；空则回退 UI 设置 */
    strategy?: string;
  };
  /** 自动伐木 */
  AutoWood: void;
  /** 自动战斗 */
  AutoFight: void;
  /** 自动秘境 */
  AutoDomain: void;
  /** 自动首领 */
  AutoBoss: void;
  /** 自动钓鱼 */
  AutoFishing: {
    wholeProcessTimeoutSeconds?: number;
    throwRodTimeOutTimeoutSeconds?: number;
    /**
     * 钓鱼时间策略
     * - 0 全天
     * - 1 白天
     * - 2 夜晚
     * - 3 不调
     */
    fishingTimePolicy?: 0 | 1 | 2 | 3 | number;
    /** 关键节拍是否保存截图（调试用）；默认 false */
    saveScreenshotOnKeyTick?: boolean;
  };
  /** 自动烹饪 */
  AutoCook: void;
  /** 自动吃药 */
  AutoEat: {
    foodName?: string | null;
    /**
     * 料理类型
     * - 0 恢复类料理
     * - 1 攻击类料理
     * - 2 冒险类料理
     * - 3 防御类料理
     * - 4 药剂
     * - 5 其他
     */
    foodEffectType?: 0 | 1 | 2 | 3 | 4 | 5 | number;
  };
  /** 统计背包物品 */
  CountInventoryItem: {
    /**  gridScreenName 必填 */
    gridScreenName:
      | BetterGenshinImpact.GameTask.Common.Job.CountInventoryItemParam["gridScreenName"]
      | number
      | BetterGenshinImpact.GameTask.Model.GameUI.GridScreenName;
    /** itemName 与 itemNames 互斥 */
    itemName?: string | null;
    itemNames?: readonly string[] | string[];
  };
};

/**
 * 独立任务注册名 = map key；`(string & {})` 保留未知扩展
 * @since 0.46.0
 */
export type SoloTaskName = keyof SoloTaskConfigMap | (string & {});

export type SoloTaskConfigForName<TName extends SoloTaskName> =
  TName extends keyof SoloTaskConfigMap
    ? SoloTaskConfigMap[TName] extends void
      ? undefined
      : SoloTaskConfigMap[TName]
    : Record<string, unknown>;

/**
 * 独立任务
 * @since 0.43.1
 */
declare const soloTaskBrand: unique symbol;
export interface SoloTask extends ClrHostValue {
  readonly [soloTaskBrand]: true;
  /**
   * 独立任务名称
   * @since 0.43.1
   */
  name: SoloTaskName;
  /**
   * 独立任务配置（CLR 存 `object?`，JS 侧 plain object）
   * @since 0.43.1
   */
  config:
    | Exclude<SoloTaskConfigMap[keyof SoloTaskConfigMap], void>
    | Record<string, unknown>
    | null
    | undefined;
}

declare global {
  namespace BetterGenshinImpact.Core.Script.Dependence.Model {
    type SoloTask = import("./SoloTask").SoloTask;
  }
}

export interface SoloTaskHostType extends HostType<SoloTask, ReferenceTypeTrait> {
  /**
   * 仅名称
   * @since 0.43.1
   */
  new (name: SoloTaskName): SoloTask;

  /**
   * 名称 + 配置（按任务名收窄）
   * @since 0.43.1
   */
  new <TName extends SoloTaskName>(
    name: TName,
    config: SoloTaskConfigForName<TName> extends undefined
      ? Record<string, unknown> | undefined
      : SoloTaskConfigForName<TName>
  ): SoloTask;
}

export {};
