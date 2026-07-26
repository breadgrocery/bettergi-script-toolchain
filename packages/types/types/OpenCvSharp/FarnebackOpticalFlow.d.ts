import type { HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import "../System/IDisposable";
import "./DenseOpticalFlowExt";
import "./ICvPtrHolder";

declare const farnebackOpticalFlowBrand: unique symbol;
export interface FarnebackOpticalFlow
  extends
    Omit<
      OpenCvSharp.DenseOpticalFlowExt,
      "flags" | "iterations" | "levelsNumber" | "polyN" | "polySigma" | "pyrScale" | "windowSize"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [farnebackOpticalFlowBrand]: true;
  pyrScale: number;
  levelsNumber: number;
  windowSize: number;
  iterations: number;
  polyN: number;
  polySigma: number;
  flags: number;
}

declare global {
  namespace OpenCvSharp {
    type FarnebackOpticalFlow = import("./FarnebackOpticalFlow").FarnebackOpticalFlow;
  }
}

export interface FarnebackOpticalFlowHostType extends HostType<
  FarnebackOpticalFlow,
  ReferenceTypeTrait
> {}

export {};
