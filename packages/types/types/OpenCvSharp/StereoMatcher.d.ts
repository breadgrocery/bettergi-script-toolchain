import type { HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/IDisposable";
import "./Algorithm";
import "./ICvPtrHolder";
import "./InputArray";
import "./OutputArray";

declare const stereoMatcherBrand: unique symbol;
export interface StereoMatcher
  extends
    Omit<
      OpenCvSharp.Algorithm,
      | "blockSize"
      | "compute"
      | "disp12MaxDiff"
      | "minDisparity"
      | "numDisparities"
      | "speckleRange"
      | "speckleWindowSize"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [stereoMatcherBrand]: true;
  compute(
    left: OpenCvSharp.InputArray,
    right: OpenCvSharp.InputArray,
    disparity: OpenCvSharp.OutputArray
  ): VoidResult;
  minDisparity: number;
  numDisparities: number;
  blockSize: number;
  speckleWindowSize: number;
  speckleRange: number;
  disp12MaxDiff: number;
}

declare global {
  namespace OpenCvSharp {
    type StereoMatcher = import("./StereoMatcher").StereoMatcher;
  }
}

export interface StereoMatcherHostType extends HostType<StereoMatcher, ReferenceTypeTrait> {}

export {};
