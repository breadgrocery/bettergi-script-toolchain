import type {
  HostArray,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  SingleHost,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../../System/IDisposable";
import "../Algorithm";
import "../ICvPtrHolder";
import "../InputArray";
import "../OutputArray";
import "../Rect";
import "./RFFeatureGetter";

declare const structuredEdgeDetectionBrand: unique symbol;
export interface StructuredEdgeDetection
  extends
    Omit<
      OpenCvSharp.Algorithm,
      "computeOrientation" | "detectEdges" | "edgesNms" | "getBoundingBoxes"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [structuredEdgeDetectionBrand]: true;
  getBoundingBoxes(
    edgeMap: OpenCvSharp.InputArray,
    orientationMap: OpenCvSharp.InputArray,
    boxes: HostVariableOut<HostArray<OpenCvSharp.Rect>>
  ): VoidResult;
  detectEdges(src: OpenCvSharp.InputArray, dst: OpenCvSharp.OutputArray): VoidResult;
  computeOrientation(src: OpenCvSharp.InputArray, dst: OpenCvSharp.OutputArray): VoidResult;
  edgesNms(
    edgeImage: OpenCvSharp.InputArray,
    orientationImage: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray
  ): VoidResult;
  edgesNms(
    edgeImage: OpenCvSharp.InputArray,
    orientationImage: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    r: number | StrongNumeric<Int32Host>
  ): VoidResult;
  edgesNms(
    edgeImage: OpenCvSharp.InputArray,
    orientationImage: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    r: number | StrongNumeric<Int32Host>,
    s: number | StrongNumeric<Int32Host>
  ): VoidResult;
  edgesNms(
    edgeImage: OpenCvSharp.InputArray,
    orientationImage: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    r: number | StrongNumeric<Int32Host>,
    s: number | StrongNumeric<Int32Host>,
    m: number | StrongNumeric<SingleHost>
  ): VoidResult;
  edgesNms(
    edgeImage: OpenCvSharp.InputArray,
    orientationImage: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    r: number | StrongNumeric<Int32Host>,
    s: number | StrongNumeric<Int32Host>,
    m: number | StrongNumeric<SingleHost>,
    isParallel: boolean
  ): VoidResult;
}

declare global {
  namespace OpenCvSharp.XImgProc {
    type StructuredEdgeDetection = import("./StructuredEdgeDetection").StructuredEdgeDetection;
  }
}

export interface StructuredEdgeDetectionHostType extends HostType<
  StructuredEdgeDetection,
  ReferenceTypeTrait
> {
  create(model: string): OpenCvSharp.XImgProc.StructuredEdgeDetection;
  create(
    model: string,
    howToGetFeatures: OpenCvSharp.XImgProc.RFFeatureGetter | null
  ): OpenCvSharp.XImgProc.StructuredEdgeDetection;
}

export {};
