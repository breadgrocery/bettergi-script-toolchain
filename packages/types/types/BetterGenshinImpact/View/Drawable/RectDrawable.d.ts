import type {
  ClrHostValue,
  HostType,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../../System/Drawing/Pen";
import "../../../System/Windows/Rect";

/**
 * 遮罩窗口矩形绘制对象
 * @since 0.43.1
 */
declare const rectDrawableBrand: unique symbol;
export interface RectDrawable extends ClrHostValue {
  readonly [rectDrawableBrand]: true;
  /**
   * 绘制项名称
   * @since 0.43.1
   */
  name: string;
  /**
   * 矩形
   * @since 0.43.1
   */
  readonly rect: System.Windows.Rect;
  /**
   * 画笔
   * @since 0.43.1
   */
  readonly pen: System.Drawing.Pen;
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
   * 是否为空矩形
   * @since 0.43.1
   */
  readonly isEmpty: boolean;
}

declare global {
  namespace BetterGenshinImpact.View.Drawable {
    type RectDrawable = import("./RectDrawable").RectDrawable;
  }
}

export interface RectDrawableHostType extends HostType<RectDrawable, ReferenceTypeTrait> {
  /**
   * 按矩形构造绘制对象
   * @param rect 矩形
   * @param pen 画笔；省略时使用默认红色
   * @param name 绘制项名称
   * @since 0.43.1
   */
  new (rect: System.Windows.Rect): RectDrawable;
  new (rect: System.Windows.Rect, pen: System.Drawing.Pen | null): RectDrawable;
  new (
    rect: System.Windows.Rect,
    pen: System.Drawing.Pen | null,
    name: string | null
  ): RectDrawable;
  /**
   * 按矩形与名称构造绘制对象
   * @param rect 矩形
   * @param name 绘制项名称
   * @since 0.43.1
   */
  new (rect: System.Windows.Rect, name: string | null): RectDrawable;
}

export {};
