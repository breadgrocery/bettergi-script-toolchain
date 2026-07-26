import type { HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/IDisposable";
import "./Algorithm";
import "./FrameSource";
import "./ICvPtrHolder";
import "./OutputArray";

declare const superResolutionBrand: unique symbol;
export interface SuperResolution
  extends
    Omit<
      OpenCvSharp.Algorithm,
      | "alpha"
      | "blurKernelSize"
      | "blurSigma"
      | "collectGarbage"
      | "iterations"
      | "kernelSize"
      | "lambda"
      | "nextFrame"
      | "reset"
      | "scale"
      | "setInput"
      | "tau"
      | "temporalAreaRadius"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [superResolutionBrand]: true;
  setInput(fs: OpenCvSharp.FrameSource): VoidResult;
  nextFrame(frame: OpenCvSharp.OutputArray): VoidResult;
  reset(): VoidResult;
  collectGarbage(): VoidResult;
  scale: number;
  iterations: number;
  tau: number;
  lambda: number;
  alpha: number;
  kernelSize: number;
  blurKernelSize: number;
  blurSigma: number;
  temporalAreaRadius: number;
}

declare global {
  namespace OpenCvSharp {
    type SuperResolution = import("./SuperResolution").SuperResolution;
  }
}

export interface SuperResolutionHostType extends HostType<SuperResolution, ReferenceTypeTrait> {
  createBTVL1(): OpenCvSharp.SuperResolution;
  createBTVL1_CUDA(): OpenCvSharp.SuperResolution;
}

export {};
