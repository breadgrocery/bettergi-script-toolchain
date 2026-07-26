import "../../../../Compunet/YoloSharp/YoloPredictor";
import type {
  ClrHostValue,
  HostType,
  ReferenceTypeTrait
} from "../../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../../Microsoft/ClearScript/VoidResult";
import "../../../../OpenCvSharp/Rect";
import "../../../../System/Collections/Generic/Dictionary";
import "../../../../System/Collections/Generic/List";
import "../../../../System/IDisposable";
import "../../../GameTask/Model/Area/ImageRegion";

/**
 * YOLO 目标检测预测器
 * @since 0.52.0
 */
declare const bgiYoloPredictorBrand: unique symbol;
export interface BgiYoloPredictor extends ClrHostValue, System.IDisposableInput {
  readonly [bgiYoloPredictorBrand]: true;
  /**
   * 底层 YOLO 预测器
   * @since 0.52.0
   */
  readonly predictor: Compunet.YoloSharp.YoloPredictor;
  /**
   * 对图像区域执行 YOLO 检测
   * @param region 待检测的图像区域
   * @returns 类别名称到矩形框列表的映射
   * @since 0.52.0
   */
  detect(
    region: BetterGenshinImpact.GameTask.Model.Area.ImageRegion
  ): System.Collections.Generic.Dictionary<
    string,
    System.Collections.Generic.List<OpenCvSharp.Rect>
  >;
  /**
   * 释放资源
   * @returns ClearScript 宿主空结果
   * @since 0.52.0
   */
  dispose(): VoidResult;
}

declare global {
  namespace BetterGenshinImpact.Core.Recognition.ONNX {
    type BgiYoloPredictor = import("./BgiYoloPredictor").BgiYoloPredictor;
  }
}

export interface BgiYoloPredictorHostType extends HostType<BgiYoloPredictor, ReferenceTypeTrait> {}

export {};
