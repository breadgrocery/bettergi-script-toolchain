import type {
  ClrHostValue,
  HostType,
  Int32Host,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../../Microsoft/ClearScript/HostType";

/**
 * 奖励物品
 * @since 0.52.0
 */
declare const rewardItemBrand: unique symbol;
export interface RewardItem extends ClrHostValue {
  readonly [rewardItemBrand]: true;
  /**
   * 物品名称
   * @since 0.52.0
   */
  name: string;
  /**
   * 稀有度等级；-1 表示未知或不支持
   * @since 0.52.0
   */
  qualityLevel: number;
  /**
   * 数量；-1 表示未识别到数量
   * @since 0.52.0
   */
  quantity: number;
  /**
   * 卡片在识别时的位置索引，用于调试和去重
   * @since 0.52.0
   */
  positionIndex: number;
  /**
   * 返回字符串表示
   * @since 0.52.0
   */
  toString(): string;
}

declare global {
  namespace BetterGenshinImpact.GameTask.Common.Reward {
    type RewardItem = import("./RewardItem").RewardItem;
  }
}

export interface RewardItemHostType extends HostType<
  RewardItem,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  /**
   * 构造空奖励物品
   * @since 0.52.0
   */
  new (): RewardItem;
  /**
   * 按名称与数量构造奖励物品
   * @param name 物品名称
   * @param qualityLevel 稀有度等级；-1 表示未知或不支持
   * @param quantity 数量；-1 表示未识别到数量
   * @param positionIndex 卡片位置索引
   * @since 0.52.0
   */
  new (
    name: string,
    qualityLevel: number | StrongNumeric<Int32Host>,
    quantity: number | StrongNumeric<Int32Host>
  ): RewardItem;
  new (
    name: string,
    qualityLevel: number | StrongNumeric<Int32Host>,
    quantity: number | StrongNumeric<Int32Host>,
    positionIndex: number | StrongNumeric<Int32Host>
  ): RewardItem;
}

export {};
