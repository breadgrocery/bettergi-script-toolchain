import type {
  ClrHostValue,
  DoubleHost,
  HostType,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../Microsoft/ClearScript/HostType";
import "../../../System/Drawing/Pen";
import "../../../System/Windows/Point";

/**
 * 遮罩窗口直线绘制对象
 * @since 0.43.1
 */
declare const lineDrawableBrand: unique symbol;
export interface LineDrawable extends ClrHostValue {
  readonly [lineDrawableBrand]: true;
  /**
   * 起点
   * @since 0.43.1
   */
  p1: System.Windows.Point;
  /**
   * 终点
   * @since 0.43.1
   */
  p2: System.Windows.Point;
  /**
   * 画笔
   * @since 0.43.1
   */
  pen: System.Drawing.Pen;
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
}

declare global {
  namespace BetterGenshinImpact.View.Drawable {
    type LineDrawable = import("./LineDrawable").LineDrawable;
  }
}

export interface LineDrawableHostType extends HostType<LineDrawable, ReferenceTypeTrait> {
  /**
   * 按端点坐标构造直线绘制对象
   * @param x1 起点横坐标
   * @param y1 起点纵坐标
   * @param x2 终点横坐标
   * @param y2 终点纵坐标
   * @since 0.43.1
   */
  new (
    x1: number | StrongNumeric<DoubleHost>,
    y1: number | StrongNumeric<DoubleHost>,
    x2: number | StrongNumeric<DoubleHost>,
    y2: number | StrongNumeric<DoubleHost>
  ): LineDrawable;
  /**
   * 按端点构造直线绘制对象
   * @param p1 起点
   * @param p2 终点
   * @since 0.43.1
   */
  new (p1: System.Windows.Point, p2: System.Windows.Point): LineDrawable;
}

export {};
