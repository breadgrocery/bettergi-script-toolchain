import type { HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/IDisposable";
import "../System/Nullable";
import "./Algorithm";
import "./ICvPtrHolder";
import "./InputArray";
import "./OutputArray";
import "./Point";

declare const generalizedHoughBrand: unique symbol;
export interface GeneralizedHough
  extends
    Omit<
      OpenCvSharp.Algorithm,
      | "cannyHighThresh"
      | "cannyLowThresh"
      | "detect"
      | "dp"
      | "maxBufferSize"
      | "minDist"
      | "setTemplate"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [generalizedHoughBrand]: true;
  cannyLowThresh: number;
  cannyHighThresh: number;
  minDist: number;
  dp: number;
  maxBufferSize: number;
  setTemplate(
    edges: OpenCvSharp.InputArray,
    dx: OpenCvSharp.InputArray,
    dy: OpenCvSharp.InputArray
  ): VoidResult;
  setTemplate(
    edges: OpenCvSharp.InputArray,
    dx: OpenCvSharp.InputArray,
    dy: OpenCvSharp.InputArray,
    templCenter: OpenCvSharp.Point | null | null
  ): VoidResult;
  setTemplate(templ: OpenCvSharp.InputArray): VoidResult;
  setTemplate(
    templ: OpenCvSharp.InputArray,
    templCenter: OpenCvSharp.Point | null | null
  ): VoidResult;
  detect(
    edges: OpenCvSharp.InputArray,
    dx: OpenCvSharp.InputArray,
    dy: OpenCvSharp.InputArray,
    positions: OpenCvSharp.OutputArray
  ): VoidResult;
  detect(
    edges: OpenCvSharp.InputArray,
    dx: OpenCvSharp.InputArray,
    dy: OpenCvSharp.InputArray,
    positions: OpenCvSharp.OutputArray,
    votes: OpenCvSharp.OutputArray | null
  ): VoidResult;
  detect(image: OpenCvSharp.InputArray, positions: OpenCvSharp.OutputArray): VoidResult;
  detect(
    image: OpenCvSharp.InputArray,
    positions: OpenCvSharp.OutputArray,
    votes: OpenCvSharp.OutputArray | null
  ): VoidResult;
}

declare global {
  namespace OpenCvSharp {
    type GeneralizedHough = import("./GeneralizedHough").GeneralizedHough;
  }
}

export interface GeneralizedHoughHostType extends HostType<GeneralizedHough, ReferenceTypeTrait> {}

export {};
