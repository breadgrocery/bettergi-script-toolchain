import type {
  ClrHostValue,
  DoubleHost,
  HostArray,
  HostType,
  Int32Host,
  SingleHost,
  StaticTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../InputArray";
import "../InputOutputArray";
import "../OutputArray";
import "../Rect";

declare const cvOptFlowBrand: unique symbol;
export interface CvOptFlow extends ClrHostValue {
  readonly [cvOptFlowBrand]: true;
}

declare global {
  namespace OpenCvSharp.OptFlow {
    type CvOptFlow = import("./CvOptFlow").CvOptFlow;
  }
}

export interface CvOptFlowHostType extends HostType<CvOptFlow, StaticTypeTrait> {
  updateMotionHistory(
    silhouette: OpenCvSharp.InputArray,
    mhi: OpenCvSharp.InputOutputArray,
    timestamp: number | StrongNumeric<DoubleHost>,
    duration: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  calcMotionGradient(
    mhi: OpenCvSharp.InputArray,
    mask: OpenCvSharp.OutputArray,
    orientation: OpenCvSharp.OutputArray,
    delta1: number | StrongNumeric<DoubleHost>,
    delta2: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  calcMotionGradient(
    mhi: OpenCvSharp.InputArray,
    mask: OpenCvSharp.OutputArray,
    orientation: OpenCvSharp.OutputArray,
    delta1: number | StrongNumeric<DoubleHost>,
    delta2: number | StrongNumeric<DoubleHost>,
    apertureSize: number | StrongNumeric<Int32Host>
  ): VoidResult;
  calcGlobalOrientation(
    orientation: OpenCvSharp.InputArray,
    mask: OpenCvSharp.InputArray,
    mhi: OpenCvSharp.InputArray,
    timestamp: number | StrongNumeric<DoubleHost>,
    duration: number | StrongNumeric<DoubleHost>
  ): number;
  segmentMotion(
    mhi: OpenCvSharp.InputArray,
    segmask: OpenCvSharp.OutputArray,
    boundingRects: HostVariableOut<HostArray<OpenCvSharp.Rect>>,
    timestamp: number | StrongNumeric<DoubleHost>,
    segThresh: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  calcOpticalFlowSF(
    from: OpenCvSharp.InputArray,
    to: OpenCvSharp.InputArray,
    flow: OpenCvSharp.OutputArray,
    layers: number | StrongNumeric<Int32Host>,
    averagingBlockSize: number | StrongNumeric<Int32Host>,
    maxFlow: number | StrongNumeric<Int32Host>
  ): VoidResult;
  calcOpticalFlowSF(
    from: OpenCvSharp.InputArray,
    to: OpenCvSharp.InputArray,
    flow: OpenCvSharp.OutputArray,
    layers: number | StrongNumeric<Int32Host>,
    averagingBlockSize: number | StrongNumeric<Int32Host>,
    maxFlow: number | StrongNumeric<Int32Host>,
    sigmaDist: number | StrongNumeric<DoubleHost>,
    sigmaColor: number | StrongNumeric<DoubleHost>,
    postprocessWindow: number | StrongNumeric<Int32Host>,
    sigmaDistFix: number | StrongNumeric<DoubleHost>,
    sigmaColorFix: number | StrongNumeric<DoubleHost>,
    occThr: number | StrongNumeric<DoubleHost>,
    upscaleAveragingRadius: number | StrongNumeric<Int32Host>,
    upscaleSigmaDist: number | StrongNumeric<DoubleHost>,
    upscaleSigmaColor: number | StrongNumeric<DoubleHost>,
    speedUpThr: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  calcOpticalFlowSparseToDense(
    from: OpenCvSharp.InputArray,
    to: OpenCvSharp.InputArray,
    flow: OpenCvSharp.OutputArray
  ): VoidResult;
  calcOpticalFlowSparseToDense(
    from: OpenCvSharp.InputArray,
    to: OpenCvSharp.InputArray,
    flow: OpenCvSharp.OutputArray,
    gridStep: number | StrongNumeric<Int32Host>
  ): VoidResult;
  calcOpticalFlowSparseToDense(
    from: OpenCvSharp.InputArray,
    to: OpenCvSharp.InputArray,
    flow: OpenCvSharp.OutputArray,
    gridStep: number | StrongNumeric<Int32Host>,
    k: number | StrongNumeric<Int32Host>
  ): VoidResult;
  calcOpticalFlowSparseToDense(
    from: OpenCvSharp.InputArray,
    to: OpenCvSharp.InputArray,
    flow: OpenCvSharp.OutputArray,
    gridStep: number | StrongNumeric<Int32Host>,
    k: number | StrongNumeric<Int32Host>,
    sigma: number | StrongNumeric<SingleHost>
  ): VoidResult;
  calcOpticalFlowSparseToDense(
    from: OpenCvSharp.InputArray,
    to: OpenCvSharp.InputArray,
    flow: OpenCvSharp.OutputArray,
    gridStep: number | StrongNumeric<Int32Host>,
    k: number | StrongNumeric<Int32Host>,
    sigma: number | StrongNumeric<SingleHost>,
    usePostProc: boolean
  ): VoidResult;
  calcOpticalFlowSparseToDense(
    from: OpenCvSharp.InputArray,
    to: OpenCvSharp.InputArray,
    flow: OpenCvSharp.OutputArray,
    gridStep: number | StrongNumeric<Int32Host>,
    k: number | StrongNumeric<Int32Host>,
    sigma: number | StrongNumeric<SingleHost>,
    usePostProc: boolean,
    fgsLambda: number | StrongNumeric<SingleHost>
  ): VoidResult;
  calcOpticalFlowSparseToDense(
    from: OpenCvSharp.InputArray,
    to: OpenCvSharp.InputArray,
    flow: OpenCvSharp.OutputArray,
    gridStep: number | StrongNumeric<Int32Host>,
    k: number | StrongNumeric<Int32Host>,
    sigma: number | StrongNumeric<SingleHost>,
    usePostProc: boolean,
    fgsLambda: number | StrongNumeric<SingleHost>,
    fgsSigma: number | StrongNumeric<SingleHost>
  ): VoidResult;
}

export {};
