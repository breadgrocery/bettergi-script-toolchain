import type { HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/IDisposable";
import "./Algorithm";
import "./ICvPtrHolder";
import "./InputArray";
import "./OutputArray";

declare const denseOpticalFlowExtBrand: unique symbol;
export interface DenseOpticalFlowExt
  extends
    Omit<OpenCvSharp.Algorithm, "calc" | "collectGarbage">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [denseOpticalFlowExtBrand]: true;
  collectGarbage(): VoidResult;
  calc(
    frame0: OpenCvSharp.InputArray,
    frame1: OpenCvSharp.InputArray,
    flow1: OpenCvSharp.OutputArray
  ): VoidResult;
  calc(
    frame0: OpenCvSharp.InputArray,
    frame1: OpenCvSharp.InputArray,
    flow1: OpenCvSharp.OutputArray,
    flow2: OpenCvSharp.OutputArray | null
  ): VoidResult;
}

declare global {
  namespace OpenCvSharp {
    type DenseOpticalFlowExt = import("./DenseOpticalFlowExt").DenseOpticalFlowExt;
  }
}

export interface DenseOpticalFlowExtHostType extends HostType<
  DenseOpticalFlowExt,
  ReferenceTypeTrait
> {
  createFarneback(): OpenCvSharp.DenseOpticalFlowExt;
  createFarneback_CUDA(): OpenCvSharp.DenseOpticalFlowExt;
  createDualTVL1(): OpenCvSharp.DenseOpticalFlowExt;
  createDualTVL1_CUDA(): OpenCvSharp.DenseOpticalFlowExt;
  createBrox_CUDA(): OpenCvSharp.DenseOpticalFlowExt;
  createPyrLK_CUDA(): OpenCvSharp.DenseOpticalFlowExt;
}

export {};
