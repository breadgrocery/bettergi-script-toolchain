import type {
  ClrHostValue,
  HostType,
  ReferenceTypeTrait
} from "../../../../../Microsoft/ClearScript/HostType";
import "../../../../../Microsoft/ClearScript/ScriptObject";

/**
 * 独立任务注册名
 * @since 0.46.0
 */
export type SoloTaskName =
  | "AutoGeniusInvokation" // 自动七圣召唤
  | "AutoWood" // 自动伐木
  | "AutoFight" // 自动战斗
  | "AutoDomain" // 自动秘境
  | "AutoBoss" // 自动首领
  | "AutoFishing" // 自动钓鱼
  | "AutoCook" // 自动烹饪
  | "AutoEat" // 自动食用
  | "CountInventoryItem" // 统计背包物品
  | (string & {});

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
   * 独立任务配置
   * @since 0.43.1
   */
  config: unknown;
}

declare global {
  namespace BetterGenshinImpact.Core.Script.Dependence.Model {
    type SoloTask = import("./SoloTask").SoloTask;
  }
}

export interface SoloTaskHostType extends HostType<SoloTask, ReferenceTypeTrait> {
  /**
   * 构造实例
   * @param name 独立任务名称
   * @since 0.43.1
   */
  new (name: SoloTaskName): SoloTask;
  /**
   * 构造实例
   * @param name 独立任务名称
   * @param config 独立任务配置对象
   * @since 0.43.1
   */
  new (name: SoloTaskName, config: Microsoft.ClearScript.ScriptObject): SoloTask;
}

export {};
