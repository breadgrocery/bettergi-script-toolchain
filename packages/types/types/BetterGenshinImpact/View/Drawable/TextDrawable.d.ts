import type {
  ClrHostValue,
  HostType,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../../System/Windows/Point";

/**
 * 遮罩窗口文本绘制对象
 * @since 0.43.1
 */
declare const textDrawableBrand: unique symbol;
export interface TextDrawable extends ClrHostValue {
  readonly [textDrawableBrand]: true;
  /**
   * 文本内容
   * @since 0.43.1
   */
  text: string;
  /**
   * 绘制位置
   * @since 0.43.1
   */
  point: System.Windows.Point;
  /**
   * 比较是否相等
   * @param obj 比较对象
   * @since 0.43.1
   */
  equals(obj: unknown | null): boolean;
  /**
   * 返回哈希码
   * @since 0.43.1
   */
  getHashCode(): number;
  /**
   * 是否为空文本
   * @since 0.43.1
   */
  readonly isEmpty: boolean;
}

declare global {
  namespace BetterGenshinImpact.View.Drawable {
    type TextDrawable = import("./TextDrawable").TextDrawable;
  }
}

export interface TextDrawableHostType extends HostType<TextDrawable, ReferenceTypeTrait> {
  /**
   * 按文本与位置构造绘制对象
   * @param text 文本内容
   * @param point 绘制位置
   * @since 0.43.1
   */
  new (text: string, point: System.Windows.Point): TextDrawable;
}

export {};
