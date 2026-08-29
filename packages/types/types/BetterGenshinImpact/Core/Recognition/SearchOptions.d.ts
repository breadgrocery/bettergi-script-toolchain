import type {
  ClrHostValue,
  DoubleHost,
  EnumTypeTrait,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  StrongNumeric,
  ValueTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../../../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../../OpenCvSharp/Rect";
import "../../../OpenCvSharp/Size";
import "../../../System/Enum";
import "../../../System/IComparable";
import "../../../System/IConvertible";
import "../../../System/IEquatable";
import "../../../System/IFormattable";
import "../../../System/ISpanFormattable";
import "../../../System/Nullable";
import "../../../System/ValueType";

/**
 * 参考搜索的锚定方式；元素在画布右/下侧时通常使用右/下锚定，在左/上侧时通常使用左/上锚定，居中元素使用中心锚定并按画布中心加偏移缩放
 * Auto 按参考包围盒所在区域分别选择水平和垂直锚定，用于模拟游戏 UI 的响应式布局
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
   * 按参考包围盒中心的 0.4/0.6 分区模拟游戏 UI 的响应式布局
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
   * 参考画布坐标系中的独立搜索框；未指定时以 `RecognitionObject.referenceBoundingBox` 为基础搜索框，指定后与参考包围盒使用相同缩放和锚定规则转换到当前截图坐标系
   * @since 0.64.0
   */
  referenceSearchBox: OpenCvSharp.Rect | null;
  /**
   * 在基础搜索框外额外扩展的像素大小，Width 用于左右，Height 用于上下；未指定时默认四周各扩展 10px；当 expandPercent 有值时不生效
   * @since 0.49.0
   */
  expandSize: OpenCvSharp.Size | null;
  /**
   * 按当前截图宽高计算的四边扩展比例；左右乘截图宽度，上下乘截图高度，例如 0.05 表示 5%；优先于 expandSize，显式设置全零比例可关闭默认的 10px 扩展
   * @since 0.64.0
   */
  expandPercent: BetterGenshinImpact.Core.Recognition.SearchExpandRatio | null;
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

/**
 * 搜索区域四边的扩展比例，属性顺序与 XAML Thickness 的四参数顺序一致：Left、Top、Right、Bottom；值为直接参与计算的小数比例，例如 0.05 表示 5%
 * @since 0.64.0
 */
declare const searchExpandRatioBrand: unique symbol;
export interface SearchExpandRatio extends ClrHostValue {
  readonly [searchExpandRatioBrand]: true;
  /**
   * 左侧扩展比例，以当前截图宽度为基准
   * @since 0.64.0
   */
  left: number;
  /**
   * 上侧扩展比例，以当前截图高度为基准
   * @since 0.64.0
   */
  top: number;
  /**
   * 右侧扩展比例，以当前截图宽度为基准
   * @since 0.64.0
   */
  right: number;
  /**
   * 下侧扩展比例，以当前截图高度为基准
   * @since 0.64.0
   */
  bottom: number;
  /**
   * 四边比例是否均为有限且非负的数字；大于 1 的比例合法，最终搜索区域会被裁剪到截图边界
   * @since 0.64.0
   */
  readonly isValid: boolean;
  /**
   * 比较是否相等
   * @param obj 比较对象
   * @since 0.64.0
   */
  equals(obj: unknown | null): boolean;
  /**
   * 比较是否相等
   * @param other 另一扩展比例
   * @since 0.64.0
   */
  equals(other: BetterGenshinImpact.Core.Recognition.SearchExpandRatio): boolean;
  /**
   * 返回哈希码
   * @since 0.64.0
   */
  getHashCode(): number;
  /**
   * 返回字符串表示
   * @since 0.64.0
   */
  toString(): string;
  /**
   * 解构为左右上下四边比例
   * @param left 左侧扩展比例
   * @param top 上侧扩展比例
   * @param right 右侧扩展比例
   * @param bottom 下侧扩展比例
   * @returns ClearScript 宿主空结果
   * @since 0.64.0
   */
  deconstruct(
    left: HostVariableOut<number>,
    top: HostVariableOut<number>,
    right: HostVariableOut<number>,
    bottom: HostVariableOut<number>
  ): VoidResult;
}

declare global {
  namespace BetterGenshinImpact.Core.Recognition {
    type SearchExpandRatio = import("./SearchOptions").SearchExpandRatio;
  }
}

export interface SearchExpandRatioHostType extends HostType<SearchExpandRatio, ValueTypeTrait> {
  /**
   * 按左右上下四边比例构造
   * @param left 左侧扩展比例，以当前截图宽度为基准
   * @param top 上侧扩展比例，以当前截图高度为基准
   * @param right 右侧扩展比例，以当前截图宽度为基准
   * @param bottom 下侧扩展比例，以当前截图高度为基准
   * @since 0.64.0
   */
  new (
    left: number | StrongNumeric<DoubleHost>,
    top: number | StrongNumeric<DoubleHost>,
    right: number | StrongNumeric<DoubleHost>,
    bottom: number | StrongNumeric<DoubleHost>
  ): SearchExpandRatio;
}

export {};
