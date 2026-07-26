import type {
  ClrHostValue,
  EnumTypeTrait,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../../OpenCvSharp/Size";
import "../../../System/Enum";
import "../../../System/IComparable";
import "../../../System/IConvertible";
import "../../../System/IFormattable";
import "../../../System/ISpanFormattable";
import "../../../System/Nullable";

/**
 * 参考搜索的锚定方式；元素在画布右/下侧时通常使用右/下锚定，在左/上侧时通常使用左/上锚定，居中元素使用中心锚定并按画布中心加偏移缩放
 * @since 0.49.0
 */
declare const searchAnchorModeBrand: unique symbol;
export interface SearchAnchorMode extends ClrHostValue {
  readonly [searchAnchorModeBrand]: true;
}

declare global {
  namespace BetterGenshinImpact.Core.Recognition {
    type SearchAnchorMode = import("./SearchOptions").SearchAnchorMode;
  }
}

export interface SearchAnchorModeHostType extends HostType<SearchAnchorMode, EnumTypeTrait> {
  /**
   * 自动选择锚定方式
   * @since 0.49.0
   */
  readonly auto: SearchAnchorMode;
  /**
   * 左上锚定
   * @since 0.49.0
   */
  readonly topLeft: SearchAnchorMode;
  /**
   * 右上锚定
   * @since 0.49.0
   */
  readonly topRight: SearchAnchorMode;
  /**
   * 左下锚定
   * @since 0.49.0
   */
  readonly bottomLeft: SearchAnchorMode;
  /**
   * 右下锚定
   * @since 0.49.0
   */
  readonly bottomRight: SearchAnchorMode;
  /**
   * 中心锚定
   * @since 0.49.0
   */
  readonly center: SearchAnchorMode;
}

/**
 * 识别搜索选项
 * @since 0.49.0
 */
declare const searchOptionsBrand: unique symbol;
export interface SearchOptions extends ClrHostValue {
  readonly [searchOptionsBrand]: true;
  /**
   * 搜索锚定点；当输入图与参考图宽高比不一致时，决定缩放后的参考画布贴向哪一侧，缩放规则需与待匹配 UI 在不同分辨率下的布局缩放规则一致
   * @since 0.49.0
   */
  anchorMode: BetterGenshinImpact.Core.Recognition.SearchAnchorMode;
  /**
   * 在预测框外额外扩展的像素大小；未指定时默认四周各扩展 10px
   * @since 0.49.0
   */
  expandSize: OpenCvSharp.Size | null;
}

declare global {
  namespace BetterGenshinImpact.Core.Recognition {
    type SearchOptions = import("./SearchOptions").SearchOptions;
  }
}

export interface SearchOptionsHostType extends HostType<
  SearchOptions,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  /**
   * 创建识别搜索选项
   * @since 0.49.0
   */
  new (): SearchOptions;
}

export {};
