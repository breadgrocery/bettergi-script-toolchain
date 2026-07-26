import type { HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import "../System/IDisposable";
import "./Algorithm";
import "./ICvPtrHolder";
import "./InputArray";

declare const shapeDistanceExtractorBrand: unique symbol;
export interface ShapeDistanceExtractor
  extends
    Omit<OpenCvSharp.Algorithm, "computeDistance">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [shapeDistanceExtractorBrand]: true;
  computeDistance(contour1: OpenCvSharp.InputArray, contour2: OpenCvSharp.InputArray): number;
}

declare global {
  namespace OpenCvSharp {
    type ShapeDistanceExtractor = import("./ShapeDistanceExtractor").ShapeDistanceExtractor;
  }
}

export interface ShapeDistanceExtractorHostType extends HostType<
  ShapeDistanceExtractor,
  ReferenceTypeTrait
> {}

export {};
