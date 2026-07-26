import type { HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import "../System/IDisposable";
import "./DenseOpticalFlowExt";
import "./ICvPtrHolder";

declare const broxOpticalFlowBrand: unique symbol;
export interface BroxOpticalFlow
  extends
    Omit<
      OpenCvSharp.DenseOpticalFlowExt,
      "alpha" | "gamma" | "innerIterations" | "outerIterations" | "scaleFactor" | "solverIterations"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [broxOpticalFlowBrand]: true;
  alpha: number;
  gamma: number;
  scaleFactor: number;
  innerIterations: number;
  outerIterations: number;
  solverIterations: number;
}

declare global {
  namespace OpenCvSharp {
    type BroxOpticalFlow = import("./BroxOpticalFlow").BroxOpticalFlow;
  }
}

export interface BroxOpticalFlowHostType extends HostType<BroxOpticalFlow, ReferenceTypeTrait> {}

export {};
