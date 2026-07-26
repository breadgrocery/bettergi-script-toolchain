import type {
  ByteHost,
  ClrHostValue,
  DoubleHost,
  EnumInput,
  HostArray,
  HostDelegate,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  SingleHost,
  StaticTypeTrait,
  StrongNumeric,
  UInt64Host
} from "../Microsoft/ClearScript/HostType";
import type { HostVariableOut, HostVariableRef } from "../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/AsyncCallback";
import "../System/Collections/Generic/IEnumerable";
import "../System/Collections/Generic/IList";
import "../System/IAsyncResult";
import "../System/ICloneable";
import "../System/IntPtr";
import "../System/MulticastDelegate";
import "../System/Nullable";
import "../System/Runtime/Serialization/ISerializable";
import "./AdaptiveThresholdTypes";
import "./AgastFeatureDetector";
import "./BorderTypes";
import "./CLAHE";
import "./CalibrationFlags";
import "./ChessboardFlags";
import "./CircleSegment";
import "./CmpType";
import "./ColorConversionCodes";
import "./ColormapTypes";
import "./ConnectedComponent";
import "./ConnectedComponentsAlgorithmsTypes";
import "./ContourApproximationModes";
import "./CovarFlags";
import "./CpuFeatures";
import "./DMatch";
import "./DctFlags";
import "./DecompTypes";
import "./DenseOpticalFlowExt";
import "./DftFlags";
import "./DistanceTransformLabelTypes";
import "./DistanceTransformMasks";
import "./DistanceTypes";
import "./DrawMatchesFlags";
import "./EdgePreservingMethods";
import "./EssentialMatMethod";
import "./FASTType";
import "./Feature2D";
import "./FindCirclesGridFlags";
import "./FishEyeCalibrationFlags";
import "./FlipMode";
import "./FloodFillFlags";
import "./FormatType";
import "./FrameSource";
import "./FundamentalMatMethods";
import "./GemmFlags";
import "./GrabCutModes";
import "./HandEyeCalibrationMethod";
import "./HersheyFonts";
import "./HierarchyIndex";
import "./HistCompMethods";
import "./HomographyMethods";
import "./HoughModes";
import "./ImageEncodingParam";
import "./ImreadModes";
import "./InpaintMethod";
import "./InputArray";
import "./InputOutputArray";
import "./Internal/Vectors/VectorOfMat";
import "./InterpolationFlags";
import "./KMeansFlags";
import "./KeyPoint";
import "./Line2D";
import "./Line3D";
import "./LineSegmentPoint";
import "./LineSegmentPolar";
import "./LineTypes";
import "./LogLevel";
import "./MarkerTypes";
import "./Mat";
import "./MatExpr";
import "./MatType";
import "./Moments";
import "./MorphShapes";
import "./MorphTypes";
import "./MotionTypes";
import "./MouseCallback";
import "./MouseEventFlags";
import "./NormTypes";
import "./OpticalFlowFlags";
import "./OutputArray";
import "./PixelConnectivity";
import "./Point";
import "./Point2d";
import "./Point2f";
import "./Point3d";
import "./Point3f";
import "./Point3i";
import "./ProjectionType";
import "./RNG";
import "./Rangef";
import "./Rect";
import "./RectanglesIntersectTypes";
import "./ReduceDimension";
import "./ReduceTypes";
import "./RetrievalModes";
import "./RobotWorldHandEyeCalibrationMethod";
import "./RobustEstimationAlgorithms";
import "./RotateFlags";
import "./RotatedRect";
import "./SVD";
import "./Scalar";
import "./SeamlessCloneMethods";
import "./ShapeMatchModes";
import "./Size";
import "./Size2d";
import "./SolveLPResult";
import "./SolvePnPFlags";
import "./SortFlags";
import "./StereoRectificationFlags";
import "./SuperResolution";
import "./TemplateMatchModes";
import "./TermCriteria";
import "./ThresholdTypes";
import "./TrackbarCallbackNative";
import "./UsacParams";
import "./Vec2f";
import "./Vec3d";
import "./Vec3f";
import "./Vec4d";
import "./Vec4f";
import "./Vec4i";
import "./WarpPolarMode";
import "./WindowFlags";
import "./WindowPropertyFlags";

declare const cv2Brand: unique symbol;
export interface Cv2 extends ClrHostValue {
  readonly [cv2Brand]: true;
}

declare const cv2_FishEyeBrand: unique symbol;
export interface Cv2_FishEye extends ClrHostValue {
  readonly [cv2_FishEyeBrand]: true;
}

export interface Cv2_FishEyeHostType extends HostType<Cv2_FishEye, StaticTypeTrait> {
  projectPoints(
    objectPoints: OpenCvSharp.InputArray,
    imagePoints: OpenCvSharp.OutputArray,
    rvec: OpenCvSharp.InputArray,
    tvec: OpenCvSharp.InputArray,
    k: OpenCvSharp.InputArray,
    d: OpenCvSharp.InputArray
  ): VoidResult;
  projectPoints(
    objectPoints: OpenCvSharp.InputArray,
    imagePoints: OpenCvSharp.OutputArray,
    rvec: OpenCvSharp.InputArray,
    tvec: OpenCvSharp.InputArray,
    k: OpenCvSharp.InputArray,
    d: OpenCvSharp.InputArray,
    alpha: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  projectPoints(
    objectPoints: OpenCvSharp.InputArray,
    imagePoints: OpenCvSharp.OutputArray,
    rvec: OpenCvSharp.InputArray,
    tvec: OpenCvSharp.InputArray,
    k: OpenCvSharp.InputArray,
    d: OpenCvSharp.InputArray,
    alpha: number | StrongNumeric<DoubleHost>,
    jacobian: OpenCvSharp.OutputArray | null
  ): VoidResult;
  distortPoints(
    undistorted: OpenCvSharp.InputArray,
    distorted: OpenCvSharp.OutputArray,
    k: OpenCvSharp.InputArray,
    d: OpenCvSharp.InputArray
  ): VoidResult;
  distortPoints(
    undistorted: OpenCvSharp.InputArray,
    distorted: OpenCvSharp.OutputArray,
    k: OpenCvSharp.InputArray,
    d: OpenCvSharp.InputArray,
    alpha: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  undistortPoints(
    distorted: OpenCvSharp.InputArray,
    undistorted: OpenCvSharp.OutputArray,
    k: OpenCvSharp.InputArray,
    d: OpenCvSharp.InputArray
  ): VoidResult;
  undistortPoints(
    distorted: OpenCvSharp.InputArray,
    undistorted: OpenCvSharp.OutputArray,
    k: OpenCvSharp.InputArray,
    d: OpenCvSharp.InputArray,
    r: OpenCvSharp.InputArray | null
  ): VoidResult;
  undistortPoints(
    distorted: OpenCvSharp.InputArray,
    undistorted: OpenCvSharp.OutputArray,
    k: OpenCvSharp.InputArray,
    d: OpenCvSharp.InputArray,
    r: OpenCvSharp.InputArray | null,
    p: OpenCvSharp.InputArray | null
  ): VoidResult;
  initUndistortRectifyMap(
    k: OpenCvSharp.InputArray,
    d: OpenCvSharp.InputArray,
    r: OpenCvSharp.InputArray,
    p: OpenCvSharp.InputArray,
    size: OpenCvSharp.Size,
    m1type: number | StrongNumeric<Int32Host>,
    map1: OpenCvSharp.OutputArray,
    map2: OpenCvSharp.OutputArray
  ): VoidResult;
  undistortImage(
    distorted: OpenCvSharp.InputArray,
    undistorted: OpenCvSharp.OutputArray,
    k: OpenCvSharp.InputArray,
    d: OpenCvSharp.InputArray
  ): VoidResult;
  undistortImage(
    distorted: OpenCvSharp.InputArray,
    undistorted: OpenCvSharp.OutputArray,
    k: OpenCvSharp.InputArray,
    d: OpenCvSharp.InputArray,
    knew: OpenCvSharp.InputArray | null
  ): VoidResult;
  undistortImage(
    distorted: OpenCvSharp.InputArray,
    undistorted: OpenCvSharp.OutputArray,
    k: OpenCvSharp.InputArray,
    d: OpenCvSharp.InputArray,
    knew: OpenCvSharp.InputArray | null,
    newSize: OpenCvSharp.Size
  ): VoidResult;
  estimateNewCameraMatrixForUndistortRectify(
    k: OpenCvSharp.InputArray,
    d: OpenCvSharp.InputArray,
    imageSize: OpenCvSharp.Size,
    r: OpenCvSharp.InputArray,
    p: OpenCvSharp.OutputArray
  ): VoidResult;
  estimateNewCameraMatrixForUndistortRectify(
    k: OpenCvSharp.InputArray,
    d: OpenCvSharp.InputArray,
    imageSize: OpenCvSharp.Size,
    r: OpenCvSharp.InputArray,
    p: OpenCvSharp.OutputArray,
    balance: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  estimateNewCameraMatrixForUndistortRectify(
    k: OpenCvSharp.InputArray,
    d: OpenCvSharp.InputArray,
    imageSize: OpenCvSharp.Size,
    r: OpenCvSharp.InputArray,
    p: OpenCvSharp.OutputArray,
    balance: number | StrongNumeric<DoubleHost>,
    newSize: OpenCvSharp.Size
  ): VoidResult;
  estimateNewCameraMatrixForUndistortRectify(
    k: OpenCvSharp.InputArray,
    d: OpenCvSharp.InputArray,
    imageSize: OpenCvSharp.Size,
    r: OpenCvSharp.InputArray,
    p: OpenCvSharp.OutputArray,
    balance: number | StrongNumeric<DoubleHost>,
    newSize: OpenCvSharp.Size,
    fovScale: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  calibrate(
    objectPoints: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    imagePoints: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    imageSize: OpenCvSharp.Size,
    k: OpenCvSharp.InputOutputArray,
    d: OpenCvSharp.InputOutputArray,
    rvecs: HostVariableOut<System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>>,
    tvecs: HostVariableOut<System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>>
  ): number;
  calibrate(
    objectPoints: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    imagePoints: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    imageSize: OpenCvSharp.Size,
    k: OpenCvSharp.InputOutputArray,
    d: OpenCvSharp.InputOutputArray,
    rvecs: HostVariableOut<System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>>,
    tvecs: HostVariableOut<System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>>,
    flags: EnumInput<OpenCvSharp.FishEyeCalibrationFlags>
  ): number;
  calibrate(
    objectPoints: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    imagePoints: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    imageSize: OpenCvSharp.Size,
    k: OpenCvSharp.InputOutputArray,
    d: OpenCvSharp.InputOutputArray,
    rvecs: HostVariableOut<System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>>,
    tvecs: HostVariableOut<System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>>,
    flags: EnumInput<OpenCvSharp.FishEyeCalibrationFlags>,
    criteria: OpenCvSharp.TermCriteria | null | null
  ): number;
  stereoRectify(
    k1: OpenCvSharp.InputArray,
    d1: OpenCvSharp.InputArray,
    k2: OpenCvSharp.InputArray,
    d2: OpenCvSharp.InputArray,
    imageSize: OpenCvSharp.Size,
    r: OpenCvSharp.InputArray,
    tvec: OpenCvSharp.InputArray,
    r1: OpenCvSharp.OutputArray,
    r2: OpenCvSharp.OutputArray,
    p1: OpenCvSharp.OutputArray,
    p2: OpenCvSharp.OutputArray,
    q: OpenCvSharp.OutputArray,
    flags: EnumInput<OpenCvSharp.FishEyeCalibrationFlags>
  ): VoidResult;
  stereoRectify(
    k1: OpenCvSharp.InputArray,
    d1: OpenCvSharp.InputArray,
    k2: OpenCvSharp.InputArray,
    d2: OpenCvSharp.InputArray,
    imageSize: OpenCvSharp.Size,
    r: OpenCvSharp.InputArray,
    tvec: OpenCvSharp.InputArray,
    r1: OpenCvSharp.OutputArray,
    r2: OpenCvSharp.OutputArray,
    p1: OpenCvSharp.OutputArray,
    p2: OpenCvSharp.OutputArray,
    q: OpenCvSharp.OutputArray,
    flags: EnumInput<OpenCvSharp.FishEyeCalibrationFlags>,
    newImageSize: OpenCvSharp.Size
  ): VoidResult;
  stereoRectify(
    k1: OpenCvSharp.InputArray,
    d1: OpenCvSharp.InputArray,
    k2: OpenCvSharp.InputArray,
    d2: OpenCvSharp.InputArray,
    imageSize: OpenCvSharp.Size,
    r: OpenCvSharp.InputArray,
    tvec: OpenCvSharp.InputArray,
    r1: OpenCvSharp.OutputArray,
    r2: OpenCvSharp.OutputArray,
    p1: OpenCvSharp.OutputArray,
    p2: OpenCvSharp.OutputArray,
    q: OpenCvSharp.OutputArray,
    flags: EnumInput<OpenCvSharp.FishEyeCalibrationFlags>,
    newImageSize: OpenCvSharp.Size,
    balance: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  stereoRectify(
    k1: OpenCvSharp.InputArray,
    d1: OpenCvSharp.InputArray,
    k2: OpenCvSharp.InputArray,
    d2: OpenCvSharp.InputArray,
    imageSize: OpenCvSharp.Size,
    r: OpenCvSharp.InputArray,
    tvec: OpenCvSharp.InputArray,
    r1: OpenCvSharp.OutputArray,
    r2: OpenCvSharp.OutputArray,
    p1: OpenCvSharp.OutputArray,
    p2: OpenCvSharp.OutputArray,
    q: OpenCvSharp.OutputArray,
    flags: EnumInput<OpenCvSharp.FishEyeCalibrationFlags>,
    newImageSize: OpenCvSharp.Size,
    balance: number | StrongNumeric<DoubleHost>,
    fovScale: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  stereoCalibrate(
    objectPoints: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    imagePoints1: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    imagePoints2: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    k1: OpenCvSharp.InputOutputArray,
    d1: OpenCvSharp.InputOutputArray,
    k2: OpenCvSharp.InputOutputArray,
    d2: OpenCvSharp.InputOutputArray,
    imageSize: OpenCvSharp.Size,
    r: OpenCvSharp.OutputArray,
    t: OpenCvSharp.OutputArray
  ): number;
  stereoCalibrate(
    objectPoints: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    imagePoints1: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    imagePoints2: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    k1: OpenCvSharp.InputOutputArray,
    d1: OpenCvSharp.InputOutputArray,
    k2: OpenCvSharp.InputOutputArray,
    d2: OpenCvSharp.InputOutputArray,
    imageSize: OpenCvSharp.Size,
    r: OpenCvSharp.OutputArray,
    t: OpenCvSharp.OutputArray,
    flags: EnumInput<OpenCvSharp.FishEyeCalibrationFlags>
  ): number;
  stereoCalibrate(
    objectPoints: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    imagePoints1: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    imagePoints2: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    k1: OpenCvSharp.InputOutputArray,
    d1: OpenCvSharp.InputOutputArray,
    k2: OpenCvSharp.InputOutputArray,
    d2: OpenCvSharp.InputOutputArray,
    imageSize: OpenCvSharp.Size,
    r: OpenCvSharp.OutputArray,
    t: OpenCvSharp.OutputArray,
    flags: EnumInput<OpenCvSharp.FishEyeCalibrationFlags>,
    criteria: OpenCvSharp.TermCriteria | null | null
  ): number;
}

declare global {
  namespace OpenCvSharp.Cv2 {
    type FishEye = import("./Cv2").Cv2_FishEye;
  }
}

declare const delegateCv2_PartitionPredicateBrand: unique symbol;
export interface Cv2_PartitionPredicate<T> extends HostDelegate {
  readonly [delegateCv2_PartitionPredicateBrand]: true;
  (t1: T | null, t2: T | null): boolean;
  invoke(t1: T | null, t2: T | null): boolean;
}

export interface Cv2_PartitionPredicateHostType<T> extends HostType<
  Cv2_PartitionPredicate<T>,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): Cv2_PartitionPredicate<T>;
}

declare global {
  namespace OpenCvSharp.Cv2 {
    type PartitionPredicate<T> = import("./Cv2").Cv2_PartitionPredicate<T>;
  }
}

declare global {
  namespace OpenCvSharp {
    type Cv2 = import("./Cv2").Cv2;
  }
}

export interface Cv2HostType extends HostType<Cv2, StaticTypeTrait> {
  readonly pi: number;
  readonly loG2: number;
  readonly filled: number;
  rodrigues(src: OpenCvSharp.InputArray, dst: OpenCvSharp.OutputArray): VoidResult;
  rodrigues(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    jacobian: OpenCvSharp.OutputArray | null
  ): VoidResult;
  rodrigues(
    vector: HostArray<number | StrongNumeric<DoubleHost>>,
    matrix: HostVariableOut<HostArray<number>>,
    jacobian: HostVariableOut<HostArray<number>>
  ): VoidResult;
  rodrigues(
    matrix: HostArray<number | StrongNumeric<DoubleHost>>,
    vector: HostVariableOut<HostArray<number>>,
    jacobian: HostVariableOut<HostArray<number>>
  ): VoidResult;
  findHomography(
    srcPoints: OpenCvSharp.InputArray,
    dstPoints: OpenCvSharp.InputArray
  ): OpenCvSharp.Mat;
  findHomography(
    srcPoints: OpenCvSharp.InputArray,
    dstPoints: OpenCvSharp.InputArray,
    method: EnumInput<OpenCvSharp.HomographyMethods>
  ): OpenCvSharp.Mat;
  findHomography(
    srcPoints: OpenCvSharp.InputArray,
    dstPoints: OpenCvSharp.InputArray,
    method: EnumInput<OpenCvSharp.HomographyMethods>,
    ransacReprojThreshold: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Mat;
  findHomography(
    srcPoints: OpenCvSharp.InputArray,
    dstPoints: OpenCvSharp.InputArray,
    method: EnumInput<OpenCvSharp.HomographyMethods>,
    ransacReprojThreshold: number | StrongNumeric<DoubleHost>,
    mask: OpenCvSharp.OutputArray | null
  ): OpenCvSharp.Mat;
  findHomography(
    srcPoints: OpenCvSharp.InputArray,
    dstPoints: OpenCvSharp.InputArray,
    method: EnumInput<OpenCvSharp.HomographyMethods>,
    ransacReprojThreshold: number | StrongNumeric<DoubleHost>,
    mask: OpenCvSharp.OutputArray | null,
    maxIters: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Mat;
  findHomography(
    srcPoints: OpenCvSharp.InputArray,
    dstPoints: OpenCvSharp.InputArray,
    method: EnumInput<OpenCvSharp.HomographyMethods>,
    ransacReprojThreshold: number | StrongNumeric<DoubleHost>,
    mask: OpenCvSharp.OutputArray | null,
    maxIters: number | StrongNumeric<Int32Host>,
    confidence: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Mat;
  findHomography(
    srcPoints: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2d>,
    dstPoints: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2d>
  ): OpenCvSharp.Mat;
  findHomography(
    srcPoints: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2d>,
    dstPoints: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2d>,
    method: EnumInput<OpenCvSharp.HomographyMethods>
  ): OpenCvSharp.Mat;
  findHomography(
    srcPoints: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2d>,
    dstPoints: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2d>,
    method: EnumInput<OpenCvSharp.HomographyMethods>,
    ransacReprojThreshold: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Mat;
  findHomography(
    srcPoints: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2d>,
    dstPoints: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2d>,
    method: EnumInput<OpenCvSharp.HomographyMethods>,
    ransacReprojThreshold: number | StrongNumeric<DoubleHost>,
    mask: OpenCvSharp.OutputArray | null
  ): OpenCvSharp.Mat;
  findHomography(
    srcPoints: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2d>,
    dstPoints: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2d>,
    method: EnumInput<OpenCvSharp.HomographyMethods>,
    ransacReprojThreshold: number | StrongNumeric<DoubleHost>,
    mask: OpenCvSharp.OutputArray | null,
    maxIters: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Mat;
  findHomography(
    srcPoints: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2d>,
    dstPoints: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2d>,
    method: EnumInput<OpenCvSharp.HomographyMethods>,
    ransacReprojThreshold: number | StrongNumeric<DoubleHost>,
    mask: OpenCvSharp.OutputArray | null,
    maxIters: number | StrongNumeric<Int32Host>,
    confidence: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Mat;
  findHomography(
    srcPoints: OpenCvSharp.InputArray,
    dstPoints: OpenCvSharp.InputArray,
    mask: OpenCvSharp.OutputArray,
    params: OpenCvSharp.UsacParams | null
  ): OpenCvSharp.Mat;
  rqDecomp3x3(
    src: OpenCvSharp.InputArray,
    mtxR: OpenCvSharp.OutputArray,
    mtxQ: OpenCvSharp.OutputArray
  ): OpenCvSharp.Vec3d;
  rqDecomp3x3(
    src: OpenCvSharp.InputArray,
    mtxR: OpenCvSharp.OutputArray,
    mtxQ: OpenCvSharp.OutputArray,
    qx: OpenCvSharp.OutputArray | null
  ): OpenCvSharp.Vec3d;
  rqDecomp3x3(
    src: OpenCvSharp.InputArray,
    mtxR: OpenCvSharp.OutputArray,
    mtxQ: OpenCvSharp.OutputArray,
    qx: OpenCvSharp.OutputArray | null,
    qy: OpenCvSharp.OutputArray | null
  ): OpenCvSharp.Vec3d;
  rqDecomp3x3(
    src: OpenCvSharp.InputArray,
    mtxR: OpenCvSharp.OutputArray,
    mtxQ: OpenCvSharp.OutputArray,
    qx: OpenCvSharp.OutputArray | null,
    qy: OpenCvSharp.OutputArray | null,
    qz: OpenCvSharp.OutputArray | null
  ): OpenCvSharp.Vec3d;
  rqDecomp3x3(
    src: HostArray<number | StrongNumeric<DoubleHost>>,
    mtxR: HostVariableOut<HostArray<number>>,
    mtxQ: HostVariableOut<HostArray<number>>
  ): OpenCvSharp.Vec3d;
  rqDecomp3x3(
    src: HostArray<number | StrongNumeric<DoubleHost>>,
    mtxR: HostVariableOut<HostArray<number>>,
    mtxQ: HostVariableOut<HostArray<number>>,
    qx: HostVariableOut<HostArray<number>>,
    qy: HostVariableOut<HostArray<number>>,
    qz: HostVariableOut<HostArray<number>>
  ): OpenCvSharp.Vec3d;
  decomposeProjectionMatrix(
    projMatrix: OpenCvSharp.InputArray,
    cameraMatrix: OpenCvSharp.OutputArray,
    rotMatrix: OpenCvSharp.OutputArray,
    transVect: OpenCvSharp.OutputArray
  ): VoidResult;
  decomposeProjectionMatrix(
    projMatrix: OpenCvSharp.InputArray,
    cameraMatrix: OpenCvSharp.OutputArray,
    rotMatrix: OpenCvSharp.OutputArray,
    transVect: OpenCvSharp.OutputArray,
    rotMatrixX: OpenCvSharp.OutputArray | null
  ): VoidResult;
  decomposeProjectionMatrix(
    projMatrix: OpenCvSharp.InputArray,
    cameraMatrix: OpenCvSharp.OutputArray,
    rotMatrix: OpenCvSharp.OutputArray,
    transVect: OpenCvSharp.OutputArray,
    rotMatrixX: OpenCvSharp.OutputArray | null,
    rotMatrixY: OpenCvSharp.OutputArray | null
  ): VoidResult;
  decomposeProjectionMatrix(
    projMatrix: OpenCvSharp.InputArray,
    cameraMatrix: OpenCvSharp.OutputArray,
    rotMatrix: OpenCvSharp.OutputArray,
    transVect: OpenCvSharp.OutputArray,
    rotMatrixX: OpenCvSharp.OutputArray | null,
    rotMatrixY: OpenCvSharp.OutputArray | null,
    rotMatrixZ: OpenCvSharp.OutputArray | null
  ): VoidResult;
  decomposeProjectionMatrix(
    projMatrix: OpenCvSharp.InputArray,
    cameraMatrix: OpenCvSharp.OutputArray,
    rotMatrix: OpenCvSharp.OutputArray,
    transVect: OpenCvSharp.OutputArray,
    rotMatrixX: OpenCvSharp.OutputArray | null,
    rotMatrixY: OpenCvSharp.OutputArray | null,
    rotMatrixZ: OpenCvSharp.OutputArray | null,
    eulerAngles: OpenCvSharp.OutputArray | null
  ): VoidResult;
  decomposeProjectionMatrix(
    projMatrix: HostArray<number | StrongNumeric<DoubleHost>>,
    cameraMatrix: HostVariableOut<HostArray<number>>,
    rotMatrix: HostVariableOut<HostArray<number>>,
    transVect: HostVariableOut<HostArray<number>>,
    rotMatrixX: HostVariableOut<HostArray<number>>,
    rotMatrixY: HostVariableOut<HostArray<number>>,
    rotMatrixZ: HostVariableOut<HostArray<number>>,
    eulerAngles: HostVariableOut<HostArray<number>>
  ): VoidResult;
  decomposeProjectionMatrix(
    projMatrix: HostArray<number | StrongNumeric<DoubleHost>>,
    cameraMatrix: HostVariableOut<HostArray<number>>,
    rotMatrix: HostVariableOut<HostArray<number>>,
    transVect: HostVariableOut<HostArray<number>>
  ): VoidResult;
  matMulDeriv(
    a: OpenCvSharp.InputArray,
    b: OpenCvSharp.InputArray,
    dABdA: OpenCvSharp.OutputArray,
    dABdB: OpenCvSharp.OutputArray
  ): VoidResult;
  composeRT(
    rvec1: OpenCvSharp.InputArray,
    tvec1: OpenCvSharp.InputArray,
    rvec2: OpenCvSharp.InputArray,
    tvec2: OpenCvSharp.InputArray,
    rvec3: OpenCvSharp.OutputArray,
    tvec3: OpenCvSharp.OutputArray
  ): VoidResult;
  composeRT(
    rvec1: OpenCvSharp.InputArray,
    tvec1: OpenCvSharp.InputArray,
    rvec2: OpenCvSharp.InputArray,
    tvec2: OpenCvSharp.InputArray,
    rvec3: OpenCvSharp.OutputArray,
    tvec3: OpenCvSharp.OutputArray,
    dr3dr1: OpenCvSharp.OutputArray | null
  ): VoidResult;
  composeRT(
    rvec1: OpenCvSharp.InputArray,
    tvec1: OpenCvSharp.InputArray,
    rvec2: OpenCvSharp.InputArray,
    tvec2: OpenCvSharp.InputArray,
    rvec3: OpenCvSharp.OutputArray,
    tvec3: OpenCvSharp.OutputArray,
    dr3dr1: OpenCvSharp.OutputArray | null,
    dr3dt1: OpenCvSharp.OutputArray | null
  ): VoidResult;
  composeRT(
    rvec1: OpenCvSharp.InputArray,
    tvec1: OpenCvSharp.InputArray,
    rvec2: OpenCvSharp.InputArray,
    tvec2: OpenCvSharp.InputArray,
    rvec3: OpenCvSharp.OutputArray,
    tvec3: OpenCvSharp.OutputArray,
    dr3dr1: OpenCvSharp.OutputArray | null,
    dr3dt1: OpenCvSharp.OutputArray | null,
    dr3dr2: OpenCvSharp.OutputArray | null
  ): VoidResult;
  composeRT(
    rvec1: OpenCvSharp.InputArray,
    tvec1: OpenCvSharp.InputArray,
    rvec2: OpenCvSharp.InputArray,
    tvec2: OpenCvSharp.InputArray,
    rvec3: OpenCvSharp.OutputArray,
    tvec3: OpenCvSharp.OutputArray,
    dr3dr1: OpenCvSharp.OutputArray | null,
    dr3dt1: OpenCvSharp.OutputArray | null,
    dr3dr2: OpenCvSharp.OutputArray | null,
    dr3dt2: OpenCvSharp.OutputArray | null
  ): VoidResult;
  composeRT(
    rvec1: OpenCvSharp.InputArray,
    tvec1: OpenCvSharp.InputArray,
    rvec2: OpenCvSharp.InputArray,
    tvec2: OpenCvSharp.InputArray,
    rvec3: OpenCvSharp.OutputArray,
    tvec3: OpenCvSharp.OutputArray,
    dr3dr1: OpenCvSharp.OutputArray | null,
    dr3dt1: OpenCvSharp.OutputArray | null,
    dr3dr2: OpenCvSharp.OutputArray | null,
    dr3dt2: OpenCvSharp.OutputArray | null,
    dt3dr1: OpenCvSharp.OutputArray | null
  ): VoidResult;
  composeRT(
    rvec1: OpenCvSharp.InputArray,
    tvec1: OpenCvSharp.InputArray,
    rvec2: OpenCvSharp.InputArray,
    tvec2: OpenCvSharp.InputArray,
    rvec3: OpenCvSharp.OutputArray,
    tvec3: OpenCvSharp.OutputArray,
    dr3dr1: OpenCvSharp.OutputArray | null,
    dr3dt1: OpenCvSharp.OutputArray | null,
    dr3dr2: OpenCvSharp.OutputArray | null,
    dr3dt2: OpenCvSharp.OutputArray | null,
    dt3dr1: OpenCvSharp.OutputArray | null,
    dt3dt1: OpenCvSharp.OutputArray | null
  ): VoidResult;
  composeRT(
    rvec1: OpenCvSharp.InputArray,
    tvec1: OpenCvSharp.InputArray,
    rvec2: OpenCvSharp.InputArray,
    tvec2: OpenCvSharp.InputArray,
    rvec3: OpenCvSharp.OutputArray,
    tvec3: OpenCvSharp.OutputArray,
    dr3dr1: OpenCvSharp.OutputArray | null,
    dr3dt1: OpenCvSharp.OutputArray | null,
    dr3dr2: OpenCvSharp.OutputArray | null,
    dr3dt2: OpenCvSharp.OutputArray | null,
    dt3dr1: OpenCvSharp.OutputArray | null,
    dt3dt1: OpenCvSharp.OutputArray | null,
    dt3dr2: OpenCvSharp.OutputArray | null
  ): VoidResult;
  composeRT(
    rvec1: OpenCvSharp.InputArray,
    tvec1: OpenCvSharp.InputArray,
    rvec2: OpenCvSharp.InputArray,
    tvec2: OpenCvSharp.InputArray,
    rvec3: OpenCvSharp.OutputArray,
    tvec3: OpenCvSharp.OutputArray,
    dr3dr1: OpenCvSharp.OutputArray | null,
    dr3dt1: OpenCvSharp.OutputArray | null,
    dr3dr2: OpenCvSharp.OutputArray | null,
    dr3dt2: OpenCvSharp.OutputArray | null,
    dt3dr1: OpenCvSharp.OutputArray | null,
    dt3dt1: OpenCvSharp.OutputArray | null,
    dt3dr2: OpenCvSharp.OutputArray | null,
    dt3dt2: OpenCvSharp.OutputArray | null
  ): VoidResult;
  composeRT(
    rvec1: HostArray<number | StrongNumeric<DoubleHost>>,
    tvec1: HostArray<number | StrongNumeric<DoubleHost>>,
    rvec2: HostArray<number | StrongNumeric<DoubleHost>>,
    tvec2: HostArray<number | StrongNumeric<DoubleHost>>,
    rvec3: HostVariableOut<HostArray<number>>,
    tvec3: HostVariableOut<HostArray<number>>,
    dr3dr1: HostVariableOut<HostArray<number>>,
    dr3dt1: HostVariableOut<HostArray<number>>,
    dr3dr2: HostVariableOut<HostArray<number>>,
    dr3dt2: HostVariableOut<HostArray<number>>,
    dt3dr1: HostVariableOut<HostArray<number>>,
    dt3dt1: HostVariableOut<HostArray<number>>,
    dt3dr2: HostVariableOut<HostArray<number>>,
    dt3dt2: HostVariableOut<HostArray<number>>
  ): VoidResult;
  composeRT(
    rvec1: HostArray<number | StrongNumeric<DoubleHost>>,
    tvec1: HostArray<number | StrongNumeric<DoubleHost>>,
    rvec2: HostArray<number | StrongNumeric<DoubleHost>>,
    tvec2: HostArray<number | StrongNumeric<DoubleHost>>,
    rvec3: HostVariableOut<HostArray<number>>,
    tvec3: HostVariableOut<HostArray<number>>
  ): VoidResult;
  projectPoints(
    objectPoints: OpenCvSharp.InputArray,
    rvec: OpenCvSharp.InputArray,
    tvec: OpenCvSharp.InputArray,
    cameraMatrix: OpenCvSharp.InputArray,
    distCoeffs: OpenCvSharp.InputArray,
    imagePoints: OpenCvSharp.OutputArray
  ): VoidResult;
  projectPoints(
    objectPoints: OpenCvSharp.InputArray,
    rvec: OpenCvSharp.InputArray,
    tvec: OpenCvSharp.InputArray,
    cameraMatrix: OpenCvSharp.InputArray,
    distCoeffs: OpenCvSharp.InputArray,
    imagePoints: OpenCvSharp.OutputArray,
    jacobian: OpenCvSharp.OutputArray | null
  ): VoidResult;
  projectPoints(
    objectPoints: OpenCvSharp.InputArray,
    rvec: OpenCvSharp.InputArray,
    tvec: OpenCvSharp.InputArray,
    cameraMatrix: OpenCvSharp.InputArray,
    distCoeffs: OpenCvSharp.InputArray,
    imagePoints: OpenCvSharp.OutputArray,
    jacobian: OpenCvSharp.OutputArray | null,
    aspectRatio: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  projectPoints(
    objectPoints: System.Collections.Generic.IEnumerable<OpenCvSharp.Point3f>,
    rvec: HostArray<number | StrongNumeric<DoubleHost>>,
    tvec: HostArray<number | StrongNumeric<DoubleHost>>,
    cameraMatrix: HostArray<number | StrongNumeric<DoubleHost>>,
    distCoeffs: HostArray<number | StrongNumeric<DoubleHost>>,
    imagePoints: HostVariableOut<HostArray<OpenCvSharp.Point2f>>,
    jacobian: HostVariableOut<HostArray<number>>
  ): VoidResult;
  projectPoints(
    objectPoints: System.Collections.Generic.IEnumerable<OpenCvSharp.Point3f>,
    rvec: HostArray<number | StrongNumeric<DoubleHost>>,
    tvec: HostArray<number | StrongNumeric<DoubleHost>>,
    cameraMatrix: HostArray<number | StrongNumeric<DoubleHost>>,
    distCoeffs: HostArray<number | StrongNumeric<DoubleHost>>,
    imagePoints: HostVariableOut<HostArray<OpenCvSharp.Point2f>>,
    jacobian: HostVariableOut<HostArray<number>>,
    aspectRatio: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  solvePnP(
    objectPoints: OpenCvSharp.InputArray,
    imagePoints: OpenCvSharp.InputArray,
    cameraMatrix: OpenCvSharp.InputArray,
    distCoeffs: OpenCvSharp.InputArray,
    rvec: OpenCvSharp.OutputArray,
    tvec: OpenCvSharp.OutputArray
  ): VoidResult;
  solvePnP(
    objectPoints: OpenCvSharp.InputArray,
    imagePoints: OpenCvSharp.InputArray,
    cameraMatrix: OpenCvSharp.InputArray,
    distCoeffs: OpenCvSharp.InputArray,
    rvec: OpenCvSharp.OutputArray,
    tvec: OpenCvSharp.OutputArray,
    useExtrinsicGuess: boolean
  ): VoidResult;
  solvePnP(
    objectPoints: OpenCvSharp.InputArray,
    imagePoints: OpenCvSharp.InputArray,
    cameraMatrix: OpenCvSharp.InputArray,
    distCoeffs: OpenCvSharp.InputArray,
    rvec: OpenCvSharp.OutputArray,
    tvec: OpenCvSharp.OutputArray,
    useExtrinsicGuess: boolean,
    flags: EnumInput<OpenCvSharp.SolvePnPFlags>
  ): VoidResult;
  solvePnP(
    objectPoints: System.Collections.Generic.IEnumerable<OpenCvSharp.Point3f>,
    imagePoints: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>,
    cameraMatrix: HostArray<number | StrongNumeric<DoubleHost>>,
    distCoeffs: System.Collections.Generic.IEnumerable<number> | null,
    rvec: HostVariableRef<HostArray<number>>,
    tvec: HostVariableRef<HostArray<number>>
  ): VoidResult;
  solvePnP(
    objectPoints: System.Collections.Generic.IEnumerable<OpenCvSharp.Point3f>,
    imagePoints: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>,
    cameraMatrix: HostArray<number | StrongNumeric<DoubleHost>>,
    distCoeffs: System.Collections.Generic.IEnumerable<number> | null,
    rvec: HostVariableRef<HostArray<number>>,
    tvec: HostVariableRef<HostArray<number>>,
    useExtrinsicGuess: boolean
  ): VoidResult;
  solvePnP(
    objectPoints: System.Collections.Generic.IEnumerable<OpenCvSharp.Point3f>,
    imagePoints: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>,
    cameraMatrix: HostArray<number | StrongNumeric<DoubleHost>>,
    distCoeffs: System.Collections.Generic.IEnumerable<number> | null,
    rvec: HostVariableRef<HostArray<number>>,
    tvec: HostVariableRef<HostArray<number>>,
    useExtrinsicGuess: boolean,
    flags: EnumInput<OpenCvSharp.SolvePnPFlags>
  ): VoidResult;
  solvePnPRansac(
    objectPoints: OpenCvSharp.InputArray,
    imagePoints: OpenCvSharp.InputArray,
    cameraMatrix: OpenCvSharp.InputArray,
    distCoeffs: OpenCvSharp.InputArray,
    rvec: OpenCvSharp.OutputArray | null,
    tvec: OpenCvSharp.OutputArray | null
  ): VoidResult;
  solvePnPRansac(
    objectPoints: OpenCvSharp.InputArray,
    imagePoints: OpenCvSharp.InputArray,
    cameraMatrix: OpenCvSharp.InputArray,
    distCoeffs: OpenCvSharp.InputArray,
    rvec: OpenCvSharp.OutputArray | null,
    tvec: OpenCvSharp.OutputArray | null,
    useExtrinsicGuess: boolean
  ): VoidResult;
  solvePnPRansac(
    objectPoints: OpenCvSharp.InputArray,
    imagePoints: OpenCvSharp.InputArray,
    cameraMatrix: OpenCvSharp.InputArray,
    distCoeffs: OpenCvSharp.InputArray,
    rvec: OpenCvSharp.OutputArray | null,
    tvec: OpenCvSharp.OutputArray | null,
    useExtrinsicGuess: boolean,
    iterationsCount: number | StrongNumeric<Int32Host>
  ): VoidResult;
  solvePnPRansac(
    objectPoints: OpenCvSharp.InputArray,
    imagePoints: OpenCvSharp.InputArray,
    cameraMatrix: OpenCvSharp.InputArray,
    distCoeffs: OpenCvSharp.InputArray,
    rvec: OpenCvSharp.OutputArray | null,
    tvec: OpenCvSharp.OutputArray | null,
    useExtrinsicGuess: boolean,
    iterationsCount: number | StrongNumeric<Int32Host>,
    reprojectionError: number | StrongNumeric<SingleHost>
  ): VoidResult;
  solvePnPRansac(
    objectPoints: OpenCvSharp.InputArray,
    imagePoints: OpenCvSharp.InputArray,
    cameraMatrix: OpenCvSharp.InputArray,
    distCoeffs: OpenCvSharp.InputArray,
    rvec: OpenCvSharp.OutputArray | null,
    tvec: OpenCvSharp.OutputArray | null,
    useExtrinsicGuess: boolean,
    iterationsCount: number | StrongNumeric<Int32Host>,
    reprojectionError: number | StrongNumeric<SingleHost>,
    confidence: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  solvePnPRansac(
    objectPoints: OpenCvSharp.InputArray,
    imagePoints: OpenCvSharp.InputArray,
    cameraMatrix: OpenCvSharp.InputArray,
    distCoeffs: OpenCvSharp.InputArray,
    rvec: OpenCvSharp.OutputArray | null,
    tvec: OpenCvSharp.OutputArray | null,
    useExtrinsicGuess: boolean,
    iterationsCount: number | StrongNumeric<Int32Host>,
    reprojectionError: number | StrongNumeric<SingleHost>,
    confidence: number | StrongNumeric<DoubleHost>,
    inliers: OpenCvSharp.OutputArray | null
  ): VoidResult;
  solvePnPRansac(
    objectPoints: OpenCvSharp.InputArray,
    imagePoints: OpenCvSharp.InputArray,
    cameraMatrix: OpenCvSharp.InputArray,
    distCoeffs: OpenCvSharp.InputArray,
    rvec: OpenCvSharp.OutputArray | null,
    tvec: OpenCvSharp.OutputArray | null,
    useExtrinsicGuess: boolean,
    iterationsCount: number | StrongNumeric<Int32Host>,
    reprojectionError: number | StrongNumeric<SingleHost>,
    confidence: number | StrongNumeric<DoubleHost>,
    inliers: OpenCvSharp.OutputArray | null,
    flags: EnumInput<OpenCvSharp.SolvePnPFlags>
  ): VoidResult;
  solvePnPRansac(
    objectPoints: System.Collections.Generic.IEnumerable<OpenCvSharp.Point3f>,
    imagePoints: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>,
    cameraMatrix: HostArray<number | StrongNumeric<DoubleHost>>,
    distCoeffs: System.Collections.Generic.IEnumerable<number>,
    rvec: HostVariableOut<HostArray<number>>,
    tvec: HostVariableOut<HostArray<number>>
  ): VoidResult;
  solvePnPRansac(
    objectPoints: System.Collections.Generic.IEnumerable<OpenCvSharp.Point3f>,
    imagePoints: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>,
    cameraMatrix: HostArray<number | StrongNumeric<DoubleHost>>,
    distCoeffs: System.Collections.Generic.IEnumerable<number> | null,
    rvec: HostVariableOut<HostArray<number>>,
    tvec: HostVariableOut<HostArray<number>>,
    inliers: HostVariableOut<HostArray<number>>
  ): VoidResult;
  solvePnPRansac(
    objectPoints: System.Collections.Generic.IEnumerable<OpenCvSharp.Point3f>,
    imagePoints: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>,
    cameraMatrix: HostArray<number | StrongNumeric<DoubleHost>>,
    distCoeffs: System.Collections.Generic.IEnumerable<number> | null,
    rvec: HostVariableOut<HostArray<number>>,
    tvec: HostVariableOut<HostArray<number>>,
    inliers: HostVariableOut<HostArray<number>>,
    useExtrinsicGuess: boolean
  ): VoidResult;
  solvePnPRansac(
    objectPoints: System.Collections.Generic.IEnumerable<OpenCvSharp.Point3f>,
    imagePoints: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>,
    cameraMatrix: HostArray<number | StrongNumeric<DoubleHost>>,
    distCoeffs: System.Collections.Generic.IEnumerable<number> | null,
    rvec: HostVariableOut<HostArray<number>>,
    tvec: HostVariableOut<HostArray<number>>,
    inliers: HostVariableOut<HostArray<number>>,
    useExtrinsicGuess: boolean,
    iterationsCount: number | StrongNumeric<Int32Host>
  ): VoidResult;
  solvePnPRansac(
    objectPoints: System.Collections.Generic.IEnumerable<OpenCvSharp.Point3f>,
    imagePoints: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>,
    cameraMatrix: HostArray<number | StrongNumeric<DoubleHost>>,
    distCoeffs: System.Collections.Generic.IEnumerable<number> | null,
    rvec: HostVariableOut<HostArray<number>>,
    tvec: HostVariableOut<HostArray<number>>,
    inliers: HostVariableOut<HostArray<number>>,
    useExtrinsicGuess: boolean,
    iterationsCount: number | StrongNumeric<Int32Host>,
    reprojectionError: number | StrongNumeric<SingleHost>
  ): VoidResult;
  solvePnPRansac(
    objectPoints: System.Collections.Generic.IEnumerable<OpenCvSharp.Point3f>,
    imagePoints: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>,
    cameraMatrix: HostArray<number | StrongNumeric<DoubleHost>>,
    distCoeffs: System.Collections.Generic.IEnumerable<number> | null,
    rvec: HostVariableOut<HostArray<number>>,
    tvec: HostVariableOut<HostArray<number>>,
    inliers: HostVariableOut<HostArray<number>>,
    useExtrinsicGuess: boolean,
    iterationsCount: number | StrongNumeric<Int32Host>,
    reprojectionError: number | StrongNumeric<SingleHost>,
    confidence: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  solvePnPRansac(
    objectPoints: System.Collections.Generic.IEnumerable<OpenCvSharp.Point3f>,
    imagePoints: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>,
    cameraMatrix: HostArray<number | StrongNumeric<DoubleHost>>,
    distCoeffs: System.Collections.Generic.IEnumerable<number> | null,
    rvec: HostVariableOut<HostArray<number>>,
    tvec: HostVariableOut<HostArray<number>>,
    inliers: HostVariableOut<HostArray<number>>,
    useExtrinsicGuess: boolean,
    iterationsCount: number | StrongNumeric<Int32Host>,
    reprojectionError: number | StrongNumeric<SingleHost>,
    confidence: number | StrongNumeric<DoubleHost>,
    flags: EnumInput<OpenCvSharp.SolvePnPFlags>
  ): VoidResult;
  initCameraMatrix2D(
    objectPoints: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    imagePoints: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    imageSize: OpenCvSharp.Size
  ): OpenCvSharp.Mat;
  initCameraMatrix2D(
    objectPoints: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    imagePoints: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    imageSize: OpenCvSharp.Size,
    aspectRatio: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Mat;
  initCameraMatrix2D(
    objectPoints: System.Collections.Generic.IEnumerable<
      System.Collections.Generic.IEnumerable<OpenCvSharp.Point3f>
    >,
    imagePoints: System.Collections.Generic.IEnumerable<
      System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>
    >,
    imageSize: OpenCvSharp.Size
  ): OpenCvSharp.Mat;
  initCameraMatrix2D(
    objectPoints: System.Collections.Generic.IEnumerable<
      System.Collections.Generic.IEnumerable<OpenCvSharp.Point3f>
    >,
    imagePoints: System.Collections.Generic.IEnumerable<
      System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>
    >,
    imageSize: OpenCvSharp.Size,
    aspectRatio: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Mat;
  findChessboardCorners(
    image: OpenCvSharp.InputArray,
    patternSize: OpenCvSharp.Size,
    corners: OpenCvSharp.OutputArray
  ): boolean;
  findChessboardCorners(
    image: OpenCvSharp.InputArray,
    patternSize: OpenCvSharp.Size,
    corners: OpenCvSharp.OutputArray,
    flags: EnumInput<OpenCvSharp.ChessboardFlags>
  ): boolean;
  findChessboardCorners(
    image: OpenCvSharp.InputArray,
    patternSize: OpenCvSharp.Size,
    corners: HostVariableOut<HostArray<OpenCvSharp.Point2f>>
  ): boolean;
  findChessboardCorners(
    image: OpenCvSharp.InputArray,
    patternSize: OpenCvSharp.Size,
    corners: HostVariableOut<HostArray<OpenCvSharp.Point2f>>,
    flags: EnumInput<OpenCvSharp.ChessboardFlags>
  ): boolean;
  checkChessboard(img: OpenCvSharp.InputArray, size: OpenCvSharp.Size): boolean;
  findChessboardCornersSB(
    image: OpenCvSharp.InputArray,
    patternSize: OpenCvSharp.Size,
    corners: OpenCvSharp.OutputArray
  ): boolean;
  findChessboardCornersSB(
    image: OpenCvSharp.InputArray,
    patternSize: OpenCvSharp.Size,
    corners: OpenCvSharp.OutputArray,
    flags: EnumInput<OpenCvSharp.ChessboardFlags>
  ): boolean;
  findChessboardCornersSB(
    image: OpenCvSharp.InputArray,
    patternSize: OpenCvSharp.Size,
    corners: HostVariableOut<HostArray<OpenCvSharp.Point2f>>
  ): boolean;
  findChessboardCornersSB(
    image: OpenCvSharp.InputArray,
    patternSize: OpenCvSharp.Size,
    corners: HostVariableOut<HostArray<OpenCvSharp.Point2f>>,
    flags: EnumInput<OpenCvSharp.ChessboardFlags>
  ): boolean;
  find4QuadCornerSubpix(
    img: OpenCvSharp.InputArray,
    corners: OpenCvSharp.InputOutputArray,
    regionSize: OpenCvSharp.Size
  ): boolean;
  find4QuadCornerSubpix(
    img: OpenCvSharp.InputArray,
    corners: HostArray<OpenCvSharp.Point2f>,
    regionSize: OpenCvSharp.Size
  ): boolean;
  drawChessboardCorners(
    image: OpenCvSharp.InputOutputArray,
    patternSize: OpenCvSharp.Size,
    corners: OpenCvSharp.InputArray,
    patternWasFound: boolean
  ): VoidResult;
  drawChessboardCorners(
    image: OpenCvSharp.InputOutputArray,
    patternSize: OpenCvSharp.Size,
    corners: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>,
    patternWasFound: boolean
  ): VoidResult;
  drawFrameAxes(
    image: OpenCvSharp.InputOutputArray,
    cameraMatrix: OpenCvSharp.InputArray,
    distCoeffs: OpenCvSharp.InputArray,
    rvec: OpenCvSharp.InputArray,
    tvec: OpenCvSharp.InputArray,
    length: number | StrongNumeric<SingleHost>
  ): VoidResult;
  drawFrameAxes(
    image: OpenCvSharp.InputOutputArray,
    cameraMatrix: OpenCvSharp.InputArray,
    distCoeffs: OpenCvSharp.InputArray,
    rvec: OpenCvSharp.InputArray,
    tvec: OpenCvSharp.InputArray,
    length: number | StrongNumeric<SingleHost>,
    thickness: number | StrongNumeric<Int32Host>
  ): VoidResult;
  findCirclesGrid(
    image: OpenCvSharp.InputArray,
    patternSize: OpenCvSharp.Size,
    centers: OpenCvSharp.OutputArray
  ): boolean;
  findCirclesGrid(
    image: OpenCvSharp.InputArray,
    patternSize: OpenCvSharp.Size,
    centers: OpenCvSharp.OutputArray,
    flags: EnumInput<OpenCvSharp.FindCirclesGridFlags>
  ): boolean;
  findCirclesGrid(
    image: OpenCvSharp.InputArray,
    patternSize: OpenCvSharp.Size,
    centers: OpenCvSharp.OutputArray,
    flags: EnumInput<OpenCvSharp.FindCirclesGridFlags>,
    blobDetector: OpenCvSharp.Feature2D | null
  ): boolean;
  findCirclesGrid(
    image: OpenCvSharp.InputArray,
    patternSize: OpenCvSharp.Size,
    centers: HostVariableOut<HostArray<OpenCvSharp.Point2f>>
  ): boolean;
  findCirclesGrid(
    image: OpenCvSharp.InputArray,
    patternSize: OpenCvSharp.Size,
    centers: HostVariableOut<HostArray<OpenCvSharp.Point2f>>,
    flags: EnumInput<OpenCvSharp.FindCirclesGridFlags>
  ): boolean;
  findCirclesGrid(
    image: OpenCvSharp.InputArray,
    patternSize: OpenCvSharp.Size,
    centers: HostVariableOut<HostArray<OpenCvSharp.Point2f>>,
    flags: EnumInput<OpenCvSharp.FindCirclesGridFlags>,
    blobDetector: OpenCvSharp.Feature2D | null
  ): boolean;
  calibrateCamera(
    objectPoints: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    imagePoints: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    imageSize: OpenCvSharp.Size,
    cameraMatrix: OpenCvSharp.InputOutputArray,
    distCoeffs: OpenCvSharp.InputOutputArray,
    rvecs: HostVariableOut<HostArray<OpenCvSharp.Mat>>,
    tvecs: HostVariableOut<HostArray<OpenCvSharp.Mat>>
  ): number;
  calibrateCamera(
    objectPoints: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    imagePoints: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    imageSize: OpenCvSharp.Size,
    cameraMatrix: OpenCvSharp.InputOutputArray,
    distCoeffs: OpenCvSharp.InputOutputArray,
    rvecs: HostVariableOut<HostArray<OpenCvSharp.Mat>>,
    tvecs: HostVariableOut<HostArray<OpenCvSharp.Mat>>,
    flags: EnumInput<OpenCvSharp.CalibrationFlags>
  ): number;
  calibrateCamera(
    objectPoints: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    imagePoints: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    imageSize: OpenCvSharp.Size,
    cameraMatrix: OpenCvSharp.InputOutputArray,
    distCoeffs: OpenCvSharp.InputOutputArray,
    rvecs: HostVariableOut<HostArray<OpenCvSharp.Mat>>,
    tvecs: HostVariableOut<HostArray<OpenCvSharp.Mat>>,
    flags: EnumInput<OpenCvSharp.CalibrationFlags>,
    criteria: OpenCvSharp.TermCriteria | null | null
  ): number;
  calibrateCamera(
    objectPoints: System.Collections.Generic.IEnumerable<
      System.Collections.Generic.IEnumerable<OpenCvSharp.Point3f>
    >,
    imagePoints: System.Collections.Generic.IEnumerable<
      System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>
    >,
    imageSize: OpenCvSharp.Size,
    cameraMatrix: HostArray<number | StrongNumeric<DoubleHost>>,
    distCoeffs: HostArray<number | StrongNumeric<DoubleHost>>,
    rvecs: HostVariableOut<HostArray<OpenCvSharp.Vec3d>>,
    tvecs: HostVariableOut<HostArray<OpenCvSharp.Vec3d>>
  ): number;
  calibrateCamera(
    objectPoints: System.Collections.Generic.IEnumerable<
      System.Collections.Generic.IEnumerable<OpenCvSharp.Point3f>
    >,
    imagePoints: System.Collections.Generic.IEnumerable<
      System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>
    >,
    imageSize: OpenCvSharp.Size,
    cameraMatrix: HostArray<number | StrongNumeric<DoubleHost>>,
    distCoeffs: HostArray<number | StrongNumeric<DoubleHost>>,
    rvecs: HostVariableOut<HostArray<OpenCvSharp.Vec3d>>,
    tvecs: HostVariableOut<HostArray<OpenCvSharp.Vec3d>>,
    flags: EnumInput<OpenCvSharp.CalibrationFlags>
  ): number;
  calibrateCamera(
    objectPoints: System.Collections.Generic.IEnumerable<
      System.Collections.Generic.IEnumerable<OpenCvSharp.Point3f>
    >,
    imagePoints: System.Collections.Generic.IEnumerable<
      System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>
    >,
    imageSize: OpenCvSharp.Size,
    cameraMatrix: HostArray<number | StrongNumeric<DoubleHost>>,
    distCoeffs: HostArray<number | StrongNumeric<DoubleHost>>,
    rvecs: HostVariableOut<HostArray<OpenCvSharp.Vec3d>>,
    tvecs: HostVariableOut<HostArray<OpenCvSharp.Vec3d>>,
    flags: EnumInput<OpenCvSharp.CalibrationFlags>,
    criteria: OpenCvSharp.TermCriteria | null | null
  ): number;
  calibrationMatrixValues(
    cameraMatrix: OpenCvSharp.InputArray,
    imageSize: OpenCvSharp.Size,
    apertureWidth: number | StrongNumeric<DoubleHost>,
    apertureHeight: number | StrongNumeric<DoubleHost>,
    fovx: HostVariableOut<number>,
    fovy: HostVariableOut<number>,
    focalLength: HostVariableOut<number>,
    principalPoint: HostVariableOut<OpenCvSharp.Point2d>,
    aspectRatio: HostVariableOut<number>
  ): VoidResult;
  calibrationMatrixValues(
    cameraMatrix: HostArray<number | StrongNumeric<DoubleHost>>,
    imageSize: OpenCvSharp.Size,
    apertureWidth: number | StrongNumeric<DoubleHost>,
    apertureHeight: number | StrongNumeric<DoubleHost>,
    fovx: HostVariableOut<number>,
    fovy: HostVariableOut<number>,
    focalLength: HostVariableOut<number>,
    principalPoint: HostVariableOut<OpenCvSharp.Point2d>,
    aspectRatio: HostVariableOut<number>
  ): VoidResult;
  stereoCalibrate(
    objectPoints: System.Collections.Generic.IEnumerable<OpenCvSharp.InputArray>,
    imagePoints1: System.Collections.Generic.IEnumerable<OpenCvSharp.InputArray>,
    imagePoints2: System.Collections.Generic.IEnumerable<OpenCvSharp.InputArray>,
    cameraMatrix1: OpenCvSharp.InputOutputArray,
    distCoeffs1: OpenCvSharp.InputOutputArray,
    cameraMatrix2: OpenCvSharp.InputOutputArray,
    distCoeffs2: OpenCvSharp.InputOutputArray,
    imageSize: OpenCvSharp.Size,
    r: OpenCvSharp.OutputArray,
    t: OpenCvSharp.OutputArray,
    e: OpenCvSharp.OutputArray,
    f: OpenCvSharp.OutputArray
  ): number;
  stereoCalibrate(
    objectPoints: System.Collections.Generic.IEnumerable<OpenCvSharp.InputArray>,
    imagePoints1: System.Collections.Generic.IEnumerable<OpenCvSharp.InputArray>,
    imagePoints2: System.Collections.Generic.IEnumerable<OpenCvSharp.InputArray>,
    cameraMatrix1: OpenCvSharp.InputOutputArray,
    distCoeffs1: OpenCvSharp.InputOutputArray,
    cameraMatrix2: OpenCvSharp.InputOutputArray,
    distCoeffs2: OpenCvSharp.InputOutputArray,
    imageSize: OpenCvSharp.Size,
    r: OpenCvSharp.OutputArray,
    t: OpenCvSharp.OutputArray,
    e: OpenCvSharp.OutputArray,
    f: OpenCvSharp.OutputArray,
    flags: EnumInput<OpenCvSharp.CalibrationFlags>
  ): number;
  stereoCalibrate(
    objectPoints: System.Collections.Generic.IEnumerable<OpenCvSharp.InputArray>,
    imagePoints1: System.Collections.Generic.IEnumerable<OpenCvSharp.InputArray>,
    imagePoints2: System.Collections.Generic.IEnumerable<OpenCvSharp.InputArray>,
    cameraMatrix1: OpenCvSharp.InputOutputArray,
    distCoeffs1: OpenCvSharp.InputOutputArray,
    cameraMatrix2: OpenCvSharp.InputOutputArray,
    distCoeffs2: OpenCvSharp.InputOutputArray,
    imageSize: OpenCvSharp.Size,
    r: OpenCvSharp.OutputArray,
    t: OpenCvSharp.OutputArray,
    e: OpenCvSharp.OutputArray,
    f: OpenCvSharp.OutputArray,
    flags: EnumInput<OpenCvSharp.CalibrationFlags>,
    criteria: OpenCvSharp.TermCriteria | null | null
  ): number;
  stereoCalibrate(
    objectPoints: System.Collections.Generic.IEnumerable<
      System.Collections.Generic.IEnumerable<OpenCvSharp.Point3f>
    >,
    imagePoints1: System.Collections.Generic.IEnumerable<
      System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>
    >,
    imagePoints2: System.Collections.Generic.IEnumerable<
      System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>
    >,
    cameraMatrix1: HostArray<number | StrongNumeric<DoubleHost>>,
    distCoeffs1: HostArray<number | StrongNumeric<DoubleHost>>,
    cameraMatrix2: HostArray<number | StrongNumeric<DoubleHost>>,
    distCoeffs2: HostArray<number | StrongNumeric<DoubleHost>>,
    imageSize: OpenCvSharp.Size,
    r: OpenCvSharp.OutputArray,
    t: OpenCvSharp.OutputArray,
    e: OpenCvSharp.OutputArray,
    f: OpenCvSharp.OutputArray
  ): number;
  stereoCalibrate(
    objectPoints: System.Collections.Generic.IEnumerable<
      System.Collections.Generic.IEnumerable<OpenCvSharp.Point3f>
    >,
    imagePoints1: System.Collections.Generic.IEnumerable<
      System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>
    >,
    imagePoints2: System.Collections.Generic.IEnumerable<
      System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>
    >,
    cameraMatrix1: HostArray<number | StrongNumeric<DoubleHost>>,
    distCoeffs1: HostArray<number | StrongNumeric<DoubleHost>>,
    cameraMatrix2: HostArray<number | StrongNumeric<DoubleHost>>,
    distCoeffs2: HostArray<number | StrongNumeric<DoubleHost>>,
    imageSize: OpenCvSharp.Size,
    r: OpenCvSharp.OutputArray,
    t: OpenCvSharp.OutputArray,
    e: OpenCvSharp.OutputArray,
    f: OpenCvSharp.OutputArray,
    flags: EnumInput<OpenCvSharp.CalibrationFlags>
  ): number;
  stereoCalibrate(
    objectPoints: System.Collections.Generic.IEnumerable<
      System.Collections.Generic.IEnumerable<OpenCvSharp.Point3f>
    >,
    imagePoints1: System.Collections.Generic.IEnumerable<
      System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>
    >,
    imagePoints2: System.Collections.Generic.IEnumerable<
      System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>
    >,
    cameraMatrix1: HostArray<number | StrongNumeric<DoubleHost>>,
    distCoeffs1: HostArray<number | StrongNumeric<DoubleHost>>,
    cameraMatrix2: HostArray<number | StrongNumeric<DoubleHost>>,
    distCoeffs2: HostArray<number | StrongNumeric<DoubleHost>>,
    imageSize: OpenCvSharp.Size,
    r: OpenCvSharp.OutputArray,
    t: OpenCvSharp.OutputArray,
    e: OpenCvSharp.OutputArray,
    f: OpenCvSharp.OutputArray,
    flags: EnumInput<OpenCvSharp.CalibrationFlags>,
    criteria: OpenCvSharp.TermCriteria | null | null
  ): number;
  stereoRectify(
    cameraMatrix1: OpenCvSharp.InputArray,
    distCoeffs1: OpenCvSharp.InputArray,
    cameraMatrix2: OpenCvSharp.InputArray,
    distCoeffs2: OpenCvSharp.InputArray,
    imageSize: OpenCvSharp.Size,
    r: OpenCvSharp.InputArray,
    t: OpenCvSharp.InputArray,
    r1: OpenCvSharp.OutputArray,
    r2: OpenCvSharp.OutputArray,
    p1: OpenCvSharp.OutputArray,
    p2: OpenCvSharp.OutputArray,
    q: OpenCvSharp.OutputArray
  ): VoidResult;
  stereoRectify(
    cameraMatrix1: OpenCvSharp.InputArray,
    distCoeffs1: OpenCvSharp.InputArray,
    cameraMatrix2: OpenCvSharp.InputArray,
    distCoeffs2: OpenCvSharp.InputArray,
    imageSize: OpenCvSharp.Size,
    r: OpenCvSharp.InputArray,
    t: OpenCvSharp.InputArray,
    r1: OpenCvSharp.OutputArray,
    r2: OpenCvSharp.OutputArray,
    p1: OpenCvSharp.OutputArray,
    p2: OpenCvSharp.OutputArray,
    q: OpenCvSharp.OutputArray,
    flags: EnumInput<OpenCvSharp.StereoRectificationFlags>
  ): VoidResult;
  stereoRectify(
    cameraMatrix1: OpenCvSharp.InputArray,
    distCoeffs1: OpenCvSharp.InputArray,
    cameraMatrix2: OpenCvSharp.InputArray,
    distCoeffs2: OpenCvSharp.InputArray,
    imageSize: OpenCvSharp.Size,
    r: OpenCvSharp.InputArray,
    t: OpenCvSharp.InputArray,
    r1: OpenCvSharp.OutputArray,
    r2: OpenCvSharp.OutputArray,
    p1: OpenCvSharp.OutputArray,
    p2: OpenCvSharp.OutputArray,
    q: OpenCvSharp.OutputArray,
    flags: EnumInput<OpenCvSharp.StereoRectificationFlags>,
    alpha: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  stereoRectify(
    cameraMatrix1: OpenCvSharp.InputArray,
    distCoeffs1: OpenCvSharp.InputArray,
    cameraMatrix2: OpenCvSharp.InputArray,
    distCoeffs2: OpenCvSharp.InputArray,
    imageSize: OpenCvSharp.Size,
    r: OpenCvSharp.InputArray,
    t: OpenCvSharp.InputArray,
    r1: OpenCvSharp.OutputArray,
    r2: OpenCvSharp.OutputArray,
    p1: OpenCvSharp.OutputArray,
    p2: OpenCvSharp.OutputArray,
    q: OpenCvSharp.OutputArray,
    flags: EnumInput<OpenCvSharp.StereoRectificationFlags>,
    alpha: number | StrongNumeric<DoubleHost>,
    newImageSize: OpenCvSharp.Size | null | null
  ): VoidResult;
  stereoRectify(
    cameraMatrix1: OpenCvSharp.InputArray,
    distCoeffs1: OpenCvSharp.InputArray,
    cameraMatrix2: OpenCvSharp.InputArray,
    distCoeffs2: OpenCvSharp.InputArray,
    imageSize: OpenCvSharp.Size,
    r: OpenCvSharp.InputArray,
    t: OpenCvSharp.InputArray,
    r1: OpenCvSharp.OutputArray,
    r2: OpenCvSharp.OutputArray,
    p1: OpenCvSharp.OutputArray,
    p2: OpenCvSharp.OutputArray,
    q: OpenCvSharp.OutputArray,
    flags: EnumInput<OpenCvSharp.StereoRectificationFlags>,
    alpha: number | StrongNumeric<DoubleHost>,
    newImageSize: OpenCvSharp.Size,
    validPixROI1: HostVariableOut<OpenCvSharp.Rect>,
    validPixROI2: HostVariableOut<OpenCvSharp.Rect>
  ): VoidResult;
  stereoRectify(
    cameraMatrix1: HostArray<number | StrongNumeric<DoubleHost>>,
    distCoeffs1: HostArray<number | StrongNumeric<DoubleHost>>,
    cameraMatrix2: HostArray<number | StrongNumeric<DoubleHost>>,
    distCoeffs2: HostArray<number | StrongNumeric<DoubleHost>>,
    imageSize: OpenCvSharp.Size,
    r: HostArray<number | StrongNumeric<DoubleHost>>,
    t: HostArray<number | StrongNumeric<DoubleHost>>,
    r1: HostVariableOut<HostArray<number>>,
    r2: HostVariableOut<HostArray<number>>,
    p1: HostVariableOut<HostArray<number>>,
    p2: HostVariableOut<HostArray<number>>,
    q: HostVariableOut<HostArray<number>>
  ): VoidResult;
  stereoRectify(
    cameraMatrix1: HostArray<number | StrongNumeric<DoubleHost>>,
    distCoeffs1: HostArray<number | StrongNumeric<DoubleHost>>,
    cameraMatrix2: HostArray<number | StrongNumeric<DoubleHost>>,
    distCoeffs2: HostArray<number | StrongNumeric<DoubleHost>>,
    imageSize: OpenCvSharp.Size,
    r: HostArray<number | StrongNumeric<DoubleHost>>,
    t: HostArray<number | StrongNumeric<DoubleHost>>,
    r1: HostVariableOut<HostArray<number>>,
    r2: HostVariableOut<HostArray<number>>,
    p1: HostVariableOut<HostArray<number>>,
    p2: HostVariableOut<HostArray<number>>,
    q: HostVariableOut<HostArray<number>>,
    flags: EnumInput<OpenCvSharp.StereoRectificationFlags>
  ): VoidResult;
  stereoRectify(
    cameraMatrix1: HostArray<number | StrongNumeric<DoubleHost>>,
    distCoeffs1: HostArray<number | StrongNumeric<DoubleHost>>,
    cameraMatrix2: HostArray<number | StrongNumeric<DoubleHost>>,
    distCoeffs2: HostArray<number | StrongNumeric<DoubleHost>>,
    imageSize: OpenCvSharp.Size,
    r: HostArray<number | StrongNumeric<DoubleHost>>,
    t: HostArray<number | StrongNumeric<DoubleHost>>,
    r1: HostVariableOut<HostArray<number>>,
    r2: HostVariableOut<HostArray<number>>,
    p1: HostVariableOut<HostArray<number>>,
    p2: HostVariableOut<HostArray<number>>,
    q: HostVariableOut<HostArray<number>>,
    flags: EnumInput<OpenCvSharp.StereoRectificationFlags>,
    alpha: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  stereoRectify(
    cameraMatrix1: HostArray<number | StrongNumeric<DoubleHost>>,
    distCoeffs1: HostArray<number | StrongNumeric<DoubleHost>>,
    cameraMatrix2: HostArray<number | StrongNumeric<DoubleHost>>,
    distCoeffs2: HostArray<number | StrongNumeric<DoubleHost>>,
    imageSize: OpenCvSharp.Size,
    r: HostArray<number | StrongNumeric<DoubleHost>>,
    t: HostArray<number | StrongNumeric<DoubleHost>>,
    r1: HostVariableOut<HostArray<number>>,
    r2: HostVariableOut<HostArray<number>>,
    p1: HostVariableOut<HostArray<number>>,
    p2: HostVariableOut<HostArray<number>>,
    q: HostVariableOut<HostArray<number>>,
    flags: EnumInput<OpenCvSharp.StereoRectificationFlags>,
    alpha: number | StrongNumeric<DoubleHost>,
    newImageSize: OpenCvSharp.Size | null | null
  ): VoidResult;
  stereoRectify(
    cameraMatrix1: HostArray<number | StrongNumeric<DoubleHost>>,
    distCoeffs1: HostArray<number | StrongNumeric<DoubleHost>>,
    cameraMatrix2: HostArray<number | StrongNumeric<DoubleHost>>,
    distCoeffs2: HostArray<number | StrongNumeric<DoubleHost>>,
    imageSize: OpenCvSharp.Size,
    r: HostArray<number | StrongNumeric<DoubleHost>>,
    t: HostArray<number | StrongNumeric<DoubleHost>>,
    r1: HostVariableOut<HostArray<number>>,
    r2: HostVariableOut<HostArray<number>>,
    p1: HostVariableOut<HostArray<number>>,
    p2: HostVariableOut<HostArray<number>>,
    q: HostVariableOut<HostArray<number>>,
    flags: EnumInput<OpenCvSharp.StereoRectificationFlags>,
    alpha: number | StrongNumeric<DoubleHost>,
    newImageSize: OpenCvSharp.Size,
    validPixROI1: HostVariableOut<OpenCvSharp.Rect>,
    validPixROI2: HostVariableOut<OpenCvSharp.Rect>
  ): VoidResult;
  stereoRectifyUncalibrated(
    points1: OpenCvSharp.InputArray,
    points2: OpenCvSharp.InputArray,
    f: OpenCvSharp.InputArray,
    imgSize: OpenCvSharp.Size,
    h1: OpenCvSharp.OutputArray,
    h2: OpenCvSharp.OutputArray
  ): boolean;
  stereoRectifyUncalibrated(
    points1: OpenCvSharp.InputArray,
    points2: OpenCvSharp.InputArray,
    f: OpenCvSharp.InputArray,
    imgSize: OpenCvSharp.Size,
    h1: OpenCvSharp.OutputArray,
    h2: OpenCvSharp.OutputArray,
    threshold: number | StrongNumeric<DoubleHost>
  ): boolean;
  stereoRectifyUncalibrated(
    points1: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2d>,
    points2: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2d>,
    f: HostArray<number | StrongNumeric<DoubleHost>>,
    imgSize: OpenCvSharp.Size,
    h1: HostVariableOut<HostArray<number>>,
    h2: HostVariableOut<HostArray<number>>
  ): boolean;
  stereoRectifyUncalibrated(
    points1: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2d>,
    points2: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2d>,
    f: HostArray<number | StrongNumeric<DoubleHost>>,
    imgSize: OpenCvSharp.Size,
    h1: HostVariableOut<HostArray<number>>,
    h2: HostVariableOut<HostArray<number>>,
    threshold: number | StrongNumeric<DoubleHost>
  ): boolean;
  rectify3Collinear(
    cameraMatrix1: OpenCvSharp.InputArray,
    distCoeffs1: OpenCvSharp.InputArray,
    cameraMatrix2: OpenCvSharp.InputArray,
    distCoeffs2: OpenCvSharp.InputArray,
    cameraMatrix3: OpenCvSharp.InputArray,
    distCoeffs3: OpenCvSharp.InputArray,
    imgpt1: System.Collections.Generic.IEnumerable<OpenCvSharp.InputArray>,
    imgpt3: System.Collections.Generic.IEnumerable<OpenCvSharp.InputArray>,
    imageSize: OpenCvSharp.Size,
    r12: OpenCvSharp.InputArray,
    t12: OpenCvSharp.InputArray,
    r13: OpenCvSharp.InputArray,
    t13: OpenCvSharp.InputArray,
    r1: OpenCvSharp.OutputArray,
    r2: OpenCvSharp.OutputArray,
    r3: OpenCvSharp.OutputArray,
    p1: OpenCvSharp.OutputArray,
    p2: OpenCvSharp.OutputArray,
    p3: OpenCvSharp.OutputArray,
    q: OpenCvSharp.OutputArray,
    alpha: number | StrongNumeric<DoubleHost>,
    newImgSize: OpenCvSharp.Size,
    roi1: HostVariableOut<OpenCvSharp.Rect>,
    roi2: HostVariableOut<OpenCvSharp.Rect>,
    flags: EnumInput<OpenCvSharp.StereoRectificationFlags>
  ): number;
  getOptimalNewCameraMatrix(
    cameraMatrix: OpenCvSharp.InputArray,
    distCoeffs: OpenCvSharp.InputArray | null,
    imageSize: OpenCvSharp.Size,
    alpha: number | StrongNumeric<DoubleHost>,
    newImgSize: OpenCvSharp.Size,
    validPixROI: HostVariableOut<OpenCvSharp.Rect>
  ): OpenCvSharp.Mat;
  getOptimalNewCameraMatrix(
    cameraMatrix: OpenCvSharp.InputArray,
    distCoeffs: OpenCvSharp.InputArray | null,
    imageSize: OpenCvSharp.Size,
    alpha: number | StrongNumeric<DoubleHost>,
    newImgSize: OpenCvSharp.Size,
    validPixROI: HostVariableOut<OpenCvSharp.Rect>,
    centerPrincipalPoint: boolean
  ): OpenCvSharp.Mat;
  getOptimalNewCameraMatrix(
    cameraMatrix: HostArray<number | StrongNumeric<DoubleHost>>,
    distCoeffs: HostArray<number | StrongNumeric<DoubleHost>>,
    imageSize: OpenCvSharp.Size,
    alpha: number | StrongNumeric<DoubleHost>,
    newImgSize: OpenCvSharp.Size,
    validPixROI: HostVariableOut<OpenCvSharp.Rect>
  ): HostArray<number>;
  getOptimalNewCameraMatrix(
    cameraMatrix: HostArray<number | StrongNumeric<DoubleHost>>,
    distCoeffs: HostArray<number | StrongNumeric<DoubleHost>>,
    imageSize: OpenCvSharp.Size,
    alpha: number | StrongNumeric<DoubleHost>,
    newImgSize: OpenCvSharp.Size,
    validPixROI: HostVariableOut<OpenCvSharp.Rect>,
    centerPrincipalPoint: boolean
  ): HostArray<number>;
  calibrateHandEye(
    r_gripper2base: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    t_gripper2base: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    r_target2cam: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    t_target2cam: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    r_cam2gripper: OpenCvSharp.OutputArray,
    t_cam2gripper: OpenCvSharp.OutputArray
  ): VoidResult;
  calibrateHandEye(
    r_gripper2base: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    t_gripper2base: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    r_target2cam: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    t_target2cam: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    r_cam2gripper: OpenCvSharp.OutputArray,
    t_cam2gripper: OpenCvSharp.OutputArray,
    method: EnumInput<OpenCvSharp.HandEyeCalibrationMethod>
  ): VoidResult;
  calibrateRobotWorldHandEye(
    r_world2cam: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    t_world2cam: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    r_base2gripper: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    t_base2gripper: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    r_base2world: OpenCvSharp.OutputArray,
    t_base2world: OpenCvSharp.OutputArray,
    r_gripper2cam: OpenCvSharp.OutputArray,
    t_gripper2cam: OpenCvSharp.OutputArray
  ): VoidResult;
  calibrateRobotWorldHandEye(
    r_world2cam: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    t_world2cam: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    r_base2gripper: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    t_base2gripper: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    r_base2world: OpenCvSharp.OutputArray,
    t_base2world: OpenCvSharp.OutputArray,
    r_gripper2cam: OpenCvSharp.OutputArray,
    t_gripper2cam: OpenCvSharp.OutputArray,
    method: EnumInput<OpenCvSharp.RobotWorldHandEyeCalibrationMethod>
  ): VoidResult;
  calibrateRobotWorldHandEye(
    r_world2cam: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    t_world2cam: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    r_base2gripper: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    t_base2gripper: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    r_base2world: HostVariableOut<HostArray<number>>,
    t_base2world: HostVariableOut<HostArray<number>>,
    r_gripper2cam: HostVariableOut<HostArray<number>>,
    t_gripper2cam: HostVariableOut<HostArray<number>>
  ): VoidResult;
  calibrateRobotWorldHandEye(
    r_world2cam: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    t_world2cam: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    r_base2gripper: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    t_base2gripper: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    r_base2world: HostVariableOut<HostArray<number>>,
    t_base2world: HostVariableOut<HostArray<number>>,
    r_gripper2cam: HostVariableOut<HostArray<number>>,
    t_gripper2cam: HostVariableOut<HostArray<number>>,
    method: EnumInput<OpenCvSharp.RobotWorldHandEyeCalibrationMethod>
  ): VoidResult;
  convertPointsToHomogeneous(src: OpenCvSharp.InputArray, dst: OpenCvSharp.OutputArray): VoidResult;
  convertPointsToHomogeneous(
    src: System.Collections.Generic.IEnumerable<OpenCvSharp.Vec2f>
  ): HostArray<OpenCvSharp.Vec3f>;
  convertPointsToHomogeneous(
    src: System.Collections.Generic.IEnumerable<OpenCvSharp.Vec3f>
  ): HostArray<OpenCvSharp.Vec4f>;
  convertPointsFromHomogeneous(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray
  ): VoidResult;
  convertPointsFromHomogeneous(
    src: System.Collections.Generic.IEnumerable<OpenCvSharp.Vec3f>
  ): HostArray<OpenCvSharp.Vec2f>;
  convertPointsFromHomogeneous(
    src: System.Collections.Generic.IEnumerable<OpenCvSharp.Vec4f>
  ): HostArray<OpenCvSharp.Vec3f>;
  convertPointsHomogeneous(src: OpenCvSharp.InputArray, dst: OpenCvSharp.OutputArray): VoidResult;
  findFundamentalMat(
    points1: OpenCvSharp.InputArray,
    points2: OpenCvSharp.InputArray
  ): OpenCvSharp.Mat;
  findFundamentalMat(
    points1: OpenCvSharp.InputArray,
    points2: OpenCvSharp.InputArray,
    method: EnumInput<OpenCvSharp.FundamentalMatMethods>
  ): OpenCvSharp.Mat;
  findFundamentalMat(
    points1: OpenCvSharp.InputArray,
    points2: OpenCvSharp.InputArray,
    method: EnumInput<OpenCvSharp.FundamentalMatMethods>,
    param1: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Mat;
  findFundamentalMat(
    points1: OpenCvSharp.InputArray,
    points2: OpenCvSharp.InputArray,
    method: EnumInput<OpenCvSharp.FundamentalMatMethods>,
    param1: number | StrongNumeric<DoubleHost>,
    param2: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Mat;
  findFundamentalMat(
    points1: OpenCvSharp.InputArray,
    points2: OpenCvSharp.InputArray,
    method: EnumInput<OpenCvSharp.FundamentalMatMethods>,
    param1: number | StrongNumeric<DoubleHost>,
    param2: number | StrongNumeric<DoubleHost>,
    mask: OpenCvSharp.OutputArray | null
  ): OpenCvSharp.Mat;
  findFundamentalMat(
    points1: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>,
    points2: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>
  ): OpenCvSharp.Mat;
  findFundamentalMat(
    points1: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>,
    points2: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>,
    method: EnumInput<OpenCvSharp.FundamentalMatMethods>
  ): OpenCvSharp.Mat;
  findFundamentalMat(
    points1: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>,
    points2: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>,
    method: EnumInput<OpenCvSharp.FundamentalMatMethods>,
    param1: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Mat;
  findFundamentalMat(
    points1: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>,
    points2: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>,
    method: EnumInput<OpenCvSharp.FundamentalMatMethods>,
    param1: number | StrongNumeric<DoubleHost>,
    param2: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Mat;
  findFundamentalMat(
    points1: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>,
    points2: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>,
    method: EnumInput<OpenCvSharp.FundamentalMatMethods>,
    param1: number | StrongNumeric<DoubleHost>,
    param2: number | StrongNumeric<DoubleHost>,
    mask: OpenCvSharp.OutputArray | null
  ): OpenCvSharp.Mat;
  findFundamentalMat(
    points1: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2d>,
    points2: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2d>
  ): OpenCvSharp.Mat;
  findFundamentalMat(
    points1: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2d>,
    points2: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2d>,
    method: EnumInput<OpenCvSharp.FundamentalMatMethods>
  ): OpenCvSharp.Mat;
  findFundamentalMat(
    points1: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2d>,
    points2: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2d>,
    method: EnumInput<OpenCvSharp.FundamentalMatMethods>,
    param1: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Mat;
  findFundamentalMat(
    points1: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2d>,
    points2: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2d>,
    method: EnumInput<OpenCvSharp.FundamentalMatMethods>,
    param1: number | StrongNumeric<DoubleHost>,
    param2: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Mat;
  findFundamentalMat(
    points1: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2d>,
    points2: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2d>,
    method: EnumInput<OpenCvSharp.FundamentalMatMethods>,
    param1: number | StrongNumeric<DoubleHost>,
    param2: number | StrongNumeric<DoubleHost>,
    mask: OpenCvSharp.OutputArray | null
  ): OpenCvSharp.Mat;
  computeCorrespondEpilines(
    points: OpenCvSharp.InputArray,
    whichImage: number | StrongNumeric<Int32Host>,
    f: OpenCvSharp.InputArray,
    lines: OpenCvSharp.OutputArray
  ): VoidResult;
  computeCorrespondEpilines(
    points: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2d>,
    whichImage: number | StrongNumeric<Int32Host>,
    f: HostArray<number | StrongNumeric<DoubleHost>>
  ): HostArray<OpenCvSharp.Point3f>;
  computeCorrespondEpilines(
    points: System.Collections.Generic.IEnumerable<OpenCvSharp.Point3d>,
    whichImage: number | StrongNumeric<Int32Host>,
    f: HostArray<number | StrongNumeric<DoubleHost>>
  ): HostArray<OpenCvSharp.Point3f>;
  triangulatePoints(
    projMatr1: OpenCvSharp.InputArray,
    projMatr2: OpenCvSharp.InputArray,
    projPoints1: OpenCvSharp.InputArray,
    projPoints2: OpenCvSharp.InputArray,
    points4D: OpenCvSharp.OutputArray
  ): VoidResult;
  triangulatePoints(
    projMatr1: HostArray<number | StrongNumeric<DoubleHost>>,
    projMatr2: HostArray<number | StrongNumeric<DoubleHost>>,
    projPoints1: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2d>,
    projPoints2: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2d>
  ): HostArray<OpenCvSharp.Vec4d>;
  correctMatches(
    f: OpenCvSharp.InputArray,
    points1: OpenCvSharp.InputArray,
    points2: OpenCvSharp.InputArray,
    newPoints1: OpenCvSharp.OutputArray,
    newPoints2: OpenCvSharp.OutputArray
  ): VoidResult;
  correctMatches(
    f: HostArray<number | StrongNumeric<DoubleHost>>,
    points1: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2d>,
    points2: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2d>,
    newPoints1: HostVariableOut<HostArray<OpenCvSharp.Point2d>>,
    newPoints2: HostVariableOut<HostArray<OpenCvSharp.Point2d>>
  ): VoidResult;
  recoverPose(
    e: OpenCvSharp.InputArray,
    points1: OpenCvSharp.InputArray,
    points2: OpenCvSharp.InputArray,
    cameraMatrix: OpenCvSharp.InputArray,
    r: OpenCvSharp.OutputArray,
    t: OpenCvSharp.OutputArray
  ): number;
  recoverPose(
    e: OpenCvSharp.InputArray,
    points1: OpenCvSharp.InputArray,
    points2: OpenCvSharp.InputArray,
    cameraMatrix: OpenCvSharp.InputArray,
    r: OpenCvSharp.OutputArray,
    t: OpenCvSharp.OutputArray,
    mask: OpenCvSharp.InputOutputArray | null
  ): number;
  recoverPose(
    e: OpenCvSharp.InputArray,
    points1: OpenCvSharp.InputArray,
    points2: OpenCvSharp.InputArray,
    r: OpenCvSharp.OutputArray,
    t: OpenCvSharp.OutputArray,
    focal: number | StrongNumeric<DoubleHost>,
    pp: OpenCvSharp.Point2d
  ): number;
  recoverPose(
    e: OpenCvSharp.InputArray,
    points1: OpenCvSharp.InputArray,
    points2: OpenCvSharp.InputArray,
    r: OpenCvSharp.OutputArray,
    t: OpenCvSharp.OutputArray,
    focal: number | StrongNumeric<DoubleHost>,
    pp: OpenCvSharp.Point2d,
    mask: OpenCvSharp.InputOutputArray | null
  ): number;
  recoverPose(
    e: OpenCvSharp.InputArray,
    points1: OpenCvSharp.InputArray,
    points2: OpenCvSharp.InputArray,
    cameraMatrix: OpenCvSharp.InputArray,
    r: OpenCvSharp.OutputArray,
    t: OpenCvSharp.OutputArray,
    distanceTresh: number | StrongNumeric<DoubleHost>
  ): number;
  recoverPose(
    e: OpenCvSharp.InputArray,
    points1: OpenCvSharp.InputArray,
    points2: OpenCvSharp.InputArray,
    cameraMatrix: OpenCvSharp.InputArray,
    r: OpenCvSharp.OutputArray,
    t: OpenCvSharp.OutputArray,
    distanceTresh: number | StrongNumeric<DoubleHost>,
    mask: OpenCvSharp.InputOutputArray | null
  ): number;
  recoverPose(
    e: OpenCvSharp.InputArray,
    points1: OpenCvSharp.InputArray,
    points2: OpenCvSharp.InputArray,
    cameraMatrix: OpenCvSharp.InputArray,
    r: OpenCvSharp.OutputArray,
    t: OpenCvSharp.OutputArray,
    distanceTresh: number | StrongNumeric<DoubleHost>,
    mask: OpenCvSharp.InputOutputArray | null,
    triangulatedPoints: OpenCvSharp.OutputArray | null
  ): number;
  findEssentialMat(
    points1: OpenCvSharp.InputArray,
    points2: OpenCvSharp.InputArray,
    cameraMatrix: OpenCvSharp.InputArray
  ): OpenCvSharp.Mat;
  findEssentialMat(
    points1: OpenCvSharp.InputArray,
    points2: OpenCvSharp.InputArray,
    cameraMatrix: OpenCvSharp.InputArray,
    method: EnumInput<OpenCvSharp.EssentialMatMethod>
  ): OpenCvSharp.Mat;
  findEssentialMat(
    points1: OpenCvSharp.InputArray,
    points2: OpenCvSharp.InputArray,
    cameraMatrix: OpenCvSharp.InputArray,
    method: EnumInput<OpenCvSharp.EssentialMatMethod>,
    prob: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Mat;
  findEssentialMat(
    points1: OpenCvSharp.InputArray,
    points2: OpenCvSharp.InputArray,
    cameraMatrix: OpenCvSharp.InputArray,
    method: EnumInput<OpenCvSharp.EssentialMatMethod>,
    prob: number | StrongNumeric<DoubleHost>,
    threshold: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Mat;
  findEssentialMat(
    points1: OpenCvSharp.InputArray,
    points2: OpenCvSharp.InputArray,
    cameraMatrix: OpenCvSharp.InputArray,
    method: EnumInput<OpenCvSharp.EssentialMatMethod>,
    prob: number | StrongNumeric<DoubleHost>,
    threshold: number | StrongNumeric<DoubleHost>,
    mask: OpenCvSharp.OutputArray | null
  ): OpenCvSharp.Mat;
  findEssentialMat(
    points1: OpenCvSharp.InputArray,
    points2: OpenCvSharp.InputArray,
    focal: number | StrongNumeric<DoubleHost>,
    pp: OpenCvSharp.Point2d
  ): OpenCvSharp.Mat;
  findEssentialMat(
    points1: OpenCvSharp.InputArray,
    points2: OpenCvSharp.InputArray,
    focal: number | StrongNumeric<DoubleHost>,
    pp: OpenCvSharp.Point2d,
    method: EnumInput<OpenCvSharp.EssentialMatMethod>
  ): OpenCvSharp.Mat;
  findEssentialMat(
    points1: OpenCvSharp.InputArray,
    points2: OpenCvSharp.InputArray,
    focal: number | StrongNumeric<DoubleHost>,
    pp: OpenCvSharp.Point2d,
    method: EnumInput<OpenCvSharp.EssentialMatMethod>,
    prob: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Mat;
  findEssentialMat(
    points1: OpenCvSharp.InputArray,
    points2: OpenCvSharp.InputArray,
    focal: number | StrongNumeric<DoubleHost>,
    pp: OpenCvSharp.Point2d,
    method: EnumInput<OpenCvSharp.EssentialMatMethod>,
    prob: number | StrongNumeric<DoubleHost>,
    threshold: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Mat;
  findEssentialMat(
    points1: OpenCvSharp.InputArray,
    points2: OpenCvSharp.InputArray,
    focal: number | StrongNumeric<DoubleHost>,
    pp: OpenCvSharp.Point2d,
    method: EnumInput<OpenCvSharp.EssentialMatMethod>,
    prob: number | StrongNumeric<DoubleHost>,
    threshold: number | StrongNumeric<DoubleHost>,
    mask: OpenCvSharp.OutputArray | null
  ): OpenCvSharp.Mat;
  filterSpeckles(
    img: OpenCvSharp.InputOutputArray,
    newVal: number | StrongNumeric<DoubleHost>,
    maxSpeckleSize: number | StrongNumeric<Int32Host>,
    maxDiff: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  filterSpeckles(
    img: OpenCvSharp.InputOutputArray,
    newVal: number | StrongNumeric<DoubleHost>,
    maxSpeckleSize: number | StrongNumeric<Int32Host>,
    maxDiff: number | StrongNumeric<DoubleHost>,
    buf: OpenCvSharp.InputOutputArray | null
  ): VoidResult;
  getValidDisparityROI(
    roi1: OpenCvSharp.Rect,
    roi2: OpenCvSharp.Rect,
    minDisparity: number | StrongNumeric<Int32Host>,
    numberOfDisparities: number | StrongNumeric<Int32Host>,
    sadWindowSize: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Rect;
  validateDisparity(
    disparity: OpenCvSharp.InputOutputArray,
    cost: OpenCvSharp.InputArray,
    minDisparity: number | StrongNumeric<Int32Host>,
    numberOfDisparities: number | StrongNumeric<Int32Host>
  ): VoidResult;
  validateDisparity(
    disparity: OpenCvSharp.InputOutputArray,
    cost: OpenCvSharp.InputArray,
    minDisparity: number | StrongNumeric<Int32Host>,
    numberOfDisparities: number | StrongNumeric<Int32Host>,
    disp12MaxDisp: number | StrongNumeric<Int32Host>
  ): VoidResult;
  reprojectImageTo3D(
    disparity: OpenCvSharp.InputArray,
    _3dImage: OpenCvSharp.OutputArray,
    q: OpenCvSharp.InputArray
  ): VoidResult;
  reprojectImageTo3D(
    disparity: OpenCvSharp.InputArray,
    _3dImage: OpenCvSharp.OutputArray,
    q: OpenCvSharp.InputArray,
    handleMissingValues: boolean
  ): VoidResult;
  reprojectImageTo3D(
    disparity: OpenCvSharp.InputArray,
    _3dImage: OpenCvSharp.OutputArray,
    q: OpenCvSharp.InputArray,
    handleMissingValues: boolean,
    ddepth: number | StrongNumeric<Int32Host>
  ): VoidResult;
  estimateAffine3D(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.InputArray,
    outVal: OpenCvSharp.OutputArray,
    inliers: OpenCvSharp.OutputArray
  ): number;
  estimateAffine3D(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.InputArray,
    outVal: OpenCvSharp.OutputArray,
    inliers: OpenCvSharp.OutputArray,
    ransacThreshold: number | StrongNumeric<DoubleHost>
  ): number;
  estimateAffine3D(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.InputArray,
    outVal: OpenCvSharp.OutputArray,
    inliers: OpenCvSharp.OutputArray,
    ransacThreshold: number | StrongNumeric<DoubleHost>,
    confidence: number | StrongNumeric<DoubleHost>
  ): number;
  sampsonDistance(
    pt1: OpenCvSharp.InputArray,
    pt2: OpenCvSharp.InputArray,
    f: OpenCvSharp.InputArray
  ): number;
  sampsonDistance(
    pt1: OpenCvSharp.Point3d,
    pt2: OpenCvSharp.Point3d,
    f: HostArray<number | StrongNumeric<DoubleHost>>
  ): number;
  estimateAffine2D(from: OpenCvSharp.InputArray, to: OpenCvSharp.InputArray): OpenCvSharp.Mat;
  estimateAffine2D(
    from: OpenCvSharp.InputArray,
    to: OpenCvSharp.InputArray,
    inliers: OpenCvSharp.OutputArray | null
  ): OpenCvSharp.Mat;
  estimateAffine2D(
    from: OpenCvSharp.InputArray,
    to: OpenCvSharp.InputArray,
    inliers: OpenCvSharp.OutputArray | null,
    method: EnumInput<OpenCvSharp.RobustEstimationAlgorithms>
  ): OpenCvSharp.Mat;
  estimateAffine2D(
    from: OpenCvSharp.InputArray,
    to: OpenCvSharp.InputArray,
    inliers: OpenCvSharp.OutputArray | null,
    method: EnumInput<OpenCvSharp.RobustEstimationAlgorithms>,
    ransacReprojThreshold: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Mat;
  estimateAffine2D(
    from: OpenCvSharp.InputArray,
    to: OpenCvSharp.InputArray,
    inliers: OpenCvSharp.OutputArray | null,
    method: EnumInput<OpenCvSharp.RobustEstimationAlgorithms>,
    ransacReprojThreshold: number | StrongNumeric<DoubleHost>,
    maxIters: number | StrongNumeric<UInt64Host>
  ): OpenCvSharp.Mat;
  estimateAffine2D(
    from: OpenCvSharp.InputArray,
    to: OpenCvSharp.InputArray,
    inliers: OpenCvSharp.OutputArray | null,
    method: EnumInput<OpenCvSharp.RobustEstimationAlgorithms>,
    ransacReprojThreshold: number | StrongNumeric<DoubleHost>,
    maxIters: number | StrongNumeric<UInt64Host>,
    confidence: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Mat;
  estimateAffine2D(
    from: OpenCvSharp.InputArray,
    to: OpenCvSharp.InputArray,
    inliers: OpenCvSharp.OutputArray | null,
    method: EnumInput<OpenCvSharp.RobustEstimationAlgorithms>,
    ransacReprojThreshold: number | StrongNumeric<DoubleHost>,
    maxIters: number | StrongNumeric<UInt64Host>,
    confidence: number | StrongNumeric<DoubleHost>,
    refineIters: number | StrongNumeric<UInt64Host>
  ): OpenCvSharp.Mat;
  estimateAffinePartial2D(
    from: OpenCvSharp.InputArray,
    to: OpenCvSharp.InputArray
  ): OpenCvSharp.Mat;
  estimateAffinePartial2D(
    from: OpenCvSharp.InputArray,
    to: OpenCvSharp.InputArray,
    inliers: OpenCvSharp.OutputArray | null
  ): OpenCvSharp.Mat;
  estimateAffinePartial2D(
    from: OpenCvSharp.InputArray,
    to: OpenCvSharp.InputArray,
    inliers: OpenCvSharp.OutputArray | null,
    method: EnumInput<OpenCvSharp.RobustEstimationAlgorithms>
  ): OpenCvSharp.Mat;
  estimateAffinePartial2D(
    from: OpenCvSharp.InputArray,
    to: OpenCvSharp.InputArray,
    inliers: OpenCvSharp.OutputArray | null,
    method: EnumInput<OpenCvSharp.RobustEstimationAlgorithms>,
    ransacReprojThreshold: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Mat;
  estimateAffinePartial2D(
    from: OpenCvSharp.InputArray,
    to: OpenCvSharp.InputArray,
    inliers: OpenCvSharp.OutputArray | null,
    method: EnumInput<OpenCvSharp.RobustEstimationAlgorithms>,
    ransacReprojThreshold: number | StrongNumeric<DoubleHost>,
    maxIters: number | StrongNumeric<UInt64Host>
  ): OpenCvSharp.Mat;
  estimateAffinePartial2D(
    from: OpenCvSharp.InputArray,
    to: OpenCvSharp.InputArray,
    inliers: OpenCvSharp.OutputArray | null,
    method: EnumInput<OpenCvSharp.RobustEstimationAlgorithms>,
    ransacReprojThreshold: number | StrongNumeric<DoubleHost>,
    maxIters: number | StrongNumeric<UInt64Host>,
    confidence: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Mat;
  estimateAffinePartial2D(
    from: OpenCvSharp.InputArray,
    to: OpenCvSharp.InputArray,
    inliers: OpenCvSharp.OutputArray | null,
    method: EnumInput<OpenCvSharp.RobustEstimationAlgorithms>,
    ransacReprojThreshold: number | StrongNumeric<DoubleHost>,
    maxIters: number | StrongNumeric<UInt64Host>,
    confidence: number | StrongNumeric<DoubleHost>,
    refineIters: number | StrongNumeric<UInt64Host>
  ): OpenCvSharp.Mat;
  decomposeHomographyMat(
    h: OpenCvSharp.InputArray,
    k: OpenCvSharp.InputArray,
    rotations: HostVariableOut<HostArray<OpenCvSharp.Mat>>,
    translations: HostVariableOut<HostArray<OpenCvSharp.Mat>>,
    normals: HostVariableOut<HostArray<OpenCvSharp.Mat>>
  ): number;
  filterHomographyDecompByVisibleRefpoints(
    rotations: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    normals: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    beforePoints: OpenCvSharp.InputArray,
    afterPoints: OpenCvSharp.InputArray,
    possibleSolutions: OpenCvSharp.OutputArray
  ): VoidResult;
  filterHomographyDecompByVisibleRefpoints(
    rotations: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    normals: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    beforePoints: OpenCvSharp.InputArray,
    afterPoints: OpenCvSharp.InputArray,
    possibleSolutions: OpenCvSharp.OutputArray,
    pointsMask: OpenCvSharp.InputArray | null
  ): VoidResult;
  undistort(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    cameraMatrix: OpenCvSharp.InputArray,
    distCoeffs: OpenCvSharp.InputArray
  ): VoidResult;
  undistort(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    cameraMatrix: OpenCvSharp.InputArray,
    distCoeffs: OpenCvSharp.InputArray,
    newCameraMatrix: OpenCvSharp.InputArray | null
  ): VoidResult;
  initUndistortRectifyMap(
    cameraMatrix: OpenCvSharp.InputArray,
    distCoeffs: OpenCvSharp.InputArray,
    r: OpenCvSharp.InputArray,
    newCameraMatrix: OpenCvSharp.InputArray,
    size: OpenCvSharp.Size,
    m1Type: OpenCvSharp.MatType,
    map1: OpenCvSharp.OutputArray,
    map2: OpenCvSharp.OutputArray
  ): VoidResult;
  initWideAngleProjMap(
    cameraMatrix: OpenCvSharp.InputArray,
    distCoeffs: OpenCvSharp.InputArray,
    imageSize: OpenCvSharp.Size,
    destImageWidth: number | StrongNumeric<Int32Host>,
    m1Type: OpenCvSharp.MatType,
    map1: OpenCvSharp.OutputArray,
    map2: OpenCvSharp.OutputArray,
    projType: EnumInput<OpenCvSharp.ProjectionType>
  ): number;
  initWideAngleProjMap(
    cameraMatrix: OpenCvSharp.InputArray,
    distCoeffs: OpenCvSharp.InputArray,
    imageSize: OpenCvSharp.Size,
    destImageWidth: number | StrongNumeric<Int32Host>,
    m1Type: OpenCvSharp.MatType,
    map1: OpenCvSharp.OutputArray,
    map2: OpenCvSharp.OutputArray,
    projType: EnumInput<OpenCvSharp.ProjectionType>,
    alpha: number | StrongNumeric<DoubleHost>
  ): number;
  getDefaultNewCameraMatrix(cameraMatrix: OpenCvSharp.InputArray): OpenCvSharp.Mat;
  getDefaultNewCameraMatrix(
    cameraMatrix: OpenCvSharp.InputArray,
    imgSize: OpenCvSharp.Size | null | null
  ): OpenCvSharp.Mat;
  getDefaultNewCameraMatrix(
    cameraMatrix: OpenCvSharp.InputArray,
    imgSize: OpenCvSharp.Size | null | null,
    centerPrincipalPoint: boolean
  ): OpenCvSharp.Mat;
  undistortPoints(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    cameraMatrix: OpenCvSharp.InputArray,
    distCoeffs: OpenCvSharp.InputArray
  ): VoidResult;
  undistortPoints(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    cameraMatrix: OpenCvSharp.InputArray,
    distCoeffs: OpenCvSharp.InputArray,
    r: OpenCvSharp.InputArray | null
  ): VoidResult;
  undistortPoints(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    cameraMatrix: OpenCvSharp.InputArray,
    distCoeffs: OpenCvSharp.InputArray,
    r: OpenCvSharp.InputArray | null,
    p: OpenCvSharp.InputArray | null
  ): VoidResult;
  undistortPointsIter(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    cameraMatrix: OpenCvSharp.InputArray,
    distCoeffs: OpenCvSharp.InputArray
  ): VoidResult;
  undistortPointsIter(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    cameraMatrix: OpenCvSharp.InputArray,
    distCoeffs: OpenCvSharp.InputArray,
    r: OpenCvSharp.InputArray | null
  ): VoidResult;
  undistortPointsIter(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    cameraMatrix: OpenCvSharp.InputArray,
    distCoeffs: OpenCvSharp.InputArray,
    r: OpenCvSharp.InputArray | null,
    p: OpenCvSharp.InputArray | null
  ): VoidResult;
  undistortPointsIter(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    cameraMatrix: OpenCvSharp.InputArray,
    distCoeffs: OpenCvSharp.InputArray,
    r: OpenCvSharp.InputArray | null,
    p: OpenCvSharp.InputArray | null,
    termCriteria: OpenCvSharp.TermCriteria | null | null
  ): VoidResult;
  borderInterpolate(
    p: number | StrongNumeric<Int32Host>,
    len: number | StrongNumeric<Int32Host>,
    borderType: EnumInput<OpenCvSharp.BorderTypes>
  ): number;
  copyMakeBorder(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    top: number | StrongNumeric<Int32Host>,
    bottom: number | StrongNumeric<Int32Host>,
    left: number | StrongNumeric<Int32Host>,
    right: number | StrongNumeric<Int32Host>,
    borderType: EnumInput<OpenCvSharp.BorderTypes>
  ): VoidResult;
  copyMakeBorder(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    top: number | StrongNumeric<Int32Host>,
    bottom: number | StrongNumeric<Int32Host>,
    left: number | StrongNumeric<Int32Host>,
    right: number | StrongNumeric<Int32Host>,
    borderType: EnumInput<OpenCvSharp.BorderTypes>,
    value: OpenCvSharp.Scalar | null | null
  ): VoidResult;
  add(
    src1: OpenCvSharp.InputArray,
    src2: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray
  ): VoidResult;
  add(
    src1: OpenCvSharp.InputArray,
    src2: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    mask: OpenCvSharp.InputArray | null
  ): VoidResult;
  add(
    src1: OpenCvSharp.InputArray,
    src2: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    mask: OpenCvSharp.InputArray | null,
    dtype: number | StrongNumeric<Int32Host>
  ): VoidResult;
  subtract(
    src1: OpenCvSharp.InputArray,
    src2: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray
  ): VoidResult;
  subtract(
    src1: OpenCvSharp.InputArray,
    src2: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    mask: OpenCvSharp.InputArray | null
  ): VoidResult;
  subtract(
    src1: OpenCvSharp.InputArray,
    src2: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    mask: OpenCvSharp.InputArray | null,
    dtype: number | StrongNumeric<Int32Host>
  ): VoidResult;
  subtract(
    src1: OpenCvSharp.InputArray,
    src2: OpenCvSharp.Scalar,
    dst: OpenCvSharp.OutputArray
  ): VoidResult;
  subtract(
    src1: OpenCvSharp.InputArray,
    src2: OpenCvSharp.Scalar,
    dst: OpenCvSharp.OutputArray,
    mask: OpenCvSharp.InputArray | null
  ): VoidResult;
  subtract(
    src1: OpenCvSharp.InputArray,
    src2: OpenCvSharp.Scalar,
    dst: OpenCvSharp.OutputArray,
    mask: OpenCvSharp.InputArray | null,
    dtype: number | StrongNumeric<Int32Host>
  ): VoidResult;
  subtract(
    src1: OpenCvSharp.Scalar,
    src2: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray
  ): VoidResult;
  subtract(
    src1: OpenCvSharp.Scalar,
    src2: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    mask: OpenCvSharp.InputArray | null
  ): VoidResult;
  subtract(
    src1: OpenCvSharp.Scalar,
    src2: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    mask: OpenCvSharp.InputArray | null,
    dtype: number | StrongNumeric<Int32Host>
  ): VoidResult;
  multiply(
    src1: OpenCvSharp.InputArray,
    src2: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray
  ): VoidResult;
  multiply(
    src1: OpenCvSharp.InputArray,
    src2: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    scale: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  multiply(
    src1: OpenCvSharp.InputArray,
    src2: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    scale: number | StrongNumeric<DoubleHost>,
    dtype: number | StrongNumeric<Int32Host>
  ): VoidResult;
  divide(
    src1: OpenCvSharp.InputArray,
    src2: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray
  ): VoidResult;
  divide(
    src1: OpenCvSharp.InputArray,
    src2: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    scale: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  divide(
    src1: OpenCvSharp.InputArray,
    src2: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    scale: number | StrongNumeric<DoubleHost>,
    dtype: OpenCvSharp.MatType | null | null
  ): VoidResult;
  divide(
    scale: number | StrongNumeric<DoubleHost>,
    src2: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray
  ): VoidResult;
  divide(
    scale: number | StrongNumeric<DoubleHost>,
    src2: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    dtype: number | StrongNumeric<Int32Host>
  ): VoidResult;
  scaleAdd(
    src1: OpenCvSharp.InputArray,
    alpha: number | StrongNumeric<DoubleHost>,
    src2: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray
  ): VoidResult;
  addWeighted(
    src1: OpenCvSharp.InputArray,
    alpha: number | StrongNumeric<DoubleHost>,
    src2: OpenCvSharp.InputArray,
    beta: number | StrongNumeric<DoubleHost>,
    gamma: number | StrongNumeric<DoubleHost>,
    dst: OpenCvSharp.OutputArray
  ): VoidResult;
  addWeighted(
    src1: OpenCvSharp.InputArray,
    alpha: number | StrongNumeric<DoubleHost>,
    src2: OpenCvSharp.InputArray,
    beta: number | StrongNumeric<DoubleHost>,
    gamma: number | StrongNumeric<DoubleHost>,
    dst: OpenCvSharp.OutputArray,
    dtype: number | StrongNumeric<Int32Host>
  ): VoidResult;
  convertScaleAbs(src: OpenCvSharp.InputArray, dst: OpenCvSharp.OutputArray): VoidResult;
  convertScaleAbs(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    alpha: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  convertScaleAbs(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    alpha: number | StrongNumeric<DoubleHost>,
    beta: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  convertFp16(src: OpenCvSharp.InputArray, dst: OpenCvSharp.OutputArray): VoidResult;
  lut(
    src: OpenCvSharp.InputArray,
    lut: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray
  ): VoidResult;
  lut(
    src: OpenCvSharp.InputArray,
    lut: HostArray<number | StrongNumeric<ByteHost>>,
    dst: OpenCvSharp.OutputArray
  ): VoidResult;
  sum(src: OpenCvSharp.InputArray): OpenCvSharp.Scalar;
  countNonZero(mtx: OpenCvSharp.InputArray): number;
  findNonZero(src: OpenCvSharp.InputArray, idx: OpenCvSharp.OutputArray): VoidResult;
  mean(src: OpenCvSharp.InputArray): OpenCvSharp.Scalar;
  mean(src: OpenCvSharp.InputArray, mask: OpenCvSharp.InputArray | null): OpenCvSharp.Scalar;
  meanStdDev(
    src: OpenCvSharp.InputArray,
    mean: OpenCvSharp.OutputArray,
    stddev: OpenCvSharp.OutputArray
  ): VoidResult;
  meanStdDev(
    src: OpenCvSharp.InputArray,
    mean: OpenCvSharp.OutputArray,
    stddev: OpenCvSharp.OutputArray,
    mask: OpenCvSharp.InputArray | null
  ): VoidResult;
  meanStdDev(
    src: OpenCvSharp.InputArray,
    mean: HostVariableOut<OpenCvSharp.Scalar>,
    stddev: HostVariableOut<OpenCvSharp.Scalar>
  ): VoidResult;
  meanStdDev(
    src: OpenCvSharp.InputArray,
    mean: HostVariableOut<OpenCvSharp.Scalar>,
    stddev: HostVariableOut<OpenCvSharp.Scalar>,
    mask: OpenCvSharp.InputArray | null
  ): VoidResult;
  norm(src1: OpenCvSharp.InputArray): number;
  norm(src1: OpenCvSharp.InputArray, normType: EnumInput<OpenCvSharp.NormTypes>): number;
  norm(
    src1: OpenCvSharp.InputArray,
    normType: EnumInput<OpenCvSharp.NormTypes>,
    mask: OpenCvSharp.InputArray | null
  ): number;
  norm(src1: OpenCvSharp.InputArray, src2: OpenCvSharp.InputArray): number;
  norm(
    src1: OpenCvSharp.InputArray,
    src2: OpenCvSharp.InputArray,
    normType: EnumInput<OpenCvSharp.NormTypes>
  ): number;
  norm(
    src1: OpenCvSharp.InputArray,
    src2: OpenCvSharp.InputArray,
    normType: EnumInput<OpenCvSharp.NormTypes>,
    mask: OpenCvSharp.InputArray | null
  ): number;
  psnr(src1: OpenCvSharp.InputArray, src2: OpenCvSharp.InputArray): number;
  psnr(
    src1: OpenCvSharp.InputArray,
    src2: OpenCvSharp.InputArray,
    r: number | StrongNumeric<DoubleHost>
  ): number;
  batchDistance(
    src1: OpenCvSharp.InputArray,
    src2: OpenCvSharp.InputArray,
    dist: OpenCvSharp.OutputArray,
    dtype: number | StrongNumeric<Int32Host>,
    nidx: OpenCvSharp.OutputArray
  ): VoidResult;
  batchDistance(
    src1: OpenCvSharp.InputArray,
    src2: OpenCvSharp.InputArray,
    dist: OpenCvSharp.OutputArray,
    dtype: number | StrongNumeric<Int32Host>,
    nidx: OpenCvSharp.OutputArray,
    normType: EnumInput<OpenCvSharp.NormTypes>
  ): VoidResult;
  batchDistance(
    src1: OpenCvSharp.InputArray,
    src2: OpenCvSharp.InputArray,
    dist: OpenCvSharp.OutputArray,
    dtype: number | StrongNumeric<Int32Host>,
    nidx: OpenCvSharp.OutputArray,
    normType: EnumInput<OpenCvSharp.NormTypes>,
    k: number | StrongNumeric<Int32Host>
  ): VoidResult;
  batchDistance(
    src1: OpenCvSharp.InputArray,
    src2: OpenCvSharp.InputArray,
    dist: OpenCvSharp.OutputArray,
    dtype: number | StrongNumeric<Int32Host>,
    nidx: OpenCvSharp.OutputArray,
    normType: EnumInput<OpenCvSharp.NormTypes>,
    k: number | StrongNumeric<Int32Host>,
    mask: OpenCvSharp.InputArray | null
  ): VoidResult;
  batchDistance(
    src1: OpenCvSharp.InputArray,
    src2: OpenCvSharp.InputArray,
    dist: OpenCvSharp.OutputArray,
    dtype: number | StrongNumeric<Int32Host>,
    nidx: OpenCvSharp.OutputArray,
    normType: EnumInput<OpenCvSharp.NormTypes>,
    k: number | StrongNumeric<Int32Host>,
    mask: OpenCvSharp.InputArray | null,
    update: number | StrongNumeric<Int32Host>
  ): VoidResult;
  batchDistance(
    src1: OpenCvSharp.InputArray,
    src2: OpenCvSharp.InputArray,
    dist: OpenCvSharp.OutputArray,
    dtype: number | StrongNumeric<Int32Host>,
    nidx: OpenCvSharp.OutputArray,
    normType: EnumInput<OpenCvSharp.NormTypes>,
    k: number | StrongNumeric<Int32Host>,
    mask: OpenCvSharp.InputArray | null,
    update: number | StrongNumeric<Int32Host>,
    crosscheck: boolean
  ): VoidResult;
  normalize(src: OpenCvSharp.InputArray, dst: OpenCvSharp.InputOutputArray): VoidResult;
  normalize(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.InputOutputArray,
    alpha: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  normalize(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.InputOutputArray,
    alpha: number | StrongNumeric<DoubleHost>,
    beta: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  normalize(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.InputOutputArray,
    alpha: number | StrongNumeric<DoubleHost>,
    beta: number | StrongNumeric<DoubleHost>,
    normType: EnumInput<OpenCvSharp.NormTypes>
  ): VoidResult;
  normalize(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.InputOutputArray,
    alpha: number | StrongNumeric<DoubleHost>,
    beta: number | StrongNumeric<DoubleHost>,
    normType: EnumInput<OpenCvSharp.NormTypes>,
    dtype: number | StrongNumeric<Int32Host>
  ): VoidResult;
  normalize(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.InputOutputArray,
    alpha: number | StrongNumeric<DoubleHost>,
    beta: number | StrongNumeric<DoubleHost>,
    normType: EnumInput<OpenCvSharp.NormTypes>,
    dtype: number | StrongNumeric<Int32Host>,
    mask: OpenCvSharp.InputArray | null
  ): VoidResult;
  reduceArgMax(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    axis: number | StrongNumeric<Int32Host>
  ): VoidResult;
  reduceArgMax(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    axis: number | StrongNumeric<Int32Host>,
    lastIndex: boolean
  ): VoidResult;
  reduceArgMin(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    axis: number | StrongNumeric<Int32Host>
  ): VoidResult;
  reduceArgMin(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    axis: number | StrongNumeric<Int32Host>,
    lastIndex: boolean
  ): VoidResult;
  minMaxLoc(
    src: OpenCvSharp.InputArray,
    minVal: HostVariableOut<number>,
    maxVal: HostVariableOut<number>
  ): VoidResult;
  minMaxLoc(
    src: OpenCvSharp.InputArray,
    minLoc: HostVariableOut<OpenCvSharp.Point>,
    maxLoc: HostVariableOut<OpenCvSharp.Point>
  ): VoidResult;
  minMaxLoc(
    src: OpenCvSharp.InputArray,
    minVal: HostVariableOut<number>,
    maxVal: HostVariableOut<number>,
    minLoc: HostVariableOut<OpenCvSharp.Point>,
    maxLoc: HostVariableOut<OpenCvSharp.Point>
  ): VoidResult;
  minMaxLoc(
    src: OpenCvSharp.InputArray,
    minVal: HostVariableOut<number>,
    maxVal: HostVariableOut<number>,
    minLoc: HostVariableOut<OpenCvSharp.Point>,
    maxLoc: HostVariableOut<OpenCvSharp.Point>,
    mask: OpenCvSharp.InputArray | null
  ): VoidResult;
  minMaxIdx(
    src: OpenCvSharp.InputArray,
    minVal: HostVariableOut<number>,
    maxVal: HostVariableOut<number>
  ): VoidResult;
  minMaxIdx(
    src: OpenCvSharp.InputArray,
    minIdx: HostArray<number | StrongNumeric<Int32Host>>,
    maxIdx: HostArray<number | StrongNumeric<Int32Host>>
  ): VoidResult;
  minMaxIdx(
    src: OpenCvSharp.InputArray,
    minVal: HostVariableOut<number>,
    maxVal: HostVariableOut<number>,
    minIdx: HostArray<number | StrongNumeric<Int32Host>>,
    maxIdx: HostArray<number | StrongNumeric<Int32Host>>
  ): VoidResult;
  minMaxIdx(
    src: OpenCvSharp.InputArray,
    minVal: HostVariableOut<number>,
    maxVal: HostVariableOut<number>,
    minIdx: HostArray<number | StrongNumeric<Int32Host>>,
    maxIdx: HostArray<number | StrongNumeric<Int32Host>>,
    mask: OpenCvSharp.InputArray | null
  ): VoidResult;
  reduce(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    dim: EnumInput<OpenCvSharp.ReduceDimension>,
    rtype: EnumInput<OpenCvSharp.ReduceTypes>,
    dtype: number | StrongNumeric<Int32Host>
  ): VoidResult;
  merge(mv: HostArray<OpenCvSharp.Mat>, dst: OpenCvSharp.Mat): VoidResult;
  split(src: OpenCvSharp.Mat, mv: HostVariableOut<HostArray<OpenCvSharp.Mat>>): VoidResult;
  split(src: OpenCvSharp.Mat): HostArray<OpenCvSharp.Mat>;
  mixChannels(
    src: HostArray<OpenCvSharp.Mat>,
    dst: HostArray<OpenCvSharp.Mat>,
    fromTo: HostArray<number | StrongNumeric<Int32Host>>
  ): VoidResult;
  extractChannel(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    coi: number | StrongNumeric<Int32Host>
  ): VoidResult;
  insertChannel(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.InputOutputArray,
    coi: number | StrongNumeric<Int32Host>
  ): VoidResult;
  flip(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    flipCode: EnumInput<OpenCvSharp.FlipMode>
  ): VoidResult;
  rotate(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    rotateCode: EnumInput<OpenCvSharp.RotateFlags>
  ): VoidResult;
  repeat(
    src: OpenCvSharp.InputArray,
    ny: number | StrongNumeric<Int32Host>,
    nx: number | StrongNumeric<Int32Host>,
    dst: OpenCvSharp.OutputArray
  ): VoidResult;
  repeat(
    src: OpenCvSharp.Mat,
    ny: number | StrongNumeric<Int32Host>,
    nx: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Mat;
  hConcat(
    src: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    dst: OpenCvSharp.OutputArray
  ): VoidResult;
  hConcat(
    src1: OpenCvSharp.InputArray,
    src2: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray
  ): VoidResult;
  vConcat(
    src: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    dst: OpenCvSharp.OutputArray
  ): VoidResult;
  vConcat(
    src1: OpenCvSharp.InputArray,
    src2: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray
  ): VoidResult;
  bitwiseAnd(
    src1: OpenCvSharp.InputArray,
    src2: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray
  ): VoidResult;
  bitwiseAnd(
    src1: OpenCvSharp.InputArray,
    src2: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    mask: OpenCvSharp.InputArray | null
  ): VoidResult;
  bitwiseOr(
    src1: OpenCvSharp.InputArray,
    src2: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray
  ): VoidResult;
  bitwiseOr(
    src1: OpenCvSharp.InputArray,
    src2: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    mask: OpenCvSharp.InputArray | null
  ): VoidResult;
  bitwiseXor(
    src1: OpenCvSharp.InputArray,
    src2: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray
  ): VoidResult;
  bitwiseXor(
    src1: OpenCvSharp.InputArray,
    src2: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    mask: OpenCvSharp.InputArray | null
  ): VoidResult;
  bitwiseNot(src: OpenCvSharp.InputArray, dst: OpenCvSharp.OutputArray): VoidResult;
  bitwiseNot(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    mask: OpenCvSharp.InputArray | null
  ): VoidResult;
  absdiff(
    src1: OpenCvSharp.InputArray,
    src2: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray
  ): VoidResult;
  copyTo(src: OpenCvSharp.InputArray, dst: OpenCvSharp.OutputArray): VoidResult;
  copyTo(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    mask: OpenCvSharp.InputArray | null
  ): VoidResult;
  inRange(
    src: OpenCvSharp.InputArray,
    lowerb: OpenCvSharp.InputArray,
    upperb: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray
  ): VoidResult;
  inRange(
    src: OpenCvSharp.InputArray,
    lowerb: OpenCvSharp.Scalar,
    upperb: OpenCvSharp.Scalar,
    dst: OpenCvSharp.OutputArray
  ): VoidResult;
  compare(
    src1: OpenCvSharp.InputArray,
    src2: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    cmpop: EnumInput<OpenCvSharp.CmpType>
  ): VoidResult;
  min(
    src1: OpenCvSharp.InputArray,
    src2: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray
  ): VoidResult;
  min(src1: OpenCvSharp.Mat, src2: OpenCvSharp.Mat, dst: OpenCvSharp.Mat): VoidResult;
  min(
    src1: OpenCvSharp.Mat,
    src2: number | StrongNumeric<DoubleHost>,
    dst: OpenCvSharp.Mat
  ): VoidResult;
  max(
    src1: OpenCvSharp.InputArray,
    src2: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray
  ): VoidResult;
  max(src1: OpenCvSharp.Mat, src2: OpenCvSharp.Mat, dst: OpenCvSharp.Mat): VoidResult;
  max(
    src1: OpenCvSharp.Mat,
    src2: number | StrongNumeric<DoubleHost>,
    dst: OpenCvSharp.Mat
  ): VoidResult;
  sqrt(src: OpenCvSharp.InputArray, dst: OpenCvSharp.OutputArray): VoidResult;
  pow(
    src: OpenCvSharp.InputArray,
    power: number | StrongNumeric<DoubleHost>,
    dst: OpenCvSharp.OutputArray
  ): VoidResult;
  exp(src: OpenCvSharp.InputArray, dst: OpenCvSharp.OutputArray): VoidResult;
  log(src: OpenCvSharp.InputArray, dst: OpenCvSharp.OutputArray): VoidResult;
  polarToCart(
    magnitude: OpenCvSharp.InputArray,
    angle: OpenCvSharp.InputArray,
    x: OpenCvSharp.OutputArray,
    y: OpenCvSharp.OutputArray
  ): VoidResult;
  polarToCart(
    magnitude: OpenCvSharp.InputArray,
    angle: OpenCvSharp.InputArray,
    x: OpenCvSharp.OutputArray,
    y: OpenCvSharp.OutputArray,
    angleInDegrees: boolean
  ): VoidResult;
  cartToPolar(
    x: OpenCvSharp.InputArray,
    y: OpenCvSharp.InputArray,
    magnitude: OpenCvSharp.OutputArray,
    angle: OpenCvSharp.OutputArray
  ): VoidResult;
  cartToPolar(
    x: OpenCvSharp.InputArray,
    y: OpenCvSharp.InputArray,
    magnitude: OpenCvSharp.OutputArray,
    angle: OpenCvSharp.OutputArray,
    angleInDegrees: boolean
  ): VoidResult;
  phase(
    x: OpenCvSharp.InputArray,
    y: OpenCvSharp.InputArray,
    angle: OpenCvSharp.OutputArray
  ): VoidResult;
  phase(
    x: OpenCvSharp.InputArray,
    y: OpenCvSharp.InputArray,
    angle: OpenCvSharp.OutputArray,
    angleInDegrees: boolean
  ): VoidResult;
  magnitude(
    x: OpenCvSharp.InputArray,
    y: OpenCvSharp.InputArray,
    magnitude: OpenCvSharp.OutputArray
  ): VoidResult;
  checkRange(src: OpenCvSharp.InputArray): boolean;
  checkRange(src: OpenCvSharp.InputArray, quiet: boolean): boolean;
  checkRange(
    src: OpenCvSharp.InputArray,
    quiet: boolean,
    pos: HostVariableOut<OpenCvSharp.Point>
  ): boolean;
  checkRange(
    src: OpenCvSharp.InputArray,
    quiet: boolean,
    pos: HostVariableOut<OpenCvSharp.Point>,
    minVal: number | StrongNumeric<DoubleHost>
  ): boolean;
  checkRange(
    src: OpenCvSharp.InputArray,
    quiet: boolean,
    pos: HostVariableOut<OpenCvSharp.Point>,
    minVal: number | StrongNumeric<DoubleHost>,
    maxVal: number | StrongNumeric<DoubleHost>
  ): boolean;
  patchNaNs(a: OpenCvSharp.InputOutputArray): VoidResult;
  patchNaNs(a: OpenCvSharp.InputOutputArray, val: number | StrongNumeric<DoubleHost>): VoidResult;
  gemm(
    src1: OpenCvSharp.InputArray,
    src2: OpenCvSharp.InputArray,
    alpha: number | StrongNumeric<DoubleHost>,
    src3: OpenCvSharp.InputArray,
    gamma: number | StrongNumeric<DoubleHost>,
    dst: OpenCvSharp.OutputArray
  ): VoidResult;
  gemm(
    src1: OpenCvSharp.InputArray,
    src2: OpenCvSharp.InputArray,
    alpha: number | StrongNumeric<DoubleHost>,
    src3: OpenCvSharp.InputArray,
    gamma: number | StrongNumeric<DoubleHost>,
    dst: OpenCvSharp.OutputArray,
    flags: EnumInput<OpenCvSharp.GemmFlags>
  ): VoidResult;
  mulTransposed(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    aTa: boolean
  ): VoidResult;
  mulTransposed(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    aTa: boolean,
    delta: OpenCvSharp.InputArray | null
  ): VoidResult;
  mulTransposed(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    aTa: boolean,
    delta: OpenCvSharp.InputArray | null,
    scale: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  mulTransposed(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    aTa: boolean,
    delta: OpenCvSharp.InputArray | null,
    scale: number | StrongNumeric<DoubleHost>,
    dtype: number | StrongNumeric<Int32Host>
  ): VoidResult;
  transpose(src: OpenCvSharp.InputArray, dst: OpenCvSharp.OutputArray): VoidResult;
  transform(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    m: OpenCvSharp.InputArray
  ): VoidResult;
  perspectiveTransform(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    m: OpenCvSharp.InputArray
  ): VoidResult;
  perspectiveTransform(
    src: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>,
    m: OpenCvSharp.Mat
  ): HostArray<OpenCvSharp.Point2f>;
  perspectiveTransform(
    src: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2d>,
    m: OpenCvSharp.Mat
  ): HostArray<OpenCvSharp.Point2d>;
  perspectiveTransform(
    src: System.Collections.Generic.IEnumerable<OpenCvSharp.Point3f>,
    m: OpenCvSharp.Mat
  ): HostArray<OpenCvSharp.Point3f>;
  perspectiveTransform(
    src: System.Collections.Generic.IEnumerable<OpenCvSharp.Point3d>,
    m: OpenCvSharp.Mat
  ): HostArray<OpenCvSharp.Point3d>;
  completeSymm(mtx: OpenCvSharp.InputOutputArray): VoidResult;
  completeSymm(mtx: OpenCvSharp.InputOutputArray, lowerToUpper: boolean): VoidResult;
  setIdentity(mtx: OpenCvSharp.InputOutputArray): VoidResult;
  setIdentity(mtx: OpenCvSharp.InputOutputArray, s: OpenCvSharp.Scalar | null | null): VoidResult;
  determinant(mtx: OpenCvSharp.InputArray): number;
  trace(mtx: OpenCvSharp.InputArray): OpenCvSharp.Scalar;
  invert(src: OpenCvSharp.InputArray, dst: OpenCvSharp.OutputArray): number;
  invert(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    flags: EnumInput<OpenCvSharp.DecompTypes>
  ): number;
  solve(
    src1: OpenCvSharp.InputArray,
    src2: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray
  ): boolean;
  solve(
    src1: OpenCvSharp.InputArray,
    src2: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    flags: EnumInput<OpenCvSharp.DecompTypes>
  ): boolean;
  solveLP(
    func: OpenCvSharp.InputArray,
    constr: OpenCvSharp.InputArray,
    z: OpenCvSharp.OutputArray
  ): OpenCvSharp.SolveLPResult;
  sort(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    flags: EnumInput<OpenCvSharp.SortFlags>
  ): VoidResult;
  sortIdx(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    flags: EnumInput<OpenCvSharp.SortFlags>
  ): VoidResult;
  solveCubic(coeffs: OpenCvSharp.InputArray, roots: OpenCvSharp.OutputArray): number;
  solvePoly(coeffs: OpenCvSharp.InputArray, roots: OpenCvSharp.OutputArray): number;
  solvePoly(
    coeffs: OpenCvSharp.InputArray,
    roots: OpenCvSharp.OutputArray,
    maxIters: number | StrongNumeric<Int32Host>
  ): number;
  eigen(
    src: OpenCvSharp.InputArray,
    eigenvalues: OpenCvSharp.OutputArray,
    eigenvectors: OpenCvSharp.OutputArray
  ): boolean;
  eigenNonSymmetric(
    src: OpenCvSharp.InputArray,
    eigenvalues: OpenCvSharp.OutputArray,
    eigenvectors: OpenCvSharp.OutputArray
  ): VoidResult;
  calcCovarMatrix(
    samples: HostArray<OpenCvSharp.Mat>,
    covar: OpenCvSharp.Mat,
    mean: OpenCvSharp.Mat,
    flags: EnumInput<OpenCvSharp.CovarFlags>
  ): VoidResult;
  calcCovarMatrix(
    samples: HostArray<OpenCvSharp.Mat>,
    covar: OpenCvSharp.Mat,
    mean: OpenCvSharp.Mat,
    flags: EnumInput<OpenCvSharp.CovarFlags>,
    ctype: OpenCvSharp.MatType | null | null
  ): VoidResult;
  calcCovarMatrix(
    samples: OpenCvSharp.InputArray,
    covar: OpenCvSharp.OutputArray,
    mean: OpenCvSharp.InputOutputArray,
    flags: EnumInput<OpenCvSharp.CovarFlags>
  ): VoidResult;
  calcCovarMatrix(
    samples: OpenCvSharp.InputArray,
    covar: OpenCvSharp.OutputArray,
    mean: OpenCvSharp.InputOutputArray,
    flags: EnumInput<OpenCvSharp.CovarFlags>,
    ctype: OpenCvSharp.MatType | null | null
  ): VoidResult;
  pcaCompute(
    data: OpenCvSharp.InputArray,
    mean: OpenCvSharp.InputOutputArray,
    eigenvectors: OpenCvSharp.OutputArray
  ): VoidResult;
  pcaCompute(
    data: OpenCvSharp.InputArray,
    mean: OpenCvSharp.InputOutputArray,
    eigenvectors: OpenCvSharp.OutputArray,
    maxComponents: number | StrongNumeric<Int32Host>
  ): VoidResult;
  pcaCompute(
    data: OpenCvSharp.InputArray,
    mean: OpenCvSharp.InputOutputArray,
    eigenvectors: OpenCvSharp.OutputArray,
    eigenvalues: OpenCvSharp.OutputArray
  ): VoidResult;
  pcaCompute(
    data: OpenCvSharp.InputArray,
    mean: OpenCvSharp.InputOutputArray,
    eigenvectors: OpenCvSharp.OutputArray,
    eigenvalues: OpenCvSharp.OutputArray,
    maxComponents: number | StrongNumeric<Int32Host>
  ): VoidResult;
  pcaComputeVar(
    data: OpenCvSharp.InputArray,
    mean: OpenCvSharp.InputOutputArray,
    eigenvectors: OpenCvSharp.OutputArray,
    retainedVariance: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  pcaComputeVar(
    data: OpenCvSharp.InputArray,
    mean: OpenCvSharp.InputOutputArray,
    eigenvectors: OpenCvSharp.OutputArray,
    eigenvalues: OpenCvSharp.OutputArray,
    retainedVariance: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  pcaProject(
    data: OpenCvSharp.InputArray,
    mean: OpenCvSharp.InputArray,
    eigenvectors: OpenCvSharp.InputArray,
    result: OpenCvSharp.OutputArray
  ): VoidResult;
  pcaBackProject(
    data: OpenCvSharp.InputArray,
    mean: OpenCvSharp.InputArray,
    eigenvectors: OpenCvSharp.InputArray,
    result: OpenCvSharp.OutputArray
  ): VoidResult;
  svDecomp(
    src: OpenCvSharp.InputArray,
    w: OpenCvSharp.OutputArray,
    u: OpenCvSharp.OutputArray,
    vt: OpenCvSharp.OutputArray
  ): VoidResult;
  svDecomp(
    src: OpenCvSharp.InputArray,
    w: OpenCvSharp.OutputArray,
    u: OpenCvSharp.OutputArray,
    vt: OpenCvSharp.OutputArray,
    flags: EnumInput<OpenCvSharp.SVD.Flags>
  ): VoidResult;
  svBackSubst(
    w: OpenCvSharp.InputArray,
    u: OpenCvSharp.InputArray,
    vt: OpenCvSharp.InputArray,
    rhs: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray
  ): VoidResult;
  mahalanobis(
    v1: OpenCvSharp.InputArray,
    v2: OpenCvSharp.InputArray,
    icovar: OpenCvSharp.InputArray
  ): number;
  dft(src: OpenCvSharp.InputArray, dst: OpenCvSharp.OutputArray): VoidResult;
  dft(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    flags: EnumInput<OpenCvSharp.DftFlags>
  ): VoidResult;
  dft(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    flags: EnumInput<OpenCvSharp.DftFlags>,
    nonzeroRows: number | StrongNumeric<Int32Host>
  ): VoidResult;
  idft(src: OpenCvSharp.InputArray, dst: OpenCvSharp.OutputArray): VoidResult;
  idft(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    flags: EnumInput<OpenCvSharp.DftFlags>
  ): VoidResult;
  idft(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    flags: EnumInput<OpenCvSharp.DftFlags>,
    nonzeroRows: number | StrongNumeric<Int32Host>
  ): VoidResult;
  dct(src: OpenCvSharp.InputArray, dst: OpenCvSharp.OutputArray): VoidResult;
  dct(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    flags: EnumInput<OpenCvSharp.DctFlags>
  ): VoidResult;
  idct(src: OpenCvSharp.InputArray, dst: OpenCvSharp.OutputArray): VoidResult;
  idct(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    flags: EnumInput<OpenCvSharp.DctFlags>
  ): VoidResult;
  mulSpectrums(
    a: OpenCvSharp.InputArray,
    b: OpenCvSharp.InputArray,
    c: OpenCvSharp.OutputArray,
    flags: EnumInput<OpenCvSharp.DftFlags>
  ): VoidResult;
  mulSpectrums(
    a: OpenCvSharp.InputArray,
    b: OpenCvSharp.InputArray,
    c: OpenCvSharp.OutputArray,
    flags: EnumInput<OpenCvSharp.DftFlags>,
    conjB: boolean
  ): VoidResult;
  getOptimalDFTSize(vecSize: number | StrongNumeric<Int32Host>): number;
  getTheRNG(): OpenCvSharp.RNG;
  setTheRNG(state: number | StrongNumeric<UInt64Host>): OpenCvSharp.RNG;
  randu(
    dst: OpenCvSharp.InputOutputArray,
    low: OpenCvSharp.InputArray,
    high: OpenCvSharp.InputArray
  ): VoidResult;
  randu(
    dst: OpenCvSharp.InputOutputArray,
    low: OpenCvSharp.Scalar,
    high: OpenCvSharp.Scalar
  ): VoidResult;
  randn(
    dst: OpenCvSharp.InputOutputArray,
    mean: OpenCvSharp.InputArray,
    stddev: OpenCvSharp.InputArray
  ): VoidResult;
  randn(
    dst: OpenCvSharp.InputOutputArray,
    mean: OpenCvSharp.Scalar,
    stddev: OpenCvSharp.Scalar
  ): VoidResult;
  randShuffle(
    dst: OpenCvSharp.InputOutputArray,
    iterFactor: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  randShuffle(
    dst: OpenCvSharp.InputOutputArray,
    iterFactor: number | StrongNumeric<DoubleHost>,
    rng: HostVariableRef<OpenCvSharp.RNG>
  ): VoidResult;
  kmeans(
    data: OpenCvSharp.InputArray,
    k: number | StrongNumeric<Int32Host>,
    bestLabels: OpenCvSharp.InputOutputArray,
    criteria: OpenCvSharp.TermCriteria,
    attempts: number | StrongNumeric<Int32Host>,
    flags: EnumInput<OpenCvSharp.KMeansFlags>
  ): number;
  kmeans(
    data: OpenCvSharp.InputArray,
    k: number | StrongNumeric<Int32Host>,
    bestLabels: OpenCvSharp.InputOutputArray,
    criteria: OpenCvSharp.TermCriteria,
    attempts: number | StrongNumeric<Int32Host>,
    flags: EnumInput<OpenCvSharp.KMeansFlags>,
    centers: OpenCvSharp.OutputArray | null
  ): number;
  fastAtan2(y: number | StrongNumeric<SingleHost>, x: number | StrongNumeric<SingleHost>): number;
  cubeRoot(val: number | StrongNumeric<SingleHost>): number;
  setNumThreads(nThreads: number | StrongNumeric<Int32Host>): VoidResult;
  getNumThreads(): number;
  getThreadNum(): number;
  getBuildInformation(): string;
  getVersionString(): string;
  getVersionMajor(): number;
  getVersionMinor(): number;
  getVersionRevision(): number;
  getTickCount(): number;
  getTickFrequency(): number;
  getCpuTickCount(): number;
  checkHardwareSupport(feature: EnumInput<OpenCvSharp.CpuFeatures>): boolean;
  getHardwareFeatureName(feature: EnumInput<OpenCvSharp.CpuFeatures>): string;
  getCpuFeaturesLine(): string;
  getNumberOfCpus(): number;
  setUseOptimized(onoff: boolean): VoidResult;
  useOptimized(): boolean;
  alignSize(sz: number | StrongNumeric<Int32Host>, n: number | StrongNumeric<Int32Host>): number;
  setBreakOnError(flag: boolean): boolean;
  format(mtx: OpenCvSharp.InputArray): string;
  format(mtx: OpenCvSharp.InputArray, format: EnumInput<OpenCvSharp.FormatType>): string;
  setLogLevel(logLevel: EnumInput<OpenCvSharp.LogLevel>): OpenCvSharp.LogLevel;
  getLogLevel(): OpenCvSharp.LogLevel;
  abs(src: OpenCvSharp.Mat): OpenCvSharp.MatExpr;
  abs(src: OpenCvSharp.MatExpr): OpenCvSharp.MatExpr;
  partition<T>(
    type1: HostType<T>,
    vec: System.Collections.Generic.IEnumerable<T>,
    labels: HostVariableOut<HostArray<number>>,
    predicate: Cv2_PartitionPredicate<T>
  ): number;
  fast(
    image: OpenCvSharp.InputArray,
    threshold: number | StrongNumeric<Int32Host>
  ): HostArray<OpenCvSharp.KeyPoint>;
  fast(
    image: OpenCvSharp.InputArray,
    threshold: number | StrongNumeric<Int32Host>,
    nonmaxSupression: boolean
  ): HostArray<OpenCvSharp.KeyPoint>;
  fast(
    image: OpenCvSharp.InputArray,
    threshold: number | StrongNumeric<Int32Host>,
    nonmaxSupression: boolean,
    type: EnumInput<OpenCvSharp.FASTType>
  ): HostArray<OpenCvSharp.KeyPoint>;
  agast(
    image: OpenCvSharp.InputArray,
    threshold: number | StrongNumeric<Int32Host>,
    nonmaxSuppression: boolean,
    type: EnumInput<OpenCvSharp.AgastFeatureDetector.DetectorType>
  ): HostArray<OpenCvSharp.KeyPoint>;
  drawKeypoints(
    image: OpenCvSharp.InputArray,
    keypoints: System.Collections.Generic.IEnumerable<OpenCvSharp.KeyPoint>,
    outImage: OpenCvSharp.InputOutputArray
  ): VoidResult;
  drawKeypoints(
    image: OpenCvSharp.InputArray,
    keypoints: System.Collections.Generic.IEnumerable<OpenCvSharp.KeyPoint>,
    outImage: OpenCvSharp.InputOutputArray,
    color: OpenCvSharp.Scalar | null | null
  ): VoidResult;
  drawKeypoints(
    image: OpenCvSharp.InputArray,
    keypoints: System.Collections.Generic.IEnumerable<OpenCvSharp.KeyPoint>,
    outImage: OpenCvSharp.InputOutputArray,
    color: OpenCvSharp.Scalar | null | null,
    flags: EnumInput<OpenCvSharp.DrawMatchesFlags>
  ): VoidResult;
  drawMatches(
    img1: OpenCvSharp.Mat,
    keypoints1: System.Collections.Generic.IEnumerable<OpenCvSharp.KeyPoint>,
    img2: OpenCvSharp.Mat,
    keypoints2: System.Collections.Generic.IEnumerable<OpenCvSharp.KeyPoint>,
    matches1To2: System.Collections.Generic.IEnumerable<OpenCvSharp.DMatch>,
    outImg: OpenCvSharp.Mat
  ): VoidResult;
  drawMatches(
    img1: OpenCvSharp.Mat,
    keypoints1: System.Collections.Generic.IEnumerable<OpenCvSharp.KeyPoint>,
    img2: OpenCvSharp.Mat,
    keypoints2: System.Collections.Generic.IEnumerable<OpenCvSharp.KeyPoint>,
    matches1To2: System.Collections.Generic.IEnumerable<OpenCvSharp.DMatch>,
    outImg: OpenCvSharp.Mat,
    matchColor: OpenCvSharp.Scalar | null | null
  ): VoidResult;
  drawMatches(
    img1: OpenCvSharp.Mat,
    keypoints1: System.Collections.Generic.IEnumerable<OpenCvSharp.KeyPoint>,
    img2: OpenCvSharp.Mat,
    keypoints2: System.Collections.Generic.IEnumerable<OpenCvSharp.KeyPoint>,
    matches1To2: System.Collections.Generic.IEnumerable<OpenCvSharp.DMatch>,
    outImg: OpenCvSharp.Mat,
    matchColor: OpenCvSharp.Scalar | null | null,
    singlePointColor: OpenCvSharp.Scalar | null | null
  ): VoidResult;
  drawMatches(
    img1: OpenCvSharp.Mat,
    keypoints1: System.Collections.Generic.IEnumerable<OpenCvSharp.KeyPoint>,
    img2: OpenCvSharp.Mat,
    keypoints2: System.Collections.Generic.IEnumerable<OpenCvSharp.KeyPoint>,
    matches1To2: System.Collections.Generic.IEnumerable<OpenCvSharp.DMatch>,
    outImg: OpenCvSharp.Mat,
    matchColor: OpenCvSharp.Scalar | null | null,
    singlePointColor: OpenCvSharp.Scalar | null | null,
    matchesMask: System.Collections.Generic.IEnumerable<number> | null
  ): VoidResult;
  drawMatches(
    img1: OpenCvSharp.Mat,
    keypoints1: System.Collections.Generic.IEnumerable<OpenCvSharp.KeyPoint>,
    img2: OpenCvSharp.Mat,
    keypoints2: System.Collections.Generic.IEnumerable<OpenCvSharp.KeyPoint>,
    matches1To2: System.Collections.Generic.IEnumerable<OpenCvSharp.DMatch>,
    outImg: OpenCvSharp.Mat,
    matchColor: OpenCvSharp.Scalar | null | null,
    singlePointColor: OpenCvSharp.Scalar | null | null,
    matchesMask: System.Collections.Generic.IEnumerable<number> | null,
    flags: EnumInput<OpenCvSharp.DrawMatchesFlags>
  ): VoidResult;
  drawMatchesKnn(
    img1: OpenCvSharp.Mat,
    keypoints1: System.Collections.Generic.IEnumerable<OpenCvSharp.KeyPoint>,
    img2: OpenCvSharp.Mat,
    keypoints2: System.Collections.Generic.IEnumerable<OpenCvSharp.KeyPoint>,
    matches1To2: System.Collections.Generic.IEnumerable<
      System.Collections.Generic.IEnumerable<OpenCvSharp.DMatch>
    >,
    outImg: OpenCvSharp.Mat
  ): VoidResult;
  drawMatchesKnn(
    img1: OpenCvSharp.Mat,
    keypoints1: System.Collections.Generic.IEnumerable<OpenCvSharp.KeyPoint>,
    img2: OpenCvSharp.Mat,
    keypoints2: System.Collections.Generic.IEnumerable<OpenCvSharp.KeyPoint>,
    matches1To2: System.Collections.Generic.IEnumerable<
      System.Collections.Generic.IEnumerable<OpenCvSharp.DMatch>
    >,
    outImg: OpenCvSharp.Mat,
    matchColor: OpenCvSharp.Scalar | null | null
  ): VoidResult;
  drawMatchesKnn(
    img1: OpenCvSharp.Mat,
    keypoints1: System.Collections.Generic.IEnumerable<OpenCvSharp.KeyPoint>,
    img2: OpenCvSharp.Mat,
    keypoints2: System.Collections.Generic.IEnumerable<OpenCvSharp.KeyPoint>,
    matches1To2: System.Collections.Generic.IEnumerable<
      System.Collections.Generic.IEnumerable<OpenCvSharp.DMatch>
    >,
    outImg: OpenCvSharp.Mat,
    matchColor: OpenCvSharp.Scalar | null | null,
    singlePointColor: OpenCvSharp.Scalar | null | null
  ): VoidResult;
  drawMatchesKnn(
    img1: OpenCvSharp.Mat,
    keypoints1: System.Collections.Generic.IEnumerable<OpenCvSharp.KeyPoint>,
    img2: OpenCvSharp.Mat,
    keypoints2: System.Collections.Generic.IEnumerable<OpenCvSharp.KeyPoint>,
    matches1To2: System.Collections.Generic.IEnumerable<
      System.Collections.Generic.IEnumerable<OpenCvSharp.DMatch>
    >,
    outImg: OpenCvSharp.Mat,
    matchColor: OpenCvSharp.Scalar | null | null,
    singlePointColor: OpenCvSharp.Scalar | null | null,
    matchesMask: System.Collections.Generic.IEnumerable<
      System.Collections.Generic.IEnumerable<number>
    > | null
  ): VoidResult;
  drawMatchesKnn(
    img1: OpenCvSharp.Mat,
    keypoints1: System.Collections.Generic.IEnumerable<OpenCvSharp.KeyPoint>,
    img2: OpenCvSharp.Mat,
    keypoints2: System.Collections.Generic.IEnumerable<OpenCvSharp.KeyPoint>,
    matches1To2: System.Collections.Generic.IEnumerable<
      System.Collections.Generic.IEnumerable<OpenCvSharp.DMatch>
    >,
    outImg: OpenCvSharp.Mat,
    matchColor: OpenCvSharp.Scalar | null | null,
    singlePointColor: OpenCvSharp.Scalar | null | null,
    matchesMask: System.Collections.Generic.IEnumerable<
      System.Collections.Generic.IEnumerable<number>
    > | null,
    flags: EnumInput<OpenCvSharp.DrawMatchesFlags>
  ): VoidResult;
  evaluateFeatureDetector(
    img1: OpenCvSharp.Mat,
    img2: OpenCvSharp.Mat,
    h1to2: OpenCvSharp.Mat,
    keypoints1: HostVariableRef<HostArray<OpenCvSharp.KeyPoint>>,
    keypoints2: HostVariableRef<HostArray<OpenCvSharp.KeyPoint>>,
    repeatability: HostVariableOut<number>,
    correspCount: HostVariableOut<number>
  ): VoidResult;
  computeRecallPrecisionCurve(
    matches1to2: HostArray<HostArray<OpenCvSharp.DMatch>>,
    correctMatches1to2Mask: HostArray<HostArray<number | StrongNumeric<ByteHost>>>
  ): HostArray<OpenCvSharp.Point2f>;
  getRecall(
    recallPrecisionCurve: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>,
    lPrecision: number | StrongNumeric<SingleHost>
  ): number;
  getNearestPoint(
    recallPrecisionCurve: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>,
    lPrecision: number | StrongNumeric<SingleHost>
  ): number;
  namedWindow(winName: string): VoidResult;
  namedWindow(winName: string, flags: EnumInput<OpenCvSharp.WindowFlags>): VoidResult;
  destroyWindow(winName: string): VoidResult;
  destroyAllWindows(): VoidResult;
  startWindowThread(): number;
  waitKeyEx(): number;
  waitKeyEx(delay: number | StrongNumeric<Int32Host>): number;
  waitKey(): number;
  waitKey(delay: number | StrongNumeric<Int32Host>): number;
  imShow(winName: string, mat: OpenCvSharp.Mat): VoidResult;
  resizeWindow(
    winName: string,
    width: number | StrongNumeric<Int32Host>,
    height: number | StrongNumeric<Int32Host>
  ): VoidResult;
  resizeWindow(winName: string, size: OpenCvSharp.Size): VoidResult;
  moveWindow(
    winName: string,
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>
  ): VoidResult;
  setWindowProperty(
    winName: string,
    propId: EnumInput<OpenCvSharp.WindowPropertyFlags>,
    propValue: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  setWindowTitle(winName: string, title: string): VoidResult;
  getWindowProperty(winName: string, propId: EnumInput<OpenCvSharp.WindowPropertyFlags>): number;
  getWindowImageRect(winName: string): OpenCvSharp.Rect;
  setMouseCallback(windowName: string, onMouse: OpenCvSharp.MouseCallback): VoidResult;
  setMouseCallback(
    windowName: string,
    onMouse: OpenCvSharp.MouseCallback,
    userData: System.IntPtr
  ): VoidResult;
  getMouseWheelDelta(flags: EnumInput<OpenCvSharp.MouseEventFlags>): number;
  selectROI(windowName: string, img: OpenCvSharp.InputArray): OpenCvSharp.Rect;
  selectROI(
    windowName: string,
    img: OpenCvSharp.InputArray,
    showCrosshair: boolean
  ): OpenCvSharp.Rect;
  selectROI(
    windowName: string,
    img: OpenCvSharp.InputArray,
    showCrosshair: boolean,
    fromCenter: boolean
  ): OpenCvSharp.Rect;
  selectROI(img: OpenCvSharp.InputArray): OpenCvSharp.Rect;
  selectROI(img: OpenCvSharp.InputArray, showCrosshair: boolean): OpenCvSharp.Rect;
  selectROI(
    img: OpenCvSharp.InputArray,
    showCrosshair: boolean,
    fromCenter: boolean
  ): OpenCvSharp.Rect;
  selectROIs(windowName: string, img: OpenCvSharp.InputArray): HostArray<OpenCvSharp.Rect>;
  selectROIs(
    windowName: string,
    img: OpenCvSharp.InputArray,
    showCrosshair: boolean
  ): HostArray<OpenCvSharp.Rect>;
  selectROIs(
    windowName: string,
    img: OpenCvSharp.InputArray,
    showCrosshair: boolean,
    fromCenter: boolean
  ): HostArray<OpenCvSharp.Rect>;
  createTrackbar(
    trackbarName: string,
    winName: string,
    value: HostVariableRef<number>,
    count: number | StrongNumeric<Int32Host>
  ): number;
  createTrackbar(
    trackbarName: string,
    winName: string,
    value: HostVariableRef<number>,
    count: number | StrongNumeric<Int32Host>,
    onChange: OpenCvSharp.TrackbarCallbackNative | null
  ): number;
  createTrackbar(
    trackbarName: string,
    winName: string,
    value: HostVariableRef<number>,
    count: number | StrongNumeric<Int32Host>,
    onChange: OpenCvSharp.TrackbarCallbackNative | null,
    userData: System.IntPtr
  ): number;
  createTrackbar(
    trackbarName: string,
    winName: string,
    count: number | StrongNumeric<Int32Host>
  ): number;
  createTrackbar(
    trackbarName: string,
    winName: string,
    count: number | StrongNumeric<Int32Host>,
    onChange: OpenCvSharp.TrackbarCallbackNative | null
  ): number;
  createTrackbar(
    trackbarName: string,
    winName: string,
    count: number | StrongNumeric<Int32Host>,
    onChange: OpenCvSharp.TrackbarCallbackNative | null,
    userData: System.IntPtr
  ): number;
  getTrackbarPos(trackbarName: string, winName: string): number;
  setTrackbarPos(
    trackbarName: string,
    winName: string,
    pos: number | StrongNumeric<Int32Host>
  ): VoidResult;
  setTrackbarMax(
    trackbarName: string,
    winName: string,
    maxVal: number | StrongNumeric<Int32Host>
  ): VoidResult;
  setTrackbarMin(
    trackbarName: string,
    winName: string,
    minVal: number | StrongNumeric<Int32Host>
  ): VoidResult;
  getWindowHandle(windowName: string): System.IntPtr;
  imRead(fileName: string): OpenCvSharp.Mat;
  imRead(fileName: string, flags: EnumInput<OpenCvSharp.ImreadModes>): OpenCvSharp.Mat;
  imReadMulti(filename: string, mats: HostVariableOut<HostArray<OpenCvSharp.Mat>>): boolean;
  imReadMulti(
    filename: string,
    mats: HostVariableOut<HostArray<OpenCvSharp.Mat>>,
    flags: EnumInput<OpenCvSharp.ImreadModes>
  ): boolean;
  imWrite(fileName: string, img: OpenCvSharp.Mat): boolean;
  imWrite(
    fileName: string,
    img: OpenCvSharp.Mat,
    prms: HostArray<number | StrongNumeric<Int32Host>> | null
  ): boolean;
  imWrite(
    fileName: string,
    img: OpenCvSharp.Mat,
    prms: HostArray<OpenCvSharp.ImageEncodingParam>
  ): boolean;
  imWrite(
    fileName: string,
    img: OpenCvSharp.Mat,
    ...prms: OpenCvSharp.ImageEncodingParam[]
  ): boolean;
  imWrite(fileName: string, img: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>): boolean;
  imWrite(
    fileName: string,
    img: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    prms: HostArray<number | StrongNumeric<Int32Host>> | null
  ): boolean;
  imWrite(
    fileName: string,
    img: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    prms: HostArray<OpenCvSharp.ImageEncodingParam>
  ): boolean;
  imWrite(
    fileName: string,
    img: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    ...prms: OpenCvSharp.ImageEncodingParam[]
  ): boolean;
  imDecode(buf: OpenCvSharp.Mat, flags: EnumInput<OpenCvSharp.ImreadModes>): OpenCvSharp.Mat;
  imDecode(buf: OpenCvSharp.InputArray, flags: EnumInput<OpenCvSharp.ImreadModes>): OpenCvSharp.Mat;
  imDecode(
    buf: HostArray<number | StrongNumeric<ByteHost>>,
    flags: EnumInput<OpenCvSharp.ImreadModes>
  ): OpenCvSharp.Mat;
  imEncode(
    ext: string,
    img: OpenCvSharp.InputArray,
    buf: HostVariableOut<HostArray<number>>
  ): boolean;
  imEncode(
    ext: string,
    img: OpenCvSharp.InputArray,
    buf: HostVariableOut<HostArray<number>>,
    prms: HostArray<number | StrongNumeric<Int32Host>> | null
  ): boolean;
  imEncode(
    ext: string,
    img: OpenCvSharp.InputArray,
    buf: HostVariableOut<HostArray<number>>,
    prms: HostArray<OpenCvSharp.ImageEncodingParam>
  ): VoidResult;
  imEncode(
    ext: string,
    img: OpenCvSharp.InputArray,
    buf: HostVariableOut<HostArray<number>>,
    ...prms: OpenCvSharp.ImageEncodingParam[]
  ): VoidResult;
  haveImageReader(fileName: string): boolean;
  haveImageWriter(fileName: string): boolean;
  getGaussianKernel(
    ksize: number | StrongNumeric<Int32Host>,
    sigma: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Mat;
  getGaussianKernel(
    ksize: number | StrongNumeric<Int32Host>,
    sigma: number | StrongNumeric<DoubleHost>,
    ktype: OpenCvSharp.MatType | null | null
  ): OpenCvSharp.Mat;
  getDerivKernels(
    kx: OpenCvSharp.OutputArray,
    ky: OpenCvSharp.OutputArray,
    dx: number | StrongNumeric<Int32Host>,
    dy: number | StrongNumeric<Int32Host>,
    ksize: number | StrongNumeric<Int32Host>
  ): VoidResult;
  getDerivKernels(
    kx: OpenCvSharp.OutputArray,
    ky: OpenCvSharp.OutputArray,
    dx: number | StrongNumeric<Int32Host>,
    dy: number | StrongNumeric<Int32Host>,
    ksize: number | StrongNumeric<Int32Host>,
    normalize: boolean
  ): VoidResult;
  getDerivKernels(
    kx: OpenCvSharp.OutputArray,
    ky: OpenCvSharp.OutputArray,
    dx: number | StrongNumeric<Int32Host>,
    dy: number | StrongNumeric<Int32Host>,
    ksize: number | StrongNumeric<Int32Host>,
    normalize: boolean,
    ktype: OpenCvSharp.MatType | null | null
  ): VoidResult;
  getGaborKernel(
    ksize: OpenCvSharp.Size,
    sigma: number | StrongNumeric<DoubleHost>,
    theta: number | StrongNumeric<DoubleHost>,
    lambd: number | StrongNumeric<DoubleHost>,
    gamma: number | StrongNumeric<DoubleHost>,
    psi: number | StrongNumeric<DoubleHost>,
    ktype: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Mat;
  getStructuringElement(
    shape: EnumInput<OpenCvSharp.MorphShapes>,
    ksize: OpenCvSharp.Size
  ): OpenCvSharp.Mat;
  getStructuringElement(
    shape: EnumInput<OpenCvSharp.MorphShapes>,
    ksize: OpenCvSharp.Size,
    anchor: OpenCvSharp.Point
  ): OpenCvSharp.Mat;
  medianBlur(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    ksize: number | StrongNumeric<Int32Host>
  ): VoidResult;
  gaussianBlur(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    ksize: OpenCvSharp.Size,
    sigmaX: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  gaussianBlur(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    ksize: OpenCvSharp.Size,
    sigmaX: number | StrongNumeric<DoubleHost>,
    sigmaY: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  gaussianBlur(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    ksize: OpenCvSharp.Size,
    sigmaX: number | StrongNumeric<DoubleHost>,
    sigmaY: number | StrongNumeric<DoubleHost>,
    borderType: EnumInput<OpenCvSharp.BorderTypes>
  ): VoidResult;
  bilateralFilter(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    d: number | StrongNumeric<Int32Host>,
    sigmaColor: number | StrongNumeric<DoubleHost>,
    sigmaSpace: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  bilateralFilter(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    d: number | StrongNumeric<Int32Host>,
    sigmaColor: number | StrongNumeric<DoubleHost>,
    sigmaSpace: number | StrongNumeric<DoubleHost>,
    borderType: EnumInput<OpenCvSharp.BorderTypes>
  ): VoidResult;
  boxFilter(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    ddepth: OpenCvSharp.MatType,
    ksize: OpenCvSharp.Size
  ): VoidResult;
  boxFilter(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    ddepth: OpenCvSharp.MatType,
    ksize: OpenCvSharp.Size,
    anchor: OpenCvSharp.Point | null | null
  ): VoidResult;
  boxFilter(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    ddepth: OpenCvSharp.MatType,
    ksize: OpenCvSharp.Size,
    anchor: OpenCvSharp.Point | null | null,
    normalize: boolean
  ): VoidResult;
  boxFilter(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    ddepth: OpenCvSharp.MatType,
    ksize: OpenCvSharp.Size,
    anchor: OpenCvSharp.Point | null | null,
    normalize: boolean,
    borderType: EnumInput<OpenCvSharp.BorderTypes>
  ): VoidResult;
  sqrBoxFilter(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    ddepth: number | StrongNumeric<Int32Host>,
    ksize: OpenCvSharp.Size
  ): VoidResult;
  sqrBoxFilter(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    ddepth: number | StrongNumeric<Int32Host>,
    ksize: OpenCvSharp.Size,
    anchor: OpenCvSharp.Point | null | null
  ): VoidResult;
  sqrBoxFilter(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    ddepth: number | StrongNumeric<Int32Host>,
    ksize: OpenCvSharp.Size,
    anchor: OpenCvSharp.Point | null | null,
    normalize: boolean
  ): VoidResult;
  sqrBoxFilter(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    ddepth: number | StrongNumeric<Int32Host>,
    ksize: OpenCvSharp.Size,
    anchor: OpenCvSharp.Point | null | null,
    normalize: boolean,
    borderType: EnumInput<OpenCvSharp.BorderTypes>
  ): VoidResult;
  blur(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    ksize: OpenCvSharp.Size
  ): VoidResult;
  blur(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    ksize: OpenCvSharp.Size,
    anchor: OpenCvSharp.Point | null | null
  ): VoidResult;
  blur(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    ksize: OpenCvSharp.Size,
    anchor: OpenCvSharp.Point | null | null,
    borderType: EnumInput<OpenCvSharp.BorderTypes>
  ): VoidResult;
  filter2D(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    ddepth: OpenCvSharp.MatType,
    kernel: OpenCvSharp.InputArray
  ): VoidResult;
  filter2D(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    ddepth: OpenCvSharp.MatType,
    kernel: OpenCvSharp.InputArray,
    anchor: OpenCvSharp.Point | null | null
  ): VoidResult;
  filter2D(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    ddepth: OpenCvSharp.MatType,
    kernel: OpenCvSharp.InputArray,
    anchor: OpenCvSharp.Point | null | null,
    delta: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  filter2D(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    ddepth: OpenCvSharp.MatType,
    kernel: OpenCvSharp.InputArray,
    anchor: OpenCvSharp.Point | null | null,
    delta: number | StrongNumeric<DoubleHost>,
    borderType: EnumInput<OpenCvSharp.BorderTypes>
  ): VoidResult;
  sepFilter2D(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    ddepth: OpenCvSharp.MatType,
    kernelX: OpenCvSharp.InputArray,
    kernelY: OpenCvSharp.InputArray
  ): VoidResult;
  sepFilter2D(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    ddepth: OpenCvSharp.MatType,
    kernelX: OpenCvSharp.InputArray,
    kernelY: OpenCvSharp.InputArray,
    anchor: OpenCvSharp.Point | null | null
  ): VoidResult;
  sepFilter2D(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    ddepth: OpenCvSharp.MatType,
    kernelX: OpenCvSharp.InputArray,
    kernelY: OpenCvSharp.InputArray,
    anchor: OpenCvSharp.Point | null | null,
    delta: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  sepFilter2D(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    ddepth: OpenCvSharp.MatType,
    kernelX: OpenCvSharp.InputArray,
    kernelY: OpenCvSharp.InputArray,
    anchor: OpenCvSharp.Point | null | null,
    delta: number | StrongNumeric<DoubleHost>,
    borderType: EnumInput<OpenCvSharp.BorderTypes>
  ): VoidResult;
  sobel(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    ddepth: OpenCvSharp.MatType,
    xorder: number | StrongNumeric<Int32Host>,
    yorder: number | StrongNumeric<Int32Host>
  ): VoidResult;
  sobel(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    ddepth: OpenCvSharp.MatType,
    xorder: number | StrongNumeric<Int32Host>,
    yorder: number | StrongNumeric<Int32Host>,
    ksize: number | StrongNumeric<Int32Host>
  ): VoidResult;
  sobel(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    ddepth: OpenCvSharp.MatType,
    xorder: number | StrongNumeric<Int32Host>,
    yorder: number | StrongNumeric<Int32Host>,
    ksize: number | StrongNumeric<Int32Host>,
    scale: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  sobel(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    ddepth: OpenCvSharp.MatType,
    xorder: number | StrongNumeric<Int32Host>,
    yorder: number | StrongNumeric<Int32Host>,
    ksize: number | StrongNumeric<Int32Host>,
    scale: number | StrongNumeric<DoubleHost>,
    delta: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  sobel(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    ddepth: OpenCvSharp.MatType,
    xorder: number | StrongNumeric<Int32Host>,
    yorder: number | StrongNumeric<Int32Host>,
    ksize: number | StrongNumeric<Int32Host>,
    scale: number | StrongNumeric<DoubleHost>,
    delta: number | StrongNumeric<DoubleHost>,
    borderType: EnumInput<OpenCvSharp.BorderTypes>
  ): VoidResult;
  spatialGradient(
    src: OpenCvSharp.InputArray,
    dx: OpenCvSharp.OutputArray,
    dy: OpenCvSharp.OutputArray
  ): VoidResult;
  spatialGradient(
    src: OpenCvSharp.InputArray,
    dx: OpenCvSharp.OutputArray,
    dy: OpenCvSharp.OutputArray,
    ksize: number | StrongNumeric<Int32Host>
  ): VoidResult;
  spatialGradient(
    src: OpenCvSharp.InputArray,
    dx: OpenCvSharp.OutputArray,
    dy: OpenCvSharp.OutputArray,
    ksize: number | StrongNumeric<Int32Host>,
    borderType: EnumInput<OpenCvSharp.BorderTypes>
  ): VoidResult;
  scharr(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    ddepth: OpenCvSharp.MatType,
    xorder: number | StrongNumeric<Int32Host>,
    yorder: number | StrongNumeric<Int32Host>
  ): VoidResult;
  scharr(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    ddepth: OpenCvSharp.MatType,
    xorder: number | StrongNumeric<Int32Host>,
    yorder: number | StrongNumeric<Int32Host>,
    scale: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  scharr(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    ddepth: OpenCvSharp.MatType,
    xorder: number | StrongNumeric<Int32Host>,
    yorder: number | StrongNumeric<Int32Host>,
    scale: number | StrongNumeric<DoubleHost>,
    delta: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  scharr(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    ddepth: OpenCvSharp.MatType,
    xorder: number | StrongNumeric<Int32Host>,
    yorder: number | StrongNumeric<Int32Host>,
    scale: number | StrongNumeric<DoubleHost>,
    delta: number | StrongNumeric<DoubleHost>,
    borderType: EnumInput<OpenCvSharp.BorderTypes>
  ): VoidResult;
  laplacian(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    ddepth: OpenCvSharp.MatType
  ): VoidResult;
  laplacian(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    ddepth: OpenCvSharp.MatType,
    ksize: number | StrongNumeric<Int32Host>
  ): VoidResult;
  laplacian(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    ddepth: OpenCvSharp.MatType,
    ksize: number | StrongNumeric<Int32Host>,
    scale: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  laplacian(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    ddepth: OpenCvSharp.MatType,
    ksize: number | StrongNumeric<Int32Host>,
    scale: number | StrongNumeric<DoubleHost>,
    delta: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  laplacian(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    ddepth: OpenCvSharp.MatType,
    ksize: number | StrongNumeric<Int32Host>,
    scale: number | StrongNumeric<DoubleHost>,
    delta: number | StrongNumeric<DoubleHost>,
    borderType: EnumInput<OpenCvSharp.BorderTypes>
  ): VoidResult;
  canny(
    src: OpenCvSharp.InputArray,
    edges: OpenCvSharp.OutputArray,
    threshold1: number | StrongNumeric<DoubleHost>,
    threshold2: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  canny(
    src: OpenCvSharp.InputArray,
    edges: OpenCvSharp.OutputArray,
    threshold1: number | StrongNumeric<DoubleHost>,
    threshold2: number | StrongNumeric<DoubleHost>,
    apertureSize: number | StrongNumeric<Int32Host>
  ): VoidResult;
  canny(
    src: OpenCvSharp.InputArray,
    edges: OpenCvSharp.OutputArray,
    threshold1: number | StrongNumeric<DoubleHost>,
    threshold2: number | StrongNumeric<DoubleHost>,
    apertureSize: number | StrongNumeric<Int32Host>,
    l2gradient: boolean
  ): VoidResult;
  canny(
    dx: OpenCvSharp.InputArray,
    dy: OpenCvSharp.InputArray,
    edges: OpenCvSharp.OutputArray,
    threshold1: number | StrongNumeric<DoubleHost>,
    threshold2: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  canny(
    dx: OpenCvSharp.InputArray,
    dy: OpenCvSharp.InputArray,
    edges: OpenCvSharp.OutputArray,
    threshold1: number | StrongNumeric<DoubleHost>,
    threshold2: number | StrongNumeric<DoubleHost>,
    l2gradient: boolean
  ): VoidResult;
  cornerMinEigenVal(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    blockSize: number | StrongNumeric<Int32Host>
  ): VoidResult;
  cornerMinEigenVal(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    blockSize: number | StrongNumeric<Int32Host>,
    ksize: number | StrongNumeric<Int32Host>
  ): VoidResult;
  cornerMinEigenVal(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    blockSize: number | StrongNumeric<Int32Host>,
    ksize: number | StrongNumeric<Int32Host>,
    borderType: EnumInput<OpenCvSharp.BorderTypes>
  ): VoidResult;
  cornerHarris(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    blockSize: number | StrongNumeric<Int32Host>,
    ksize: number | StrongNumeric<Int32Host>,
    k: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  cornerHarris(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    blockSize: number | StrongNumeric<Int32Host>,
    ksize: number | StrongNumeric<Int32Host>,
    k: number | StrongNumeric<DoubleHost>,
    borderType: EnumInput<OpenCvSharp.BorderTypes>
  ): VoidResult;
  cornerEigenValsAndVecs(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    blockSize: number | StrongNumeric<Int32Host>,
    ksize: number | StrongNumeric<Int32Host>
  ): VoidResult;
  cornerEigenValsAndVecs(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    blockSize: number | StrongNumeric<Int32Host>,
    ksize: number | StrongNumeric<Int32Host>,
    borderType: EnumInput<OpenCvSharp.BorderTypes>
  ): VoidResult;
  preCornerDetect(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    ksize: number | StrongNumeric<Int32Host>
  ): VoidResult;
  preCornerDetect(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    ksize: number | StrongNumeric<Int32Host>,
    borderType: EnumInput<OpenCvSharp.BorderTypes>
  ): VoidResult;
  cornerSubPix(
    image: OpenCvSharp.InputArray,
    inputCorners: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>,
    winSize: OpenCvSharp.Size,
    zeroZone: OpenCvSharp.Size,
    criteria: OpenCvSharp.TermCriteria
  ): HostArray<OpenCvSharp.Point2f>;
  goodFeaturesToTrack(
    src: OpenCvSharp.InputArray,
    maxCorners: number | StrongNumeric<Int32Host>,
    qualityLevel: number | StrongNumeric<DoubleHost>,
    minDistance: number | StrongNumeric<DoubleHost>,
    mask: OpenCvSharp.InputArray,
    blockSize: number | StrongNumeric<Int32Host>,
    useHarrisDetector: boolean,
    k: number | StrongNumeric<DoubleHost>
  ): HostArray<OpenCvSharp.Point2f>;
  houghLines(
    image: OpenCvSharp.InputArray,
    rho: number | StrongNumeric<DoubleHost>,
    theta: number | StrongNumeric<DoubleHost>,
    threshold: number | StrongNumeric<Int32Host>
  ): HostArray<OpenCvSharp.LineSegmentPolar>;
  houghLines(
    image: OpenCvSharp.InputArray,
    rho: number | StrongNumeric<DoubleHost>,
    theta: number | StrongNumeric<DoubleHost>,
    threshold: number | StrongNumeric<Int32Host>,
    srn: number | StrongNumeric<DoubleHost>
  ): HostArray<OpenCvSharp.LineSegmentPolar>;
  houghLines(
    image: OpenCvSharp.InputArray,
    rho: number | StrongNumeric<DoubleHost>,
    theta: number | StrongNumeric<DoubleHost>,
    threshold: number | StrongNumeric<Int32Host>,
    srn: number | StrongNumeric<DoubleHost>,
    stn: number | StrongNumeric<DoubleHost>
  ): HostArray<OpenCvSharp.LineSegmentPolar>;
  houghLinesP(
    image: OpenCvSharp.InputArray,
    rho: number | StrongNumeric<DoubleHost>,
    theta: number | StrongNumeric<DoubleHost>,
    threshold: number | StrongNumeric<Int32Host>
  ): HostArray<OpenCvSharp.LineSegmentPoint>;
  houghLinesP(
    image: OpenCvSharp.InputArray,
    rho: number | StrongNumeric<DoubleHost>,
    theta: number | StrongNumeric<DoubleHost>,
    threshold: number | StrongNumeric<Int32Host>,
    minLineLength: number | StrongNumeric<DoubleHost>
  ): HostArray<OpenCvSharp.LineSegmentPoint>;
  houghLinesP(
    image: OpenCvSharp.InputArray,
    rho: number | StrongNumeric<DoubleHost>,
    theta: number | StrongNumeric<DoubleHost>,
    threshold: number | StrongNumeric<Int32Host>,
    minLineLength: number | StrongNumeric<DoubleHost>,
    maxLineGap: number | StrongNumeric<DoubleHost>
  ): HostArray<OpenCvSharp.LineSegmentPoint>;
  houghLinesPointSet(
    point: OpenCvSharp.InputArray,
    lines: OpenCvSharp.OutputArray,
    linesMax: number | StrongNumeric<Int32Host>,
    threshold: number | StrongNumeric<Int32Host>,
    minRho: number | StrongNumeric<DoubleHost>,
    maxRho: number | StrongNumeric<DoubleHost>,
    rhoStep: number | StrongNumeric<DoubleHost>,
    minTheta: number | StrongNumeric<DoubleHost>,
    maxTheta: number | StrongNumeric<DoubleHost>,
    thetaStep: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  houghCircles(
    image: OpenCvSharp.InputArray,
    method: EnumInput<OpenCvSharp.HoughModes>,
    dp: number | StrongNumeric<DoubleHost>,
    minDist: number | StrongNumeric<DoubleHost>
  ): HostArray<OpenCvSharp.CircleSegment>;
  houghCircles(
    image: OpenCvSharp.InputArray,
    method: EnumInput<OpenCvSharp.HoughModes>,
    dp: number | StrongNumeric<DoubleHost>,
    minDist: number | StrongNumeric<DoubleHost>,
    param1: number | StrongNumeric<DoubleHost>
  ): HostArray<OpenCvSharp.CircleSegment>;
  houghCircles(
    image: OpenCvSharp.InputArray,
    method: EnumInput<OpenCvSharp.HoughModes>,
    dp: number | StrongNumeric<DoubleHost>,
    minDist: number | StrongNumeric<DoubleHost>,
    param1: number | StrongNumeric<DoubleHost>,
    param2: number | StrongNumeric<DoubleHost>
  ): HostArray<OpenCvSharp.CircleSegment>;
  houghCircles(
    image: OpenCvSharp.InputArray,
    method: EnumInput<OpenCvSharp.HoughModes>,
    dp: number | StrongNumeric<DoubleHost>,
    minDist: number | StrongNumeric<DoubleHost>,
    param1: number | StrongNumeric<DoubleHost>,
    param2: number | StrongNumeric<DoubleHost>,
    minRadius: number | StrongNumeric<Int32Host>
  ): HostArray<OpenCvSharp.CircleSegment>;
  houghCircles(
    image: OpenCvSharp.InputArray,
    method: EnumInput<OpenCvSharp.HoughModes>,
    dp: number | StrongNumeric<DoubleHost>,
    minDist: number | StrongNumeric<DoubleHost>,
    param1: number | StrongNumeric<DoubleHost>,
    param2: number | StrongNumeric<DoubleHost>,
    minRadius: number | StrongNumeric<Int32Host>,
    maxRadius: number | StrongNumeric<Int32Host>
  ): HostArray<OpenCvSharp.CircleSegment>;
  morphologyDefaultBorderValue(): OpenCvSharp.Scalar;
  dilate(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    element: OpenCvSharp.InputArray | null
  ): VoidResult;
  dilate(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    element: OpenCvSharp.InputArray | null,
    anchor: OpenCvSharp.Point | null | null
  ): VoidResult;
  dilate(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    element: OpenCvSharp.InputArray | null,
    anchor: OpenCvSharp.Point | null | null,
    iterations: number | StrongNumeric<Int32Host>
  ): VoidResult;
  dilate(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    element: OpenCvSharp.InputArray | null,
    anchor: OpenCvSharp.Point | null | null,
    iterations: number | StrongNumeric<Int32Host>,
    borderType: EnumInput<OpenCvSharp.BorderTypes>
  ): VoidResult;
  dilate(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    element: OpenCvSharp.InputArray | null,
    anchor: OpenCvSharp.Point | null | null,
    iterations: number | StrongNumeric<Int32Host>,
    borderType: EnumInput<OpenCvSharp.BorderTypes>,
    borderValue: OpenCvSharp.Scalar | null | null
  ): VoidResult;
  erode(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    element: OpenCvSharp.InputArray | null
  ): VoidResult;
  erode(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    element: OpenCvSharp.InputArray | null,
    anchor: OpenCvSharp.Point | null | null
  ): VoidResult;
  erode(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    element: OpenCvSharp.InputArray | null,
    anchor: OpenCvSharp.Point | null | null,
    iterations: number | StrongNumeric<Int32Host>
  ): VoidResult;
  erode(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    element: OpenCvSharp.InputArray | null,
    anchor: OpenCvSharp.Point | null | null,
    iterations: number | StrongNumeric<Int32Host>,
    borderType: EnumInput<OpenCvSharp.BorderTypes>
  ): VoidResult;
  erode(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    element: OpenCvSharp.InputArray | null,
    anchor: OpenCvSharp.Point | null | null,
    iterations: number | StrongNumeric<Int32Host>,
    borderType: EnumInput<OpenCvSharp.BorderTypes>,
    borderValue: OpenCvSharp.Scalar | null | null
  ): VoidResult;
  morphologyEx(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    op: EnumInput<OpenCvSharp.MorphTypes>,
    element: OpenCvSharp.InputArray | null
  ): VoidResult;
  morphologyEx(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    op: EnumInput<OpenCvSharp.MorphTypes>,
    element: OpenCvSharp.InputArray | null,
    anchor: OpenCvSharp.Point | null | null
  ): VoidResult;
  morphologyEx(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    op: EnumInput<OpenCvSharp.MorphTypes>,
    element: OpenCvSharp.InputArray | null,
    anchor: OpenCvSharp.Point | null | null,
    iterations: number | StrongNumeric<Int32Host>
  ): VoidResult;
  morphologyEx(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    op: EnumInput<OpenCvSharp.MorphTypes>,
    element: OpenCvSharp.InputArray | null,
    anchor: OpenCvSharp.Point | null | null,
    iterations: number | StrongNumeric<Int32Host>,
    borderType: EnumInput<OpenCvSharp.BorderTypes>
  ): VoidResult;
  morphologyEx(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    op: EnumInput<OpenCvSharp.MorphTypes>,
    element: OpenCvSharp.InputArray | null,
    anchor: OpenCvSharp.Point | null | null,
    iterations: number | StrongNumeric<Int32Host>,
    borderType: EnumInput<OpenCvSharp.BorderTypes>,
    borderValue: OpenCvSharp.Scalar | null | null
  ): VoidResult;
  resize(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    dsize: OpenCvSharp.Size
  ): VoidResult;
  resize(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    dsize: OpenCvSharp.Size,
    fx: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  resize(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    dsize: OpenCvSharp.Size,
    fx: number | StrongNumeric<DoubleHost>,
    fy: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  resize(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    dsize: OpenCvSharp.Size,
    fx: number | StrongNumeric<DoubleHost>,
    fy: number | StrongNumeric<DoubleHost>,
    interpolation: EnumInput<OpenCvSharp.InterpolationFlags>
  ): VoidResult;
  warpAffine(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    m: OpenCvSharp.InputArray,
    dsize: OpenCvSharp.Size
  ): VoidResult;
  warpAffine(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    m: OpenCvSharp.InputArray,
    dsize: OpenCvSharp.Size,
    flags: EnumInput<OpenCvSharp.InterpolationFlags>
  ): VoidResult;
  warpAffine(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    m: OpenCvSharp.InputArray,
    dsize: OpenCvSharp.Size,
    flags: EnumInput<OpenCvSharp.InterpolationFlags>,
    borderMode: EnumInput<OpenCvSharp.BorderTypes>
  ): VoidResult;
  warpAffine(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    m: OpenCvSharp.InputArray,
    dsize: OpenCvSharp.Size,
    flags: EnumInput<OpenCvSharp.InterpolationFlags>,
    borderMode: EnumInput<OpenCvSharp.BorderTypes>,
    borderValue: OpenCvSharp.Scalar | null | null
  ): VoidResult;
  warpPerspective(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    m: OpenCvSharp.InputArray,
    dsize: OpenCvSharp.Size
  ): VoidResult;
  warpPerspective(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    m: OpenCvSharp.InputArray,
    dsize: OpenCvSharp.Size,
    flags: EnumInput<OpenCvSharp.InterpolationFlags>
  ): VoidResult;
  warpPerspective(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    m: OpenCvSharp.InputArray,
    dsize: OpenCvSharp.Size,
    flags: EnumInput<OpenCvSharp.InterpolationFlags>,
    borderMode: EnumInput<OpenCvSharp.BorderTypes>
  ): VoidResult;
  warpPerspective(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    m: OpenCvSharp.InputArray,
    dsize: OpenCvSharp.Size,
    flags: EnumInput<OpenCvSharp.InterpolationFlags>,
    borderMode: EnumInput<OpenCvSharp.BorderTypes>,
    borderValue: OpenCvSharp.Scalar | null | null
  ): VoidResult;
  warpPerspective(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    m: HostArray<number | StrongNumeric<SingleHost>>,
    dsize: OpenCvSharp.Size
  ): VoidResult;
  warpPerspective(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    m: HostArray<number | StrongNumeric<SingleHost>>,
    dsize: OpenCvSharp.Size,
    flags: EnumInput<OpenCvSharp.InterpolationFlags>
  ): VoidResult;
  warpPerspective(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    m: HostArray<number | StrongNumeric<SingleHost>>,
    dsize: OpenCvSharp.Size,
    flags: EnumInput<OpenCvSharp.InterpolationFlags>,
    borderMode: EnumInput<OpenCvSharp.BorderTypes>
  ): VoidResult;
  warpPerspective(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    m: HostArray<number | StrongNumeric<SingleHost>>,
    dsize: OpenCvSharp.Size,
    flags: EnumInput<OpenCvSharp.InterpolationFlags>,
    borderMode: EnumInput<OpenCvSharp.BorderTypes>,
    borderValue: OpenCvSharp.Scalar | null | null
  ): VoidResult;
  remap(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    map1: OpenCvSharp.InputArray,
    map2: OpenCvSharp.InputArray
  ): VoidResult;
  remap(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    map1: OpenCvSharp.InputArray,
    map2: OpenCvSharp.InputArray,
    interpolation: EnumInput<OpenCvSharp.InterpolationFlags>
  ): VoidResult;
  remap(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    map1: OpenCvSharp.InputArray,
    map2: OpenCvSharp.InputArray,
    interpolation: EnumInput<OpenCvSharp.InterpolationFlags>,
    borderMode: EnumInput<OpenCvSharp.BorderTypes>
  ): VoidResult;
  remap(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    map1: OpenCvSharp.InputArray,
    map2: OpenCvSharp.InputArray,
    interpolation: EnumInput<OpenCvSharp.InterpolationFlags>,
    borderMode: EnumInput<OpenCvSharp.BorderTypes>,
    borderValue: OpenCvSharp.Scalar | null | null
  ): VoidResult;
  convertMaps(
    map1: OpenCvSharp.InputArray,
    map2: OpenCvSharp.InputArray,
    dstmap1: OpenCvSharp.OutputArray,
    dstmap2: OpenCvSharp.OutputArray,
    dstmap1Type: OpenCvSharp.MatType
  ): VoidResult;
  convertMaps(
    map1: OpenCvSharp.InputArray,
    map2: OpenCvSharp.InputArray,
    dstmap1: OpenCvSharp.OutputArray,
    dstmap2: OpenCvSharp.OutputArray,
    dstmap1Type: OpenCvSharp.MatType,
    nnInterpolation: boolean
  ): VoidResult;
  getRotationMatrix2D(
    center: OpenCvSharp.Point2f,
    angle: number | StrongNumeric<DoubleHost>,
    scale: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Mat;
  invertAffineTransform(m: OpenCvSharp.InputArray, im: OpenCvSharp.OutputArray): VoidResult;
  getPerspectiveTransform(
    src: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>,
    dst: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>
  ): OpenCvSharp.Mat;
  getPerspectiveTransform(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.InputArray
  ): OpenCvSharp.Mat;
  getAffineTransform(
    src: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>,
    dst: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>
  ): OpenCvSharp.Mat;
  getAffineTransform(src: OpenCvSharp.InputArray, dst: OpenCvSharp.InputArray): OpenCvSharp.Mat;
  getRectSubPix(
    image: OpenCvSharp.InputArray,
    patchSize: OpenCvSharp.Size,
    center: OpenCvSharp.Point2f,
    patch: OpenCvSharp.OutputArray
  ): VoidResult;
  getRectSubPix(
    image: OpenCvSharp.InputArray,
    patchSize: OpenCvSharp.Size,
    center: OpenCvSharp.Point2f,
    patch: OpenCvSharp.OutputArray,
    patchType: number | StrongNumeric<Int32Host>
  ): VoidResult;
  logPolar(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    center: OpenCvSharp.Point2f,
    m: number | StrongNumeric<DoubleHost>,
    flags: EnumInput<OpenCvSharp.InterpolationFlags>
  ): VoidResult;
  linearPolar(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    center: OpenCvSharp.Point2f,
    maxRadius: number | StrongNumeric<DoubleHost>,
    flags: EnumInput<OpenCvSharp.InterpolationFlags>
  ): VoidResult;
  warpPolar(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    dsize: OpenCvSharp.Size,
    center: OpenCvSharp.Point2f,
    maxRadius: number | StrongNumeric<DoubleHost>,
    interpolationFlags: EnumInput<OpenCvSharp.InterpolationFlags>,
    warpPolarMode: EnumInput<OpenCvSharp.WarpPolarMode>
  ): VoidResult;
  integral(src: OpenCvSharp.InputArray, sum: OpenCvSharp.OutputArray): VoidResult;
  integral(
    src: OpenCvSharp.InputArray,
    sum: OpenCvSharp.OutputArray,
    sdepth: OpenCvSharp.MatType | null | null
  ): VoidResult;
  integral(
    src: OpenCvSharp.InputArray,
    sum: OpenCvSharp.OutputArray,
    sqsum: OpenCvSharp.OutputArray
  ): VoidResult;
  integral(
    src: OpenCvSharp.InputArray,
    sum: OpenCvSharp.OutputArray,
    sqsum: OpenCvSharp.OutputArray,
    sdepth: OpenCvSharp.MatType | null | null
  ): VoidResult;
  integral(
    src: OpenCvSharp.InputArray,
    sum: OpenCvSharp.OutputArray,
    sqsum: OpenCvSharp.OutputArray,
    tilted: OpenCvSharp.OutputArray
  ): VoidResult;
  integral(
    src: OpenCvSharp.InputArray,
    sum: OpenCvSharp.OutputArray,
    sqsum: OpenCvSharp.OutputArray,
    tilted: OpenCvSharp.OutputArray,
    sdepth: OpenCvSharp.MatType | null | null
  ): VoidResult;
  integral(
    src: OpenCvSharp.InputArray,
    sum: OpenCvSharp.OutputArray,
    sqsum: OpenCvSharp.OutputArray,
    tilted: OpenCvSharp.OutputArray,
    sdepth: OpenCvSharp.MatType | null | null,
    sqdepth: OpenCvSharp.MatType | null | null
  ): VoidResult;
  accumulate(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.InputOutputArray,
    mask: OpenCvSharp.InputArray
  ): VoidResult;
  accumulateSquare(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.InputOutputArray,
    mask: OpenCvSharp.InputArray
  ): VoidResult;
  accumulateProduct(
    src1: OpenCvSharp.InputArray,
    src2: OpenCvSharp.InputArray,
    dst: OpenCvSharp.InputOutputArray,
    mask: OpenCvSharp.InputArray
  ): VoidResult;
  accumulateWeighted(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.InputOutputArray,
    alpha: number | StrongNumeric<DoubleHost>,
    mask: OpenCvSharp.InputArray
  ): VoidResult;
  phaseCorrelate(
    src1: OpenCvSharp.InputArray,
    src2: OpenCvSharp.InputArray,
    window: OpenCvSharp.InputArray,
    response: HostVariableOut<number>
  ): OpenCvSharp.Point2d;
  createHanningWindow(
    dst: OpenCvSharp.InputOutputArray,
    winSize: OpenCvSharp.Size,
    type: OpenCvSharp.MatType
  ): VoidResult;
  threshold(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    thresh: number | StrongNumeric<DoubleHost>,
    maxval: number | StrongNumeric<DoubleHost>,
    type: EnumInput<OpenCvSharp.ThresholdTypes>
  ): number;
  adaptiveThreshold(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    maxValue: number | StrongNumeric<DoubleHost>,
    adaptiveMethod: EnumInput<OpenCvSharp.AdaptiveThresholdTypes>,
    thresholdType: EnumInput<OpenCvSharp.ThresholdTypes>,
    blockSize: number | StrongNumeric<Int32Host>,
    c: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  pyrDown(src: OpenCvSharp.InputArray, dst: OpenCvSharp.OutputArray): VoidResult;
  pyrDown(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    dstSize: OpenCvSharp.Size | null | null
  ): VoidResult;
  pyrDown(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    dstSize: OpenCvSharp.Size | null | null,
    borderType: EnumInput<OpenCvSharp.BorderTypes>
  ): VoidResult;
  buildPyramid(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.Internal.Vectors.VectorOfMat,
    maxlevel: number | StrongNumeric<Int32Host>
  ): VoidResult;
  buildPyramid(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.Internal.Vectors.VectorOfMat,
    maxlevel: number | StrongNumeric<Int32Host>,
    borderType: EnumInput<OpenCvSharp.BorderTypes>
  ): VoidResult;
  pyrUp(src: OpenCvSharp.InputArray, dst: OpenCvSharp.OutputArray): VoidResult;
  pyrUp(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    dstSize: OpenCvSharp.Size | null | null
  ): VoidResult;
  pyrUp(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    dstSize: OpenCvSharp.Size | null | null,
    borderType: EnumInput<OpenCvSharp.BorderTypes>
  ): VoidResult;
  calcHist(
    images: HostArray<OpenCvSharp.Mat>,
    channels: HostArray<number | StrongNumeric<Int32Host>>,
    mask: OpenCvSharp.InputArray | null,
    hist: OpenCvSharp.OutputArray,
    dims: number | StrongNumeric<Int32Host>,
    histSize: HostArray<number | StrongNumeric<Int32Host>>,
    ranges: HostArray<OpenCvSharp.Rangef>
  ): VoidResult;
  calcHist(
    images: HostArray<OpenCvSharp.Mat>,
    channels: HostArray<number | StrongNumeric<Int32Host>>,
    mask: OpenCvSharp.InputArray | null,
    hist: OpenCvSharp.OutputArray,
    dims: number | StrongNumeric<Int32Host>,
    histSize: HostArray<number | StrongNumeric<Int32Host>>,
    ranges: HostArray<OpenCvSharp.Rangef>,
    uniform: boolean
  ): VoidResult;
  calcHist(
    images: HostArray<OpenCvSharp.Mat>,
    channels: HostArray<number | StrongNumeric<Int32Host>>,
    mask: OpenCvSharp.InputArray | null,
    hist: OpenCvSharp.OutputArray,
    dims: number | StrongNumeric<Int32Host>,
    histSize: HostArray<number | StrongNumeric<Int32Host>>,
    ranges: HostArray<OpenCvSharp.Rangef>,
    uniform: boolean,
    accumulate: boolean
  ): VoidResult;
  calcHist(
    images: HostArray<OpenCvSharp.Mat>,
    channels: HostArray<number | StrongNumeric<Int32Host>>,
    mask: OpenCvSharp.InputArray | null,
    hist: OpenCvSharp.OutputArray,
    dims: number | StrongNumeric<Int32Host>,
    histSize: HostArray<number | StrongNumeric<Int32Host>>,
    ranges: HostArray<HostArray<number | StrongNumeric<SingleHost>>>
  ): VoidResult;
  calcHist(
    images: HostArray<OpenCvSharp.Mat>,
    channels: HostArray<number | StrongNumeric<Int32Host>>,
    mask: OpenCvSharp.InputArray | null,
    hist: OpenCvSharp.OutputArray,
    dims: number | StrongNumeric<Int32Host>,
    histSize: HostArray<number | StrongNumeric<Int32Host>>,
    ranges: HostArray<HostArray<number | StrongNumeric<SingleHost>>>,
    uniform: boolean
  ): VoidResult;
  calcHist(
    images: HostArray<OpenCvSharp.Mat>,
    channels: HostArray<number | StrongNumeric<Int32Host>>,
    mask: OpenCvSharp.InputArray | null,
    hist: OpenCvSharp.OutputArray,
    dims: number | StrongNumeric<Int32Host>,
    histSize: HostArray<number | StrongNumeric<Int32Host>>,
    ranges: HostArray<HostArray<number | StrongNumeric<SingleHost>>>,
    uniform: boolean,
    accumulate: boolean
  ): VoidResult;
  calcBackProject(
    images: HostArray<OpenCvSharp.Mat>,
    channels: HostArray<number | StrongNumeric<Int32Host>>,
    hist: OpenCvSharp.InputArray,
    backProject: OpenCvSharp.OutputArray,
    ranges: HostArray<OpenCvSharp.Rangef>
  ): VoidResult;
  calcBackProject(
    images: HostArray<OpenCvSharp.Mat>,
    channels: HostArray<number | StrongNumeric<Int32Host>>,
    hist: OpenCvSharp.InputArray,
    backProject: OpenCvSharp.OutputArray,
    ranges: HostArray<OpenCvSharp.Rangef>,
    uniform: boolean
  ): VoidResult;
  compareHist(
    h1: OpenCvSharp.InputArray,
    h2: OpenCvSharp.InputArray,
    method: EnumInput<OpenCvSharp.HistCompMethods>
  ): number;
  equalizeHist(src: OpenCvSharp.InputArray, dst: OpenCvSharp.OutputArray): VoidResult;
  createCLAHE(): OpenCvSharp.CLAHE;
  createCLAHE(clipLimit: number | StrongNumeric<DoubleHost>): OpenCvSharp.CLAHE;
  createCLAHE(
    clipLimit: number | StrongNumeric<DoubleHost>,
    tileGridSize: OpenCvSharp.Size | null | null
  ): OpenCvSharp.CLAHE;
  emd(
    signature1: OpenCvSharp.InputArray,
    signature2: OpenCvSharp.InputArray,
    distType: EnumInput<OpenCvSharp.DistanceTypes>
  ): number;
  emd(
    signature1: OpenCvSharp.InputArray,
    signature2: OpenCvSharp.InputArray,
    distType: EnumInput<OpenCvSharp.DistanceTypes>,
    cost: OpenCvSharp.InputArray | null
  ): number;
  emd(
    signature1: OpenCvSharp.InputArray,
    signature2: OpenCvSharp.InputArray,
    distType: EnumInput<OpenCvSharp.DistanceTypes>,
    cost: OpenCvSharp.InputArray | null,
    lowerBound: HostVariableOut<number>
  ): number;
  emd(
    signature1: OpenCvSharp.InputArray,
    signature2: OpenCvSharp.InputArray,
    distType: EnumInput<OpenCvSharp.DistanceTypes>,
    cost: OpenCvSharp.InputArray | null,
    lowerBound: HostVariableOut<number>,
    flow: OpenCvSharp.OutputArray | null
  ): number;
  watershed(image: OpenCvSharp.InputArray, markers: OpenCvSharp.InputOutputArray): VoidResult;
  pyrMeanShiftFiltering(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    sp: number | StrongNumeric<DoubleHost>,
    sr: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  pyrMeanShiftFiltering(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    sp: number | StrongNumeric<DoubleHost>,
    sr: number | StrongNumeric<DoubleHost>,
    maxLevel: number | StrongNumeric<Int32Host>
  ): VoidResult;
  pyrMeanShiftFiltering(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    sp: number | StrongNumeric<DoubleHost>,
    sr: number | StrongNumeric<DoubleHost>,
    maxLevel: number | StrongNumeric<Int32Host>,
    termcrit: OpenCvSharp.TermCriteria | null | null
  ): VoidResult;
  grabCut(
    img: OpenCvSharp.InputArray,
    mask: OpenCvSharp.InputOutputArray,
    rect: OpenCvSharp.Rect,
    bgdModel: OpenCvSharp.InputOutputArray,
    fgdModel: OpenCvSharp.InputOutputArray,
    iterCount: number | StrongNumeric<Int32Host>,
    mode: EnumInput<OpenCvSharp.GrabCutModes>
  ): VoidResult;
  distanceTransformWithLabels(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    labels: OpenCvSharp.OutputArray,
    distanceType: EnumInput<OpenCvSharp.DistanceTypes>,
    maskSize: EnumInput<OpenCvSharp.DistanceTransformMasks>
  ): VoidResult;
  distanceTransformWithLabels(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    labels: OpenCvSharp.OutputArray,
    distanceType: EnumInput<OpenCvSharp.DistanceTypes>,
    maskSize: EnumInput<OpenCvSharp.DistanceTransformMasks>,
    labelType: EnumInput<OpenCvSharp.DistanceTransformLabelTypes>
  ): VoidResult;
  distanceTransform(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    distanceType: EnumInput<OpenCvSharp.DistanceTypes>,
    maskSize: EnumInput<OpenCvSharp.DistanceTransformMasks>
  ): VoidResult;
  distanceTransform(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    distanceType: EnumInput<OpenCvSharp.DistanceTypes>,
    maskSize: EnumInput<OpenCvSharp.DistanceTransformMasks>,
    dstType: number | StrongNumeric<Int32Host>
  ): VoidResult;
  floodFill(
    image: OpenCvSharp.InputOutputArray,
    seedPoint: OpenCvSharp.Point,
    newVal: OpenCvSharp.Scalar
  ): number;
  floodFill(
    image: OpenCvSharp.InputOutputArray,
    seedPoint: OpenCvSharp.Point,
    newVal: OpenCvSharp.Scalar,
    rect: HostVariableOut<OpenCvSharp.Rect>
  ): number;
  floodFill(
    image: OpenCvSharp.InputOutputArray,
    seedPoint: OpenCvSharp.Point,
    newVal: OpenCvSharp.Scalar,
    rect: HostVariableOut<OpenCvSharp.Rect>,
    loDiff: OpenCvSharp.Scalar | null | null
  ): number;
  floodFill(
    image: OpenCvSharp.InputOutputArray,
    seedPoint: OpenCvSharp.Point,
    newVal: OpenCvSharp.Scalar,
    rect: HostVariableOut<OpenCvSharp.Rect>,
    loDiff: OpenCvSharp.Scalar | null | null,
    upDiff: OpenCvSharp.Scalar | null | null
  ): number;
  floodFill(
    image: OpenCvSharp.InputOutputArray,
    seedPoint: OpenCvSharp.Point,
    newVal: OpenCvSharp.Scalar,
    rect: HostVariableOut<OpenCvSharp.Rect>,
    loDiff: OpenCvSharp.Scalar | null | null,
    upDiff: OpenCvSharp.Scalar | null | null,
    flags: EnumInput<OpenCvSharp.FloodFillFlags>
  ): number;
  floodFill(
    image: OpenCvSharp.InputOutputArray,
    mask: OpenCvSharp.InputOutputArray,
    seedPoint: OpenCvSharp.Point,
    newVal: OpenCvSharp.Scalar
  ): number;
  floodFill(
    image: OpenCvSharp.InputOutputArray,
    mask: OpenCvSharp.InputOutputArray,
    seedPoint: OpenCvSharp.Point,
    newVal: OpenCvSharp.Scalar,
    rect: HostVariableOut<OpenCvSharp.Rect>
  ): number;
  floodFill(
    image: OpenCvSharp.InputOutputArray,
    mask: OpenCvSharp.InputOutputArray,
    seedPoint: OpenCvSharp.Point,
    newVal: OpenCvSharp.Scalar,
    rect: HostVariableOut<OpenCvSharp.Rect>,
    loDiff: OpenCvSharp.Scalar | null | null
  ): number;
  floodFill(
    image: OpenCvSharp.InputOutputArray,
    mask: OpenCvSharp.InputOutputArray,
    seedPoint: OpenCvSharp.Point,
    newVal: OpenCvSharp.Scalar,
    rect: HostVariableOut<OpenCvSharp.Rect>,
    loDiff: OpenCvSharp.Scalar | null | null,
    upDiff: OpenCvSharp.Scalar | null | null
  ): number;
  floodFill(
    image: OpenCvSharp.InputOutputArray,
    mask: OpenCvSharp.InputOutputArray,
    seedPoint: OpenCvSharp.Point,
    newVal: OpenCvSharp.Scalar,
    rect: HostVariableOut<OpenCvSharp.Rect>,
    loDiff: OpenCvSharp.Scalar | null | null,
    upDiff: OpenCvSharp.Scalar | null | null,
    flags: EnumInput<OpenCvSharp.FloodFillFlags>
  ): number;
  blendLinear(
    src1: OpenCvSharp.InputArray,
    src2: OpenCvSharp.InputArray,
    weights1: OpenCvSharp.InputArray,
    weights2: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray
  ): VoidResult;
  cvtColor(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    code: EnumInput<OpenCvSharp.ColorConversionCodes>
  ): VoidResult;
  cvtColor(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    code: EnumInput<OpenCvSharp.ColorConversionCodes>,
    dstCn: number | StrongNumeric<Int32Host>
  ): VoidResult;
  cvtColorTwoPlane(
    src1: OpenCvSharp.InputArray,
    src2: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    code: EnumInput<OpenCvSharp.ColorConversionCodes>
  ): VoidResult;
  demosaicing(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    code: EnumInput<OpenCvSharp.ColorConversionCodes>
  ): VoidResult;
  demosaicing(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    code: EnumInput<OpenCvSharp.ColorConversionCodes>,
    dstCn: number | StrongNumeric<Int32Host>
  ): VoidResult;
  moments(array: OpenCvSharp.InputArray): OpenCvSharp.Moments;
  moments(array: OpenCvSharp.InputArray, binaryImage: boolean): OpenCvSharp.Moments;
  moments(array: HostArray<number | StrongNumeric<ByteHost>>): OpenCvSharp.Moments;
  moments(
    array: HostArray<number | StrongNumeric<ByteHost>>,
    binaryImage: boolean
  ): OpenCvSharp.Moments;
  moments(array: HostArray<number | StrongNumeric<SingleHost>>): OpenCvSharp.Moments;
  moments(
    array: HostArray<number | StrongNumeric<SingleHost>>,
    binaryImage: boolean
  ): OpenCvSharp.Moments;
  moments(array: System.Collections.Generic.IEnumerable<OpenCvSharp.Point>): OpenCvSharp.Moments;
  moments(
    array: System.Collections.Generic.IEnumerable<OpenCvSharp.Point>,
    binaryImage: boolean
  ): OpenCvSharp.Moments;
  moments(array: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>): OpenCvSharp.Moments;
  moments(
    array: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>,
    binaryImage: boolean
  ): OpenCvSharp.Moments;
  matchTemplate(
    image: OpenCvSharp.InputArray,
    templ: OpenCvSharp.InputArray,
    result: OpenCvSharp.OutputArray,
    method: EnumInput<OpenCvSharp.TemplateMatchModes>
  ): VoidResult;
  matchTemplate(
    image: OpenCvSharp.InputArray,
    templ: OpenCvSharp.InputArray,
    result: OpenCvSharp.OutputArray,
    method: EnumInput<OpenCvSharp.TemplateMatchModes>,
    mask: OpenCvSharp.InputArray | null
  ): VoidResult;
  connectedComponentsWithAlgorithm(
    image: OpenCvSharp.InputArray,
    labels: OpenCvSharp.OutputArray,
    connectivity: EnumInput<OpenCvSharp.PixelConnectivity>,
    ltype: OpenCvSharp.MatType,
    ccltype: EnumInput<OpenCvSharp.ConnectedComponentsAlgorithmsTypes>
  ): number;
  connectedComponents(image: OpenCvSharp.InputArray, labels: OpenCvSharp.OutputArray): number;
  connectedComponents(
    image: OpenCvSharp.InputArray,
    labels: OpenCvSharp.OutputArray,
    connectivity: EnumInput<OpenCvSharp.PixelConnectivity>
  ): number;
  connectedComponents(
    image: OpenCvSharp.InputArray,
    labels: OpenCvSharp.OutputArray,
    connectivity: EnumInput<OpenCvSharp.PixelConnectivity>,
    ltype: OpenCvSharp.MatType
  ): number;
  connectedComponents(
    image: OpenCvSharp.InputArray,
    labels: HostVariableOut<HostArray<number>>,
    connectivity: EnumInput<OpenCvSharp.PixelConnectivity>
  ): number;
  connectedComponentsWithStatsWithAlgorithm(
    image: OpenCvSharp.InputArray,
    labels: OpenCvSharp.OutputArray,
    stats: OpenCvSharp.OutputArray,
    centroids: OpenCvSharp.OutputArray,
    connectivity: EnumInput<OpenCvSharp.PixelConnectivity>,
    ltype: OpenCvSharp.MatType,
    ccltype: EnumInput<OpenCvSharp.ConnectedComponentsAlgorithmsTypes>
  ): number;
  connectedComponentsWithStats(
    image: OpenCvSharp.InputArray,
    labels: OpenCvSharp.OutputArray,
    stats: OpenCvSharp.OutputArray,
    centroids: OpenCvSharp.OutputArray
  ): number;
  connectedComponentsWithStats(
    image: OpenCvSharp.InputArray,
    labels: OpenCvSharp.OutputArray,
    stats: OpenCvSharp.OutputArray,
    centroids: OpenCvSharp.OutputArray,
    connectivity: EnumInput<OpenCvSharp.PixelConnectivity>
  ): number;
  connectedComponentsWithStats(
    image: OpenCvSharp.InputArray,
    labels: OpenCvSharp.OutputArray,
    stats: OpenCvSharp.OutputArray,
    centroids: OpenCvSharp.OutputArray,
    connectivity: EnumInput<OpenCvSharp.PixelConnectivity>,
    ltype: OpenCvSharp.MatType
  ): number;
  connectedComponentsEx(image: OpenCvSharp.InputArray): OpenCvSharp.ConnectedComponents;
  connectedComponentsEx(
    image: OpenCvSharp.InputArray,
    connectivity: EnumInput<OpenCvSharp.PixelConnectivity>
  ): OpenCvSharp.ConnectedComponents;
  connectedComponentsEx(
    image: OpenCvSharp.InputArray,
    connectivity: EnumInput<OpenCvSharp.PixelConnectivity>,
    ccltype: EnumInput<OpenCvSharp.ConnectedComponentsAlgorithmsTypes>
  ): OpenCvSharp.ConnectedComponents;
  findContours(
    image: OpenCvSharp.InputArray,
    contours: HostVariableOut<HostArray<HostArray<OpenCvSharp.Point>>>,
    hierarchy: HostVariableOut<HostArray<OpenCvSharp.HierarchyIndex>>,
    mode: EnumInput<OpenCvSharp.RetrievalModes>,
    method: EnumInput<OpenCvSharp.ContourApproximationModes>
  ): VoidResult;
  findContours(
    image: OpenCvSharp.InputArray,
    contours: HostVariableOut<HostArray<HostArray<OpenCvSharp.Point>>>,
    hierarchy: HostVariableOut<HostArray<OpenCvSharp.HierarchyIndex>>,
    mode: EnumInput<OpenCvSharp.RetrievalModes>,
    method: EnumInput<OpenCvSharp.ContourApproximationModes>,
    offset: OpenCvSharp.Point | null | null
  ): VoidResult;
  findContours(
    image: OpenCvSharp.InputArray,
    contours: HostVariableOut<HostArray<OpenCvSharp.Mat>>,
    hierarchy: OpenCvSharp.OutputArray,
    mode: EnumInput<OpenCvSharp.RetrievalModes>,
    method: EnumInput<OpenCvSharp.ContourApproximationModes>
  ): VoidResult;
  findContours(
    image: OpenCvSharp.InputArray,
    contours: HostVariableOut<HostArray<OpenCvSharp.Mat>>,
    hierarchy: OpenCvSharp.OutputArray,
    mode: EnumInput<OpenCvSharp.RetrievalModes>,
    method: EnumInput<OpenCvSharp.ContourApproximationModes>,
    offset: OpenCvSharp.Point | null | null
  ): VoidResult;
  findContoursAsArray(
    image: OpenCvSharp.InputArray,
    mode: EnumInput<OpenCvSharp.RetrievalModes>,
    method: EnumInput<OpenCvSharp.ContourApproximationModes>
  ): HostArray<HostArray<OpenCvSharp.Point>>;
  findContoursAsArray(
    image: OpenCvSharp.InputArray,
    mode: EnumInput<OpenCvSharp.RetrievalModes>,
    method: EnumInput<OpenCvSharp.ContourApproximationModes>,
    offset: OpenCvSharp.Point | null | null
  ): HostArray<HostArray<OpenCvSharp.Point>>;
  findContoursAsMat(
    image: OpenCvSharp.InputArray,
    mode: EnumInput<OpenCvSharp.RetrievalModes>,
    method: EnumInput<OpenCvSharp.ContourApproximationModes>
  ): HostArray<OpenCvSharp.Mat<OpenCvSharp.Point>>;
  findContoursAsMat(
    image: OpenCvSharp.InputArray,
    mode: EnumInput<OpenCvSharp.RetrievalModes>,
    method: EnumInput<OpenCvSharp.ContourApproximationModes>,
    offset: OpenCvSharp.Point | null | null
  ): HostArray<OpenCvSharp.Mat<OpenCvSharp.Point>>;
  approxPolyDP(
    curve: OpenCvSharp.InputArray,
    approxCurve: OpenCvSharp.OutputArray,
    epsilon: number | StrongNumeric<DoubleHost>,
    closed: boolean
  ): VoidResult;
  approxPolyDP(
    curve: System.Collections.Generic.IEnumerable<OpenCvSharp.Point>,
    epsilon: number | StrongNumeric<DoubleHost>,
    closed: boolean
  ): HostArray<OpenCvSharp.Point>;
  approxPolyDP(
    curve: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>,
    epsilon: number | StrongNumeric<DoubleHost>,
    closed: boolean
  ): HostArray<OpenCvSharp.Point2f>;
  arcLength(curve: OpenCvSharp.InputArray, closed: boolean): number;
  arcLength(
    curve: System.Collections.Generic.IEnumerable<OpenCvSharp.Point>,
    closed: boolean
  ): number;
  arcLength(
    curve: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>,
    closed: boolean
  ): number;
  boundingRect(curve: OpenCvSharp.InputArray): OpenCvSharp.Rect;
  boundingRect(curve: System.Collections.Generic.IEnumerable<OpenCvSharp.Point>): OpenCvSharp.Rect;
  boundingRect(
    curve: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>
  ): OpenCvSharp.Rect;
  contourArea(contour: OpenCvSharp.InputArray): number;
  contourArea(contour: OpenCvSharp.InputArray, oriented: boolean): number;
  contourArea(contour: System.Collections.Generic.IEnumerable<OpenCvSharp.Point>): number;
  contourArea(
    contour: System.Collections.Generic.IEnumerable<OpenCvSharp.Point>,
    oriented: boolean
  ): number;
  contourArea(contour: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>): number;
  contourArea(
    contour: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>,
    oriented: boolean
  ): number;
  minAreaRect(points: OpenCvSharp.InputArray): OpenCvSharp.RotatedRect;
  minAreaRect(
    points: System.Collections.Generic.IEnumerable<OpenCvSharp.Point>
  ): OpenCvSharp.RotatedRect;
  minAreaRect(
    points: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>
  ): OpenCvSharp.RotatedRect;
  boxPoints(box: OpenCvSharp.RotatedRect, points: OpenCvSharp.OutputArray): VoidResult;
  boxPoints(box: OpenCvSharp.RotatedRect): HostArray<OpenCvSharp.Point2f>;
  minEnclosingCircle(
    points: OpenCvSharp.InputArray,
    center: HostVariableOut<OpenCvSharp.Point2f>,
    radius: HostVariableOut<number>
  ): VoidResult;
  minEnclosingCircle(
    points: System.Collections.Generic.IEnumerable<OpenCvSharp.Point>,
    center: HostVariableOut<OpenCvSharp.Point2f>,
    radius: HostVariableOut<number>
  ): VoidResult;
  minEnclosingCircle(
    points: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>,
    center: HostVariableOut<OpenCvSharp.Point2f>,
    radius: HostVariableOut<number>
  ): VoidResult;
  minEnclosingTriangle(points: OpenCvSharp.InputArray, triangle: OpenCvSharp.OutputArray): number;
  minEnclosingTriangle(
    points: System.Collections.Generic.IEnumerable<OpenCvSharp.Point>,
    triangle: HostVariableOut<HostArray<OpenCvSharp.Point2f>>
  ): number;
  minEnclosingTriangle(
    points: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>,
    triangle: HostVariableOut<HostArray<OpenCvSharp.Point2f>>
  ): number;
  matchShapes(
    contour1: OpenCvSharp.InputArray,
    contour2: OpenCvSharp.InputArray,
    method: EnumInput<OpenCvSharp.ShapeMatchModes>
  ): number;
  matchShapes(
    contour1: OpenCvSharp.InputArray,
    contour2: OpenCvSharp.InputArray,
    method: EnumInput<OpenCvSharp.ShapeMatchModes>,
    parameter: number | StrongNumeric<DoubleHost>
  ): number;
  matchShapes(
    contour1: System.Collections.Generic.IEnumerable<OpenCvSharp.Point>,
    contour2: System.Collections.Generic.IEnumerable<OpenCvSharp.Point>,
    method: EnumInput<OpenCvSharp.ShapeMatchModes>
  ): number;
  matchShapes(
    contour1: System.Collections.Generic.IEnumerable<OpenCvSharp.Point>,
    contour2: System.Collections.Generic.IEnumerable<OpenCvSharp.Point>,
    method: EnumInput<OpenCvSharp.ShapeMatchModes>,
    parameter: number | StrongNumeric<DoubleHost>
  ): number;
  convexHull(points: OpenCvSharp.InputArray, hull: OpenCvSharp.OutputArray): VoidResult;
  convexHull(
    points: OpenCvSharp.InputArray,
    hull: OpenCvSharp.OutputArray,
    clockwise: boolean
  ): VoidResult;
  convexHull(
    points: OpenCvSharp.InputArray,
    hull: OpenCvSharp.OutputArray,
    clockwise: boolean,
    returnPoints: boolean
  ): VoidResult;
  convexHull(
    points: System.Collections.Generic.IEnumerable<OpenCvSharp.Point>
  ): HostArray<OpenCvSharp.Point>;
  convexHull(
    points: System.Collections.Generic.IEnumerable<OpenCvSharp.Point>,
    clockwise: boolean
  ): HostArray<OpenCvSharp.Point>;
  convexHull(
    points: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>
  ): HostArray<OpenCvSharp.Point2f>;
  convexHull(
    points: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>,
    clockwise: boolean
  ): HostArray<OpenCvSharp.Point2f>;
  convexHullIndices(
    points: System.Collections.Generic.IEnumerable<OpenCvSharp.Point>
  ): HostArray<number>;
  convexHullIndices(
    points: System.Collections.Generic.IEnumerable<OpenCvSharp.Point>,
    clockwise: boolean
  ): HostArray<number>;
  convexHullIndices(
    points: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>
  ): HostArray<number>;
  convexHullIndices(
    points: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>,
    clockwise: boolean
  ): HostArray<number>;
  convexityDefects(
    contour: OpenCvSharp.InputArray,
    convexHull: OpenCvSharp.InputArray,
    convexityDefects: OpenCvSharp.OutputArray
  ): VoidResult;
  convexityDefects(
    contour: System.Collections.Generic.IEnumerable<OpenCvSharp.Point>,
    convexHull: System.Collections.Generic.IEnumerable<number>
  ): HostArray<OpenCvSharp.Vec4i>;
  convexityDefects(
    contour: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>,
    convexHull: System.Collections.Generic.IEnumerable<number>
  ): HostArray<OpenCvSharp.Vec4i>;
  isContourConvex(contour: OpenCvSharp.InputArray): boolean;
  isContourConvex(contour: System.Collections.Generic.IEnumerable<OpenCvSharp.Point>): boolean;
  isContourConvex(contour: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>): boolean;
  intersectConvexConvex(
    p1: OpenCvSharp.InputArray,
    p2: OpenCvSharp.InputArray,
    p12: OpenCvSharp.OutputArray
  ): number;
  intersectConvexConvex(
    p1: OpenCvSharp.InputArray,
    p2: OpenCvSharp.InputArray,
    p12: OpenCvSharp.OutputArray,
    handleNested: boolean
  ): number;
  intersectConvexConvex(
    p1: System.Collections.Generic.IEnumerable<OpenCvSharp.Point>,
    p2: System.Collections.Generic.IEnumerable<OpenCvSharp.Point>,
    p12: HostVariableOut<HostArray<OpenCvSharp.Point>>
  ): number;
  intersectConvexConvex(
    p1: System.Collections.Generic.IEnumerable<OpenCvSharp.Point>,
    p2: System.Collections.Generic.IEnumerable<OpenCvSharp.Point>,
    p12: HostVariableOut<HostArray<OpenCvSharp.Point>>,
    handleNested: boolean
  ): number;
  intersectConvexConvex(
    p1: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>,
    p2: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>,
    p12: HostVariableOut<HostArray<OpenCvSharp.Point2f>>
  ): number;
  intersectConvexConvex(
    p1: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>,
    p2: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>,
    p12: HostVariableOut<HostArray<OpenCvSharp.Point2f>>,
    handleNested: boolean
  ): number;
  fitEllipse(points: OpenCvSharp.InputArray): OpenCvSharp.RotatedRect;
  fitEllipse(
    points: System.Collections.Generic.IEnumerable<OpenCvSharp.Point>
  ): OpenCvSharp.RotatedRect;
  fitEllipse(
    points: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>
  ): OpenCvSharp.RotatedRect;
  fitEllipseAMS(points: OpenCvSharp.InputArray): OpenCvSharp.RotatedRect;
  fitEllipseAMS(
    points: System.Collections.Generic.IEnumerable<OpenCvSharp.Point>
  ): OpenCvSharp.RotatedRect;
  fitEllipseAMS(
    points: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>
  ): OpenCvSharp.RotatedRect;
  fitEllipseDirect(points: OpenCvSharp.InputArray): OpenCvSharp.RotatedRect;
  fitEllipseDirect(
    points: System.Collections.Generic.IEnumerable<OpenCvSharp.Point>
  ): OpenCvSharp.RotatedRect;
  fitEllipseDirect(
    points: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>
  ): OpenCvSharp.RotatedRect;
  fitLine(
    points: OpenCvSharp.InputArray,
    line: OpenCvSharp.OutputArray,
    distType: EnumInput<OpenCvSharp.DistanceTypes>,
    param: number | StrongNumeric<DoubleHost>,
    reps: number | StrongNumeric<DoubleHost>,
    aeps: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  fitLine(
    points: System.Collections.Generic.IEnumerable<OpenCvSharp.Point>,
    distType: EnumInput<OpenCvSharp.DistanceTypes>,
    param: number | StrongNumeric<DoubleHost>,
    reps: number | StrongNumeric<DoubleHost>,
    aeps: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Line2D;
  fitLine(
    points: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>,
    distType: EnumInput<OpenCvSharp.DistanceTypes>,
    param: number | StrongNumeric<DoubleHost>,
    reps: number | StrongNumeric<DoubleHost>,
    aeps: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Line2D;
  fitLine(
    points: System.Collections.Generic.IEnumerable<OpenCvSharp.Point3i>,
    distType: EnumInput<OpenCvSharp.DistanceTypes>,
    param: number | StrongNumeric<DoubleHost>,
    reps: number | StrongNumeric<DoubleHost>,
    aeps: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Line3D;
  fitLine(
    points: System.Collections.Generic.IEnumerable<OpenCvSharp.Point3f>,
    distType: EnumInput<OpenCvSharp.DistanceTypes>,
    param: number | StrongNumeric<DoubleHost>,
    reps: number | StrongNumeric<DoubleHost>,
    aeps: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Line3D;
  pointPolygonTest(
    contour: OpenCvSharp.InputArray,
    pt: OpenCvSharp.Point2f,
    measureDist: boolean
  ): number;
  pointPolygonTest(
    contour: System.Collections.Generic.IEnumerable<OpenCvSharp.Point>,
    pt: OpenCvSharp.Point2f,
    measureDist: boolean
  ): number;
  pointPolygonTest(
    contour: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>,
    pt: OpenCvSharp.Point2f,
    measureDist: boolean
  ): number;
  rotatedRectangleIntersection(
    rect1: OpenCvSharp.RotatedRect,
    rect2: OpenCvSharp.RotatedRect,
    intersectingRegion: OpenCvSharp.OutputArray
  ): OpenCvSharp.RectanglesIntersectTypes;
  rotatedRectangleIntersection(
    rect1: OpenCvSharp.RotatedRect,
    rect2: OpenCvSharp.RotatedRect,
    intersectingRegion: HostVariableOut<HostArray<OpenCvSharp.Point2f>>
  ): OpenCvSharp.RectanglesIntersectTypes;
  applyColorMap(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    colormap: EnumInput<OpenCvSharp.ColormapTypes>
  ): VoidResult;
  applyColorMap(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    userColor: OpenCvSharp.InputArray
  ): VoidResult;
  line(
    img: OpenCvSharp.InputOutputArray,
    pt1X: number | StrongNumeric<Int32Host>,
    pt1Y: number | StrongNumeric<Int32Host>,
    pt2X: number | StrongNumeric<Int32Host>,
    pt2Y: number | StrongNumeric<Int32Host>,
    color: OpenCvSharp.Scalar
  ): VoidResult;
  line(
    img: OpenCvSharp.InputOutputArray,
    pt1X: number | StrongNumeric<Int32Host>,
    pt1Y: number | StrongNumeric<Int32Host>,
    pt2X: number | StrongNumeric<Int32Host>,
    pt2Y: number | StrongNumeric<Int32Host>,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>
  ): VoidResult;
  line(
    img: OpenCvSharp.InputOutputArray,
    pt1X: number | StrongNumeric<Int32Host>,
    pt1Y: number | StrongNumeric<Int32Host>,
    pt2X: number | StrongNumeric<Int32Host>,
    pt2Y: number | StrongNumeric<Int32Host>,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>
  ): VoidResult;
  line(
    img: OpenCvSharp.InputOutputArray,
    pt1X: number | StrongNumeric<Int32Host>,
    pt1Y: number | StrongNumeric<Int32Host>,
    pt2X: number | StrongNumeric<Int32Host>,
    pt2Y: number | StrongNumeric<Int32Host>,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>,
    shift: number | StrongNumeric<Int32Host>
  ): VoidResult;
  line(
    img: OpenCvSharp.InputOutputArray,
    pt1: OpenCvSharp.Point,
    pt2: OpenCvSharp.Point,
    color: OpenCvSharp.Scalar
  ): VoidResult;
  line(
    img: OpenCvSharp.InputOutputArray,
    pt1: OpenCvSharp.Point,
    pt2: OpenCvSharp.Point,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>
  ): VoidResult;
  line(
    img: OpenCvSharp.InputOutputArray,
    pt1: OpenCvSharp.Point,
    pt2: OpenCvSharp.Point,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>
  ): VoidResult;
  line(
    img: OpenCvSharp.InputOutputArray,
    pt1: OpenCvSharp.Point,
    pt2: OpenCvSharp.Point,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>,
    shift: number | StrongNumeric<Int32Host>
  ): VoidResult;
  arrowedLine(
    img: OpenCvSharp.InputOutputArray,
    pt1: OpenCvSharp.Point,
    pt2: OpenCvSharp.Point,
    color: OpenCvSharp.Scalar
  ): VoidResult;
  arrowedLine(
    img: OpenCvSharp.InputOutputArray,
    pt1: OpenCvSharp.Point,
    pt2: OpenCvSharp.Point,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>
  ): VoidResult;
  arrowedLine(
    img: OpenCvSharp.InputOutputArray,
    pt1: OpenCvSharp.Point,
    pt2: OpenCvSharp.Point,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>
  ): VoidResult;
  arrowedLine(
    img: OpenCvSharp.InputOutputArray,
    pt1: OpenCvSharp.Point,
    pt2: OpenCvSharp.Point,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>,
    shift: number | StrongNumeric<Int32Host>
  ): VoidResult;
  arrowedLine(
    img: OpenCvSharp.InputOutputArray,
    pt1: OpenCvSharp.Point,
    pt2: OpenCvSharp.Point,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>,
    shift: number | StrongNumeric<Int32Host>,
    tipLength: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  rectangle(
    img: OpenCvSharp.InputOutputArray,
    pt1: OpenCvSharp.Point,
    pt2: OpenCvSharp.Point,
    color: OpenCvSharp.Scalar
  ): VoidResult;
  rectangle(
    img: OpenCvSharp.InputOutputArray,
    pt1: OpenCvSharp.Point,
    pt2: OpenCvSharp.Point,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>
  ): VoidResult;
  rectangle(
    img: OpenCvSharp.InputOutputArray,
    pt1: OpenCvSharp.Point,
    pt2: OpenCvSharp.Point,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>
  ): VoidResult;
  rectangle(
    img: OpenCvSharp.InputOutputArray,
    pt1: OpenCvSharp.Point,
    pt2: OpenCvSharp.Point,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>,
    shift: number | StrongNumeric<Int32Host>
  ): VoidResult;
  rectangle(
    img: OpenCvSharp.InputOutputArray,
    rect: OpenCvSharp.Rect,
    color: OpenCvSharp.Scalar
  ): VoidResult;
  rectangle(
    img: OpenCvSharp.InputOutputArray,
    rect: OpenCvSharp.Rect,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>
  ): VoidResult;
  rectangle(
    img: OpenCvSharp.InputOutputArray,
    rect: OpenCvSharp.Rect,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>
  ): VoidResult;
  rectangle(
    img: OpenCvSharp.InputOutputArray,
    rect: OpenCvSharp.Rect,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>,
    shift: number | StrongNumeric<Int32Host>
  ): VoidResult;
  rectangle(img: OpenCvSharp.Mat, rect: OpenCvSharp.Rect, color: OpenCvSharp.Scalar): VoidResult;
  rectangle(
    img: OpenCvSharp.Mat,
    rect: OpenCvSharp.Rect,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>
  ): VoidResult;
  rectangle(
    img: OpenCvSharp.Mat,
    rect: OpenCvSharp.Rect,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>
  ): VoidResult;
  rectangle(
    img: OpenCvSharp.Mat,
    rect: OpenCvSharp.Rect,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>,
    shift: number | StrongNumeric<Int32Host>
  ): VoidResult;
  rectangle(
    img: OpenCvSharp.Mat,
    pt1: OpenCvSharp.Point,
    pt2: OpenCvSharp.Point,
    color: OpenCvSharp.Scalar
  ): VoidResult;
  rectangle(
    img: OpenCvSharp.Mat,
    pt1: OpenCvSharp.Point,
    pt2: OpenCvSharp.Point,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>
  ): VoidResult;
  rectangle(
    img: OpenCvSharp.Mat,
    pt1: OpenCvSharp.Point,
    pt2: OpenCvSharp.Point,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>
  ): VoidResult;
  rectangle(
    img: OpenCvSharp.Mat,
    pt1: OpenCvSharp.Point,
    pt2: OpenCvSharp.Point,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>,
    shift: number | StrongNumeric<Int32Host>
  ): VoidResult;
  circle(
    img: OpenCvSharp.InputOutputArray,
    centerX: number | StrongNumeric<Int32Host>,
    centerY: number | StrongNumeric<Int32Host>,
    radius: number | StrongNumeric<Int32Host>,
    color: OpenCvSharp.Scalar
  ): VoidResult;
  circle(
    img: OpenCvSharp.InputOutputArray,
    centerX: number | StrongNumeric<Int32Host>,
    centerY: number | StrongNumeric<Int32Host>,
    radius: number | StrongNumeric<Int32Host>,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>
  ): VoidResult;
  circle(
    img: OpenCvSharp.InputOutputArray,
    centerX: number | StrongNumeric<Int32Host>,
    centerY: number | StrongNumeric<Int32Host>,
    radius: number | StrongNumeric<Int32Host>,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>
  ): VoidResult;
  circle(
    img: OpenCvSharp.InputOutputArray,
    centerX: number | StrongNumeric<Int32Host>,
    centerY: number | StrongNumeric<Int32Host>,
    radius: number | StrongNumeric<Int32Host>,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>,
    shift: number | StrongNumeric<Int32Host>
  ): VoidResult;
  circle(
    img: OpenCvSharp.InputOutputArray,
    center: OpenCvSharp.Point,
    radius: number | StrongNumeric<Int32Host>,
    color: OpenCvSharp.Scalar
  ): VoidResult;
  circle(
    img: OpenCvSharp.InputOutputArray,
    center: OpenCvSharp.Point,
    radius: number | StrongNumeric<Int32Host>,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>
  ): VoidResult;
  circle(
    img: OpenCvSharp.InputOutputArray,
    center: OpenCvSharp.Point,
    radius: number | StrongNumeric<Int32Host>,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>
  ): VoidResult;
  circle(
    img: OpenCvSharp.InputOutputArray,
    center: OpenCvSharp.Point,
    radius: number | StrongNumeric<Int32Host>,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>,
    shift: number | StrongNumeric<Int32Host>
  ): VoidResult;
  ellipse(
    img: OpenCvSharp.InputOutputArray,
    center: OpenCvSharp.Point,
    axes: OpenCvSharp.Size,
    angle: number | StrongNumeric<DoubleHost>,
    startAngle: number | StrongNumeric<DoubleHost>,
    endAngle: number | StrongNumeric<DoubleHost>,
    color: OpenCvSharp.Scalar
  ): VoidResult;
  ellipse(
    img: OpenCvSharp.InputOutputArray,
    center: OpenCvSharp.Point,
    axes: OpenCvSharp.Size,
    angle: number | StrongNumeric<DoubleHost>,
    startAngle: number | StrongNumeric<DoubleHost>,
    endAngle: number | StrongNumeric<DoubleHost>,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>
  ): VoidResult;
  ellipse(
    img: OpenCvSharp.InputOutputArray,
    center: OpenCvSharp.Point,
    axes: OpenCvSharp.Size,
    angle: number | StrongNumeric<DoubleHost>,
    startAngle: number | StrongNumeric<DoubleHost>,
    endAngle: number | StrongNumeric<DoubleHost>,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>
  ): VoidResult;
  ellipse(
    img: OpenCvSharp.InputOutputArray,
    center: OpenCvSharp.Point,
    axes: OpenCvSharp.Size,
    angle: number | StrongNumeric<DoubleHost>,
    startAngle: number | StrongNumeric<DoubleHost>,
    endAngle: number | StrongNumeric<DoubleHost>,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>,
    shift: number | StrongNumeric<Int32Host>
  ): VoidResult;
  ellipse(
    img: OpenCvSharp.InputOutputArray,
    box: OpenCvSharp.RotatedRect,
    color: OpenCvSharp.Scalar
  ): VoidResult;
  ellipse(
    img: OpenCvSharp.InputOutputArray,
    box: OpenCvSharp.RotatedRect,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>
  ): VoidResult;
  ellipse(
    img: OpenCvSharp.InputOutputArray,
    box: OpenCvSharp.RotatedRect,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>
  ): VoidResult;
  drawMarker(
    img: OpenCvSharp.InputOutputArray,
    position: OpenCvSharp.Point,
    color: OpenCvSharp.Scalar
  ): VoidResult;
  drawMarker(
    img: OpenCvSharp.InputOutputArray,
    position: OpenCvSharp.Point,
    color: OpenCvSharp.Scalar,
    markerType: EnumInput<OpenCvSharp.MarkerTypes>
  ): VoidResult;
  drawMarker(
    img: OpenCvSharp.InputOutputArray,
    position: OpenCvSharp.Point,
    color: OpenCvSharp.Scalar,
    markerType: EnumInput<OpenCvSharp.MarkerTypes>,
    markerSize: number | StrongNumeric<Int32Host>
  ): VoidResult;
  drawMarker(
    img: OpenCvSharp.InputOutputArray,
    position: OpenCvSharp.Point,
    color: OpenCvSharp.Scalar,
    markerType: EnumInput<OpenCvSharp.MarkerTypes>,
    markerSize: number | StrongNumeric<Int32Host>,
    thickness: number | StrongNumeric<Int32Host>
  ): VoidResult;
  drawMarker(
    img: OpenCvSharp.InputOutputArray,
    position: OpenCvSharp.Point,
    color: OpenCvSharp.Scalar,
    markerType: EnumInput<OpenCvSharp.MarkerTypes>,
    markerSize: number | StrongNumeric<Int32Host>,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>
  ): VoidResult;
  fillConvexPoly(
    img: OpenCvSharp.Mat,
    pts: System.Collections.Generic.IEnumerable<OpenCvSharp.Point>,
    color: OpenCvSharp.Scalar
  ): VoidResult;
  fillConvexPoly(
    img: OpenCvSharp.Mat,
    pts: System.Collections.Generic.IEnumerable<OpenCvSharp.Point>,
    color: OpenCvSharp.Scalar,
    lineType: EnumInput<OpenCvSharp.LineTypes>
  ): VoidResult;
  fillConvexPoly(
    img: OpenCvSharp.Mat,
    pts: System.Collections.Generic.IEnumerable<OpenCvSharp.Point>,
    color: OpenCvSharp.Scalar,
    lineType: EnumInput<OpenCvSharp.LineTypes>,
    shift: number | StrongNumeric<Int32Host>
  ): VoidResult;
  fillConvexPoly(
    img: OpenCvSharp.InputOutputArray,
    pts: OpenCvSharp.InputArray,
    color: OpenCvSharp.Scalar
  ): VoidResult;
  fillConvexPoly(
    img: OpenCvSharp.InputOutputArray,
    pts: OpenCvSharp.InputArray,
    color: OpenCvSharp.Scalar,
    lineType: EnumInput<OpenCvSharp.LineTypes>
  ): VoidResult;
  fillConvexPoly(
    img: OpenCvSharp.InputOutputArray,
    pts: OpenCvSharp.InputArray,
    color: OpenCvSharp.Scalar,
    lineType: EnumInput<OpenCvSharp.LineTypes>,
    shift: number | StrongNumeric<Int32Host>
  ): VoidResult;
  fillPoly(
    img: OpenCvSharp.Mat,
    pts: System.Collections.Generic.IEnumerable<
      System.Collections.Generic.IEnumerable<OpenCvSharp.Point>
    >,
    color: OpenCvSharp.Scalar
  ): VoidResult;
  fillPoly(
    img: OpenCvSharp.Mat,
    pts: System.Collections.Generic.IEnumerable<
      System.Collections.Generic.IEnumerable<OpenCvSharp.Point>
    >,
    color: OpenCvSharp.Scalar,
    lineType: EnumInput<OpenCvSharp.LineTypes>
  ): VoidResult;
  fillPoly(
    img: OpenCvSharp.Mat,
    pts: System.Collections.Generic.IEnumerable<
      System.Collections.Generic.IEnumerable<OpenCvSharp.Point>
    >,
    color: OpenCvSharp.Scalar,
    lineType: EnumInput<OpenCvSharp.LineTypes>,
    shift: number | StrongNumeric<Int32Host>
  ): VoidResult;
  fillPoly(
    img: OpenCvSharp.Mat,
    pts: System.Collections.Generic.IEnumerable<
      System.Collections.Generic.IEnumerable<OpenCvSharp.Point>
    >,
    color: OpenCvSharp.Scalar,
    lineType: EnumInput<OpenCvSharp.LineTypes>,
    shift: number | StrongNumeric<Int32Host>,
    offset: OpenCvSharp.Point | null | null
  ): VoidResult;
  fillPoly(
    img: OpenCvSharp.InputOutputArray,
    pts: OpenCvSharp.InputArray,
    color: OpenCvSharp.Scalar
  ): VoidResult;
  fillPoly(
    img: OpenCvSharp.InputOutputArray,
    pts: OpenCvSharp.InputArray,
    color: OpenCvSharp.Scalar,
    lineType: EnumInput<OpenCvSharp.LineTypes>
  ): VoidResult;
  fillPoly(
    img: OpenCvSharp.InputOutputArray,
    pts: OpenCvSharp.InputArray,
    color: OpenCvSharp.Scalar,
    lineType: EnumInput<OpenCvSharp.LineTypes>,
    shift: number | StrongNumeric<Int32Host>
  ): VoidResult;
  fillPoly(
    img: OpenCvSharp.InputOutputArray,
    pts: OpenCvSharp.InputArray,
    color: OpenCvSharp.Scalar,
    lineType: EnumInput<OpenCvSharp.LineTypes>,
    shift: number | StrongNumeric<Int32Host>,
    offset: OpenCvSharp.Point | null | null
  ): VoidResult;
  polylines(
    img: OpenCvSharp.Mat,
    pts: System.Collections.Generic.IEnumerable<
      System.Collections.Generic.IEnumerable<OpenCvSharp.Point>
    >,
    isClosed: boolean,
    color: OpenCvSharp.Scalar
  ): VoidResult;
  polylines(
    img: OpenCvSharp.Mat,
    pts: System.Collections.Generic.IEnumerable<
      System.Collections.Generic.IEnumerable<OpenCvSharp.Point>
    >,
    isClosed: boolean,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>
  ): VoidResult;
  polylines(
    img: OpenCvSharp.Mat,
    pts: System.Collections.Generic.IEnumerable<
      System.Collections.Generic.IEnumerable<OpenCvSharp.Point>
    >,
    isClosed: boolean,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>
  ): VoidResult;
  polylines(
    img: OpenCvSharp.Mat,
    pts: System.Collections.Generic.IEnumerable<
      System.Collections.Generic.IEnumerable<OpenCvSharp.Point>
    >,
    isClosed: boolean,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>,
    shift: number | StrongNumeric<Int32Host>
  ): VoidResult;
  polylines(
    img: OpenCvSharp.InputOutputArray,
    pts: OpenCvSharp.InputArray,
    isClosed: boolean,
    color: OpenCvSharp.Scalar
  ): VoidResult;
  polylines(
    img: OpenCvSharp.InputOutputArray,
    pts: OpenCvSharp.InputArray,
    isClosed: boolean,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>
  ): VoidResult;
  polylines(
    img: OpenCvSharp.InputOutputArray,
    pts: OpenCvSharp.InputArray,
    isClosed: boolean,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>
  ): VoidResult;
  polylines(
    img: OpenCvSharp.InputOutputArray,
    pts: OpenCvSharp.InputArray,
    isClosed: boolean,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>,
    shift: number | StrongNumeric<Int32Host>
  ): VoidResult;
  drawContours(
    image: OpenCvSharp.InputOutputArray,
    contours: System.Collections.Generic.IEnumerable<
      System.Collections.Generic.IEnumerable<OpenCvSharp.Point>
    >,
    contourIdx: number | StrongNumeric<Int32Host>,
    color: OpenCvSharp.Scalar
  ): VoidResult;
  drawContours(
    image: OpenCvSharp.InputOutputArray,
    contours: System.Collections.Generic.IEnumerable<
      System.Collections.Generic.IEnumerable<OpenCvSharp.Point>
    >,
    contourIdx: number | StrongNumeric<Int32Host>,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>
  ): VoidResult;
  drawContours(
    image: OpenCvSharp.InputOutputArray,
    contours: System.Collections.Generic.IEnumerable<
      System.Collections.Generic.IEnumerable<OpenCvSharp.Point>
    >,
    contourIdx: number | StrongNumeric<Int32Host>,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>
  ): VoidResult;
  drawContours(
    image: OpenCvSharp.InputOutputArray,
    contours: System.Collections.Generic.IEnumerable<
      System.Collections.Generic.IEnumerable<OpenCvSharp.Point>
    >,
    contourIdx: number | StrongNumeric<Int32Host>,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>,
    hierarchy: System.Collections.Generic.IEnumerable<OpenCvSharp.HierarchyIndex> | null
  ): VoidResult;
  drawContours(
    image: OpenCvSharp.InputOutputArray,
    contours: System.Collections.Generic.IEnumerable<
      System.Collections.Generic.IEnumerable<OpenCvSharp.Point>
    >,
    contourIdx: number | StrongNumeric<Int32Host>,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>,
    hierarchy: System.Collections.Generic.IEnumerable<OpenCvSharp.HierarchyIndex> | null,
    maxLevel: number | StrongNumeric<Int32Host>
  ): VoidResult;
  drawContours(
    image: OpenCvSharp.InputOutputArray,
    contours: System.Collections.Generic.IEnumerable<
      System.Collections.Generic.IEnumerable<OpenCvSharp.Point>
    >,
    contourIdx: number | StrongNumeric<Int32Host>,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>,
    hierarchy: System.Collections.Generic.IEnumerable<OpenCvSharp.HierarchyIndex> | null,
    maxLevel: number | StrongNumeric<Int32Host>,
    offset: OpenCvSharp.Point | null | null
  ): VoidResult;
  drawContours(
    image: OpenCvSharp.InputOutputArray,
    contours: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    contourIdx: number | StrongNumeric<Int32Host>,
    color: OpenCvSharp.Scalar
  ): VoidResult;
  drawContours(
    image: OpenCvSharp.InputOutputArray,
    contours: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    contourIdx: number | StrongNumeric<Int32Host>,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>
  ): VoidResult;
  drawContours(
    image: OpenCvSharp.InputOutputArray,
    contours: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    contourIdx: number | StrongNumeric<Int32Host>,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>
  ): VoidResult;
  drawContours(
    image: OpenCvSharp.InputOutputArray,
    contours: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    contourIdx: number | StrongNumeric<Int32Host>,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>,
    hierarchy: OpenCvSharp.Mat | null
  ): VoidResult;
  drawContours(
    image: OpenCvSharp.InputOutputArray,
    contours: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    contourIdx: number | StrongNumeric<Int32Host>,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>,
    hierarchy: OpenCvSharp.Mat | null,
    maxLevel: number | StrongNumeric<Int32Host>
  ): VoidResult;
  drawContours(
    image: OpenCvSharp.InputOutputArray,
    contours: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    contourIdx: number | StrongNumeric<Int32Host>,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>,
    hierarchy: OpenCvSharp.Mat | null,
    maxLevel: number | StrongNumeric<Int32Host>,
    offset: OpenCvSharp.Point | null | null
  ): VoidResult;
  clipLine(
    imgSize: OpenCvSharp.Size,
    pt1: HostVariableRef<OpenCvSharp.Point>,
    pt2: HostVariableRef<OpenCvSharp.Point>
  ): boolean;
  clipLine(
    imgRect: OpenCvSharp.Rect,
    pt1: HostVariableRef<OpenCvSharp.Point>,
    pt2: HostVariableRef<OpenCvSharp.Point>
  ): boolean;
  ellipse2Poly(
    center: OpenCvSharp.Point,
    axes: OpenCvSharp.Size,
    angle: number | StrongNumeric<Int32Host>,
    arcStart: number | StrongNumeric<Int32Host>,
    arcEnd: number | StrongNumeric<Int32Host>,
    delta: number | StrongNumeric<Int32Host>
  ): HostArray<OpenCvSharp.Point>;
  ellipse2Poly(
    center: OpenCvSharp.Point2d,
    axes: OpenCvSharp.Size2d,
    angle: number | StrongNumeric<Int32Host>,
    arcStart: number | StrongNumeric<Int32Host>,
    arcEnd: number | StrongNumeric<Int32Host>,
    delta: number | StrongNumeric<Int32Host>
  ): HostArray<OpenCvSharp.Point2d>;
  putText(
    img: OpenCvSharp.InputOutputArray,
    text: string,
    org: OpenCvSharp.Point,
    fontFace: EnumInput<OpenCvSharp.HersheyFonts>,
    fontScale: number | StrongNumeric<DoubleHost>,
    color: OpenCvSharp.Scalar
  ): VoidResult;
  putText(
    img: OpenCvSharp.InputOutputArray,
    text: string,
    org: OpenCvSharp.Point,
    fontFace: EnumInput<OpenCvSharp.HersheyFonts>,
    fontScale: number | StrongNumeric<DoubleHost>,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>
  ): VoidResult;
  putText(
    img: OpenCvSharp.InputOutputArray,
    text: string,
    org: OpenCvSharp.Point,
    fontFace: EnumInput<OpenCvSharp.HersheyFonts>,
    fontScale: number | StrongNumeric<DoubleHost>,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>
  ): VoidResult;
  putText(
    img: OpenCvSharp.InputOutputArray,
    text: string,
    org: OpenCvSharp.Point,
    fontFace: EnumInput<OpenCvSharp.HersheyFonts>,
    fontScale: number | StrongNumeric<DoubleHost>,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>,
    bottomLeftOrigin: boolean
  ): VoidResult;
  getTextSize(
    text: string,
    fontFace: EnumInput<OpenCvSharp.HersheyFonts>,
    fontScale: number | StrongNumeric<DoubleHost>,
    thickness: number | StrongNumeric<Int32Host>,
    baseLine: HostVariableOut<number>
  ): OpenCvSharp.Size;
  getFontScaleFromHeight(
    fontFace: EnumInput<OpenCvSharp.HersheyFonts>,
    pixelHeight: number | StrongNumeric<Int32Host>
  ): number;
  getFontScaleFromHeight(
    fontFace: EnumInput<OpenCvSharp.HersheyFonts>,
    pixelHeight: number | StrongNumeric<Int32Host>,
    thickness: number | StrongNumeric<Int32Host>
  ): number;
  groupRectangles(
    rectList: System.Collections.Generic.IList<OpenCvSharp.Rect>,
    groupThreshold: number | StrongNumeric<Int32Host>
  ): VoidResult;
  groupRectangles(
    rectList: System.Collections.Generic.IList<OpenCvSharp.Rect>,
    groupThreshold: number | StrongNumeric<Int32Host>,
    eps: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  groupRectangles(
    rectList: System.Collections.Generic.IList<OpenCvSharp.Rect>,
    weights: HostVariableOut<HostArray<number>>,
    groupThreshold: number | StrongNumeric<Int32Host>
  ): VoidResult;
  groupRectangles(
    rectList: System.Collections.Generic.IList<OpenCvSharp.Rect>,
    weights: HostVariableOut<HostArray<number>>,
    groupThreshold: number | StrongNumeric<Int32Host>,
    eps: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  groupRectangles(
    rectList: System.Collections.Generic.IList<OpenCvSharp.Rect>,
    groupThreshold: number | StrongNumeric<Int32Host>,
    eps: number | StrongNumeric<DoubleHost>,
    weights: HostVariableOut<HostArray<number>>,
    levelWeights: HostVariableOut<HostArray<number>>
  ): VoidResult;
  groupRectangles(
    rectList: System.Collections.Generic.IList<OpenCvSharp.Rect>,
    rejectLevels: HostVariableOut<HostArray<number>>,
    levelWeights: HostVariableOut<HostArray<number>>,
    groupThreshold: number | StrongNumeric<Int32Host>
  ): VoidResult;
  groupRectangles(
    rectList: System.Collections.Generic.IList<OpenCvSharp.Rect>,
    rejectLevels: HostVariableOut<HostArray<number>>,
    levelWeights: HostVariableOut<HostArray<number>>,
    groupThreshold: number | StrongNumeric<Int32Host>,
    eps: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  groupRectanglesMeanshift(
    rectList: System.Collections.Generic.IList<OpenCvSharp.Rect>,
    foundWeights: HostVariableOut<HostArray<number>>,
    foundScales: HostVariableOut<HostArray<number>>
  ): VoidResult;
  groupRectanglesMeanshift(
    rectList: System.Collections.Generic.IList<OpenCvSharp.Rect>,
    foundWeights: HostVariableOut<HostArray<number>>,
    foundScales: HostVariableOut<HostArray<number>>,
    detectThreshold: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  groupRectanglesMeanshift(
    rectList: System.Collections.Generic.IList<OpenCvSharp.Rect>,
    foundWeights: HostVariableOut<HostArray<number>>,
    foundScales: HostVariableOut<HostArray<number>>,
    detectThreshold: number | StrongNumeric<DoubleHost>,
    winDetSize: OpenCvSharp.Size | null | null
  ): VoidResult;
  inpaint(
    src: OpenCvSharp.InputArray,
    inpaintMask: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    inpaintRadius: number | StrongNumeric<DoubleHost>,
    flags: EnumInput<OpenCvSharp.InpaintMethod>
  ): VoidResult;
  fastNlMeansDenoising(src: OpenCvSharp.InputArray, dst: OpenCvSharp.OutputArray): VoidResult;
  fastNlMeansDenoising(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    h: number | StrongNumeric<SingleHost>
  ): VoidResult;
  fastNlMeansDenoising(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    h: number | StrongNumeric<SingleHost>,
    templateWindowSize: number | StrongNumeric<Int32Host>
  ): VoidResult;
  fastNlMeansDenoising(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    h: number | StrongNumeric<SingleHost>,
    templateWindowSize: number | StrongNumeric<Int32Host>,
    searchWindowSize: number | StrongNumeric<Int32Host>
  ): VoidResult;
  fastNlMeansDenoisingColored(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray
  ): VoidResult;
  fastNlMeansDenoisingColored(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    h: number | StrongNumeric<SingleHost>
  ): VoidResult;
  fastNlMeansDenoisingColored(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    h: number | StrongNumeric<SingleHost>,
    hColor: number | StrongNumeric<SingleHost>
  ): VoidResult;
  fastNlMeansDenoisingColored(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    h: number | StrongNumeric<SingleHost>,
    hColor: number | StrongNumeric<SingleHost>,
    templateWindowSize: number | StrongNumeric<Int32Host>
  ): VoidResult;
  fastNlMeansDenoisingColored(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    h: number | StrongNumeric<SingleHost>,
    hColor: number | StrongNumeric<SingleHost>,
    templateWindowSize: number | StrongNumeric<Int32Host>,
    searchWindowSize: number | StrongNumeric<Int32Host>
  ): VoidResult;
  fastNlMeansDenoisingMulti(
    srcImgs: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    dst: OpenCvSharp.OutputArray,
    imgToDenoiseIndex: number | StrongNumeric<Int32Host>,
    temporalWindowSize: number | StrongNumeric<Int32Host>
  ): VoidResult;
  fastNlMeansDenoisingMulti(
    srcImgs: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    dst: OpenCvSharp.OutputArray,
    imgToDenoiseIndex: number | StrongNumeric<Int32Host>,
    temporalWindowSize: number | StrongNumeric<Int32Host>,
    h: number | StrongNumeric<SingleHost>
  ): VoidResult;
  fastNlMeansDenoisingMulti(
    srcImgs: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    dst: OpenCvSharp.OutputArray,
    imgToDenoiseIndex: number | StrongNumeric<Int32Host>,
    temporalWindowSize: number | StrongNumeric<Int32Host>,
    h: number | StrongNumeric<SingleHost>,
    templateWindowSize: number | StrongNumeric<Int32Host>
  ): VoidResult;
  fastNlMeansDenoisingMulti(
    srcImgs: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    dst: OpenCvSharp.OutputArray,
    imgToDenoiseIndex: number | StrongNumeric<Int32Host>,
    temporalWindowSize: number | StrongNumeric<Int32Host>,
    h: number | StrongNumeric<SingleHost>,
    templateWindowSize: number | StrongNumeric<Int32Host>,
    searchWindowSize: number | StrongNumeric<Int32Host>
  ): VoidResult;
  fastNlMeansDenoisingColoredMulti(
    srcImgs: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    dst: OpenCvSharp.OutputArray,
    imgToDenoiseIndex: number | StrongNumeric<Int32Host>,
    temporalWindowSize: number | StrongNumeric<Int32Host>
  ): VoidResult;
  fastNlMeansDenoisingColoredMulti(
    srcImgs: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    dst: OpenCvSharp.OutputArray,
    imgToDenoiseIndex: number | StrongNumeric<Int32Host>,
    temporalWindowSize: number | StrongNumeric<Int32Host>,
    h: number | StrongNumeric<SingleHost>
  ): VoidResult;
  fastNlMeansDenoisingColoredMulti(
    srcImgs: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    dst: OpenCvSharp.OutputArray,
    imgToDenoiseIndex: number | StrongNumeric<Int32Host>,
    temporalWindowSize: number | StrongNumeric<Int32Host>,
    h: number | StrongNumeric<SingleHost>,
    hColor: number | StrongNumeric<SingleHost>
  ): VoidResult;
  fastNlMeansDenoisingColoredMulti(
    srcImgs: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    dst: OpenCvSharp.OutputArray,
    imgToDenoiseIndex: number | StrongNumeric<Int32Host>,
    temporalWindowSize: number | StrongNumeric<Int32Host>,
    h: number | StrongNumeric<SingleHost>,
    hColor: number | StrongNumeric<SingleHost>,
    templateWindowSize: number | StrongNumeric<Int32Host>
  ): VoidResult;
  fastNlMeansDenoisingColoredMulti(
    srcImgs: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    dst: OpenCvSharp.OutputArray,
    imgToDenoiseIndex: number | StrongNumeric<Int32Host>,
    temporalWindowSize: number | StrongNumeric<Int32Host>,
    h: number | StrongNumeric<SingleHost>,
    hColor: number | StrongNumeric<SingleHost>,
    templateWindowSize: number | StrongNumeric<Int32Host>,
    searchWindowSize: number | StrongNumeric<Int32Host>
  ): VoidResult;
  denoiseTVL1(
    observations: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    result: OpenCvSharp.Mat
  ): VoidResult;
  denoiseTVL1(
    observations: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    result: OpenCvSharp.Mat,
    lambda: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  denoiseTVL1(
    observations: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    result: OpenCvSharp.Mat,
    lambda: number | StrongNumeric<DoubleHost>,
    niters: number | StrongNumeric<Int32Host>
  ): VoidResult;
  decolor(
    src: OpenCvSharp.InputArray,
    grayscale: OpenCvSharp.OutputArray,
    colorBoost: OpenCvSharp.OutputArray
  ): VoidResult;
  seamlessClone(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.InputArray,
    mask: OpenCvSharp.InputArray | null,
    p: OpenCvSharp.Point,
    blend: OpenCvSharp.OutputArray,
    flags: EnumInput<OpenCvSharp.SeamlessCloneMethods>
  ): VoidResult;
  colorChange(
    src: OpenCvSharp.InputArray,
    mask: OpenCvSharp.InputArray | null,
    dst: OpenCvSharp.OutputArray
  ): VoidResult;
  colorChange(
    src: OpenCvSharp.InputArray,
    mask: OpenCvSharp.InputArray | null,
    dst: OpenCvSharp.OutputArray,
    redMul: number | StrongNumeric<SingleHost>
  ): VoidResult;
  colorChange(
    src: OpenCvSharp.InputArray,
    mask: OpenCvSharp.InputArray | null,
    dst: OpenCvSharp.OutputArray,
    redMul: number | StrongNumeric<SingleHost>,
    greenMul: number | StrongNumeric<SingleHost>
  ): VoidResult;
  colorChange(
    src: OpenCvSharp.InputArray,
    mask: OpenCvSharp.InputArray | null,
    dst: OpenCvSharp.OutputArray,
    redMul: number | StrongNumeric<SingleHost>,
    greenMul: number | StrongNumeric<SingleHost>,
    blueMul: number | StrongNumeric<SingleHost>
  ): VoidResult;
  illuminationChange(
    src: OpenCvSharp.InputArray,
    mask: OpenCvSharp.InputArray | null,
    dst: OpenCvSharp.OutputArray
  ): VoidResult;
  illuminationChange(
    src: OpenCvSharp.InputArray,
    mask: OpenCvSharp.InputArray | null,
    dst: OpenCvSharp.OutputArray,
    alpha: number | StrongNumeric<SingleHost>
  ): VoidResult;
  illuminationChange(
    src: OpenCvSharp.InputArray,
    mask: OpenCvSharp.InputArray | null,
    dst: OpenCvSharp.OutputArray,
    alpha: number | StrongNumeric<SingleHost>,
    beta: number | StrongNumeric<SingleHost>
  ): VoidResult;
  textureFlattening(
    src: OpenCvSharp.InputArray,
    mask: OpenCvSharp.InputArray | null,
    dst: OpenCvSharp.OutputArray
  ): VoidResult;
  textureFlattening(
    src: OpenCvSharp.InputArray,
    mask: OpenCvSharp.InputArray | null,
    dst: OpenCvSharp.OutputArray,
    lowThreshold: number | StrongNumeric<SingleHost>
  ): VoidResult;
  textureFlattening(
    src: OpenCvSharp.InputArray,
    mask: OpenCvSharp.InputArray | null,
    dst: OpenCvSharp.OutputArray,
    lowThreshold: number | StrongNumeric<SingleHost>,
    highThreshold: number | StrongNumeric<SingleHost>
  ): VoidResult;
  textureFlattening(
    src: OpenCvSharp.InputArray,
    mask: OpenCvSharp.InputArray | null,
    dst: OpenCvSharp.OutputArray,
    lowThreshold: number | StrongNumeric<SingleHost>,
    highThreshold: number | StrongNumeric<SingleHost>,
    kernelSize: number | StrongNumeric<Int32Host>
  ): VoidResult;
  edgePreservingFilter(src: OpenCvSharp.InputArray, dst: OpenCvSharp.OutputArray): VoidResult;
  edgePreservingFilter(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    flags: EnumInput<OpenCvSharp.EdgePreservingMethods>
  ): VoidResult;
  edgePreservingFilter(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    flags: EnumInput<OpenCvSharp.EdgePreservingMethods>,
    sigmaS: number | StrongNumeric<SingleHost>
  ): VoidResult;
  edgePreservingFilter(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    flags: EnumInput<OpenCvSharp.EdgePreservingMethods>,
    sigmaS: number | StrongNumeric<SingleHost>,
    sigmaR: number | StrongNumeric<SingleHost>
  ): VoidResult;
  detailEnhance(src: OpenCvSharp.InputArray, dst: OpenCvSharp.OutputArray): VoidResult;
  detailEnhance(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    sigmaS: number | StrongNumeric<SingleHost>
  ): VoidResult;
  detailEnhance(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    sigmaS: number | StrongNumeric<SingleHost>,
    sigmaR: number | StrongNumeric<SingleHost>
  ): VoidResult;
  pencilSketch(
    src: OpenCvSharp.InputArray,
    dst1: OpenCvSharp.OutputArray,
    dst2: OpenCvSharp.OutputArray
  ): VoidResult;
  pencilSketch(
    src: OpenCvSharp.InputArray,
    dst1: OpenCvSharp.OutputArray,
    dst2: OpenCvSharp.OutputArray,
    sigmaS: number | StrongNumeric<SingleHost>
  ): VoidResult;
  pencilSketch(
    src: OpenCvSharp.InputArray,
    dst1: OpenCvSharp.OutputArray,
    dst2: OpenCvSharp.OutputArray,
    sigmaS: number | StrongNumeric<SingleHost>,
    sigmaR: number | StrongNumeric<SingleHost>
  ): VoidResult;
  pencilSketch(
    src: OpenCvSharp.InputArray,
    dst1: OpenCvSharp.OutputArray,
    dst2: OpenCvSharp.OutputArray,
    sigmaS: number | StrongNumeric<SingleHost>,
    sigmaR: number | StrongNumeric<SingleHost>,
    shadeFactor: number | StrongNumeric<SingleHost>
  ): VoidResult;
  stylization(src: OpenCvSharp.InputArray, dst: OpenCvSharp.OutputArray): VoidResult;
  stylization(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    sigmaS: number | StrongNumeric<SingleHost>
  ): VoidResult;
  stylization(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    sigmaS: number | StrongNumeric<SingleHost>,
    sigmaR: number | StrongNumeric<SingleHost>
  ): VoidResult;
  createFrameSource_Empty(): OpenCvSharp.FrameSource;
  createFrameSource_Video(fileName: string): OpenCvSharp.FrameSource;
  createFrameSource_Video_CUDA(fileName: string): OpenCvSharp.FrameSource;
  createFrameSource_Camera(deviceId: number | StrongNumeric<Int32Host>): OpenCvSharp.FrameSource;
  createSuperResolution_BTVL1(): OpenCvSharp.SuperResolution;
  createSuperResolution_BTVL1_CUDA(): OpenCvSharp.SuperResolution;
  createOptFlow_Farneback(): OpenCvSharp.DenseOpticalFlowExt;
  createOptFlow_Farneback_GPU(): OpenCvSharp.DenseOpticalFlowExt;
  createOptFlow_DualTVL1_GPU(): OpenCvSharp.DenseOpticalFlowExt;
  createOptFlow_Brox_GPU(): OpenCvSharp.DenseOpticalFlowExt;
  createOptFlow_PyrLK_GPU(): OpenCvSharp.DenseOpticalFlowExt;
  camShift(
    probImage: OpenCvSharp.InputArray,
    window: HostVariableRef<OpenCvSharp.Rect>,
    criteria: OpenCvSharp.TermCriteria
  ): OpenCvSharp.RotatedRect;
  meanShift(
    probImage: OpenCvSharp.InputArray,
    window: HostVariableRef<OpenCvSharp.Rect>,
    criteria: OpenCvSharp.TermCriteria
  ): number;
  buildOpticalFlowPyramid(
    img: OpenCvSharp.InputArray,
    pyramid: OpenCvSharp.OutputArray,
    winSize: OpenCvSharp.Size,
    maxLevel: number | StrongNumeric<Int32Host>
  ): number;
  buildOpticalFlowPyramid(
    img: OpenCvSharp.InputArray,
    pyramid: OpenCvSharp.OutputArray,
    winSize: OpenCvSharp.Size,
    maxLevel: number | StrongNumeric<Int32Host>,
    withDerivatives: boolean
  ): number;
  buildOpticalFlowPyramid(
    img: OpenCvSharp.InputArray,
    pyramid: OpenCvSharp.OutputArray,
    winSize: OpenCvSharp.Size,
    maxLevel: number | StrongNumeric<Int32Host>,
    withDerivatives: boolean,
    pyrBorder: EnumInput<OpenCvSharp.BorderTypes>
  ): number;
  buildOpticalFlowPyramid(
    img: OpenCvSharp.InputArray,
    pyramid: OpenCvSharp.OutputArray,
    winSize: OpenCvSharp.Size,
    maxLevel: number | StrongNumeric<Int32Host>,
    withDerivatives: boolean,
    pyrBorder: EnumInput<OpenCvSharp.BorderTypes>,
    derivBorder: EnumInput<OpenCvSharp.BorderTypes>
  ): number;
  buildOpticalFlowPyramid(
    img: OpenCvSharp.InputArray,
    pyramid: OpenCvSharp.OutputArray,
    winSize: OpenCvSharp.Size,
    maxLevel: number | StrongNumeric<Int32Host>,
    withDerivatives: boolean,
    pyrBorder: EnumInput<OpenCvSharp.BorderTypes>,
    derivBorder: EnumInput<OpenCvSharp.BorderTypes>,
    tryReuseInputImage: boolean
  ): number;
  buildOpticalFlowPyramid(
    img: OpenCvSharp.InputArray,
    pyramid: HostVariableOut<HostArray<OpenCvSharp.Mat>>,
    winSize: OpenCvSharp.Size,
    maxLevel: number | StrongNumeric<Int32Host>
  ): number;
  buildOpticalFlowPyramid(
    img: OpenCvSharp.InputArray,
    pyramid: HostVariableOut<HostArray<OpenCvSharp.Mat>>,
    winSize: OpenCvSharp.Size,
    maxLevel: number | StrongNumeric<Int32Host>,
    withDerivatives: boolean
  ): number;
  buildOpticalFlowPyramid(
    img: OpenCvSharp.InputArray,
    pyramid: HostVariableOut<HostArray<OpenCvSharp.Mat>>,
    winSize: OpenCvSharp.Size,
    maxLevel: number | StrongNumeric<Int32Host>,
    withDerivatives: boolean,
    pyrBorder: EnumInput<OpenCvSharp.BorderTypes>
  ): number;
  buildOpticalFlowPyramid(
    img: OpenCvSharp.InputArray,
    pyramid: HostVariableOut<HostArray<OpenCvSharp.Mat>>,
    winSize: OpenCvSharp.Size,
    maxLevel: number | StrongNumeric<Int32Host>,
    withDerivatives: boolean,
    pyrBorder: EnumInput<OpenCvSharp.BorderTypes>,
    derivBorder: EnumInput<OpenCvSharp.BorderTypes>
  ): number;
  buildOpticalFlowPyramid(
    img: OpenCvSharp.InputArray,
    pyramid: HostVariableOut<HostArray<OpenCvSharp.Mat>>,
    winSize: OpenCvSharp.Size,
    maxLevel: number | StrongNumeric<Int32Host>,
    withDerivatives: boolean,
    pyrBorder: EnumInput<OpenCvSharp.BorderTypes>,
    derivBorder: EnumInput<OpenCvSharp.BorderTypes>,
    tryReuseInputImage: boolean
  ): number;
  calcOpticalFlowPyrLK(
    prevImg: OpenCvSharp.InputArray,
    nextImg: OpenCvSharp.InputArray,
    prevPts: OpenCvSharp.InputArray,
    nextPts: OpenCvSharp.InputOutputArray,
    status: OpenCvSharp.OutputArray,
    err: OpenCvSharp.OutputArray
  ): VoidResult;
  calcOpticalFlowPyrLK(
    prevImg: OpenCvSharp.InputArray,
    nextImg: OpenCvSharp.InputArray,
    prevPts: OpenCvSharp.InputArray,
    nextPts: OpenCvSharp.InputOutputArray,
    status: OpenCvSharp.OutputArray,
    err: OpenCvSharp.OutputArray,
    winSize: OpenCvSharp.Size | null | null
  ): VoidResult;
  calcOpticalFlowPyrLK(
    prevImg: OpenCvSharp.InputArray,
    nextImg: OpenCvSharp.InputArray,
    prevPts: OpenCvSharp.InputArray,
    nextPts: OpenCvSharp.InputOutputArray,
    status: OpenCvSharp.OutputArray,
    err: OpenCvSharp.OutputArray,
    winSize: OpenCvSharp.Size | null | null,
    maxLevel: number | StrongNumeric<Int32Host>
  ): VoidResult;
  calcOpticalFlowPyrLK(
    prevImg: OpenCvSharp.InputArray,
    nextImg: OpenCvSharp.InputArray,
    prevPts: OpenCvSharp.InputArray,
    nextPts: OpenCvSharp.InputOutputArray,
    status: OpenCvSharp.OutputArray,
    err: OpenCvSharp.OutputArray,
    winSize: OpenCvSharp.Size | null | null,
    maxLevel: number | StrongNumeric<Int32Host>,
    criteria: OpenCvSharp.TermCriteria | null | null
  ): VoidResult;
  calcOpticalFlowPyrLK(
    prevImg: OpenCvSharp.InputArray,
    nextImg: OpenCvSharp.InputArray,
    prevPts: OpenCvSharp.InputArray,
    nextPts: OpenCvSharp.InputOutputArray,
    status: OpenCvSharp.OutputArray,
    err: OpenCvSharp.OutputArray,
    winSize: OpenCvSharp.Size | null | null,
    maxLevel: number | StrongNumeric<Int32Host>,
    criteria: OpenCvSharp.TermCriteria | null | null,
    flags: EnumInput<OpenCvSharp.OpticalFlowFlags>
  ): VoidResult;
  calcOpticalFlowPyrLK(
    prevImg: OpenCvSharp.InputArray,
    nextImg: OpenCvSharp.InputArray,
    prevPts: OpenCvSharp.InputArray,
    nextPts: OpenCvSharp.InputOutputArray,
    status: OpenCvSharp.OutputArray,
    err: OpenCvSharp.OutputArray,
    winSize: OpenCvSharp.Size | null | null,
    maxLevel: number | StrongNumeric<Int32Host>,
    criteria: OpenCvSharp.TermCriteria | null | null,
    flags: EnumInput<OpenCvSharp.OpticalFlowFlags>,
    minEigThreshold: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  calcOpticalFlowPyrLK(
    prevImg: OpenCvSharp.InputArray,
    nextImg: OpenCvSharp.InputArray,
    prevPts: HostArray<OpenCvSharp.Point2f>,
    nextPts: HostVariableRef<HostArray<OpenCvSharp.Point2f>>,
    status: HostVariableOut<HostArray<number>>,
    err: HostVariableOut<HostArray<number>>
  ): VoidResult;
  calcOpticalFlowPyrLK(
    prevImg: OpenCvSharp.InputArray,
    nextImg: OpenCvSharp.InputArray,
    prevPts: HostArray<OpenCvSharp.Point2f>,
    nextPts: HostVariableRef<HostArray<OpenCvSharp.Point2f>>,
    status: HostVariableOut<HostArray<number>>,
    err: HostVariableOut<HostArray<number>>,
    winSize: OpenCvSharp.Size | null | null
  ): VoidResult;
  calcOpticalFlowPyrLK(
    prevImg: OpenCvSharp.InputArray,
    nextImg: OpenCvSharp.InputArray,
    prevPts: HostArray<OpenCvSharp.Point2f>,
    nextPts: HostVariableRef<HostArray<OpenCvSharp.Point2f>>,
    status: HostVariableOut<HostArray<number>>,
    err: HostVariableOut<HostArray<number>>,
    winSize: OpenCvSharp.Size | null | null,
    maxLevel: number | StrongNumeric<Int32Host>
  ): VoidResult;
  calcOpticalFlowPyrLK(
    prevImg: OpenCvSharp.InputArray,
    nextImg: OpenCvSharp.InputArray,
    prevPts: HostArray<OpenCvSharp.Point2f>,
    nextPts: HostVariableRef<HostArray<OpenCvSharp.Point2f>>,
    status: HostVariableOut<HostArray<number>>,
    err: HostVariableOut<HostArray<number>>,
    winSize: OpenCvSharp.Size | null | null,
    maxLevel: number | StrongNumeric<Int32Host>,
    criteria: OpenCvSharp.TermCriteria | null | null
  ): VoidResult;
  calcOpticalFlowPyrLK(
    prevImg: OpenCvSharp.InputArray,
    nextImg: OpenCvSharp.InputArray,
    prevPts: HostArray<OpenCvSharp.Point2f>,
    nextPts: HostVariableRef<HostArray<OpenCvSharp.Point2f>>,
    status: HostVariableOut<HostArray<number>>,
    err: HostVariableOut<HostArray<number>>,
    winSize: OpenCvSharp.Size | null | null,
    maxLevel: number | StrongNumeric<Int32Host>,
    criteria: OpenCvSharp.TermCriteria | null | null,
    flags: EnumInput<OpenCvSharp.OpticalFlowFlags>
  ): VoidResult;
  calcOpticalFlowPyrLK(
    prevImg: OpenCvSharp.InputArray,
    nextImg: OpenCvSharp.InputArray,
    prevPts: HostArray<OpenCvSharp.Point2f>,
    nextPts: HostVariableRef<HostArray<OpenCvSharp.Point2f>>,
    status: HostVariableOut<HostArray<number>>,
    err: HostVariableOut<HostArray<number>>,
    winSize: OpenCvSharp.Size | null | null,
    maxLevel: number | StrongNumeric<Int32Host>,
    criteria: OpenCvSharp.TermCriteria | null | null,
    flags: EnumInput<OpenCvSharp.OpticalFlowFlags>,
    minEigThreshold: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  calcOpticalFlowFarneback(
    prev: OpenCvSharp.InputArray,
    next: OpenCvSharp.InputArray,
    flow: OpenCvSharp.InputOutputArray,
    pyrScale: number | StrongNumeric<DoubleHost>,
    levels: number | StrongNumeric<Int32Host>,
    winsize: number | StrongNumeric<Int32Host>,
    iterations: number | StrongNumeric<Int32Host>,
    polyN: number | StrongNumeric<Int32Host>,
    polySigma: number | StrongNumeric<DoubleHost>,
    flags: EnumInput<OpenCvSharp.OpticalFlowFlags>
  ): VoidResult;
  computeECC(templateImage: OpenCvSharp.InputArray, inputImage: OpenCvSharp.InputArray): number;
  computeECC(
    templateImage: OpenCvSharp.InputArray,
    inputImage: OpenCvSharp.InputArray,
    inputMask: OpenCvSharp.InputArray | null
  ): number;
  findTransformECC(
    templateImage: OpenCvSharp.InputArray,
    inputImage: OpenCvSharp.InputArray,
    warpMatrix: OpenCvSharp.InputOutputArray,
    motionType: EnumInput<OpenCvSharp.MotionTypes>,
    criteria: OpenCvSharp.TermCriteria
  ): number;
  findTransformECC(
    templateImage: OpenCvSharp.InputArray,
    inputImage: OpenCvSharp.InputArray,
    warpMatrix: OpenCvSharp.InputOutputArray,
    motionType: EnumInput<OpenCvSharp.MotionTypes>,
    criteria: OpenCvSharp.TermCriteria,
    inputMask: OpenCvSharp.InputArray | null
  ): number;
  findTransformECC(
    templateImage: OpenCvSharp.InputArray,
    inputImage: OpenCvSharp.InputArray,
    warpMatrix: OpenCvSharp.InputOutputArray,
    motionType: EnumInput<OpenCvSharp.MotionTypes>,
    criteria: OpenCvSharp.TermCriteria,
    inputMask: OpenCvSharp.InputArray | null,
    gaussFiltSize: number | StrongNumeric<Int32Host>
  ): number;
  findTransformECC(
    templateImage: OpenCvSharp.InputArray,
    inputImage: OpenCvSharp.InputArray,
    warpMatrix: OpenCvSharp.InputOutputArray
  ): number;
  findTransformECC(
    templateImage: OpenCvSharp.InputArray,
    inputImage: OpenCvSharp.InputArray,
    warpMatrix: OpenCvSharp.InputOutputArray,
    motionType: EnumInput<OpenCvSharp.MotionTypes>
  ): number;
  findTransformECC(
    templateImage: OpenCvSharp.InputArray,
    inputImage: OpenCvSharp.InputArray,
    warpMatrix: OpenCvSharp.InputOutputArray,
    motionType: EnumInput<OpenCvSharp.MotionTypes>,
    criteria: OpenCvSharp.TermCriteria | null | null
  ): number;
  findTransformECC(
    templateImage: OpenCvSharp.InputArray,
    inputImage: OpenCvSharp.InputArray,
    warpMatrix: OpenCvSharp.InputOutputArray,
    motionType: EnumInput<OpenCvSharp.MotionTypes>,
    criteria: OpenCvSharp.TermCriteria | null | null,
    inputMask: OpenCvSharp.InputArray | null
  ): number;
  readonly FishEye: Cv2_FishEyeHostType;
  readonly PartitionPredicate: Cv2_PartitionPredicateHostType<any>;
}

export {};
