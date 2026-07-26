import "../../../../Fischless/WindowsInput/IMouseSimulator";
import type {
  DoubleHost,
  HostType,
  Int32Host,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../../Microsoft/ClearScript/VoidResult";
import "../../../../OpenCvSharp/Mat";
import "../../../../System/IDisposable";
import "./GameCaptureRegion";
import "./Region";

/**
 * 桌面区域，对应无缩放的桌面屏幕尺寸，主要用于点击与鼠标移动
 * @since 0.43.1
 */
declare const desktopRegionBrand: unique symbol;
export interface DesktopRegion
  extends
    Omit<
      BetterGenshinImpact.GameTask.Model.Area.Region,
      "derive" | "desktopRegionClick" | "desktopRegionMove"
    >,
    System.IDisposableInput {
  readonly [desktopRegionBrand]: true;
  /**
   * 在桌面坐标系点击指定矩形中心
   * @param x 桌面横坐标
   * @param y 桌面纵坐标
   * @param w 矩形宽度
   * @param h 矩形高度
   * @returns ClearScript 宿主空结果
   * @since 0.43.1
   */
  desktopRegionClick(
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>,
    w: number | StrongNumeric<Int32Host>,
    h: number | StrongNumeric<Int32Host>
  ): VoidResult;
  /**
   * 在桌面坐标系移动鼠标到指定矩形中心
   * @param x 桌面横坐标
   * @param y 桌面纵坐标
   * @param w 矩形宽度
   * @param h 矩形高度
   * @returns ClearScript 宿主空结果
   * @since 0.43.1
   */
  desktopRegionMove(
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>,
    w: number | StrongNumeric<Int32Host>,
    h: number | StrongNumeric<Int32Host>
  ): VoidResult;
  /**
   * 由截图矩阵派生游戏截图区域
   * @param captureMat 游戏窗口截图矩阵
   * @param x 游戏窗口在桌面上的横坐标
   * @param y 游戏窗口在桌面上的纵坐标
   * @since 0.45.1
   */
  derive(
    captureMat: OpenCvSharp.Mat,
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>
  ): BetterGenshinImpact.GameTask.Model.Area.GameCaptureRegion;
}

declare global {
  namespace BetterGenshinImpact.GameTask.Model.Area {
    type DesktopRegion = import("./DesktopRegion").DesktopRegion;
  }
}

export interface DesktopRegionHostType extends HostType<
  DesktopRegion,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  /**
   * 按指定桌面尺寸构造桌面区域
   * @param w 桌面宽度
   * @param h 桌面高度
   * @param iMouse 鼠标模拟器；省略时使用默认实现
   * @since 0.52.0
   */
  new (w: number | StrongNumeric<Int32Host>, h: number | StrongNumeric<Int32Host>): DesktopRegion;
  new (
    w: number | StrongNumeric<Int32Host>,
    h: number | StrongNumeric<Int32Host>,
    iMouse: Fischless.WindowsInput.IMouseSimulator | null
  ): DesktopRegion;
  /**
   * 按主屏幕工作区构造桌面区域
   * @since 0.52.0
   */
  new (): DesktopRegion;
  /**
   * 按主屏幕工作区与指定鼠标模拟器构造桌面区域
   * @param mouse 鼠标模拟器
   * @since 0.52.0
   */
  new (mouse: Fischless.WindowsInput.IMouseSimulator): DesktopRegion;
  /**
   * 按桌面坐标点击；每次重新计算屏幕大小
   * @param cx 桌面横坐标
   * @param cy 桌面纵坐标
   * @returns ClearScript 宿主空结果
   * @since 0.43.1
   */
  desktopRegionClick(
    cx: number | StrongNumeric<DoubleHost>,
    cy: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  /**
   * 按桌面坐标移动鼠标；每次重新计算屏幕大小
   * @param cx 桌面横坐标
   * @param cy 桌面纵坐标
   * @returns ClearScript 宿主空结果
   * @since 0.43.1
   */
  desktopRegionMove(
    cx: number | StrongNumeric<DoubleHost>,
    cy: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  /**
   * 按桌面像素偏移移动鼠标
   * @param dx 水平偏移
   * @param dy 垂直偏移
   * @returns ClearScript 宿主空结果
   * @since 0.43.1
   */
  desktopRegionMoveBy(
    dx: number | StrongNumeric<DoubleHost>,
    dy: number | StrongNumeric<DoubleHost>
  ): VoidResult;
}

export {};
