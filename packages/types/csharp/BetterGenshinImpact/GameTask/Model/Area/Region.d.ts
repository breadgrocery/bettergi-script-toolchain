import { Rect } from "mirada/dist/src/types/opencv";
import { Pen } from "../../../../System/Drawing/Pen";
import { LineDrawable } from "../../../View/Drawable/LineDrawable";
import { RectDrawable } from "../../../View/Drawable/RectDrawable";
import { INodeConverter } from "./Converter/INodeConverter";
import { ImageRegion } from "./ImageRegion";

export interface Region {
  /** 水平位置（像素） */
  x: number;

  /** 垂直位置（像素） */
  y: number;

  /** 区域宽度 */
  width: number;

  /** 区域高度 */
  height: number;

  /** 边界顶部垂直位置（像素） */
  top: number;

  /** 边界底部垂直位置（像素） */
  bottom: number;

  /** 边界左侧水平位置（像素） */
  left: number;

  /** 边界右侧水平位置（像素） */
  right: number;

  /** 存放OCR识别的结果文本 */
  text: string;

  /** 上一个区域 */
  prev: Region | null;

  /** 本区域节点向上一个区域节点坐标的转换器 */
  prevConverter: INodeConverter | null;

  /** 点击 [当前区域] 中心（后台模拟） */
  backgroundClick(): void;

  /** 点击 [当前区域] 中心 */
  click(): void;

  /** 点击 [当前区域] 指定位置 */
  clickTo(x: number, y: number): void;

  /** 点击 [当前区域] 指定位置 */
  clickTo(x: number, y: number, w: number, h: number): void;

  /** 移动鼠标到 [当前区域] 中心 */
  move(): void;

  /** 移动鼠标到指定位置 */
  moveTo(x: number, y: number): void;

  /** 移动鼠标到指定位置 */
  moveTo(x: number, y: number, w: number, h: number): void;

  /** 绘制当前区域 */
  drawSelf(name: string, pen?: Pen): void;

  /** 绘制矩形区域 */
  drawRect(x: number, y: number, w: number, h: number, name: string, pen?: Pen): void;

  /** 绘制矩形区域 */
  drawRect(rect: Rect, name: string, pen?: Pen): void;

  /** 将 [当前区域] 转换成 [遮罩窗口绘制矩形] */
  selfToRectDrawable(name: string, pen?: Pen): RectDrawable;

  /** 将 [区域] 转换成 [遮罩窗口绘制矩形] */
  toRectDrawable(rect: Rect, name: string, pen?: Pen): RectDrawable;

  /** 将 [区域] 转换成 [遮罩窗口绘制矩形] */
  toRectDrawable(x: number, y: number, w: number, h: number, name: string, pen?: Pen): RectDrawable;

  /** 将 [直线] 转换成 [遮罩窗口绘制直线] */
  toLineDrawable(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    name: string,
    pen?: Pen
  ): LineDrawable;

  /** 绘制直线 */
  drawLine(x1: number, y1: number, x2: number, y2: number, name: string, pen?: Pen): LineDrawable;

  /** 将当前区域的截图转换成矩形类型的区域 */
  convertSelfPositionToGameCaptureRegion(): Rect;

  /** 将指定区域的截图转换成矩形类型的区域 */
  convertPositionToGameCaptureRegion(x: number, y: number, w: number, h: number): Rect;

  /** 将指定区域的截图转换成位置元组 */
  convertPositionToGameCaptureRegion(x: number, y: number): [number, number];

  /** 将指定桌面区域的截图转换成位置元组 */
  convertPositionToDesktopRegion(x: number, y: number): [number, number];

  /** 生成一个新的矩形类型的区域 */
  toRect(): Rect;

  /** 生成一个新的图片类型的区域 */
  toImageRegion(): ImageRegion;

  /** 区域面积是否为空 */
  isEmpty(): boolean;

  /** 区域面积是否为空 */
  isExist(): boolean;

  /**
   * 派生一个点类型的区域
   * @param x 水平位置（像素）
   * @param y 垂直位置（像素）
   */
  derive(x: number, y: number): Region;

  /**
   * 派生一个点类型的区域
   * @param x 水平位置（像素）
   * @param y 垂直位置（像素）
   * @param w 宽度
   * @param h 高度
   */
  derive(x: number, y: number, w: number, h: number): Region;

  /**
   * 派生一个矩形类型的区域
   * @param rect 矩形
   */
  derive(rect: Rect): Region;
}
