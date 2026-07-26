import type {
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  SingleHost,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/IDisposable";
import "./ICvPtrHolder";
import "./InputArray";
import "./OutputArray";
import "./ShapeDistanceExtractor";

declare const shapeContextDistanceExtractorBrand: unique symbol;
export interface ShapeContextDistanceExtractor
  extends
    Omit<
      OpenCvSharp.ShapeDistanceExtractor,
      | "angularBins"
      | "bendingEnergyWeight"
      | "getImages"
      | "imageAppearanceWeight"
      | "innerRadius"
      | "iterations"
      | "outerRadius"
      | "radialBins"
      | "rotationInvariant"
      | "setImages"
      | "shapeContextWeight"
      | "stdDev"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [shapeContextDistanceExtractorBrand]: true;
  angularBins: number;
  radialBins: number;
  innerRadius: number;
  outerRadius: number;
  rotationInvariant: boolean;
  shapeContextWeight: number;
  imageAppearanceWeight: number;
  bendingEnergyWeight: number;
  iterations: number;
  stdDev: number;
  setImages(image1: OpenCvSharp.InputArray, image2: OpenCvSharp.InputArray): VoidResult;
  getImages(image1: OpenCvSharp.OutputArray, image2: OpenCvSharp.OutputArray): VoidResult;
}

declare global {
  namespace OpenCvSharp {
    type ShapeContextDistanceExtractor =
      import("./ShapeContextDistanceExtractor").ShapeContextDistanceExtractor;
  }
}

export interface ShapeContextDistanceExtractorHostType extends HostType<
  ShapeContextDistanceExtractor,
  ReferenceTypeTrait
> {
  create(): OpenCvSharp.ShapeContextDistanceExtractor;
  create(
    nAngularBins: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.ShapeContextDistanceExtractor;
  create(
    nAngularBins: number | StrongNumeric<Int32Host>,
    nRadialBins: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.ShapeContextDistanceExtractor;
  create(
    nAngularBins: number | StrongNumeric<Int32Host>,
    nRadialBins: number | StrongNumeric<Int32Host>,
    innerRadius: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.ShapeContextDistanceExtractor;
  create(
    nAngularBins: number | StrongNumeric<Int32Host>,
    nRadialBins: number | StrongNumeric<Int32Host>,
    innerRadius: number | StrongNumeric<SingleHost>,
    outerRadius: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.ShapeContextDistanceExtractor;
  create(
    nAngularBins: number | StrongNumeric<Int32Host>,
    nRadialBins: number | StrongNumeric<Int32Host>,
    innerRadius: number | StrongNumeric<SingleHost>,
    outerRadius: number | StrongNumeric<SingleHost>,
    iterations: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.ShapeContextDistanceExtractor;
}

export {};
