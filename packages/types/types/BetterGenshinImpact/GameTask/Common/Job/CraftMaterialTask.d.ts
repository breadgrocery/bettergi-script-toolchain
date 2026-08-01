import type {
  ClrHostValue,
  HostType,
  Int32Host,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../../Microsoft/ClearScript/HostType";
import "../../../../System/Collections/Generic/List";
import "../Reward/RewardItem";

/**
 * 合成台材料筛选类型
 * 来源：`Assets/Model/ItemV2/item.csv` 的 `material_type` 去重集合
 * @since 0.62.0
 */
export type CraftMaterialType =
  | "武器突破素材"
  | "消耗品"
  | "药剂"
  | "角色与武器培养素材"
  | "角色天赋素材"
  | "角色突破素材"
  | "食物"
  | "鱼饵"
  | (string & {});

/**
 * 合成指定材料的执行结果
 * @since 0.62.0
 */
declare const craftMaterialResultBrand: unique symbol;
export interface CraftMaterialResult extends ClrHostValue {
  readonly [craftMaterialResultBrand]: true;
  /**
   * 是否成功完成合成
   * @since 0.62.0
   */
  success: boolean;
  /**
   * 目标材料名
   * @since 0.62.0
   */
  materialName: string;
  /**
   * 目标合成个数
   * @since 0.62.0
   */
  targetQuantity: number;
  /**
   * 实际设置到界面的合成个数
   * @since 0.62.0
   */
  actualQuantity: number;
  /**
   * 本次使用的材料筛选类型
   * @since 0.62.0
   */
  materialType: CraftMaterialType;
  /**
   * 本次合成产物汇总
   * @since 0.62.0
   */
  rewards: System.Collections.Generic.List<BetterGenshinImpact.GameTask.Common.Reward.RewardItem>;
}

declare global {
  namespace BetterGenshinImpact.GameTask.Common.Job {
    type CraftMaterialResult = import("./CraftMaterialTask").CraftMaterialResult;
    type CraftMaterialType = import("./CraftMaterialTask").CraftMaterialType;
  }
}

export interface CraftMaterialResultHostType extends HostType<
  CraftMaterialResult,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  /**
   * 构造空结果
   * @since 0.62.0
   */
  new (): CraftMaterialResult;
  /**
   * 创建成功结果
   * @param materialName 目标材料名
   * @param targetQuantity 目标合成个数
   * @param actualQuantity 实际设置个数
   * @param materialType 材料筛选类型
   * @param rewards 本次合成产物汇总
   * @returns 成功结果
   * @since 0.62.0
   */
  createSuccess(
    materialName: string,
    targetQuantity: number | StrongNumeric<Int32Host>,
    actualQuantity: number | StrongNumeric<Int32Host>,
    materialType: CraftMaterialType,
    rewards: System.Collections.Generic.List<BetterGenshinImpact.GameTask.Common.Reward.RewardItem>
  ): BetterGenshinImpact.GameTask.Common.Job.CraftMaterialResult;
}

export {};
