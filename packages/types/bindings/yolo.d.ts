import "../types/BetterGenshinImpact/Core/Script/Dependence/YoloPredictorFactory";

declare global {
  /**
   * YOLO ONNX 推理预测器工厂
   * @since 0.67.0
   */
  const yolo: BetterGenshinImpact.Core.Script.Dependence.YoloPredictorFactory;
}

export {};
