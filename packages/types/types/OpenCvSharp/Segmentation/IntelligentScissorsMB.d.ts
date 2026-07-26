import type {
  DoubleHost,
  HostType,
  Int32Host,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  SingleHost,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../../System/IDisposable";
import "../DisposableCvObject";
import "../ICvPtrHolder";
import "../InputArray";
import "../OutputArray";
import "../Point";

declare const intelligentScissorsMBBrand: unique symbol;
export interface IntelligentScissorsMB
  extends
    Omit<
      OpenCvSharp.DisposableCvObject,
      | "applyImage"
      | "applyImageFeatures"
      | "buildMap"
      | "getContour"
      | "setEdgeFeatureCannyParameters"
      | "setEdgeFeatureZeroCrossingParameters"
      | "setGradientMagnitudeMaxLimit"
      | "setWeights"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [intelligentScissorsMBBrand]: true;
  setWeights(
    weightNonEdge: number | StrongNumeric<SingleHost>,
    weightGradientDirection: number | StrongNumeric<SingleHost>,
    weightGradientMagnitude: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Segmentation.IntelligentScissorsMB;
  setGradientMagnitudeMaxLimit(): OpenCvSharp.Segmentation.IntelligentScissorsMB;
  setGradientMagnitudeMaxLimit(
    gradientMagnitudeThresholdMax: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Segmentation.IntelligentScissorsMB;
  setEdgeFeatureZeroCrossingParameters(): OpenCvSharp.Segmentation.IntelligentScissorsMB;
  setEdgeFeatureZeroCrossingParameters(
    gradientMagnitudeMinValue: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Segmentation.IntelligentScissorsMB;
  setEdgeFeatureCannyParameters(
    threshold1: number | StrongNumeric<DoubleHost>,
    threshold2: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Segmentation.IntelligentScissorsMB;
  setEdgeFeatureCannyParameters(
    threshold1: number | StrongNumeric<DoubleHost>,
    threshold2: number | StrongNumeric<DoubleHost>,
    apertureSize: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Segmentation.IntelligentScissorsMB;
  setEdgeFeatureCannyParameters(
    threshold1: number | StrongNumeric<DoubleHost>,
    threshold2: number | StrongNumeric<DoubleHost>,
    apertureSize: number | StrongNumeric<Int32Host>,
    l2gradient: boolean
  ): OpenCvSharp.Segmentation.IntelligentScissorsMB;
  applyImage(image: OpenCvSharp.InputArray): OpenCvSharp.Segmentation.IntelligentScissorsMB;
  applyImageFeatures(
    nonEdge: OpenCvSharp.InputArray,
    gradientDirection: OpenCvSharp.InputArray,
    gradientMagnitude: OpenCvSharp.InputArray
  ): OpenCvSharp.Segmentation.IntelligentScissorsMB;
  applyImageFeatures(
    nonEdge: OpenCvSharp.InputArray,
    gradientDirection: OpenCvSharp.InputArray,
    gradientMagnitude: OpenCvSharp.InputArray,
    image: OpenCvSharp.InputArray | null
  ): OpenCvSharp.Segmentation.IntelligentScissorsMB;
  buildMap(sourcePt: OpenCvSharp.Point): VoidResult;
  getContour(targetPt: OpenCvSharp.Point, contour: OpenCvSharp.OutputArray): VoidResult;
  getContour(
    targetPt: OpenCvSharp.Point,
    contour: OpenCvSharp.OutputArray,
    backward: boolean
  ): VoidResult;
}

declare global {
  namespace OpenCvSharp.Segmentation {
    type IntelligentScissorsMB = import("./IntelligentScissorsMB").IntelligentScissorsMB;
  }
}

export interface IntelligentScissorsMBHostType extends HostType<
  IntelligentScissorsMB,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): IntelligentScissorsMB;
}

export {};
