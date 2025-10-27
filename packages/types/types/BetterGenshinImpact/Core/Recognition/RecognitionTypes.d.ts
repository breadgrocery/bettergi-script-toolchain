declare global {
  namespace BetterGenshinImpact.Core.Recognition {
    enum RecognitionTypes {
      None,

      /** 模板匹配 */
      TemplateMatch,

      /** 颜色匹配 */
      ColorMatch,

      /** 文字识别并匹配 */
      OcrMatch,

      /** 仅文字识别 */
      Ocr,

      /** 提取指定颜色后进行文字识别 */
      ColorRangeAndOcr,

      /** 自动检测 */
      Detect
    }
  }
}

export {};
