import type {
  ClrHostValue,
  DoubleHost,
  HostArray,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../Microsoft/ClearScript/HostType";
import "../../../OpenCvSharp/ColorConversionCodes";
import "../../../OpenCvSharp/Mat";
import "../../../OpenCvSharp/Rect";
import "../../../OpenCvSharp/Scalar";
import "../../../OpenCvSharp/Size";
import "../../../OpenCvSharp/TemplateMatchModes";
import "../../../System/Collections/Generic/Dictionary";
import "../../../System/Collections/Generic/List";
import "../../../System/Drawing/Color";
import "../../../System/Drawing/Pen";
import "../../../System/Nullable";
import "./OcrEngineTypes";
import "./RecognitionTypes";
import "./SearchOptions";

/**
 * 识别配置，描述模板匹配、颜色匹配与 OCR 等识别参数
 * @since 0.43.1
 */
declare const recognitionObjectBrand: unique symbol;
export interface RecognitionObject extends ClrHostValue {
  readonly [recognitionObjectBrand]: true;
  /**
   * 识别类型
   * @since 0.43.1
   */
  recognitionType: BetterGenshinImpact.Core.Recognition.RecognitionTypes;
  /**
   * 感兴趣区域；指定后仅在该区域内搜索
   * @since 0.43.1
   */
  regionOfInterest: OpenCvSharp.Rect;
  /**
   * 识别对象名称，可为空
   * @since 0.43.1
   */
  name: string;
  /**
   * 模板图或识别区域所在捕获画布的尺寸，例如 1920×1080、3840×2160，对应模板截取来源图像大小
   * @since unreleased
   */
  referenceImageSize: OpenCvSharp.Size | null;
  /**
   * 模板图或识别区域在截取来源图像中的位置与大小；模板匹配时宽高通常等于模板图尺寸，语义接近 bbox
   * @since unreleased
   */
  referenceBoundingBox: OpenCvSharp.Rect | null;
  /**
   * 查找位置时的搜索选项；未指定时使用默认机制
   * @since unreleased
   */
  searchOptions: BetterGenshinImpact.Core.Recognition.SearchOptions;
  /**
   * 彩色模板图
   * @since 0.43.1
   */
  templateImageMat: OpenCvSharp.Mat;
  /**
   * 灰度模板图
   * @since 0.43.1
   */
  templateImageGreyMat: OpenCvSharp.Mat;
  /**
   * 模板匹配阈值。可选，默认 0.8
   * @since 0.43.1
   */
  threshold: number;
  /**
   * 是否使用 3 通道匹配。可选，默认 false
   * @since 0.43.1
   */
  use3Channels: boolean;
  /**
   * 模板匹配算法。可选，默认 CCoeffNormed
   * @see OpenCV TemplateMatchModes：https://docs.opencv.org/4.x/df/dfb/group__imgproc__object.html
   * @since 0.43.1
   */
  templateMatchMode: OpenCvSharp.TemplateMatchModes;
  /**
   * 是否启用模板遮罩以忽略指定颜色；使用时需将模板背景设为纯绿色 (0, 255, 0)
   * @since 0.43.1
   */
  useMask: boolean;
  /**
   * 遮罩忽略色，默认绿色；仅在 useMask 为 true 时生效
   * @since 0.43.1
   */
  maskColor: System.Drawing.Color;
  /**
   * 遮罩矩阵
   * @since 0.43.1
   */
  maskMat: OpenCvSharp.Mat;
  /**
   * 匹配成功时是否在窗口上绘制矩形框。可选，默认 false；为 true 时 name 必须有值
   * @since 0.43.1
   */
  drawOnWindow: boolean;
  /**
   * 绘制矩形框使用的画笔，默认红色；仅在 drawOnWindow 为 true 时生效
   * @since 0.43.1
   */
  drawOnWindowPen: System.Drawing.Pen;
  /**
   * 单次模板匹配的最大结果数。可选，默认 -1 表示不限制
   * @since 0.43.1
   */
  maxMatchCount: number;
  /**
   * 是否启用二值化后模板匹配
   * @since 0.52.0
   */
  useBinaryMatch: boolean;
  /**
   * 二值化阈值，默认 128
   * @since 0.52.0
   */
  binaryThreshold: number;
  /**
   * 初始化灰度模板与遮罩矩阵
   * @returns 初始化后的识别配置
   * @since 0.43.1
   */
  initTemplate(): BetterGenshinImpact.Core.Recognition.RecognitionObject;
  /**
   * 颜色匹配使用的色彩空间转换码，对应 cv::ColorConversionCodes。可选，默认 4 (RGB)。常用值：4 (RGB, 3 通道)、40 (HSV, 3 通道)、6 (GRAY, 1 通道)
   * @see OpenCV ColorConversionCodes：https://docs.opencv.org/4.x/d8/d01/group__imgproc__color__conversions.html
   * @since 0.43.1
   */
  colorConversionCode: OpenCvSharp.ColorConversionCodes;
  /**
   * 颜色匹配下界
   * @since 0.43.1
   */
  lowerColor: OpenCvSharp.Scalar;
  /**
   * 颜色匹配上界
   * @since 0.43.1
   */
  upperColor: OpenCvSharp.Scalar;
  /**
   * 颜色匹配所需最少点数。可选，默认 1
   * @since 0.43.1
   */
  matchCount: number;
  /**
   * OCR 引擎。可选，当前仅支持 Paddle
   * @since 0.43.1
   */
  ocrEngine: BetterGenshinImpact.Core.Recognition.OcrEngineTypes;
  /**
   * OCR 结果纠错替换表。可选
   * @since 0.43.1
   */
  replaceDictionary: System.Collections.Generic.Dictionary<string, HostArray<string>>;
  /**
   * 包含匹配文本列表；全部命中才算成功，用于确认单个目标是否存在。复杂情况请改用正则匹配
   * @since 0.43.1
   */
  allContainMatchText: System.Collections.Generic.List<string>;
  /**
   * 包含匹配文本列表；任一命中即成功，用于确认单个目标是否存在
   * @since 0.43.1
   */
  oneContainMatchText: System.Collections.Generic.List<string>;
  /**
   * 正则匹配文本列表；全部命中才算成功，用于确认单个目标是否存在
   * @since 0.43.1
   */
  regexMatchText: System.Collections.Generic.List<string>;
  /**
   * 多结果 OCR 匹配使用的目标文本
   * @since 0.48.0
   */
  text: string;
  /**
   * 克隆当前识别配置
   * @returns 克隆得到的识别配置
   * @since 0.49.0
   */
  clone(): BetterGenshinImpact.Core.Recognition.RecognitionObject;
}

declare global {
  namespace BetterGenshinImpact.Core.Recognition {
    type RecognitionObject = import("./RecognitionObject").RecognitionObject;
  }
}

export interface RecognitionObjectHostType extends HostType<
  RecognitionObject,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  /**
   * 创建空识别配置
   * @since 0.43.1
   */
  new (): RecognitionObject;
  /**
   * 对整幅画面执行 OCR 的预置识别配置
   * @since 0.43.1
   */
  ocrThis: BetterGenshinImpact.Core.Recognition.RecognitionObject;
  /**
   * 创建模板匹配识别配置
   * @param mat 模板图
   * @returns 已初始化的模板匹配识别配置
   * @since 0.48.0
   */
  templateMatch(mat: OpenCvSharp.Mat): BetterGenshinImpact.Core.Recognition.RecognitionObject;
  /**
   * 创建带遮罩的模板匹配识别配置
   * @param mat 模板图
   * @param useMask 是否启用遮罩
   * @param maskColor 遮罩忽略色；省略时默认绿色
   * @returns 已初始化的模板匹配识别配置
   * @since 0.48.0
   */
  templateMatch(
    mat: OpenCvSharp.Mat,
    useMask: boolean
  ): BetterGenshinImpact.Core.Recognition.RecognitionObject;
  templateMatch(
    mat: OpenCvSharp.Mat,
    useMask: boolean,
    maskColor: System.Drawing.Color
  ): BetterGenshinImpact.Core.Recognition.RecognitionObject;
  /**
   * 创建限定感兴趣区域的模板匹配识别配置
   * @param mat 模板图
   * @param x 感兴趣区域 X
   * @param y 感兴趣区域 Y
   * @param w 感兴趣区域宽度
   * @param h 感兴趣区域高度
   * @returns 已初始化的模板匹配识别配置
   * @since 0.48.0
   */
  templateMatch(
    mat: OpenCvSharp.Mat,
    x: number | StrongNumeric<DoubleHost>,
    y: number | StrongNumeric<DoubleHost>,
    w: number | StrongNumeric<DoubleHost>,
    h: number | StrongNumeric<DoubleHost>
  ): BetterGenshinImpact.Core.Recognition.RecognitionObject;
  /**
   * 创建限定感兴趣区域的 OCR 识别配置
   * @param x 感兴趣区域 X
   * @param y 感兴趣区域 Y
   * @param w 感兴趣区域宽度
   * @param h 感兴趣区域高度
   * @returns OCR 识别配置
   * @since 0.43.1
   */
  ocr(
    x: number | StrongNumeric<DoubleHost>,
    y: number | StrongNumeric<DoubleHost>,
    w: number | StrongNumeric<DoubleHost>,
    h: number | StrongNumeric<DoubleHost>
  ): BetterGenshinImpact.Core.Recognition.RecognitionObject;
  /**
   * 创建 OCR 包含匹配识别配置
   * @param x 感兴趣区域 X
   * @param y 感兴趣区域 Y
   * @param w 感兴趣区域宽度
   * @param h 感兴趣区域高度
   * @param matchTexts 任一命中即成功的包含匹配文本
   * @returns OCR 匹配识别配置
   * @since 0.48.0
   */
  ocrMatch(
    x: number | StrongNumeric<DoubleHost>,
    y: number | StrongNumeric<DoubleHost>,
    w: number | StrongNumeric<DoubleHost>,
    h: number | StrongNumeric<DoubleHost>,
    matchTexts: HostArray<string>
  ): BetterGenshinImpact.Core.Recognition.RecognitionObject;
  ocrMatch(
    x: number | StrongNumeric<DoubleHost>,
    y: number | StrongNumeric<DoubleHost>,
    w: number | StrongNumeric<DoubleHost>,
    h: number | StrongNumeric<DoubleHost>,
    ...matchTexts: string[]
  ): BetterGenshinImpact.Core.Recognition.RecognitionObject;
  /**
   * 创建限定感兴趣区域的 OCR 识别配置
   * @param rect 感兴趣区域
   * @returns OCR 识别配置
   * @since 0.43.1
   */
  ocr(rect: OpenCvSharp.Rect): BetterGenshinImpact.Core.Recognition.RecognitionObject;
}

export {};
