import type {
  ColorConversionCodes,
  Mat,
  Rect,
  Scalar,
  TemplateMatchModes
} from "mirada/dist/src/types/opencv";
import "../../../System/Collections/Generic/Dictionary";
import "../../../System/Collections/Generic/List";
import "../../../System/Drawing/Color";
import "../../../System/Drawing/Pen";
import "../Recognition/OcrEngineTypes";
import "../Recognition/RecognitionTypes";

declare global {
  namespace BetterGenshinImpact.Core.Recognition {
    class RecognitionObject {
      /** 匹配类型 */
      recognitionType: BetterGenshinImpact.Core.Recognition.RecognitionTypes;

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
      maskColor: System.Drawing.Color;

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
      drawOnWindowPen: System.Drawing.Pen;

      /**
       * 一个模板匹配多个结果的时候最大匹配数量
       * @default -1 （不限制）
       */
      maxMatchCount: number;

      /**
       * 是否启用二值化后模板匹配
       * @default false
       */
      useBinaryMatch: boolean;

      /**
       * 二值化阈值
       * @default 128
       */
      binaryThreshold: number;

      /** 颜色匹配方式 */
      colorConversionCode: ColorConversionCodes;

      /** 起始颜色范围 */
      lowerColor: Scalar;

      /** 终止颜色范围 */
      upperColor: Scalar;

      /**
       * 符合的点的数量要求
       * @default 1
       */
      matchCount: number;

      /** OCR 引擎 */
      ocrEngine: BetterGenshinImpact.Core.Recognition.OcrEngineTypes;

      /** 文字识别替换字典（部分文字识别结果不准确） */
      replaceDictionary: System.Collections.Generic.Dictionary<string, string[]>;

      /** 包含匹配 多个值全匹配的情况下才算成功 复杂情况请用正则匹配 */
      allContainMatchText: System.Collections.Generic.List<string>;

      /** 包含匹配 一个值匹配就算成功 */
      oneContainMatchText: System.Collections.Generic.List<string>;

      /** 正则匹配 多个值全匹配的情况下才算成功 */
      regexMatchText: System.Collections.Generic.List<string>;

      /** 用于多个OCR结果的匹配 */
      text: string;

      /** 初始化模板 */
      initTemplate(): BetterGenshinImpact.Core.Recognition.RecognitionObject;

      clone(): BetterGenshinImpact.Core.Recognition.RecognitionObject;

      /**
       * 识别图片模板
       * @param mat 模板图片
       */
      static templateMatch(mat: Mat): BetterGenshinImpact.Core.Recognition.RecognitionObject;
      // overload
      static templateMatch(
        mat: Mat,
        useMask: boolean
      ): BetterGenshinImpact.Core.Recognition.RecognitionObject;
      static templateMatch(
        mat: Mat,
        useMask: boolean,
        maskColor: System.Drawing.Color
      ): BetterGenshinImpact.Core.Recognition.RecognitionObject;

      /**
       * 在指定区域识别图片模板
       * @param mat 模板图片
       * @param x 水平位置（像素）
       * @param y 垂直位置（像素）
       * @param w 宽度
       * @param h 高度
       */
      static templateMatch(
        mat: Mat,
        x: number,
        y: number,
        w: number,
        h: number
      ): BetterGenshinImpact.Core.Recognition.RecognitionObject;

      /**
       * 识别指定区域
       * @param x 水平位置（像素）
       * @param y 垂直位置（像素）
       * @param w 宽度
       * @param h 高度
       */
      static ocr(
        x: number,
        y: number,
        w: number,
        h: number
      ): BetterGenshinImpact.Core.Recognition.RecognitionObject;

      /**
       * 识别矩形区域
       * @param rect 矩形
       */
      static ocr(rect: Rect): BetterGenshinImpact.Core.Recognition.RecognitionObject;

      static ocrMatch(
        x: number,
        y: number,
        w: number,
        h: number,
        ...matchTexts: string[]
      ): BetterGenshinImpact.Core.Recognition.RecognitionObject;

      /** 识别文字 */
      static readonly ocrThis: BetterGenshinImpact.Core.Recognition.RecognitionObject;
    }
  }
  export import RecognitionObject = BetterGenshinImpact.Core.Recognition.RecognitionObject;
}

export {};
