import type {
  ClrHostValue,
  EnumTypeTrait,
  HostType
} from "../../../Microsoft/ClearScript/HostType";
import "../../../System/Enum";
import "../../../System/IComparable";
import "../../../System/IConvertible";
import "../../../System/IFormattable";
import "../../../System/ISpanFormattable";

/**
 * 识别类型
 * @since 0.43.1
 */
declare const recognitionTypesBrand: unique symbol;
export interface RecognitionTypes extends ClrHostValue {
  readonly [recognitionTypesBrand]: true;
}

declare global {
  namespace BetterGenshinImpact.Core.Recognition {
    type RecognitionTypes = import("./RecognitionTypes").RecognitionTypes;
  }
}

export interface RecognitionTypesHostType extends HostType<RecognitionTypes, EnumTypeTrait> {
  /**
   * 无识别
   * @since 0.43.1
   */
  readonly none: RecognitionTypes;
  /**
   * 模板匹配
   * @since 0.43.1
   */
  readonly templateMatch: RecognitionTypes;
  /**
   * 颜色匹配
   * @since 0.43.1
   */
  readonly colorMatch: RecognitionTypes;
  /**
   * 文字识别并匹配
   * @since 0.43.1
   */
  readonly ocrMatch: RecognitionTypes;
  /**
   * 仅文字识别
   * @since 0.43.1
   */
  readonly ocr: RecognitionTypes;
  /**
   * 提取指定颜色后进行文字识别
   * @since 0.43.1
   */
  readonly colorRangeAndOcr: RecognitionTypes;
  /**
   * 目标检测
   * @since 0.43.1
   */
  readonly detect: RecognitionTypes;
}

export {};
