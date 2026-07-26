import type {
  ClrHostValue,
  DoubleHost,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../../OpenCvSharp/Mat";
import "../../System/IDisposable";
import "./Common/BgiVision/BvStatus";
import "./Model/Area/ImageRegion";

/**
 * 单帧捕获内容，供多个触发器共享截图与界面分类
 * @since 0.43.1
 */
declare const captureContentBrand: unique symbol;
export interface CaptureContent extends ClrHostValue, System.IDisposableInput {
  readonly [captureContentBrand]: true;
  /**
   * 帧序号
   * @since 0.43.1
   */
  readonly frameIndex: number;
  /**
   * 定时器间隔（毫秒）
   * @since 0.43.1
   */
  readonly timerInterval: number;
  /**
   * 帧率
   * @since 0.43.1
   */
  readonly frameRate: number;
  /**
   * 捕获图像区域，已按需缩放到 1080P
   * @since 0.43.1
   */
  readonly captureRectArea: BetterGenshinImpact.GameTask.Model.Area.ImageRegion;
  /**
   * 当前游戏界面分类
   * @since 0.43.1
   */
  currentGameUiCategory: BetterGenshinImpact.GameTask.Common.BgiVision.GameUiCategory;
  /**
   * 释放资源
   * @returns ClearScript 宿主空结果
   * @since 0.43.1
   */
  dispose(): VoidResult;
}

declare global {
  namespace BetterGenshinImpact.GameTask {
    type CaptureContent = import("./CaptureContent").CaptureContent;
  }
}

export interface CaptureContentHostType extends HostType<CaptureContent, ReferenceTypeTrait> {
  /**
   * 由截图矩阵构造捕获内容，并派生 1080P 图像区域
   * @param image 原始截图矩阵
   * @param frameIndex 帧序号
   * @param interval 定时器间隔（毫秒）
   * @since 0.43.1
   */
  new (
    image: OpenCvSharp.Mat,
    frameIndex: number | StrongNumeric<Int32Host>,
    interval: number | StrongNumeric<DoubleHost>
  ): CaptureContent;
  /**
   * 由已有图像区域构造捕获内容
   * @param ra 图像区域
   * @since 0.43.1
   */
  new (ra: BetterGenshinImpact.GameTask.Model.Area.ImageRegion): CaptureContent;
  /**
   * 帧序号对应的最大秒数
   * @since 0.43.1
   */
  readonly maxFrameIndexSecond: number;
}

export {};
