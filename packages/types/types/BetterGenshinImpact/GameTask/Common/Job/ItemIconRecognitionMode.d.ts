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
 * 物品图标识别模式
 * @since 0.62.0
 */
declare const itemIconRecognitionModeBrand: unique symbol;
export interface ItemIconRecognitionMode extends ClrHostValue {
  readonly [itemIconRecognitionModeBrand]: true;
}

declare global {
  namespace BetterGenshinImpact.GameTask.Common.Job {
    type ItemIconRecognitionMode = import("./ItemIconRecognitionMode").ItemIconRecognitionMode;
  }
}

export interface ItemIconRecognitionModeHostType extends HostType<
  ItemIconRecognitionMode,
  EnumTypeTrait
> {
  /**
   * 网格图标识别
   * @since 0.62.0
   */
  readonly gridIcon: ItemIconRecognitionMode;
  /**
   * 物品详情识别
   * @since 0.62.0
   */
  readonly item: ItemIconRecognitionMode;
}

export {};
