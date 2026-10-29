import "../../../../CommunityToolkit/Mvvm/ComponentModel/ObservableObject";
import type {
  HostType,
  Int32Host,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../../Microsoft/ClearScript/HostType";
import "../../../../System/Collections/Generic/IEnumerable";
import "../../../../System/Collections/Generic/List";
import "../../../../System/ComponentModel/INotifyPropertyChanged";
import "../../../../System/ComponentModel/INotifyPropertyChanging";

/**
 * 秘境或首领奖励停止目标物品
 * @since 0.67.0
 */
declare const targetItemBrand: unique symbol;
export interface TargetItem extends CommunityToolkit.Mvvm.ComponentModel.ObservableObject {
  readonly [targetItemBrand]: true;
  /**
   * 目标物品名
   * @since 0.67.0
   */
  itemName: string;
  /**
   * 目标数量
   * @since 0.67.0
   */
  targetCount: number;
}

declare global {
  namespace BetterGenshinImpact.GameTask.Common.Reward {
    type TargetItem = import("./TargetItem").TargetItem;
  }
}

export interface TargetItemHostType extends HostType<
  TargetItem,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  /**
   * 构造目标物品实例
   * @since 0.67.0
   */
  new (): TargetItem;
  /**
   * 构造指定名称与数量的目标物品实例
   * @param itemName 目标物品名
   * @param targetCount 目标数量
   * @since 0.67.0
   */
  new (itemName: string, targetCount: number | StrongNumeric<Int32Host>): TargetItem;
  /**
   * 深拷贝目标列表，避免配置与任务参数共享可变对象
   * @param source 源目标物品集合
   * @returns 拷贝后的目标物品列表
   * @since 0.67.0
   */
  cloneAll(
    source:
      | System.Collections.Generic.IEnumerable<BetterGenshinImpact.GameTask.Common.Reward.TargetItem>
      | readonly BetterGenshinImpact.GameTask.Common.Reward.TargetItem[]
      | null
  ): System.Collections.Generic.List<BetterGenshinImpact.GameTask.Common.Reward.TargetItem>;
}

export {};
