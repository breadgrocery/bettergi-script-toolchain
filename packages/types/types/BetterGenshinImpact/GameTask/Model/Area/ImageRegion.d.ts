import type {
  DoubleHost,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../../Microsoft/ClearScript/VoidResult";
import "../../../../OpenCvSharp/Mat";
import "../../../../OpenCvSharp/Rect";
import "../../../../SixLabors/ImageSharp/Image";
import "../../../../SixLabors/ImageSharp/PixelFormats/Rgb24";
import "../../../../System/Action";
import "../../../../System/Collections/Generic/List";
import "../../../../System/IDisposable";
import "../../../Core/Recognition/RecognitionObject";
import "../../../View/Drawable/DrawContent";
import "./Converter/INodeConverter";
import "./Region";

/**
 * 图像区域，在通用区域基础上持有像素数据，供识别与裁剪
 * @since 0.43.1
 */
declare const imageRegionBrand: unique symbol;
export interface ImageRegion
  extends
    Omit<
      BetterGenshinImpact.GameTask.Model.Area.Region,
      "cacheGreyMat" | "cacheImage" | "deriveCrop" | "dispose" | "find" | "findMulti" | "srcMat"
    >,
    System.IDisposableInput {
  readonly [imageRegionBrand]: true;
  /**
   * 源图像矩阵
   * @since 0.43.1
   */
  readonly srcMat: OpenCvSharp.Mat;
  /**
   * 缓存的灰度矩阵
   * @since 0.46.0
   */
  readonly cacheGreyMat: OpenCvSharp.Mat;
  /**
   * 缓存的 RGB 图像
   * @since 0.43.1
   */
  readonly cacheImage: SixLabors.ImageSharp.Image<SixLabors.ImageSharp.PixelFormats.Rgb24>;
  /**
   * 按浮点坐标裁剪派生图像区域
   * @param dx 相对横坐标
   * @param dy 相对纵坐标
   * @param dw 裁剪宽度
   * @param dh 裁剪高度
   * @since 0.43.1
   */
  deriveCrop(
    dx: number | StrongNumeric<DoubleHost>,
    dy: number | StrongNumeric<DoubleHost>,
    dw: number | StrongNumeric<DoubleHost>,
    dh: number | StrongNumeric<DoubleHost>
  ): BetterGenshinImpact.GameTask.Model.Area.ImageRegion;
  /**
   * 按矩形裁剪派生图像区域
   * @param rect 相对裁剪矩形
   * @since 0.43.1
   */
  deriveCrop(rect: OpenCvSharp.Rect): BetterGenshinImpact.GameTask.Model.Area.ImageRegion;
  /**
   * 按整数坐标裁剪派生图像区域
   * @param x 相对横坐标
   * @param y 相对纵坐标
   * @param w 裁剪宽度
   * @param h 裁剪高度
   * @since 0.43.1
   */
  deriveCrop(
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>,
    w: number | StrongNumeric<Int32Host>,
    h: number | StrongNumeric<Int32Host>
  ): BetterGenshinImpact.GameTask.Model.Area.ImageRegion;
  /**
   * 在本区域内查找最优识别结果；支持模板匹配、OCR 匹配与 OCR 识别
   * @param ro 识别对象
   * @param successAction 找到时的回调
   * @param failAction 未找到时的回调
   * @returns 最优识别区域；未找到时为空区域
   * @since 0.43.1
   */
  find(
    ro: BetterGenshinImpact.Core.Recognition.RecognitionObject
  ): BetterGenshinImpact.GameTask.Model.Area.Region;
  find(
    ro: BetterGenshinImpact.Core.Recognition.RecognitionObject,
    successAction: System.Action<BetterGenshinImpact.GameTask.Model.Area.Region> | null
  ): BetterGenshinImpact.GameTask.Model.Area.Region;
  find(
    ro: BetterGenshinImpact.Core.Recognition.RecognitionObject,
    successAction: System.Action<BetterGenshinImpact.GameTask.Model.Area.Region> | null,
    failAction: System.Action | null
  ): BetterGenshinImpact.GameTask.Model.Area.Region;
  /**
   * 在本区域内查找全部识别结果；仅支持模板匹配与 OCR
   * @param ro 识别对象
   * @param successAction 找到时的回调
   * @param failAction 未找到时的回调
   * @returns 识别区域列表，不含内嵌图像
   * @since 0.43.1
   */
  findMulti(
    ro: BetterGenshinImpact.Core.Recognition.RecognitionObject
  ): System.Collections.Generic.List<BetterGenshinImpact.GameTask.Model.Area.Region>;
  findMulti(
    ro: BetterGenshinImpact.Core.Recognition.RecognitionObject,
    successAction: System.Action<
      System.Collections.Generic.List<BetterGenshinImpact.GameTask.Model.Area.Region>
    > | null
  ): System.Collections.Generic.List<BetterGenshinImpact.GameTask.Model.Area.Region>;
  findMulti(
    ro: BetterGenshinImpact.Core.Recognition.RecognitionObject,
    successAction: System.Action<
      System.Collections.Generic.List<BetterGenshinImpact.GameTask.Model.Area.Region>
    > | null,
    failAction: System.Action | null
  ): System.Collections.Generic.List<BetterGenshinImpact.GameTask.Model.Area.Region>;
  /**
   * 释放资源
   * @returns ClearScript 宿主空结果
   * @since 0.43.1
   */
  dispose(): VoidResult;
}

declare global {
  namespace BetterGenshinImpact.GameTask.Model.Area {
    type ImageRegion = import("./ImageRegion").ImageRegion;
  }
}

export interface ImageRegionHostType extends HostType<ImageRegion, ReferenceTypeTrait> {
  /**
   * 由图像矩阵构造图像区域
   * @param mat 源图像矩阵
   * @param x 在父坐标系中的横坐标
   * @param y 在父坐标系中的纵坐标
   * @param owner 父区域
   * @param converter 到父区域的坐标转换器
   * @param drawContent 遮罩绘制上下文
   * @since 0.45.1
   */
  new (
    mat: OpenCvSharp.Mat,
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>
  ): ImageRegion;
  new (
    mat: OpenCvSharp.Mat,
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>,
    owner: BetterGenshinImpact.GameTask.Model.Area.Region | null
  ): ImageRegion;
  new (
    mat: OpenCvSharp.Mat,
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>,
    owner: BetterGenshinImpact.GameTask.Model.Area.Region | null,
    converter: BetterGenshinImpact.GameTask.Model.Area.Converter.INodeConverter | null
  ): ImageRegion;
  new (
    mat: OpenCvSharp.Mat,
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>,
    owner: BetterGenshinImpact.GameTask.Model.Area.Region | null,
    converter: BetterGenshinImpact.GameTask.Model.Area.Converter.INodeConverter | null,
    drawContent: BetterGenshinImpact.View.Drawable.DrawContent | null
  ): ImageRegion;
}

export {};
