import type {
  ClrHostValue,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../../Microsoft/ClearScript/VoidResult";
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
   * 目标网格界面名称；可选，为 null 时按物品自动分组多页扫描
   * @since 0.62.0
   */
  gridScreenName: BetterGenshinImpact.GameTask.Model.GameUI.GridScreenName | null;
  /**
   * 物品名称列表
   * @since 0.62.0
   */
  itemNames: System.Collections.Generic.List<string>;
  /**
   * 物品图标识别模式
   * @since 0.62.0
   */
  iconRecognitionMode: BetterGenshinImpact.GameTask.Common.Job.ItemIconRecognitionMode;
  /**
   * 是否启用按物品排序提前停止；默认 false
   * @since 0.67.0
   */
  stopByItemSort: boolean;
  /**
   * 校验参数；`itemNames` 不能为空
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
