import type {
  ClrHostValue,
  HostType,
  ReferenceTypeTrait
} from "../../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../../Microsoft/ClearScript/VoidResult";
import "../../../../System/Collections/Generic/List";
import "../../../../System/IDisposable";
import "../../../GameTask/Model/Area/Region";

/**
 * YOLO ONNX 推理配置选项
 * @since 0.67.0
 */
export interface YoloDetectionOptions {
  /**
   * 置信度阈值（默认 0.3）
   * @since 0.67.0
   */
  confidence?: number;
  /**
   * NMS 的 IoU 阈值（默认 0.45）
   * @since 0.67.0
   */
  iou?: number;
  /**
   * 是否保持宽高比并留边（默认 true）
   * @since 0.67.0
   */
  keepAspectRatio?: boolean;
  /**
   * 是否根据图像方向标记校正图像（默认 true）
   * @since 0.67.0
   */
  applyAutoOrient?: boolean;
  /**
   * 是否等待并发推理（默认 false）
   * @since 0.67.0
   */
  suppressParallelInference?: boolean;
  [key: string]: unknown;
}

/**
 * YOLO ONNX 目标检测区域，继承自 Region 并携带识别类别与置信度
 * @since 0.67.0
 */
declare const yoloRegionBrand: unique symbol;
export interface YoloRegion extends BetterGenshinImpact.GameTask.Model.Area.Region {
  readonly [yoloRegionBrand]: true;
  /**
   * 类别 ID
   * @since 0.67.0
   */
  readonly id: number;
  /**
   * 类别名称
   * @since 0.67.0
   */
  readonly name: string;
  /**
   * 置信度
   * @since 0.67.0
   */
  readonly confidence: number;
}

export interface YoloRegionHostType extends HostType<YoloRegion, ReferenceTypeTrait> {}

/**
 * YOLO ONNX 图像分类结果
 * @since 0.67.0
 */
declare const yoloClassificationBrand: unique symbol;
export interface YoloClassification extends ClrHostValue {
  readonly [yoloClassificationBrand]: true;
  /**
   * 类别 ID
   * @since 0.67.0
   */
  readonly id: number;
  /**
   * 类别名称
   * @since 0.67.0
   */
  readonly name: string;
  /**
   * 置信度
   * @since 0.67.0
   */
  readonly confidence: number;
}

export interface YoloClassificationHostType extends HostType<
  YoloClassification,
  ReferenceTypeTrait
> {}

/**
 * YOLO ONNX 推理预测器
 * @since 0.67.0
 */
declare const scriptYoloPredictorBrand: unique symbol;
export interface ScriptYoloPredictor extends ClrHostValue, System.IDisposableInput {
  readonly [scriptYoloPredictorBrand]: true;
  /**
   * 对当前游戏画面执行目标检测
   * @param options 可选推理配置参数
   * @returns 检测到的 YOLO 区域列表
   * @since 0.67.0
   */
  detect(
    options?: YoloDetectionOptions | null
  ): System.Collections.Generic.List<BetterGenshinImpact.Core.Script.Dependence.YoloRegion>;
  /**
   * 对当前游戏画面执行图像分类
   * @param options 可选推理配置参数
   * @returns 按置信度降序排列的分类结果列表
   * @since 0.67.0
   */
  classify(
    options?: YoloDetectionOptions | null
  ): System.Collections.Generic.List<BetterGenshinImpact.Core.Script.Dependence.YoloClassification>;
  /**
   * 释放预测器占用的推理资源
   * @since 0.67.0
   */
  dispose(): VoidResult;
}

export interface ScriptYoloPredictorHostType extends HostType<
  ScriptYoloPredictor,
  ReferenceTypeTrait
> {}

/**
 * YOLO 预测器工厂
 * @since 0.67.0
 */
declare const yoloPredictorFactoryBrand: unique symbol;
export interface YoloPredictorFactory extends ClrHostValue {
  readonly [yoloPredictorFactoryBrand]: true;
  /**
   * 创建基于 ONNX 模型的 YOLO 预测器
   * @param modelPath 相对于脚本工程根目录的模型路径（必须以 .onnx 结尾）
   * @param options 可选基准推理配置
   * @returns 绑定到当前运行环境的预测器
   * @since 0.67.0
   */
  createPredictor(
    modelPath: string,
    options?: YoloDetectionOptions | null
  ): BetterGenshinImpact.Core.Script.Dependence.ScriptYoloPredictor;
}

declare global {
  namespace BetterGenshinImpact.Core.Script.Dependence {
    type YoloRegion = import("./YoloPredictorFactory").YoloRegion;
    type YoloClassification = import("./YoloPredictorFactory").YoloClassification;
    type ScriptYoloPredictor = import("./YoloPredictorFactory").ScriptYoloPredictor;
    type YoloPredictorFactory = import("./YoloPredictorFactory").YoloPredictorFactory;
  }
}

export interface YoloPredictorFactoryHostType extends HostType<
  YoloPredictorFactory,
  ReferenceTypeTrait
> {}

export {};
