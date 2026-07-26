import type { HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import "../System/IDisposable";
import "./DenseOpticalFlowExt";
import "./ICvPtrHolder";

declare const pyrLKOpticalFlowBrand: unique symbol;
export interface PyrLKOpticalFlow
  extends
    Omit<OpenCvSharp.DenseOpticalFlowExt, "iterations" | "maxLevel" | "windowSize">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [pyrLKOpticalFlowBrand]: true;
  windowSize: number;
  maxLevel: number;
  iterations: number;
}

declare global {
  namespace OpenCvSharp {
    type PyrLKOpticalFlow = import("./PyrLKOpticalFlow").PyrLKOpticalFlow;
  }
}

export interface PyrLKOpticalFlowHostType extends HostType<PyrLKOpticalFlow, ReferenceTypeTrait> {}

export {};
