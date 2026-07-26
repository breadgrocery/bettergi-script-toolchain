import type {
  ClrHostValue,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../../System/Collections/Concurrent/ConcurrentDictionary";
import "../../../System/Collections/Generic/List";
import "./LineDrawable";
import "./RectDrawable";
import "./TextDrawable";

/**
 * 遮罩窗口绘制内容集合
 * @since 0.43.1
 */
declare const drawContentBrand: unique symbol;
export interface DrawContent extends ClrHostValue {
  readonly [drawContentBrand]: true;
  /**
   * 按键分组的矩形绘制列表
   * @since 0.43.1
   */
  rectList: System.Collections.Concurrent.ConcurrentDictionary<
    string,
    System.Collections.Generic.List<BetterGenshinImpact.View.Drawable.RectDrawable>
  >;
  /**
   * 按键分组的文本绘制列表
   * @since 0.43.1
   */
  textList: System.Collections.Concurrent.ConcurrentDictionary<
    string,
    System.Collections.Generic.List<BetterGenshinImpact.View.Drawable.TextDrawable>
  >;
  /**
   * 按键分组的直线绘制列表
   * @since 0.43.1
   */
  lineList: System.Collections.Concurrent.ConcurrentDictionary<
    string,
    System.Collections.Generic.List<BetterGenshinImpact.View.Drawable.LineDrawable>
  >;
  /**
   * 写入或更新单个矩形绘制项
   * @param key 绘制项键
   * @param newRect 矩形绘制对象
   * @returns ClearScript 宿主空结果
   * @since 0.43.1
   */
  putRect(key: string, newRect: BetterGenshinImpact.View.Drawable.RectDrawable): VoidResult;
  /**
   * 写入或移除矩形绘制列表；列表为空或 null 时移除该键
   * @param key 绘制项键
   * @param list 矩形绘制列表
   * @returns ClearScript 宿主空结果
   * @since 0.43.1
   */
  putOrRemoveRectList(
    key: string,
    list: System.Collections.Generic.List<BetterGenshinImpact.View.Drawable.RectDrawable> | null
  ): VoidResult;
  /**
   * 移除指定键的矩形绘制项
   * @param key 绘制项键
   * @returns ClearScript 宿主空结果
   * @since 0.43.1
   */
  removeRect(key: string): VoidResult;
  /**
   * 写入或更新单个直线绘制项
   * @param key 绘制项键
   * @param newLine 直线绘制对象
   * @returns ClearScript 宿主空结果
   * @since 0.43.1
   */
  putLine(key: string, newLine: BetterGenshinImpact.View.Drawable.LineDrawable): VoidResult;
  /**
   * 移除指定键的直线绘制项
   * @param key 绘制项键
   * @returns ClearScript 宿主空结果
   * @since 0.43.1
   */
  removeLine(key: string): VoidResult;
  /**
   * 写入或移除文本绘制列表；列表为空或 null 时移除该键
   * @param key 绘制项键
   * @param list 文本绘制列表
   * @returns ClearScript 宿主空结果
   * @since 0.43.1
   */
  putOrRemoveTextList(
    key: string,
    list: System.Collections.Generic.List<BetterGenshinImpact.View.Drawable.TextDrawable> | null
  ): VoidResult;
  /**
   * 清理全部绘制内容
   * @returns ClearScript 宿主空结果
   * @since 0.43.1
   */
  clearAll(): VoidResult;
}

declare global {
  namespace BetterGenshinImpact.View.Drawable {
    type DrawContent = import("./DrawContent").DrawContent;
  }
}

export interface DrawContentHostType extends HostType<
  DrawContent,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  /**
   * 构造绘制内容集合
   * @since 0.43.1
   */
  new (): DrawContent;
}

export {};
