import type {
  ClrHostValue,
  DoubleHost,
  HostType,
  Int32Host,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../../Microsoft/ClearScript/VoidResult";
import "../../../../OpenCvSharp/Rect";
import "../../../../System/Drawing/Pen";
import "../../../../System/IDisposable";
import "../../../../System/ValueTuple";
import "../../../View/Drawable/DrawContent";
import "../../../View/Drawable/LineDrawable";
import "../../../View/Drawable/RectDrawable";
import "./Converter/INodeConverter";
import "./ImageRegion";

/**
 * 通用屏幕区域，描述矩形或点，并支持坐标转换、点击与遮罩绘制
 * @since 0.43.1
 */
declare const regionBrand: unique symbol;
export interface Region extends ClrHostValue, System.IDisposableInput {
  readonly [regionBrand]: true;
  /**
   * 左上角横坐标
   * @since 0.43.1
   */
  x: number;
  /**
   * 左上角纵坐标
   * @since 0.43.1
   */
  y: number;
  /**
   * 宽度
   * @since 0.43.1
   */
  width: number;
  /**
   * 高度
   * @since 0.43.1
   */
  height: number;
  /**
   * 上边界纵坐标
   * @since 0.43.1
   */
  top: number;
  /**
   * 下边界纵坐标
   * @since 0.43.1
   */
  readonly bottom: number;
  /**
   * 左边界横坐标
   * @since 0.43.1
   */
  left: number;
  /**
   * 右边界横坐标
   * @since 0.43.1
   */
  readonly right: number;
  /**
   * OCR 识别文本
   * @since 0.43.1
   */
  text: string;
  /**
   * 模板匹配得分，值越大表示匹配程度越高；非模板匹配结果为 null
   * @since 0.63.0
   */
  matchScore: number | null;
  /**
   * 上一层区域节点
   * @since 0.43.1
   */
  readonly prev: BetterGenshinImpact.GameTask.Model.Area.Region;
  /**
   * 本区域到上一层节点的坐标转换器
   * @since 0.43.1
   */
  readonly prevConverter: BetterGenshinImpact.GameTask.Model.Area.Converter.INodeConverter;
  /**
   * 后台点击本区域中心
   * @returns ClearScript 宿主空结果
   * @since 0.43.1
   */
  backgroundClick(): VoidResult;
  /**
   * 点击本区域中心；`region.derive(x,y).click()` 等效于 `region.clickTo(x,y)`
   * @since 0.43.1
   */
  click(): BetterGenshinImpact.GameTask.Model.Area.Region;
  /**
   * 双击本区域中心
   * @since 0.48.0
   */
  doubleClick(): BetterGenshinImpact.GameTask.Model.Area.Region;
  /**
   * 点击本区域内指定矩形的中心
   * @param dx 相对横坐标
   * @param dy 相对纵坐标
   * @returns ClearScript 宿主空结果
   * @since 0.43.1
   */
  clickTo(
    dx: number | StrongNumeric<DoubleHost>,
    dy: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  /**
   * 点击本区域内指定矩形的中心
   * @param x 相对横坐标
   * @param y 相对纵坐标
   * @param w 矩形宽度
   * @param h 矩形高度
   * @returns ClearScript 宿主空结果
   * @since 0.43.1
   */
  clickTo(
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>,
    w: number | StrongNumeric<Int32Host>,
    h: number | StrongNumeric<Int32Host>
  ): VoidResult;
  /**
   * 点击本区域内指定点
   * @param x 相对横坐标
   * @param y 相对纵坐标
   * @returns ClearScript 宿主空结果
   * @since 0.43.1
   */
  clickTo(x: number | StrongNumeric<Int32Host>, y: number | StrongNumeric<Int32Host>): VoidResult;
  /**
   * 移动鼠标到本区域中心；`region.derive(x,y).move()` 等效于 `region.moveTo(x,y)`
   * @returns ClearScript 宿主空结果
   * @since 0.43.1
   */
  move(): VoidResult;
  /**
   * 移动鼠标到本区域内指定矩形的中心
   * @param x 相对横坐标
   * @param y 相对纵坐标
   * @param w 矩形宽度
   * @param h 矩形高度
   * @returns ClearScript 宿主空结果
   * @since 0.43.1
   */
  moveTo(
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>,
    w: number | StrongNumeric<Int32Host>,
    h: number | StrongNumeric<Int32Host>
  ): VoidResult;
  /**
   * 移动鼠标到本区域内指定点
   * @param x 相对横坐标
   * @param y 相对纵坐标
   * @returns ClearScript 宿主空结果
   * @since 0.43.1
   */
  moveTo(x: number | StrongNumeric<Int32Host>, y: number | StrongNumeric<Int32Host>): VoidResult;
  /**
   * 在遮罩窗口绘制本区域
   * @param name 绘制项名称
   * @param pen 画笔；省略时使用默认样式
   * @returns ClearScript 宿主空结果
   * @since 0.43.1
   */
  drawSelf(name: string): VoidResult;
  drawSelf(name: string, pen: System.Drawing.Pen | null): VoidResult;
  /**
   * 在遮罩窗口绘制本区域内指定矩形
   * @param rect 相对矩形
   * @param name 绘制项名称
   * @param pen 画笔；省略时使用默认样式
   * @returns ClearScript 宿主空结果
   * @since 0.43.1
   */
  drawRect(rect: OpenCvSharp.Rect, name: string): VoidResult;
  /**
   * 在遮罩窗口绘制本区域内指定矩形
   * @param x 相对横坐标
   * @param y 相对纵坐标
   * @param w 矩形宽度
   * @param h 矩形高度
   * @param name 绘制项名称
   * @param pen 画笔；省略时使用默认样式
   * @returns ClearScript 宿主空结果
   * @since 0.43.1
   */
  drawRect(
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>,
    w: number | StrongNumeric<Int32Host>,
    h: number | StrongNumeric<Int32Host>,
    name: string
  ): VoidResult;
  drawRect(rect: OpenCvSharp.Rect, name: string, pen: System.Drawing.Pen | null): VoidResult;
  drawRect(
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>,
    w: number | StrongNumeric<Int32Host>,
    h: number | StrongNumeric<Int32Host>,
    name: string,
    pen: System.Drawing.Pen | null
  ): VoidResult;
  /**
   * 将本区域转换为遮罩窗口矩形绘制对象
   * @param name 绘制项名称
   * @param pen 画笔；省略时使用默认样式
   * @since 0.43.1
   */
  selfToRectDrawable(name: string): BetterGenshinImpact.View.Drawable.RectDrawable;
  selfToRectDrawable(
    name: string,
    pen: System.Drawing.Pen | null
  ): BetterGenshinImpact.View.Drawable.RectDrawable;
  /**
   * 将本区域内指定矩形转换为遮罩窗口绘制对象
   * @param rect 相对矩形
   * @param name 绘制项名称
   * @param pen 画笔；省略时使用默认样式
   * @since 0.43.1
   */
  toRectDrawable(
    rect: OpenCvSharp.Rect,
    name: string
  ): BetterGenshinImpact.View.Drawable.RectDrawable;
  /**
   * 将本区域内指定矩形转换为遮罩窗口绘制对象
   * @param x 相对横坐标
   * @param y 相对纵坐标
   * @param w 矩形宽度
   * @param h 矩形高度
   * @param name 绘制项名称
   * @param pen 画笔；省略时使用默认样式
   * @since 0.43.1
   */
  toRectDrawable(
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>,
    w: number | StrongNumeric<Int32Host>,
    h: number | StrongNumeric<Int32Host>,
    name: string
  ): BetterGenshinImpact.View.Drawable.RectDrawable;
  toRectDrawable(
    rect: OpenCvSharp.Rect,
    name: string,
    pen: System.Drawing.Pen | null
  ): BetterGenshinImpact.View.Drawable.RectDrawable;
  toRectDrawable(
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>,
    w: number | StrongNumeric<Int32Host>,
    h: number | StrongNumeric<Int32Host>,
    name: string,
    pen: System.Drawing.Pen | null
  ): BetterGenshinImpact.View.Drawable.RectDrawable;
  /**
   * 将本区域内指定直线转换为遮罩窗口绘制对象
   * @param x1 起点相对横坐标
   * @param y1 起点相对纵坐标
   * @param x2 终点相对横坐标
   * @param y2 终点相对纵坐标
   * @param name 绘制项名称
   * @param pen 画笔；省略时使用默认样式
   * @since 0.43.1
   */
  toLineDrawable(
    x1: number | StrongNumeric<Int32Host>,
    y1: number | StrongNumeric<Int32Host>,
    x2: number | StrongNumeric<Int32Host>,
    y2: number | StrongNumeric<Int32Host>,
    name: string
  ): BetterGenshinImpact.View.Drawable.LineDrawable;
  toLineDrawable(
    x1: number | StrongNumeric<Int32Host>,
    y1: number | StrongNumeric<Int32Host>,
    x2: number | StrongNumeric<Int32Host>,
    y2: number | StrongNumeric<Int32Host>,
    name: string,
    pen: System.Drawing.Pen | null
  ): BetterGenshinImpact.View.Drawable.LineDrawable;
  /**
   * 在遮罩窗口绘制本区域内指定直线
   * @param x1 起点相对横坐标
   * @param y1 起点相对纵坐标
   * @param x2 终点相对横坐标
   * @param y2 终点相对纵坐标
   * @param name 绘制项名称
   * @param pen 画笔；省略时使用默认样式
   * @returns ClearScript 宿主空结果
   * @since 0.43.1
   */
  drawLine(
    x1: number | StrongNumeric<Int32Host>,
    y1: number | StrongNumeric<Int32Host>,
    x2: number | StrongNumeric<Int32Host>,
    y2: number | StrongNumeric<Int32Host>,
    name: string
  ): VoidResult;
  drawLine(
    x1: number | StrongNumeric<Int32Host>,
    y1: number | StrongNumeric<Int32Host>,
    x2: number | StrongNumeric<Int32Host>,
    y2: number | StrongNumeric<Int32Host>,
    name: string,
    pen: System.Drawing.Pen | null
  ): VoidResult;
  /**
   * 将本区域坐标转换到游戏截图区域
   * @since 0.43.1
   */
  convertSelfPositionToGameCaptureRegion(): OpenCvSharp.Rect;
  /**
   * 将相对矩形转换到游戏截图区域坐标
   * @param x 相对横坐标
   * @param y 相对纵坐标
   * @param w 矩形宽度
   * @param h 矩形高度
   * @since 0.43.1
   */
  convertPositionToGameCaptureRegion(
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>,
    w: number | StrongNumeric<Int32Host>,
    h: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Rect;
  /**
   * 将相对点转换到游戏截图区域坐标
   * @param x 相对横坐标
   * @param y 相对纵坐标
   * @since 0.43.1
   */
  convertPositionToGameCaptureRegion(
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>
  ): System.ValueTuple<number, number>;
  /**
   * 将相对点转换到桌面区域坐标
   * @param x 相对横坐标
   * @param y 相对纵坐标
   * @since 0.43.1
   */
  convertPositionToDesktopRegion(
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>
  ): System.ValueTuple<number, number>;
  /**
   * 导出为 OpenCV 矩形
   * @since 0.43.1
   */
  toRect(): OpenCvSharp.Rect;
  /**
   * 派生为图像区域；调用方应使用 `using` 及时释放
   * @since 0.43.1
   */
  toImageRegion(): BetterGenshinImpact.GameTask.Model.Area.ImageRegion;
  /**
   * 检查是否为空区域
   * @since 0.43.1
   */
  isEmpty(): boolean;
  /**
   * 检查区域是否存在（非空）
   * @since 0.43.1
   */
  isExist(): boolean;
  /**
   * 释放资源
   * @returns ClearScript 宿主空结果
   * @since 0.43.1
   */
  dispose(): VoidResult;
  /**
   * 派生矩形子区域
   * @param rect 相对矩形
   * @since 0.43.1
   */
  derive(rect: OpenCvSharp.Rect): BetterGenshinImpact.GameTask.Model.Area.Region;
  /**
   * 派生矩形子区域
   * @param x 相对横坐标
   * @param y 相对纵坐标
   * @param w 矩形宽度
   * @param h 矩形高度
   * @since 0.43.1
   */
  derive(
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>,
    w: number | StrongNumeric<Int32Host>,
    h: number | StrongNumeric<Int32Host>
  ): BetterGenshinImpact.GameTask.Model.Area.Region;
  /**
   * 派生点子区域
   * @param x 相对横坐标
   * @param y 相对纵坐标
   * @since 0.43.1
   */
  derive(
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>
  ): BetterGenshinImpact.GameTask.Model.Area.Region;
}

declare global {
  namespace BetterGenshinImpact.GameTask.Model.Area {
    type Region = import("./Region").Region;
  }
}

export interface RegionHostType extends HostType<
  Region,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  /**
   * 构造空区域
   * @since 0.43.1
   */
  new (): Region;
  /**
   * 按坐标与尺寸构造区域
   * @param x 左上角横坐标
   * @param y 左上角纵坐标
   * @param width 宽度
   * @param height 高度
   * @param owner 父区域
   * @param converter 到父区域的坐标转换器
   * @param drawContent 遮罩绘制上下文
   * @since 0.43.1
   */
  new (
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>,
    width: number | StrongNumeric<Int32Host>,
    height: number | StrongNumeric<Int32Host>
  ): Region;
  new (
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>,
    width: number | StrongNumeric<Int32Host>,
    height: number | StrongNumeric<Int32Host>,
    owner: BetterGenshinImpact.GameTask.Model.Area.Region | null
  ): Region;
  new (
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>,
    width: number | StrongNumeric<Int32Host>,
    height: number | StrongNumeric<Int32Host>,
    owner: BetterGenshinImpact.GameTask.Model.Area.Region | null,
    converter: BetterGenshinImpact.GameTask.Model.Area.Converter.INodeConverter | null
  ): Region;
  new (
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>,
    width: number | StrongNumeric<Int32Host>,
    height: number | StrongNumeric<Int32Host>,
    owner: BetterGenshinImpact.GameTask.Model.Area.Region | null,
    converter: BetterGenshinImpact.GameTask.Model.Area.Converter.INodeConverter | null,
    drawContent: BetterGenshinImpact.View.Drawable.DrawContent | null
  ): Region;
  /**
   * 按 OpenCV 矩形构造区域
   * @param rect 矩形
   * @param owner 父区域
   * @param converter 到父区域的坐标转换器
   * @since 0.43.1
   */
  new (rect: OpenCvSharp.Rect): Region;
  new (
    rect: OpenCvSharp.Rect,
    owner: BetterGenshinImpact.GameTask.Model.Area.Region | null
  ): Region;
  new (
    rect: OpenCvSharp.Rect,
    owner: BetterGenshinImpact.GameTask.Model.Area.Region | null,
    converter: BetterGenshinImpact.GameTask.Model.Area.Converter.INodeConverter | null
  ): Region;
}

export {};
