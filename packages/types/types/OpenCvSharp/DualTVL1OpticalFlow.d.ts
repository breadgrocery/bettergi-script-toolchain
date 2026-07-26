import type { HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import "../System/IDisposable";
import "./DenseOpticalFlowExt";
import "./ICvPtrHolder";

declare const dualTVL1OpticalFlowBrand: unique symbol;
export interface DualTVL1OpticalFlow
  extends
    Omit<
      OpenCvSharp.DenseOpticalFlowExt,
      | "epsilon"
      | "iterations"
      | "lambda"
      | "scalesNumber"
      | "tau"
      | "theta"
      | "useInitialFlow"
      | "warpingsNumber"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [dualTVL1OpticalFlowBrand]: true;
  tau: number;
  lambda: number;
  theta: number;
  scalesNumber: number;
  warpingsNumber: number;
  epsilon: number;
  iterations: number;
  useInitialFlow: boolean;
}

declare global {
  namespace OpenCvSharp {
    type DualTVL1OpticalFlow = import("./DualTVL1OpticalFlow").DualTVL1OpticalFlow;
  }
}

export interface DualTVL1OpticalFlowHostType extends HostType<
  DualTVL1OpticalFlow,
  ReferenceTypeTrait
> {}

export {};
