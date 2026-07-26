import type {
  ClrHostValue,
  EnumTypeTrait,
  HostType
} from "../../../../Microsoft/ClearScript/HostType";
import "../../../../System/Enum";
import "../../../../System/IComparable";
import "../../../../System/IConvertible";
import "../../../../System/IFormattable";
import "../../../../System/ISpanFormattable";

/**
 * 游戏界面分类
 * @since 0.57.0
 */
declare const gameUiCategoryBrand: unique symbol;
export interface GameUiCategory extends ClrHostValue {
  readonly [gameUiCategoryBrand]: true;
}

declare global {
  namespace BetterGenshinImpact.GameTask.Common.BgiVision {
    type GameUiCategory = import("./BvStatus").GameUiCategory;
  }
}

export interface GameUiCategoryHostType extends HostType<GameUiCategory, EnumTypeTrait> {
  /**
   * 未知界面
   * @since 0.57.0
   */
  readonly unknown: GameUiCategory;
  /**
   * 主界面
   * @since 0.57.0
   */
  readonly main: GameUiCategory;
  /**
   * 对话界面
   * @since 0.57.0
   */
  readonly talk: GameUiCategory;
  /**
   * 大地图界面
   * @since 0.57.0
   */
  readonly bigMap: GameUiCategory;
}

export {};
