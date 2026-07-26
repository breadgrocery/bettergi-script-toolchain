import type {
  ByteHost,
  ClrHostValue,
  DoubleHost,
  EnumInput,
  HostArray,
  HostType,
  Int16Host,
  Int32Host,
  Int64Host,
  SByteHost,
  SingleHost,
  StaticTypeTrait,
  StrongNumeric,
  UInt16Host,
  UInt32Host,
  UInt64Host
} from "../../Microsoft/ClearScript/HostType";
import type { HostVariableOut, HostVariableRef } from "../../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../../System/Collections/Generic/IEnumerable";
import "../../System/IntPtr";
import "../../System/UIntPtr";
import "../Aruco/DetectorParameters";
import "../BorderTypes";
import "../CvErrorCallback";
import "../DMatch";
import "../Detail/ImageFeatures";
import "../Flann/FlannCentersInit";
import "../HistogramNormType";
import "../KeyPoint";
import "../LogLevel";
import "../ML/ParamGrid";
import "../MatForeachFunctionByte";
import "../MatForeachFunctionDouble";
import "../MatForeachFunctionFloat";
import "../MatForeachFunctionInt16";
import "../MatForeachFunctionInt32";
import "../MatForeachFunctionVec2b";
import "../MatForeachFunctionVec2d";
import "../MatForeachFunctionVec2f";
import "../MatForeachFunctionVec2i";
import "../MatForeachFunctionVec2s";
import "../MatForeachFunctionVec3b";
import "../MatForeachFunctionVec3d";
import "../MatForeachFunctionVec3f";
import "../MatForeachFunctionVec3i";
import "../MatForeachFunctionVec3s";
import "../MatForeachFunctionVec4b";
import "../MatForeachFunctionVec4d";
import "../MatForeachFunctionVec4f";
import "../MatForeachFunctionVec4i";
import "../MatForeachFunctionVec4s";
import "../MatForeachFunctionVec6b";
import "../MatForeachFunctionVec6d";
import "../MatForeachFunctionVec6f";
import "../MatForeachFunctionVec6i";
import "../MatForeachFunctionVec6s";
import "../MatType";
import "../Moments";
import "../MouseCallback";
import "../Point";
import "../Point2d";
import "../Point2f";
import "../Point3d";
import "../Point3f";
import "../Point3i";
import "../Range";
import "../Rect";
import "../Rect2d";
import "../Rect2f";
import "../RotatedRect";
import "../Scalar";
import "../SimpleBlobDetector";
import "../Size";
import "../Size2d";
import "../Size2f";
import "../TermCriteria";
import "../TrackbarCallbackNative";
import "../TrackerGOTURN";
import "../TrackerMIL";
import "../Tracking/TrackerCSRT";
import "../Tracking/TrackerKCF";
import "../UsacParams";
import "../Vec2b";
import "../Vec2d";
import "../Vec2f";
import "../Vec2i";
import "../Vec2s";
import "../Vec2w";
import "../Vec3b";
import "../Vec3d";
import "../Vec3f";
import "../Vec3i";
import "../Vec3s";
import "../Vec3w";
import "../Vec4b";
import "../Vec4d";
import "../Vec4f";
import "../Vec4i";
import "../Vec4s";
import "../Vec4w";
import "../Vec6b";
import "../Vec6d";
import "../Vec6f";
import "../Vec6i";
import "../Vec6s";
import "../Vec6w";
import "./ExceptionStatus";

declare const nativeMethodsBrand: unique symbol;
export interface NativeMethods extends ClrHostValue {
  readonly [nativeMethodsBrand]: true;
}

declare global {
  namespace OpenCvSharp.Internal {
    type NativeMethods = import("./NativeMethods").NativeMethods;
  }
}

export interface NativeMethodsHostType extends HostType<NativeMethods, StaticTypeTrait> {
  readonly errorHandlerThrowException: OpenCvSharp.CvErrorCallback;
  readonly errorHandlerIgnorance: OpenCvSharp.CvErrorCallback;
  errorHandlerDefault: OpenCvSharp.CvErrorCallback;
  readonly dllExtern: string;
  calib3d_Rodrigues(
    src: System.IntPtr,
    dst: System.IntPtr,
    jacobian: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_findHomography_InputArray(
    srcPoints: System.IntPtr,
    dstPoints: System.IntPtr,
    method: number | StrongNumeric<Int32Host>,
    ransacReprojThreshold: number | StrongNumeric<DoubleHost>,
    mask: System.IntPtr,
    maxIters: number | StrongNumeric<Int32Host>,
    confidence: number | StrongNumeric<DoubleHost>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_findHomography_vector(
    srcPoints: HostArray<OpenCvSharp.Point2d>,
    srcPointsLength: number | StrongNumeric<Int32Host>,
    dstPoints: HostArray<OpenCvSharp.Point2d>,
    dstPointsLength: number | StrongNumeric<Int32Host>,
    method: number | StrongNumeric<Int32Host>,
    ransacReprojThreshold: number | StrongNumeric<DoubleHost>,
    mask: System.IntPtr,
    maxIters: number | StrongNumeric<Int32Host>,
    confidence: number | StrongNumeric<DoubleHost>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_findHomography_UsacParams(
    srcPoints: System.IntPtr,
    dstPoints: System.IntPtr,
    mask: System.IntPtr,
    params: HostVariableRef<OpenCvSharp.WUsacParams>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_RQDecomp3x3_InputArray(
    src: System.IntPtr,
    mtxR: System.IntPtr,
    mtxQ: System.IntPtr,
    qx: System.IntPtr,
    qy: System.IntPtr,
    qz: System.IntPtr,
    outVal: HostVariableOut<OpenCvSharp.Vec3d>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_RQDecomp3x3_Mat(
    src: System.IntPtr,
    mtxR: System.IntPtr,
    mtxQ: System.IntPtr,
    qx: System.IntPtr,
    qy: System.IntPtr,
    qz: System.IntPtr,
    outVal: HostVariableOut<OpenCvSharp.Vec3d>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_decomposeProjectionMatrix_InputArray(
    projMatrix: System.IntPtr,
    cameraMatrix: System.IntPtr,
    rotMatrix: System.IntPtr,
    transVect: System.IntPtr,
    rotMatrixX: System.IntPtr,
    rotMatrixY: System.IntPtr,
    rotMatrixZ: System.IntPtr,
    eulerAngles: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_decomposeProjectionMatrix_Mat(
    projMatrix: System.IntPtr,
    cameraMatrix: System.IntPtr,
    rotMatrix: System.IntPtr,
    transVect: System.IntPtr,
    rotMatrixX: System.IntPtr,
    rotMatrixY: System.IntPtr,
    rotMatrixZ: System.IntPtr,
    eulerAngles: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_matMulDeriv(
    a: System.IntPtr,
    b: System.IntPtr,
    dABdA: System.IntPtr,
    dABdB: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_composeRT_InputArray(
    rvec1: System.IntPtr,
    tvec1: System.IntPtr,
    rvec2: System.IntPtr,
    tvec2: System.IntPtr,
    rvec3: System.IntPtr,
    tvec3: System.IntPtr,
    dr3dr1: System.IntPtr,
    dr3dt1: System.IntPtr,
    dr3dr2: System.IntPtr,
    dr3dt2: System.IntPtr,
    dt3dr1: System.IntPtr,
    dt3dt1: System.IntPtr,
    dt3dr2: System.IntPtr,
    dt3dt2: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_composeRT_Mat(
    rvec1: System.IntPtr,
    tvec1: System.IntPtr,
    rvec2: System.IntPtr,
    tvec2: System.IntPtr,
    rvec3: System.IntPtr,
    tvec3: System.IntPtr,
    dr3dr1: System.IntPtr,
    dr3dt1: System.IntPtr,
    dr3dr2: System.IntPtr,
    dr3dt2: System.IntPtr,
    dt3dr1: System.IntPtr,
    dt3dt1: System.IntPtr,
    dt3dr2: System.IntPtr,
    dt3dt2: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_projectPoints_InputArray(
    objectPoints: System.IntPtr,
    rvec: System.IntPtr,
    tvec: System.IntPtr,
    cameraMatrix: System.IntPtr,
    distCoeffs: System.IntPtr,
    imagePoints: System.IntPtr,
    jacobian: System.IntPtr,
    aspectRatio: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_projectPoints_Mat(
    objectPoints: System.IntPtr,
    rvec: System.IntPtr,
    tvec: System.IntPtr,
    cameraMatrix: System.IntPtr,
    distCoeffs: System.IntPtr,
    imagePoints: System.IntPtr,
    jacobian: System.IntPtr,
    aspectRatio: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_solvePnP_InputArray(
    selfectPoints: System.IntPtr,
    imagePoints: System.IntPtr,
    cameraMatrix: System.IntPtr,
    distCoeffs: System.IntPtr,
    rvec: System.IntPtr,
    tvec: System.IntPtr,
    useExtrinsicGuess: number | StrongNumeric<Int32Host>,
    flags: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_solvePnPRansac_InputArray(
    objectPoints: System.IntPtr,
    imagePoints: System.IntPtr,
    cameraMatrix: System.IntPtr,
    distCoeffs: System.IntPtr,
    rvec: System.IntPtr,
    tvec: System.IntPtr,
    useExtrinsicGuess: number | StrongNumeric<Int32Host>,
    iterationsCount: number | StrongNumeric<Int32Host>,
    reprojectionError: number | StrongNumeric<SingleHost>,
    confidence: number | StrongNumeric<DoubleHost>,
    inliers: System.IntPtr,
    flags: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_initCameraMatrix2D_Mat(
    objectPoints: HostArray<System.IntPtr>,
    objectPointsLength: number | StrongNumeric<Int32Host>,
    imagePoints: HostArray<System.IntPtr>,
    imagePointsLength: number | StrongNumeric<Int32Host>,
    imageSize: OpenCvSharp.Size,
    aspectRatio: number | StrongNumeric<DoubleHost>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_initCameraMatrix2D_array(
    objectPoints: HostArray<System.IntPtr>,
    opSize1: number | StrongNumeric<Int32Host>,
    opSize2: HostArray<number | StrongNumeric<Int32Host>>,
    imagePoints: HostArray<System.IntPtr>,
    ipSize1: number | StrongNumeric<Int32Host>,
    ipSize2: HostArray<number | StrongNumeric<Int32Host>>,
    imageSize: OpenCvSharp.Size,
    aspectRatio: number | StrongNumeric<DoubleHost>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_findChessboardCorners_InputArray(
    image: System.IntPtr,
    patternSize: OpenCvSharp.Size,
    corners: System.IntPtr,
    flags: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_findChessboardCorners_vector(
    image: System.IntPtr,
    patternSize: OpenCvSharp.Size,
    corners: System.IntPtr,
    flags: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_checkChessboard(
    img: System.IntPtr,
    size: OpenCvSharp.Size,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_findChessboardCornersSB_OutputArray(
    image: System.IntPtr,
    patternSize: OpenCvSharp.Size,
    corners: System.IntPtr,
    flags: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_findChessboardCornersSB_vector(
    image: System.IntPtr,
    patternSize: OpenCvSharp.Size,
    corners: System.IntPtr,
    flags: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_find4QuadCornerSubpix_InputArray(
    img: System.IntPtr,
    corners: System.IntPtr,
    regionSize: OpenCvSharp.Size,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_find4QuadCornerSubpix_vector(
    img: System.IntPtr,
    corners: System.IntPtr,
    regionSize: OpenCvSharp.Size,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_drawChessboardCorners_InputArray(
    image: System.IntPtr,
    patternSize: OpenCvSharp.Size,
    corners: System.IntPtr,
    patternWasFound: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_drawChessboardCorners_array(
    image: System.IntPtr,
    patternSize: OpenCvSharp.Size,
    corners: HostArray<OpenCvSharp.Point2f>,
    cornersLength: number | StrongNumeric<Int32Host>,
    patternWasFound: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_drawFrameAxes(
    image: System.IntPtr,
    cameraMatrix: System.IntPtr,
    distCoeffs: System.IntPtr,
    rvec: System.IntPtr,
    tvec: System.IntPtr,
    length: number | StrongNumeric<SingleHost>,
    thickness: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_findCirclesGrid_InputArray(
    image: System.IntPtr,
    patternSize: OpenCvSharp.Size,
    centers: System.IntPtr,
    flags: number | StrongNumeric<Int32Host>,
    blobDetector: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_findCirclesGrid_vector(
    image: System.IntPtr,
    patternSize: OpenCvSharp.Size,
    centers: System.IntPtr,
    flags: number | StrongNumeric<Int32Host>,
    blobDetector: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_calibrateCamera_InputArray(
    objectPoints: HostArray<System.IntPtr>,
    objectPointsSize: number | StrongNumeric<Int32Host>,
    imagePoints: HostArray<System.IntPtr>,
    imagePointsSize: number | StrongNumeric<Int32Host>,
    imageSize: OpenCvSharp.Size,
    cameraMatrix: System.IntPtr,
    distCoeffs: System.IntPtr,
    rvecs: System.IntPtr,
    tvecs: System.IntPtr,
    flags: number | StrongNumeric<Int32Host>,
    criteria: OpenCvSharp.TermCriteria,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_calibrationMatrixValues_InputArray(
    cameraMatrix: System.IntPtr,
    imageSize: OpenCvSharp.Size,
    apertureWidth: number | StrongNumeric<DoubleHost>,
    apertureHeight: number | StrongNumeric<DoubleHost>,
    fovx: HostVariableOut<number>,
    fovy: HostVariableOut<number>,
    focalLength: HostVariableOut<number>,
    principalPoint: HostVariableOut<OpenCvSharp.Point2d>,
    aspectRatio: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_stereoCalibrate_InputArray(
    objectPoints: HostArray<System.IntPtr>,
    opSize: number | StrongNumeric<Int32Host>,
    imagePoints1: HostArray<System.IntPtr>,
    ip1Size: number | StrongNumeric<Int32Host>,
    imagePoints2: HostArray<System.IntPtr>,
    ip2Size: number | StrongNumeric<Int32Host>,
    cameraMatrix1: System.IntPtr,
    distCoeffs1: System.IntPtr,
    cameraMatrix2: System.IntPtr,
    distCoeffs2: System.IntPtr,
    imageSize: OpenCvSharp.Size,
    r: System.IntPtr,
    t: System.IntPtr,
    e: System.IntPtr,
    f: System.IntPtr,
    flags: number | StrongNumeric<Int32Host>,
    criteria: OpenCvSharp.TermCriteria,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_stereoRectify_InputArray(
    cameraMatrix1: System.IntPtr,
    distCoeffs1: System.IntPtr,
    cameraMatrix2: System.IntPtr,
    distCoeffs2: System.IntPtr,
    imageSize: OpenCvSharp.Size,
    r: System.IntPtr,
    t: System.IntPtr,
    r1: System.IntPtr,
    r2: System.IntPtr,
    p1: System.IntPtr,
    p2: System.IntPtr,
    q: System.IntPtr,
    flags: number | StrongNumeric<Int32Host>,
    alpha: number | StrongNumeric<DoubleHost>,
    newImageSize: OpenCvSharp.Size,
    validPixROI1: HostVariableOut<OpenCvSharp.Rect>,
    validPixROI2: HostVariableOut<OpenCvSharp.Rect>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_stereoRectifyUncalibrated_InputArray(
    points1: System.IntPtr,
    points2: System.IntPtr,
    f: System.IntPtr,
    imgSize: OpenCvSharp.Size,
    h1: System.IntPtr,
    h2: System.IntPtr,
    threshold: number | StrongNumeric<DoubleHost>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_rectify3Collinear_InputArray(
    cameraMatrix1: System.IntPtr,
    distCoeffs1: System.IntPtr,
    cameraMatrix2: System.IntPtr,
    distCoeffs2: System.IntPtr,
    cameraMatrix3: System.IntPtr,
    distCoeffs3: System.IntPtr,
    imgpt1: HostArray<System.IntPtr>,
    imgpt1Size: number | StrongNumeric<Int32Host>,
    imgpt3: HostArray<System.IntPtr>,
    imgpt3Size: number | StrongNumeric<Int32Host>,
    imageSize: OpenCvSharp.Size,
    r12: System.IntPtr,
    t12: System.IntPtr,
    r13: System.IntPtr,
    t13: System.IntPtr,
    r1: System.IntPtr,
    r2: System.IntPtr,
    r3: System.IntPtr,
    p1: System.IntPtr,
    p2: System.IntPtr,
    p3: System.IntPtr,
    q: System.IntPtr,
    alpha: number | StrongNumeric<DoubleHost>,
    newImgSize: OpenCvSharp.Size,
    roi1: HostVariableOut<OpenCvSharp.Rect>,
    roi2: HostVariableOut<OpenCvSharp.Rect>,
    flags: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_getOptimalNewCameraMatrix_InputArray(
    cameraMatrix: System.IntPtr,
    distCoeffs: System.IntPtr,
    imageSize: OpenCvSharp.Size,
    alpha: number | StrongNumeric<DoubleHost>,
    newImgSize: OpenCvSharp.Size,
    validPixROI: HostVariableOut<OpenCvSharp.Rect>,
    centerPrincipalPoint: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_calibrateHandEye(
    r_gripper2baseMats: HostArray<System.IntPtr>,
    r_gripper2baseMatsSize: number | StrongNumeric<Int32Host>,
    t_gripper2baseMats: HostArray<System.IntPtr>,
    t_gripper2baseMatsSize: number | StrongNumeric<Int32Host>,
    r_target2camMats: HostArray<System.IntPtr>,
    r_target2camMatsSize: number | StrongNumeric<Int32Host>,
    t_target2camMats: HostArray<System.IntPtr>,
    t_target2camMatsSize: number | StrongNumeric<Int32Host>,
    r_cam2gripper: System.IntPtr,
    t_cam2gripper: System.IntPtr,
    method: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_calibrateRobotWorldHandEye_OutputArray(
    r_world2camMats: HostArray<System.IntPtr>,
    r_world2camMatsSize: number | StrongNumeric<Int32Host>,
    t_world2camMats: HostArray<System.IntPtr>,
    t_world2camMatsSize: number | StrongNumeric<Int32Host>,
    r_base2gripperMats: HostArray<System.IntPtr>,
    r_base2gripperMatsSize: number | StrongNumeric<Int32Host>,
    t_base2gripperMats: HostArray<System.IntPtr>,
    t_base2gripperMatsSize: number | StrongNumeric<Int32Host>,
    r_base2world: System.IntPtr,
    t_base2world: System.IntPtr,
    r_gripper2cam: System.IntPtr,
    t_gripper2cam: System.IntPtr,
    method: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_calibrateRobotWorldHandEye_Pointer(
    r_world2camMats: HostArray<System.IntPtr>,
    r_world2camMatsSize: number | StrongNumeric<Int32Host>,
    t_world2camMats: HostArray<System.IntPtr>,
    t_world2camMatsSize: number | StrongNumeric<Int32Host>,
    r_base2gripperMats: HostArray<System.IntPtr>,
    r_base2gripperMatsSize: number | StrongNumeric<Int32Host>,
    t_base2gripperMats: HostArray<System.IntPtr>,
    t_base2gripperMatsSize: number | StrongNumeric<Int32Host>,
    r_base2world: HostArray<number | StrongNumeric<DoubleHost>>,
    t_base2world: HostArray<number | StrongNumeric<DoubleHost>>,
    r_gripper2cam: HostArray<number | StrongNumeric<DoubleHost>>,
    t_gripper2cam: HostArray<number | StrongNumeric<DoubleHost>>,
    method: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_convertPointsToHomogeneous_InputArray(
    src: System.IntPtr,
    dst: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_convertPointsToHomogeneous_array1(
    src: HostArray<OpenCvSharp.Vec2f>,
    dst: HostArray<OpenCvSharp.Vec3f>,
    length: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_convertPointsToHomogeneous_array2(
    src: HostArray<OpenCvSharp.Vec3f>,
    dst: HostArray<OpenCvSharp.Vec4f>,
    length: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_convertPointsFromHomogeneous_InputArray(
    src: System.IntPtr,
    dst: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_convertPointsFromHomogeneous_array1(
    src: HostArray<OpenCvSharp.Vec3f>,
    dst: HostArray<OpenCvSharp.Vec2f>,
    length: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_convertPointsFromHomogeneous_array2(
    src: HostArray<OpenCvSharp.Vec4f>,
    dst: HostArray<OpenCvSharp.Vec3f>,
    length: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_convertPointsHomogeneous(
    src: System.IntPtr,
    dst: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_findFundamentalMat_InputArray(
    points1: System.IntPtr,
    points2: System.IntPtr,
    method: number | StrongNumeric<Int32Host>,
    param1: number | StrongNumeric<DoubleHost>,
    param2: number | StrongNumeric<DoubleHost>,
    mask: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_findFundamentalMat_arrayF64(
    points1: HostArray<OpenCvSharp.Point2d>,
    points1Size: number | StrongNumeric<Int32Host>,
    points2: HostArray<OpenCvSharp.Point2d>,
    points2Size: number | StrongNumeric<Int32Host>,
    method: number | StrongNumeric<Int32Host>,
    param1: number | StrongNumeric<DoubleHost>,
    param2: number | StrongNumeric<DoubleHost>,
    mask: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_findFundamentalMat_arrayF32(
    points1: HostArray<OpenCvSharp.Point2f>,
    points1Size: number | StrongNumeric<Int32Host>,
    points2: HostArray<OpenCvSharp.Point2f>,
    points2Size: number | StrongNumeric<Int32Host>,
    method: number | StrongNumeric<Int32Host>,
    param1: number | StrongNumeric<DoubleHost>,
    param2: number | StrongNumeric<DoubleHost>,
    mask: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_computeCorrespondEpilines_InputArray(
    points: System.IntPtr,
    whichImage: number | StrongNumeric<Int32Host>,
    f: System.IntPtr,
    lines: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_triangulatePoints_InputArray(
    projMatr1: System.IntPtr,
    projMatr2: System.IntPtr,
    projPoints1: System.IntPtr,
    projPoints2: System.IntPtr,
    points4D: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_correctMatches_InputArray(
    f: System.IntPtr,
    points1: System.IntPtr,
    points2: System.IntPtr,
    newPoints1: System.IntPtr,
    newPoints2: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_filterSpeckles(
    img: System.IntPtr,
    newVal: number | StrongNumeric<DoubleHost>,
    maxSpeckleSize: number | StrongNumeric<Int32Host>,
    maxDiff: number | StrongNumeric<DoubleHost>,
    buf: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_getValidDisparityROI(
    roi1: OpenCvSharp.Rect,
    roi2: OpenCvSharp.Rect,
    minDisparity: number | StrongNumeric<Int32Host>,
    numberOfDisparities: number | StrongNumeric<Int32Host>,
    sadWindowSize: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<OpenCvSharp.Rect>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_validateDisparity(
    disparity: System.IntPtr,
    cost: System.IntPtr,
    minDisparity: number | StrongNumeric<Int32Host>,
    numberOfDisparities: number | StrongNumeric<Int32Host>,
    disp12MaxDisp: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_reprojectImageTo3D(
    disparity: System.IntPtr,
    _3dImage: System.IntPtr,
    q: System.IntPtr,
    handleMissingValues: number | StrongNumeric<Int32Host>,
    ddepth: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_estimateAffine3D(
    src: System.IntPtr,
    dst: System.IntPtr,
    outVal: System.IntPtr,
    inliers: System.IntPtr,
    ransacThreshold: number | StrongNumeric<DoubleHost>,
    confidence: number | StrongNumeric<DoubleHost>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_sampsonDistance_InputArray(
    pt1: System.IntPtr,
    pt2: System.IntPtr,
    f: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_estimateAffine2D(
    from: System.IntPtr,
    to: System.IntPtr,
    inliers: System.IntPtr,
    method: number | StrongNumeric<Int32Host>,
    ransacReprojThreshold: number | StrongNumeric<DoubleHost>,
    maxIters: number | StrongNumeric<UInt64Host>,
    confidence: number | StrongNumeric<DoubleHost>,
    refineIters: number | StrongNumeric<UInt64Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_estimateAffinePartial2D(
    from: System.IntPtr,
    to: System.IntPtr,
    inliers: System.IntPtr,
    method: number | StrongNumeric<Int32Host>,
    ransacReprojThreshold: number | StrongNumeric<DoubleHost>,
    maxIters: number | StrongNumeric<UInt64Host>,
    confidence: number | StrongNumeric<DoubleHost>,
    refineIters: number | StrongNumeric<UInt64Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_decomposeHomographyMat(
    h: System.IntPtr,
    k: System.IntPtr,
    rotations: System.IntPtr,
    translations: System.IntPtr,
    normals: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_filterHomographyDecompByVisibleRefpoints(
    rotations: System.IntPtr,
    normals: System.IntPtr,
    beforePoints: System.IntPtr,
    afterPoints: System.IntPtr,
    possibleSolutions: System.IntPtr,
    pointsMask: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_undistort(
    src: System.IntPtr,
    dst: System.IntPtr,
    cameraMatrix: System.IntPtr,
    distCoeffs: System.IntPtr,
    newCameraMatrix: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_initUndistortRectifyMap(
    cameraMatrix: System.IntPtr,
    distCoeffs: System.IntPtr,
    r: System.IntPtr,
    newCameraMatrix: System.IntPtr,
    size: OpenCvSharp.Size,
    m1type: OpenCvSharp.MatType,
    map1: System.IntPtr,
    map2: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_initWideAngleProjMap(
    cameraMatrix: System.IntPtr,
    distCoeffs: System.IntPtr,
    imageSize: OpenCvSharp.Size,
    destImageWidth: number | StrongNumeric<Int32Host>,
    m1type: OpenCvSharp.MatType,
    map1: System.IntPtr,
    map2: System.IntPtr,
    projType: number | StrongNumeric<Int32Host>,
    alpha: number | StrongNumeric<DoubleHost>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_getDefaultNewCameraMatrix(
    cameraMatrix: System.IntPtr,
    imgsize: OpenCvSharp.Size,
    centerPrincipalPoint: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_undistortPoints(
    src: System.IntPtr,
    dst: System.IntPtr,
    cameraMatrix: System.IntPtr,
    distCoeffs: System.IntPtr,
    r: System.IntPtr,
    p: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_undistortPointsIter(
    src: System.IntPtr,
    dst: System.IntPtr,
    cameraMatrix: System.IntPtr,
    distCoeffs: System.IntPtr,
    r: System.IntPtr,
    p: System.IntPtr,
    criteria: OpenCvSharp.TermCriteria
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_recoverPose_InputArray1(
    e: System.IntPtr,
    points1: System.IntPtr,
    points2: System.IntPtr,
    cameraMatrix: System.IntPtr,
    r: System.IntPtr,
    p: System.IntPtr,
    mask: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_recoverPose_InputArray2(
    e: System.IntPtr,
    points1: System.IntPtr,
    points2: System.IntPtr,
    r: System.IntPtr,
    p: System.IntPtr,
    focal: number | StrongNumeric<DoubleHost>,
    pp: OpenCvSharp.Point2d,
    mask: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_recoverPose_InputArray3(
    e: System.IntPtr,
    points1: System.IntPtr,
    points2: System.IntPtr,
    cameraMatrix: System.IntPtr,
    r: System.IntPtr,
    p: System.IntPtr,
    distanceTresh: number | StrongNumeric<DoubleHost>,
    mask: System.IntPtr,
    triangulatedPoints: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_findEssentialMat_InputArray1(
    points1: System.IntPtr,
    points2: System.IntPtr,
    cameraMatrix: System.IntPtr,
    method: number | StrongNumeric<Int32Host>,
    prob: number | StrongNumeric<DoubleHost>,
    threshold: number | StrongNumeric<DoubleHost>,
    mask: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_findEssentialMat_InputArray2(
    points1: System.IntPtr,
    points2: System.IntPtr,
    focal: number | StrongNumeric<DoubleHost>,
    pp: OpenCvSharp.Point2d,
    method: number | StrongNumeric<Int32Host>,
    prob: number | StrongNumeric<DoubleHost>,
    threshold: number | StrongNumeric<DoubleHost>,
    mask: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_fisheye_projectPoints2(
    objectPoints: System.IntPtr,
    imagePoints: System.IntPtr,
    rvec: System.IntPtr,
    tvec: System.IntPtr,
    k: System.IntPtr,
    d: System.IntPtr,
    alpha: number | StrongNumeric<DoubleHost>,
    jacobian: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_fisheye_distortPoints(
    undistorted: System.IntPtr,
    distorted: System.IntPtr,
    k: System.IntPtr,
    d: System.IntPtr,
    alpha: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_fisheye_undistortPoints(
    distorted: System.IntPtr,
    undistorted: System.IntPtr,
    k: System.IntPtr,
    d: System.IntPtr,
    r: System.IntPtr,
    p: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_fisheye_initUndistortRectifyMap(
    k: System.IntPtr,
    d: System.IntPtr,
    r: System.IntPtr,
    p: System.IntPtr,
    size: OpenCvSharp.Size,
    m1type: number | StrongNumeric<Int32Host>,
    map1: System.IntPtr,
    map2: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_fisheye_undistortImage(
    distorted: System.IntPtr,
    undistorted: System.IntPtr,
    k: System.IntPtr,
    d: System.IntPtr,
    knew: System.IntPtr,
    newSize: OpenCvSharp.Size
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_fisheye_estimateNewCameraMatrixForUndistortRectify(
    k: System.IntPtr,
    d: System.IntPtr,
    image_size: OpenCvSharp.Size,
    r: System.IntPtr,
    p: System.IntPtr,
    balance: number | StrongNumeric<DoubleHost>,
    newSize: OpenCvSharp.Size,
    fov_scale: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_fisheye_calibrate(
    objectPoints: System.IntPtr,
    imagePoints: System.IntPtr,
    imageSize: OpenCvSharp.Size,
    k: System.IntPtr,
    d: System.IntPtr,
    rvecs: System.IntPtr,
    tvecs: System.IntPtr,
    flags: number | StrongNumeric<Int32Host>,
    criteria: OpenCvSharp.TermCriteria,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_fisheye_stereoRectify(
    k1: System.IntPtr,
    d1: System.IntPtr,
    k2: System.IntPtr,
    d2: System.IntPtr,
    imageSize: OpenCvSharp.Size,
    r: System.IntPtr,
    tvec: System.IntPtr,
    r1: System.IntPtr,
    r2: System.IntPtr,
    p1: System.IntPtr,
    p2: System.IntPtr,
    q: System.IntPtr,
    flags: number | StrongNumeric<Int32Host>,
    newImageSize: OpenCvSharp.Size,
    balance: number | StrongNumeric<DoubleHost>,
    fov_scale: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_fisheye_stereoCalibrate(
    objectPoints: System.IntPtr,
    imagePoints1: System.IntPtr,
    imagePoints2: System.IntPtr,
    k1: System.IntPtr,
    d1: System.IntPtr,
    k2: System.IntPtr,
    d2: System.IntPtr,
    imageSize: OpenCvSharp.Size,
    r: System.IntPtr,
    t: System.IntPtr,
    flags: number | StrongNumeric<Int32Host>,
    criteria: OpenCvSharp.TermCriteria,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_StereoMatcher_compute(
    obj: System.IntPtr,
    left: System.IntPtr,
    right: System.IntPtr,
    disparity: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_StereoMatcher_getMinDisparity(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_StereoMatcher_setMinDisparity(
    obj: System.IntPtr,
    value: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_StereoMatcher_getNumDisparities(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_StereoMatcher_setNumDisparities(
    obj: System.IntPtr,
    value: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_StereoMatcher_getBlockSize(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_StereoMatcher_setBlockSize(
    obj: System.IntPtr,
    value: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_StereoMatcher_getSpeckleWindowSize(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_StereoMatcher_setSpeckleWindowSize(
    obj: System.IntPtr,
    value: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_StereoMatcher_getSpeckleRange(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_StereoMatcher_setSpeckleRange(
    obj: System.IntPtr,
    value: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_StereoMatcher_getDisp12MaxDiff(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_StereoMatcher_setDisp12MaxDiff(
    obj: System.IntPtr,
    value: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_Ptr_StereoBM_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_Ptr_StereoBM_get(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_StereoBM_create(
    numDisparities: number | StrongNumeric<Int32Host>,
    blockSize: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_StereoBM_getPreFilterType(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_StereoBM_setPreFilterType(
    obj: System.IntPtr,
    value: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_StereoBM_getPreFilterSize(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_StereoBM_setPreFilterSize(
    obj: System.IntPtr,
    value: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_StereoBM_getPreFilterCap(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_StereoBM_setPreFilterCap(
    obj: System.IntPtr,
    value: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_StereoBM_getTextureThreshold(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_StereoBM_setTextureThreshold(
    obj: System.IntPtr,
    value: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_StereoBM_getUniquenessRatio(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_StereoBM_setUniquenessRatio(
    obj: System.IntPtr,
    value: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_StereoBM_getSmallerBlockSize(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_StereoBM_setSmallerBlockSize(
    obj: System.IntPtr,
    value: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_StereoBM_getROI1(
    obj: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Rect>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_StereoBM_setROI1(
    obj: System.IntPtr,
    value: OpenCvSharp.Rect
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_StereoBM_getROI2(
    obj: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Rect>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_StereoBM_setROI2(
    obj: System.IntPtr,
    value: OpenCvSharp.Rect
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_Ptr_StereoSGBM_get(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_Ptr_StereoSGBM_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_StereoSGBM_create(
    minDisparity: number | StrongNumeric<Int32Host>,
    numDisparities: number | StrongNumeric<Int32Host>,
    blockSize: number | StrongNumeric<Int32Host>,
    p1: number | StrongNumeric<Int32Host>,
    p2: number | StrongNumeric<Int32Host>,
    disp12MaxDiff: number | StrongNumeric<Int32Host>,
    preFilterCap: number | StrongNumeric<Int32Host>,
    uniquenessRatio: number | StrongNumeric<Int32Host>,
    speckleWindowSize: number | StrongNumeric<Int32Host>,
    speckleRange: number | StrongNumeric<Int32Host>,
    mode: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_StereoSGBM_getPreFilterCap(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_StereoSGBM_setPreFilterCap(
    obj: System.IntPtr,
    value: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_StereoSGBM_getUniquenessRatio(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_StereoSGBM_setUniquenessRatio(
    obj: System.IntPtr,
    value: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_StereoSGBM_getP1(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_StereoSGBM_setP1(
    obj: System.IntPtr,
    value: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_StereoSGBM_getP2(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_StereoSGBM_setP2(
    obj: System.IntPtr,
    value: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_StereoSGBM_getMode(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  calib3d_StereoSGBM_setMode(
    obj: System.IntPtr,
    value: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_RotatedRect_byThreeVertexPoints(
    p1: OpenCvSharp.Point2f,
    p2: OpenCvSharp.Point2f,
    p3: OpenCvSharp.Point2f
  ): OpenCvSharp.RotatedRect;
  core_setBreakOnError(flag: number | StrongNumeric<Int32Host>): number;
  redirectError(
    errCallback: OpenCvSharp.CvErrorCallback,
    userdata: System.IntPtr,
    prevUserdata: HostVariableRef<System.IntPtr>
  ): System.IntPtr;
  core_setNumThreads(
    nthreads: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_getNumThreads(returnValue: HostVariableOut<number>): OpenCvSharp.Internal.ExceptionStatus;
  core_getThreadNum(returnValue: HostVariableOut<number>): OpenCvSharp.Internal.ExceptionStatus;
  core_getBuildInformation(buf: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  core_getVersionMajor(returnValue: HostVariableOut<number>): OpenCvSharp.Internal.ExceptionStatus;
  core_getVersionMinor(returnValue: HostVariableOut<number>): OpenCvSharp.Internal.ExceptionStatus;
  core_getVersionRevision(
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_getTickCount(returnValue: HostVariableOut<number>): OpenCvSharp.Internal.ExceptionStatus;
  core_getTickFrequency(returnValue: HostVariableOut<number>): OpenCvSharp.Internal.ExceptionStatus;
  core_getCPUTickCount(returnValue: HostVariableOut<number>): OpenCvSharp.Internal.ExceptionStatus;
  core_checkHardwareSupport(
    feature: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_getHardwareFeatureName(
    feature: number | StrongNumeric<Int32Host>,
    buf: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_getCPUFeaturesLine(buf: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  core_getNumberOfCPUs(returnValue: HostVariableOut<number>): OpenCvSharp.Internal.ExceptionStatus;
  core_setUseOptimized(
    onoff: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_useOptimized(returnValue: HostVariableOut<number>): OpenCvSharp.Internal.ExceptionStatus;
  core_format(
    mtx: System.IntPtr,
    fmt: number | StrongNumeric<Int32Host>,
    buf: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_logger_setLogLevel(
    logLevel: EnumInput<OpenCvSharp.LogLevel>,
    returnValue: HostVariableOut<OpenCvSharp.LogLevel>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_logger_getLogLevel(
    returnValue: HostVariableOut<OpenCvSharp.LogLevel>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_borderInterpolate(
    p: number | StrongNumeric<Int32Host>,
    len: number | StrongNumeric<Int32Host>,
    borderType: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_copyMakeBorder(
    src: System.IntPtr,
    dst: System.IntPtr,
    top: number | StrongNumeric<Int32Host>,
    bottom: number | StrongNumeric<Int32Host>,
    left: number | StrongNumeric<Int32Host>,
    right: number | StrongNumeric<Int32Host>,
    borderType: number | StrongNumeric<Int32Host>,
    value: OpenCvSharp.Scalar
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_add(
    src1: System.IntPtr,
    src2: System.IntPtr,
    dst: System.IntPtr,
    mask: System.IntPtr,
    dtype: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_subtract_InputArray2(
    src1: System.IntPtr,
    src2: System.IntPtr,
    dst: System.IntPtr,
    mask: System.IntPtr,
    dtype: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_subtract_InputArrayScalar(
    src1: System.IntPtr,
    src2: OpenCvSharp.Scalar,
    dst: System.IntPtr,
    mask: System.IntPtr,
    dtype: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_subtract_ScalarInputArray(
    src1: OpenCvSharp.Scalar,
    src2: System.IntPtr,
    dst: System.IntPtr,
    mask: System.IntPtr,
    dtype: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_multiply(
    src1: System.IntPtr,
    src2: System.IntPtr,
    dst: System.IntPtr,
    scale: number | StrongNumeric<DoubleHost>,
    dtype: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_divide1(
    scale: number | StrongNumeric<DoubleHost>,
    src2: System.IntPtr,
    dst: System.IntPtr,
    dtype: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_divide2(
    src1: System.IntPtr,
    src2: System.IntPtr,
    dst: System.IntPtr,
    scale: number | StrongNumeric<DoubleHost>,
    dtype: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_scaleAdd(
    src1: System.IntPtr,
    alpha: number | StrongNumeric<DoubleHost>,
    src2: System.IntPtr,
    dst: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_addWeighted(
    src1: System.IntPtr,
    alpha: number | StrongNumeric<DoubleHost>,
    src2: System.IntPtr,
    beta: number | StrongNumeric<DoubleHost>,
    gamma: number | StrongNumeric<DoubleHost>,
    dst: System.IntPtr,
    dtype: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_convertScaleAbs(
    src: System.IntPtr,
    dst: System.IntPtr,
    alpha: number | StrongNumeric<DoubleHost>,
    beta: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_convertFp16(src: System.IntPtr, dst: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  core_LUT(
    src: System.IntPtr,
    lut: System.IntPtr,
    dst: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_sum(
    src: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Scalar>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_countNonZero(
    src: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_findNonZero(src: System.IntPtr, idx: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  core_mean(
    src: System.IntPtr,
    mask: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Scalar>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_meanStdDev_OutputArray(
    src: System.IntPtr,
    mean: System.IntPtr,
    stddev: System.IntPtr,
    mask: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_meanStdDev_Scalar(
    src: System.IntPtr,
    mean: HostVariableOut<OpenCvSharp.Scalar>,
    stddev: HostVariableOut<OpenCvSharp.Scalar>,
    mask: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_norm1(
    src1: System.IntPtr,
    normType: number | StrongNumeric<Int32Host>,
    mask: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_norm2(
    src1: System.IntPtr,
    src2: System.IntPtr,
    normType: number | StrongNumeric<Int32Host>,
    mask: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_PSNR(
    src1: System.IntPtr,
    src2: System.IntPtr,
    r: number | StrongNumeric<DoubleHost>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_batchDistance(
    src1: System.IntPtr,
    src2: System.IntPtr,
    dist: System.IntPtr,
    dtype: number | StrongNumeric<Int32Host>,
    nidx: System.IntPtr,
    normType: number | StrongNumeric<Int32Host>,
    k: number | StrongNumeric<Int32Host>,
    mask: System.IntPtr,
    update: number | StrongNumeric<Int32Host>,
    crosscheck: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_normalize(
    src: System.IntPtr,
    dst: System.IntPtr,
    alpha: number | StrongNumeric<DoubleHost>,
    beta: number | StrongNumeric<DoubleHost>,
    normType: number | StrongNumeric<Int32Host>,
    dtype: number | StrongNumeric<Int32Host>,
    mask: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_reduceArgMax(
    src: System.IntPtr,
    dst: System.IntPtr,
    axis: number | StrongNumeric<Int32Host>,
    lastIndex: boolean
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_reduceArgMin(
    src: System.IntPtr,
    dst: System.IntPtr,
    axis: number | StrongNumeric<Int32Host>,
    lastIndex: boolean
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_minMaxLoc1(
    src: System.IntPtr,
    minVal: HostVariableOut<number>,
    maxVal: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_minMaxLoc2(
    src: System.IntPtr,
    minVal: HostVariableOut<number>,
    maxVal: HostVariableOut<number>,
    minLoc: HostVariableOut<OpenCvSharp.Point>,
    maxLoc: HostVariableOut<OpenCvSharp.Point>,
    mask: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_minMaxIdx1(
    src: System.IntPtr,
    minVal: HostVariableOut<number>,
    maxVal: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_minMaxIdx2(
    src: System.IntPtr,
    minVal: HostVariableOut<number>,
    maxVal: HostVariableOut<number>,
    minIdx: HostArray<number | StrongNumeric<Int32Host>>,
    maxIdx: HostArray<number | StrongNumeric<Int32Host>>,
    mask: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_reduce(
    src: System.IntPtr,
    dst: System.IntPtr,
    dim: number | StrongNumeric<Int32Host>,
    rtype: number | StrongNumeric<Int32Host>,
    dtype: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_merge(
    mv: HostArray<System.IntPtr>,
    count: number | StrongNumeric<UInt32Host>,
    dst: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_split(src: System.IntPtr, mv: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  core_mixChannels(
    src: HostArray<System.IntPtr>,
    nsrcs: number | StrongNumeric<UInt32Host>,
    dst: HostArray<System.IntPtr>,
    ndsts: number | StrongNumeric<UInt32Host>,
    fromTo: HostArray<number | StrongNumeric<Int32Host>>,
    npairs: number | StrongNumeric<UInt32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_extractChannel(
    src: System.IntPtr,
    dst: System.IntPtr,
    coi: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_insertChannel(
    src: System.IntPtr,
    dst: System.IntPtr,
    coi: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_flip(
    src: System.IntPtr,
    dst: System.IntPtr,
    flipCode: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_rotate(
    src: System.IntPtr,
    dst: System.IntPtr,
    rotateCode: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_repeat1(
    src: System.IntPtr,
    ny: number | StrongNumeric<Int32Host>,
    nx: number | StrongNumeric<Int32Host>,
    dst: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_repeat2(
    src: System.IntPtr,
    ny: number | StrongNumeric<Int32Host>,
    nx: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_hconcat1(
    src: HostArray<System.IntPtr>,
    nsrc: number | StrongNumeric<UInt32Host>,
    dst: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_hconcat2(
    src1: System.IntPtr,
    src2: System.IntPtr,
    dst: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_vconcat1(
    src: HostArray<System.IntPtr>,
    nsrc: number | StrongNumeric<UInt32Host>,
    dst: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_vconcat2(
    src1: System.IntPtr,
    src2: System.IntPtr,
    dst: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_bitwise_and(
    src1: System.IntPtr,
    src2: System.IntPtr,
    dst: System.IntPtr,
    mask: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_bitwise_or(
    src1: System.IntPtr,
    src2: System.IntPtr,
    dst: System.IntPtr,
    mask: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_bitwise_xor(
    src1: System.IntPtr,
    src2: System.IntPtr,
    dst: System.IntPtr,
    mask: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_bitwise_not(
    src: System.IntPtr,
    dst: System.IntPtr,
    mask: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_absdiff(
    src1: System.IntPtr,
    src2: System.IntPtr,
    dst: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_copyTo(
    src: System.IntPtr,
    dst: System.IntPtr,
    mask: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_inRange_InputArray(
    src: System.IntPtr,
    lowerb: System.IntPtr,
    upperb: System.IntPtr,
    dst: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_inRange_Scalar(
    src: System.IntPtr,
    lowerb: OpenCvSharp.Scalar,
    upperb: OpenCvSharp.Scalar,
    dst: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_compare(
    src1: System.IntPtr,
    src2: System.IntPtr,
    dst: System.IntPtr,
    cmpop: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_min1(
    src1: System.IntPtr,
    src2: System.IntPtr,
    dst: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_min_MatMat(
    src1: System.IntPtr,
    src2: System.IntPtr,
    dst: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_min_MatDouble(
    src1: System.IntPtr,
    src2: number | StrongNumeric<DoubleHost>,
    dst: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_max1(
    src1: System.IntPtr,
    src2: System.IntPtr,
    dst: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_max_MatMat(
    src1: System.IntPtr,
    src2: System.IntPtr,
    dst: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_max_MatDouble(
    src1: System.IntPtr,
    src2: number | StrongNumeric<DoubleHost>,
    dst: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_sqrt(src: System.IntPtr, dst: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  core_pow_Mat(
    src: System.IntPtr,
    power: number | StrongNumeric<DoubleHost>,
    dst: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_exp_Mat(src: System.IntPtr, dst: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  core_log_Mat(src: System.IntPtr, dst: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  core_polarToCart(
    magnitude: System.IntPtr,
    angle: System.IntPtr,
    x: System.IntPtr,
    y: System.IntPtr,
    angleInDegrees: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_cartToPolar(
    x: System.IntPtr,
    y: System.IntPtr,
    magnitude: System.IntPtr,
    angle: System.IntPtr,
    angleInDegrees: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_phase(
    x: System.IntPtr,
    y: System.IntPtr,
    angle: System.IntPtr,
    angleInDegrees: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_magnitude_Mat(
    x: System.IntPtr,
    y: System.IntPtr,
    magnitude: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_checkRange(
    a: System.IntPtr,
    quiet: number | StrongNumeric<Int32Host>,
    pos: HostVariableOut<OpenCvSharp.Point>,
    minVal: number | StrongNumeric<DoubleHost>,
    maxVal: number | StrongNumeric<DoubleHost>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_patchNaNs(
    a: System.IntPtr,
    val: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_gemm(
    src1: System.IntPtr,
    src2: System.IntPtr,
    alpha: number | StrongNumeric<DoubleHost>,
    src3: System.IntPtr,
    gamma: number | StrongNumeric<DoubleHost>,
    dst: System.IntPtr,
    flags: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_mulTransposed(
    src: System.IntPtr,
    dst: System.IntPtr,
    aTa: number | StrongNumeric<Int32Host>,
    delta: System.IntPtr,
    scale: number | StrongNumeric<DoubleHost>,
    dtype: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_transpose(src: System.IntPtr, dst: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  core_transform(
    src: System.IntPtr,
    dst: System.IntPtr,
    m: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_perspectiveTransform(
    src: System.IntPtr,
    dst: System.IntPtr,
    m: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_perspectiveTransform_Mat(
    src: System.IntPtr,
    dst: System.IntPtr,
    m: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_perspectiveTransform_Point2f(
    src: System.IntPtr,
    srcLength: number | StrongNumeric<Int32Host>,
    dst: System.IntPtr,
    dstLength: number | StrongNumeric<Int32Host>,
    m: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_perspectiveTransform_Point2d(
    src: System.IntPtr,
    srcLength: number | StrongNumeric<Int32Host>,
    dst: System.IntPtr,
    dstLength: number | StrongNumeric<Int32Host>,
    m: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_perspectiveTransform_Point3f(
    src: System.IntPtr,
    srcLength: number | StrongNumeric<Int32Host>,
    dst: System.IntPtr,
    dstLength: number | StrongNumeric<Int32Host>,
    m: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_perspectiveTransform_Point3d(
    src: System.IntPtr,
    srcLength: number | StrongNumeric<Int32Host>,
    dst: System.IntPtr,
    dstLength: number | StrongNumeric<Int32Host>,
    m: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_completeSymm(
    mtx: System.IntPtr,
    lowerToUpper: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_setIdentity(mtx: System.IntPtr, s: OpenCvSharp.Scalar): OpenCvSharp.Internal.ExceptionStatus;
  core_determinant(
    mtx: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_trace(
    mtx: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Scalar>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_invert(
    src: System.IntPtr,
    dst: System.IntPtr,
    flags: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_solve(
    src1: System.IntPtr,
    src2: System.IntPtr,
    dst: System.IntPtr,
    flags: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_solveLP(
    func: System.IntPtr,
    constr: System.IntPtr,
    z: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_sort(
    src: System.IntPtr,
    dst: System.IntPtr,
    flags: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_sortIdx(
    src: System.IntPtr,
    dst: System.IntPtr,
    flags: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_solveCubic(
    coeffs: System.IntPtr,
    roots: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_solvePoly(
    coeffs: System.IntPtr,
    roots: System.IntPtr,
    maxIters: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_eigen(
    src: System.IntPtr,
    eigenvalues: System.IntPtr,
    eigenvectors: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_eigenNonSymmetric(
    src: System.IntPtr,
    eigenvalues: System.IntPtr,
    eigenvectors: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_calcCovarMatrix_Mat(
    samples: HostArray<System.IntPtr>,
    nsamples: number | StrongNumeric<Int32Host>,
    covar: System.IntPtr,
    mean: System.IntPtr,
    flags: number | StrongNumeric<Int32Host>,
    ctype: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_calcCovarMatrix_InputArray(
    samples: System.IntPtr,
    covar: System.IntPtr,
    mean: System.IntPtr,
    flags: number | StrongNumeric<Int32Host>,
    ctype: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_PCACompute(
    data: System.IntPtr,
    mean: System.IntPtr,
    eigenvectors: System.IntPtr,
    maxComponents: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_PCACompute2(
    data: System.IntPtr,
    mean: System.IntPtr,
    eigenvectors: System.IntPtr,
    eigenvalues: System.IntPtr,
    maxComponents: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_PCAComputeVar(
    data: System.IntPtr,
    mean: System.IntPtr,
    eigenvectors: System.IntPtr,
    retainedVariance: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_PCAComputeVar2(
    data: System.IntPtr,
    mean: System.IntPtr,
    eigenvectors: System.IntPtr,
    eigenvalues: System.IntPtr,
    retainedVariance: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_PCAProject(
    data: System.IntPtr,
    mean: System.IntPtr,
    eigenvectors: System.IntPtr,
    result: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_PCABackProject(
    data: System.IntPtr,
    mean: System.IntPtr,
    eigenvectors: System.IntPtr,
    result: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_SVDecomp(
    src: System.IntPtr,
    w: System.IntPtr,
    u: System.IntPtr,
    vt: System.IntPtr,
    flags: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_SVBackSubst(
    w: System.IntPtr,
    u: System.IntPtr,
    vt: System.IntPtr,
    rhs: System.IntPtr,
    dst: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mahalanobis(
    v1: System.IntPtr,
    v2: System.IntPtr,
    icovar: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_dft(
    src: System.IntPtr,
    dst: System.IntPtr,
    flags: number | StrongNumeric<Int32Host>,
    nonzeroRows: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_idft(
    src: System.IntPtr,
    dst: System.IntPtr,
    flags: number | StrongNumeric<Int32Host>,
    nonzeroRows: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_dct(
    src: System.IntPtr,
    dst: System.IntPtr,
    flags: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_idct(
    src: System.IntPtr,
    dst: System.IntPtr,
    flags: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_mulSpectrums(
    a: System.IntPtr,
    b: System.IntPtr,
    c: System.IntPtr,
    flags: number | StrongNumeric<Int32Host>,
    conjB: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_getOptimalDFTSize(
    vecsize: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_theRNG_get(returnValue: HostVariableOut<number>): OpenCvSharp.Internal.ExceptionStatus;
  core_theRNG_set(
    returnValue: number | StrongNumeric<UInt64Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_randu_InputArray(
    dst: System.IntPtr,
    low: System.IntPtr,
    high: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_randu_Scalar(
    dst: System.IntPtr,
    low: OpenCvSharp.Scalar,
    high: OpenCvSharp.Scalar
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_randn_InputArray(
    dst: System.IntPtr,
    mean: System.IntPtr,
    stddev: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_randn_Scalar(
    dst: System.IntPtr,
    mean: OpenCvSharp.Scalar,
    stddev: OpenCvSharp.Scalar
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_randShuffle(
    dst: System.IntPtr,
    iterFactor: number | StrongNumeric<DoubleHost>,
    rng: HostVariableRef<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_randShuffle(
    dst: System.IntPtr,
    iterFactor: number | StrongNumeric<DoubleHost>,
    rng: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_kmeans(
    data: System.IntPtr,
    k: number | StrongNumeric<Int32Host>,
    bestLabels: System.IntPtr,
    criteria: OpenCvSharp.TermCriteria,
    attempts: number | StrongNumeric<Int32Host>,
    flags: number | StrongNumeric<Int32Host>,
    centers: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_cubeRoot(
    val: number | StrongNumeric<SingleHost>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_fastAtan2(
    y: number | StrongNumeric<SingleHost>,
    x: number | StrongNumeric<SingleHost>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Algorithm_write(obj: System.IntPtr, fs: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  core_Algorithm_read(obj: System.IntPtr, fn: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  core_Algorithm_empty(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Algorithm_save(obj: System.IntPtr, filename: string): OpenCvSharp.Internal.ExceptionStatus;
  core_Algorithm_getDefaultName(
    obj: System.IntPtr,
    buf: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_PCA_new1(returnValue: HostVariableOut<System.IntPtr>): OpenCvSharp.Internal.ExceptionStatus;
  core_PCA_new2(
    data: System.IntPtr,
    mean: System.IntPtr,
    flags: number | StrongNumeric<Int32Host>,
    maxComponents: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_PCA_new3(
    data: System.IntPtr,
    mean: System.IntPtr,
    flags: number | StrongNumeric<Int32Host>,
    retainedVariance: number | StrongNumeric<DoubleHost>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_PCA_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  core_PCA_operatorThis(
    obj: System.IntPtr,
    data: System.IntPtr,
    mean: System.IntPtr,
    flags: number | StrongNumeric<Int32Host>,
    maxComponents: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_PCA_computeVar(
    obj: System.IntPtr,
    data: System.IntPtr,
    mean: System.IntPtr,
    flags: number | StrongNumeric<Int32Host>,
    retainedVariance: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_PCA_project1(
    obj: System.IntPtr,
    vec: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_PCA_project2(
    obj: System.IntPtr,
    vec: System.IntPtr,
    result: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_PCA_backProject1(
    obj: System.IntPtr,
    vec: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_PCA_backProject2(
    obj: System.IntPtr,
    vec: System.IntPtr,
    result: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_PCA_eigenvectors(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_PCA_eigenvalues(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_PCA_mean(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_PCA_write(obj: System.IntPtr, fs: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  core_PCA_read(obj: System.IntPtr, fn: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  core_RNG_fill(
    state: HostVariableRef<number>,
    mat: System.IntPtr,
    distType: number | StrongNumeric<Int32Host>,
    a: System.IntPtr,
    b: System.IntPtr,
    saturateRange: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_RNG_gaussian(
    state: HostVariableRef<number>,
    sigma: number | StrongNumeric<DoubleHost>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_SVD_new1(returnValue: HostVariableOut<System.IntPtr>): OpenCvSharp.Internal.ExceptionStatus;
  core_SVD_new2(
    src: System.IntPtr,
    flags: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_SVD_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  core_SVD_operatorThis(
    obj: System.IntPtr,
    src: System.IntPtr,
    flags: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_SVD_backSubst(
    obj: System.IntPtr,
    rhs: System.IntPtr,
    dst: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_SVD_static_compute1(
    src: System.IntPtr,
    w: System.IntPtr,
    u: System.IntPtr,
    vt: System.IntPtr,
    flags: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_SVD_static_compute2(
    src: System.IntPtr,
    w: System.IntPtr,
    flags: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_SVD_static_backSubst(
    w: System.IntPtr,
    u: System.IntPtr,
    vt: System.IntPtr,
    rhs: System.IntPtr,
    dst: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_SVD_static_solveZ(
    src: System.IntPtr,
    dst: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_SVD_u(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_SVD_w(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_SVD_vt(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_LDA_new1(
    numComponents: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_LDA_new2(
    src: System.IntPtr,
    labels: System.IntPtr,
    numComponents: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_LDA_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  core_LDA_save_String(obj: System.IntPtr, filename: string): OpenCvSharp.Internal.ExceptionStatus;
  core_LDA_load_String(obj: System.IntPtr, filename: string): OpenCvSharp.Internal.ExceptionStatus;
  core_LDA_save_FileStorage(
    obj: System.IntPtr,
    fs: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_LDA_load_FileStorage(
    obj: System.IntPtr,
    node: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_LDA_compute(
    obj: System.IntPtr,
    src: System.IntPtr,
    labels: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_LDA_project(
    obj: System.IntPtr,
    src: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_LDA_reconstruct(
    obj: System.IntPtr,
    src: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_LDA_eigenvectors(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_LDA_eigenvalues(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_LDA_subspaceProject(
    w: System.IntPtr,
    mean: System.IntPtr,
    src: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_LDA_subspaceReconstruct(
    w: System.IntPtr,
    mean: System.IntPtr,
    src: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_new1(
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_delete(node: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_operatorThis_byString(
    obj: System.IntPtr,
    nodeName: string,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_operatorThis_byInt(
    obj: System.IntPtr,
    i: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_type(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_empty(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_isNone(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_isSeq(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_isMap(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_isInt(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_isReal(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_isString(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_isNamed(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_name(obj: System.IntPtr, buf: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_size(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_toInt(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_toFloat(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_toDouble(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_toString(
    obj: System.IntPtr,
    buf: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_toMat(obj: System.IntPtr, m: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_begin(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_end(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_readRaw(
    obj: System.IntPtr,
    fmt: string,
    vec: System.IntPtr,
    len: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_read_int(
    node: System.IntPtr,
    value: HostVariableOut<number>,
    defaultValue: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_read_float(
    node: System.IntPtr,
    value: HostVariableOut<number>,
    defaultValue: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_read_double(
    node: System.IntPtr,
    value: HostVariableOut<number>,
    defaultValue: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_read_String(
    node: System.IntPtr,
    value: System.IntPtr,
    defaultValue: string | null
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_read_Mat(
    node: System.IntPtr,
    mat: System.IntPtr,
    defaultMat: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_read_SparseMat(
    node: System.IntPtr,
    mat: System.IntPtr,
    defaultMat: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_read_vectorOfKeyPoint(
    node: System.IntPtr,
    keypoints: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_read_vectorOfDMatch(
    node: System.IntPtr,
    matches: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_read_Range(
    node: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Range>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_read_KeyPoint(
    node: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.KeyPoint>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_read_DMatch(
    node: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.DMatch>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_read_Point2i(
    node: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Point>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_read_Point2f(
    node: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Point2f>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_read_Point2d(
    node: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Point2d>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_read_Point3i(
    nod: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Point3i>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_read_Point3f(
    node: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Point3f>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_read_Point3d(
    node: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Point3d>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_read_Size2i(
    node: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Size>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_read_Size2f(
    node: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Size2f>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_read_Size2d(
    node: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Size2d>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_read_Rect2i(
    node: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Rect>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_read_Rect2f(
    node: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Rect2f>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_read_Rect2d(
    node: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Rect2d>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_read_Scalar(
    node: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Scalar>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_read_Vec2i(
    node: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Vec2i>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_read_Vec3i(
    node: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Vec3i>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_read_Vec4i(
    node: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Vec4i>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_read_Vec6i(
    node: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Vec6i>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_read_Vec2d(
    node: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Vec2d>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_read_Vec3d(
    node: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Vec3d>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_read_Vec4d(
    node: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Vec4d>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_read_Vec6d(
    node: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Vec6d>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_read_Vec2f(
    node: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Vec2f>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_read_Vec3f(
    node: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Vec3f>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_read_Vec4f(
    node: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Vec4f>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_read_Vec6f(
    node: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Vec6f>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_read_Vec2b(
    node: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Vec2b>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_read_Vec3b(
    node: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Vec3b>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_read_Vec4b(
    node: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Vec4b>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_read_Vec6b(
    node: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Vec6b>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_read_Vec2s(
    node: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Vec2s>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_read_Vec3s(
    node: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Vec3s>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_read_Vec4s(
    node: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Vec4s>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_read_Vec6s(
    node: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Vec6s>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_read_Vec2w(
    node: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Vec2w>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_read_Vec3w(
    node: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Vec3w>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_read_Vec4w(
    node: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Vec4w>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNode_read_Vec6w(
    node: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Vec6w>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNodeIterator_new1(
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNodeIterator_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNodeIterator_operatorAsterisk(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNodeIterator_operatorIncrement(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNodeIterator_operatorPlusEqual(
    obj: System.IntPtr,
    ofs: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNodeIterator_readRaw(
    obj: System.IntPtr,
    fmt: string,
    vec: System.IntPtr,
    maxCount: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNodeIterator_operatorEqual(
    it1: System.IntPtr,
    it2: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNodeIterator_operatorMinus(
    it1: System.IntPtr,
    it2: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileNodeIterator_operatorLessThan(
    it1: System.IntPtr,
    it2: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_new1(
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_new2(
    source: string,
    flags: number | StrongNumeric<Int32Host>,
    encoding: string | null,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_open(
    obj: System.IntPtr,
    filename: string,
    flags: number | StrongNumeric<Int32Host>,
    encoding: string | null,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_isOpened(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_releaseAndGetString(
    obj: System.IntPtr,
    outString: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_getFirstTopLevelNode(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_root(
    obj: System.IntPtr,
    streamIdx: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_indexer(
    obj: System.IntPtr,
    nodeName: string,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_writeRaw(
    obj: System.IntPtr,
    fmt: string,
    vec: System.IntPtr,
    len: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_writeComment(
    obj: System.IntPtr,
    comment: string,
    append: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_getDefaultObjectName(
    filename: string,
    buf: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_elname(
    obj: System.IntPtr,
    returnValue: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_startWriteStruct(
    obj: System.IntPtr,
    name: string,
    flags: number | StrongNumeric<Int32Host>,
    typeName: string
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_endWriteStruct(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_state(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_write_int(
    fs: System.IntPtr,
    name: string,
    value: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_write_float(
    fs: System.IntPtr,
    name: string,
    value: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_write_double(
    fs: System.IntPtr,
    name: string,
    value: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_write_String(
    fs: System.IntPtr,
    name: string,
    value: string
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_write_Mat(
    fs: System.IntPtr,
    name: string,
    value: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_write_SparseMat(
    fs: System.IntPtr,
    name: string,
    value: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_write_vectorOfKeyPoint(
    fs: System.IntPtr,
    name: string,
    value: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_write_vectorOfDMatch(
    fs: System.IntPtr,
    name: string,
    value: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_writeScalar_int(
    fs: System.IntPtr,
    value: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_writeScalar_float(
    fs: System.IntPtr,
    value: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_writeScalar_double(
    fs: System.IntPtr,
    value: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_writeScalar_String(
    fs: System.IntPtr,
    value: string
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_shift_String(
    fs: System.IntPtr,
    val: string
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_shift_int(
    fs: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_shift_float(
    fs: System.IntPtr,
    val: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_shift_double(
    fs: System.IntPtr,
    val: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_shift_Mat(
    fs: System.IntPtr,
    val: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_shift_SparseMat(
    fs: System.IntPtr,
    val: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_shift_Range(
    fs: System.IntPtr,
    val: OpenCvSharp.Range
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_shift_KeyPoint(
    fs: System.IntPtr,
    val: OpenCvSharp.KeyPoint
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_shift_DMatch(
    fs: System.IntPtr,
    val: OpenCvSharp.DMatch
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_shift_vectorOfKeyPoint(
    fs: System.IntPtr,
    val: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_shift_vectorOfDMatch(
    fs: System.IntPtr,
    val: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_shift_Point2i(
    fs: System.IntPtr,
    val: OpenCvSharp.Point
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_shift_Point2f(
    fs: System.IntPtr,
    val: OpenCvSharp.Point2f
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_shift_Point2d(
    fs: System.IntPtr,
    val: OpenCvSharp.Point2d
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_shift_Point3i(
    fs: System.IntPtr,
    val: OpenCvSharp.Point3i
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_shift_Point3f(
    fs: System.IntPtr,
    val: OpenCvSharp.Point3f
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_shift_Point3d(
    fs: System.IntPtr,
    val: OpenCvSharp.Point3d
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_shift_Size2i(
    fs: System.IntPtr,
    val: OpenCvSharp.Size
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_shift_Size2f(
    fs: System.IntPtr,
    val: OpenCvSharp.Size2f
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_shift_Size2d(
    fs: System.IntPtr,
    val: OpenCvSharp.Size2d
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_shift_Rect2i(
    fs: System.IntPtr,
    val: OpenCvSharp.Rect
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_shift_Rect2f(
    fs: System.IntPtr,
    val: OpenCvSharp.Rect2f
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_shift_Rect2d(
    fs: System.IntPtr,
    val: OpenCvSharp.Rect2d
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_shift_Scalar(
    fs: System.IntPtr,
    val: OpenCvSharp.Scalar
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_shift_Vec2i(
    fs: System.IntPtr,
    val: OpenCvSharp.Vec2i
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_shift_Vec3i(
    fs: System.IntPtr,
    val: OpenCvSharp.Vec3i
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_shift_Vec4i(
    fs: System.IntPtr,
    val: OpenCvSharp.Vec4i
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_shift_Vec6i(
    fs: System.IntPtr,
    val: OpenCvSharp.Vec6i
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_shift_Vec2d(
    fs: System.IntPtr,
    val: OpenCvSharp.Vec2d
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_shift_Vec3d(
    fs: System.IntPtr,
    val: OpenCvSharp.Vec3d
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_shift_Vec4d(
    fs: System.IntPtr,
    val: OpenCvSharp.Vec4d
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_shift_Vec6d(
    fs: System.IntPtr,
    val: OpenCvSharp.Vec6d
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_shift_Vec2f(
    fs: System.IntPtr,
    val: OpenCvSharp.Vec2f
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_shift_Vec3f(
    fs: System.IntPtr,
    val: OpenCvSharp.Vec3f
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_shift_Vec4f(
    fs: System.IntPtr,
    val: OpenCvSharp.Vec4f
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_shift_Vec6f(
    fs: System.IntPtr,
    val: OpenCvSharp.Vec6f
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_shift_Vec2b(
    fs: System.IntPtr,
    val: OpenCvSharp.Vec2b
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_shift_Vec3b(
    fs: System.IntPtr,
    val: OpenCvSharp.Vec3b
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_shift_Vec4b(
    fs: System.IntPtr,
    val: OpenCvSharp.Vec4b
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_shift_Vec6b(
    fs: System.IntPtr,
    val: OpenCvSharp.Vec6b
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_shift_Vec2s(
    fs: System.IntPtr,
    val: OpenCvSharp.Vec2s
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_shift_Vec3s(
    fs: System.IntPtr,
    val: OpenCvSharp.Vec3s
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_shift_Vec4s(
    fs: System.IntPtr,
    val: OpenCvSharp.Vec4s
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_shift_Vec6s(
    fs: System.IntPtr,
    val: OpenCvSharp.Vec6s
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_shift_Vec2w(
    fs: System.IntPtr,
    val: OpenCvSharp.Vec2w
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_shift_Vec3w(
    fs: System.IntPtr,
    val: OpenCvSharp.Vec3w
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_shift_Vec4w(
    fs: System.IntPtr,
    val: OpenCvSharp.Vec4w
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_FileStorage_shift_Vec6w(
    fs: System.IntPtr,
    val: OpenCvSharp.Vec6w
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_InputArray_new_byMat(
    mat: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_InputArray_new_byUMat(
    mat: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_InputArray_new_byMatExpr(
    mat: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_InputArray_new_byScalar(
    val: OpenCvSharp.Scalar,
    handle: HostVariableOut<System.IntPtr>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_InputArray_new_byDouble(
    valPointer: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_InputArray_new_byVectorOfMat(
    vector: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_InputArray_new_byVecb(
    vec: System.IntPtr,
    n: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_InputArray_new_byVecs(
    vec: System.IntPtr,
    n: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_InputArray_new_byVecw(
    vec: System.IntPtr,
    n: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_InputArray_new_byVeci(
    vec: System.IntPtr,
    n: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_InputArray_new_byVecf(
    vec: System.IntPtr,
    n: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_InputArray_new_byVecd(
    vec: System.IntPtr,
    n: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_InputArray_delete(ia: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  core_InputArray_delete_withScalar(
    ia: System.IntPtr,
    handle: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_InputArray_getMat(
    ia: System.IntPtr,
    idx: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_InputArray_getUMat(
    ia: System.IntPtr,
    idx: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_InputArray_getMatVector(
    ia: System.IntPtr,
    mv: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_InputArray_getFlags(
    ia: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_InputArray_getObj(
    ia: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_InputArray_getSz(
    ia: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Size>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_InputArray_kind(
    ia: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_InputArray_dims(
    ia: System.IntPtr,
    i: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_InputArray_cols(
    ia: System.IntPtr,
    i: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_InputArray_rows(
    ia: System.IntPtr,
    i: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_InputArray_size(
    ia: System.IntPtr,
    i: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<OpenCvSharp.Size>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_InputArray_sizend(
    ia: System.IntPtr,
    sz: HostArray<number | StrongNumeric<Int32Host>>,
    i: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_InputArray_sameSize(
    self: System.IntPtr,
    target: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_InputArray_total(
    ia: System.IntPtr,
    i: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_InputArray_type(
    ia: System.IntPtr,
    i: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_InputArray_depth(
    ia: System.IntPtr,
    i: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_InputArray_channels(
    ia: System.IntPtr,
    i: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_InputArray_isContinuous(
    ia: System.IntPtr,
    i: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_InputArray_isSubmatrix(
    ia: System.IntPtr,
    i: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_InputArray_empty(
    ia: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_InputArray_copyTo1(
    ia: System.IntPtr,
    arr: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_InputArray_copyTo2(
    ia: System.IntPtr,
    arr: System.IntPtr,
    mask: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_InputArray_offset(
    ia: System.IntPtr,
    i: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_InputArray_step(
    ia: System.IntPtr,
    i: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_InputArray_isMat(
    ia: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_InputArray_isUMat(
    ia: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_InputArray_isMatVector(
    ia: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_InputArray_isUMatVector(
    ia: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_InputArray_isMatx(
    ia: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_InputArray_isVector(
    ia: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_InputArray_isGpuMatVector(
    ia: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_sizeof(): number;
  core_Mat_new1(returnValue: HostVariableOut<System.IntPtr>): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_new2(
    rows: number | StrongNumeric<Int32Host>,
    cols: number | StrongNumeric<Int32Host>,
    type: OpenCvSharp.MatType,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_new3(
    rows: number | StrongNumeric<Int32Host>,
    cols: number | StrongNumeric<Int32Host>,
    type: OpenCvSharp.MatType,
    scalar: OpenCvSharp.Scalar,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_new4(
    mat: System.IntPtr,
    rowRange: OpenCvSharp.Range,
    colRange: OpenCvSharp.Range,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_new5(
    mat: System.IntPtr,
    rowRange: OpenCvSharp.Range,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_new6(
    mat: System.IntPtr,
    rowRange: HostArray<OpenCvSharp.Range>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_new7(
    mat: System.IntPtr,
    roi: OpenCvSharp.Rect,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_new8(
    rows: number | StrongNumeric<Int32Host>,
    cols: number | StrongNumeric<Int32Host>,
    type: OpenCvSharp.MatType,
    data: System.IntPtr,
    step: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_new9(
    ndims: number | StrongNumeric<Int32Host>,
    sizes: HostArray<number | StrongNumeric<Int32Host>>,
    type: OpenCvSharp.MatType,
    data: System.IntPtr,
    steps: HostArray<System.IntPtr>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_new9(
    ndims: number | StrongNumeric<Int32Host>,
    sizes: HostArray<number | StrongNumeric<Int32Host>>,
    type: OpenCvSharp.MatType,
    data: System.IntPtr,
    steps: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_new10(
    ndims: number | StrongNumeric<Int32Host>,
    sizes: HostArray<number | StrongNumeric<Int32Host>>,
    type: OpenCvSharp.MatType,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_new11(
    ndims: number | StrongNumeric<Int32Host>,
    sizes: HostArray<number | StrongNumeric<Int32Host>>,
    type: OpenCvSharp.MatType,
    s: OpenCvSharp.Scalar,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_new12(
    mat: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_delete(mat: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_getUMat(
    self: System.IntPtr,
    accessFlag: number | StrongNumeric<Int32Host>,
    usageFlags: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_row(
    self: System.IntPtr,
    y: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_col(
    self: System.IntPtr,
    x: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_rowRange(
    self: System.IntPtr,
    startRow: number | StrongNumeric<Int32Host>,
    endRow: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_colRange(
    self: System.IntPtr,
    startCol: number | StrongNumeric<Int32Host>,
    endCol: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_diag(
    self: System.IntPtr,
    d: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_diag_static(
    self: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_clone(
    self: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_copyTo1(self: System.IntPtr, m: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_copyTo2(
    self: System.IntPtr,
    m: System.IntPtr,
    mask: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_copyTo_toMat1(
    self: System.IntPtr,
    m: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_copyTo_toMat2(
    self: System.IntPtr,
    m: System.IntPtr,
    mask: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_convertTo(
    self: System.IntPtr,
    m: System.IntPtr,
    rtype: OpenCvSharp.MatType,
    alpha: number | StrongNumeric<DoubleHost>,
    beta: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_assignTo(
    self: System.IntPtr,
    m: System.IntPtr,
    type: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_setTo_Scalar(
    self: System.IntPtr,
    value: OpenCvSharp.Scalar,
    mask: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_setTo_InputArray(
    self: System.IntPtr,
    value: System.IntPtr,
    mask: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_reshape1(
    self: System.IntPtr,
    cn: number | StrongNumeric<Int32Host>,
    rows: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_reshape2(
    self: System.IntPtr,
    cn: number | StrongNumeric<Int32Host>,
    newndims: number | StrongNumeric<Int32Host>,
    newsz: HostArray<number | StrongNumeric<Int32Host>>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_t(
    self: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_inv(
    self: System.IntPtr,
    method: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_mul(
    self: System.IntPtr,
    m: System.IntPtr,
    scale: number | StrongNumeric<DoubleHost>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_cross(
    self: System.IntPtr,
    m: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_dot(
    self: System.IntPtr,
    m: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_zeros1(
    rows: number | StrongNumeric<Int32Host>,
    cols: number | StrongNumeric<Int32Host>,
    type: OpenCvSharp.MatType,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_zeros2(
    ndims: number | StrongNumeric<Int32Host>,
    sz: HostArray<number | StrongNumeric<Int32Host>>,
    type: OpenCvSharp.MatType,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_ones1(
    rows: number | StrongNumeric<Int32Host>,
    cols: number | StrongNumeric<Int32Host>,
    type: OpenCvSharp.MatType,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_ones2(
    ndims: number | StrongNumeric<Int32Host>,
    sz: HostArray<number | StrongNumeric<Int32Host>>,
    type: OpenCvSharp.MatType,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_eye(
    rows: number | StrongNumeric<Int32Host>,
    cols: number | StrongNumeric<Int32Host>,
    type: OpenCvSharp.MatType,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_create1(
    self: System.IntPtr,
    rows: number | StrongNumeric<Int32Host>,
    cols: number | StrongNumeric<Int32Host>,
    type: OpenCvSharp.MatType
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_create2(
    self: System.IntPtr,
    ndims: number | StrongNumeric<Int32Host>,
    sizes: HostArray<number | StrongNumeric<Int32Host>>,
    type: OpenCvSharp.MatType
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_reserve(self: System.IntPtr, sz: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_reserveBuffer(
    self: System.IntPtr,
    sz: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_resize1(obj: System.IntPtr, sz: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_resize2(
    obj: System.IntPtr,
    sz: System.IntPtr,
    s: OpenCvSharp.Scalar
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_pop_back(
    obj: System.IntPtr,
    nelems: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_locateROI(
    self: System.IntPtr,
    wholeSize: HostVariableOut<OpenCvSharp.Size>,
    ofs: HostVariableOut<OpenCvSharp.Point>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_adjustROI(
    nativeObj: System.IntPtr,
    dtop: number | StrongNumeric<Int32Host>,
    dbottom: number | StrongNumeric<Int32Host>,
    dleft: number | StrongNumeric<Int32Host>,
    dright: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_subMat1(
    self: System.IntPtr,
    rowStart: number | StrongNumeric<Int32Host>,
    rowEnd: number | StrongNumeric<Int32Host>,
    colStart: number | StrongNumeric<Int32Host>,
    colEnd: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_subMat2(
    self: System.IntPtr,
    nRanges: number | StrongNumeric<Int32Host>,
    ranges: HostArray<OpenCvSharp.Range>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_isContinuous(
    self: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_isSubmatrix(
    self: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_elemSize(
    self: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_elemSize1(
    self: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_type(
    self: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_depth(
    self: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_channels(
    self: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_empty(
    self: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_total1(
    self: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_total2(
    self: System.IntPtr,
    startDim: number | StrongNumeric<Int32Host>,
    endDim: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_checkVector(
    self: System.IntPtr,
    elemChannels: number | StrongNumeric<Int32Host>,
    depth: number | StrongNumeric<Int32Host>,
    requireContinuous: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_ptr1d(
    self: System.IntPtr,
    i0: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_ptr2d(
    self: System.IntPtr,
    i0: number | StrongNumeric<Int32Host>,
    i1: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_ptr3d(
    self: System.IntPtr,
    i0: number | StrongNumeric<Int32Host>,
    i1: number | StrongNumeric<Int32Host>,
    i2: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_ptrnd(
    self: System.IntPtr,
    idx: HostArray<number | StrongNumeric<Int32Host>>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_flags(
    self: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_dims(
    self: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_rows(
    self: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_cols(
    self: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_data(
    self: System.IntPtr,
    returnValue: HostVariableOut<never>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_datastart(
    self: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_dataend(
    self: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_datalimit(
    self: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_size(
    self: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Size>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_sizeAt(
    self: System.IntPtr,
    i: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_step1(
    self: System.IntPtr,
    i: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_step(
    self: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_stepAt(
    self: System.IntPtr,
    i: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_abs_Mat(
    e: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_push_back_Mat(
    self: System.IntPtr,
    m: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_push_back_char(
    self: System.IntPtr,
    v: number | StrongNumeric<SByteHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_push_back_uchar(
    self: System.IntPtr,
    v: number | StrongNumeric<ByteHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_push_back_short(
    self: System.IntPtr,
    v: number | StrongNumeric<Int16Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_push_back_ushort(
    self: System.IntPtr,
    v: number | StrongNumeric<UInt16Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_push_back_int(
    self: System.IntPtr,
    v: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_push_back_float(
    self: System.IntPtr,
    v: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_push_back_double(
    self: System.IntPtr,
    v: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_push_back_Vec2b(
    self: System.IntPtr,
    v: OpenCvSharp.Vec2b
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_push_back_Vec3b(
    self: System.IntPtr,
    v: OpenCvSharp.Vec3b
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_push_back_Vec4b(
    self: System.IntPtr,
    v: OpenCvSharp.Vec4b
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_push_back_Vec6b(
    self: System.IntPtr,
    v: OpenCvSharp.Vec6b
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_push_back_Vec2s(
    self: System.IntPtr,
    v: OpenCvSharp.Vec2s
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_push_back_Vec3s(
    self: System.IntPtr,
    v: OpenCvSharp.Vec3s
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_push_back_Vec4s(
    self: System.IntPtr,
    v: OpenCvSharp.Vec4s
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_push_back_Vec6s(
    self: System.IntPtr,
    v: OpenCvSharp.Vec6s
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_push_back_Vec2w(
    self: System.IntPtr,
    v: OpenCvSharp.Vec2w
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_push_back_Vec3w(
    self: System.IntPtr,
    v: OpenCvSharp.Vec3w
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_push_back_Vec4w(
    self: System.IntPtr,
    v: OpenCvSharp.Vec4w
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_push_back_Vec6w(
    self: System.IntPtr,
    v: OpenCvSharp.Vec6w
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_push_back_Vec2i(
    self: System.IntPtr,
    v: OpenCvSharp.Vec2i
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_push_back_Vec3i(
    self: System.IntPtr,
    v: OpenCvSharp.Vec3i
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_push_back_Vec4i(
    self: System.IntPtr,
    v: OpenCvSharp.Vec4i
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_push_back_Vec6i(
    self: System.IntPtr,
    v: OpenCvSharp.Vec6i
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_push_back_Vec2f(
    self: System.IntPtr,
    v: OpenCvSharp.Vec2f
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_push_back_Vec3f(
    self: System.IntPtr,
    v: OpenCvSharp.Vec3f
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_push_back_Vec4f(
    self: System.IntPtr,
    v: OpenCvSharp.Vec4f
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_push_back_Vec6f(
    self: System.IntPtr,
    v: OpenCvSharp.Vec6f
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_push_back_Vec2d(
    self: System.IntPtr,
    v: OpenCvSharp.Vec2d
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_push_back_Vec3d(
    self: System.IntPtr,
    v: OpenCvSharp.Vec3d
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_push_back_Vec4d(
    self: System.IntPtr,
    v: OpenCvSharp.Vec4d
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_push_back_Vec6d(
    self: System.IntPtr,
    v: OpenCvSharp.Vec6d
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_push_back_Point(
    self: System.IntPtr,
    v: OpenCvSharp.Point
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_push_back_Point2f(
    self: System.IntPtr,
    v: OpenCvSharp.Point2f
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_push_back_Point2d(
    self: System.IntPtr,
    v: OpenCvSharp.Point2d
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_push_back_Point3i(
    self: System.IntPtr,
    v: OpenCvSharp.Point3i
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_push_back_Point3f(
    self: System.IntPtr,
    v: OpenCvSharp.Point3f
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_push_back_Point3d(
    self: System.IntPtr,
    v: OpenCvSharp.Point3d
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_push_back_Size(
    self: System.IntPtr,
    v: OpenCvSharp.Size
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_push_back_Size2f(
    self: System.IntPtr,
    v: OpenCvSharp.Size2f
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_push_back_Size2d(
    self: System.IntPtr,
    v: OpenCvSharp.Size2d
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_push_back_Rect(
    self: System.IntPtr,
    v: OpenCvSharp.Rect
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_push_back_Rect2f(
    self: System.IntPtr,
    v: OpenCvSharp.Rect2f
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_push_back_Rect2d(
    self: System.IntPtr,
    v: OpenCvSharp.Rect2d
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_forEach_uchar(
    m: System.IntPtr,
    proc: OpenCvSharp.MatForeachFunctionByte
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_forEach_Vec2b(
    m: System.IntPtr,
    proc: OpenCvSharp.MatForeachFunctionVec2b
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_forEach_Vec3b(
    m: System.IntPtr,
    proc: OpenCvSharp.MatForeachFunctionVec3b
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_forEach_Vec4b(
    m: System.IntPtr,
    proc: OpenCvSharp.MatForeachFunctionVec4b
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_forEach_Vec6b(
    m: System.IntPtr,
    proc: OpenCvSharp.MatForeachFunctionVec6b
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_forEach_short(
    m: System.IntPtr,
    proc: OpenCvSharp.MatForeachFunctionInt16
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_forEach_Vec2s(
    m: System.IntPtr,
    proc: OpenCvSharp.MatForeachFunctionVec2s
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_forEach_Vec3s(
    m: System.IntPtr,
    proc: OpenCvSharp.MatForeachFunctionVec3s
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_forEach_Vec4s(
    m: System.IntPtr,
    proc: OpenCvSharp.MatForeachFunctionVec4s
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_forEach_Vec6s(
    m: System.IntPtr,
    proc: OpenCvSharp.MatForeachFunctionVec6s
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_forEach_int(
    m: System.IntPtr,
    proc: OpenCvSharp.MatForeachFunctionInt32
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_forEach_Vec2i(
    m: System.IntPtr,
    proc: OpenCvSharp.MatForeachFunctionVec2i
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_forEach_Vec3i(
    m: System.IntPtr,
    proc: OpenCvSharp.MatForeachFunctionVec3i
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_forEach_Vec4i(
    m: System.IntPtr,
    proc: OpenCvSharp.MatForeachFunctionVec4i
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_forEach_Vec6i(
    m: System.IntPtr,
    proc: OpenCvSharp.MatForeachFunctionVec6i
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_forEach_float(
    m: System.IntPtr,
    proc: OpenCvSharp.MatForeachFunctionFloat
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_forEach_Vec2f(
    m: System.IntPtr,
    proc: OpenCvSharp.MatForeachFunctionVec2f
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_forEach_Vec3f(
    m: System.IntPtr,
    proc: OpenCvSharp.MatForeachFunctionVec3f
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_forEach_Vec4f(
    m: System.IntPtr,
    proc: OpenCvSharp.MatForeachFunctionVec4f
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_forEach_Vec6f(
    m: System.IntPtr,
    proc: OpenCvSharp.MatForeachFunctionVec6f
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_forEach_double(
    m: System.IntPtr,
    proc: OpenCvSharp.MatForeachFunctionDouble
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_forEach_Vec2d(
    m: System.IntPtr,
    proc: OpenCvSharp.MatForeachFunctionVec2d
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_forEach_Vec3d(
    m: System.IntPtr,
    proc: OpenCvSharp.MatForeachFunctionVec3d
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_forEach_Vec4d(
    m: System.IntPtr,
    proc: OpenCvSharp.MatForeachFunctionVec4d
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_forEach_Vec6d(
    m: System.IntPtr,
    proc: OpenCvSharp.MatForeachFunctionVec6d
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_operatorUnaryMinus(
    mat: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_operatorAdd_MatMat(
    a: System.IntPtr,
    b: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_operatorAdd_MatScalar(
    a: System.IntPtr,
    s: OpenCvSharp.Scalar,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_operatorAdd_ScalarMat(
    s: OpenCvSharp.Scalar,
    a: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_operatorMinus_Mat(
    a: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_operatorSubtract_MatMat(
    a: System.IntPtr,
    b: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_operatorSubtract_MatScalar(
    a: System.IntPtr,
    s: OpenCvSharp.Scalar,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_operatorSubtract_ScalarMat(
    s: OpenCvSharp.Scalar,
    a: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_operatorMultiply_MatMat(
    a: System.IntPtr,
    b: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_operatorMultiply_MatDouble(
    a: System.IntPtr,
    s: number | StrongNumeric<DoubleHost>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_operatorMultiply_DoubleMat(
    s: number | StrongNumeric<DoubleHost>,
    a: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_operatorDivide_MatMat(
    a: System.IntPtr,
    b: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_operatorDivide_MatDouble(
    a: System.IntPtr,
    s: number | StrongNumeric<DoubleHost>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_operatorDivide_DoubleMat(
    s: number | StrongNumeric<DoubleHost>,
    a: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_operatorAnd_MatMat(
    a: System.IntPtr,
    b: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_operatorAnd_MatDouble(
    a: System.IntPtr,
    s: number | StrongNumeric<DoubleHost>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_operatorAnd_DoubleMat(
    s: number | StrongNumeric<DoubleHost>,
    a: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_operatorOr_MatMat(
    a: System.IntPtr,
    b: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_operatorOr_MatDouble(
    a: System.IntPtr,
    s: number | StrongNumeric<DoubleHost>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_operatorOr_DoubleMat(
    s: number | StrongNumeric<DoubleHost>,
    a: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_operatorXor_MatMat(
    a: System.IntPtr,
    b: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_operatorXor_MatDouble(
    a: System.IntPtr,
    s: number | StrongNumeric<DoubleHost>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_operatorXor_DoubleMat(
    s: number | StrongNumeric<DoubleHost>,
    a: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_operatorNot(
    a: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_operatorLT_MatMat(
    a: System.IntPtr,
    b: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_operatorLT_DoubleMat(
    a: number | StrongNumeric<DoubleHost>,
    b: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_operatorLT_MatDouble(
    a: System.IntPtr,
    b: number | StrongNumeric<DoubleHost>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_operatorLE_MatMat(
    a: System.IntPtr,
    b: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_operatorLE_DoubleMat(
    a: number | StrongNumeric<DoubleHost>,
    b: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_operatorLE_MatDouble(
    a: System.IntPtr,
    b: number | StrongNumeric<DoubleHost>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_operatorGT_MatMat(
    a: System.IntPtr,
    b: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_operatorGT_DoubleMat(
    a: number | StrongNumeric<DoubleHost>,
    b: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_operatorGT_MatDouble(
    a: System.IntPtr,
    b: number | StrongNumeric<DoubleHost>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_operatorGE_MatMat(
    a: System.IntPtr,
    b: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_operatorGE_DoubleMat(
    a: number | StrongNumeric<DoubleHost>,
    b: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_operatorGE_MatDouble(
    a: System.IntPtr,
    b: number | StrongNumeric<DoubleHost>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_operatorEQ_MatMat(
    a: System.IntPtr,
    b: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_operatorEQ_DoubleMat(
    a: number | StrongNumeric<DoubleHost>,
    b: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_operatorEQ_MatDouble(
    a: System.IntPtr,
    b: number | StrongNumeric<DoubleHost>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_operatorNE_MatMat(
    a: System.IntPtr,
    b: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_operatorNE_DoubleMat(
    a: number | StrongNumeric<DoubleHost>,
    b: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_Mat_operatorNE_MatDouble(
    a: System.IntPtr,
    b: number | StrongNumeric<DoubleHost>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_MatExpr_new1(
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_MatExpr_new2(
    mat: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_MatExpr_delete(expr: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  core_MatExpr_toMat(
    expr: System.IntPtr,
    returnValue: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_MatExpr_row(
    self: System.IntPtr,
    y: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_MatExpr_col(
    self: System.IntPtr,
    x: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_MatExpr_diag(
    self: System.IntPtr,
    d: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_MatExpr_submat(
    self: System.IntPtr,
    rowStart: number | StrongNumeric<Int32Host>,
    rowEnd: number | StrongNumeric<Int32Host>,
    colStart: number | StrongNumeric<Int32Host>,
    colEnd: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_MatExpr_t(
    self: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_MatExpr_inv(
    self: System.IntPtr,
    method: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_MatExpr_mul_toMatExpr(
    self: System.IntPtr,
    e: System.IntPtr,
    scale: number | StrongNumeric<DoubleHost>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_MatExpr_mul_toMat(
    self: System.IntPtr,
    m: System.IntPtr,
    scale: number | StrongNumeric<DoubleHost>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_MatExpr_cross(
    self: System.IntPtr,
    m: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_MatExpr_dot(
    self: System.IntPtr,
    m: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_MatExpr_size(
    self: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Size>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_MatExpr_type(
    self: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_operatorUnaryMinus_MatExpr(
    e: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_operatorUnaryNot_MatExpr(
    e: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_operatorAdd_MatExprMat(
    e: System.IntPtr,
    m: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_operatorAdd_MatMatExpr(
    m: System.IntPtr,
    e: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_operatorAdd_MatExprScalar(
    e: System.IntPtr,
    s: OpenCvSharp.Scalar,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_operatorAdd_ScalarMatExpr(
    s: OpenCvSharp.Scalar,
    e: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_operatorAdd_MatExprMatExpr(
    e1: System.IntPtr,
    e2: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_operatorSubtract_MatExprMat(
    e: System.IntPtr,
    m: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_operatorSubtract_MatMatExpr(
    m: System.IntPtr,
    e: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_operatorSubtract_MatExprScalar(
    e: System.IntPtr,
    s: OpenCvSharp.Scalar,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_operatorSubtract_ScalarMatExpr(
    s: OpenCvSharp.Scalar,
    e: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_operatorSubtract_MatExprMatExpr(
    e1: System.IntPtr,
    e2: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_operatorMultiply_MatExprMat(
    e: System.IntPtr,
    m: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_operatorMultiply_MatMatExpr(
    m: System.IntPtr,
    e: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_operatorMultiply_MatExprDouble(
    e: System.IntPtr,
    s: number | StrongNumeric<DoubleHost>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_operatorMultiply_DoubleMatExpr(
    s: number | StrongNumeric<DoubleHost>,
    e: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_operatorMultiply_MatExprMatExpr(
    e1: System.IntPtr,
    e2: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_operatorDivide_MatExprMat(
    e: System.IntPtr,
    m: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_operatorDivide_MatMatExpr(
    m: System.IntPtr,
    e: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_operatorDivide_MatExprDouble(
    e: System.IntPtr,
    s: number | StrongNumeric<DoubleHost>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_operatorDivide_DoubleMatExpr(
    s: number | StrongNumeric<DoubleHost>,
    e: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_operatorDivide_MatExprMatExpr(
    e1: System.IntPtr,
    e2: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_abs_MatExpr(
    e: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_OutputArray_new_byMat(
    mat: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_OutputArray_new_byUMat(
    mat: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_OutputArray_new_byScalar(
    val: OpenCvSharp.Scalar,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_OutputArray_new_byVectorOfMat(
    vector: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_OutputArray_delete(oa: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  core_OutputArray_getMat(
    oa: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_OutputArray_getScalar(
    oa: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Scalar>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_OutputArray_getVectorOfMat(
    oa: System.IntPtr,
    vector: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_SparseMat_new1(
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_SparseMat_new2(
    dims: number | StrongNumeric<Int32Host>,
    sizes: HostArray<number | StrongNumeric<Int32Host>>,
    type: OpenCvSharp.MatType,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_SparseMat_new3(
    m: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_SparseMat_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  core_SparseMat_operatorAssign_SparseMat(
    obj: System.IntPtr,
    m: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_SparseMat_operatorAssign_Mat(
    obj: System.IntPtr,
    m: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_SparseMat_clone(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_SparseMat_copyTo_SparseMat(
    obj: System.IntPtr,
    m: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_SparseMat_copyTo_Mat(
    obj: System.IntPtr,
    m: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_SparseMat_convertTo_SparseMat(
    obj: System.IntPtr,
    m: System.IntPtr,
    rtype: OpenCvSharp.MatType,
    alpha: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_SparseMat_convertTo_Mat(
    obj: System.IntPtr,
    m: System.IntPtr,
    rtype: OpenCvSharp.MatType,
    alpha: number | StrongNumeric<DoubleHost>,
    beta: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_SparseMat_assignTo(
    obj: System.IntPtr,
    m: System.IntPtr,
    type: OpenCvSharp.MatType
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_SparseMat_create(
    obj: System.IntPtr,
    dims: number | StrongNumeric<Int32Host>,
    sizes: HostArray<number | StrongNumeric<Int32Host>>,
    type: OpenCvSharp.MatType
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_SparseMat_clear(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  core_SparseMat_addref(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  core_SparseMat_release(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  core_SparseMat_elemSize(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_SparseMat_elemSize1(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_SparseMat_type(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_SparseMat_depth(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_SparseMat_channels(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_SparseMat_size1(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_SparseMat_size2(
    obj: System.IntPtr,
    i: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_SparseMat_dims(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_SparseMat_nzcount(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_SparseMat_hash_1d(
    obj: System.IntPtr,
    i0: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_SparseMat_hash_2d(
    obj: System.IntPtr,
    i0: number | StrongNumeric<Int32Host>,
    i1: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_SparseMat_hash_3d(
    obj: System.IntPtr,
    i0: number | StrongNumeric<Int32Host>,
    i1: number | StrongNumeric<Int32Host>,
    i2: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_SparseMat_hash_nd(
    obj: System.IntPtr,
    idx: HostArray<number | StrongNumeric<Int32Host>>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_new1(
    usageFlags: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_new2(
    rows: number | StrongNumeric<Int32Host>,
    cols: number | StrongNumeric<Int32Host>,
    type: OpenCvSharp.MatType,
    usageFlags: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_new3(
    rows: number | StrongNumeric<Int32Host>,
    cols: number | StrongNumeric<Int32Host>,
    type: OpenCvSharp.MatType,
    scalar: OpenCvSharp.Scalar,
    usageFlags: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_new4(
    ndims: number | StrongNumeric<Int32Host>,
    sizes: HostArray<number | StrongNumeric<Int32Host>>,
    type: OpenCvSharp.MatType,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_new5(
    ndims: number | StrongNumeric<Int32Host>,
    sizes: HostArray<number | StrongNumeric<Int32Host>>,
    type: OpenCvSharp.MatType,
    s: OpenCvSharp.Scalar,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_new6(
    umat: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_new7(
    umat: System.IntPtr,
    rowRange: OpenCvSharp.Range,
    colRange: OpenCvSharp.Range,
    usageFlags: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_new8(
    umat: System.IntPtr,
    roi: OpenCvSharp.Rect,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_new9(
    umat: System.IntPtr,
    ranges: HostArray<OpenCvSharp.Range>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_delete(umat: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_getMat(
    self: System.IntPtr,
    accessFlag: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_row(
    self: System.IntPtr,
    y: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_col(
    self: System.IntPtr,
    x: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_rowRange(
    self: System.IntPtr,
    startRow: number | StrongNumeric<Int32Host>,
    endRow: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_colRange(
    self: System.IntPtr,
    startCol: number | StrongNumeric<Int32Host>,
    endCol: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_diag(
    self: System.IntPtr,
    d: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_diag_static(
    self: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_clone(
    self: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_copyTo1(self: System.IntPtr, m: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_copyTo2(
    self: System.IntPtr,
    m: System.IntPtr,
    mask: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_copyTo_toUMat1(
    self: System.IntPtr,
    m: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_copyTo_toUMat2(
    self: System.IntPtr,
    m: System.IntPtr,
    mask: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_convertTo(
    self: System.IntPtr,
    m: System.IntPtr,
    rtype: OpenCvSharp.MatType,
    alpha: number | StrongNumeric<DoubleHost>,
    beta: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_assignTo(
    self: System.IntPtr,
    m: System.IntPtr,
    type: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_setTo_Scalar(
    self: System.IntPtr,
    value: OpenCvSharp.Scalar,
    mask: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_setTo_InputArray(
    self: System.IntPtr,
    value: System.IntPtr,
    mask: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_reshape1(
    self: System.IntPtr,
    cn: number | StrongNumeric<Int32Host>,
    rows: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_reshape2(
    self: System.IntPtr,
    cn: number | StrongNumeric<Int32Host>,
    newndims: number | StrongNumeric<Int32Host>,
    newsz: HostArray<number | StrongNumeric<Int32Host>>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_t(
    self: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_inv(
    self: System.IntPtr,
    method: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_mul(
    self: System.IntPtr,
    m: System.IntPtr,
    scale: number | StrongNumeric<DoubleHost>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_dot(
    self: System.IntPtr,
    m: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_zeros1(
    rows: number | StrongNumeric<Int32Host>,
    cols: number | StrongNumeric<Int32Host>,
    type: OpenCvSharp.MatType,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_zeros2(
    ndims: number | StrongNumeric<Int32Host>,
    sz: HostArray<number | StrongNumeric<Int32Host>>,
    type: OpenCvSharp.MatType,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_ones1(
    rows: number | StrongNumeric<Int32Host>,
    cols: number | StrongNumeric<Int32Host>,
    type: OpenCvSharp.MatType,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_ones2(
    ndims: number | StrongNumeric<Int32Host>,
    sz: HostArray<number | StrongNumeric<Int32Host>>,
    type: OpenCvSharp.MatType,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_eye(
    rows: number | StrongNumeric<Int32Host>,
    cols: number | StrongNumeric<Int32Host>,
    type: OpenCvSharp.MatType,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_create1(
    self: System.IntPtr,
    rows: number | StrongNumeric<Int32Host>,
    cols: number | StrongNumeric<Int32Host>,
    type: OpenCvSharp.MatType
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_create2(
    self: System.IntPtr,
    ndims: number | StrongNumeric<Int32Host>,
    sizes: HostArray<number | StrongNumeric<Int32Host>>,
    type: OpenCvSharp.MatType
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_locateROI(
    self: System.IntPtr,
    wholeSize: HostVariableOut<OpenCvSharp.Size>,
    ofs: HostVariableOut<OpenCvSharp.Point>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_adjustROI(
    nativeObj: System.IntPtr,
    dtop: number | StrongNumeric<Int32Host>,
    dbottom: number | StrongNumeric<Int32Host>,
    dleft: number | StrongNumeric<Int32Host>,
    dright: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_subMat1(
    self: System.IntPtr,
    rowStart: number | StrongNumeric<Int32Host>,
    rowEnd: number | StrongNumeric<Int32Host>,
    colStart: number | StrongNumeric<Int32Host>,
    colEnd: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_subMat2(
    self: System.IntPtr,
    nRanges: number | StrongNumeric<Int32Host>,
    ranges: HostArray<OpenCvSharp.Range>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_isContinuous(
    self: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_isSubmatrix(
    self: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_elemSize(
    self: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_elemSize1(
    self: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_type(
    self: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_depth(
    self: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_channels(
    self: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_step1(
    self: System.IntPtr,
    i: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_empty(
    self: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_total(
    self: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_checkVector(
    self: System.IntPtr,
    elemChannels: number | StrongNumeric<Int32Host>,
    depth: number | StrongNumeric<Int32Host>,
    requireContinuous: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_flags(
    self: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_dims(
    self: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_rows(
    self: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_cols(
    self: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_size(
    self: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Size>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_sizeAt(
    self: System.IntPtr,
    i: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_step(
    self: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  core_UMat_stepAt(
    self: System.IntPtr,
    i: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_readNetFromDarknet_NotWindows(
    cfgFile: string,
    darknetModel: string | null,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_readNetFromDarknet_Windows(
    cfgFile: string,
    darknetModel: string | null,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_readNetFromDarknet(
    cfgFile: string,
    darknetModel: string | null,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_readNetFromCaffe_NotWindows(
    prototxt: string,
    caffeModel: string | null,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_readNetFromCaffe_Windows(
    prototxt: string,
    caffeModel: string | null,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_readNetFromCaffe(
    prototxt: string,
    caffeModel: string | null,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_readNetFromTensorflow_NotWindows(
    model: string,
    config: string | null,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_readNetFromTensorflow_Windows(
    model: string,
    config: string | null,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_readNetFromTensorflow(
    model: string,
    config: string | null,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_readNetFromTorch_NotWindows(
    model: string,
    isBinary: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_readNetFromTorch_Windows(
    model: string,
    isBinary: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_readNetFromTorch(
    model: string,
    isBinary: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_readNet_NotWindows(
    model: string,
    config: string,
    framework: string,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_readNet_Windows(
    model: string,
    config: string,
    framework: string,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_readNet(
    model: string,
    config: string,
    framework: string,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_readTorchBlob_NotWindows(
    fileName: string,
    isBinary: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_readTorchBlob_Windows(
    fileName: string,
    isBinary: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_readTorchBlob(
    fileName: string,
    isBinary: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_readNetFromModelOptimizer_NotWindows(
    xml: string,
    bin: string,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_readNetFromModelOptimizer_Windows(
    xml: string,
    bin: string,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_readNetFromModelOptimizer(
    xml: string,
    bin: string,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_readNetFromONNX_NotWindows(
    onnxFile: string,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_readNetFromONNX_Windows(
    onnxFile: string,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_readNetFromONNX(
    onnxFile: string,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_readTensorFromONNX_NotWindows(
    path: string,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_readTensorFromONNX_Windows(
    path: string,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_readTensorFromONNX(
    path: string,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_blobFromImage(
    image: System.IntPtr,
    scaleFactor: number | StrongNumeric<DoubleHost>,
    size: OpenCvSharp.Size,
    mean: OpenCvSharp.Scalar,
    swapRB: number | StrongNumeric<Int32Host>,
    crop: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_blobFromImages(
    images: HostArray<System.IntPtr>,
    imagesLength: number | StrongNumeric<Int32Host>,
    scaleFactor: number | StrongNumeric<DoubleHost>,
    size: OpenCvSharp.Size,
    mean: OpenCvSharp.Scalar,
    swapRB: number | StrongNumeric<Int32Host>,
    crop: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_shrinkCaffeModel_NotWindows(
    src: string,
    dst: string,
    layersTypes: HostArray<string>,
    layersTypesSize: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_shrinkCaffeModel_Windows(
    src: string,
    dst: string,
    layersTypes: HostArray<string>,
    layersTypesSize: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_shrinkCaffeModel(
    src: string,
    dst: string,
    layersTypes: HostArray<string>,
    layersTypesSize: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_writeTextGraph_NotWindows(
    model: string,
    output: string
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_writeTextGraph_Windows(model: string, output: string): OpenCvSharp.Internal.ExceptionStatus;
  dnn_writeTextGraph(path: string, output: string): OpenCvSharp.Internal.ExceptionStatus;
  dnn_NMSBoxes_Rect(
    bboxes: System.IntPtr,
    scores: System.IntPtr,
    score_threshold: number | StrongNumeric<SingleHost>,
    nms_threshold: number | StrongNumeric<SingleHost>,
    indices: System.IntPtr,
    eta: number | StrongNumeric<SingleHost>,
    top_k: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_NMSBoxes_Rect2d(
    bboxes: System.IntPtr,
    scores: System.IntPtr,
    score_threshold: number | StrongNumeric<SingleHost>,
    nms_threshold: number | StrongNumeric<SingleHost>,
    indices: System.IntPtr,
    eta: number | StrongNumeric<SingleHost>,
    top_k: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_NMSBoxes_RotatedRect(
    bboxes: System.IntPtr,
    scores: System.IntPtr,
    score_threshold: number | StrongNumeric<SingleHost>,
    nms_threshold: number | StrongNumeric<SingleHost>,
    indices: System.IntPtr,
    eta: number | StrongNumeric<SingleHost>,
    top_k: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_resetMyriadDevice(): OpenCvSharp.Internal.ExceptionStatus;
  dnn_Net_new(returnValue: HostVariableOut<System.IntPtr>): OpenCvSharp.Internal.ExceptionStatus;
  dnn_Net_delete(net: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  dnn_Net_readFromModelOptimizer(
    xml: string,
    bin: string,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_Net_empty(
    net: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_Net_dump(net: System.IntPtr, outString: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  dnn_Net_dumpToFile(net: System.IntPtr, path: string): OpenCvSharp.Internal.ExceptionStatus;
  dnn_Net_getLayerId(
    net: System.IntPtr,
    layer: string,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_Net_getLayerNames(
    net: System.IntPtr,
    outVec: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_Net_connect1(
    net: System.IntPtr,
    outPin: string,
    inpPin: string
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_Net_connect2(
    net: System.IntPtr,
    outLayerId: number | StrongNumeric<Int32Host>,
    outNum: number | StrongNumeric<Int32Host>,
    inpLayerId: number | StrongNumeric<Int32Host>,
    inpNum: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_Net_setInputsNames(
    net: System.IntPtr,
    inputBlobNames: HostArray<string>,
    inputBlobNamesLength: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_Net_forward1(
    net: System.IntPtr,
    outputName: string | null,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_Net_forward2(
    net: System.IntPtr,
    outputBlobs: HostArray<System.IntPtr>,
    outputBlobsLength: number | StrongNumeric<Int32Host>,
    outputName: string | null
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_Net_forward3(
    net: System.IntPtr,
    outputBlobs: HostArray<System.IntPtr>,
    outputBlobsLength: number | StrongNumeric<Int32Host>,
    outBlobNames: HostArray<string>,
    outBlobNamesLength: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_Net_setHalideScheduler(
    net: System.IntPtr,
    scheduler: string
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_Net_setPreferableBackend(
    net: System.IntPtr,
    backendId: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_Net_setPreferableTarget(
    net: System.IntPtr,
    targetId: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_Net_setInput(
    net: System.IntPtr,
    blob: System.IntPtr,
    name: string
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_Net_getUnconnectedOutLayers(
    net: System.IntPtr,
    result: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_Net_getUnconnectedOutLayersNames(
    net: System.IntPtr,
    result: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_Net_enableFusion(
    net: System.IntPtr,
    fusion: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_Net_getPerfProfile(
    net: System.IntPtr,
    timings: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_Facemark_loadModel(obj: System.IntPtr, model: string): OpenCvSharp.Internal.ExceptionStatus;
  face_Facemark_fit(
    obj: System.IntPtr,
    image: System.IntPtr,
    faces: System.IntPtr,
    landmarks: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkLBF_create(
    params: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_Ptr_FacemarkLBF_get(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_Ptr_FacemarkLBF_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkLBF_Params_new(
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkLBF_Params_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkLBF_Params_shape_offset_get(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkLBF_Params_shape_offset_set(
    obj: System.IntPtr,
    val: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkLBF_Params_cascade_face_get(
    obj: System.IntPtr,
    s: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkLBF_Params_cascade_face_set(
    obj: System.IntPtr,
    s: string
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkLBF_Params_verbose_get(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkLBF_Params_verbose_set(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkLBF_Params_n_landmarks_get(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkLBF_Params_n_landmarks_set(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkLBF_Params_initShape_n_get(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkLBF_Params_initShape_n_set(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkLBF_Params_stages_n_get(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkLBF_Params_stages_n_set(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkLBF_Params_tree_n_get(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkLBF_Params_tree_n_set(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkLBF_Params_tree_depth_get(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkLBF_Params_tree_depth_set(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkLBF_Params_bagging_overlap_get(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkLBF_Params_bagging_overlap_set(
    obj: System.IntPtr,
    val: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkLBF_Params_model_filename_get(
    obj: System.IntPtr,
    s: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkLBF_Params_model_filename_set(
    obj: System.IntPtr,
    s: string
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkLBF_Params_save_model_get(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkLBF_Params_save_model_set(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkLBF_Params_seed_get(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkLBF_Params_seed_set(
    obj: System.IntPtr,
    val: number | StrongNumeric<UInt32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkLBF_Params_feats_m_get(
    obj: System.IntPtr,
    v: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkLBF_Params_feats_m_set(
    obj: System.IntPtr,
    v: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkLBF_Params_radius_m_get(
    obj: System.IntPtr,
    v: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkLBF_Params_radius_m_set(
    obj: System.IntPtr,
    v: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkLBF_Params_pupils0_get(
    obj: System.IntPtr,
    v: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkLBF_Params_pupils0_set(
    obj: System.IntPtr,
    v: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkLBF_Params_pupils1_get(
    obj: System.IntPtr,
    v: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkLBF_Params_pupils1_set(
    obj: System.IntPtr,
    v: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkLBF_Params_detectROI_get(
    obj: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Rect>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkLBF_Params_detectROI_set(
    obj: System.IntPtr,
    val: OpenCvSharp.Rect
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkLBF_Params_read(
    obj: System.IntPtr,
    fn: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkLBF_Params_write(
    obj: System.IntPtr,
    fs: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkAAM_create(
    params: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_Ptr_FacemarkAAM_get(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_Ptr_FacemarkAAM_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkAAM_Params_new(
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkAAM_Params_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkAAM_Params_model_filename_get(
    obj: System.IntPtr,
    s: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkAAM_Params_model_filename_set(
    obj: System.IntPtr,
    s: string
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkAAM_Params_m_get(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkAAM_Params_m_set(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkAAM_Params_n_get(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkAAM_Params_n_set(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkAAM_Params_n_iter_get(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkAAM_Params_n_iter_set(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkAAM_Params_verbose_get(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkAAM_Params_verbose_set(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkAAM_Params_save_model_get(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkAAM_Params_save_model_set(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkAAM_Params_max_m_get(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkAAM_Params_max_m_set(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkAAM_Params_max_n_get(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkAAM_Params_max_n_set(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkAAM_Params_texture_max_m_get(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkAAM_Params_texture_max_m_set(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkAAM_Params_scales_get(
    obj: System.IntPtr,
    v: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkAAM_Params_scales_set(
    obj: System.IntPtr,
    v: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkAAM_Params_read(
    obj: System.IntPtr,
    fn: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FacemarkAAM_Params_write(
    obj: System.IntPtr,
    fs: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FaceRecognizer_train(
    obj: System.IntPtr,
    src: HostArray<System.IntPtr>,
    srcLength: number | StrongNumeric<Int32Host>,
    labels: HostArray<number | StrongNumeric<Int32Host>>,
    labelsLength: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FaceRecognizer_update(
    obj: System.IntPtr,
    src: HostArray<System.IntPtr>,
    srcLength: number | StrongNumeric<Int32Host>,
    labels: HostArray<number | StrongNumeric<Int32Host>>,
    labelsLength: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FaceRecognizer_predict1(
    obj: System.IntPtr,
    src: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FaceRecognizer_predict2(
    obj: System.IntPtr,
    src: System.IntPtr,
    label: HostVariableOut<number>,
    confidence: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FaceRecognizer_write1(
    obj: System.IntPtr,
    filename: string
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FaceRecognizer_read1(
    obj: System.IntPtr,
    filename: string
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FaceRecognizer_write2(
    obj: System.IntPtr,
    fs: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FaceRecognizer_read2(
    obj: System.IntPtr,
    fs: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FaceRecognizer_setLabelInfo(
    obj: System.IntPtr,
    label: number | StrongNumeric<Int32Host>,
    strInfo: string
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FaceRecognizer_getLabelInfo(
    obj: System.IntPtr,
    label: number | StrongNumeric<Int32Host>,
    dst: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FaceRecognizer_getLabelsByString(
    obj: System.IntPtr,
    str: string,
    dst: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FaceRecognizer_getThreshold(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_FaceRecognizer_setThreshold(
    obj: System.IntPtr,
    val: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_BasicFaceRecognizer_getNumComponents(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_BasicFaceRecognizer_setNumComponents(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_BasicFaceRecognizer_getThreshold(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_BasicFaceRecognizer_setThreshold(
    obj: System.IntPtr,
    val: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_BasicFaceRecognizer_getProjections(
    obj: System.IntPtr,
    dst: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_BasicFaceRecognizer_getLabels(
    obj: System.IntPtr,
    dst: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_BasicFaceRecognizer_getEigenValues(
    obj: System.IntPtr,
    dst: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_BasicFaceRecognizer_getEigenVectors(
    obj: System.IntPtr,
    dst: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_BasicFaceRecognizer_getMean(
    obj: System.IntPtr,
    dst: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_EigenFaceRecognizer_create(
    numComponents: number | StrongNumeric<Int32Host>,
    threshold: number | StrongNumeric<DoubleHost>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_Ptr_EigenFaceRecognizer_get(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_Ptr_EigenFaceRecognizer_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  face_FisherFaceRecognizer_create(
    numComponents: number | StrongNumeric<Int32Host>,
    threshold: number | StrongNumeric<DoubleHost>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_Ptr_FisherFaceRecognizer_get(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_Ptr_FisherFaceRecognizer_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  face_LBPHFaceRecognizer_create(
    radius: number | StrongNumeric<Int32Host>,
    neighbors: number | StrongNumeric<Int32Host>,
    gridX: number | StrongNumeric<Int32Host>,
    gridY: number | StrongNumeric<Int32Host>,
    threshold: number | StrongNumeric<DoubleHost>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_LBPHFaceRecognizer_getGridX(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_LBPHFaceRecognizer_setGridX(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_LBPHFaceRecognizer_getGridY(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_LBPHFaceRecognizer_setGridY(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_LBPHFaceRecognizer_getRadius(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_LBPHFaceRecognizer_setRadius(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_LBPHFaceRecognizer_getNeighbors(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_LBPHFaceRecognizer_setNeighbors(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_LBPHFaceRecognizer_getThreshold(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_LBPHFaceRecognizer_setThreshold(
    obj: System.IntPtr,
    val: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_LBPHFaceRecognizer_getHistograms(
    obj: System.IntPtr,
    dst: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_LBPHFaceRecognizer_getLabels(
    obj: System.IntPtr,
    dst: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_Ptr_LBPHFaceRecognizer_get(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  face_Ptr_LBPHFaceRecognizer_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  features2d_drawKeypoints(
    image: System.IntPtr,
    keypoints: HostArray<OpenCvSharp.KeyPoint>,
    keypointsLength: number | StrongNumeric<Int32Host>,
    outImage: System.IntPtr,
    color: OpenCvSharp.Scalar,
    flags: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_drawMatches(
    img1: System.IntPtr,
    keypoints1: HostArray<OpenCvSharp.KeyPoint>,
    keypoints1Length: number | StrongNumeric<Int32Host>,
    img2: System.IntPtr,
    keypoints2: HostArray<OpenCvSharp.KeyPoint>,
    keypoints2Length: number | StrongNumeric<Int32Host>,
    matches1to2: HostArray<OpenCvSharp.DMatch>,
    matches1to2Length: number | StrongNumeric<Int32Host>,
    outImg: System.IntPtr,
    matchColor: OpenCvSharp.Scalar,
    singlePointColor: OpenCvSharp.Scalar,
    matchesMask: HostArray<number | StrongNumeric<ByteHost>> | null,
    matchesMaskLength: number | StrongNumeric<Int32Host>,
    flags: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_drawMatchesKnn(
    img1: System.IntPtr,
    keypoints1: HostArray<OpenCvSharp.KeyPoint>,
    keypoints1Length: number | StrongNumeric<Int32Host>,
    img2: System.IntPtr,
    keypoints2: HostArray<OpenCvSharp.KeyPoint>,
    keypoints2Length: number | StrongNumeric<Int32Host>,
    matches1to2: HostArray<System.IntPtr>,
    matches1to2Size1: number | StrongNumeric<Int32Host>,
    matches1to2Size2: HostArray<number | StrongNumeric<Int32Host>>,
    outImg: System.IntPtr,
    matchColor: OpenCvSharp.Scalar,
    singlePointColor: OpenCvSharp.Scalar,
    matchesMask: HostArray<System.IntPtr> | null,
    matchesMaskSize1: number | StrongNumeric<Int32Host>,
    matchesMaskSize2: HostArray<number | StrongNumeric<Int32Host>> | null,
    flags: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_evaluateFeatureDetector(
    img1: System.IntPtr,
    img2: System.IntPtr,
    h1to2: System.IntPtr,
    keypoints1: System.IntPtr,
    keypoints2: System.IntPtr,
    repeatability: HostVariableOut<number>,
    correspCount: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_computeRecallPrecisionCurve(
    matches1to2: HostArray<System.IntPtr>,
    matches1to2Size1: number | StrongNumeric<Int32Host>,
    matches1to2Size2: HostArray<number | StrongNumeric<Int32Host>>,
    correctMatches1to2Mask: HostArray<System.IntPtr>,
    correctMatches1to2MaskSize1: number | StrongNumeric<Int32Host>,
    correctMatches1to2MaskSize2: HostArray<number | StrongNumeric<Int32Host>>,
    recallPrecisionCurve: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_getRecall(
    recallPrecisionCurve: HostArray<OpenCvSharp.Point2f>,
    recallPrecisionCurveSize: number | StrongNumeric<Int32Host>,
    l_precision: number | StrongNumeric<SingleHost>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_getNearestPoint(
    recallPrecisionCurve: HostArray<OpenCvSharp.Point2f>,
    recallPrecisionCurveSize: number | StrongNumeric<Int32Host>,
    l_precision: number | StrongNumeric<SingleHost>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_KeyPointsFilter_runByImageBorder(
    keypoints: System.IntPtr,
    imageSize: OpenCvSharp.Size,
    borderSize: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_KeyPointsFilter_runByKeypointSize(
    keypoints: System.IntPtr,
    minSize: number | StrongNumeric<SingleHost>,
    maxSize: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_KeyPointsFilter_runByPixelsMask(
    keypoints: System.IntPtr,
    mask: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_KeyPointsFilter_removeDuplicated(
    keypoints: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_KeyPointsFilter_removeDuplicatedSorted(
    keypoints: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_KeyPointsFilter_retainBest(
    keypoints: System.IntPtr,
    nPoints: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_BOWTrainer_add(
    obj: System.IntPtr,
    descriptors: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_BOWTrainer_getDescriptors(
    obj: System.IntPtr,
    descriptors: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_BOWTrainer_descriptorsCount(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_BOWTrainer_clear(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  features2d_BOWKMeansTrainer_new(
    clusterCount: number | StrongNumeric<Int32Host>,
    termcrit: OpenCvSharp.TermCriteria,
    attempts: number | StrongNumeric<Int32Host>,
    flags: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_BOWKMeansTrainer_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  features2d_BOWKMeansTrainer_cluster1(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_BOWKMeansTrainer_cluster2(
    obj: System.IntPtr,
    descriptors: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_BOWImgDescriptorExtractor_new1_Ptr(
    dextractor: System.IntPtr,
    dmatcher: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_BOWImgDescriptorExtractor_new2_Ptr(
    dmatcher: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_BOWImgDescriptorExtractor_new1_RawPtr(
    dextractor: System.IntPtr,
    dmatcher: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_BOWImgDescriptorExtractor_new2_RawPtr(
    dmatcher: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_BOWImgDescriptorExtractor_delete(
    obj: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_BOWImgDescriptorExtractor_setVocabulary(
    obj: System.IntPtr,
    vocabulary: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_BOWImgDescriptorExtractor_getVocabulary(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_BOWImgDescriptorExtractor_compute11(
    obj: System.IntPtr,
    image: System.IntPtr,
    keypoints: System.IntPtr,
    imgDescriptor: System.IntPtr,
    pointIdxsOfClusters: System.IntPtr,
    descriptors: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_BOWImgDescriptorExtractor_compute12(
    obj: System.IntPtr,
    keypointDescriptors: System.IntPtr,
    imgDescriptor: System.IntPtr,
    pointIdxsOfClusters: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_BOWImgDescriptorExtractor_compute2(
    obj: System.IntPtr,
    image: System.IntPtr,
    keypoints: System.IntPtr,
    imgDescriptor: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_BOWImgDescriptorExtractor_descriptorSize(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_BOWImgDescriptorExtractor_descriptorType(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_DescriptorMatcher_add(
    obj: System.IntPtr,
    descriptors: HostArray<System.IntPtr>,
    descriptorLength: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_DescriptorMatcher_getTrainDescriptors(
    obj: System.IntPtr,
    dst: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_DescriptorMatcher_clear(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  features2d_DescriptorMatcher_empty(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_DescriptorMatcher_isMaskSupported(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_DescriptorMatcher_train(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  features2d_DescriptorMatcher_match1(
    obj: System.IntPtr,
    queryDescriptors: System.IntPtr,
    trainDescriptors: System.IntPtr,
    matches: System.IntPtr,
    mask: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_DescriptorMatcher_knnMatch1(
    obj: System.IntPtr,
    queryDescriptors: System.IntPtr,
    trainDescriptors: System.IntPtr,
    matches: System.IntPtr,
    k: number | StrongNumeric<Int32Host>,
    mask: System.IntPtr,
    compactResult: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_DescriptorMatcher_radiusMatch1(
    obj: System.IntPtr,
    queryDescriptors: System.IntPtr,
    trainDescriptors: System.IntPtr,
    matches: System.IntPtr,
    maxDistance: number | StrongNumeric<SingleHost>,
    mask: System.IntPtr,
    compactResult: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_DescriptorMatcher_match2(
    obj: System.IntPtr,
    queryDescriptors: System.IntPtr,
    matches: System.IntPtr,
    masks: HostArray<System.IntPtr>,
    masksSize: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_DescriptorMatcher_knnMatch2(
    obj: System.IntPtr,
    queryDescriptors: System.IntPtr,
    matches: System.IntPtr,
    k: number | StrongNumeric<Int32Host>,
    masks: HostArray<System.IntPtr>,
    masksSize: number | StrongNumeric<Int32Host>,
    compactResult: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_DescriptorMatcher_radiusMatch2(
    obj: System.IntPtr,
    queryDescriptors: System.IntPtr,
    matches: System.IntPtr,
    maxDistance: number | StrongNumeric<SingleHost>,
    masks: HostArray<System.IntPtr>,
    masksSize: number | StrongNumeric<Int32Host>,
    compactResult: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_DescriptorMatcher_create(
    descriptorMatcherType: string,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_Ptr_DescriptorMatcher_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_Ptr_DescriptorMatcher_delete(ptr: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  features2d_BFMatcher_new(
    normType: number | StrongNumeric<Int32Host>,
    crossCheck: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_BFMatcher_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  features2d_BFMatcher_isMaskSupported(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_Ptr_BFMatcher_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_Ptr_BFMatcher_delete(ptr: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  features2d_FlannBasedMatcher_new(
    indexParams: System.IntPtr,
    searchParams: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_FlannBasedMatcher_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  features2d_FlannBasedMatcher_add(
    obj: System.IntPtr,
    descriptors: HostArray<System.IntPtr>,
    descriptorsSize: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_FlannBasedMatcher_clear(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  features2d_FlannBasedMatcher_train(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  features2d_FlannBasedMatcher_isMaskSupported(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_Ptr_FlannBasedMatcher_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_Ptr_FlannBasedMatcher_delete(ptr: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  features2d_Feature2D_detect_Mat1(
    detector: System.IntPtr,
    image: System.IntPtr,
    keypoints: System.IntPtr,
    mask: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_Feature2D_detect_Mat2(
    detector: System.IntPtr,
    images: HostArray<System.IntPtr>,
    imageLength: number | StrongNumeric<Int32Host>,
    keypoints: System.IntPtr,
    mask: HostArray<System.IntPtr> | null
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_Feature2D_detect_InputArray(
    detector: System.IntPtr,
    image: System.IntPtr,
    keypoints: System.IntPtr,
    mask: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_Feature2D_compute1(
    obj: System.IntPtr,
    image: System.IntPtr,
    keypoints: System.IntPtr,
    descriptors: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_Feature2D_compute2(
    detector: System.IntPtr,
    images: HostArray<System.IntPtr>,
    imageLength: number | StrongNumeric<Int32Host>,
    keypoints: System.IntPtr,
    descriptors: HostArray<System.IntPtr>,
    descriptorsLength: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_Feature2D_detectAndCompute(
    detector: System.IntPtr,
    image: System.IntPtr,
    mask: System.IntPtr,
    keypoints: System.IntPtr,
    descriptors: System.IntPtr,
    useProvidedKeypoints: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_Feature2D_descriptorSize(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_Feature2D_descriptorType(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_Feature2D_defaultNorm(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_Feature2D_empty(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_Feature2D_write(
    obj: System.IntPtr,
    fileName: string
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_Feature2D_read(
    obj: System.IntPtr,
    fileName: string
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_Feature2D_getDefaultName(
    obj: System.IntPtr,
    returnValue: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_SIFT_create(
    nFeatures: number | StrongNumeric<Int32Host>,
    nOctaveLayers: number | StrongNumeric<Int32Host>,
    contrastThreshold: number | StrongNumeric<DoubleHost>,
    edgeThreshold: number | StrongNumeric<DoubleHost>,
    sigma: number | StrongNumeric<DoubleHost>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_Ptr_SIFT_delete(ptr: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  features2d_Ptr_SIFT_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_BRISK_create1(
    thresh: number | StrongNumeric<Int32Host>,
    octaves: number | StrongNumeric<Int32Host>,
    patternScale: number | StrongNumeric<SingleHost>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_BRISK_create2(
    radiusList: HostArray<number | StrongNumeric<SingleHost>>,
    radiusListLength: number | StrongNumeric<Int32Host>,
    numberList: HostArray<number | StrongNumeric<Int32Host>>,
    numberListLength: number | StrongNumeric<Int32Host>,
    dMax: number | StrongNumeric<SingleHost>,
    dMin: number | StrongNumeric<SingleHost>,
    indexChange: HostArray<number | StrongNumeric<Int32Host>> | null,
    indexChangeLength: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_BRISK_create3(
    thresh: number | StrongNumeric<Int32Host>,
    octaves: number | StrongNumeric<Int32Host>,
    radiusList: HostArray<number | StrongNumeric<SingleHost>>,
    radiusListLength: number | StrongNumeric<Int32Host>,
    numberList: HostArray<number | StrongNumeric<Int32Host>>,
    numberListLength: number | StrongNumeric<Int32Host>,
    dMax: number | StrongNumeric<SingleHost>,
    dMin: number | StrongNumeric<SingleHost>,
    indexChange: HostArray<number | StrongNumeric<Int32Host>> | null,
    indexChangeLength: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_Ptr_BRISK_delete(ptr: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  features2d_Ptr_BRISK_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_ORB_create(
    nFeatures: number | StrongNumeric<Int32Host>,
    scaleFactor: number | StrongNumeric<SingleHost>,
    nlevels: number | StrongNumeric<Int32Host>,
    edgeThreshold: number | StrongNumeric<Int32Host>,
    firstLevel: number | StrongNumeric<Int32Host>,
    wtaK: number | StrongNumeric<Int32Host>,
    scoreType: number | StrongNumeric<Int32Host>,
    patchSize: number | StrongNumeric<Int32Host>,
    fastThreshold: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_Ptr_ORB_delete(ptr: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  features2d_Ptr_ORB_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_ORB_setMaxFeatures(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_ORB_getMaxFeatures(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_ORB_setScaleFactor(
    obj: System.IntPtr,
    val: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_ORB_getScaleFactor(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_ORB_setNLevels(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_ORB_getNLevels(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_ORB_setEdgeThreshold(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_ORB_getEdgeThreshold(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_ORB_setFirstLevel(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_ORB_getFirstLevel(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_ORB_setWTA_K(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_ORB_getWTA_K(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_ORB_setScoreType(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_ORB_getScoreType(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_ORB_setPatchSize(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_ORB_getPatchSize(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_ORB_setFastThreshold(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_ORB_getFastThreshold(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_MSER_create(
    delta: number | StrongNumeric<Int32Host>,
    minArea: number | StrongNumeric<Int32Host>,
    maxArea: number | StrongNumeric<Int32Host>,
    maxVariation: number | StrongNumeric<DoubleHost>,
    minDiversity: number | StrongNumeric<DoubleHost>,
    maxEvolution: number | StrongNumeric<Int32Host>,
    areaThreshold: number | StrongNumeric<DoubleHost>,
    minMargin: number | StrongNumeric<DoubleHost>,
    edgeBlurSize: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_Ptr_MSER_delete(ptr: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  features2d_Ptr_MSER_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_MSER_detectRegions(
    obj: System.IntPtr,
    image: System.IntPtr,
    msers: System.IntPtr,
    bboxes: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_MSER_setDelta(
    obj: System.IntPtr,
    delta: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_MSER_getDelta(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_MSER_setMinArea(
    obj: System.IntPtr,
    minArea: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_MSER_getMinArea(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_MSER_setMaxArea(
    obj: System.IntPtr,
    maxArea: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_MSER_getMaxArea(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_MSER_setPass2Only(
    obj: System.IntPtr,
    f: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_MSER_getPass2Only(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_FAST1(
    image: System.IntPtr,
    keypoints: System.IntPtr,
    threshold: number | StrongNumeric<Int32Host>,
    nonmaxSupression: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_FAST2(
    image: System.IntPtr,
    keypoints: System.IntPtr,
    threshold: number | StrongNumeric<Int32Host>,
    nonmaxSupression: number | StrongNumeric<Int32Host>,
    type: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_FastFeatureDetector_create(
    threshold: number | StrongNumeric<Int32Host>,
    nonmaxSuppression: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_Ptr_FastFeatureDetector_delete(
    ptr: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_Ptr_FastFeatureDetector_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_FastFeatureDetector_setThreshold(
    obj: System.IntPtr,
    threshold: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_FastFeatureDetector_getThreshold(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_FastFeatureDetector_setNonmaxSuppression(
    obj: System.IntPtr,
    f: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_FastFeatureDetector_getNonmaxSuppression(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_FastFeatureDetector_setType(
    obj: System.IntPtr,
    type: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_FastFeatureDetector_getType(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_AGAST(
    image: System.IntPtr,
    keypoints: System.IntPtr,
    threshold: number | StrongNumeric<Int32Host>,
    nonmaxSuppression: number | StrongNumeric<Int32Host>,
    type: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_AgastFeatureDetector_create(
    threshold: number | StrongNumeric<Int32Host>,
    nonmaxSuppression: number | StrongNumeric<Int32Host>,
    type: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_Ptr_AgastFeatureDetector_delete(
    ptr: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_Ptr_AgastFeatureDetector_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_AgastFeatureDetector_setThreshold(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_AgastFeatureDetector_getThreshold(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_AgastFeatureDetector_setNonmaxSuppression(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_AgastFeatureDetector_getNonmaxSuppression(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_AgastFeatureDetector_setType(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_AgastFeatureDetector_getType(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_GFTTDetector_create(
    maxCorners: number | StrongNumeric<Int32Host>,
    qualityLevel: number | StrongNumeric<DoubleHost>,
    minDistance: number | StrongNumeric<DoubleHost>,
    blockSize: number | StrongNumeric<Int32Host>,
    useHarrisDetector: number | StrongNumeric<Int32Host>,
    k: number | StrongNumeric<DoubleHost>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_Ptr_GFTTDetector_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_Ptr_GFTTDetector_delete(ptr: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  features2d_GFTTDetector_setMaxFeatures(
    obj: System.IntPtr,
    maxFeatures: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_GFTTDetector_getMaxFeatures(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_GFTTDetector_setQualityLevel(
    obj: System.IntPtr,
    qLevel: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_GFTTDetector_getQualityLevel(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_GFTTDetector_setMinDistance(
    obj: System.IntPtr,
    minDistance: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_GFTTDetector_getMinDistance(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_GFTTDetector_setBlockSize(
    obj: System.IntPtr,
    blockSize: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_GFTTDetector_getBlockSize(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_GFTTDetector_setHarrisDetector(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_GFTTDetector_getHarrisDetector(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_GFTTDetector_setK(
    obj: System.IntPtr,
    k: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_GFTTDetector_getK(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_SimpleBlobDetector_create(
    parameters: HostVariableRef<OpenCvSharp.SimpleBlobDetector.WParams>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_Ptr_SimpleBlobDetector_delete(
    ptr: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_Ptr_SimpleBlobDetector_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_KAZE_create(
    extended: number | StrongNumeric<Int32Host>,
    upright: number | StrongNumeric<Int32Host>,
    threshold: number | StrongNumeric<SingleHost>,
    nOctaves: number | StrongNumeric<Int32Host>,
    nOctaveLayers: number | StrongNumeric<Int32Host>,
    diffusivity: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_Ptr_KAZE_delete(ptr: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  features2d_Ptr_KAZE_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_KAZE_setDiffusivity(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_KAZE_getDiffusivity(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_KAZE_setExtended(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_KAZE_getExtended(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_KAZE_setNOctaveLayers(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_KAZE_getNOctaveLayers(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_KAZE_setNOctaves(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_KAZE_getNOctaves(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_KAZE_setThreshold(
    obj: System.IntPtr,
    val: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_KAZE_getThreshold(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_KAZE_setUpright(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_KAZE_getUpright(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_AKAZE_create(
    descriptor_type: number | StrongNumeric<Int32Host>,
    descriptor_size: number | StrongNumeric<Int32Host>,
    descriptor_channels: number | StrongNumeric<Int32Host>,
    threshold: number | StrongNumeric<SingleHost>,
    nOctaves: number | StrongNumeric<Int32Host>,
    nOctaveLayers: number | StrongNumeric<Int32Host>,
    diffusivity: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_Ptr_AKAZE_delete(ptr: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  features2d_Ptr_AKAZE_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_AKAZE_setDescriptorType(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_AKAZE_getDescriptorType(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_AKAZE_setDescriptorSize(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_AKAZE_getDescriptorSize(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_AKAZE_setDescriptorChannels(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_AKAZE_getDescriptorChannels(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_AKAZE_setThreshold(
    obj: System.IntPtr,
    val: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_AKAZE_getThreshold(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_AKAZE_setNOctaves(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_AKAZE_getNOctaves(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_AKAZE_setNOctaveLayers(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_AKAZE_getNOctaveLayers(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_AKAZE_setDiffusivity(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  features2d_AKAZE_getDiffusivity(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_getGaussianKernel(
    ksize: number | StrongNumeric<Int32Host>,
    sigma: number | StrongNumeric<DoubleHost>,
    ktype: OpenCvSharp.MatType,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_getDerivKernels(
    kx: System.IntPtr,
    ky: System.IntPtr,
    dx: number | StrongNumeric<Int32Host>,
    dy: number | StrongNumeric<Int32Host>,
    ksize: number | StrongNumeric<Int32Host>,
    normalize: number | StrongNumeric<Int32Host>,
    ktype: OpenCvSharp.MatType
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_getGaborKernel(
    ksize: OpenCvSharp.Size,
    sigma: number | StrongNumeric<DoubleHost>,
    theta: number | StrongNumeric<DoubleHost>,
    lambd: number | StrongNumeric<DoubleHost>,
    gamma: number | StrongNumeric<DoubleHost>,
    psi: number | StrongNumeric<DoubleHost>,
    ktype: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_getStructuringElement(
    shape: number | StrongNumeric<Int32Host>,
    ksize: OpenCvSharp.Size,
    anchor: OpenCvSharp.Point,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_medianBlur(
    src: System.IntPtr,
    dst: System.IntPtr,
    ksize: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_GaussianBlur(
    src: System.IntPtr,
    dst: System.IntPtr,
    ksize: OpenCvSharp.Size,
    sigmaX: number | StrongNumeric<DoubleHost>,
    sigmaY: number | StrongNumeric<DoubleHost>,
    borderType: EnumInput<OpenCvSharp.BorderTypes>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_bilateralFilter(
    src: System.IntPtr,
    dst: System.IntPtr,
    d: number | StrongNumeric<Int32Host>,
    sigmaColor: number | StrongNumeric<DoubleHost>,
    sigmaSpace: number | StrongNumeric<DoubleHost>,
    borderType: EnumInput<OpenCvSharp.BorderTypes>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_boxFilter(
    src: System.IntPtr,
    dst: System.IntPtr,
    ddepth: OpenCvSharp.MatType,
    ksize: OpenCvSharp.Size,
    anchor: OpenCvSharp.Point,
    normalize: number | StrongNumeric<Int32Host>,
    borderType: EnumInput<OpenCvSharp.BorderTypes>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_sqrBoxFilter(
    src: System.IntPtr,
    dst: System.IntPtr,
    ddepth: OpenCvSharp.MatType,
    ksize: OpenCvSharp.Size,
    anchor: OpenCvSharp.Point,
    normalize: number | StrongNumeric<Int32Host>,
    borderType: EnumInput<OpenCvSharp.BorderTypes>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_blur(
    src: System.IntPtr,
    dst: System.IntPtr,
    ksize: OpenCvSharp.Size,
    anchor: OpenCvSharp.Point,
    borderType: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_filter2D(
    src: System.IntPtr,
    dst: System.IntPtr,
    ddepth: OpenCvSharp.MatType,
    kernel: System.IntPtr,
    anchor: OpenCvSharp.Point,
    delta: number | StrongNumeric<DoubleHost>,
    borderType: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_sepFilter2D(
    src: System.IntPtr,
    dst: System.IntPtr,
    ddepth: OpenCvSharp.MatType,
    kernelX: System.IntPtr,
    kernelY: System.IntPtr,
    anchor: OpenCvSharp.Point,
    delta: number | StrongNumeric<DoubleHost>,
    borderType: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_Sobel(
    src: System.IntPtr,
    dst: System.IntPtr,
    ddepth: OpenCvSharp.MatType,
    dx: number | StrongNumeric<Int32Host>,
    dy: number | StrongNumeric<Int32Host>,
    ksize: number | StrongNumeric<Int32Host>,
    scale: number | StrongNumeric<DoubleHost>,
    delta: number | StrongNumeric<DoubleHost>,
    borderType: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_spatialGradient(
    src: System.IntPtr,
    dx: System.IntPtr,
    dy: System.IntPtr,
    ksize: number | StrongNumeric<Int32Host>,
    borderType: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_Scharr(
    src: System.IntPtr,
    dst: System.IntPtr,
    ddepth: OpenCvSharp.MatType,
    dx: number | StrongNumeric<Int32Host>,
    dy: number | StrongNumeric<Int32Host>,
    scale: number | StrongNumeric<DoubleHost>,
    delta: number | StrongNumeric<DoubleHost>,
    borderType: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_Laplacian(
    src: System.IntPtr,
    dst: System.IntPtr,
    ddepth: OpenCvSharp.MatType,
    ksize: number | StrongNumeric<Int32Host>,
    scale: number | StrongNumeric<DoubleHost>,
    delta: number | StrongNumeric<DoubleHost>,
    borderType: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_Canny1(
    src: System.IntPtr,
    edges: System.IntPtr,
    threshold1: number | StrongNumeric<DoubleHost>,
    threshold2: number | StrongNumeric<DoubleHost>,
    apertureSize: number | StrongNumeric<Int32Host>,
    l2Gradient: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_Canny2(
    dx: System.IntPtr,
    dy: System.IntPtr,
    edges: System.IntPtr,
    threshold1: number | StrongNumeric<DoubleHost>,
    threshold2: number | StrongNumeric<DoubleHost>,
    l2Gradient: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_cornerMinEigenVal(
    src: System.IntPtr,
    dst: System.IntPtr,
    blockSize: number | StrongNumeric<Int32Host>,
    ksize: number | StrongNumeric<Int32Host>,
    borderType: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_cornerHarris(
    src: System.IntPtr,
    dst: System.IntPtr,
    blockSize: number | StrongNumeric<Int32Host>,
    ksize: number | StrongNumeric<Int32Host>,
    k: number | StrongNumeric<DoubleHost>,
    borderType: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_cornerEigenValsAndVecs(
    src: System.IntPtr,
    dst: System.IntPtr,
    blockSize: number | StrongNumeric<Int32Host>,
    ksize: number | StrongNumeric<Int32Host>,
    borderType: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_preCornerDetect(
    src: System.IntPtr,
    dst: System.IntPtr,
    ksize: number | StrongNumeric<Int32Host>,
    borderType: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_cornerSubPix(
    image: System.IntPtr,
    corners: System.IntPtr,
    winSize: OpenCvSharp.Size,
    zeroZone: OpenCvSharp.Size,
    criteria: OpenCvSharp.TermCriteria
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_goodFeaturesToTrack(
    src: System.IntPtr,
    corners: System.IntPtr,
    maxCorners: number | StrongNumeric<Int32Host>,
    qualityLevel: number | StrongNumeric<DoubleHost>,
    minDistance: number | StrongNumeric<DoubleHost>,
    mask: System.IntPtr,
    blockSize: number | StrongNumeric<Int32Host>,
    useHarrisDetector: number | StrongNumeric<Int32Host>,
    k: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_HoughLines(
    src: System.IntPtr,
    lines: System.IntPtr,
    rho: number | StrongNumeric<DoubleHost>,
    theta: number | StrongNumeric<DoubleHost>,
    threshold: number | StrongNumeric<Int32Host>,
    srn: number | StrongNumeric<DoubleHost>,
    stn: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_HoughLinesP(
    src: System.IntPtr,
    lines: System.IntPtr,
    rho: number | StrongNumeric<DoubleHost>,
    theta: number | StrongNumeric<DoubleHost>,
    threshold: number | StrongNumeric<Int32Host>,
    minLineLength: number | StrongNumeric<DoubleHost>,
    maxLineG: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_HoughLinesPointSet(
    point: System.IntPtr,
    lines: System.IntPtr,
    linesMax: number | StrongNumeric<Int32Host>,
    threshold: number | StrongNumeric<Int32Host>,
    minRho: number | StrongNumeric<DoubleHost>,
    maxRho: number | StrongNumeric<DoubleHost>,
    rhoStep: number | StrongNumeric<DoubleHost>,
    minTheta: number | StrongNumeric<DoubleHost>,
    maxTheta: number | StrongNumeric<DoubleHost>,
    thetaStep: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_HoughCircles(
    src: System.IntPtr,
    circles: System.IntPtr,
    method: number | StrongNumeric<Int32Host>,
    dp: number | StrongNumeric<DoubleHost>,
    minDist: number | StrongNumeric<DoubleHost>,
    param1: number | StrongNumeric<DoubleHost>,
    param2: number | StrongNumeric<DoubleHost>,
    minRadius: number | StrongNumeric<Int32Host>,
    maxRadius: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_erode(
    src: System.IntPtr,
    dst: System.IntPtr,
    kernel: System.IntPtr,
    anchor: OpenCvSharp.Point,
    iterations: number | StrongNumeric<Int32Host>,
    borderType: number | StrongNumeric<Int32Host>,
    borderValue: OpenCvSharp.Scalar
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_dilate(
    src: System.IntPtr,
    dst: System.IntPtr,
    kernel: System.IntPtr,
    anchor: OpenCvSharp.Point,
    iterations: number | StrongNumeric<Int32Host>,
    borderType: number | StrongNumeric<Int32Host>,
    borderValue: OpenCvSharp.Scalar
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_morphologyEx(
    src: System.IntPtr,
    dst: System.IntPtr,
    op: number | StrongNumeric<Int32Host>,
    kernel: System.IntPtr,
    anchor: OpenCvSharp.Point,
    iterations: number | StrongNumeric<Int32Host>,
    borderType: number | StrongNumeric<Int32Host>,
    borderValue: OpenCvSharp.Scalar
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_resize(
    src: System.IntPtr,
    dst: System.IntPtr,
    dsize: OpenCvSharp.Size,
    fx: number | StrongNumeric<DoubleHost>,
    fy: number | StrongNumeric<DoubleHost>,
    interpolation: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_warpAffine(
    src: System.IntPtr,
    dst: System.IntPtr,
    m: System.IntPtr,
    dsize: OpenCvSharp.Size,
    flags: number | StrongNumeric<Int32Host>,
    borderMode: number | StrongNumeric<Int32Host>,
    borderValue: OpenCvSharp.Scalar
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_warpPerspective_MisInputArray(
    src: System.IntPtr,
    dst: System.IntPtr,
    m: System.IntPtr,
    dsize: OpenCvSharp.Size,
    flags: number | StrongNumeric<Int32Host>,
    borderMode: number | StrongNumeric<Int32Host>,
    borderValue: OpenCvSharp.Scalar
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_warpPerspective_MisArray(
    src: System.IntPtr,
    dst: System.IntPtr,
    m: HostArray<number | StrongNumeric<SingleHost>>,
    mRow: number | StrongNumeric<Int32Host>,
    mCol: number | StrongNumeric<Int32Host>,
    dsize: OpenCvSharp.Size,
    flags: number | StrongNumeric<Int32Host>,
    borderMode: number | StrongNumeric<Int32Host>,
    borderValue: OpenCvSharp.Scalar
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_remap(
    src: System.IntPtr,
    dst: System.IntPtr,
    map1: System.IntPtr,
    map2: System.IntPtr,
    interpolation: number | StrongNumeric<Int32Host>,
    borderMode: number | StrongNumeric<Int32Host>,
    borderValue: OpenCvSharp.Scalar
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_convertMaps(
    map1: System.IntPtr,
    map2: System.IntPtr,
    dstmap1: System.IntPtr,
    dstmap2: System.IntPtr,
    dstmap1Type: OpenCvSharp.MatType,
    nninterpolation: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_getRotationMatrix2D(
    center: OpenCvSharp.Point2f,
    angle: number | StrongNumeric<DoubleHost>,
    scale: number | StrongNumeric<DoubleHost>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_invertAffineTransform(
    m: System.IntPtr,
    im: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_getPerspectiveTransform1(
    src: HostArray<OpenCvSharp.Point2f>,
    dst: HostArray<OpenCvSharp.Point2f>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_getPerspectiveTransform2(
    src: System.IntPtr,
    dst: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_getAffineTransform1(
    src: HostArray<OpenCvSharp.Point2f>,
    dst: HostArray<OpenCvSharp.Point2f>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_getAffineTransform2(
    src: System.IntPtr,
    dst: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_getRectSubPix(
    image: System.IntPtr,
    patchSize: OpenCvSharp.Size,
    center: OpenCvSharp.Point2f,
    patch: System.IntPtr,
    patchType: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_logPolar(
    src: System.IntPtr,
    dst: System.IntPtr,
    center: OpenCvSharp.Point2f,
    m: number | StrongNumeric<DoubleHost>,
    flags: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_linearPolar(
    src: System.IntPtr,
    dst: System.IntPtr,
    center: OpenCvSharp.Point2f,
    maxRadius: number | StrongNumeric<DoubleHost>,
    flags: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_warpPolar(
    src: System.IntPtr,
    dst: System.IntPtr,
    dsize: OpenCvSharp.Size,
    center: OpenCvSharp.Point2f,
    maxRadius: number | StrongNumeric<DoubleHost>,
    flags: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_integral1(
    src: System.IntPtr,
    sum: System.IntPtr,
    sdepth: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_integral2(
    src: System.IntPtr,
    sum: System.IntPtr,
    sqsum: System.IntPtr,
    sdepth: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_integral3(
    src: System.IntPtr,
    sum: System.IntPtr,
    sqsum: System.IntPtr,
    tilted: System.IntPtr,
    sdepth: number | StrongNumeric<Int32Host>,
    sqdepth: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_accumulate(
    src: System.IntPtr,
    dst: System.IntPtr,
    mask: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_accumulateSquare(
    src: System.IntPtr,
    dst: System.IntPtr,
    mask: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_accumulateProduct(
    src1: System.IntPtr,
    src2: System.IntPtr,
    dst: System.IntPtr,
    mask: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_accumulateWeighted(
    src: System.IntPtr,
    dst: System.IntPtr,
    alpha: number | StrongNumeric<DoubleHost>,
    mask: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_phaseCorrelate(
    src1: System.IntPtr,
    src2: System.IntPtr,
    window: System.IntPtr,
    response: HostVariableOut<number>,
    returnValue: HostVariableOut<OpenCvSharp.Point2d>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_createHanningWindow(
    dst: System.IntPtr,
    winSize: OpenCvSharp.Size,
    type: OpenCvSharp.MatType
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_threshold(
    src: System.IntPtr,
    dst: System.IntPtr,
    thresh: number | StrongNumeric<DoubleHost>,
    maxval: number | StrongNumeric<DoubleHost>,
    type: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_adaptiveThreshold(
    src: System.IntPtr,
    dst: System.IntPtr,
    maxValue: number | StrongNumeric<DoubleHost>,
    adaptiveMethod: number | StrongNumeric<Int32Host>,
    thresholdType: number | StrongNumeric<Int32Host>,
    blockSize: number | StrongNumeric<Int32Host>,
    c: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_pyrDown(
    src: System.IntPtr,
    dst: System.IntPtr,
    dstsize: OpenCvSharp.Size,
    borderType: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_buildPyramid(
    src: System.IntPtr,
    dst: System.IntPtr,
    maxlevel: number | StrongNumeric<Int32Host>,
    borderType: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_pyrUp(
    src: System.IntPtr,
    dst: System.IntPtr,
    dstsize: OpenCvSharp.Size,
    borderType: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_calcHist(
    images: HostArray<System.IntPtr>,
    nimages: number | StrongNumeric<Int32Host>,
    channels: HostArray<number | StrongNumeric<Int32Host>>,
    mask: System.IntPtr,
    hist: System.IntPtr,
    dims: number | StrongNumeric<Int32Host>,
    histSize: HostArray<number | StrongNumeric<Int32Host>>,
    ranges: HostArray<System.IntPtr>,
    uniform: number | StrongNumeric<Int32Host>,
    accumulate: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_calcBackProject(
    images: HostArray<System.IntPtr>,
    nimages: number | StrongNumeric<Int32Host>,
    channels: HostArray<number | StrongNumeric<Int32Host>>,
    hist: System.IntPtr,
    backProject: System.IntPtr,
    ranges: HostArray<System.IntPtr>,
    uniform: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_compareHist(
    h1: System.IntPtr,
    h2: System.IntPtr,
    method: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_equalizeHist(
    src: System.IntPtr,
    dst: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_EMD(
    signature1: System.IntPtr,
    signature2: System.IntPtr,
    distType: number | StrongNumeric<Int32Host>,
    cost: System.IntPtr,
    lowerBound: HostVariableOut<number>,
    flow: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_watershed(
    image: System.IntPtr,
    markers: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_pyrMeanShiftFiltering(
    src: System.IntPtr,
    dst: System.IntPtr,
    sp: number | StrongNumeric<DoubleHost>,
    sr: number | StrongNumeric<DoubleHost>,
    maxLevel: number | StrongNumeric<Int32Host>,
    termcrit: OpenCvSharp.TermCriteria
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_grabCut(
    img: System.IntPtr,
    mask: System.IntPtr,
    rect: OpenCvSharp.Rect,
    bgdModel: System.IntPtr,
    fgdModel: System.IntPtr,
    iterCount: number | StrongNumeric<Int32Host>,
    mode: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_distanceTransformWithLabels(
    src: System.IntPtr,
    dst: System.IntPtr,
    labels: System.IntPtr,
    distanceType: number | StrongNumeric<Int32Host>,
    maskSize: number | StrongNumeric<Int32Host>,
    labelType: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_distanceTransform(
    src: System.IntPtr,
    dst: System.IntPtr,
    distanceType: number | StrongNumeric<Int32Host>,
    maskSize: number | StrongNumeric<Int32Host>,
    dstType: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_floodFill1(
    image: System.IntPtr,
    seedPoint: OpenCvSharp.Point,
    newVal: OpenCvSharp.Scalar,
    rect: HostVariableOut<OpenCvSharp.Rect>,
    loDiff: OpenCvSharp.Scalar,
    upDiff: OpenCvSharp.Scalar,
    flags: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_floodFill2(
    image: System.IntPtr,
    mask: System.IntPtr,
    seedPoint: OpenCvSharp.Point,
    newVal: OpenCvSharp.Scalar,
    rect: HostVariableOut<OpenCvSharp.Rect>,
    loDiff: OpenCvSharp.Scalar,
    upDiff: OpenCvSharp.Scalar,
    flags: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_blendLinear(
    src1: System.IntPtr,
    src2: System.IntPtr,
    weights1: System.IntPtr,
    weights2: System.IntPtr,
    dst: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_cvtColor(
    src: System.IntPtr,
    dst: System.IntPtr,
    code: number | StrongNumeric<Int32Host>,
    dstCn: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_cvtColorTwoPlane(
    src1: System.IntPtr,
    src2: System.IntPtr,
    dst: System.IntPtr,
    code: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_demosaicing(
    src: System.IntPtr,
    dst: System.IntPtr,
    code: number | StrongNumeric<Int32Host>,
    dstCn: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_moments(
    arr: System.IntPtr,
    binaryImage: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<OpenCvSharp.Moments.NativeStruct>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_matchTemplate(
    image: System.IntPtr,
    templ: System.IntPtr,
    result: System.IntPtr,
    method: number | StrongNumeric<Int32Host>,
    mask: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_connectedComponentsWithAlgorithm(
    image: System.IntPtr,
    labels: System.IntPtr,
    connectivity: number | StrongNumeric<Int32Host>,
    ltype: OpenCvSharp.MatType,
    ccltype: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_connectedComponents(
    image: System.IntPtr,
    labels: System.IntPtr,
    connectivity: number | StrongNumeric<Int32Host>,
    ltype: OpenCvSharp.MatType,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_connectedComponentsWithStatsWithAlgorithm(
    image: System.IntPtr,
    labels: System.IntPtr,
    stats: System.IntPtr,
    centroids: System.IntPtr,
    connectivity: number | StrongNumeric<Int32Host>,
    ltype: OpenCvSharp.MatType,
    ccltype: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_connectedComponentsWithStats(
    image: System.IntPtr,
    labels: System.IntPtr,
    stats: System.IntPtr,
    centroids: System.IntPtr,
    connectivity: number | StrongNumeric<Int32Host>,
    ltype: OpenCvSharp.MatType,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_findContours1_vector(
    image: System.IntPtr,
    contours: System.IntPtr,
    hierarchy: System.IntPtr,
    mode: number | StrongNumeric<Int32Host>,
    method: number | StrongNumeric<Int32Host>,
    offset: OpenCvSharp.Point
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_findContours1_OutputArray(
    image: System.IntPtr,
    contours: System.IntPtr,
    hierarchy: System.IntPtr,
    mode: number | StrongNumeric<Int32Host>,
    method: number | StrongNumeric<Int32Host>,
    offset: OpenCvSharp.Point
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_findContours2_vector(
    image: System.IntPtr,
    contours: System.IntPtr,
    mode: number | StrongNumeric<Int32Host>,
    method: number | StrongNumeric<Int32Host>,
    offset: OpenCvSharp.Point
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_findContours2_OutputArray(
    image: System.IntPtr,
    contours: System.IntPtr,
    mode: number | StrongNumeric<Int32Host>,
    method: number | StrongNumeric<Int32Host>,
    offset: OpenCvSharp.Point
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_approxPolyDP_InputArray(
    curve: System.IntPtr,
    approxCurve: System.IntPtr,
    epsilon: number | StrongNumeric<DoubleHost>,
    closed: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_approxPolyDP_Point(
    curve: HostArray<OpenCvSharp.Point>,
    curveLength: number | StrongNumeric<Int32Host>,
    approxCurve: System.IntPtr,
    epsilon: number | StrongNumeric<DoubleHost>,
    closed: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_approxPolyDP_Point2f(
    curve: HostArray<OpenCvSharp.Point2f>,
    curveLength: number | StrongNumeric<Int32Host>,
    approxCurve: System.IntPtr,
    epsilon: number | StrongNumeric<DoubleHost>,
    closed: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_arcLength_InputArray(
    curve: System.IntPtr,
    closed: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_arcLength_Point(
    curve: HostArray<OpenCvSharp.Point>,
    curveLength: number | StrongNumeric<Int32Host>,
    closed: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_arcLength_Point2f(
    curve: HostArray<OpenCvSharp.Point2f>,
    curveLength: number | StrongNumeric<Int32Host>,
    closed: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_boundingRect_InputArray(
    curve: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Rect>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_boundingRect_Point(
    curve: HostArray<OpenCvSharp.Point>,
    curveLength: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<OpenCvSharp.Rect>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_boundingRect_Point2f(
    curve: HostArray<OpenCvSharp.Point2f>,
    curveLength: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<OpenCvSharp.Rect>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_contourArea_InputArray(
    contour: System.IntPtr,
    oriented: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_contourArea_Point(
    contour: HostArray<OpenCvSharp.Point>,
    contourLength: number | StrongNumeric<Int32Host>,
    oriented: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_contourArea_Point2f(
    contour: HostArray<OpenCvSharp.Point2f>,
    contourLength: number | StrongNumeric<Int32Host>,
    oriented: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_minAreaRect_InputArray(
    points: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.RotatedRect>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_minAreaRect_Point(
    points: HostArray<OpenCvSharp.Point>,
    pointsLength: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<OpenCvSharp.RotatedRect>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_minAreaRect_Point2f(
    points: HostArray<OpenCvSharp.Point2f>,
    pointsLength: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<OpenCvSharp.RotatedRect>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_boxPoints_OutputArray(
    box: OpenCvSharp.RotatedRect,
    points: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_boxPoints_Point2f(
    box: OpenCvSharp.RotatedRect,
    points: HostArray<OpenCvSharp.Point2f>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_minEnclosingCircle_InputArray(
    points: System.IntPtr,
    center: HostVariableOut<OpenCvSharp.Point2f>,
    radius: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_minEnclosingCircle_Point(
    points: HostArray<OpenCvSharp.Point>,
    pointsLength: number | StrongNumeric<Int32Host>,
    center: HostVariableOut<OpenCvSharp.Point2f>,
    radius: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_minEnclosingCircle_Point2f(
    points: HostArray<OpenCvSharp.Point2f>,
    pointsLength: number | StrongNumeric<Int32Host>,
    center: HostVariableOut<OpenCvSharp.Point2f>,
    radius: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_minEnclosingTriangle_InputOutputArray(
    points: System.IntPtr,
    triangle: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_minEnclosingTriangle_Point(
    points: HostArray<OpenCvSharp.Point>,
    pointsLength: number | StrongNumeric<Int32Host>,
    triangle: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_minEnclosingTriangle_Point2f(
    points: HostArray<OpenCvSharp.Point2f>,
    pointsLength: number | StrongNumeric<Int32Host>,
    triangle: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_matchShapes_InputArray(
    contour1: System.IntPtr,
    contour2: System.IntPtr,
    method: number | StrongNumeric<Int32Host>,
    parameter: number | StrongNumeric<DoubleHost>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_matchShapes_Point(
    contour1: HostArray<OpenCvSharp.Point>,
    contour1Length: number | StrongNumeric<Int32Host>,
    contour2: HostArray<OpenCvSharp.Point>,
    contour2Length: number | StrongNumeric<Int32Host>,
    method: number | StrongNumeric<Int32Host>,
    parameter: number | StrongNumeric<DoubleHost>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_convexHull_InputArray(
    points: System.IntPtr,
    hull: System.IntPtr,
    clockwise: number | StrongNumeric<Int32Host>,
    returnPoints: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_convexHull_Point_ReturnsPoints(
    points: HostArray<OpenCvSharp.Point>,
    pointsLength: number | StrongNumeric<Int32Host>,
    hull: System.IntPtr,
    clockwise: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_convexHull_Point2f_ReturnsPoints(
    points: HostArray<OpenCvSharp.Point2f>,
    pointsLength: number | StrongNumeric<Int32Host>,
    hull: System.IntPtr,
    clockwise: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_convexHull_Point_ReturnsIndices(
    points: HostArray<OpenCvSharp.Point>,
    pointsLength: number | StrongNumeric<Int32Host>,
    hull: System.IntPtr,
    clockwise: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_convexHull_Point2f_ReturnsIndices(
    points: HostArray<OpenCvSharp.Point2f>,
    pointsLength: number | StrongNumeric<Int32Host>,
    hull: System.IntPtr,
    clockwise: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_convexityDefects_InputArray(
    contour: System.IntPtr,
    convexHull: System.IntPtr,
    convexityDefects: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_convexityDefects_Point(
    contour: HostArray<OpenCvSharp.Point>,
    contourLength: number | StrongNumeric<Int32Host>,
    convexHull: HostArray<number | StrongNumeric<Int32Host>>,
    convexHullLength: number | StrongNumeric<Int32Host>,
    convexityDefects: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_convexityDefects_Point2f(
    contour: HostArray<OpenCvSharp.Point2f>,
    contourLength: number | StrongNumeric<Int32Host>,
    convexHull: HostArray<number | StrongNumeric<Int32Host>>,
    convexHullLength: number | StrongNumeric<Int32Host>,
    convexityDefects: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_isContourConvex_InputArray(
    contour: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_isContourConvex_Point(
    contour: HostArray<OpenCvSharp.Point>,
    contourLength: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_isContourConvex_Point2f(
    contour: HostArray<OpenCvSharp.Point2f>,
    contourLength: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_intersectConvexConvex_InputArray(
    p1: System.IntPtr,
    p2: System.IntPtr,
    p12: System.IntPtr,
    handleNested: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_intersectConvexConvex_Point(
    p1: HostArray<OpenCvSharp.Point>,
    p1Length: number | StrongNumeric<Int32Host>,
    p2: HostArray<OpenCvSharp.Point>,
    p2Length: number | StrongNumeric<Int32Host>,
    p12: System.IntPtr,
    handleNested: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_intersectConvexConvex_Point2f(
    p1: HostArray<OpenCvSharp.Point2f>,
    p1Length: number | StrongNumeric<Int32Host>,
    p2: HostArray<OpenCvSharp.Point2f>,
    p2Length: number | StrongNumeric<Int32Host>,
    p12: System.IntPtr,
    handleNested: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_fitEllipse_InputArray(
    points: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.RotatedRect>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_fitEllipse_Point(
    points: HostArray<OpenCvSharp.Point>,
    pointsLength: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<OpenCvSharp.RotatedRect>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_fitEllipse_Point2f(
    points: HostArray<OpenCvSharp.Point2f>,
    pointsLength: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<OpenCvSharp.RotatedRect>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_fitEllipseAMS_InputArray(
    points: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.RotatedRect>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_fitEllipseAMS_Point(
    points: HostArray<OpenCvSharp.Point>,
    pointsLength: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<OpenCvSharp.RotatedRect>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_fitEllipseAMS_Point2f(
    points: HostArray<OpenCvSharp.Point2f>,
    pointsLength: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<OpenCvSharp.RotatedRect>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_fitEllipseDirect_InputArray(
    points: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.RotatedRect>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_fitEllipseDirect_Point(
    points: HostArray<OpenCvSharp.Point>,
    pointsLength: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<OpenCvSharp.RotatedRect>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_fitEllipseDirect_Point2f(
    points: HostArray<OpenCvSharp.Point2f>,
    pointsLength: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<OpenCvSharp.RotatedRect>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_fitLine_InputArray(
    points: System.IntPtr,
    line: System.IntPtr,
    distType: number | StrongNumeric<Int32Host>,
    param: number | StrongNumeric<DoubleHost>,
    reps: number | StrongNumeric<DoubleHost>,
    aeps: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_fitLine_Point(
    points: HostArray<OpenCvSharp.Point>,
    pointsLength: number | StrongNumeric<Int32Host>,
    line: HostArray<number | StrongNumeric<SingleHost>>,
    distType: number | StrongNumeric<Int32Host>,
    param: number | StrongNumeric<DoubleHost>,
    reps: number | StrongNumeric<DoubleHost>,
    aeps: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_fitLine_Point2f(
    points: HostArray<OpenCvSharp.Point2f>,
    pointsLength: number | StrongNumeric<Int32Host>,
    line: HostArray<number | StrongNumeric<SingleHost>>,
    distType: number | StrongNumeric<Int32Host>,
    param: number | StrongNumeric<DoubleHost>,
    reps: number | StrongNumeric<DoubleHost>,
    aeps: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_fitLine_Point3i(
    points: HostArray<OpenCvSharp.Point3i>,
    pointsLength: number | StrongNumeric<Int32Host>,
    line: HostArray<number | StrongNumeric<SingleHost>>,
    distType: number | StrongNumeric<Int32Host>,
    param: number | StrongNumeric<DoubleHost>,
    reps: number | StrongNumeric<DoubleHost>,
    aeps: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_fitLine_Point3f(
    points: HostArray<OpenCvSharp.Point3f>,
    pointsLength: number | StrongNumeric<Int32Host>,
    line: HostArray<number | StrongNumeric<SingleHost>>,
    distType: number | StrongNumeric<Int32Host>,
    param: number | StrongNumeric<DoubleHost>,
    reps: number | StrongNumeric<DoubleHost>,
    aeps: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_pointPolygonTest_InputArray(
    contour: System.IntPtr,
    pt: OpenCvSharp.Point2f,
    measureDist: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_pointPolygonTest_Point(
    contour: HostArray<OpenCvSharp.Point>,
    contourLength: number | StrongNumeric<Int32Host>,
    pt: OpenCvSharp.Point2f,
    measureDist: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_pointPolygonTest_Point2f(
    contour: HostArray<OpenCvSharp.Point2f>,
    contourLength: number | StrongNumeric<Int32Host>,
    pt: OpenCvSharp.Point2f,
    measureDist: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_rotatedRectangleIntersection_OutputArray(
    rect1: OpenCvSharp.RotatedRect,
    rect2: OpenCvSharp.RotatedRect,
    intersectingRegion: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_rotatedRectangleIntersection_vector(
    rect1: OpenCvSharp.RotatedRect,
    rect2: OpenCvSharp.RotatedRect,
    intersectingRegion: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_applyColorMap1(
    src: System.IntPtr,
    dst: System.IntPtr,
    colormap: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_applyColorMap2(
    src: System.IntPtr,
    dst: System.IntPtr,
    userColor: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_line(
    img: System.IntPtr,
    pt1: OpenCvSharp.Point,
    pt2: OpenCvSharp.Point,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: number | StrongNumeric<Int32Host>,
    shift: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_arrowedLine(
    img: System.IntPtr,
    pt1: OpenCvSharp.Point,
    pt2: OpenCvSharp.Point,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: number | StrongNumeric<Int32Host>,
    shift: number | StrongNumeric<Int32Host>,
    tipLength: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_rectangle_InputOutputArray_Point(
    img: System.IntPtr,
    pt1: OpenCvSharp.Point,
    pt2: OpenCvSharp.Point,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: number | StrongNumeric<Int32Host>,
    shift: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_rectangle_InputOutputArray_Rect(
    img: System.IntPtr,
    rect: OpenCvSharp.Rect,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: number | StrongNumeric<Int32Host>,
    shift: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_rectangle_Mat_Point(
    img: System.IntPtr,
    pt1: OpenCvSharp.Point,
    pt2: OpenCvSharp.Point,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: number | StrongNumeric<Int32Host>,
    shift: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_rectangle_Mat_Rect(
    img: System.IntPtr,
    rect: OpenCvSharp.Rect,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: number | StrongNumeric<Int32Host>,
    shift: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_circle(
    img: System.IntPtr,
    center: OpenCvSharp.Point,
    radius: number | StrongNumeric<Int32Host>,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: number | StrongNumeric<Int32Host>,
    shift: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_ellipse1(
    img: System.IntPtr,
    center: OpenCvSharp.Point,
    axes: OpenCvSharp.Size,
    angle: number | StrongNumeric<DoubleHost>,
    startAngle: number | StrongNumeric<DoubleHost>,
    endAngle: number | StrongNumeric<DoubleHost>,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: number | StrongNumeric<Int32Host>,
    shift: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_ellipse2(
    img: System.IntPtr,
    box: OpenCvSharp.RotatedRect,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_drawMarker(
    img: System.IntPtr,
    position: OpenCvSharp.Point,
    color: OpenCvSharp.Scalar,
    markerType: number | StrongNumeric<Int32Host>,
    markerSize: number | StrongNumeric<Int32Host>,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_fillConvexPoly_Mat(
    img: System.IntPtr,
    pts: HostArray<OpenCvSharp.Point>,
    npts: number | StrongNumeric<Int32Host>,
    color: OpenCvSharp.Scalar,
    lineType: number | StrongNumeric<Int32Host>,
    shift: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_fillConvexPoly_InputOutputArray(
    img: System.IntPtr,
    points: System.IntPtr,
    color: OpenCvSharp.Scalar,
    lineType: number | StrongNumeric<Int32Host>,
    shift: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_fillPoly_Mat(
    img: System.IntPtr,
    pts: HostArray<System.IntPtr>,
    npts: HostArray<number | StrongNumeric<Int32Host>>,
    ncontours: number | StrongNumeric<Int32Host>,
    color: OpenCvSharp.Scalar,
    lineType: number | StrongNumeric<Int32Host>,
    shift: number | StrongNumeric<Int32Host>,
    offset: OpenCvSharp.Point
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_fillPoly_InputOutputArray(
    img: System.IntPtr,
    pts: System.IntPtr,
    color: OpenCvSharp.Scalar,
    lineType: number | StrongNumeric<Int32Host>,
    shift: number | StrongNumeric<Int32Host>,
    offset: OpenCvSharp.Point
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_polylines_Mat(
    img: System.IntPtr,
    pts: HostArray<System.IntPtr>,
    npts: HostArray<number | StrongNumeric<Int32Host>>,
    ncontours: number | StrongNumeric<Int32Host>,
    isClosed: number | StrongNumeric<Int32Host>,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: number | StrongNumeric<Int32Host>,
    shift: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_polylines_InputOutputArray(
    img: System.IntPtr,
    pts: System.IntPtr,
    isClosed: number | StrongNumeric<Int32Host>,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: number | StrongNumeric<Int32Host>,
    shift: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_drawContours_vector(
    image: System.IntPtr,
    contours: HostArray<System.IntPtr>,
    contoursSize1: number | StrongNumeric<Int32Host>,
    contoursSize2: HostArray<number | StrongNumeric<Int32Host>>,
    contourIdx: number | StrongNumeric<Int32Host>,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: number | StrongNumeric<Int32Host>,
    hierarchy: HostArray<OpenCvSharp.Vec4i>,
    hiearchyLength: number | StrongNumeric<Int32Host>,
    maxLevel: number | StrongNumeric<Int32Host>,
    offset: OpenCvSharp.Point
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_drawContours_vector(
    image: System.IntPtr,
    contours: HostArray<System.IntPtr>,
    contoursSize1: number | StrongNumeric<Int32Host>,
    contoursSize2: HostArray<number | StrongNumeric<Int32Host>>,
    contourIdx: number | StrongNumeric<Int32Host>,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: number | StrongNumeric<Int32Host>,
    hierarchy: System.IntPtr,
    hiearchyLength: number | StrongNumeric<Int32Host>,
    maxLevel: number | StrongNumeric<Int32Host>,
    offset: OpenCvSharp.Point
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_drawContours_InputArray(
    image: System.IntPtr,
    contours: HostArray<System.IntPtr>,
    contoursLength: number | StrongNumeric<Int32Host>,
    contourIdx: number | StrongNumeric<Int32Host>,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: number | StrongNumeric<Int32Host>,
    hierarchy: System.IntPtr,
    maxLevel: number | StrongNumeric<Int32Host>,
    offset: OpenCvSharp.Point
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_clipLine1(
    imgSize: OpenCvSharp.Size,
    pt1: HostVariableRef<OpenCvSharp.Point>,
    pt2: HostVariableRef<OpenCvSharp.Point>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_clipLine2(
    imgRect: OpenCvSharp.Rect,
    pt1: HostVariableRef<OpenCvSharp.Point>,
    pt2: HostVariableRef<OpenCvSharp.Point>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_ellipse2Poly_int(
    center: OpenCvSharp.Point,
    axes: OpenCvSharp.Size,
    angle: number | StrongNumeric<Int32Host>,
    arcStart: number | StrongNumeric<Int32Host>,
    arcEnd: number | StrongNumeric<Int32Host>,
    delta: number | StrongNumeric<Int32Host>,
    pts: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_ellipse2Poly_double(
    center: OpenCvSharp.Point2d,
    axes: OpenCvSharp.Size2d,
    angle: number | StrongNumeric<Int32Host>,
    arcStart: number | StrongNumeric<Int32Host>,
    arcEnd: number | StrongNumeric<Int32Host>,
    delta: number | StrongNumeric<Int32Host>,
    pts: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_putText(
    img: System.IntPtr,
    text: string,
    org: OpenCvSharp.Point,
    fontFace: number | StrongNumeric<Int32Host>,
    fontScale: number | StrongNumeric<DoubleHost>,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: number | StrongNumeric<Int32Host>,
    bottomLeftOrigin: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_getTextSize(
    text: string,
    fontFace: number | StrongNumeric<Int32Host>,
    fontScale: number | StrongNumeric<DoubleHost>,
    thickness: number | StrongNumeric<Int32Host>,
    baseLine: HostVariableOut<number>,
    returnValue: HostVariableOut<OpenCvSharp.Size>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_getFontScaleFromHeight(
    fontFace: number | StrongNumeric<Int32Host>,
    pixelHeight: number | StrongNumeric<Int32Host>,
    thickness: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_createCLAHE(
    clipLimit: number | StrongNumeric<DoubleHost>,
    tileGridSize: OpenCvSharp.Size,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_Ptr_CLAHE_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_Ptr_CLAHE_get(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_CLAHE_apply(
    obj: System.IntPtr,
    src: System.IntPtr,
    dst: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_CLAHE_setClipLimit(
    obj: System.IntPtr,
    clipLimit: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_CLAHE_getClipLimit(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_CLAHE_setTilesGridSize(
    obj: System.IntPtr,
    tileGridSize: OpenCvSharp.Size
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_CLAHE_getTilesGridSize(
    obj: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Size>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_CLAHE_collectGarbage(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_GeneralizedHough_setTemplate1(
    obj: System.IntPtr,
    templ: System.IntPtr,
    templCenter: OpenCvSharp.Point
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_GeneralizedHough_setTemplate2(
    obj: System.IntPtr,
    edges: System.IntPtr,
    dx: System.IntPtr,
    dy: System.IntPtr,
    templCenter: OpenCvSharp.Point
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_GeneralizedHough_detect1(
    obj: System.IntPtr,
    image: System.IntPtr,
    positions: System.IntPtr,
    votes: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_GeneralizedHough_detect2(
    obj: System.IntPtr,
    edges: System.IntPtr,
    dx: System.IntPtr,
    dy: System.IntPtr,
    positions: System.IntPtr,
    votes: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_GeneralizedHough_setCannyLowThresh(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_GeneralizedHough_getCannyLowThresh(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_GeneralizedHough_setCannyHighThresh(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_GeneralizedHough_getCannyHighThresh(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_GeneralizedHough_setMinDist(
    obj: System.IntPtr,
    val: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_GeneralizedHough_getMinDist(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_GeneralizedHough_setDp(
    obj: System.IntPtr,
    val: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_GeneralizedHough_getDp(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_GeneralizedHough_setMaxBufferSize(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_GeneralizedHough_getMaxBufferSize(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_createGeneralizedHoughBallard(
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_Ptr_GeneralizedHoughBallard_get(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_Ptr_GeneralizedHoughBallard_delete(
    obj: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_GeneralizedHoughBallard_setLevels(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_GeneralizedHoughBallard_getLevels(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_GeneralizedHoughBallard_setVotesThreshold(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_GeneralizedHoughBallard_getVotesThreshold(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_createGeneralizedHoughGuil(
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_Ptr_GeneralizedHoughGuil_get(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_Ptr_GeneralizedHoughGuil_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_GeneralizedHoughGuil_setXi(
    obj: System.IntPtr,
    val: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_GeneralizedHoughGuil_getXi(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_GeneralizedHoughGuil_setLevels(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_GeneralizedHoughGuil_getLevels(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_GeneralizedHoughGuil_setAngleEpsilon(
    obj: System.IntPtr,
    val: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_GeneralizedHoughGuil_getAngleEpsilon(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_GeneralizedHoughGuil_setMinAngle(
    obj: System.IntPtr,
    val: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_GeneralizedHoughGuil_getMinAngle(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_GeneralizedHoughGuil_setMaxAngle(
    obj: System.IntPtr,
    val: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_GeneralizedHoughGuil_getMaxAngle(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_GeneralizedHoughGuil_setAngleStep(
    obj: System.IntPtr,
    val: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_GeneralizedHoughGuil_getAngleStep(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_GeneralizedHoughGuil_setAngleThresh(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_GeneralizedHoughGuil_getAngleThresh(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_GeneralizedHoughGuil_setMinScale(
    obj: System.IntPtr,
    val: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_GeneralizedHoughGuil_getMinScale(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_GeneralizedHoughGuil_setMaxScale(
    obj: System.IntPtr,
    val: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_GeneralizedHoughGuil_getMaxScale(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_GeneralizedHoughGuil_setScaleStep(
    obj: System.IntPtr,
    val: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_GeneralizedHoughGuil_getScaleStep(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_GeneralizedHoughGuil_setScaleThresh(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_GeneralizedHoughGuil_getScaleThresh(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_GeneralizedHoughGuil_setPosThresh(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_GeneralizedHoughGuil_getPosThresh(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_LineIterator_new(
    img: System.IntPtr,
    pt1: OpenCvSharp.Point,
    pt2: OpenCvSharp.Point,
    connectivity: number | StrongNumeric<Int32Host>,
    leftToRight: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_LineIterator_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_LineIterator_getValuePosAndShiftToNext(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>,
    returnPos: HostVariableOut<OpenCvSharp.Point>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_LineIterator_ptr_get(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_LineIterator_ptr0_get(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_LineIterator_step_get(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_LineIterator_elemSize_get(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_LineIterator_err_get(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_LineIterator_count_get(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_LineIterator_minusDelta_get(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_LineIterator_plusDelta_get(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_LineIterator_minusStep_get(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_LineIterator_plusStep_get(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_LineSegmentDetector_detect_OutputArray(
    obj: System.IntPtr,
    image: System.IntPtr,
    lines: System.IntPtr,
    width: System.IntPtr,
    prec: System.IntPtr,
    nfa: System.IntPtr
  ): VoidResult;
  imgproc_LineSegmentDetector_detect_vector(
    obj: System.IntPtr,
    image: System.IntPtr,
    lines: System.IntPtr,
    width: System.IntPtr,
    prec: System.IntPtr,
    nfa: System.IntPtr
  ): VoidResult;
  imgproc_LineSegmentDetector_drawSegments(
    obj: System.IntPtr,
    image: System.IntPtr,
    lines: System.IntPtr
  ): VoidResult;
  imgproc_LineSegmentDetector_compareSegments(
    obj: System.IntPtr,
    size: OpenCvSharp.Size,
    lines1: System.IntPtr,
    lines2: System.IntPtr,
    image: System.IntPtr
  ): number;
  imgproc_createLineSegmentDetector(
    refine: number | StrongNumeric<Int32Host>,
    scale: number | StrongNumeric<DoubleHost>,
    sigma_scale: number | StrongNumeric<DoubleHost>,
    quant: number | StrongNumeric<DoubleHost>,
    ang_th: number | StrongNumeric<DoubleHost>,
    log_eps: number | StrongNumeric<DoubleHost>,
    density_th: number | StrongNumeric<DoubleHost>,
    n_bins: number | StrongNumeric<Int32Host>
  ): System.IntPtr;
  imgproc_Ptr_LineSegmentDetector_delete(obj: System.IntPtr): VoidResult;
  imgproc_Ptr_LineSegmentDetector_get(obj: System.IntPtr): System.IntPtr;
  imgproc_segmentation_IntelligentScissorsMB_new(
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_segmentation_IntelligentScissorsMB_delete(
    obj: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_segmentation_IntelligentScissorsMB_setWeights(
    obj: System.IntPtr,
    weight_non_edge: number | StrongNumeric<SingleHost>,
    weight_gradient_direction: number | StrongNumeric<SingleHost>,
    weight_gradient_magnitude: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_segmentation_IntelligentScissorsMB_setGradientMagnitudeMaxLimit(
    obj: System.IntPtr,
    gradient_magnitude_threshold_max: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_segmentation_IntelligentScissorsMB_setEdgeFeatureZeroCrossingParameters(
    obj: System.IntPtr,
    gradient_magnitude_min_value: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_segmentation_IntelligentScissorsMB_setEdgeFeatureCannyParameters(
    obj: System.IntPtr,
    threshold1: number | StrongNumeric<DoubleHost>,
    threshold2: number | StrongNumeric<DoubleHost>,
    apertureSize: number | StrongNumeric<Int32Host>,
    l2gradient: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_segmentation_IntelligentScissorsMB_applyImage(
    obj: System.IntPtr,
    image: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_segmentation_IntelligentScissorsMB_applyImageFeatures(
    obj: System.IntPtr,
    non_edge: System.IntPtr,
    gradient_direction: System.IntPtr,
    gradient_magnitude: System.IntPtr,
    image: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_segmentation_IntelligentScissorsMB_buildMap(
    obj: System.IntPtr,
    sourcePt: OpenCvSharp.Point
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_segmentation_IntelligentScissorsMB_getContour(
    obj: System.IntPtr,
    targetPt: OpenCvSharp.Point,
    contour: System.IntPtr,
    backward: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_Subdiv2D_new1(
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_Subdiv2D_new2(
    rect: OpenCvSharp.Rect,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_Subdiv2D_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_Subdiv2D_initDelaunay(
    obj: System.IntPtr,
    rect: OpenCvSharp.Rect
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_Subdiv2D_insert1(
    obj: System.IntPtr,
    pt: OpenCvSharp.Point2f,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_Subdiv2D_insert2(
    obj: System.IntPtr,
    ptArray: HostArray<OpenCvSharp.Point2f>,
    length: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_Subdiv2D_locate(
    obj: System.IntPtr,
    pt: OpenCvSharp.Point2f,
    edge: HostVariableOut<number>,
    vertex: HostVariableOut<number>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_Subdiv2D_findNearest(
    obj: System.IntPtr,
    pt: OpenCvSharp.Point2f,
    nearestPt: HostVariableOut<OpenCvSharp.Point2f>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_Subdiv2D_getEdgeList(
    obj: System.IntPtr,
    edgeList: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_Subdiv2D_getLeadingEdgeList(
    obj: System.IntPtr,
    leadingEdgeList: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_Subdiv2D_getTriangleList(
    obj: System.IntPtr,
    triangleList: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_Subdiv2D_getVoronoiFacetList(
    obj: System.IntPtr,
    idx: HostArray<number | StrongNumeric<Int32Host>> | null,
    idxCount: number | StrongNumeric<Int32Host>,
    facetList: System.IntPtr,
    facetCenters: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_Subdiv2D_getVertex(
    obj: System.IntPtr,
    vertex: number | StrongNumeric<Int32Host>,
    firstEdge: HostVariableOut<number>,
    returnValue: HostVariableOut<OpenCvSharp.Point2f>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_Subdiv2D_getEdge(
    obj: System.IntPtr,
    edge: number | StrongNumeric<Int32Host>,
    nextEdgeType: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_Subdiv2D_nextEdge(
    obj: System.IntPtr,
    edge: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_Subdiv2D_rotateEdge(
    obj: System.IntPtr,
    edge: number | StrongNumeric<Int32Host>,
    rotate: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_Subdiv2D_symEdge(
    obj: System.IntPtr,
    edge: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_Subdiv2D_edgeOrg(
    obj: System.IntPtr,
    edge: number | StrongNumeric<Int32Host>,
    orgPt: HostVariableOut<OpenCvSharp.Point2f>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgproc_Subdiv2D_edgeDst(
    obj: System.IntPtr,
    edge: number | StrongNumeric<Int32Host>,
    dstPt: HostVariableOut<OpenCvSharp.Point2f>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_ANN_MLP_setTrainMethod(
    obj: System.IntPtr,
    method: number | StrongNumeric<Int32Host>,
    param1: number | StrongNumeric<DoubleHost>,
    param2: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_ANN_MLP_getTrainMethod(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_ANN_MLP_setActivationFunction(
    obj: System.IntPtr,
    type: number | StrongNumeric<Int32Host>,
    param1: number | StrongNumeric<DoubleHost>,
    param2: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_ANN_MLP_setLayerSizes(
    obj: System.IntPtr,
    layerSizes: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_ANN_MLP_getLayerSizes(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_ANN_MLP_getTermCriteria(
    obj: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.TermCriteria>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_ANN_MLP_setTermCriteria(
    obj: System.IntPtr,
    val: OpenCvSharp.TermCriteria
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_ANN_MLP_getBackpropWeightScale(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_ANN_MLP_setBackpropWeightScale(
    obj: System.IntPtr,
    val: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_ANN_MLP_getBackpropMomentumScale(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_ANN_MLP_setBackpropMomentumScale(
    obj: System.IntPtr,
    val: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_ANN_MLP_getRpropDW0(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_ANN_MLP_setRpropDW0(
    obj: System.IntPtr,
    val: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_ANN_MLP_getRpropDWPlus(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_ANN_MLP_setRpropDWPlus(
    obj: System.IntPtr,
    val: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_ANN_MLP_getRpropDWMinus(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_ANN_MLP_setRpropDWMinus(
    obj: System.IntPtr,
    val: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_ANN_MLP_getRpropDWMin(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_ANN_MLP_setRpropDWMin(
    obj: System.IntPtr,
    val: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_ANN_MLP_getRpropDWMax(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_ANN_MLP_setRpropDWMax(
    obj: System.IntPtr,
    val: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_ANN_MLP_getWeights(
    obj: System.IntPtr,
    layerIdx: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_ANN_MLP_create(
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_Ptr_ANN_MLP_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  ml_Ptr_ANN_MLP_get(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_ANN_MLP_load(
    filePath: string,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_ANN_MLP_loadFromString(
    strModel: string,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_Boost_getBoostType(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_Boost_setBoostType(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_Boost_getWeakCount(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_Boost_setWeakCount(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_Boost_getWeightTrimRate(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_Boost_setWeightTrimRate(
    obj: System.IntPtr,
    val: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_Boost_create(
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_Ptr_Boost_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  ml_Ptr_Boost_get(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_Boost_load(
    filePath: string,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_Boost_loadFromString(
    strModel: string,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_DTrees_getMaxCategories(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_DTrees_setMaxCategories(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_DTrees_getMaxDepth(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_DTrees_setMaxDepth(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_DTrees_getMinSampleCount(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_DTrees_setMinSampleCount(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_DTrees_getCVFolds(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_DTrees_setCVFolds(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_DTrees_getUseSurrogates(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_DTrees_setUseSurrogates(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_DTrees_getUse1SERule(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_DTrees_setUse1SERule(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_DTrees_getTruncatePrunedTree(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_DTrees_setTruncatePrunedTree(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_DTrees_getRegressionAccuracy(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_DTrees_setRegressionAccuracy(
    obj: System.IntPtr,
    val: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_DTrees_getPriors(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_DTrees_setPriors(obj: System.IntPtr, val: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  ml_DTrees_getRoots(
    obj: System.IntPtr,
    result: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_DTrees_getNodes(
    obj: System.IntPtr,
    result: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_DTrees_getSplits(
    obj: System.IntPtr,
    result: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_DTrees_getSubsets(
    obj: System.IntPtr,
    result: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_DTrees_create(
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_Ptr_DTrees_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  ml_Ptr_DTrees_get(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_DTrees_load(
    filePath: string,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_DTrees_loadFromString(
    strModel: string,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_EM_getClustersNumber(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_EM_setClustersNumber(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_EM_getCovarianceMatrixType(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_EM_setCovarianceMatrixType(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_EM_getTermCriteria(
    obj: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.TermCriteria>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_EM_setTermCriteria(
    obj: System.IntPtr,
    val: OpenCvSharp.TermCriteria
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_EM_getWeights(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_EM_getMeans(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_EM_getCovs(obj: System.IntPtr, covs: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  ml_EM_predict2(
    model: System.IntPtr,
    sample: System.IntPtr,
    probs: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Vec2d>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_EM_trainEM(
    obj: System.IntPtr,
    samples: System.IntPtr,
    logLikelihoods: System.IntPtr,
    labels: System.IntPtr,
    probs: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_EM_trainE(
    model: System.IntPtr,
    samples: System.IntPtr,
    means0: System.IntPtr,
    covs0: System.IntPtr,
    weights0: System.IntPtr,
    logLikelihoods: System.IntPtr,
    labels: System.IntPtr,
    probs: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_EM_trainM(
    model: System.IntPtr,
    samples: System.IntPtr,
    probs0: System.IntPtr,
    logLikelihoods: System.IntPtr,
    labels: System.IntPtr,
    probs: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_EM_create(returnValue: HostVariableOut<System.IntPtr>): OpenCvSharp.Internal.ExceptionStatus;
  ml_Ptr_EM_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_Ptr_EM_delete(ptr: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  ml_EM_load(
    filePath: string,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_EM_loadFromString(
    strModel: string,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_KNearest_getDefaultK(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_KNearest_setDefaultK(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_KNearest_getIsClassifier(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_KNearest_setIsClassifier(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_KNearest_getEmax(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_KNearest_setEmax(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_KNearest_getAlgorithmType(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_KNearest_setAlgorithmType(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_KNearest_findNearest(
    obj: System.IntPtr,
    samples: System.IntPtr,
    k: number | StrongNumeric<Int32Host>,
    results: System.IntPtr,
    neighborResponses: System.IntPtr,
    dist: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_KNearest_create(
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_Ptr_KNearest_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  ml_Ptr_KNearest_get(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_KNearest_load(
    filePath: string,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_KNearest_loadFromString(
    strModel: string,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_LogisticRegression_getLearningRate(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_LogisticRegression_setLearningRate(
    obj: System.IntPtr,
    val: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_LogisticRegression_getIterations(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_LogisticRegression_setIterations(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_LogisticRegression_getRegularization(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_LogisticRegression_setRegularization(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_LogisticRegression_getTrainMethod(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_LogisticRegression_setTrainMethod(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_LogisticRegression_getMiniBatchSize(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_LogisticRegression_setMiniBatchSize(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_LogisticRegression_getTermCriteria(
    obj: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.TermCriteria>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_LogisticRegression_setTermCriteria(
    obj: System.IntPtr,
    val: OpenCvSharp.TermCriteria
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_LogisticRegression_predict(
    obj: System.IntPtr,
    samples: System.IntPtr,
    results: System.IntPtr,
    flags: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_LogisticRegression_get_learnt_thetas(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_LogisticRegression_create(
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_Ptr_LogisticRegression_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  ml_Ptr_LogisticRegression_get(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_LogisticRegression_load(
    filePath: string,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_LogisticRegression_loadFromString(
    strModel: string,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_NormalBayesClassifier_predictProb(
    obj: System.IntPtr,
    inputs: System.IntPtr,
    samples: System.IntPtr,
    outputProbs: System.IntPtr,
    flags: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_NormalBayesClassifier_create(
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_Ptr_NormalBayesClassifier_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  ml_Ptr_NormalBayesClassifier_get(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_NormalBayesClassifier_load(
    filePath: string,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_NormalBayesClassifier_loadFromString(
    strModel: string,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_RTrees_getCalculateVarImportance(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_RTrees_setCalculateVarImportance(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_RTrees_getActiveVarCount(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_RTrees_setActiveVarCount(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_RTrees_getTermCriteria(
    obj: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.TermCriteria>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_RTrees_setTermCriteria(
    obj: System.IntPtr,
    val: OpenCvSharp.TermCriteria
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_RTrees_getVarImportance(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_RTrees_create(
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_Ptr_RTrees_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  ml_Ptr_RTrees_get(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_RTrees_load(
    filePath: string,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_RTrees_loadFromString(
    strModel: string,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_StatModel_clear(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  ml_StatModel_getVarCount(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_StatModel_empty(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_StatModel_isTrained(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_StatModel_isClassifier(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_StatModel_train2(
    obj: System.IntPtr,
    samples: System.IntPtr,
    layout: number | StrongNumeric<Int32Host>,
    responses: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_StatModel_predict(
    obj: System.IntPtr,
    samples: System.IntPtr,
    results: System.IntPtr,
    flags: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_SVM_getType(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_SVM_setType(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_SVM_getGamma(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_SVM_setGamma(
    obj: System.IntPtr,
    val: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_SVM_getCoef0(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_SVM_setCoef0(
    obj: System.IntPtr,
    val: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_SVM_getDegree(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_SVM_setDegree(
    obj: System.IntPtr,
    val: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_SVM_getC(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_SVM_setC(
    obj: System.IntPtr,
    val: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_SVM_getP(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_SVM_setP(
    obj: System.IntPtr,
    val: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_SVM_getNu(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_SVM_setNu(
    obj: System.IntPtr,
    val: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_SVM_getClassWeights(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_SVM_setClassWeights(
    obj: System.IntPtr,
    val: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_SVM_getTermCriteria(
    obj: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.TermCriteria>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_SVM_setTermCriteria(
    obj: System.IntPtr,
    val: OpenCvSharp.TermCriteria
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_SVM_getKernelType(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_SVM_setKernel(
    obj: System.IntPtr,
    kernelType: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_SVM_getSupportVectors(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_SVM_getDecisionFunction(
    obj: System.IntPtr,
    i: number | StrongNumeric<Int32Host>,
    alpha: System.IntPtr,
    svidx: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_SVM_getDefaultGrid(
    paramId: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<OpenCvSharp.ML.ParamGrid>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_SVM_create(returnValue: HostVariableOut<System.IntPtr>): OpenCvSharp.Internal.ExceptionStatus;
  ml_Ptr_SVM_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  ml_Ptr_SVM_get(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_SVM_load(
    filePath: string,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ml_SVM_loadFromString(
    strModel: string,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  handleException(status: EnumInput<OpenCvSharp.Internal.ExceptionStatus>): VoidResult;
  loadLibraries(): VoidResult;
  loadLibraries(additionalPaths: System.Collections.Generic.IEnumerable<string> | null): VoidResult;
  tryPInvoke(): VoidResult;
  isWindows(): boolean;
  isUnix(): boolean;
  isMono(): boolean;
  isWasm(): boolean;
  aruco_detectMarkers(
    image: System.IntPtr,
    dictionary: System.IntPtr,
    corners: System.IntPtr,
    ids: System.IntPtr,
    detectParameters: HostVariableRef<OpenCvSharp.Aruco.DetectorParameters>,
    outrejectedImgPoints: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  aruco_drawDetectedMarkers(
    image: System.IntPtr,
    corners: HostArray<System.IntPtr>,
    cornerSize1: number | StrongNumeric<Int32Host>,
    contoursSize2: HostArray<number | StrongNumeric<Int32Host>>,
    ids: HostArray<number | StrongNumeric<Int32Host>>,
    idxLength: number | StrongNumeric<Int32Host>,
    borderColor: OpenCvSharp.Scalar
  ): OpenCvSharp.Internal.ExceptionStatus;
  aruco_drawDetectedMarkers(
    image: System.IntPtr,
    corners: HostArray<System.IntPtr>,
    cornerSize1: number | StrongNumeric<Int32Host>,
    contoursSize2: HostArray<number | StrongNumeric<Int32Host>>,
    ids: System.IntPtr,
    idxLength: number | StrongNumeric<Int32Host>,
    borderColor: OpenCvSharp.Scalar
  ): OpenCvSharp.Internal.ExceptionStatus;
  aruco_estimatePoseSingleMarkers(
    corners: HostArray<System.IntPtr>,
    cornersLength1: number | StrongNumeric<Int32Host>,
    cornersLengths2: HostArray<number | StrongNumeric<Int32Host>>,
    markerLength: number | StrongNumeric<SingleHost>,
    cameraMatrix: System.IntPtr,
    distCoeffs: System.IntPtr,
    rvecs: System.IntPtr,
    tvecs: System.IntPtr,
    objPoints: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  aruco_getPredefinedDictionary(
    name: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  aruco_readDictionary(
    dictionaryFile: string,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  aruco_detectCharucoDiamond(
    image: System.IntPtr,
    markerCorners: HostArray<System.IntPtr>,
    markerCornersSize1: number | StrongNumeric<Int32Host>,
    markerCornersSize2: HostArray<number | StrongNumeric<Int32Host>>,
    markerIds: System.IntPtr,
    squareMarkerLengthRate: number | StrongNumeric<SingleHost>,
    diamondCorners: System.IntPtr,
    diamondIds: System.IntPtr,
    cameraMatrix: System.IntPtr,
    distCoeffs: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  aruco_drawDetectedDiamonds(
    image: System.IntPtr,
    corners: HostArray<System.IntPtr>,
    cornerSize1: number | StrongNumeric<Int32Host>,
    contoursSize2: HostArray<number | StrongNumeric<Int32Host>>,
    ids: System.IntPtr,
    borderColor: OpenCvSharp.Scalar
  ): OpenCvSharp.Internal.ExceptionStatus;
  aruco_Dictionary_delete(ptr: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  aruco_Dictionary_setMarkerSize(
    obj: System.IntPtr,
    value: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  aruco_Dictionary_setMaxCorrectionBits(
    obj: System.IntPtr,
    value: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  aruco_Dictionary_getBytesList(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  aruco_Dictionary_getMarkerSize(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  aruco_Dictionary_getMaxCorrectionBits(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  aruco_Dictionary_identify(
    obj: System.IntPtr,
    onlyBits: System.IntPtr,
    idx: HostVariableOut<number>,
    rotation: HostVariableOut<number>,
    maxCorrectionRate: number | StrongNumeric<DoubleHost>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  aruco_Dictionary_getDistanceToId(
    obj: System.IntPtr,
    bits: System.IntPtr,
    id: number | StrongNumeric<Int32Host>,
    allRotations: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  aruco_Dictionary_generateImageMarker(
    obj: System.IntPtr,
    id: number | StrongNumeric<Int32Host>,
    sidePixels: number | StrongNumeric<Int32Host>,
    img: System.IntPtr,
    borderBits: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  aruco_Dictionary_getByteListFromBits(
    bits: System.IntPtr,
    returnValue: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  aruco_Dictionary_getBitsFromByteList(
    byteList: System.IntPtr,
    markerSize: number | StrongNumeric<Int32Host>,
    returnValue: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  bgsegm_createBackgroundSubtractorMOG(
    history: number | StrongNumeric<Int32Host>,
    nMixtures: number | StrongNumeric<Int32Host>,
    backgroundRatio: number | StrongNumeric<DoubleHost>,
    noiseSigma: number | StrongNumeric<DoubleHost>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  bgsegm_Ptr_BackgroundSubtractorMOG_delete(
    obj: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  bgsegm_Ptr_BackgroundSubtractorMOG_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  bgsegm_BackgroundSubtractorMOG_getHistory(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  bgsegm_BackgroundSubtractorMOG_setHistory(
    ptr: System.IntPtr,
    value: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  bgsegm_BackgroundSubtractorMOG_getNMixtures(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  bgsegm_BackgroundSubtractorMOG_setNMixtures(
    ptr: System.IntPtr,
    value: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  bgsegm_BackgroundSubtractorMOG_getBackgroundRatio(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  bgsegm_BackgroundSubtractorMOG_setBackgroundRatio(
    ptr: System.IntPtr,
    value: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  bgsegm_BackgroundSubtractorMOG_getNoiseSigma(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  bgsegm_BackgroundSubtractorMOG_setNoiseSigma(
    ptr: System.IntPtr,
    value: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  bgsegm_createBackgroundSubtractorGMG(
    initializationFrames: number | StrongNumeric<Int32Host>,
    decisionThreshold: number | StrongNumeric<DoubleHost>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  bgsegm_Ptr_BackgroundSubtractorGMG_delete(
    obj: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  bgsegm_Ptr_BackgroundSubtractorGMG_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  bgsegm_BackgroundSubtractorGMG_getMaxFeatures(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  bgsegm_BackgroundSubtractorGMG_setMaxFeatures(
    ptr: System.IntPtr,
    value: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  bgsegm_BackgroundSubtractorGMG_getDefaultLearningRate(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  bgsegm_BackgroundSubtractorGMG_setDefaultLearningRate(
    ptr: System.IntPtr,
    value: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  bgsegm_BackgroundSubtractorGMG_getNumFrames(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  bgsegm_BackgroundSubtractorGMG_setNumFrames(
    ptr: System.IntPtr,
    value: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  bgsegm_BackgroundSubtractorGMG_getQuantizationLevels(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  bgsegm_BackgroundSubtractorGMG_setQuantizationLevels(
    ptr: System.IntPtr,
    value: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  bgsegm_BackgroundSubtractorGMG_getBackgroundPrior(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  bgsegm_BackgroundSubtractorGMG_setBackgroundPrior(
    ptr: System.IntPtr,
    value: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  bgsegm_BackgroundSubtractorGMG_getSmoothingRadius(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  bgsegm_BackgroundSubtractorGMG_setSmoothingRadius(
    ptr: System.IntPtr,
    value: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  bgsegm_BackgroundSubtractorGMG_getDecisionThreshold(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  bgsegm_BackgroundSubtractorGMG_setDecisionThreshold(
    ptr: System.IntPtr,
    value: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  bgsegm_BackgroundSubtractorGMG_getUpdateBackgroundModel(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  bgsegm_BackgroundSubtractorGMG_setUpdateBackgroundModel(
    ptr: System.IntPtr,
    value: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  bgsegm_BackgroundSubtractorGMG_getMinVal(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  bgsegm_BackgroundSubtractorGMG_setMinVal(
    ptr: System.IntPtr,
    value: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  bgsegm_BackgroundSubtractorGMG_getMaxVal(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  bgsegm_BackgroundSubtractorGMG_setMaxVal(
    ptr: System.IntPtr,
    value: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_superres_DnnSuperResImpl_new1(
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_superres_DnnSuperResImpl_new2(
    algo: string,
    scale: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_superres_DnnSuperResImpl_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  dnn_superres_DnnSuperResImpl_readModel1(
    obj: System.IntPtr,
    path: string
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_superres_DnnSuperResImpl_readModel2(
    obj: System.IntPtr,
    weights: string,
    definition: string
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_superres_DnnSuperResImpl_setModel(
    obj: System.IntPtr,
    algo: string,
    scale: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_superres_DnnSuperResImpl_setPreferableBackend(
    obj: System.IntPtr,
    backendId: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_superres_DnnSuperResImpl_setPreferableTarget(
    obj: System.IntPtr,
    targetId: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_superres_DnnSuperResImpl_upsample(
    obj: System.IntPtr,
    img: System.IntPtr,
    result: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_superres_DnnSuperResImpl_upsampleMultioutput(
    obj: System.IntPtr,
    img: System.IntPtr,
    imgsNew: System.IntPtr,
    scaleFactors: HostArray<number | StrongNumeric<Int32Host>>,
    scaleFactorsSize: number | StrongNumeric<Int32Host>,
    nodeNames: HostArray<string>,
    nodeNamesSize: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_superres_DnnSuperResImpl_getScale(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  dnn_superres_DnnSuperResImpl_getAlgorithm(
    obj: System.IntPtr,
    returnValue: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  flann_Index_new(
    features: System.IntPtr,
    params: System.IntPtr,
    distType: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  flann_Index_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  flann_Index_knnSearch1(
    obj: System.IntPtr,
    queries: HostArray<number | StrongNumeric<SingleHost>>,
    queriesLength: number | StrongNumeric<Int32Host>,
    indices: HostArray<number | StrongNumeric<Int32Host>>,
    dists: HostArray<number | StrongNumeric<SingleHost>>,
    knn: number | StrongNumeric<Int32Host>,
    params: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  flann_Index_knnSearch2(
    obj: System.IntPtr,
    queries: System.IntPtr,
    indices: System.IntPtr,
    dists: System.IntPtr,
    knn: number | StrongNumeric<Int32Host>,
    params: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  flann_Index_knnSearch3(
    obj: System.IntPtr,
    queries: System.IntPtr,
    indices: HostArray<number | StrongNumeric<Int32Host>>,
    dists: HostArray<number | StrongNumeric<SingleHost>>,
    knn: number | StrongNumeric<Int32Host>,
    params: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  flann_Index_radiusSearch1(
    obj: System.IntPtr,
    queries: HostArray<number | StrongNumeric<SingleHost>>,
    queriesLength: number | StrongNumeric<Int32Host>,
    indices: HostArray<number | StrongNumeric<Int32Host>>,
    indicesLength: number | StrongNumeric<Int32Host>,
    dists: HostArray<number | StrongNumeric<SingleHost>>,
    distsLength: number | StrongNumeric<Int32Host>,
    radius: number | StrongNumeric<DoubleHost>,
    maxResults: number | StrongNumeric<Int32Host>,
    params: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  flann_Index_radiusSearch2(
    obj: System.IntPtr,
    queries: System.IntPtr,
    indices: System.IntPtr,
    dists: System.IntPtr,
    radius: number | StrongNumeric<DoubleHost>,
    maxResults: number | StrongNumeric<Int32Host>,
    params: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  flann_Index_radiusSearch3(
    obj: System.IntPtr,
    queries: System.IntPtr,
    indices: HostArray<number | StrongNumeric<Int32Host>>,
    indicesLength: number | StrongNumeric<Int32Host>,
    dists: HostArray<number | StrongNumeric<SingleHost>>,
    distsLength: number | StrongNumeric<Int32Host>,
    radius: number | StrongNumeric<DoubleHost>,
    maxResults: number | StrongNumeric<Int32Host>,
    params: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  flann_Index_save(obj: System.IntPtr, filename: string): OpenCvSharp.Internal.ExceptionStatus;
  flann_Ptr_IndexParams_new(
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  flann_Ptr_IndexParams_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  flann_Ptr_IndexParams_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  flann_IndexParams_getString(
    obj: System.IntPtr,
    key: string,
    defaultVal: string | null,
    returnValue: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  flann_IndexParams_getInt(
    obj: System.IntPtr,
    key: string,
    defaultVal: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  flann_IndexParams_getDouble(
    obj: System.IntPtr,
    key: string,
    defaultVal: number | StrongNumeric<DoubleHost>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  flann_IndexParams_setString(
    obj: System.IntPtr,
    key: string,
    value: string
  ): OpenCvSharp.Internal.ExceptionStatus;
  flann_IndexParams_setInt(
    obj: System.IntPtr,
    key: string,
    value: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  flann_IndexParams_setDouble(
    obj: System.IntPtr,
    key: string,
    value: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  flann_IndexParams_setFloat(
    obj: System.IntPtr,
    key: string,
    value: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  flann_IndexParams_setBool(
    obj: System.IntPtr,
    key: string,
    value: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  flann_IndexParams_setAlgorithm(
    obj: System.IntPtr,
    value: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  flann_Ptr_LinearIndexParams_new(
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  flann_Ptr_LinearIndexParams_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  flann_Ptr_LinearIndexParams_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  flann_Ptr_KDTreeIndexParams_new(
    trees: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  flann_Ptr_KDTreeIndexParams_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  flann_Ptr_KDTreeIndexParams_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  flann_Ptr_KMeansIndexParams_new(
    branching: number | StrongNumeric<Int32Host>,
    iterations: number | StrongNumeric<Int32Host>,
    centersInit: EnumInput<OpenCvSharp.Flann.FlannCentersInit>,
    cbIndex: number | StrongNumeric<SingleHost>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  flann_Ptr_KMeansIndexParams_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  flann_Ptr_KMeansIndexParams_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  flann_Ptr_LshIndexParams_new(
    tableNumber: number | StrongNumeric<Int32Host>,
    keySize: number | StrongNumeric<Int32Host>,
    multiProbeLevel: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  flann_Ptr_LshIndexParams_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  flann_Ptr_LshIndexParams_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  flann_Ptr_CompositeIndexParams_new(
    trees: number | StrongNumeric<Int32Host>,
    branching: number | StrongNumeric<Int32Host>,
    iterations: number | StrongNumeric<Int32Host>,
    centersInit: EnumInput<OpenCvSharp.Flann.FlannCentersInit>,
    cbIndex: number | StrongNumeric<SingleHost>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  flann_Ptr_CompositeIndexParams_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  flann_Ptr_CompositeIndexParams_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  flann_Ptr_AutotunedIndexParams_new(
    targetPrecision: number | StrongNumeric<SingleHost>,
    buildWeight: number | StrongNumeric<SingleHost>,
    memoryWeight: number | StrongNumeric<SingleHost>,
    sampleFraction: number | StrongNumeric<SingleHost>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  flann_Ptr_AutotunedIndexParams_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  flann_Ptr_AutotunedIndexParams_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  flann_Ptr_SavedIndexParams_new(
    filename: string,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  flann_Ptr_SavedIndexParams_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  flann_Ptr_SavedIndexParams_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  flann_Ptr_SearchParams_new(
    checks: number | StrongNumeric<Int32Host>,
    eps: number | StrongNumeric<SingleHost>,
    sorted: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  flann_Ptr_SearchParams_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  flann_Ptr_SearchParams_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  highgui_namedWindow(
    winName: string,
    flags: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  highgui_destroyWindow(winName: string): OpenCvSharp.Internal.ExceptionStatus;
  highgui_destroyAllWindows(): OpenCvSharp.Internal.ExceptionStatus;
  highgui_startWindowThread(
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  highgui_imshow(winName: string, mat: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  highgui_imshow_umat(winName: string, mat: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  highgui_waitKey(
    delay: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  highgui_waitKeyEx(
    delay: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  highgui_resizeWindow(
    winName: string,
    width: number | StrongNumeric<Int32Host>,
    height: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  highgui_moveWindow(
    winName: string,
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  highgui_setWindowProperty(
    winName: string,
    propId: number | StrongNumeric<Int32Host>,
    propValue: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  highgui_setWindowTitle(winName: string, title: string): OpenCvSharp.Internal.ExceptionStatus;
  highgui_getWindowProperty(
    winName: string,
    propId: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  highgui_getWindowImageRect(
    winName: string,
    returnValue: HostVariableOut<OpenCvSharp.Rect>
  ): OpenCvSharp.Internal.ExceptionStatus;
  highgui_setMouseCallback(
    winName: string,
    onMouse: OpenCvSharp.MouseCallback,
    userData: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  highgui_getMouseWheelDelta(
    flags: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  highgui_selectROI1(
    windowName: string,
    img: System.IntPtr,
    showCrosshair: number | StrongNumeric<Int32Host>,
    fromCenter: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<OpenCvSharp.Rect>
  ): OpenCvSharp.Internal.ExceptionStatus;
  highgui_selectROI2(
    img: System.IntPtr,
    showCrosshair: number | StrongNumeric<Int32Host>,
    fromCenter: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<OpenCvSharp.Rect>
  ): OpenCvSharp.Internal.ExceptionStatus;
  highgui_selectROIs(
    windowName: string,
    img: System.IntPtr,
    boundingBoxes: System.IntPtr,
    showCrosshair: number | StrongNumeric<Int32Host>,
    fromCenter: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  highgui_createTrackbar(
    trackbarName: string,
    winName: string,
    value: System.IntPtr,
    count: number | StrongNumeric<Int32Host>,
    onChange: System.IntPtr,
    userData: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  highgui_createTrackbar(
    trackbarName: string,
    winName: string,
    value: System.IntPtr,
    count: number | StrongNumeric<Int32Host>,
    onChange: OpenCvSharp.TrackbarCallbackNative | null,
    userData: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  highgui_createTrackbar(
    trackbarName: string,
    winName: string,
    value: HostVariableRef<number>,
    count: number | StrongNumeric<Int32Host>,
    onChange: OpenCvSharp.TrackbarCallbackNative | null,
    userData: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  highgui_getTrackbarPos(
    trackbarName: string,
    winName: string,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  highgui_setTrackbarPos(
    trackbarName: string,
    winName: string,
    pos: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  highgui_setTrackbarMax(
    trackbarName: string,
    winName: string,
    maxVal: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  highgui_setTrackbarMin(
    trackbarName: string,
    winName: string,
    minVal: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  highgui_cvGetWindowHandle(
    name: string,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgcodecs_imread_NotWindows(
    fileName: string,
    flags: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgcodecs_imread_Windows(
    fileName: string,
    flags: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgcodecs_imread(
    fileName: string,
    flags: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgcodecs_imreadmulti_NotWindows(
    fileName: string,
    mats: System.IntPtr,
    flags: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgcodecs_imreadmulti_Windows(
    fileName: string,
    mats: System.IntPtr,
    flags: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgcodecs_imreadmulti(
    fileName: string,
    mats: System.IntPtr,
    flags: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgcodecs_imwrite_NotWindows(
    fileName: string,
    img: System.IntPtr,
    params: HostArray<number | StrongNumeric<Int32Host>>,
    paramsLength: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgcodecs_imwrite_Windows(
    fileName: string,
    img: System.IntPtr,
    params: HostArray<number | StrongNumeric<Int32Host>>,
    paramsLength: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgcodecs_imwrite(
    fileName: string,
    img: System.IntPtr,
    params: HostArray<number | StrongNumeric<Int32Host>>,
    paramsLength: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgcodecs_imwrite_multi_NotWindows(
    fileName: string,
    img: System.IntPtr,
    params: HostArray<number | StrongNumeric<Int32Host>>,
    paramsLength: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgcodecs_imwrite_multi_Windows(
    fileName: string,
    img: System.IntPtr,
    params: HostArray<number | StrongNumeric<Int32Host>>,
    paramsLength: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgcodecs_imwrite_multi(
    fileName: string,
    img: System.IntPtr,
    params: HostArray<number | StrongNumeric<Int32Host>>,
    paramsLength: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgcodecs_imdecode_Mat(
    buf: System.IntPtr,
    flags: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgcodecs_imdecode_InputArray(
    buf: System.IntPtr,
    flags: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgcodecs_imencode_vector(
    ext: string,
    img: System.IntPtr,
    buf: System.IntPtr,
    params: HostArray<number | StrongNumeric<Int32Host>>,
    paramsLength: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgcodecs_haveImageReader_NotWindows(
    fileName: string,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgcodecs_haveImageReader_Windows(
    fileName: string,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgcodecs_haveImageReader(
    fileName: string,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  imgcodecs_haveImageWriter(
    fileName: string,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  img_hash_ImgHashBase_compute(
    obj: System.IntPtr,
    inputArr: System.IntPtr,
    outputArr: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  img_hash_ImgHashBase_compare(
    obj: System.IntPtr,
    hashOne: System.IntPtr,
    hashTwo: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  img_hash_AverageHash_create(
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  img_hash_Ptr_AverageHash_delete(ptr: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  img_hash_Ptr_AverageHash_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  img_hash_BlockMeanHash_create(
    mode: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  img_hash_Ptr_BlockMeanHash_delete(ptr: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  img_hash_Ptr_BlockMeanHash_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  img_hash_BlockMeanHash_setMode(
    obj: System.IntPtr,
    mode: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  img_hash_BlockMeanHash_getMean(
    obj: System.IntPtr,
    outVec: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  img_hash_ColorMomentHash_create(
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  img_hash_Ptr_ColorMomentHash_delete(ptr: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  img_hash_Ptr_ColorMomentHash_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  img_hash_MarrHildrethHash_create(
    alpha: number | StrongNumeric<SingleHost>,
    scale: number | StrongNumeric<SingleHost>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  img_hash_Ptr_MarrHildrethHash_delete(ptr: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  img_hash_Ptr_MarrHildrethHash_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  img_hash_MarrHildrethHash_setKernelParam(
    obj: System.IntPtr,
    alpha: number | StrongNumeric<SingleHost>,
    scale: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  img_hash_MarrHildrethHash_getAlpha(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  img_hash_MarrHildrethHash_getScale(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  img_hash_PHash_create(
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  img_hash_Ptr_PHash_delete(ptr: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  img_hash_Ptr_PHash_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  img_hash_RadialVarianceHash_create(
    sigma: number | StrongNumeric<DoubleHost>,
    numOfAngleLine: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  img_hash_Ptr_RadialVarianceHash_delete(ptr: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  img_hash_Ptr_RadialVarianceHash_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  img_hash_RadialVarianceHash_setNumOfAngleLine(
    obj: System.IntPtr,
    value: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  img_hash_RadialVarianceHash_setSigma(
    obj: System.IntPtr,
    value: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  img_hash_RadialVarianceHash_getNumOfAngleLine(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  img_hash_RadialVarianceHash_getSigma(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  line_descriptor_LSDDetector_new1(
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  line_descriptor_LSDDetector_new2(
    scale: number | StrongNumeric<DoubleHost>,
    sigmaScale: number | StrongNumeric<DoubleHost>,
    quant: number | StrongNumeric<DoubleHost>,
    angTh: number | StrongNumeric<DoubleHost>,
    logEps: number | StrongNumeric<DoubleHost>,
    densityTh: number | StrongNumeric<DoubleHost>,
    nBins: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  line_descriptor_LSDDetector_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  line_descriptor_LSDDetector_detect1(
    obj: System.IntPtr,
    image: System.IntPtr,
    keypoints: System.IntPtr,
    scale: number | StrongNumeric<Int32Host>,
    numOctaves: number | StrongNumeric<Int32Host>,
    mask: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  line_descriptor_LSDDetector_detect2(
    obj: System.IntPtr,
    images: HostArray<System.IntPtr>,
    imagesSize: number | StrongNumeric<Int32Host>,
    keyLines: System.IntPtr,
    scale: number | StrongNumeric<Int32Host>,
    numOctaves: number | StrongNumeric<Int32Host>,
    masks: HostArray<System.IntPtr>,
    masksSize: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  optflow_motempl_updateMotionHistory(
    silhouette: System.IntPtr,
    mhi: System.IntPtr,
    timestamp: number | StrongNumeric<DoubleHost>,
    duration: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  optflow_motempl_calcMotionGradient(
    mhi: System.IntPtr,
    mask: System.IntPtr,
    orientation: System.IntPtr,
    delta1: number | StrongNumeric<DoubleHost>,
    delta2: number | StrongNumeric<DoubleHost>,
    apertureSize: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  optflow_motempl_calcGlobalOrientation(
    orientation: System.IntPtr,
    mask: System.IntPtr,
    mhi: System.IntPtr,
    timestamp: number | StrongNumeric<DoubleHost>,
    duration: number | StrongNumeric<DoubleHost>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  optflow_motempl_segmentMotion(
    mhi: System.IntPtr,
    segmask: System.IntPtr,
    boundingRects: System.IntPtr,
    timestamp: number | StrongNumeric<DoubleHost>,
    segThresh: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  optflow_calcOpticalFlowSF1(
    from: System.IntPtr,
    to: System.IntPtr,
    flow: System.IntPtr,
    layers: number | StrongNumeric<Int32Host>,
    averagingBlockSize: number | StrongNumeric<Int32Host>,
    maxFlow: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  optflow_calcOpticalFlowSF2(
    from: System.IntPtr,
    to: System.IntPtr,
    flow: System.IntPtr,
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
  ): OpenCvSharp.Internal.ExceptionStatus;
  optflow_calcOpticalFlowSparseToDense(
    from: System.IntPtr,
    to: System.IntPtr,
    flow: System.IntPtr,
    gridStep: number | StrongNumeric<Int32Host>,
    k: number | StrongNumeric<Int32Host>,
    sigma: number | StrongNumeric<SingleHost>,
    usePostProc: number | StrongNumeric<Int32Host>,
    fgsLambda: number | StrongNumeric<SingleHost>,
    fgsSigma: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  quality_QualityBase_compute(
    obj: System.IntPtr,
    img: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Scalar>
  ): OpenCvSharp.Internal.ExceptionStatus;
  quality_QualityBase_getQualityMap(
    obj: System.IntPtr,
    dst: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  quality_QualityBase_clear(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  quality_QualityBase_empty(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  quality_createQualityPSNR(
    ref: System.IntPtr,
    maxPixelValue: number | StrongNumeric<DoubleHost>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  quality_Ptr_QualityPSNR_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  quality_QualityPSNR_staticCompute(
    ref: System.IntPtr,
    cmp: System.IntPtr,
    qualityMap: System.IntPtr,
    maxPixelValue: number | StrongNumeric<DoubleHost>,
    returnValue: HostVariableOut<OpenCvSharp.Scalar>
  ): OpenCvSharp.Internal.ExceptionStatus;
  quality_QualityPSNR_getMaxPixelValue(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  quality_QualityPSNR_setMaxPixelValue(
    obj: System.IntPtr,
    val: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  quality_Ptr_QualityPSNR_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  quality_createQualitySSIM(
    ref: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  quality_Ptr_QualitySSIM_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  quality_Ptr_QualitySSIM_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  quality_QualitySSIM_staticCompute(
    ref: System.IntPtr,
    cmp: System.IntPtr,
    qualityMap: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Scalar>
  ): OpenCvSharp.Internal.ExceptionStatus;
  quality_createQualityGMSD(
    ref: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  quality_Ptr_QualityGMSD_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  quality_Ptr_QualityGMSD_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  quality_QualityGMSD_staticCompute(
    ref: System.IntPtr,
    cmp: System.IntPtr,
    qualityMap: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Scalar>
  ): OpenCvSharp.Internal.ExceptionStatus;
  quality_createQualityMSE(
    ref: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  quality_Ptr_QualityMSE_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  quality_Ptr_QualityMSE_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  quality_QualityMSE_staticCompute(
    ref: System.IntPtr,
    cmp: System.IntPtr,
    qualityMap: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Scalar>
  ): OpenCvSharp.Internal.ExceptionStatus;
  quality_createQualityBRISQUE1(
    modelFilePath: string,
    rangeFilePath: string,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  quality_createQualityBRISQUE2(
    model: System.IntPtr,
    range: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  quality_Ptr_QualityBRISQUE_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  quality_Ptr_QualityBRISQUE_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  quality_QualityBRISQUE_staticCompute(
    ref: System.IntPtr,
    modelFilePath: string,
    rangeFilePath: string,
    returnValue: HostVariableOut<OpenCvSharp.Scalar>
  ): OpenCvSharp.Internal.ExceptionStatus;
  quality_QualityBRISQUE_computeFeatures(
    img: System.IntPtr,
    features: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  string_new1(): System.IntPtr;
  string_new2(str: HostArray<number | StrongNumeric<ByteHost>>): System.IntPtr;
  string_delete(s: System.IntPtr): VoidResult;
  string_size(s: System.IntPtr): System.UIntPtr;
  vector_uchar_new1(): System.IntPtr;
  vector_uchar_new2(size: System.UIntPtr): System.IntPtr;
  vector_uchar_new3(
    data: HostArray<number | StrongNumeric<ByteHost>>,
    dataLength: System.UIntPtr
  ): System.IntPtr;
  vector_uchar_getSize(vector: System.IntPtr): System.UIntPtr;
  vector_uchar_getPointer(vector: System.IntPtr): System.IntPtr;
  vector_uchar_copy(vector: System.IntPtr, dst: System.IntPtr): VoidResult;
  vector_uchar_delete(vector: System.IntPtr): VoidResult;
  vector_int32_new1(): System.IntPtr;
  vector_int32_new2(size: System.UIntPtr): System.IntPtr;
  vector_int32_new3(
    data: HostArray<number | StrongNumeric<Int32Host>>,
    dataLength: System.UIntPtr
  ): System.IntPtr;
  vector_int32_getSize(vector: System.IntPtr): System.UIntPtr;
  vector_int32_getPointer(vector: System.IntPtr): System.IntPtr;
  vector_int32_delete(vector: System.IntPtr): VoidResult;
  vector_float_new1(): System.IntPtr;
  vector_float_new2(size: System.UIntPtr): System.IntPtr;
  vector_float_new3(
    data: HostArray<number | StrongNumeric<SingleHost>>,
    dataLength: System.UIntPtr
  ): System.IntPtr;
  vector_float_getSize(vector: System.IntPtr): System.UIntPtr;
  vector_float_getPointer(vector: System.IntPtr): System.IntPtr;
  vector_float_delete(vector: System.IntPtr): VoidResult;
  vector_double_new1(): System.IntPtr;
  vector_double_new2(size: System.UIntPtr): System.IntPtr;
  vector_double_new3(
    data: HostArray<number | StrongNumeric<DoubleHost>>,
    dataLength: System.UIntPtr
  ): System.IntPtr;
  vector_double_getSize(vector: System.IntPtr): System.UIntPtr;
  vector_double_getPointer(vector: System.IntPtr): System.IntPtr;
  vector_double_delete(vector: System.IntPtr): VoidResult;
  vector_Vec2f_new1(): System.IntPtr;
  vector_Vec2f_getSize(vector: System.IntPtr): System.UIntPtr;
  vector_Vec2f_getPointer(vector: System.IntPtr): System.IntPtr;
  vector_Vec2f_delete(vector: System.IntPtr): VoidResult;
  vector_Vec3f_new1(): System.IntPtr;
  vector_Vec3f_getSize(vector: System.IntPtr): System.UIntPtr;
  vector_Vec3f_getPointer(vector: System.IntPtr): System.IntPtr;
  vector_Vec3f_delete(vector: System.IntPtr): VoidResult;
  vector_Vec4f_new1(): System.IntPtr;
  vector_Vec4f_new3(data: HostArray<OpenCvSharp.Vec4f>, dataLength: System.UIntPtr): System.IntPtr;
  vector_Vec4f_getSize(vector: System.IntPtr): System.UIntPtr;
  vector_Vec4f_getPointer(vector: System.IntPtr): System.IntPtr;
  vector_Vec4f_delete(vector: System.IntPtr): VoidResult;
  vector_Vec4i_new1(): System.IntPtr;
  vector_Vec4i_new3(data: HostArray<OpenCvSharp.Vec4i>, dataLength: System.UIntPtr): System.IntPtr;
  vector_Vec4i_getSize(vector: System.IntPtr): System.UIntPtr;
  vector_Vec4i_getPointer(vector: System.IntPtr): System.IntPtr;
  vector_Vec4i_delete(vector: System.IntPtr): VoidResult;
  vector_Vec6f_new1(): System.IntPtr;
  vector_Vec6f_getSize(vector: System.IntPtr): System.UIntPtr;
  vector_Vec6f_getPointer(vector: System.IntPtr): System.IntPtr;
  vector_Vec6f_delete(vector: System.IntPtr): VoidResult;
  vector_Point2i_new1(): System.IntPtr;
  vector_Point2i_new2(size: System.UIntPtr): System.IntPtr;
  vector_Point2i_new3(
    data: HostArray<OpenCvSharp.Point>,
    dataLength: System.UIntPtr
  ): System.IntPtr;
  vector_Point2i_getSize(vector: System.IntPtr): System.UIntPtr;
  vector_Point2i_getPointer(vector: System.IntPtr): System.IntPtr;
  vector_Point2i_delete(vector: System.IntPtr): VoidResult;
  vector_Point2f_new1(): System.IntPtr;
  vector_Point2f_new2(size: System.UIntPtr): System.IntPtr;
  vector_Point2f_new3(
    data: HostArray<OpenCvSharp.Point2f>,
    dataLength: System.UIntPtr
  ): System.IntPtr;
  vector_Point2f_getSize(vector: System.IntPtr): System.UIntPtr;
  vector_Point2f_getPointer(vector: System.IntPtr): System.IntPtr;
  vector_Point2f_delete(vector: System.IntPtr): VoidResult;
  vector_Point2d_new1(): System.IntPtr;
  vector_Point2d_getSize(vector: System.IntPtr): System.UIntPtr;
  vector_Point2d_getPointer(vector: System.IntPtr): System.IntPtr;
  vector_Point2d_delete(vector: System.IntPtr): VoidResult;
  vector_Point3f_new1(): System.IntPtr;
  vector_Point3f_new2(size: System.UIntPtr): System.IntPtr;
  vector_Point3f_new3(
    data: HostArray<OpenCvSharp.Point3f>,
    dataLength: System.UIntPtr
  ): System.IntPtr;
  vector_Point3f_getSize(vector: System.IntPtr): System.UIntPtr;
  vector_Point3f_getPointer(vector: System.IntPtr): System.IntPtr;
  vector_Point3f_delete(vector: System.IntPtr): VoidResult;
  vector_Rect_new1(): System.IntPtr;
  vector_Rect_new2(size: System.UIntPtr): System.IntPtr;
  vector_Rect_new3(data: HostArray<OpenCvSharp.Rect>, dataLength: System.UIntPtr): System.IntPtr;
  vector_Rect_getSize(vector: System.IntPtr): System.UIntPtr;
  vector_Rect_getPointer(vector: System.IntPtr): System.IntPtr;
  vector_Rect_delete(vector: System.IntPtr): VoidResult;
  vector_Rect2d_new1(): System.IntPtr;
  vector_Rect2d_new2(size: System.UIntPtr): System.IntPtr;
  vector_Rect2d_new3(
    data: HostArray<OpenCvSharp.Rect2d>,
    dataLength: System.UIntPtr
  ): System.IntPtr;
  vector_Rect2d_getSize(vector: System.IntPtr): System.UIntPtr;
  vector_Rect2d_getPointer(vector: System.IntPtr): System.IntPtr;
  vector_Rect2d_delete(vector: System.IntPtr): VoidResult;
  vector_RotatedRect_new1(): System.IntPtr;
  vector_RotatedRect_new2(size: System.UIntPtr): System.IntPtr;
  vector_RotatedRect_new3(
    data: HostArray<OpenCvSharp.RotatedRect>,
    dataLength: System.UIntPtr
  ): System.IntPtr;
  vector_RotatedRect_getSize(vector: System.IntPtr): System.UIntPtr;
  vector_RotatedRect_getPointer(vector: System.IntPtr): System.IntPtr;
  vector_RotatedRect_delete(vector: System.IntPtr): VoidResult;
  vector_KeyPoint_new1(): System.IntPtr;
  vector_KeyPoint_new2(size: System.UIntPtr): System.IntPtr;
  vector_KeyPoint_new3(
    data: HostArray<OpenCvSharp.KeyPoint>,
    dataLength: System.UIntPtr
  ): System.IntPtr;
  vector_KeyPoint_getSize(vector: System.IntPtr): System.UIntPtr;
  vector_KeyPoint_getPointer(vector: System.IntPtr): System.IntPtr;
  vector_KeyPoint_delete(vector: System.IntPtr): VoidResult;
  vector_DMatch_new1(): System.IntPtr;
  vector_DMatch_new2(size: System.UIntPtr): System.IntPtr;
  vector_DMatch_new3(
    data: HostArray<OpenCvSharp.DMatch>,
    dataLength: System.UIntPtr
  ): System.IntPtr;
  vector_DMatch_getSize(vector: System.IntPtr): System.UIntPtr;
  vector_DMatch_getPointer(vector: System.IntPtr): System.IntPtr;
  vector_DMatch_delete(vector: System.IntPtr): VoidResult;
  vector_Mat_new1(): System.IntPtr;
  vector_Mat_new2(size: number | StrongNumeric<UInt32Host>): System.IntPtr;
  vector_Mat_new3(
    data: HostArray<System.IntPtr>,
    dataLength: number | StrongNumeric<UInt32Host>
  ): System.IntPtr;
  vector_Mat_getSize(vector: System.IntPtr): System.UIntPtr;
  vector_Mat_getPointer(vector: System.IntPtr): System.IntPtr;
  vector_Mat_delete(vector: System.IntPtr): VoidResult;
  vector_Mat_assignToArray(vector: System.IntPtr, arr: HostArray<System.IntPtr>): VoidResult;
  vector_DTrees_Node_new1(): System.IntPtr;
  vector_DTrees_Node_getSize(vector: System.IntPtr): System.UIntPtr;
  vector_DTrees_Node_getPointer(vector: System.IntPtr): System.IntPtr;
  vector_DTrees_Node_delete(vector: System.IntPtr): VoidResult;
  vector_DTrees_Split_new1(): System.IntPtr;
  vector_DTrees_Split_getSize(vector: System.IntPtr): System.UIntPtr;
  vector_DTrees_Split_getPointer(vector: System.IntPtr): System.IntPtr;
  vector_DTrees_Split_delete(vector: System.IntPtr): VoidResult;
  vector_ImageFeatures_new1(): System.IntPtr;
  vector_ImageFeatures_getSize(vector: System.IntPtr): System.UIntPtr;
  vector_ImageFeatures_getKeypointsSize(
    vector: System.IntPtr,
    dst: HostArray<System.UIntPtr>
  ): VoidResult;
  vector_ImageFeatures_getElements(
    vector: System.IntPtr,
    dst: HostArray<OpenCvSharp.Detail.WImageFeatures>
  ): VoidResult;
  vector_ImageFeatures_delete(vector: System.IntPtr): VoidResult;
  vector_vector_uchar_new1(): System.IntPtr;
  vector_vector_uchar_getSize1(vector: System.IntPtr): System.UIntPtr;
  vector_vector_uchar_getSize2(vector: System.IntPtr, size: HostArray<System.UIntPtr>): VoidResult;
  vector_vector_uchar_copy(vec: System.IntPtr, dst: HostArray<System.IntPtr>): VoidResult;
  vector_vector_uchar_delete(vector: System.IntPtr): VoidResult;
  vector_vector_int_new1(): System.IntPtr;
  vector_vector_int_getSize1(vector: System.IntPtr): System.UIntPtr;
  vector_vector_int_getSize2(vector: System.IntPtr, size: HostArray<System.UIntPtr>): VoidResult;
  vector_vector_int_copy(vec: System.IntPtr, dst: HostArray<System.IntPtr>): VoidResult;
  vector_vector_int_delete(vector: System.IntPtr): VoidResult;
  vector_vector_double_new1(): System.IntPtr;
  vector_vector_double_getSize1(vector: System.IntPtr): System.UIntPtr;
  vector_vector_double_getSize2(vector: System.IntPtr, size: HostArray<System.UIntPtr>): VoidResult;
  vector_vector_double_copy(vec: System.IntPtr, dst: HostArray<System.IntPtr>): VoidResult;
  vector_vector_double_delete(vector: System.IntPtr): VoidResult;
  vector_vector_KeyPoint_new1(): System.IntPtr;
  vector_vector_KeyPoint_new3(
    values: HostArray<System.IntPtr>,
    size1: number | StrongNumeric<Int32Host>,
    size2: HostArray<number | StrongNumeric<Int32Host>>
  ): System.IntPtr;
  vector_vector_KeyPoint_getSize1(vector: System.IntPtr): System.UIntPtr;
  vector_vector_KeyPoint_getSize2(
    vector: System.IntPtr,
    size: HostArray<System.UIntPtr>
  ): VoidResult;
  vector_vector_KeyPoint_copy(vec: System.IntPtr, dst: HostArray<System.IntPtr>): VoidResult;
  vector_vector_KeyPoint_delete(vector: System.IntPtr): VoidResult;
  vector_vector_DMatch_new1(): System.IntPtr;
  vector_vector_DMatch_getSize1(vector: System.IntPtr): System.UIntPtr;
  vector_vector_DMatch_getSize2(vector: System.IntPtr, size: HostArray<System.UIntPtr>): VoidResult;
  vector_vector_DMatch_copy(vec: System.IntPtr, dst: HostArray<System.IntPtr>): VoidResult;
  vector_vector_DMatch_delete(vector: System.IntPtr): VoidResult;
  vector_vector_Point_new1(): System.IntPtr;
  vector_vector_Point_new2(size: System.UIntPtr): System.IntPtr;
  vector_vector_Point_getSize1(vector: System.IntPtr): System.UIntPtr;
  vector_vector_Point_getSize2(vector: System.IntPtr, size: HostArray<System.UIntPtr>): VoidResult;
  vector_vector_Point_copy(vec: System.IntPtr, dst: HostArray<System.IntPtr>): VoidResult;
  vector_vector_Point_delete(vector: System.IntPtr): VoidResult;
  vector_vector_Point2f_new1(): System.IntPtr;
  vector_vector_Point2f_getSize1(vector: System.IntPtr): System.UIntPtr;
  vector_vector_Point2f_getSize2(
    vector: System.IntPtr,
    size: HostArray<System.UIntPtr>
  ): VoidResult;
  vector_vector_Point2f_copy(vec: System.IntPtr, dst: HostArray<System.IntPtr>): VoidResult;
  vector_vector_Point2f_delete(vector: System.IntPtr): VoidResult;
  vector_string_new1(): System.IntPtr;
  vector_string_new2(size: System.UIntPtr): System.IntPtr;
  vector_string_getSize(vec: System.IntPtr): System.UIntPtr;
  vector_string_getElements(
    vector: System.IntPtr,
    cStringPointers: HostArray<System.IntPtr>,
    stringLengths: HostArray<number | StrongNumeric<Int32Host>>
  ): VoidResult;
  vector_string_delete(vector: System.IntPtr): VoidResult;
  videoio_VideoCapture_new1(
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  videoio_VideoCapture_new2(
    filename: string,
    apiPreference: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  videoio_VideoCapture_new3(
    device: number | StrongNumeric<Int32Host>,
    apiPreference: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  videoio_VideoCapture_new4(
    filename: string,
    apiPreference: number | StrongNumeric<Int32Host>,
    params: HostArray<number | StrongNumeric<Int32Host>>,
    paramsLength: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  videoio_VideoCapture_new5(
    device: number | StrongNumeric<Int32Host>,
    apiPreference: number | StrongNumeric<Int32Host>,
    params: HostArray<number | StrongNumeric<Int32Host>>,
    paramsLength: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  videoio_VideoCapture_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  videoio_VideoCapture_open1(
    obj: System.IntPtr,
    filename: string,
    apiPreference: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  videoio_VideoCapture_open2(
    obj: System.IntPtr,
    device: number | StrongNumeric<Int32Host>,
    apiPreference: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  videoio_VideoCapture_isOpened(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  videoio_VideoCapture_release(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  videoio_VideoCapture_grab(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  videoio_VideoCapture_retrieve_OutputArray(
    obj: System.IntPtr,
    image: System.IntPtr,
    flag: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  videoio_VideoCapture_retrieve_Mat(
    obj: System.IntPtr,
    image: System.IntPtr,
    flag: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  videoio_VideoCapture_operatorRightShift_Mat(
    obj: System.IntPtr,
    image: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  videoio_VideoCapture_read_OutputArray(
    obj: System.IntPtr,
    image: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  videoio_VideoCapture_read_Mat(
    obj: System.IntPtr,
    image: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  videoio_VideoCapture_set(
    obj: System.IntPtr,
    propId: number | StrongNumeric<Int32Host>,
    value: number | StrongNumeric<DoubleHost>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  videoio_VideoCapture_get(
    obj: System.IntPtr,
    propId: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  videoio_VideoCapture_getBackendName(
    obj: System.IntPtr,
    returnValue: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  videoio_VideoCapture_setExceptionMode(
    obj: System.IntPtr,
    enable: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  videoio_VideoCapture_getExceptionMode(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  videoio_VideoCapture_waitAny(
    streams: HostArray<System.IntPtr>,
    streamsSize: System.UIntPtr,
    readyIndex: System.IntPtr,
    timeoutNs: number | StrongNumeric<Int64Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  videoio_VideoWriter_new1(
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  videoio_VideoWriter_new2(
    filename: string,
    fourcc: number | StrongNumeric<Int32Host>,
    fps: number | StrongNumeric<DoubleHost>,
    frameSize: OpenCvSharp.Size,
    isColor: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  videoio_VideoWriter_new3(
    filename: string,
    apiPreference: number | StrongNumeric<Int32Host>,
    fourcc: number | StrongNumeric<Int32Host>,
    fps: number | StrongNumeric<DoubleHost>,
    frameSize: OpenCvSharp.Size,
    isColor: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  videoio_VideoWriter_new4(
    filename: string,
    fourcc: number | StrongNumeric<Int32Host>,
    fps: number | StrongNumeric<DoubleHost>,
    frameSize: OpenCvSharp.Size,
    params: HostArray<number | StrongNumeric<Int32Host>>,
    paramsLength: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  videoio_VideoWriter_new5(
    filename: string,
    apiPreference: number | StrongNumeric<Int32Host>,
    fourcc: number | StrongNumeric<Int32Host>,
    fps: number | StrongNumeric<DoubleHost>,
    frameSize: OpenCvSharp.Size,
    params: HostArray<number | StrongNumeric<Int32Host>>,
    paramsLength: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  videoio_VideoWriter_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  videoio_VideoWriter_open1(
    obj: System.IntPtr,
    filename: string,
    fourcc: number | StrongNumeric<Int32Host>,
    fps: number | StrongNumeric<DoubleHost>,
    frameSize: OpenCvSharp.Size,
    isColor: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  videoio_VideoWriter_open2(
    obj: System.IntPtr,
    filename: string,
    apiPreference: number | StrongNumeric<Int32Host>,
    fourcc: number | StrongNumeric<Int32Host>,
    fps: number | StrongNumeric<DoubleHost>,
    frameSize: OpenCvSharp.Size,
    isColor: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  videoio_VideoWriter_isOpened(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  videoio_VideoWriter_release(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  videoio_VideoWriter_write(
    obj: System.IntPtr,
    image: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  videoio_VideoWriter_set(
    obj: System.IntPtr,
    propId: number | StrongNumeric<Int32Host>,
    value: number | StrongNumeric<DoubleHost>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  videoio_VideoWriter_get(
    obj: System.IntPtr,
    propId: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  videoio_VideoWriter_fourcc(
    c1: number | StrongNumeric<SByteHost>,
    c2: number | StrongNumeric<SByteHost>,
    c3: number | StrongNumeric<SByteHost>,
    c4: number | StrongNumeric<SByteHost>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  videoio_VideoWriter_getBackendName(
    obj: System.IntPtr,
    returnValue: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  wechat_qrcode_create1(
    detector_prototxt_path: string,
    detector_caffe_model_path: string,
    super_resolution_prototxt_path: string,
    super_resolution_caffe_model_path: string,
    ptr: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  wechat_qrcode_WeChatQRCode_detectAndDecode(
    obj: System.IntPtr,
    inputImage: System.IntPtr,
    points: System.IntPtr,
    texts: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  wechat_qrcode_Ptr_WeChatQRCode_get(
    ptr: System.IntPtr,
    ret: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  wechat_qrcode_Ptr_delete(ptr: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  xfeatures2d_BriefDescriptorExtractor_create(
    bytes: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xfeatures2d_Ptr_BriefDescriptorExtractor_delete(
    obj: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  xfeatures2d_BriefDescriptorExtractor_read(
    obj: System.IntPtr,
    fn: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  xfeatures2d_BriefDescriptorExtractor_write(
    obj: System.IntPtr,
    fs: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  xfeatures2d_BriefDescriptorExtractor_descriptorSize(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xfeatures2d_BriefDescriptorExtractor_descriptorType(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xfeatures2d_Ptr_BriefDescriptorExtractor_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xfeatures2d_FREAK_create(
    orientationNormalized: number | StrongNumeric<Int32Host>,
    scaleNormalized: number | StrongNumeric<Int32Host>,
    patternScale: number | StrongNumeric<SingleHost>,
    nOctaves: number | StrongNumeric<Int32Host>,
    selectedPairs: HostArray<number | StrongNumeric<Int32Host>> | null,
    selectedPairsLength: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xfeatures2d_Ptr_FREAK_delete(ptr: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  xfeatures2d_Ptr_FREAK_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xfeatures2d_StarDetector_create(
    maxSize: number | StrongNumeric<Int32Host>,
    responseThreshold: number | StrongNumeric<Int32Host>,
    lineThresholdProjected: number | StrongNumeric<Int32Host>,
    lineThresholdBinarized: number | StrongNumeric<Int32Host>,
    suppressNonmaxSize: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xfeatures2d_Ptr_StarDetector_delete(ptr: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  xfeatures2d_Ptr_StarDetector_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xfeatures2d_LUCID_create(
    lucidKernel: number | StrongNumeric<Int32Host>,
    blurKernel: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xfeatures2d_Ptr_LUCID_delete(ptr: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  xfeatures2d_Ptr_LUCID_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xfeatures2d_LATCH_create(
    bytes: number | StrongNumeric<Int32Host>,
    rotationInvariance: number | StrongNumeric<Int32Host>,
    halfSsdSize: number | StrongNumeric<Int32Host>,
    sigma: number | StrongNumeric<DoubleHost>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xfeatures2d_Ptr_LATCH_delete(ptr: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  xfeatures2d_Ptr_LATCH_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xfeatures2d_SURF_create(
    hessianThreshold: number | StrongNumeric<DoubleHost>,
    nOctaves: number | StrongNumeric<Int32Host>,
    nOctaveLayers: number | StrongNumeric<Int32Host>,
    extended: number | StrongNumeric<Int32Host>,
    upright: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xfeatures2d_Ptr_SURF_delete(ptr: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  xfeatures2d_Ptr_SURF_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xfeatures2d_SURF_getHessianThreshold(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xfeatures2d_SURF_getNOctaves(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xfeatures2d_SURF_getNOctaveLayers(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xfeatures2d_SURF_getExtended(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xfeatures2d_SURF_getUpright(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xfeatures2d_SURF_setHessianThreshold(
    obj: System.IntPtr,
    value: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xfeatures2d_SURF_setNOctaves(
    obj: System.IntPtr,
    value: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xfeatures2d_SURF_setNOctaveLayers(
    obj: System.IntPtr,
    value: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xfeatures2d_SURF_setExtended(
    obj: System.IntPtr,
    value: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xfeatures2d_SURF_setUpright(
    obj: System.IntPtr,
    value: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xphoto_bm3dDenoising1(
    src: System.IntPtr,
    dstStep1: System.IntPtr,
    dstStep2: System.IntPtr,
    h: number | StrongNumeric<SingleHost>,
    templateWindowSize: number | StrongNumeric<Int32Host>,
    searchWindowSize: number | StrongNumeric<Int32Host>,
    blockMatchingStep1: number | StrongNumeric<Int32Host>,
    blockMatchingStep2: number | StrongNumeric<Int32Host>,
    groupSize: number | StrongNumeric<Int32Host>,
    slidingStep: number | StrongNumeric<Int32Host>,
    beta: number | StrongNumeric<SingleHost>,
    normType: number | StrongNumeric<Int32Host>,
    step: number | StrongNumeric<Int32Host>,
    transformType: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xphoto_bm3dDenoising2(
    src: System.IntPtr,
    dst: System.IntPtr,
    h: number | StrongNumeric<SingleHost>,
    templateWindowSize: number | StrongNumeric<Int32Host>,
    searchWindowSize: number | StrongNumeric<Int32Host>,
    blockMatchingStep1: number | StrongNumeric<Int32Host>,
    blockMatchingStep2: number | StrongNumeric<Int32Host>,
    groupSize: number | StrongNumeric<Int32Host>,
    slidingStep: number | StrongNumeric<Int32Host>,
    beta: number | StrongNumeric<SingleHost>,
    normType: number | StrongNumeric<Int32Host>,
    step: number | StrongNumeric<Int32Host>,
    transformType: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xphoto_dctDenoising(
    src: System.IntPtr,
    dst: System.IntPtr,
    sigma: number | StrongNumeric<DoubleHost>,
    psize: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xphoto_inpaint(
    prt: System.IntPtr,
    src: System.IntPtr,
    dst: System.IntPtr,
    algorithm: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xphoto_oilPainting(
    src: System.IntPtr,
    dst: System.IntPtr,
    size: number | StrongNumeric<Int32Host>,
    dynRatio: number | StrongNumeric<Int32Host>,
    code: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xphoto_TonemapDurand_getSaturation(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xphoto_TonemapDurand_setSaturation(
    obj: System.IntPtr,
    saturation: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xphoto_TonemapDurand_getContrast(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xphoto_TonemapDurand_setContrast(
    obj: System.IntPtr,
    contrast: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xphoto_TonemapDurand_getSigmaSpace(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xphoto_TonemapDurand_setSigmaSpace(
    obj: System.IntPtr,
    saturation: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xphoto_TonemapDurand_getSigmaColor(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xphoto_TonemapDurand_setSigmaColor(
    obj: System.IntPtr,
    saturation: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xphoto_createTonemapDurand(
    gamma: number | StrongNumeric<SingleHost>,
    contrast: number | StrongNumeric<SingleHost>,
    saturation: number | StrongNumeric<SingleHost>,
    sigmaSpace: number | StrongNumeric<SingleHost>,
    sigmaColor: number | StrongNumeric<SingleHost>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xphoto_Ptr_TonemapDurand_delete(ptr: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  xphoto_Ptr_TonemapDurand_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xphoto_applyChannelGains(
    src: System.IntPtr,
    dst: System.IntPtr,
    gainB: number | StrongNumeric<SingleHost>,
    gainG: number | StrongNumeric<SingleHost>,
    gainR: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xphoto_createGrayworldWB(
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xphoto_Ptr_GrayworldWB_delete(prt: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  xphoto_Ptr_GrayworldWB_get(
    prt: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xphoto_GrayworldWB_balanceWhite(
    prt: System.IntPtr,
    src: System.IntPtr,
    dst: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  xphoto_GrayworldWB_SaturationThreshold_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xphoto_GrayworldWB_SaturationThreshold_set(
    ptr: System.IntPtr,
    val: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xphoto_createLearningBasedWB(
    trackerType: string,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xphoto_Ptr_LearningBasedWB_delete(prt: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  xphoto_Ptr_LearningBasedWB_get(
    prt: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xphoto_LearningBasedWB_balanceWhite(
    prt: System.IntPtr,
    src: System.IntPtr,
    dst: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  xphoto_LearningBasedWB_extractSimpleFeatures(
    prt: System.IntPtr,
    src: System.IntPtr,
    dst: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  xphoto_LearningBasedWB_HistBinNum_set(
    prt: System.IntPtr,
    value: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xphoto_LearningBasedWB_RangeMaxVal_set(
    prt: System.IntPtr,
    value: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xphoto_LearningBasedWB_SaturationThreshold_set(
    prt: System.IntPtr,
    value: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xphoto_LearningBasedWB_HistBinNum_get(
    prt: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xphoto_LearningBasedWB_RangeMaxVal_get(
    prt: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xphoto_LearningBasedWB_SaturationThreshold_get(
    prt: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xphoto_createSimpleWB(
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xphoto_Ptr_SimpleWB_delete(prt: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  xphoto_Ptr_SimpleWB_get(
    prt: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xphoto_SimpleWB_balanceWhite(
    prt: System.IntPtr,
    src: System.IntPtr,
    dst: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  xphoto_SimpleWB_InputMax_get(
    prt: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xphoto_SimpleWB_InputMax_set(
    prt: System.IntPtr,
    value: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xphoto_SimpleWB_InputMin_get(
    prt: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xphoto_SimpleWB_InputMin_set(
    prt: System.IntPtr,
    value: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xphoto_SimpleWB_OutputMax_get(
    prt: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xphoto_SimpleWB_OutputMax_set(
    prt: System.IntPtr,
    value: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xphoto_SimpleWB_OutputMin_get(
    prt: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xphoto_SimpleWB_OutputMin_set(
    prt: System.IntPtr,
    value: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xphoto_SimpleWB_P_get(
    prt: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  xphoto_SimpleWB_P_set(
    prt: System.IntPtr,
    value: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_groupRectangles1(
    rectList: System.IntPtr,
    groupThreshold: number | StrongNumeric<Int32Host>,
    eps: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_groupRectangles2(
    rectList: System.IntPtr,
    weights: System.IntPtr,
    groupThreshold: number | StrongNumeric<Int32Host>,
    eps: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_groupRectangles3(
    rectList: System.IntPtr,
    groupThreshold: number | StrongNumeric<Int32Host>,
    eps: number | StrongNumeric<DoubleHost>,
    weights: System.IntPtr,
    levelWeights: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_groupRectangles4(
    rectList: System.IntPtr,
    rejectLevels: System.IntPtr,
    levelWeights: System.IntPtr,
    groupThreshold: number | StrongNumeric<Int32Host>,
    eps: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_groupRectangles_meanshift(
    rectList: System.IntPtr,
    foundWeights: System.IntPtr,
    foundScales: System.IntPtr,
    detectThreshold: number | StrongNumeric<DoubleHost>,
    winDetSize: OpenCvSharp.Size
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_CascadeClassifier_read(
    obj: System.IntPtr,
    fn: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_CascadeClassifier_new(
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_CascadeClassifier_newFromFile(
    fileName: string,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_CascadeClassifier_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_CascadeClassifier_empty(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_CascadeClassifier_load(
    obj: System.IntPtr,
    fileName: string,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_CascadeClassifier_detectMultiScale1(
    obj: System.IntPtr,
    image: System.IntPtr,
    objects: System.IntPtr,
    scaleFactor: number | StrongNumeric<DoubleHost>,
    minNeighbors: number | StrongNumeric<Int32Host>,
    flags: number | StrongNumeric<Int32Host>,
    minSize: OpenCvSharp.Size,
    maxSize: OpenCvSharp.Size
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_CascadeClassifier_detectMultiScale2(
    obj: System.IntPtr,
    image: System.IntPtr,
    objects: System.IntPtr,
    rejectLevels: System.IntPtr,
    levelWeights: System.IntPtr,
    scaleFactor: number | StrongNumeric<DoubleHost>,
    minNeighbors: number | StrongNumeric<Int32Host>,
    flags: number | StrongNumeric<Int32Host>,
    minSize: OpenCvSharp.Size,
    maxSize: OpenCvSharp.Size,
    outputRejectLevels: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_CascadeClassifier_isOldFormatCascade(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_CascadeClassifier_getOriginalWindowSize(
    obj: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Size>
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_CascadeClassifier_getFeatureType(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_HOGDescriptor_new1(
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_HOGDescriptor_new2(
    winSize: OpenCvSharp.Size,
    blockSize: OpenCvSharp.Size,
    blockStride: OpenCvSharp.Size,
    cellSize: OpenCvSharp.Size,
    nbins: number | StrongNumeric<Int32Host>,
    derivAperture: number | StrongNumeric<Int32Host>,
    winSigma: number | StrongNumeric<DoubleHost>,
    histogramNormType: EnumInput<OpenCvSharp.HistogramNormType>,
    l2HysThreshold: number | StrongNumeric<DoubleHost>,
    gammaCorrection: number | StrongNumeric<Int32Host>,
    nlevels: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_HOGDescriptor_new3(
    fileName: string,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_HOGDescriptor_delete(self: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_HOGDescriptor_getDescriptorSize(
    self: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_HOGDescriptor_checkDetectorSize(
    self: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_HOGDescriptor_getWinSigma(
    self: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_HOGDescriptor_setSVMDetector(
    self: System.IntPtr,
    svmDetector: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_HOGDescriptor_load(
    self: System.IntPtr,
    filename: string,
    objName: string | null,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_HOGDescriptor_save(
    self: System.IntPtr,
    filename: string,
    objName: string | null
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_HOGDescriptor_compute(
    self: System.IntPtr,
    img: System.IntPtr,
    descriptors: System.IntPtr,
    winStride: OpenCvSharp.Size,
    padding: OpenCvSharp.Size,
    locations: HostArray<OpenCvSharp.Point> | null,
    locationsLength: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_HOGDescriptor_detect1(
    self: System.IntPtr,
    img: System.IntPtr,
    foundLocations: System.IntPtr,
    hitThreshold: number | StrongNumeric<DoubleHost>,
    winStride: OpenCvSharp.Size,
    padding: OpenCvSharp.Size,
    searchLocations: HostArray<OpenCvSharp.Point> | null,
    searchLocationsLength: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_HOGDescriptor_detect2(
    self: System.IntPtr,
    img: System.IntPtr,
    foundLocations: System.IntPtr,
    weights: System.IntPtr,
    hitThreshold: number | StrongNumeric<DoubleHost>,
    winStride: OpenCvSharp.Size,
    padding: OpenCvSharp.Size,
    searchLocations: HostArray<OpenCvSharp.Point> | null,
    searchLocationsLength: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_HOGDescriptor_detectMultiScale1(
    self: System.IntPtr,
    img: System.IntPtr,
    foundLocations: System.IntPtr,
    hitThreshold: number | StrongNumeric<DoubleHost>,
    winStride: OpenCvSharp.Size,
    padding: OpenCvSharp.Size,
    scale: number | StrongNumeric<DoubleHost>,
    groupThreshold: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_HOGDescriptor_detectMultiScale2(
    self: System.IntPtr,
    img: System.IntPtr,
    foundLocations: System.IntPtr,
    foundWeights: System.IntPtr,
    hitThreshold: number | StrongNumeric<DoubleHost>,
    winStride: OpenCvSharp.Size,
    padding: OpenCvSharp.Size,
    scale: number | StrongNumeric<DoubleHost>,
    groupThreshold: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_HOGDescriptor_computeGradient(
    self: System.IntPtr,
    img: System.IntPtr,
    grad: System.IntPtr,
    angleOfs: System.IntPtr,
    paddingTL: OpenCvSharp.Size,
    paddingBR: OpenCvSharp.Size
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_HOGDescriptor_detectROI(
    obj: System.IntPtr,
    img: System.IntPtr,
    locations: HostArray<OpenCvSharp.Point>,
    locationsLength: number | StrongNumeric<Int32Host>,
    foundLocations: System.IntPtr,
    confidences: System.IntPtr,
    hitThreshold: number | StrongNumeric<DoubleHost>,
    winStride: OpenCvSharp.Size,
    padding: OpenCvSharp.Size
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_HOGDescriptor_detectMultiScaleROI(
    obj: System.IntPtr,
    img: System.IntPtr,
    foundLocations: System.IntPtr,
    roiScales: System.IntPtr,
    roiLocations: System.IntPtr,
    roiConfidences: System.IntPtr,
    hitThreshold: number | StrongNumeric<DoubleHost>,
    groupThreshold: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_HOGDescriptor_groupRectangles(
    obj: System.IntPtr,
    rectList: System.IntPtr,
    weights: System.IntPtr,
    groupThreshold: number | StrongNumeric<Int32Host>,
    eps: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_HOGDescriptor_winSize_get(
    self: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Size>
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_HOGDescriptor_blockSize_get(
    self: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Size>
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_HOGDescriptor_blockStride_get(
    self: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Size>
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_HOGDescriptor_cellSize_get(
    self: System.IntPtr,
    returnValue: HostVariableOut<OpenCvSharp.Size>
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_HOGDescriptor_nbins_get(
    self: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_HOGDescriptor_derivAperture_get(
    self: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_HOGDescriptor_winSigma_get(
    self: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_HOGDescriptor_histogramNormType_get(
    self: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_HOGDescriptor_L2HysThreshold_get(
    self: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_HOGDescriptor_gammaCorrection_get(
    self: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_HOGDescriptor_nlevels_get(
    self: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_HOGDescriptor_signedGradient_get(
    self: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_HOGDescriptor_winSize_set(
    self: System.IntPtr,
    value: OpenCvSharp.Size
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_HOGDescriptor_blockSize_set(
    self: System.IntPtr,
    value: OpenCvSharp.Size
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_HOGDescriptor_blockStride_set(
    self: System.IntPtr,
    value: OpenCvSharp.Size
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_HOGDescriptor_cellSize_set(
    self: System.IntPtr,
    value: OpenCvSharp.Size
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_HOGDescriptor_nbins_set(
    self: System.IntPtr,
    value: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_HOGDescriptor_derivAperture_set(
    self: System.IntPtr,
    value: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_HOGDescriptor_winSigma_set(
    self: System.IntPtr,
    value: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_HOGDescriptor_histogramNormType_set(
    self: System.IntPtr,
    value: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_HOGDescriptor_L2HysThreshold_set(
    self: System.IntPtr,
    value: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_HOGDescriptor_gammaCorrection_set(
    self: System.IntPtr,
    value: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_HOGDescriptor_nlevels_set(
    self: System.IntPtr,
    value: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_HOGDescriptor_signedGradient_set(
    self: System.IntPtr,
    value: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_QRCodeDetector_new(
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_QRCodeDetector_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_QRCodeDetector_setEpsX(
    obj: System.IntPtr,
    epsX: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_QRCodeDetector_setEpsY(
    obj: System.IntPtr,
    epsY: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_QRCodeDetector_detect(
    obj: System.IntPtr,
    img: System.IntPtr,
    points: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_QRCodeDetector_decode(
    obj: System.IntPtr,
    img: System.IntPtr,
    points: System.IntPtr,
    straightQrCode: System.IntPtr,
    returnValue: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_QRCodeDetector_detectAndDecode(
    obj: System.IntPtr,
    img: System.IntPtr,
    points: System.IntPtr,
    straightQrCode: System.IntPtr,
    returnValue: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_QRCodeDetector_detectMulti(
    obj: System.IntPtr,
    img: System.IntPtr,
    points: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_QRCodeDetector_decodeMulti(
    obj: System.IntPtr,
    img: System.IntPtr,
    points: System.IntPtr,
    decodedInfo: System.IntPtr,
    straightQrCode: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  objdetect_QRCodeDetector_decodeMulti_NoStraightQrCode(
    obj: System.IntPtr,
    img: System.IntPtr,
    points: System.IntPtr,
    decodedInfo: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  photo_inpaint(
    src: System.IntPtr,
    inpaintMask: System.IntPtr,
    dst: System.IntPtr,
    inpaintRadius: number | StrongNumeric<DoubleHost>,
    flags: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  photo_fastNlMeansDenoising(
    src: System.IntPtr,
    dst: System.IntPtr,
    h: number | StrongNumeric<SingleHost>,
    templateWindowSize: number | StrongNumeric<Int32Host>,
    searchWindowSize: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  photo_fastNlMeansDenoisingColored(
    src: System.IntPtr,
    dst: System.IntPtr,
    h: number | StrongNumeric<SingleHost>,
    hColor: number | StrongNumeric<SingleHost>,
    templateWindowSize: number | StrongNumeric<Int32Host>,
    searchWindowSize: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  photo_fastNlMeansDenoisingMulti(
    srcImgs: HostArray<System.IntPtr>,
    srcImgsLength: number | StrongNumeric<Int32Host>,
    dst: System.IntPtr,
    imgToDenoiseIndex: number | StrongNumeric<Int32Host>,
    temporalWindowSize: number | StrongNumeric<Int32Host>,
    h: number | StrongNumeric<SingleHost>,
    templateWindowSize: number | StrongNumeric<Int32Host>,
    searchWindowSize: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  photo_fastNlMeansDenoisingColoredMulti(
    srcImgs: HostArray<System.IntPtr>,
    srcImgsLength: number | StrongNumeric<Int32Host>,
    dst: System.IntPtr,
    imgToDenoiseIndex: number | StrongNumeric<Int32Host>,
    temporalWindowSize: number | StrongNumeric<Int32Host>,
    h: number | StrongNumeric<SingleHost>,
    hColor: number | StrongNumeric<SingleHost>,
    templateWindowSize: number | StrongNumeric<Int32Host>,
    searchWindowSize: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  photo_denoise_TVL1(
    observations: HostArray<System.IntPtr>,
    observationsSize: number | StrongNumeric<Int32Host>,
    result: System.IntPtr,
    lambda: number | StrongNumeric<DoubleHost>,
    niters: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  photo_decolor(
    src: System.IntPtr,
    grayscale: System.IntPtr,
    color_boost: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  photo_seamlessClone(
    src: System.IntPtr,
    dst: System.IntPtr,
    mask: System.IntPtr,
    p: OpenCvSharp.Point,
    blend: System.IntPtr,
    flags: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  photo_colorChange(
    src: System.IntPtr,
    mask: System.IntPtr,
    dst: System.IntPtr,
    red_mul: number | StrongNumeric<SingleHost>,
    green_mul: number | StrongNumeric<SingleHost>,
    blue_mul: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  photo_illuminationChange(
    src: System.IntPtr,
    mask: System.IntPtr,
    dst: System.IntPtr,
    alpha: number | StrongNumeric<SingleHost>,
    beta: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  photo_textureFlattening(
    src: System.IntPtr,
    mask: System.IntPtr,
    dst: System.IntPtr,
    low_threshold: number | StrongNumeric<SingleHost>,
    high_threshold: number | StrongNumeric<SingleHost>,
    kernel_size: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  photo_edgePreservingFilter(
    src: System.IntPtr,
    dst: System.IntPtr,
    flags: number | StrongNumeric<Int32Host>,
    sigma_s: number | StrongNumeric<SingleHost>,
    sigma_r: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  photo_detailEnhance(
    src: System.IntPtr,
    dst: System.IntPtr,
    sigma_s: number | StrongNumeric<SingleHost>,
    sigma_r: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  photo_pencilSketch(
    src: System.IntPtr,
    dst1: System.IntPtr,
    dst2: System.IntPtr,
    sigma_s: number | StrongNumeric<SingleHost>,
    sigma_r: number | StrongNumeric<SingleHost>,
    shade_factor: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  photo_stylization(
    src: System.IntPtr,
    dst: System.IntPtr,
    sigma_s: number | StrongNumeric<SingleHost>,
    sigma_r: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  photo_createCalibrateDebevec(
    samples: number | StrongNumeric<Int32Host>,
    lambda: number | StrongNumeric<SingleHost>,
    random: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  photo_Ptr_CalibrateDebevec_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  photo_Ptr_CalibrateDebevec_get(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  photo_CalibrateDebevec_getLambda(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  photo_CalibrateDebevec_setLambda(
    obj: System.IntPtr,
    value: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  photo_CalibrateDebevec_getSamples(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  photo_CalibrateDebevec_setSamples(
    obj: System.IntPtr,
    value: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  photo_CalibrateDebevec_getRandom(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  photo_CalibrateDebevec_setRandom(
    obj: System.IntPtr,
    value: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  photo_createCalibrateRobertson(
    maxIter: number | StrongNumeric<Int32Host>,
    threshold: number | StrongNumeric<SingleHost>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  photo_Ptr_CalibrateRobertson_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  photo_Ptr_CalibrateRobertson_get(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  photo_CalibrateRobertson_getMaxIter(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  photo_CalibrateRobertson_setMaxIter(
    obj: System.IntPtr,
    value: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  photo_CalibrateRobertson_getThreshold(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  photo_CalibrateRobertson_setThreshold(
    obj: System.IntPtr,
    value: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  photo_CalibrateRobertson_getRadiance(
    obj: System.IntPtr,
    returnValue: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  photo_CalibrateCRF_process(
    obj: System.IntPtr,
    srcImgs: HostArray<System.IntPtr>,
    srcImgsLength: number | StrongNumeric<Int32Host>,
    dst: System.IntPtr,
    times: HostArray<number | StrongNumeric<SingleHost>>
  ): OpenCvSharp.Internal.ExceptionStatus;
  photo_createMergeDebevec(): System.IntPtr;
  photo_Ptr_MergeDebevec_delete(obj: System.IntPtr): VoidResult;
  photo_Ptr_MergeDebevec_get(obj: System.IntPtr): System.IntPtr;
  photo_createMergeMertens(): System.IntPtr;
  photo_Ptr_MergeMertens_delete(obj: System.IntPtr): VoidResult;
  photo_Ptr_MergeMertens_get(obj: System.IntPtr): System.IntPtr;
  photo_MergeExposures_process(
    obj: System.IntPtr,
    srcImgs: HostArray<System.IntPtr>,
    srcImgsLength: number | StrongNumeric<Int32Host>,
    dst: System.IntPtr,
    times: HostArray<number | StrongNumeric<SingleHost>>,
    response: System.IntPtr
  ): VoidResult;
  photo_MergeMertens_process(
    obj: System.IntPtr,
    srcImgs: HostArray<System.IntPtr>,
    srcImgsLength: number | StrongNumeric<Int32Host>,
    dst: System.IntPtr
  ): System.IntPtr;
  photo_Tonemap_process(
    obj: System.IntPtr,
    src: System.IntPtr,
    dst: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  photo_Tonemap_getGamma(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  photo_Tonemap_setGamma(
    obj: System.IntPtr,
    gamma: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  photo_createTonemap(
    gamma: number | StrongNumeric<SingleHost>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  photo_Ptr_Tonemap_delete(ptr: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  photo_Ptr_Tonemap_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  photo_TonemapDrago_getSaturation(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  photo_TonemapDrago_setSaturation(
    obj: System.IntPtr,
    saturation: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  photo_TonemapDrago_getBias(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  photo_TonemapDrago_setBias(
    obj: System.IntPtr,
    bias: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  photo_createTonemapDrago(
    gamma: number | StrongNumeric<SingleHost>,
    saturation: number | StrongNumeric<SingleHost>,
    bias: number | StrongNumeric<SingleHost>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  photo_Ptr_TonemapDrago_delete(ptr: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  photo_Ptr_TonemapDrago_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  photo_TonemapReinhard_getIntensity(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  photo_TonemapReinhard_setIntensity(
    obj: System.IntPtr,
    intensity: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  photo_TonemapReinhard_getLightAdaptation(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  photo_TonemapReinhard_setLightAdaptation(
    obj: System.IntPtr,
    light_adapt: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  photo_TonemapReinhard_getColorAdaptation(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  photo_TonemapReinhard_setColorAdaptation(
    obj: System.IntPtr,
    color_adapt: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  photo_createTonemapReinhard(
    gamma: number | StrongNumeric<SingleHost>,
    intensity: number | StrongNumeric<SingleHost>,
    light_adapt: number | StrongNumeric<SingleHost>,
    color_adapt: number | StrongNumeric<SingleHost>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  photo_Ptr_TonemapReinhard_delete(ptr: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  photo_Ptr_TonemapReinhard_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  photo_TonemapMantiuk_getScale(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  photo_TonemapMantiuk_setScale(
    obj: System.IntPtr,
    scale: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  photo_TonemapMantiuk_getSaturation(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  photo_TonemapMantiuk_setSaturation(
    obj: System.IntPtr,
    saturation: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  photo_createTonemapMantiuk(
    gamma: number | StrongNumeric<SingleHost>,
    scale: number | StrongNumeric<SingleHost>,
    saturation: number | StrongNumeric<SingleHost>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  photo_Ptr_TonemapMantiuk_delete(ptr: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  photo_Ptr_TonemapMantiuk_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  shape_ShapeDistanceExtractor_computeDistance(
    obj: System.IntPtr,
    contour1: System.IntPtr,
    contour2: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  shape_Ptr_ShapeContextDistanceExtractor_delete(
    obj: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  shape_Ptr_ShapeContextDistanceExtractor_get(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  shape_ShapeContextDistanceExtractor_setAngularBins(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  shape_ShapeContextDistanceExtractor_getAngularBins(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  shape_ShapeContextDistanceExtractor_setRadialBins(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  shape_ShapeContextDistanceExtractor_getRadialBins(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  shape_ShapeContextDistanceExtractor_setInnerRadius(
    obj: System.IntPtr,
    val: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  shape_ShapeContextDistanceExtractor_getInnerRadius(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  shape_ShapeContextDistanceExtractor_setOuterRadius(
    obj: System.IntPtr,
    val: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  shape_ShapeContextDistanceExtractor_getOuterRadius(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  shape_ShapeContextDistanceExtractor_setRotationInvariant(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  shape_ShapeContextDistanceExtractor_getRotationInvariant(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  shape_ShapeContextDistanceExtractor_setShapeContextWeight(
    obj: System.IntPtr,
    val: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  shape_ShapeContextDistanceExtractor_getShapeContextWeight(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  shape_ShapeContextDistanceExtractor_setImageAppearanceWeight(
    obj: System.IntPtr,
    val: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  shape_ShapeContextDistanceExtractor_getImageAppearanceWeight(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  shape_ShapeContextDistanceExtractor_setBendingEnergyWeight(
    obj: System.IntPtr,
    val: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  shape_ShapeContextDistanceExtractor_getBendingEnergyWeight(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  shape_ShapeContextDistanceExtractor_setImages(
    obj: System.IntPtr,
    image1: System.IntPtr,
    image2: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  shape_ShapeContextDistanceExtractor_getImages(
    obj: System.IntPtr,
    image1: System.IntPtr,
    image2: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  shape_ShapeContextDistanceExtractor_setIterations(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  shape_ShapeContextDistanceExtractor_getIterations(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  shape_ShapeContextDistanceExtractor_setStdDev(
    obj: System.IntPtr,
    val: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  shape_ShapeContextDistanceExtractor_getStdDev(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  shape_createShapeContextDistanceExtractor(
    nAngularBins: number | StrongNumeric<Int32Host>,
    nRadialBins: number | StrongNumeric<Int32Host>,
    innerRadius: number | StrongNumeric<SingleHost>,
    outerRadius: number | StrongNumeric<SingleHost>,
    iterations: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  shape_Ptr_HausdorffDistanceExtractor_delete(
    obj: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  shape_Ptr_HausdorffDistanceExtractor_get(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  shape_HausdorffDistanceExtractor_setDistanceFlag(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  shape_HausdorffDistanceExtractor_getDistanceFlag(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  shape_HausdorffDistanceExtractor_setRankProportion(
    obj: System.IntPtr,
    val: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  shape_HausdorffDistanceExtractor_getRankProportion(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  shape_createHausdorffDistanceExtractor(
    distanceFlag: number | StrongNumeric<Int32Host>,
    rankProp: number | StrongNumeric<SingleHost>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  stitching_Stitcher_create(
    mode: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  stitching_Ptr_Stitcher_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  stitching_Ptr_Stitcher_get(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  stitching_Stitcher_registrationResol(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  stitching_Stitcher_setRegistrationResol(
    obj: System.IntPtr,
    resolMpx: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  stitching_Stitcher_seamEstimationResol(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  stitching_Stitcher_setSeamEstimationResol(
    obj: System.IntPtr,
    resolMpx: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  stitching_Stitcher_compositingResol(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  stitching_Stitcher_setCompositingResol(
    obj: System.IntPtr,
    resolMpx: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  stitching_Stitcher_panoConfidenceThresh(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  stitching_Stitcher_setPanoConfidenceThresh(
    obj: System.IntPtr,
    confThresh: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  stitching_Stitcher_waveCorrection(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  stitching_Stitcher_setWaveCorrection(
    obj: System.IntPtr,
    flag: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  stitching_Stitcher_waveCorrectKind(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  stitching_Stitcher_setWaveCorrectKind(
    obj: System.IntPtr,
    kind: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  stitching_Stitcher_estimateTransform_InputArray1(
    obj: System.IntPtr,
    images: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  stitching_Stitcher_estimateTransform_InputArray2(
    obj: System.IntPtr,
    images: System.IntPtr,
    rois: HostArray<System.IntPtr>,
    roisSize1: number | StrongNumeric<Int32Host>,
    roisSize2: HostArray<number | StrongNumeric<Int32Host>>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  stitching_Stitcher_estimateTransform_MatArray1(
    obj: System.IntPtr,
    images: HostArray<System.IntPtr>,
    imagesSize: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  stitching_Stitcher_estimateTransform_MatArray2(
    obj: System.IntPtr,
    images: HostArray<System.IntPtr>,
    imagesSize: number | StrongNumeric<Int32Host>,
    rois: HostArray<System.IntPtr>,
    roisSize1: number | StrongNumeric<Int32Host>,
    roisSize2: HostArray<number | StrongNumeric<Int32Host>>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  stitching_Stitcher_composePanorama1(
    obj: System.IntPtr,
    pano: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  stitching_Stitcher_composePanorama2_InputArray(
    obj: System.IntPtr,
    images: System.IntPtr,
    pano: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  stitching_Stitcher_composePanorama2_MatArray(
    obj: System.IntPtr,
    images: HostArray<System.IntPtr>,
    imagesSize: number | StrongNumeric<Int32Host>,
    pano: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  stitching_Stitcher_stitch1_InputArray(
    obj: System.IntPtr,
    images: System.IntPtr,
    pano: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  stitching_Stitcher_stitch1_MatArray(
    obj: System.IntPtr,
    images: HostArray<System.IntPtr>,
    imagesSize: number | StrongNumeric<Int32Host>,
    pano: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  stitching_Stitcher_stitch2_InputArray(
    obj: System.IntPtr,
    images: System.IntPtr,
    rois: HostArray<System.IntPtr>,
    roisSize1: number | StrongNumeric<Int32Host>,
    roisSize2: HostArray<number | StrongNumeric<Int32Host>>,
    pano: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  stitching_Stitcher_stitch2_MatArray(
    obj: System.IntPtr,
    images: HostArray<System.IntPtr>,
    imagesSize: number | StrongNumeric<Int32Host>,
    rois: HostArray<System.IntPtr>,
    roisSize1: number | StrongNumeric<Int32Host>,
    roisSize2: HostArray<number | StrongNumeric<Int32Host>>,
    pano: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  stitching_Stitcher_component(
    obj: System.IntPtr,
    returnValue: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  stitching_Stitcher_workScale(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  stitching_computeImageFeatures1(
    featuresFinder: System.IntPtr,
    images: HostArray<System.IntPtr>,
    imagesLength: number | StrongNumeric<Int32Host>,
    featuresVec: System.IntPtr,
    masks: HostArray<System.IntPtr> | null
  ): OpenCvSharp.Internal.ExceptionStatus;
  stitching_FeaturesMatcher_apply(
    obj: System.IntPtr,
    features1: HostVariableRef<OpenCvSharp.Detail.WImageFeatures>,
    features2: HostVariableRef<OpenCvSharp.Detail.WImageFeatures>,
    outSrcImgIdx: HostVariableOut<number>,
    outDstImgIdx: HostVariableOut<number>,
    outMatches: System.IntPtr,
    outInliersMask: System.IntPtr,
    outNumInliers: HostVariableOut<number>,
    outH: System.IntPtr,
    outConfidence: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  stitching_FeaturesMatcher_apply2(
    obj: System.IntPtr,
    features: HostArray<OpenCvSharp.Detail.WImageFeatures>,
    featuresSize: number | StrongNumeric<Int32Host>,
    mask: System.IntPtr,
    outSrcImgIdx: System.IntPtr,
    outDstImgIdx: System.IntPtr,
    outMatches: System.IntPtr,
    outInliersMask: System.IntPtr,
    outNumInliers: System.IntPtr,
    outH: System.IntPtr,
    outConfidence: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  stitching_FeaturesMatcher_isThreadSafe(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  stitching_FeaturesMatcher_collectGarbage(
    obj: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  stitching_BestOf2NearestMatcher_new(
    tryUseGpu: number | StrongNumeric<Int32Host>,
    matchConf: number | StrongNumeric<SingleHost>,
    numMatchesThresh1: number | StrongNumeric<Int32Host>,
    numMatchesThresh2: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  stitching_BestOf2NearestMatcher_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  stitching_BestOf2NearestMatcher_collectGarbage(
    obj: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  stitching_AffineBestOf2NearestMatcher_new(
    fullAffine: number | StrongNumeric<Int32Host>,
    tryUseGpu: number | StrongNumeric<Int32Host>,
    matchConf: number | StrongNumeric<SingleHost>,
    numMatchesThresh1: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  stitching_AffineBestOf2NearestMatcher_delete(
    obj: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_DenseOpticalFlowExt_calc(
    obj: System.IntPtr,
    frame0: System.IntPtr,
    frame1: System.IntPtr,
    flow1: System.IntPtr,
    flow2: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_DenseOpticalFlowExt_collectGarbage(
    obj: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_createOptFlow_Farneback(
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_createOptFlow_Farneback_CUDA(
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_Ptr_FarnebackOpticalFlow_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_Ptr_FarnebackOpticalFlow_delete(
    ptr: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_FarnebackOpticalFlow_getPyrScale(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_FarnebackOpticalFlow_setPyrScale(
    obj: System.IntPtr,
    val: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_FarnebackOpticalFlow_getLevelsNumber(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_FarnebackOpticalFlow_setLevelsNumber(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_FarnebackOpticalFlow_getWindowSize(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_FarnebackOpticalFlow_setWindowSize(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_FarnebackOpticalFlow_getIterations(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_FarnebackOpticalFlow_setIterations(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_FarnebackOpticalFlow_getPolyN(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_FarnebackOpticalFlow_setPolyN(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_FarnebackOpticalFlow_getPolySigma(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_FarnebackOpticalFlow_setPolySigma(
    obj: System.IntPtr,
    val: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_FarnebackOpticalFlow_getFlags(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_FarnebackOpticalFlow_setFlags(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_createOptFlow_DualTVL1(
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_createOptFlow_DualTVL1_CUDA(
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_Ptr_DualTVL1OpticalFlow_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_Ptr_DualTVL1OpticalFlow_delete(ptr: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  superres_DualTVL1OpticalFlow_getTau(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_DualTVL1OpticalFlow_setTau(
    obj: System.IntPtr,
    val: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_DualTVL1OpticalFlow_getLambda(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_DualTVL1OpticalFlow_setLambda(
    obj: System.IntPtr,
    val: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_DualTVL1OpticalFlow_getTheta(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_DualTVL1OpticalFlow_setTheta(
    obj: System.IntPtr,
    val: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_DualTVL1OpticalFlow_getScalesNumber(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_DualTVL1OpticalFlow_setScalesNumber(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_DualTVL1OpticalFlow_getWarpingsNumber(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_DualTVL1OpticalFlow_setWarpingsNumber(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_DualTVL1OpticalFlow_getEpsilon(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_DualTVL1OpticalFlow_setEpsilon(
    obj: System.IntPtr,
    val: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_DualTVL1OpticalFlow_getIterations(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_DualTVL1OpticalFlow_setIterations(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_DualTVL1OpticalFlow_getUseInitialFlow(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_DualTVL1OpticalFlow_setUseInitialFlow(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_createOptFlow_Brox_CUDA(
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_Ptr_BroxOpticalFlow_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_Ptr_BroxOpticalFlow_delete(ptr: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  superres_BroxOpticalFlow_getAlpha(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_BroxOpticalFlow_setAlpha(
    obj: System.IntPtr,
    val: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_BroxOpticalFlow_getGamma(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_BroxOpticalFlow_setGamma(
    obj: System.IntPtr,
    val: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_BroxOpticalFlow_getScaleFactor(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_BroxOpticalFlow_setScaleFactor(
    obj: System.IntPtr,
    val: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_BroxOpticalFlow_getInnerIterations(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_BroxOpticalFlow_setInnerIterations(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_BroxOpticalFlow_getOuterIterations(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_BroxOpticalFlow_setOuterIterations(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_BroxOpticalFlow_getSolverIterations(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_BroxOpticalFlow_setSolverIterations(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_createOptFlow_PyrLK_CUDA(
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_Ptr_PyrLKOpticalFlow_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_Ptr_PyrLKOpticalFlow_delete(ptr: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  superres_PyrLKOpticalFlow_getWindowSize(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_PyrLKOpticalFlow_setWindowSize(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_PyrLKOpticalFlow_getMaxLevel(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_PyrLKOpticalFlow_setMaxLevel(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_PyrLKOpticalFlow_getIterations(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_PyrLKOpticalFlow_setIterations(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_FrameSource_nextFrame(
    obj: System.IntPtr,
    frame: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_FrameSource_reset(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  superres_createFrameSource_Empty(
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_createFrameSource_Video(
    fileName: string,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_createFrameSource_Video_CUDA(
    fileName: string,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_createFrameSource_Camera(
    deviceId: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_Ptr_FrameSource_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_Ptr_FrameSource_delete(ptr: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  superres_SuperResolution_setInput(
    obj: System.IntPtr,
    frameSource: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_SuperResolution_nextFrame(
    obj: System.IntPtr,
    frame: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_SuperResolution_reset(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  superres_SuperResolution_collectGarbage(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  superres_createSuperResolution_BTVL1(
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_createSuperResolution_BTVL1_CUDA(
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_Ptr_SuperResolution_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_Ptr_SuperResolution_delete(ptr: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  superres_SuperResolution_getScale(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_SuperResolution_setScale(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_SuperResolution_getIterations(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_SuperResolution_setIterations(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_SuperResolution_getTau(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_SuperResolution_setTau(
    obj: System.IntPtr,
    val: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_SuperResolution_getLambda(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_SuperResolution_setLambda(
    obj: System.IntPtr,
    val: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_SuperResolution_getAlpha(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_SuperResolution_setAlpha(
    obj: System.IntPtr,
    val: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_SuperResolution_getKernelSize(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_SuperResolution_setKernelSize(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_SuperResolution_getBlurKernelSize(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_SuperResolution_setBlurKernelSize(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_SuperResolution_getBlurSigma(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_SuperResolution_setBlurSigma(
    obj: System.IntPtr,
    val: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_SuperResolution_getTemporalAreaRadius(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_SuperResolution_setTemporalAreaRadius(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_SuperResolution_getOpticalFlow(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  superres_SuperResolution_setOpticalFlow(
    obj: System.IntPtr,
    val: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  text_OCRTesseract_run1(
    obj: System.IntPtr,
    image: System.IntPtr,
    outputText: System.IntPtr,
    componentRects: System.IntPtr,
    componentTexts: System.IntPtr,
    componentConfidences: System.IntPtr,
    componentLevel: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  text_OCRTesseract_run2(
    obj: System.IntPtr,
    image: System.IntPtr,
    mask: System.IntPtr,
    outputText: System.IntPtr,
    componentRects: System.IntPtr,
    componentTexts: System.IntPtr,
    componentConfidences: System.IntPtr,
    componentLevel: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  text_OCRTesseract_setWhiteList(
    obj: System.IntPtr,
    charWhitelist: string
  ): OpenCvSharp.Internal.ExceptionStatus;
  text_OCRTesseract_create(
    datapath: string | null,
    language: string | null,
    charWhitelist: string | null,
    oem: number | StrongNumeric<Int32Host>,
    psmode: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  text_Ptr_OCRTesseract_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  text_OCRTesseract_get(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  text_detectTextSWT(
    input: System.IntPtr,
    result: System.IntPtr,
    darkOnLight: number | StrongNumeric<Int32Host>,
    draw: System.IntPtr,
    chainBBs: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  text_TextDetector_detect(
    obj: System.IntPtr,
    inputImage: System.IntPtr,
    bbox: System.IntPtr,
    confidence: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  text_TextDetectorCNN_detect(
    obj: System.IntPtr,
    inputImage: System.IntPtr,
    bbox: System.IntPtr,
    confidence: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  text_TextDetectorCNN_create1(
    modelArchFilename: string,
    modelWeightsFilename: string,
    detectionSizes: HostArray<OpenCvSharp.Size>,
    detectionSizesLength: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  text_TextDetectorCNN_create2(
    modelArchFilename: string,
    modelWeightsFilename: string,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  text_Ptr_TextDetectorCNN_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  text_Ptr_TextDetectorCNN_get(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  tracking_TrackerKCF_create1(
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  tracking_TrackerKCF_create2(
    parameters: OpenCvSharp.Tracking.TrackerKCF.Params,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  tracking_Ptr_TrackerKCF_delete(ptr: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  tracking_Ptr_TrackerKCF_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  tracking_TrackerCSRT_create1(
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  tracking_TrackerCSRT_create2(
    parameters: HostVariableRef<OpenCvSharp.Tracking.TrackerCSRT.Params>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  tracking_Ptr_TrackerCSRT_delete(ptr: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  tracking_Ptr_TrackerCSRT_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  tracking_TrackerCSRT_setInitialMask(
    tracker: System.IntPtr,
    mask: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_BackgroundSubtractor_getBackgroundImage(
    self: System.IntPtr,
    backgroundImage: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_BackgroundSubtractor_apply(
    self: System.IntPtr,
    image: System.IntPtr,
    fgmask: System.IntPtr,
    learningRate: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_Ptr_BackgroundSubtractor_delete(ptr: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  video_Ptr_BackgroundSubtractor_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_createBackgroundSubtractorMOG2(
    history: number | StrongNumeric<Int32Host>,
    varThreshold: number | StrongNumeric<DoubleHost>,
    detectShadows: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_Ptr_BackgroundSubtractorMOG2_delete(
    ptr: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_Ptr_BackgroundSubtractorMOG2_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_BackgroundSubtractorMOG2_getHistory(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_BackgroundSubtractorMOG2_setHistory(
    ptr: System.IntPtr,
    value: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_BackgroundSubtractorMOG2_getNMixtures(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_BackgroundSubtractorMOG2_setNMixtures(
    ptr: System.IntPtr,
    value: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_BackgroundSubtractorMOG2_getBackgroundRatio(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_BackgroundSubtractorMOG2_setBackgroundRatio(
    ptr: System.IntPtr,
    value: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_BackgroundSubtractorMOG2_getVarThreshold(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_BackgroundSubtractorMOG2_setVarThreshold(
    ptr: System.IntPtr,
    value: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_BackgroundSubtractorMOG2_getVarThresholdGen(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_BackgroundSubtractorMOG2_setVarThresholdGen(
    ptr: System.IntPtr,
    value: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_BackgroundSubtractorMOG2_getVarInit(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_BackgroundSubtractorMOG2_setVarInit(
    ptr: System.IntPtr,
    value: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_BackgroundSubtractorMOG2_getVarMin(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_BackgroundSubtractorMOG2_setVarMin(
    ptr: System.IntPtr,
    value: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_BackgroundSubtractorMOG2_getVarMax(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_BackgroundSubtractorMOG2_setVarMax(
    ptr: System.IntPtr,
    value: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_BackgroundSubtractorMOG2_getComplexityReductionThreshold(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_BackgroundSubtractorMOG2_setComplexityReductionThreshold(
    ptr: System.IntPtr,
    value: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_BackgroundSubtractorMOG2_getDetectShadows(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_BackgroundSubtractorMOG2_setDetectShadows(
    ptr: System.IntPtr,
    value: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_BackgroundSubtractorMOG2_getShadowValue(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_BackgroundSubtractorMOG2_setShadowValue(
    ptr: System.IntPtr,
    value: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_BackgroundSubtractorMOG2_getShadowThreshold(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_BackgroundSubtractorMOG2_setShadowThreshold(
    ptr: System.IntPtr,
    value: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_createBackgroundSubtractorKNN(
    history: number | StrongNumeric<Int32Host>,
    dist2Threshold: number | StrongNumeric<DoubleHost>,
    detectShadows: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_Ptr_BackgroundSubtractorKNN_delete(
    obj: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_Ptr_BackgroundSubtractorKNN_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_BackgroundSubtractorKNN_getHistory(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_BackgroundSubtractorKNN_setHistory(
    ptr: System.IntPtr,
    value: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_BackgroundSubtractorKNN_getNSamples(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_BackgroundSubtractorKNN_setNSamples(
    ptr: System.IntPtr,
    value: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_BackgroundSubtractorKNN_getDist2Threshold(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_BackgroundSubtractorKNN_setDist2Threshold(
    ptr: System.IntPtr,
    value: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_BackgroundSubtractorKNN_getkNNSamples(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_BackgroundSubtractorKNN_setkNNSamples(
    ptr: System.IntPtr,
    value: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_BackgroundSubtractorKNN_getDetectShadows(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_BackgroundSubtractorKNN_setDetectShadows(
    ptr: System.IntPtr,
    value: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_BackgroundSubtractorKNN_getShadowValue(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_BackgroundSubtractorKNN_setShadowValue(
    ptr: System.IntPtr,
    value: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_BackgroundSubtractorKNN_getShadowThreshold(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_BackgroundSubtractorKNN_setShadowThreshold(
    ptr: System.IntPtr,
    value: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_CamShift(
    probImage: System.IntPtr,
    window: HostVariableRef<OpenCvSharp.Rect>,
    criteria: OpenCvSharp.TermCriteria,
    returnValue: HostVariableOut<OpenCvSharp.RotatedRect>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_meanShift(
    probImage: System.IntPtr,
    window: HostVariableRef<OpenCvSharp.Rect>,
    criteria: OpenCvSharp.TermCriteria,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_buildOpticalFlowPyramid1(
    img: System.IntPtr,
    pyramid: System.IntPtr,
    winSize: OpenCvSharp.Size,
    maxLevel: number | StrongNumeric<Int32Host>,
    withDerivatives: number | StrongNumeric<Int32Host>,
    pyrBorder: number | StrongNumeric<Int32Host>,
    derivBorder: number | StrongNumeric<Int32Host>,
    tryReuseInputImage: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_buildOpticalFlowPyramid2(
    img: System.IntPtr,
    pyramidVec: System.IntPtr,
    winSize: OpenCvSharp.Size,
    maxLevel: number | StrongNumeric<Int32Host>,
    withDerivatives: number | StrongNumeric<Int32Host>,
    pyrBorder: number | StrongNumeric<Int32Host>,
    derivBorder: number | StrongNumeric<Int32Host>,
    tryReuseInputImage: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_calcOpticalFlowPyrLK_InputArray(
    prevImg: System.IntPtr,
    nextImg: System.IntPtr,
    prevPts: System.IntPtr,
    nextPts: System.IntPtr,
    status: System.IntPtr,
    err: System.IntPtr,
    winSize: OpenCvSharp.Size,
    maxLevel: number | StrongNumeric<Int32Host>,
    criteria: OpenCvSharp.TermCriteria,
    flags: number | StrongNumeric<Int32Host>,
    minEigThreshold: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_calcOpticalFlowPyrLK_vector(
    prevImg: System.IntPtr,
    nextImg: System.IntPtr,
    prevPts: HostArray<OpenCvSharp.Point2f>,
    prevPtsSize: number | StrongNumeric<Int32Host>,
    nextPts: System.IntPtr,
    status: System.IntPtr,
    err: System.IntPtr,
    winSize: OpenCvSharp.Size,
    maxLevel: number | StrongNumeric<Int32Host>,
    criteria: OpenCvSharp.TermCriteria,
    flags: number | StrongNumeric<Int32Host>,
    minEigThreshold: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_calcOpticalFlowFarneback(
    prev: System.IntPtr,
    next: System.IntPtr,
    flow: System.IntPtr,
    pyrScale: number | StrongNumeric<DoubleHost>,
    levels: number | StrongNumeric<Int32Host>,
    winSize: number | StrongNumeric<Int32Host>,
    iterations: number | StrongNumeric<Int32Host>,
    polyN: number | StrongNumeric<Int32Host>,
    polySigma: number | StrongNumeric<DoubleHost>,
    flags: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_computeECC(
    templateImage: System.IntPtr,
    inputImage: System.IntPtr,
    inputMask: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_findTransformECC1(
    templateImage: System.IntPtr,
    inputImage: System.IntPtr,
    warpMatrix: System.IntPtr,
    motionType: number | StrongNumeric<Int32Host>,
    criteria: OpenCvSharp.TermCriteria,
    inputMask: System.IntPtr,
    gaussFiltSize: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_findTransformECC2(
    templateImage: System.IntPtr,
    inputImage: System.IntPtr,
    warpMatrix: System.IntPtr,
    motionType: number | StrongNumeric<Int32Host>,
    criteria: OpenCvSharp.TermCriteria,
    inputMask: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_KalmanFilter_new1(
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_KalmanFilter_new2(
    dynamParams: number | StrongNumeric<Int32Host>,
    measureParams: number | StrongNumeric<Int32Host>,
    controlParams: number | StrongNumeric<Int32Host>,
    type: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_KalmanFilter_init(
    obj: System.IntPtr,
    dynamParams: number | StrongNumeric<Int32Host>,
    measureParams: number | StrongNumeric<Int32Host>,
    controlParams: number | StrongNumeric<Int32Host>,
    type: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_KalmanFilter_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  video_KalmanFilter_predict(
    obj: System.IntPtr,
    control: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_KalmanFilter_correct(
    obj: System.IntPtr,
    measurement: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_KalmanFilter_statePre(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_KalmanFilter_statePost(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_KalmanFilter_transitionMatrix(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_KalmanFilter_controlMatrix(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_KalmanFilter_measurementMatrix(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_KalmanFilter_processNoiseCov(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_KalmanFilter_measurementNoiseCov(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_KalmanFilter_errorCovPre(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_KalmanFilter_gain(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_KalmanFilter_errorCovPost(
    obj: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_Tracker_init(
    obj: System.IntPtr,
    image: System.IntPtr,
    boundingBox: OpenCvSharp.Rect
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_Tracker_update(
    obj: System.IntPtr,
    image: System.IntPtr,
    boundingBox: HostVariableRef<OpenCvSharp.Rect>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_TrackerMIL_create1(
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_Ptr_TrackerMIL_delete(ptr: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  video_Ptr_TrackerMIL_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_TrackerGOTURN_create1(
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  video_Ptr_TrackerGOTURN_delete(ptr: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  video_Ptr_TrackerGOTURN_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_niBlackThreshold(
    src: System.IntPtr,
    dst: System.IntPtr,
    maxValue: number | StrongNumeric<DoubleHost>,
    type: number | StrongNumeric<Int32Host>,
    blockSize: number | StrongNumeric<Int32Host>,
    k: number | StrongNumeric<DoubleHost>,
    binarizationMethod: number | StrongNumeric<Int32Host>,
    r: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_thinning(
    src: System.IntPtr,
    dst: System.IntPtr,
    thinningType: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_anisotropicDiffusion(
    src: System.IntPtr,
    dst: System.IntPtr,
    alpha: number | StrongNumeric<SingleHost>,
    k: number | StrongNumeric<SingleHost>,
    niters: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_BrightEdges(
    original: System.IntPtr,
    edgeview: System.IntPtr,
    contrast: number | StrongNumeric<Int32Host>,
    shortRange: number | StrongNumeric<Int32Host>,
    longRange: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_createQuaternionImage(
    img: System.IntPtr,
    qimg: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_qconj(qimg: System.IntPtr, qcimg: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_qunitary(
    qimg: System.IntPtr,
    qnimg: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_qmultiply(
    src1: System.IntPtr,
    src2: System.IntPtr,
    dst: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_qdft(
    img: System.IntPtr,
    qimg: System.IntPtr,
    flags: number | StrongNumeric<Int32Host>,
    sideLeft: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_colorMatchTemplate(
    img: System.IntPtr,
    templ: System.IntPtr,
    result: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_GradientDericheY(
    op: System.IntPtr,
    dst: System.IntPtr,
    alpha: number | StrongNumeric<DoubleHost>,
    omega: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_GradientDericheX(
    op: System.IntPtr,
    dst: System.IntPtr,
    alpha: number | StrongNumeric<DoubleHost>,
    omega: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_edgePreservingFilter(
    src: System.IntPtr,
    dst: System.IntPtr,
    d: number | StrongNumeric<Int32Host>,
    threshold: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_covarianceEstimation(
    src: System.IntPtr,
    dst: System.IntPtr,
    windowRows: number | StrongNumeric<Int32Host>,
    windowCols: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_FastHoughTransform(
    src: System.IntPtr,
    dst: System.IntPtr,
    dstMatDepth: OpenCvSharp.MatType,
    angleRange: number | StrongNumeric<Int32Host>,
    op: number | StrongNumeric<Int32Host>,
    makeSkew: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_HoughPoint2Line(
    houghPoint: OpenCvSharp.Point,
    srcImgInfo: System.IntPtr,
    angleRange: number | StrongNumeric<Int32Host>,
    makeSkew: number | StrongNumeric<Int32Host>,
    rules: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<OpenCvSharp.Vec4i>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_GradientPaillouY(
    op: System.IntPtr,
    dst: System.IntPtr,
    alpha: number | StrongNumeric<DoubleHost>,
    omega: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_GradientPaillouX(
    op: System.IntPtr,
    dst: System.IntPtr,
    alpha: number | StrongNumeric<DoubleHost>,
    omega: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_PeiLinNormalization_OutputArray(
    i: System.IntPtr,
    t: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_rl_threshold(
    src: System.IntPtr,
    rlDest: System.IntPtr,
    thresh: number | StrongNumeric<DoubleHost>,
    type: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_rl_dilate(
    rlSrc: System.IntPtr,
    rlDest: System.IntPtr,
    rlKernel: System.IntPtr,
    anchor: OpenCvSharp.Point
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_rl_erode(
    rlSrc: System.IntPtr,
    rlDest: System.IntPtr,
    rlKernel: System.IntPtr,
    bBoundaryOn: number | StrongNumeric<Int32Host>,
    anchor: OpenCvSharp.Point
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_rl_getStructuringElement(
    shape: number | StrongNumeric<Int32Host>,
    ksize: OpenCvSharp.Size,
    outValue: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_rl_paint(
    image: System.IntPtr,
    rlSrc: System.IntPtr,
    value: OpenCvSharp.Scalar
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_rl_isRLMorphologyPossible(
    rlStructuringElement: System.IntPtr,
    outValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_rl_createRLEImage(
    runs: HostArray<OpenCvSharp.Point3i>,
    runsLength: System.IntPtr,
    res: System.IntPtr,
    size: OpenCvSharp.Size
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_rl_morphologyEx(
    rlSrc: System.IntPtr,
    rlDest: System.IntPtr,
    op: number | StrongNumeric<Int32Host>,
    rlKernel: System.IntPtr,
    bBoundaryOnForErosion: number | StrongNumeric<Int32Host>,
    anchor: OpenCvSharp.Point
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_weightedMedianFilter(
    joint: System.IntPtr,
    src: System.IntPtr,
    dst: System.IntPtr,
    r: number | StrongNumeric<Int32Host>,
    sigma: number | StrongNumeric<DoubleHost>,
    weightType: number | StrongNumeric<Int32Host>,
    mask: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_EdgeBoxes_getBoundingBoxes(
    obj: System.IntPtr,
    edgeMap: System.IntPtr,
    orientationMap: System.IntPtr,
    boxes: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_EdgeBoxes_getAlpha(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_EdgeBoxes_setAlpha(
    obj: System.IntPtr,
    value: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_EdgeBoxes_getBeta(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_EdgeBoxes_setBeta(
    obj: System.IntPtr,
    value: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_EdgeBoxes_getEta(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_EdgeBoxes_setEta(
    obj: System.IntPtr,
    value: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_EdgeBoxes_getMinScore(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_EdgeBoxes_setMinScore(
    obj: System.IntPtr,
    value: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_EdgeBoxes_getMaxBoxes(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_EdgeBoxes_setMaxBoxes(
    obj: System.IntPtr,
    value: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_EdgeBoxes_getEdgeMinMag(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_EdgeBoxes_setEdgeMinMag(
    obj: System.IntPtr,
    value: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_EdgeBoxes_getEdgeMergeThr(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_EdgeBoxes_setEdgeMergeThr(
    obj: System.IntPtr,
    value: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_EdgeBoxes_getClusterMinMag(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_EdgeBoxes_setClusterMinMag(
    obj: System.IntPtr,
    value: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_EdgeBoxes_getMaxAspectRatio(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_EdgeBoxes_setMaxAspectRatio(
    obj: System.IntPtr,
    value: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_EdgeBoxes_getMinBoxArea(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_EdgeBoxes_setMinBoxArea(
    obj: System.IntPtr,
    value: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_EdgeBoxes_getGamma(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_EdgeBoxes_setGamma(
    obj: System.IntPtr,
    value: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_EdgeBoxes_getKappa(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_EdgeBoxes_setKappa(
    obj: System.IntPtr,
    value: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_createEdgeBoxes(
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
    kappa: number | StrongNumeric<SingleHost>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_Ptr_EdgeBoxes_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_Ptr_EdgeBoxes_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_Ptr_DTFilter_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_Ptr_DTFilter_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_DTFilter_filter(
    obj: System.IntPtr,
    src: System.IntPtr,
    dst: System.IntPtr,
    dDepth: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_createDTFilter(
    guide: System.IntPtr,
    sigmaSpatial: number | StrongNumeric<DoubleHost>,
    sigmaColor: number | StrongNumeric<DoubleHost>,
    mode: number | StrongNumeric<Int32Host>,
    numIters: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_dtFilter(
    guide: System.IntPtr,
    src: System.IntPtr,
    dst: System.IntPtr,
    sigmaSpatial: number | StrongNumeric<DoubleHost>,
    sigmaColor: number | StrongNumeric<DoubleHost>,
    mode: number | StrongNumeric<Int32Host>,
    numIters: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_Ptr_GuidedFilter_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_Ptr_GuidedFilter_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_GuidedFilter_filter(
    obj: System.IntPtr,
    src: System.IntPtr,
    dst: System.IntPtr,
    dDepth: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_createGuidedFilter(
    guide: System.IntPtr,
    radius: number | StrongNumeric<Int32Host>,
    eps: number | StrongNumeric<DoubleHost>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_guidedFilter(
    guide: System.IntPtr,
    src: System.IntPtr,
    dst: System.IntPtr,
    radius: number | StrongNumeric<Int32Host>,
    eps: number | StrongNumeric<DoubleHost>,
    dDepth: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_Ptr_AdaptiveManifoldFilter_delete(
    obj: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_Ptr_AdaptiveManifoldFilter_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_AdaptiveManifoldFilter_filter(
    obj: System.IntPtr,
    src: System.IntPtr,
    dst: System.IntPtr,
    joint: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_AdaptiveManifoldFilter_collectGarbage(
    obj: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_AdaptiveManifoldFilter_getSigmaS(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_AdaptiveManifoldFilter_setSigmaS(
    obj: System.IntPtr,
    val: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_AdaptiveManifoldFilter_getSigmaR(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_AdaptiveManifoldFilter_setSigmaR(
    obj: System.IntPtr,
    val: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_AdaptiveManifoldFilter_getTreeHeight(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_AdaptiveManifoldFilter_setTreeHeight(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_AdaptiveManifoldFilter_getPCAIterations(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_AdaptiveManifoldFilter_setPCAIterations(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_AdaptiveManifoldFilter_getAdjustOutliers(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_AdaptiveManifoldFilter_setAdjustOutliers(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_AdaptiveManifoldFilter_getUseRNG(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_AdaptiveManifoldFilter_setUseRNG(
    obj: System.IntPtr,
    val: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_createAMFilter(
    sigma_s: number | StrongNumeric<DoubleHost>,
    sigma_r: number | StrongNumeric<DoubleHost>,
    adjust_outliers: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_amFilter(
    joint: System.IntPtr,
    src: System.IntPtr,
    dst: System.IntPtr,
    sigma_s: number | StrongNumeric<DoubleHost>,
    sigma_r: number | StrongNumeric<DoubleHost>,
    adjust_outliers: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_jointBilateralFilter(
    joint: System.IntPtr,
    src: System.IntPtr,
    dst: System.IntPtr,
    d: number | StrongNumeric<Int32Host>,
    sigmaColor: number | StrongNumeric<DoubleHost>,
    sigmaSpace: number | StrongNumeric<DoubleHost>,
    borderType: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_bilateralTextureFilter(
    src: System.IntPtr,
    dst: System.IntPtr,
    fr: number | StrongNumeric<Int32Host>,
    numIter: number | StrongNumeric<Int32Host>,
    sigmaAlpha: number | StrongNumeric<DoubleHost>,
    sigmaAvg: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_rollingGuidanceFilter(
    src: System.IntPtr,
    dst: System.IntPtr,
    d: number | StrongNumeric<Int32Host>,
    sigmaColor: number | StrongNumeric<DoubleHost>,
    sigmaSpace: number | StrongNumeric<DoubleHost>,
    numOfIter: number | StrongNumeric<Int32Host>,
    borderType: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_Ptr_FastBilateralSolverFilter_delete(
    obj: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_Ptr_FastBilateralSolverFilter_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_FastBilateralSolverFilter_filter(
    obj: System.IntPtr,
    src: System.IntPtr,
    confidence: System.IntPtr,
    dst: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_createFastBilateralSolverFilter(
    guide: System.IntPtr,
    sigma_spatial: number | StrongNumeric<DoubleHost>,
    sigma_luma: number | StrongNumeric<DoubleHost>,
    sigma_chroma: number | StrongNumeric<DoubleHost>,
    lambda: number | StrongNumeric<DoubleHost>,
    num_iter: number | StrongNumeric<Int32Host>,
    max_tol: number | StrongNumeric<DoubleHost>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_fastBilateralSolverFilter(
    guide: System.IntPtr,
    src: System.IntPtr,
    confidence: System.IntPtr,
    dst: System.IntPtr,
    sigma_spatial: number | StrongNumeric<DoubleHost>,
    sigma_luma: number | StrongNumeric<DoubleHost>,
    sigma_chroma: number | StrongNumeric<DoubleHost>,
    lambda: number | StrongNumeric<DoubleHost>,
    num_iter: number | StrongNumeric<Int32Host>,
    max_tol: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_Ptr_FastGlobalSmootherFilter_delete(
    obj: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_Ptr_FastGlobalSmootherFilter_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_FastGlobalSmootherFilter_filter(
    obj: System.IntPtr,
    src: System.IntPtr,
    dst: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_createFastGlobalSmootherFilter(
    guide: System.IntPtr,
    lambda: number | StrongNumeric<DoubleHost>,
    sigma_color: number | StrongNumeric<DoubleHost>,
    lambda_attenuation: number | StrongNumeric<DoubleHost>,
    num_iter: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_fastGlobalSmootherFilter(
    guide: System.IntPtr,
    src: System.IntPtr,
    dst: System.IntPtr,
    lambda: number | StrongNumeric<DoubleHost>,
    sigma_color: number | StrongNumeric<DoubleHost>,
    lambda_attenuation: number | StrongNumeric<DoubleHost>,
    num_iter: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_l0Smooth(
    src: System.IntPtr,
    dst: System.IntPtr,
    lambda: number | StrongNumeric<DoubleHost>,
    kappa: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_Ptr_FastLineDetector_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_Ptr_FastLineDetector_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_FastLineDetector_detect_OutputArray(
    obj: System.IntPtr,
    image: System.IntPtr,
    lines: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_FastLineDetector_detect_vector(
    obj: System.IntPtr,
    image: System.IntPtr,
    lines: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_FastLineDetector_drawSegments_InputArray(
    obj: System.IntPtr,
    image: System.IntPtr,
    lines: System.IntPtr,
    draw_arrow: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_FastLineDetector_drawSegments_vector(
    obj: System.IntPtr,
    image: System.IntPtr,
    lines: System.IntPtr,
    draw_arrow: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_createFastLineDetector(
    length_threshold: number | StrongNumeric<Int32Host>,
    distance_threshold: number | StrongNumeric<SingleHost>,
    canny_th1: number | StrongNumeric<DoubleHost>,
    canny_th2: number | StrongNumeric<DoubleHost>,
    canny_aperture_size: number | StrongNumeric<Int32Host>,
    do_merge: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_RidgeDetectionFilter_create(
    ddepth: OpenCvSharp.MatType,
    dx: number | StrongNumeric<Int32Host>,
    dy: number | StrongNumeric<Int32Host>,
    ksize: number | StrongNumeric<Int32Host>,
    outDtype: OpenCvSharp.MatType,
    scale: number | StrongNumeric<DoubleHost>,
    delta: number | StrongNumeric<DoubleHost>,
    borderType: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_RidgeDetectionFilter_getRidgeFilteredImage(
    obj: System.IntPtr,
    _img: System.IntPtr,
    out: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_Ptr_RidgeDetectionFilter_delete(
    obj: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_Ptr_RidgeDetectionFilter_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_segmentation_createGraphSegmentation(
    sigma: number | StrongNumeric<DoubleHost>,
    k: number | StrongNumeric<SingleHost>,
    minSize: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_segmentation_Ptr_GraphSegmentation_delete(
    obj: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_segmentation_Ptr_GraphSegmentation_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_segmentation_GraphSegmentation_processImage(
    obj: System.IntPtr,
    src: System.IntPtr,
    dst: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_segmentation_GraphSegmentation_setSigma(
    obj: System.IntPtr,
    value: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_segmentation_GraphSegmentation_getSigma(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_segmentation_GraphSegmentation_setK(
    obj: System.IntPtr,
    value: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_segmentation_GraphSegmentation_getK(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_segmentation_GraphSegmentation_setMinSize(
    obj: System.IntPtr,
    value: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_segmentation_GraphSegmentation_getMinSize(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_segmentation_SelectiveSearchSegmentationStrategy_setImage(
    obj: System.IntPtr,
    img: System.IntPtr,
    regions: System.IntPtr,
    sizes: System.IntPtr,
    image_id: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_segmentation_SelectiveSearchSegmentationStrategy_get(
    obj: System.IntPtr,
    r1: number | StrongNumeric<Int32Host>,
    r2: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_segmentation_SelectiveSearchSegmentationStrategy_merge(
    obj: System.IntPtr,
    r1: number | StrongNumeric<Int32Host>,
    r2: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_segmentation_createSelectiveSearchSegmentationStrategyColor(
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_segmentation_createSelectiveSearchSegmentationStrategySize(
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_segmentation_createSelectiveSearchSegmentationStrategyTexture(
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_segmentation_createSelectiveSearchSegmentationStrategyFill(
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_segmentation_Ptr_SelectiveSearchSegmentationStrategyColor_delete(
    obj: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_segmentation_Ptr_SelectiveSearchSegmentationStrategySize_delete(
    obj: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_segmentation_Ptr_SelectiveSearchSegmentationStrategyTexture_delete(
    obj: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_segmentation_Ptr_SelectiveSearchSegmentationStrategyFill_delete(
    obj: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_segmentation_Ptr_SelectiveSearchSegmentationStrategyColor_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_segmentation_Ptr_SelectiveSearchSegmentationStrategySize_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_segmentation_Ptr_SelectiveSearchSegmentationStrategyTexture_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_segmentation_Ptr_SelectiveSearchSegmentationStrategyFill_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_segmentation_SelectiveSearchSegmentationStrategyMultiple_addStrategy(
    obj: System.IntPtr,
    g: System.IntPtr,
    weight: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_segmentation_SelectiveSearchSegmentationStrategyMultiple_clearStrategies(
    obj: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_segmentation_createSelectiveSearchSegmentationStrategyMultiple0(
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_segmentation_createSelectiveSearchSegmentationStrategyMultiple1(
    s1: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_segmentation_createSelectiveSearchSegmentationStrategyMultiple2(
    s1: System.IntPtr,
    s2: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_segmentation_createSelectiveSearchSegmentationStrategyMultiple3(
    s1: System.IntPtr,
    s2: System.IntPtr,
    s3: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_segmentation_createSelectiveSearchSegmentationStrategyMultiple4(
    s1: System.IntPtr,
    s2: System.IntPtr,
    s3: System.IntPtr,
    s4: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_segmentation_Ptr_SelectiveSearchSegmentationStrategyMultiple_delete(
    obj: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_segmentation_Ptr_SelectiveSearchSegmentationStrategyMultiple_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_segmentation_SelectiveSearchSegmentation_setBaseImage(
    obj: System.IntPtr,
    img: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_segmentation_SelectiveSearchSegmentation_switchToSingleStrategy(
    obj: System.IntPtr,
    k: number | StrongNumeric<Int32Host>,
    sigma: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_segmentation_SelectiveSearchSegmentation_switchToSelectiveSearchFast(
    obj: System.IntPtr,
    base_k: number | StrongNumeric<Int32Host>,
    inc_k: number | StrongNumeric<Int32Host>,
    sigma: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_segmentation_SelectiveSearchSegmentation_switchToSelectiveSearchQuality(
    obj: System.IntPtr,
    base_k: number | StrongNumeric<Int32Host>,
    inc_k: number | StrongNumeric<Int32Host>,
    sigma: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_segmentation_SelectiveSearchSegmentation_addImage(
    obj: System.IntPtr,
    img: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_segmentation_SelectiveSearchSegmentation_clearImages(
    obj: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_segmentation_SelectiveSearchSegmentation_addGraphSegmentation(
    obj: System.IntPtr,
    g: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_segmentation_SelectiveSearchSegmentation_clearGraphSegmentations(
    obj: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_segmentation_SelectiveSearchSegmentation_addStrategy(
    obj: System.IntPtr,
    s: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_segmentation_SelectiveSearchSegmentation_clearStrategies(
    obj: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_segmentation_SelectiveSearchSegmentation_process(
    obj: System.IntPtr,
    rects: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_segmentation_createSelectiveSearchSegmentation(
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_segmentation_Ptr_SelectiveSearchSegmentation_delete(
    obj: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_segmentation_Ptr_SelectiveSearchSegmentation_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_createRFFeatureGetter(
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_Ptr_RFFeatureGetter_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_Ptr_RFFeatureGetter_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_RFFeatureGetter_getFeatures(
    obj: System.IntPtr,
    src: System.IntPtr,
    features: System.IntPtr,
    gnrmRad: number | StrongNumeric<Int32Host>,
    gsmthRad: number | StrongNumeric<Int32Host>,
    shrink: number | StrongNumeric<Int32Host>,
    outNum: number | StrongNumeric<Int32Host>,
    gradNum: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_createStructuredEdgeDetection(
    model: string,
    howToGetFeatures: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_Ptr_StructuredEdgeDetection_delete(
    obj: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_Ptr_StructuredEdgeDetection_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_StructuredEdgeDetection_detectEdges(
    obj: System.IntPtr,
    src: System.IntPtr,
    dst: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_StructuredEdgeDetection_computeOrientation(
    obj: System.IntPtr,
    src: System.IntPtr,
    dst: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_StructuredEdgeDetection_edgesNms(
    obj: System.IntPtr,
    edge_image: System.IntPtr,
    orientation_image: System.IntPtr,
    dst: System.IntPtr,
    r: number | StrongNumeric<Int32Host>,
    s: number | StrongNumeric<Int32Host>,
    m: number | StrongNumeric<SingleHost>,
    isParallel: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_Ptr_SuperpixelLSC_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_Ptr_SuperpixelLSC_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_SuperpixelLSC_getNumberOfSuperpixels(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_SuperpixelLSC_iterate(
    obj: System.IntPtr,
    num_iterations: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_SuperpixelLSC_getLabels(
    obj: System.IntPtr,
    labels_out: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_SuperpixelLSC_getLabelContourMask(
    obj: System.IntPtr,
    image: System.IntPtr,
    thick_line: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_SuperpixelLSC_enforceLabelConnectivity(
    obj: System.IntPtr,
    min_element_size: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_createSuperpixelLSC(
    image: System.IntPtr,
    region_size: number | StrongNumeric<Int32Host>,
    ratio: number | StrongNumeric<SingleHost>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_Ptr_SuperpixelSEEDS_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_Ptr_SuperpixelSEEDS_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_SuperpixelSEEDS_getNumberOfSuperpixels(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_SuperpixelSEEDS_iterate(
    obj: System.IntPtr,
    img: System.IntPtr,
    num_iterations: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_SuperpixelSEEDS_getLabels(
    obj: System.IntPtr,
    labels_out: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_SuperpixelSEEDS_getLabelContourMask(
    obj: System.IntPtr,
    image: System.IntPtr,
    thick_line: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_createSuperpixelSEEDS(
    image_width: number | StrongNumeric<Int32Host>,
    image_height: number | StrongNumeric<Int32Host>,
    image_channels: number | StrongNumeric<Int32Host>,
    num_superpixels: number | StrongNumeric<Int32Host>,
    num_levels: number | StrongNumeric<Int32Host>,
    prior: number | StrongNumeric<Int32Host>,
    histogram_bins: number | StrongNumeric<Int32Host>,
    double_step: number | StrongNumeric<Int32Host>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_Ptr_SuperpixelSLIC_delete(obj: System.IntPtr): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_Ptr_SuperpixelSLIC_get(
    ptr: System.IntPtr,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_SuperpixelSLIC_getNumberOfSuperpixels(
    obj: System.IntPtr,
    returnValue: HostVariableOut<number>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_SuperpixelSLIC_iterate(
    obj: System.IntPtr,
    num_iterations: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_SuperpixelSLIC_getLabels(
    obj: System.IntPtr,
    labels_out: System.IntPtr
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_SuperpixelSLIC_getLabelContourMask(
    obj: System.IntPtr,
    image: System.IntPtr,
    thick_line: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_SuperpixelSLIC_enforceLabelConnectivity(
    obj: System.IntPtr,
    min_element_size: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Internal.ExceptionStatus;
  ximgproc_createSuperpixelSLIC(
    image: System.IntPtr,
    algorithm: number | StrongNumeric<Int32Host>,
    region_size: number | StrongNumeric<Int32Host>,
    ruler: number | StrongNumeric<SingleHost>,
    returnValue: HostVariableOut<System.IntPtr>
  ): OpenCvSharp.Internal.ExceptionStatus;
}

export {};
