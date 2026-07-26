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
 * OCR 引擎类型
 * @since 0.43.1
 */
declare const ocrEngineTypesBrand: unique symbol;
export interface OcrEngineTypes extends ClrHostValue {
  readonly [ocrEngineTypesBrand]: true;
}

declare global {
  namespace BetterGenshinImpact.Core.Recognition {
    type OcrEngineTypes = import("./OcrEngineTypes").OcrEngineTypes;
  }
}

export interface OcrEngineTypesHostType extends HostType<OcrEngineTypes, EnumTypeTrait> {
  /**
   * Paddle OCR 引擎
   * @since 0.43.1
   */
  readonly paddle: OcrEngineTypes;
  /**
   * Yas 专用 OCR 模型
   * @since 0.43.1
   */
  readonly yasModel: OcrEngineTypes;
  /**
   * Yap 专用 OCR 模型
   * @since 0.43.1
   */
  readonly yapModel: OcrEngineTypes;
}

export {};
