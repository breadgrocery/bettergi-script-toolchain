import type {
  ClrHostValue,
  DoubleHost,
  EnumInput,
  HostArray,
  HostType,
  Int32Host,
  SingleHost,
  StaticTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../../System/Collections/Generic/IEnumerable";
import "../../System/Nullable";
import "../BorderTypes";
import "../DftFlags";
import "../InputArray";
import "../InputOutputArray";
import "../Mat";
import "../MatType";
import "../MorphShapes";
import "../MorphTypes";
import "../OutputArray";
import "../Point";
import "../Point3i";
import "../Scalar";
import "../Size";
import "../ThresholdTypes";
import "../Vec4i";
import "./AdaptiveManifoldFilter";
import "./AngleRangeOption";
import "./DTFilter";
import "./EdgeAwareFiltersList";
import "./EdgeBoxes";
import "./FastGlobalSmootherFilter";
import "./FastLineDetector";
import "./GuidedFilter";
import "./HoughDeskewOption";
import "./HoughOP";
import "./LocalBinarizationMethods";
import "./RFFeatureGetter";
import "./RulesOption";
import "./Segmentation/SelectiveSearchSegmentationStrategy";
import "./Segmentation/SelectiveSearchSegmentationStrategyMultiple";
import "./StructuredEdgeDetection";
import "./SuperpixelLSC";
import "./SuperpixelSEEDS";
import "./ThinningTypes";
import "./WMFWeightType";

declare const cvXImgProcBrand: unique symbol;
export interface CvXImgProc extends ClrHostValue {
  readonly [cvXImgProcBrand]: true;
}

declare const cvXImgProc_SegmentationBrand: unique symbol;
export interface CvXImgProc_Segmentation extends ClrHostValue {
  readonly [cvXImgProc_SegmentationBrand]: true;
}

export interface CvXImgProc_SegmentationHostType extends HostType<
  CvXImgProc_Segmentation,
  StaticTypeTrait
> {
  createSelectiveSearchSegmentationStrategyColor(): OpenCvSharp.XImgProc.Segmentation.SelectiveSearchSegmentationStrategyColor;
  createSelectiveSearchSegmentationStrategySize(): OpenCvSharp.XImgProc.Segmentation.SelectiveSearchSegmentationStrategySize;
  createSelectiveSearchSegmentationStrategyTexture(): OpenCvSharp.XImgProc.Segmentation.SelectiveSearchSegmentationStrategyTexture;
  createSelectiveSearchSegmentationStrategyFill(): OpenCvSharp.XImgProc.Segmentation.SelectiveSearchSegmentationStrategyFill;
  createSelectiveSearchSegmentationStrategyMultiple(): OpenCvSharp.XImgProc.Segmentation.SelectiveSearchSegmentationStrategyMultiple;
  createSelectiveSearchSegmentationStrategyMultiple(
    s1: OpenCvSharp.XImgProc.Segmentation.SelectiveSearchSegmentationStrategy
  ): OpenCvSharp.XImgProc.Segmentation.SelectiveSearchSegmentationStrategyMultiple;
  createSelectiveSearchSegmentationStrategyMultiple(
    s1: OpenCvSharp.XImgProc.Segmentation.SelectiveSearchSegmentationStrategy,
    s2: OpenCvSharp.XImgProc.Segmentation.SelectiveSearchSegmentationStrategy
  ): OpenCvSharp.XImgProc.Segmentation.SelectiveSearchSegmentationStrategyMultiple;
  createSelectiveSearchSegmentationStrategyMultiple(
    s1: OpenCvSharp.XImgProc.Segmentation.SelectiveSearchSegmentationStrategy,
    s2: OpenCvSharp.XImgProc.Segmentation.SelectiveSearchSegmentationStrategy,
    s3: OpenCvSharp.XImgProc.Segmentation.SelectiveSearchSegmentationStrategy
  ): OpenCvSharp.XImgProc.Segmentation.SelectiveSearchSegmentationStrategyMultiple;
  createSelectiveSearchSegmentationStrategyMultiple(
    s1: OpenCvSharp.XImgProc.Segmentation.SelectiveSearchSegmentationStrategy,
    s2: OpenCvSharp.XImgProc.Segmentation.SelectiveSearchSegmentationStrategy,
    s3: OpenCvSharp.XImgProc.Segmentation.SelectiveSearchSegmentationStrategy,
    s4: OpenCvSharp.XImgProc.Segmentation.SelectiveSearchSegmentationStrategy
  ): OpenCvSharp.XImgProc.Segmentation.SelectiveSearchSegmentationStrategyMultiple;
}

declare global {
  namespace OpenCvSharp.XImgProc.CvXImgProc {
    type Segmentation = import("./CvXImgProc").CvXImgProc_Segmentation;
  }
}

declare const cvXImgProc_RLBrand: unique symbol;
export interface CvXImgProc_RL extends ClrHostValue {
  readonly [cvXImgProc_RLBrand]: true;
}

export interface CvXImgProc_RLHostType extends HostType<CvXImgProc_RL, StaticTypeTrait> {
  threshold(
    src: OpenCvSharp.InputArray,
    rlDest: OpenCvSharp.OutputArray,
    thresh: number | StrongNumeric<DoubleHost>,
    type: EnumInput<OpenCvSharp.ThresholdTypes>
  ): VoidResult;
  dilate(
    rlSrc: OpenCvSharp.InputArray,
    rlDest: OpenCvSharp.OutputArray,
    rlKernel: OpenCvSharp.InputArray
  ): VoidResult;
  dilate(
    rlSrc: OpenCvSharp.InputArray,
    rlDest: OpenCvSharp.OutputArray,
    rlKernel: OpenCvSharp.InputArray,
    anchor: OpenCvSharp.Point | null | null
  ): VoidResult;
  erode(
    rlSrc: OpenCvSharp.InputArray,
    rlDest: OpenCvSharp.OutputArray,
    rlKernel: OpenCvSharp.InputArray
  ): VoidResult;
  erode(
    rlSrc: OpenCvSharp.InputArray,
    rlDest: OpenCvSharp.OutputArray,
    rlKernel: OpenCvSharp.InputArray,
    bBoundaryOn: boolean
  ): VoidResult;
  erode(
    rlSrc: OpenCvSharp.InputArray,
    rlDest: OpenCvSharp.OutputArray,
    rlKernel: OpenCvSharp.InputArray,
    bBoundaryOn: boolean,
    anchor: OpenCvSharp.Point | null | null
  ): VoidResult;
  getStructuringElement(
    shape: EnumInput<OpenCvSharp.MorphShapes>,
    ksize: OpenCvSharp.Size
  ): OpenCvSharp.Mat;
  paint(
    image: OpenCvSharp.InputOutputArray,
    rlSrc: OpenCvSharp.InputArray,
    value: OpenCvSharp.Scalar
  ): VoidResult;
  isRLMorphologyPossible(rlStructuringElement: OpenCvSharp.InputArray): boolean;
  createRLEImage(
    runs: System.Collections.Generic.IEnumerable<OpenCvSharp.Point3i>,
    res: OpenCvSharp.OutputArray
  ): VoidResult;
  createRLEImage(
    runs: System.Collections.Generic.IEnumerable<OpenCvSharp.Point3i>,
    res: OpenCvSharp.OutputArray,
    size: OpenCvSharp.Size | null | null
  ): VoidResult;
  morphologyEx(
    rlSrc: OpenCvSharp.InputArray,
    rlDest: OpenCvSharp.OutputArray,
    op: EnumInput<OpenCvSharp.MorphTypes>,
    rlKernel: OpenCvSharp.InputArray
  ): VoidResult;
  morphologyEx(
    rlSrc: OpenCvSharp.InputArray,
    rlDest: OpenCvSharp.OutputArray,
    op: EnumInput<OpenCvSharp.MorphTypes>,
    rlKernel: OpenCvSharp.InputArray,
    bBoundaryOnForErosion: boolean
  ): VoidResult;
  morphologyEx(
    rlSrc: OpenCvSharp.InputArray,
    rlDest: OpenCvSharp.OutputArray,
    op: EnumInput<OpenCvSharp.MorphTypes>,
    rlKernel: OpenCvSharp.InputArray,
    bBoundaryOnForErosion: boolean,
    anchor: OpenCvSharp.Point | null | null
  ): VoidResult;
}

declare global {
  namespace OpenCvSharp.XImgProc.CvXImgProc {
    type RL = import("./CvXImgProc").CvXImgProc_RL;
  }
}

declare global {
  namespace OpenCvSharp.XImgProc {
    type CvXImgProc = import("./CvXImgProc").CvXImgProc;
  }
}

export interface CvXImgProcHostType extends HostType<CvXImgProc, StaticTypeTrait> {
  niblackThreshold(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    maxValue: number | StrongNumeric<DoubleHost>,
    type: EnumInput<OpenCvSharp.ThresholdTypes>,
    blockSize: number | StrongNumeric<Int32Host>,
    k: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  niblackThreshold(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    maxValue: number | StrongNumeric<DoubleHost>,
    type: EnumInput<OpenCvSharp.ThresholdTypes>,
    blockSize: number | StrongNumeric<Int32Host>,
    k: number | StrongNumeric<DoubleHost>,
    binarizationMethod: EnumInput<OpenCvSharp.XImgProc.LocalBinarizationMethods>
  ): VoidResult;
  niblackThreshold(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    maxValue: number | StrongNumeric<DoubleHost>,
    type: EnumInput<OpenCvSharp.ThresholdTypes>,
    blockSize: number | StrongNumeric<Int32Host>,
    k: number | StrongNumeric<DoubleHost>,
    binarizationMethod: EnumInput<OpenCvSharp.XImgProc.LocalBinarizationMethods>,
    r: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  thinning(src: OpenCvSharp.InputArray, dst: OpenCvSharp.OutputArray): VoidResult;
  thinning(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    thinningType: EnumInput<OpenCvSharp.XImgProc.ThinningTypes>
  ): VoidResult;
  anisotropicDiffusion(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    alpha: number | StrongNumeric<SingleHost>,
    k: number | StrongNumeric<SingleHost>,
    niters: number | StrongNumeric<Int32Host>
  ): VoidResult;
  brightEdges(original: OpenCvSharp.Mat, edgeView: OpenCvSharp.Mat): VoidResult;
  brightEdges(
    original: OpenCvSharp.Mat,
    edgeView: OpenCvSharp.Mat,
    contrast: number | StrongNumeric<Int32Host>
  ): VoidResult;
  brightEdges(
    original: OpenCvSharp.Mat,
    edgeView: OpenCvSharp.Mat,
    contrast: number | StrongNumeric<Int32Host>,
    shortRange: number | StrongNumeric<Int32Host>
  ): VoidResult;
  brightEdges(
    original: OpenCvSharp.Mat,
    edgeView: OpenCvSharp.Mat,
    contrast: number | StrongNumeric<Int32Host>,
    shortRange: number | StrongNumeric<Int32Host>,
    longRange: number | StrongNumeric<Int32Host>
  ): VoidResult;
  createQuaternionImage(img: OpenCvSharp.InputArray, qimg: OpenCvSharp.OutputArray): VoidResult;
  qConj(qimg: OpenCvSharp.InputArray, qcimg: OpenCvSharp.OutputArray): VoidResult;
  qUnitary(qimg: OpenCvSharp.InputArray, qnimg: OpenCvSharp.OutputArray): VoidResult;
  qMultiply(
    src1: OpenCvSharp.InputArray,
    src2: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray
  ): VoidResult;
  qDft(
    img: OpenCvSharp.InputArray,
    qimg: OpenCvSharp.OutputArray,
    flags: EnumInput<OpenCvSharp.DftFlags>,
    sideLeft: boolean
  ): VoidResult;
  colorMatchTemplate(
    img: OpenCvSharp.InputArray,
    templ: OpenCvSharp.InputArray,
    result: OpenCvSharp.OutputArray
  ): VoidResult;
  gradientDericheY(
    op: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    alpha: number | StrongNumeric<DoubleHost>,
    omega: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  gradientDericheX(
    op: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    alpha: number | StrongNumeric<DoubleHost>,
    omega: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  createEdgeBoxes(): OpenCvSharp.XImgProc.EdgeBoxes;
  createEdgeBoxes(alpha: number | StrongNumeric<SingleHost>): OpenCvSharp.XImgProc.EdgeBoxes;
  createEdgeBoxes(
    alpha: number | StrongNumeric<SingleHost>,
    beta: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.XImgProc.EdgeBoxes;
  createEdgeBoxes(
    alpha: number | StrongNumeric<SingleHost>,
    beta: number | StrongNumeric<SingleHost>,
    eta: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.XImgProc.EdgeBoxes;
  createEdgeBoxes(
    alpha: number | StrongNumeric<SingleHost>,
    beta: number | StrongNumeric<SingleHost>,
    eta: number | StrongNumeric<SingleHost>,
    minScore: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.XImgProc.EdgeBoxes;
  createEdgeBoxes(
    alpha: number | StrongNumeric<SingleHost>,
    beta: number | StrongNumeric<SingleHost>,
    eta: number | StrongNumeric<SingleHost>,
    minScore: number | StrongNumeric<SingleHost>,
    maxBoxes: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.XImgProc.EdgeBoxes;
  createEdgeBoxes(
    alpha: number | StrongNumeric<SingleHost>,
    beta: number | StrongNumeric<SingleHost>,
    eta: number | StrongNumeric<SingleHost>,
    minScore: number | StrongNumeric<SingleHost>,
    maxBoxes: number | StrongNumeric<Int32Host>,
    edgeMinMag: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.XImgProc.EdgeBoxes;
  createEdgeBoxes(
    alpha: number | StrongNumeric<SingleHost>,
    beta: number | StrongNumeric<SingleHost>,
    eta: number | StrongNumeric<SingleHost>,
    minScore: number | StrongNumeric<SingleHost>,
    maxBoxes: number | StrongNumeric<Int32Host>,
    edgeMinMag: number | StrongNumeric<SingleHost>,
    edgeMergeThr: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.XImgProc.EdgeBoxes;
  createEdgeBoxes(
    alpha: number | StrongNumeric<SingleHost>,
    beta: number | StrongNumeric<SingleHost>,
    eta: number | StrongNumeric<SingleHost>,
    minScore: number | StrongNumeric<SingleHost>,
    maxBoxes: number | StrongNumeric<Int32Host>,
    edgeMinMag: number | StrongNumeric<SingleHost>,
    edgeMergeThr: number | StrongNumeric<SingleHost>,
    clusterMinMag: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.XImgProc.EdgeBoxes;
  createEdgeBoxes(
    alpha: number | StrongNumeric<SingleHost>,
    beta: number | StrongNumeric<SingleHost>,
    eta: number | StrongNumeric<SingleHost>,
    minScore: number | StrongNumeric<SingleHost>,
    maxBoxes: number | StrongNumeric<Int32Host>,
    edgeMinMag: number | StrongNumeric<SingleHost>,
    edgeMergeThr: number | StrongNumeric<SingleHost>,
    clusterMinMag: number | StrongNumeric<SingleHost>,
    maxAspectRatio: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.XImgProc.EdgeBoxes;
  createEdgeBoxes(
    alpha: number | StrongNumeric<SingleHost>,
    beta: number | StrongNumeric<SingleHost>,
    eta: number | StrongNumeric<SingleHost>,
    minScore: number | StrongNumeric<SingleHost>,
    maxBoxes: number | StrongNumeric<Int32Host>,
    edgeMinMag: number | StrongNumeric<SingleHost>,
    edgeMergeThr: number | StrongNumeric<SingleHost>,
    clusterMinMag: number | StrongNumeric<SingleHost>,
    maxAspectRatio: number | StrongNumeric<SingleHost>,
    minBoxArea: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.XImgProc.EdgeBoxes;
  createEdgeBoxes(
    alpha: number | StrongNumeric<SingleHost>,
    beta: number | StrongNumeric<SingleHost>,
    eta: number | StrongNumeric<SingleHost>,
    minScore: number | StrongNumeric<SingleHost>,
    maxBoxes: number | StrongNumeric<Int32Host>,
    edgeMinMag: number | StrongNumeric<SingleHost>,
    edgeMergeThr: number | StrongNumeric<SingleHost>,
    clusterMinMag: number | StrongNumeric<SingleHost>,
    maxAspectRatio: number | StrongNumeric<SingleHost>,
    minBoxArea: number | StrongNumeric<SingleHost>,
    gamma: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.XImgProc.EdgeBoxes;
  createEdgeBoxes(
    alpha: number | StrongNumeric<SingleHost>,
    beta: number | StrongNumeric<SingleHost>,
    eta: number | StrongNumeric<SingleHost>,
    minScore: number | StrongNumeric<SingleHost>,
    maxBoxes: number | StrongNumeric<Int32Host>,
    edgeMinMag: number | StrongNumeric<SingleHost>,
    edgeMergeThr: number | StrongNumeric<SingleHost>,
    clusterMinMag: number | StrongNumeric<SingleHost>,
    maxAspectRatio: number | StrongNumeric<SingleHost>,
    minBoxArea: number | StrongNumeric<SingleHost>,
    gamma: number | StrongNumeric<SingleHost>,
    kappa: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.XImgProc.EdgeBoxes;
  createDTFilter(
    guide: OpenCvSharp.InputArray,
    sigmaSpatial: number | StrongNumeric<DoubleHost>,
    sigmaColor: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.XImgProc.DTFilter;
  createDTFilter(
    guide: OpenCvSharp.InputArray,
    sigmaSpatial: number | StrongNumeric<DoubleHost>,
    sigmaColor: number | StrongNumeric<DoubleHost>,
    mode: EnumInput<OpenCvSharp.XImgProc.EdgeAwareFiltersList>
  ): OpenCvSharp.XImgProc.DTFilter;
  createDTFilter(
    guide: OpenCvSharp.InputArray,
    sigmaSpatial: number | StrongNumeric<DoubleHost>,
    sigmaColor: number | StrongNumeric<DoubleHost>,
    mode: EnumInput<OpenCvSharp.XImgProc.EdgeAwareFiltersList>,
    numIters: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.XImgProc.DTFilter;
  dtFilter(
    guide: OpenCvSharp.InputArray,
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    sigmaSpatial: number | StrongNumeric<DoubleHost>,
    sigmaColor: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  dtFilter(
    guide: OpenCvSharp.InputArray,
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    sigmaSpatial: number | StrongNumeric<DoubleHost>,
    sigmaColor: number | StrongNumeric<DoubleHost>,
    mode: EnumInput<OpenCvSharp.XImgProc.EdgeAwareFiltersList>
  ): VoidResult;
  dtFilter(
    guide: OpenCvSharp.InputArray,
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    sigmaSpatial: number | StrongNumeric<DoubleHost>,
    sigmaColor: number | StrongNumeric<DoubleHost>,
    mode: EnumInput<OpenCvSharp.XImgProc.EdgeAwareFiltersList>,
    numIters: number | StrongNumeric<Int32Host>
  ): VoidResult;
  createGuidedFilter(
    guide: OpenCvSharp.InputArray,
    radius: number | StrongNumeric<Int32Host>,
    eps: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.XImgProc.GuidedFilter;
  guidedFilter(
    guide: OpenCvSharp.InputArray,
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    radius: number | StrongNumeric<Int32Host>,
    eps: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  guidedFilter(
    guide: OpenCvSharp.InputArray,
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    radius: number | StrongNumeric<Int32Host>,
    eps: number | StrongNumeric<DoubleHost>,
    dDepth: number | StrongNumeric<Int32Host>
  ): VoidResult;
  createAMFilter(
    sigmaS: number | StrongNumeric<DoubleHost>,
    sigmaR: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.XImgProc.AdaptiveManifoldFilter;
  createAMFilter(
    sigmaS: number | StrongNumeric<DoubleHost>,
    sigmaR: number | StrongNumeric<DoubleHost>,
    adjustOutliers: boolean
  ): OpenCvSharp.XImgProc.AdaptiveManifoldFilter;
  amFilter(
    joint: OpenCvSharp.InputArray,
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    sigmaS: number | StrongNumeric<DoubleHost>,
    sigmaR: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  amFilter(
    joint: OpenCvSharp.InputArray,
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    sigmaS: number | StrongNumeric<DoubleHost>,
    sigmaR: number | StrongNumeric<DoubleHost>,
    adjustOutliers: boolean
  ): VoidResult;
  jointBilateralFilter(
    joint: OpenCvSharp.InputArray,
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    d: number | StrongNumeric<Int32Host>,
    sigmaColor: number | StrongNumeric<DoubleHost>,
    sigmaSpace: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  jointBilateralFilter(
    joint: OpenCvSharp.InputArray,
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    d: number | StrongNumeric<Int32Host>,
    sigmaColor: number | StrongNumeric<DoubleHost>,
    sigmaSpace: number | StrongNumeric<DoubleHost>,
    borderType: EnumInput<OpenCvSharp.BorderTypes>
  ): VoidResult;
  bilateralTextureFilter(src: OpenCvSharp.InputArray, dst: OpenCvSharp.OutputArray): VoidResult;
  bilateralTextureFilter(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    fr: number | StrongNumeric<Int32Host>
  ): VoidResult;
  bilateralTextureFilter(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    fr: number | StrongNumeric<Int32Host>,
    numIter: number | StrongNumeric<Int32Host>
  ): VoidResult;
  bilateralTextureFilter(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    fr: number | StrongNumeric<Int32Host>,
    numIter: number | StrongNumeric<Int32Host>,
    sigmaAlpha: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  bilateralTextureFilter(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    fr: number | StrongNumeric<Int32Host>,
    numIter: number | StrongNumeric<Int32Host>,
    sigmaAlpha: number | StrongNumeric<DoubleHost>,
    sigmaAvg: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  rollingGuidanceFilter(src: OpenCvSharp.InputArray, dst: OpenCvSharp.OutputArray): VoidResult;
  rollingGuidanceFilter(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    d: number | StrongNumeric<Int32Host>
  ): VoidResult;
  rollingGuidanceFilter(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    d: number | StrongNumeric<Int32Host>,
    sigmaColor: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  rollingGuidanceFilter(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    d: number | StrongNumeric<Int32Host>,
    sigmaColor: number | StrongNumeric<DoubleHost>,
    sigmaSpace: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  rollingGuidanceFilter(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    d: number | StrongNumeric<Int32Host>,
    sigmaColor: number | StrongNumeric<DoubleHost>,
    sigmaSpace: number | StrongNumeric<DoubleHost>,
    numOfIter: number | StrongNumeric<Int32Host>
  ): VoidResult;
  rollingGuidanceFilter(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    d: number | StrongNumeric<Int32Host>,
    sigmaColor: number | StrongNumeric<DoubleHost>,
    sigmaSpace: number | StrongNumeric<DoubleHost>,
    numOfIter: number | StrongNumeric<Int32Host>,
    borderType: EnumInput<OpenCvSharp.BorderTypes>
  ): VoidResult;
  fastBilateralSolverFilter(
    guide: OpenCvSharp.InputArray,
    src: OpenCvSharp.InputArray,
    confidence: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray
  ): VoidResult;
  fastBilateralSolverFilter(
    guide: OpenCvSharp.InputArray,
    src: OpenCvSharp.InputArray,
    confidence: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    sigmaSpatial: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  fastBilateralSolverFilter(
    guide: OpenCvSharp.InputArray,
    src: OpenCvSharp.InputArray,
    confidence: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    sigmaSpatial: number | StrongNumeric<DoubleHost>,
    sigmaLuma: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  fastBilateralSolverFilter(
    guide: OpenCvSharp.InputArray,
    src: OpenCvSharp.InputArray,
    confidence: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    sigmaSpatial: number | StrongNumeric<DoubleHost>,
    sigmaLuma: number | StrongNumeric<DoubleHost>,
    sigmaChroma: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  fastBilateralSolverFilter(
    guide: OpenCvSharp.InputArray,
    src: OpenCvSharp.InputArray,
    confidence: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    sigmaSpatial: number | StrongNumeric<DoubleHost>,
    sigmaLuma: number | StrongNumeric<DoubleHost>,
    sigmaChroma: number | StrongNumeric<DoubleHost>,
    lambda: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  fastBilateralSolverFilter(
    guide: OpenCvSharp.InputArray,
    src: OpenCvSharp.InputArray,
    confidence: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    sigmaSpatial: number | StrongNumeric<DoubleHost>,
    sigmaLuma: number | StrongNumeric<DoubleHost>,
    sigmaChroma: number | StrongNumeric<DoubleHost>,
    lambda: number | StrongNumeric<DoubleHost>,
    numIter: number | StrongNumeric<Int32Host>
  ): VoidResult;
  fastBilateralSolverFilter(
    guide: OpenCvSharp.InputArray,
    src: OpenCvSharp.InputArray,
    confidence: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    sigmaSpatial: number | StrongNumeric<DoubleHost>,
    sigmaLuma: number | StrongNumeric<DoubleHost>,
    sigmaChroma: number | StrongNumeric<DoubleHost>,
    lambda: number | StrongNumeric<DoubleHost>,
    numIter: number | StrongNumeric<Int32Host>,
    maxTol: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  createFastGlobalSmootherFilter(
    guide: OpenCvSharp.InputArray,
    lambda: number | StrongNumeric<DoubleHost>,
    sigmaColor: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.XImgProc.FastGlobalSmootherFilter;
  createFastGlobalSmootherFilter(
    guide: OpenCvSharp.InputArray,
    lambda: number | StrongNumeric<DoubleHost>,
    sigmaColor: number | StrongNumeric<DoubleHost>,
    lambdaAttenuation: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.XImgProc.FastGlobalSmootherFilter;
  createFastGlobalSmootherFilter(
    guide: OpenCvSharp.InputArray,
    lambda: number | StrongNumeric<DoubleHost>,
    sigmaColor: number | StrongNumeric<DoubleHost>,
    lambdaAttenuation: number | StrongNumeric<DoubleHost>,
    numIter: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.XImgProc.FastGlobalSmootherFilter;
  fastGlobalSmootherFilter(
    guide: OpenCvSharp.InputArray,
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    lambda: number | StrongNumeric<DoubleHost>,
    sigmaColor: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  fastGlobalSmootherFilter(
    guide: OpenCvSharp.InputArray,
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    lambda: number | StrongNumeric<DoubleHost>,
    sigmaColor: number | StrongNumeric<DoubleHost>,
    lambdaAttenuation: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  fastGlobalSmootherFilter(
    guide: OpenCvSharp.InputArray,
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    lambda: number | StrongNumeric<DoubleHost>,
    sigmaColor: number | StrongNumeric<DoubleHost>,
    lambdaAttenuation: number | StrongNumeric<DoubleHost>,
    numIter: number | StrongNumeric<Int32Host>
  ): VoidResult;
  l0Smooth(src: OpenCvSharp.InputArray, dst: OpenCvSharp.OutputArray): VoidResult;
  l0Smooth(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    lambda: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  l0Smooth(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    lambda: number | StrongNumeric<DoubleHost>,
    kappa: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  edgePreservingFilter(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    d: number | StrongNumeric<Int32Host>,
    threshold: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  covarianceEstimation(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    windowRows: number | StrongNumeric<Int32Host>,
    windowCols: number | StrongNumeric<Int32Host>
  ): VoidResult;
  fastHoughTransform(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    dstMatDepth: OpenCvSharp.MatType
  ): VoidResult;
  fastHoughTransform(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    dstMatDepth: OpenCvSharp.MatType,
    angleRange: EnumInput<OpenCvSharp.XImgProc.AngleRangeOption>
  ): VoidResult;
  fastHoughTransform(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    dstMatDepth: OpenCvSharp.MatType,
    angleRange: EnumInput<OpenCvSharp.XImgProc.AngleRangeOption>,
    op: EnumInput<OpenCvSharp.XImgProc.HoughOP>
  ): VoidResult;
  fastHoughTransform(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    dstMatDepth: OpenCvSharp.MatType,
    angleRange: EnumInput<OpenCvSharp.XImgProc.AngleRangeOption>,
    op: EnumInput<OpenCvSharp.XImgProc.HoughOP>,
    makeSkew: EnumInput<OpenCvSharp.XImgProc.HoughDeskewOption>
  ): VoidResult;
  houghPoint2Line(
    houghPoint: OpenCvSharp.Point,
    srcImgInfo: OpenCvSharp.InputArray
  ): OpenCvSharp.Vec4i;
  houghPoint2Line(
    houghPoint: OpenCvSharp.Point,
    srcImgInfo: OpenCvSharp.InputArray,
    angleRange: EnumInput<OpenCvSharp.XImgProc.AngleRangeOption>
  ): OpenCvSharp.Vec4i;
  houghPoint2Line(
    houghPoint: OpenCvSharp.Point,
    srcImgInfo: OpenCvSharp.InputArray,
    angleRange: EnumInput<OpenCvSharp.XImgProc.AngleRangeOption>,
    makeSkew: EnumInput<OpenCvSharp.XImgProc.HoughDeskewOption>
  ): OpenCvSharp.Vec4i;
  houghPoint2Line(
    houghPoint: OpenCvSharp.Point,
    srcImgInfo: OpenCvSharp.InputArray,
    angleRange: EnumInput<OpenCvSharp.XImgProc.AngleRangeOption>,
    makeSkew: EnumInput<OpenCvSharp.XImgProc.HoughDeskewOption>,
    rules: EnumInput<OpenCvSharp.XImgProc.RulesOption>
  ): OpenCvSharp.Vec4i;
  createFastLineDetector(): OpenCvSharp.XImgProc.FastLineDetector;
  createFastLineDetector(
    lengthThreshold: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.XImgProc.FastLineDetector;
  createFastLineDetector(
    lengthThreshold: number | StrongNumeric<Int32Host>,
    distanceThreshold: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.XImgProc.FastLineDetector;
  createFastLineDetector(
    lengthThreshold: number | StrongNumeric<Int32Host>,
    distanceThreshold: number | StrongNumeric<SingleHost>,
    cannyTh1: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.XImgProc.FastLineDetector;
  createFastLineDetector(
    lengthThreshold: number | StrongNumeric<Int32Host>,
    distanceThreshold: number | StrongNumeric<SingleHost>,
    cannyTh1: number | StrongNumeric<DoubleHost>,
    cannyTh2: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.XImgProc.FastLineDetector;
  createFastLineDetector(
    lengthThreshold: number | StrongNumeric<Int32Host>,
    distanceThreshold: number | StrongNumeric<SingleHost>,
    cannyTh1: number | StrongNumeric<DoubleHost>,
    cannyTh2: number | StrongNumeric<DoubleHost>,
    cannyApertureSize: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.XImgProc.FastLineDetector;
  createFastLineDetector(
    lengthThreshold: number | StrongNumeric<Int32Host>,
    distanceThreshold: number | StrongNumeric<SingleHost>,
    cannyTh1: number | StrongNumeric<DoubleHost>,
    cannyTh2: number | StrongNumeric<DoubleHost>,
    cannyApertureSize: number | StrongNumeric<Int32Host>,
    doMerge: boolean
  ): OpenCvSharp.XImgProc.FastLineDetector;
  createSuperpixelLSC(image: OpenCvSharp.InputArray): OpenCvSharp.XImgProc.SuperpixelLSC;
  createSuperpixelLSC(
    image: OpenCvSharp.InputArray,
    regionSize: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.XImgProc.SuperpixelLSC;
  createSuperpixelLSC(
    image: OpenCvSharp.InputArray,
    regionSize: number | StrongNumeric<Int32Host>,
    ratio: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.XImgProc.SuperpixelLSC;
  gradientPaillouY(
    op: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    alpha: number | StrongNumeric<DoubleHost>,
    omega: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  gradientPaillouX(
    op: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    alpha: number | StrongNumeric<DoubleHost>,
    omega: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  peiLinNormalization(i: OpenCvSharp.InputArray): HostArray<number>;
  peiLinNormalization(i: OpenCvSharp.InputArray, t: OpenCvSharp.OutputArray): VoidResult;
  createSuperpixelSEEDS(
    imageWidth: number | StrongNumeric<Int32Host>,
    imageHeight: number | StrongNumeric<Int32Host>,
    imageChannels: number | StrongNumeric<Int32Host>,
    numSuperpixels: number | StrongNumeric<Int32Host>,
    numLevels: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.XImgProc.SuperpixelSEEDS;
  createSuperpixelSEEDS(
    imageWidth: number | StrongNumeric<Int32Host>,
    imageHeight: number | StrongNumeric<Int32Host>,
    imageChannels: number | StrongNumeric<Int32Host>,
    numSuperpixels: number | StrongNumeric<Int32Host>,
    numLevels: number | StrongNumeric<Int32Host>,
    prior: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.XImgProc.SuperpixelSEEDS;
  createSuperpixelSEEDS(
    imageWidth: number | StrongNumeric<Int32Host>,
    imageHeight: number | StrongNumeric<Int32Host>,
    imageChannels: number | StrongNumeric<Int32Host>,
    numSuperpixels: number | StrongNumeric<Int32Host>,
    numLevels: number | StrongNumeric<Int32Host>,
    prior: number | StrongNumeric<Int32Host>,
    histogramBins: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.XImgProc.SuperpixelSEEDS;
  createSuperpixelSEEDS(
    imageWidth: number | StrongNumeric<Int32Host>,
    imageHeight: number | StrongNumeric<Int32Host>,
    imageChannels: number | StrongNumeric<Int32Host>,
    numSuperpixels: number | StrongNumeric<Int32Host>,
    numLevels: number | StrongNumeric<Int32Host>,
    prior: number | StrongNumeric<Int32Host>,
    histogramBins: number | StrongNumeric<Int32Host>,
    doubleStep: boolean
  ): OpenCvSharp.XImgProc.SuperpixelSEEDS;
  createRFFeatureGetter(): OpenCvSharp.XImgProc.RFFeatureGetter;
  createStructuredEdgeDetection(model: string): OpenCvSharp.XImgProc.StructuredEdgeDetection;
  createStructuredEdgeDetection(
    model: string,
    howToGetFeatures: OpenCvSharp.XImgProc.RFFeatureGetter | null
  ): OpenCvSharp.XImgProc.StructuredEdgeDetection;
  weightedMedianFilter(
    joint: OpenCvSharp.InputArray,
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    r: number | StrongNumeric<Int32Host>
  ): VoidResult;
  weightedMedianFilter(
    joint: OpenCvSharp.InputArray,
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    r: number | StrongNumeric<Int32Host>,
    sigma: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  weightedMedianFilter(
    joint: OpenCvSharp.InputArray,
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    r: number | StrongNumeric<Int32Host>,
    sigma: number | StrongNumeric<DoubleHost>,
    weightType: EnumInput<OpenCvSharp.XImgProc.WMFWeightType>
  ): VoidResult;
  weightedMedianFilter(
    joint: OpenCvSharp.InputArray,
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    r: number | StrongNumeric<Int32Host>,
    sigma: number | StrongNumeric<DoubleHost>,
    weightType: EnumInput<OpenCvSharp.XImgProc.WMFWeightType>,
    mask: OpenCvSharp.Mat | null
  ): VoidResult;
  readonly Segmentation: CvXImgProc_SegmentationHostType;
  readonly RL: CvXImgProc_RLHostType;
}

export {};
