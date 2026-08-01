import type {
  DoubleHost,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../../Microsoft/ClearScript/VoidResult";
import "../../../../OpenCvSharp/Mat";
import "../../../../OpenCvSharp/Size";
import "../../../../System/Drawing/Pen";
import "../../../../System/IDisposable";
import "../../../../System/ValueTuple";
import "../../../View/Drawable/DrawContent";
import "../../../View/Drawable/LineDrawable";
import "../../../View/Drawable/RectDrawable";
import "./Converter/INodeConverter";
import "./ImageRegion";
import "./Region";

/**
 * 游戏截图区域，位于桌面坐标系中的游戏捕获画面，并负责转换到遮罩窗口坐标
 * @since 0.43.1
 */
declare const gameCaptureRegionBrand: unique symbol;
export interface GameCaptureRegion
  extends
    Omit<
      BetterGenshinImpact.GameTask.Model.Area.ImageRegion,
      "convertToLineDrawable" | "convertToRectDrawable" | "deriveTo1080P"
    >,
    System.IDisposableInput {
  readonly [gameCaptureRegionBrand]: true;
  /**
   * 将游戏截图坐标的矩形转换为遮罩窗口绘制对象
   * @param x 截图横坐标
   * @param y 截图纵坐标
   * @param w 矩形宽度
   * @param h 矩形高度
   * @param pen 画笔；省略时使用默认样式
   * @param name 绘制项名称
   * @since 0.43.1
   */
  convertToRectDrawable(
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>,
    w: number | StrongNumeric<Int32Host>,
    h: number | StrongNumeric<Int32Host>
  ): BetterGenshinImpact.View.Drawable.RectDrawable;
  convertToRectDrawable(
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>,
    w: number | StrongNumeric<Int32Host>,
    h: number | StrongNumeric<Int32Host>,
    pen: System.Drawing.Pen | null
  ): BetterGenshinImpact.View.Drawable.RectDrawable;
  convertToRectDrawable(
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>,
    w: number | StrongNumeric<Int32Host>,
    h: number | StrongNumeric<Int32Host>,
    pen: System.Drawing.Pen | null,
    name: string | null
  ): BetterGenshinImpact.View.Drawable.RectDrawable;
  /**
   * 将游戏截图坐标的直线转换为遮罩窗口绘制对象
   * @param x1 起点截图横坐标
   * @param y1 起点截图纵坐标
   * @param x2 终点截图横坐标
   * @param y2 终点截图纵坐标
   * @param pen 画笔；省略时使用默认样式
   * @param name 绘制项名称
   * @since 0.43.1
   */
  convertToLineDrawable(
    x1: number | StrongNumeric<Int32Host>,
    y1: number | StrongNumeric<Int32Host>,
    x2: number | StrongNumeric<Int32Host>,
    y2: number | StrongNumeric<Int32Host>
  ): BetterGenshinImpact.View.Drawable.LineDrawable;
  convertToLineDrawable(
    x1: number | StrongNumeric<Int32Host>,
    y1: number | StrongNumeric<Int32Host>,
    x2: number | StrongNumeric<Int32Host>,
    y2: number | StrongNumeric<Int32Host>,
    pen: System.Drawing.Pen | null
  ): BetterGenshinImpact.View.Drawable.LineDrawable;
  convertToLineDrawable(
    x1: number | StrongNumeric<Int32Host>,
    y1: number | StrongNumeric<Int32Host>,
    x2: number | StrongNumeric<Int32Host>,
    y2: number | StrongNumeric<Int32Host>,
    pen: System.Drawing.Pen | null,
    name: string | null
  ): BetterGenshinImpact.View.Drawable.LineDrawable;
  /**
   * 将大于 1080P 的截图统一缩放到 1080P 后返回图像区域
   * @since 0.43.1
   */
  deriveTo1080P(): BetterGenshinImpact.GameTask.Model.Area.ImageRegion;
}

declare global {
  namespace BetterGenshinImpact.GameTask.Model.Area {
    type GameCaptureRegion = import("./GameCaptureRegion").GameCaptureRegion;
  }
}

export interface GameCaptureRegionHostType extends HostType<GameCaptureRegion, ReferenceTypeTrait> {
  /**
   * 由截图矩阵构造游戏截图区域
   * @param mat 游戏窗口截图矩阵
   * @param initX 游戏窗口在桌面上的横坐标
   * @param initY 游戏窗口在桌面上的纵坐标
   * @param owner 父区域，通常为桌面区域
   * @param converter 到父区域的坐标转换器
   * @param drawContent 遮罩绘制上下文
   * @since 0.45.1
   */
  new (
    mat: OpenCvSharp.Mat,
    initX: number | StrongNumeric<Int32Host>,
    initY: number | StrongNumeric<Int32Host>
  ): GameCaptureRegion;
  new (
    mat: OpenCvSharp.Mat,
    initX: number | StrongNumeric<Int32Host>,
    initY: number | StrongNumeric<Int32Host>,
    owner: BetterGenshinImpact.GameTask.Model.Area.Region | null
  ): GameCaptureRegion;
  new (
    mat: OpenCvSharp.Mat,
    initX: number | StrongNumeric<Int32Host>,
    initY: number | StrongNumeric<Int32Host>,
    owner: BetterGenshinImpact.GameTask.Model.Area.Region | null,
    converter: BetterGenshinImpact.GameTask.Model.Area.Converter.INodeConverter | null
  ): GameCaptureRegion;
  new (
    mat: OpenCvSharp.Mat,
    initX: number | StrongNumeric<Int32Host>,
    initY: number | StrongNumeric<Int32Host>,
    owner: BetterGenshinImpact.GameTask.Model.Area.Region | null,
    converter: BetterGenshinImpact.GameTask.Model.Area.Converter.INodeConverter | null,
    drawContent: BetterGenshinImpact.View.Drawable.DrawContent | null
  ): GameCaptureRegion;
  /**
   * 在游戏截图坐标系点击；回调参数为当前捕获尺寸与到 1080P 的缩放比，魔法数字须按 1080P 编写
   * @param posFunc 根据捕获尺寸与 1080P 缩放比计算点击坐标的脚本回调，返回坐标 ValueTuple 宿主对象
   * @returns ClearScript 宿主空结果
   * @since 0.43.1
   */
  gameRegionClick(
    posFunc: (size: OpenCvSharp.Size, scale: number) => System.ValueTuple<number, number>
  ): VoidResult;
  /**
   * 在游戏截图坐标系移动鼠标；回调参数为当前捕获尺寸与到 1080P 的缩放比
   * @param posFunc 根据捕获尺寸与 1080P 缩放比计算目标坐标的脚本回调，返回坐标 ValueTuple 宿主对象
   * @returns ClearScript 宿主空结果
   * @since 0.43.1
   */
  gameRegionMove(
    posFunc: (size: OpenCvSharp.Size, scale: number) => System.ValueTuple<number, number>
  ): VoidResult;
  /**
   * 在游戏截图坐标系按偏移移动鼠标；回调参数为当前捕获尺寸与到 1080P 的缩放比
   * @param deltaFunc 根据捕获尺寸与 1080P 缩放比计算偏移量的脚本回调，返回偏移 ValueTuple 宿主对象
   * @returns ClearScript 宿主空结果
   * @since 0.43.1
   */
  gameRegionMoveBy(
    deltaFunc: (size: OpenCvSharp.Size, scale: number) => System.ValueTuple<number, number>
  ): VoidResult;
  /**
   * 按 1080P 坐标点击，自动换算到当前捕获分辨率
   * @param cx 1080P 横坐标
   * @param cy 1080P 纵坐标
   * @returns ClearScript 宿主空结果
   * @since 0.43.1
   */
  gameRegion1080PPosClick(
    cx: number | StrongNumeric<DoubleHost>,
    cy: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  /**
   * 按 1080P 坐标移动鼠标，自动换算到当前捕获分辨率
   * @param cx 1080P 横坐标
   * @param cy 1080P 纵坐标
   * @returns ClearScript 宿主空结果
   * @since 0.43.1
   */
  gameRegion1080PPosMove(
    cx: number | StrongNumeric<DoubleHost>,
    cy: number | StrongNumeric<DoubleHost>
  ): VoidResult;
}

export {};
