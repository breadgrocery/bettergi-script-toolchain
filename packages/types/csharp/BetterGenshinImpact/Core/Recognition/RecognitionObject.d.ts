import {
  ColorConversionCodes,
  Mat,
  Rect,
  Scalar,
  TemplateMatchModes
} from "mirada/dist/src/types/opencv";
import { Dictionary } from "../../../System/Collections/Generic/Dictionary";
import { List } from "../../../System/Collections/Generic/List";
import { Color } from "../../../System/Drawing/Color";
import { Pen } from "../../../System/Drawing/Pen";
import { OcrEngineTypes } from "./OcrEngineTypes";
import { RecognitionTypes } from "./RecognitionTypes";

export interface RecognitionObject {
  /** 匹配类型 */
  recognitionType: RecognitionTypes;

  /** 感兴趣的区域 */
  regionOfInterest: Rect;

  /** 识别对象名称 */
  name: string | null;

  /** 模板匹配的对象（彩色） */
  templateImageMat: Mat | null;

  /** 模板匹配的对象（灰色） */
  templateImageGreyMat: Mat | null;

  /**
   * 模板匹配阈值
   * @default 0.8
   */
  threshold: number;

  /**
   * 是否使用3通道匹配
   * @default false
   */
  use3Channels: boolean;

  /**
   * [模板匹配算法](https://docs.opencv.org/4.x/df/dfb/group__imgproc__object.html)
   * @default CCoeffNormed
   */
  templateMatchMode: TemplateMatchModes;

  /**
   * 匹配模板遮罩（图片中不需要匹配的颜色）
   * @default false
   */
  useMask: boolean;

  /**
   * 模板遮罩颜色（图片中不需要匹配的颜色）不需要匹配的颜色
   * @requires `useMask` 为 true
   * @default 绿色
   */
  maskColor: Color;

  maskMat: Mat | null;

  /**
   * 匹配成功时，是否在屏幕上绘制矩形框
   * @requires `name` 不为空
   * @default false
   */
  drawOnWindow: boolean;

  /**
   * 绘制的矩形框的颜色及线条宽度
   * @default 红色 2px
   */
  drawOnWindowPen: Pen;

  /**
   * 一个模板匹配多个结果的时候最大匹配数量
   * @default -1 （不限制）
   */
  maxMatchCount: number;

  /** 颜色匹配方式 */
  colorConversionCode: ColorConversionCodes;

  lowerColor: Scalar;

  upperColor: Scalar;

  /**
   * 符合的点的数量要求
   * @default 1
   */
  matchCount: number;

  /** OCR 引擎 */
  ocrEngine: OcrEngineTypes;

  /** 文字识别替换字典（部分文字识别结果不准确） */
  replaceDictionary: Dictionary<string, string[]>;

  /** 包含匹配 多个值全匹配的情况下才算成功 复杂情况请用正则匹配 */
  allContainMatchText: List<string>;

  /** 包含匹配 一个值匹配就算成功 */
  oneContainMatchText: List<string>;

  /** 正则匹配 多个值全匹配的情况下才算成功 */
  regexMatchText: List<string>;

  initTemplate(): RecognitionObject;
}

declare global {
  namespace RecognitionObject {
    function templateMatch(mat: Mat): RecognitionObject;

    function templateMatch(mat: Mat, x: number, y: number, w: number, h: number): RecognitionObject;

    function ocr(x: number, y: number, w: number, h: number): RecognitionObject;

    function ocr(rect: Rect): RecognitionObject;

    var ocrThis: RecognitionObject;
  }
}
