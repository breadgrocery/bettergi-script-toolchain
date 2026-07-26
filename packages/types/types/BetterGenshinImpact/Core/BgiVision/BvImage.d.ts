import type {
  ClrHostValue,
  DoubleHost,
  HostType,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../Microsoft/ClearScript/HostType";
import "../../../OpenCvSharp/Rect";
import "../Recognition/RecognitionObject";

/**
 * BgiVision 模板图像，由资源路径构建识别配置
 * @since 0.57.0
 */
declare const bvImageBrand: unique symbol;
export interface BvImage extends ClrHostValue {
  readonly [bvImageBrand]: true;
  /**
   * 识别配置
   * @since 0.57.0
   */
  readonly recognitionObject: BetterGenshinImpact.Core.Recognition.RecognitionObject;
  /**
   * 获取对应的识别配置
   * @returns 当前图像关联的识别配置
   * @since 0.57.0
   */
  toRecognitionObject(): BetterGenshinImpact.Core.Recognition.RecognitionObject;
}

declare global {
  namespace BetterGenshinImpact.Core.BgiVision {
    type BvImage = import("./BvImage").BvImage;
  }
}

export interface BvImageHostType extends HostType<BvImage, ReferenceTypeTrait> {
  /**
   * 由模板资源路径创建 BgiVision 图像
   * @param templateAssert 模板资源路径，格式为 featureName:assertName
   * @param roi 感兴趣区域
   * @param threshold 模板匹配阈值，默认 0.8
   * @since 0.57.0
   */
  new (templateAssert: string): BvImage;
  new (templateAssert: string, roi: OpenCvSharp.Rect): BvImage;
  new (
    templateAssert: string,
    roi: OpenCvSharp.Rect,
    threshold: number | StrongNumeric<DoubleHost>
  ): BvImage;
}

export {};
