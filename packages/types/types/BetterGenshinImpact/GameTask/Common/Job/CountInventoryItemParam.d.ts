import type {
  ClrHostValue,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../../Microsoft/ClearScript/VoidResult";
import "../../../../System/Collections/Generic/IEnumerable";
import "../../../../System/Collections/Generic/List";
import "../../Model/GameUI/GridScreenName";
import "./ItemIconRecognitionMode";

/**
 * 背包物品计数任务参数
 * @since 0.62.0
 */
declare const countInventoryItemParamBrand: unique symbol;
export interface CountInventoryItemParam extends ClrHostValue {
  readonly [countInventoryItemParamBrand]: true;
  /**
   * 目标网格界面名称
   * @since 0.62.0
   */
  gridScreenName: BetterGenshinImpact.GameTask.Model.GameUI.GridScreenName;
  /**
   * 单个物品名称；与 `itemNames` 互斥
   * @since 0.62.0
   */
  itemName: string;
  /**
   * 多个物品名称列表；与 `itemName` 互斥
   * @since 0.62.0
   */
  itemNames: System.Collections.Generic.List<string>;
  /**
   * 物品图标识别模式
   * @since 0.62.0
   */
  iconRecognitionMode: BetterGenshinImpact.GameTask.Common.Job.ItemIconRecognitionMode;
  /**
   * 获取物品名称列表；列表为空时返回 null
   * @since 0.62.0
   */
  getItemNamesOrNull(): System.Collections.Generic.IEnumerable<string>;
  /**
   * 校验参数；`itemName` 与 `itemNames` 不可同时设置或同时为空
   * @returns ClearScript 宿主空结果
   * @since 0.62.0
   */
  validate(): VoidResult;
}

declare global {
  namespace BetterGenshinImpact.GameTask.Common.Job {
    type CountInventoryItemParam = import("./CountInventoryItemParam").CountInventoryItemParam;
  }
}

export interface CountInventoryItemParamHostType extends HostType<
  CountInventoryItemParam,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  /**
   * 构造参数实例，供脚本创建后逐项赋值；校验在任务消费参数时执行
   * @since 0.62.0
   */
  new (): CountInventoryItemParam;
}

export {};
