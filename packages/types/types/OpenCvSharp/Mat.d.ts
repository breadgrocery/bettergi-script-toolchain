import type {
  ByteHost,
  DoubleHost,
  EnumInput,
  FamilyArgumentOmitted,
  HostArray,
  HostType,
  Int16Host,
  Int32Host,
  Int64Host,
  IsFamilyArgumentOmitted,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  SByteHost,
  SingleHost,
  StrongNumeric,
  UInt16Host
} from "../Microsoft/ClearScript/HostType";
import type { HostVariableOut, HostVariableRef } from "../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/Array";
import "../System/Collections/Generic/IEnumerable";
import "../System/Collections/Generic/IEnumerator";
import "../System/IDisposable";
import "../System/IO/MemoryStream";
import "../System/IO/Stream";
import "../System/IntPtr";
import "../System/Nullable";
import "../System/Range";
import "./AccessFlag";
import "./AdaptiveThresholdTypes";
import "./BorderTypes";
import "./CircleSegment";
import "./ColorConversionCodes";
import "./ConnectedComponent";
import "./ContourApproximationModes";
import "./DctFlags";
import "./DecompTypes";
import "./DftFlags";
import "./DisposableCvObject";
import "./DistanceTransformMasks";
import "./DistanceTypes";
import "./FlipMode";
import "./FloodFillFlags";
import "./FormatType";
import "./GrabCutModes";
import "./HersheyFonts";
import "./HierarchyIndex";
import "./HoughModes";
import "./ICvPtrHolder";
import "./ImageEncodingParam";
import "./ImreadModes";
import "./InputArray";
import "./InputOutputArray";
import "./InterpolationFlags";
import "./Line2D";
import "./Line3D";
import "./LineSegmentPoint";
import "./LineSegmentPolar";
import "./LineTypes";
import "./MarkerTypes";
import "./MatDiagType";
import "./MatExpr";
import "./MatForeachFunctionByte";
import "./MatForeachFunctionDouble";
import "./MatForeachFunctionFloat";
import "./MatForeachFunctionInt16";
import "./MatForeachFunctionInt32";
import "./MatForeachFunctionVec2b";
import "./MatForeachFunctionVec2d";
import "./MatForeachFunctionVec2f";
import "./MatForeachFunctionVec2i";
import "./MatForeachFunctionVec2s";
import "./MatForeachFunctionVec3b";
import "./MatForeachFunctionVec3d";
import "./MatForeachFunctionVec3f";
import "./MatForeachFunctionVec3i";
import "./MatForeachFunctionVec3s";
import "./MatForeachFunctionVec4b";
import "./MatForeachFunctionVec4d";
import "./MatForeachFunctionVec4f";
import "./MatForeachFunctionVec4i";
import "./MatForeachFunctionVec4s";
import "./MatForeachFunctionVec6b";
import "./MatForeachFunctionVec6d";
import "./MatForeachFunctionVec6f";
import "./MatForeachFunctionVec6i";
import "./MatForeachFunctionVec6s";
import "./MatIndexer";
import "./MatType";
import "./Moments";
import "./MorphTypes";
import "./NormTypes";
import "./OutputArray";
import "./PixelConnectivity";
import "./Point";
import "./Point2d";
import "./Point2f";
import "./Point3d";
import "./Point3f";
import "./Point3i";
import "./RNG";
import "./Range";
import "./Rect";
import "./Rect2d";
import "./Rect2f";
import "./ReduceDimension";
import "./ReduceTypes";
import "./RetrievalModes";
import "./RotatedRect";
import "./Scalar";
import "./Size";
import "./Size2d";
import "./Size2f";
import "./SortFlags";
import "./TemplateMatchModes";
import "./TermCriteria";
import "./ThresholdTypes";
import "./UMat";
import "./UMatUsageFlags";
import "./Vec2b";
import "./Vec2d";
import "./Vec2f";
import "./Vec2i";
import "./Vec2s";
import "./Vec2w";
import "./Vec3b";
import "./Vec3d";
import "./Vec3f";
import "./Vec3i";
import "./Vec3s";
import "./Vec3w";
import "./Vec4b";
import "./Vec4d";
import "./Vec4f";
import "./Vec4i";
import "./Vec4s";
import "./Vec4w";
import "./Vec6b";
import "./Vec6d";
import "./Vec6f";
import "./Vec6i";
import "./Vec6s";
import "./Vec6w";

declare const matArity0Brand: unique symbol;
export interface _MatArity0
  extends
    Omit<
      OpenCvSharp.DisposableCvObject,
      | "abs"
      | "accumulate"
      | "accumulateSquare"
      | "adaptiveThreshold"
      | "add"
      | "adjustROI"
      | "alignment"
      | "approxPolyDP"
      | "arcLength"
      | "asSpan"
      | "assignTo"
      | "at"
      | "bilateralFilter"
      | "bitwiseAnd"
      | "bitwiseOr"
      | "blur"
      | "boundingRect"
      | "boxFilter"
      | "buildPyramid"
      | "canny"
      | "cast"
      | "channels"
      | "checkRange"
      | "checkVector"
      | "circle"
      | "clone"
      | "col"
      | "colRange"
      | "cols"
      | "completeSymm"
      | "connectedComponents"
      | "connectedComponentsEx"
      | "connectedComponentsWithStats"
      | "contourArea"
      | "convertScaleAbs"
      | "convertTo"
      | "convexHull"
      | "convexHullFloatPoints"
      | "convexHullIndices"
      | "convexHullPoints"
      | "convexityDefects"
      | "convexityDefectsAsVec"
      | "copyMakeBorder"
      | "copyTo"
      | "cornerEigenValsAndVecs"
      | "cornerSubPix"
      | "countNonZero"
      | "create"
      | "createHanningWindow"
      | "cross"
      | "cvtColor"
      | "data"
      | "dataEnd"
      | "dataLimit"
      | "dataPointer"
      | "dataStart"
      | "dct"
      | "depth"
      | "determinant"
      | "dft"
      | "diag"
      | "dilate"
      | "dims"
      | "distanceTransform"
      | "divide"
      | "dot"
      | "drawContours"
      | "drawMarker"
      | "dump"
      | "elemSize"
      | "elemSize1"
      | "ellipse"
      | "empty"
      | "emptyClone"
      | "equalizeHist"
      | "equals"
      | "erode"
      | "exp"
      | "extractChannel"
      | "fillConvexPoly"
      | "fillPoly"
      | "filter2D"
      | "findContours"
      | "findContoursAsArray"
      | "findContoursAsMat"
      | "findNonZero"
      | "fitEllipse"
      | "fitLine2D"
      | "fitLine3D"
      | "flags"
      | "flip"
      | "floodFill"
      | "forEachAsByte"
      | "forEachAsDouble"
      | "forEachAsFloat"
      | "forEachAsInt16"
      | "forEachAsInt32"
      | "forEachAsVec2b"
      | "forEachAsVec2d"
      | "forEachAsVec2f"
      | "forEachAsVec2i"
      | "forEachAsVec2s"
      | "forEachAsVec3b"
      | "forEachAsVec3d"
      | "forEachAsVec3f"
      | "forEachAsVec3i"
      | "forEachAsVec3s"
      | "forEachAsVec4b"
      | "forEachAsVec4d"
      | "forEachAsVec4f"
      | "forEachAsVec4i"
      | "forEachAsVec4s"
      | "forEachAsVec6b"
      | "forEachAsVec6d"
      | "forEachAsVec6f"
      | "forEachAsVec6i"
      | "forEachAsVec6s"
      | "gaussianBlur"
      | "get"
      | "getArray"
      | "getDefaultNewCameraMatrix"
      | "getGenericIndexer"
      | "getRectSubPix"
      | "getRectangularArray"
      | "getUMat"
      | "getUnsafeGenericIndexer"
      | "goodFeaturesToTrack"
      | "grabCut"
      | "greaterThan"
      | "greaterThanOrEqual"
      | "height"
      | "houghCircles"
      | "houghLines"
      | "houghLinesP"
      | "idct"
      | "idft"
      | "imEncode"
      | "imWrite"
      | "inRange"
      | "insertChannel"
      | "inv"
      | "invertAffineTransform"
      | "isContinuous"
      | "isContourConvex"
      | "isSubmatrix"
      | "item"
      | "laplacian"
      | "lessThan"
      | "lessThanOrEqual"
      | "line"
      | "locateROI"
      | "log"
      | "lut"
      | "matchTemplate"
      | "mean"
      | "meanStdDev"
      | "medianBlur"
      | "minAreaRect"
      | "minEnclosingCircle"
      | "minMaxIdx"
      | "minMaxLoc"
      | "moments"
      | "morphologyEx"
      | "mul"
      | "mulTransposed"
      | "multiply"
      | "negate"
      | "norm"
      | "normalize"
      | "notEquals"
      | "onesComplement"
      | "patchNaNs"
      | "perspectiveTransform"
      | "plus"
      | "pointPolygonTest"
      | "polylines"
      | "popBack"
      | "pow"
      | "preCornerDetect"
      | "ptr"
      | "pushBack"
      | "putText"
      | "pyrDown"
      | "pyrMeanShiftFiltering"
      | "pyrUp"
      | "randShuffle"
      | "randn"
      | "randu"
      | "rectangle"
      | "reduce"
      | "release"
      | "remap"
      | "repeat"
      | "reserve"
      | "reserveBuffer"
      | "reshape"
      | "resize"
      | "row"
      | "rowRange"
      | "rows"
      | "saveImage"
      | "scharr"
      | "sepFilter2D"
      | "set"
      | "setArray"
      | "setIdentity"
      | "setRectangularArray"
      | "setTo"
      | "size"
      | "sobel"
      | "sort"
      | "sortIdx"
      | "split"
      | "sqrt"
      | "step"
      | "step1"
      | "subMat"
      | "subtract"
      | "sum"
      | "t"
      | "threshold"
      | "toBytes"
      | "toMemoryStream"
      | "toString"
      | "total"
      | "trace"
      | "transform"
      | "transpose"
      | "type"
      | "undistort"
      | "undistortPoints"
      | "warpAffine"
      | "warpPerspective"
      | "watershed"
      | "width"
      | "writeToStream"
      | "xor"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [matArity0Brand]: true;
  abs(): OpenCvSharp.MatExpr;
  convertScaleAbs(): OpenCvSharp.Mat;
  convertScaleAbs(alpha: number | StrongNumeric<DoubleHost>): OpenCvSharp.Mat;
  convertScaleAbs(
    alpha: number | StrongNumeric<DoubleHost>,
    beta: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Mat;
  lut(lut: HostArray<number | StrongNumeric<ByteHost>>): OpenCvSharp.Mat;
  lut(lut: OpenCvSharp.InputArray): OpenCvSharp.Mat;
  sum(): OpenCvSharp.Scalar;
  countNonZero(): number;
  findNonZero(): OpenCvSharp.Mat;
  mean(): OpenCvSharp.Scalar;
  mean(mask: OpenCvSharp.InputArray | null): OpenCvSharp.Scalar;
  meanStdDev(mean: OpenCvSharp.OutputArray, stddev: OpenCvSharp.OutputArray): VoidResult;
  meanStdDev(
    mean: OpenCvSharp.OutputArray,
    stddev: OpenCvSharp.OutputArray,
    mask: OpenCvSharp.InputArray | null
  ): VoidResult;
  norm(): number;
  norm(normType: EnumInput<OpenCvSharp.NormTypes>): number;
  norm(normType: EnumInput<OpenCvSharp.NormTypes>, mask: OpenCvSharp.InputArray | null): number;
  normalize(): OpenCvSharp.Mat;
  normalize(alpha: number | StrongNumeric<DoubleHost>): OpenCvSharp.Mat;
  normalize(
    alpha: number | StrongNumeric<DoubleHost>,
    beta: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Mat;
  normalize(
    alpha: number | StrongNumeric<DoubleHost>,
    beta: number | StrongNumeric<DoubleHost>,
    normType: EnumInput<OpenCvSharp.NormTypes>
  ): OpenCvSharp.Mat;
  normalize(
    alpha: number | StrongNumeric<DoubleHost>,
    beta: number | StrongNumeric<DoubleHost>,
    normType: EnumInput<OpenCvSharp.NormTypes>,
    dtype: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Mat;
  normalize(
    alpha: number | StrongNumeric<DoubleHost>,
    beta: number | StrongNumeric<DoubleHost>,
    normType: EnumInput<OpenCvSharp.NormTypes>,
    dtype: number | StrongNumeric<Int32Host>,
    mask: OpenCvSharp.InputArray | null
  ): OpenCvSharp.Mat;
  minMaxLoc(
    minLoc: HostVariableOut<OpenCvSharp.Point>,
    maxLoc: HostVariableOut<OpenCvSharp.Point>
  ): VoidResult;
  minMaxLoc(minVal: HostVariableOut<number>, maxVal: HostVariableOut<number>): VoidResult;
  minMaxLoc(
    minVal: HostVariableOut<number>,
    maxVal: HostVariableOut<number>,
    minLoc: HostVariableOut<OpenCvSharp.Point>,
    maxLoc: HostVariableOut<OpenCvSharp.Point>
  ): VoidResult;
  minMaxLoc(
    minVal: HostVariableOut<number>,
    maxVal: HostVariableOut<number>,
    minLoc: HostVariableOut<OpenCvSharp.Point>,
    maxLoc: HostVariableOut<OpenCvSharp.Point>,
    mask: OpenCvSharp.InputArray | null
  ): VoidResult;
  minMaxIdx(
    minIdx: HostArray<number | StrongNumeric<Int32Host>>,
    maxIdx: HostArray<number | StrongNumeric<Int32Host>>
  ): VoidResult;
  minMaxIdx(minVal: HostVariableOut<number>, maxVal: HostVariableOut<number>): VoidResult;
  minMaxIdx(
    minVal: HostVariableOut<number>,
    maxVal: HostVariableOut<number>,
    minIdx: HostArray<number | StrongNumeric<Int32Host>>,
    maxIdx: HostArray<number | StrongNumeric<Int32Host>>
  ): VoidResult;
  minMaxIdx(
    minVal: HostVariableOut<number>,
    maxVal: HostVariableOut<number>,
    minIdx: HostArray<number | StrongNumeric<Int32Host>>,
    maxIdx: HostArray<number | StrongNumeric<Int32Host>>,
    mask: OpenCvSharp.InputArray | null
  ): VoidResult;
  reduce(
    dim: EnumInput<OpenCvSharp.ReduceDimension>,
    rtype: EnumInput<OpenCvSharp.ReduceTypes>,
    dtype: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Mat;
  split(): HostArray<OpenCvSharp.Mat>;
  extractChannel(coi: number | StrongNumeric<Int32Host>): OpenCvSharp.Mat;
  insertChannel(
    dst: OpenCvSharp.InputOutputArray,
    coi: number | StrongNumeric<Int32Host>
  ): VoidResult;
  flip(flipCode: EnumInput<OpenCvSharp.FlipMode>): OpenCvSharp.Mat;
  repeat(
    ny: number | StrongNumeric<Int32Host>,
    nx: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Mat;
  inRange(lowerb: OpenCvSharp.InputArray, upperb: OpenCvSharp.InputArray): OpenCvSharp.Mat;
  inRange(lowerb: OpenCvSharp.Scalar, upperb: OpenCvSharp.Scalar): OpenCvSharp.Mat;
  sqrt(): OpenCvSharp.Mat;
  pow(power: number | StrongNumeric<DoubleHost>): OpenCvSharp.Mat;
  exp(): OpenCvSharp.Mat;
  log(): OpenCvSharp.Mat;
  checkRange(): boolean;
  checkRange(quiet: boolean): boolean;
  checkRange(quiet: boolean, pos: HostVariableOut<OpenCvSharp.Point>): boolean;
  checkRange(
    quiet: boolean,
    pos: HostVariableOut<OpenCvSharp.Point>,
    minVal: number | StrongNumeric<DoubleHost>
  ): boolean;
  checkRange(
    quiet: boolean,
    pos: HostVariableOut<OpenCvSharp.Point>,
    minVal: number | StrongNumeric<DoubleHost>,
    maxVal: number | StrongNumeric<DoubleHost>
  ): boolean;
  patchNaNs(): VoidResult;
  patchNaNs(val: number | StrongNumeric<DoubleHost>): VoidResult;
  mulTransposed(aTa: boolean): OpenCvSharp.Mat;
  mulTransposed(aTa: boolean, delta: OpenCvSharp.InputArray | null): OpenCvSharp.Mat;
  mulTransposed(
    aTa: boolean,
    delta: OpenCvSharp.InputArray | null,
    scale: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Mat;
  mulTransposed(
    aTa: boolean,
    delta: OpenCvSharp.InputArray | null,
    scale: number | StrongNumeric<DoubleHost>,
    dtype: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Mat;
  transpose(): OpenCvSharp.Mat;
  transform(m: OpenCvSharp.InputArray): OpenCvSharp.Mat;
  perspectiveTransform(m: OpenCvSharp.InputArray): OpenCvSharp.Mat;
  completeSymm(): VoidResult;
  completeSymm(lowerToUpper: boolean): VoidResult;
  setIdentity(): VoidResult;
  setIdentity(s: OpenCvSharp.Scalar | null | null): VoidResult;
  determinant(): number;
  trace(): OpenCvSharp.Scalar;
  sort(flags: EnumInput<OpenCvSharp.SortFlags>): OpenCvSharp.Mat;
  sortIdx(flags: EnumInput<OpenCvSharp.SortFlags>): OpenCvSharp.Mat;
  dft(): OpenCvSharp.Mat;
  dft(flags: EnumInput<OpenCvSharp.DftFlags>): OpenCvSharp.Mat;
  dft(
    flags: EnumInput<OpenCvSharp.DftFlags>,
    nonzeroRows: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Mat;
  idft(): OpenCvSharp.Mat;
  idft(flags: EnumInput<OpenCvSharp.DftFlags>): OpenCvSharp.Mat;
  idft(
    flags: EnumInput<OpenCvSharp.DftFlags>,
    nonzeroRows: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Mat;
  dct(): OpenCvSharp.Mat;
  dct(flags: EnumInput<OpenCvSharp.DctFlags>): OpenCvSharp.Mat;
  idct(): OpenCvSharp.Mat;
  idct(flags: EnumInput<OpenCvSharp.DctFlags>): OpenCvSharp.Mat;
  randu(low: OpenCvSharp.InputArray, high: OpenCvSharp.InputArray): VoidResult;
  randu(low: OpenCvSharp.Scalar, high: OpenCvSharp.Scalar): VoidResult;
  randn(mean: OpenCvSharp.InputArray, stddev: OpenCvSharp.InputArray): VoidResult;
  randn(mean: OpenCvSharp.Scalar, stddev: OpenCvSharp.Scalar): VoidResult;
  release(): VoidResult;
  randShuffle(iterFactor: number | StrongNumeric<DoubleHost>): VoidResult;
  randShuffle(
    iterFactor: number | StrongNumeric<DoubleHost>,
    rng: HostVariableRef<OpenCvSharp.RNG>
  ): VoidResult;
  line(pt1: OpenCvSharp.Point, pt2: OpenCvSharp.Point, color: OpenCvSharp.Scalar): VoidResult;
  line(
    pt1: OpenCvSharp.Point,
    pt2: OpenCvSharp.Point,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>
  ): VoidResult;
  line(
    pt1: OpenCvSharp.Point,
    pt2: OpenCvSharp.Point,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>
  ): VoidResult;
  line(
    pt1: OpenCvSharp.Point,
    pt2: OpenCvSharp.Point,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>,
    shift: number | StrongNumeric<Int32Host>
  ): VoidResult;
  line(
    pt1X: number | StrongNumeric<Int32Host>,
    pt1Y: number | StrongNumeric<Int32Host>,
    pt2X: number | StrongNumeric<Int32Host>,
    pt2Y: number | StrongNumeric<Int32Host>,
    color: OpenCvSharp.Scalar
  ): VoidResult;
  line(
    pt1X: number | StrongNumeric<Int32Host>,
    pt1Y: number | StrongNumeric<Int32Host>,
    pt2X: number | StrongNumeric<Int32Host>,
    pt2Y: number | StrongNumeric<Int32Host>,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>
  ): VoidResult;
  line(
    pt1X: number | StrongNumeric<Int32Host>,
    pt1Y: number | StrongNumeric<Int32Host>,
    pt2X: number | StrongNumeric<Int32Host>,
    pt2Y: number | StrongNumeric<Int32Host>,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>
  ): VoidResult;
  line(
    pt1X: number | StrongNumeric<Int32Host>,
    pt1Y: number | StrongNumeric<Int32Host>,
    pt2X: number | StrongNumeric<Int32Host>,
    pt2Y: number | StrongNumeric<Int32Host>,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>,
    shift: number | StrongNumeric<Int32Host>
  ): VoidResult;
  rectangle(pt1: OpenCvSharp.Point, pt2: OpenCvSharp.Point, color: OpenCvSharp.Scalar): VoidResult;
  rectangle(
    pt1: OpenCvSharp.Point,
    pt2: OpenCvSharp.Point,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>
  ): VoidResult;
  rectangle(
    pt1: OpenCvSharp.Point,
    pt2: OpenCvSharp.Point,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>
  ): VoidResult;
  rectangle(
    pt1: OpenCvSharp.Point,
    pt2: OpenCvSharp.Point,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>,
    shift: number | StrongNumeric<Int32Host>
  ): VoidResult;
  rectangle(rect: OpenCvSharp.Rect, color: OpenCvSharp.Scalar): VoidResult;
  rectangle(
    rect: OpenCvSharp.Rect,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>
  ): VoidResult;
  rectangle(
    rect: OpenCvSharp.Rect,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>
  ): VoidResult;
  rectangle(
    rect: OpenCvSharp.Rect,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>,
    shift: number | StrongNumeric<Int32Host>
  ): VoidResult;
  circle(
    center: OpenCvSharp.Point,
    radius: number | StrongNumeric<Int32Host>,
    color: OpenCvSharp.Scalar
  ): VoidResult;
  circle(
    center: OpenCvSharp.Point,
    radius: number | StrongNumeric<Int32Host>,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>
  ): VoidResult;
  circle(
    center: OpenCvSharp.Point,
    radius: number | StrongNumeric<Int32Host>,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>
  ): VoidResult;
  circle(
    center: OpenCvSharp.Point,
    radius: number | StrongNumeric<Int32Host>,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>,
    shift: number | StrongNumeric<Int32Host>
  ): VoidResult;
  circle(
    centerX: number | StrongNumeric<Int32Host>,
    centerY: number | StrongNumeric<Int32Host>,
    radius: number | StrongNumeric<Int32Host>,
    color: OpenCvSharp.Scalar
  ): VoidResult;
  circle(
    centerX: number | StrongNumeric<Int32Host>,
    centerY: number | StrongNumeric<Int32Host>,
    radius: number | StrongNumeric<Int32Host>,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>
  ): VoidResult;
  circle(
    centerX: number | StrongNumeric<Int32Host>,
    centerY: number | StrongNumeric<Int32Host>,
    radius: number | StrongNumeric<Int32Host>,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>
  ): VoidResult;
  circle(
    centerX: number | StrongNumeric<Int32Host>,
    centerY: number | StrongNumeric<Int32Host>,
    radius: number | StrongNumeric<Int32Host>,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>,
    shift: number | StrongNumeric<Int32Host>
  ): VoidResult;
  ellipse(box: OpenCvSharp.RotatedRect, color: OpenCvSharp.Scalar): VoidResult;
  ellipse(
    box: OpenCvSharp.RotatedRect,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>
  ): VoidResult;
  ellipse(
    box: OpenCvSharp.RotatedRect,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>
  ): VoidResult;
  ellipse(
    center: OpenCvSharp.Point,
    axes: OpenCvSharp.Size,
    angle: number | StrongNumeric<DoubleHost>,
    startAngle: number | StrongNumeric<DoubleHost>,
    endAngle: number | StrongNumeric<DoubleHost>,
    color: OpenCvSharp.Scalar
  ): VoidResult;
  ellipse(
    center: OpenCvSharp.Point,
    axes: OpenCvSharp.Size,
    angle: number | StrongNumeric<DoubleHost>,
    startAngle: number | StrongNumeric<DoubleHost>,
    endAngle: number | StrongNumeric<DoubleHost>,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>
  ): VoidResult;
  ellipse(
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
  drawMarker(position: OpenCvSharp.Point, color: OpenCvSharp.Scalar): VoidResult;
  drawMarker(
    position: OpenCvSharp.Point,
    color: OpenCvSharp.Scalar,
    markerType: EnumInput<OpenCvSharp.MarkerTypes>
  ): VoidResult;
  drawMarker(
    position: OpenCvSharp.Point,
    color: OpenCvSharp.Scalar,
    markerType: EnumInput<OpenCvSharp.MarkerTypes>,
    markerSize: number | StrongNumeric<Int32Host>
  ): VoidResult;
  drawMarker(
    position: OpenCvSharp.Point,
    color: OpenCvSharp.Scalar,
    markerType: EnumInput<OpenCvSharp.MarkerTypes>,
    markerSize: number | StrongNumeric<Int32Host>,
    thickness: number | StrongNumeric<Int32Host>
  ): VoidResult;
  drawMarker(
    position: OpenCvSharp.Point,
    color: OpenCvSharp.Scalar,
    markerType: EnumInput<OpenCvSharp.MarkerTypes>,
    markerSize: number | StrongNumeric<Int32Host>,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>
  ): VoidResult;
  plus(): OpenCvSharp.MatExpr;
  fillConvexPoly(
    pts: System.Collections.Generic.IEnumerable<OpenCvSharp.Point>,
    color: OpenCvSharp.Scalar
  ): VoidResult;
  fillConvexPoly(
    pts: System.Collections.Generic.IEnumerable<OpenCvSharp.Point>,
    color: OpenCvSharp.Scalar,
    lineType: EnumInput<OpenCvSharp.LineTypes>
  ): VoidResult;
  fillConvexPoly(
    pts: System.Collections.Generic.IEnumerable<OpenCvSharp.Point>,
    color: OpenCvSharp.Scalar,
    lineType: EnumInput<OpenCvSharp.LineTypes>,
    shift: number | StrongNumeric<Int32Host>
  ): VoidResult;
  negate(): OpenCvSharp.MatExpr;
  fillPoly(
    pts: System.Collections.Generic.IEnumerable<
      System.Collections.Generic.IEnumerable<OpenCvSharp.Point>
    >,
    color: OpenCvSharp.Scalar
  ): VoidResult;
  fillPoly(
    pts: System.Collections.Generic.IEnumerable<
      System.Collections.Generic.IEnumerable<OpenCvSharp.Point>
    >,
    color: OpenCvSharp.Scalar,
    lineType: EnumInput<OpenCvSharp.LineTypes>
  ): VoidResult;
  fillPoly(
    pts: System.Collections.Generic.IEnumerable<
      System.Collections.Generic.IEnumerable<OpenCvSharp.Point>
    >,
    color: OpenCvSharp.Scalar,
    lineType: EnumInput<OpenCvSharp.LineTypes>,
    shift: number | StrongNumeric<Int32Host>
  ): VoidResult;
  fillPoly(
    pts: System.Collections.Generic.IEnumerable<
      System.Collections.Generic.IEnumerable<OpenCvSharp.Point>
    >,
    color: OpenCvSharp.Scalar,
    lineType: EnumInput<OpenCvSharp.LineTypes>,
    shift: number | StrongNumeric<Int32Host>,
    offset: OpenCvSharp.Point | null | null
  ): VoidResult;
  polylines(
    pts: System.Collections.Generic.IEnumerable<
      System.Collections.Generic.IEnumerable<OpenCvSharp.Point>
    >,
    isClosed: boolean,
    color: OpenCvSharp.Scalar
  ): VoidResult;
  polylines(
    pts: System.Collections.Generic.IEnumerable<
      System.Collections.Generic.IEnumerable<OpenCvSharp.Point>
    >,
    isClosed: boolean,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>
  ): VoidResult;
  polylines(
    pts: System.Collections.Generic.IEnumerable<
      System.Collections.Generic.IEnumerable<OpenCvSharp.Point>
    >,
    isClosed: boolean,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>
  ): VoidResult;
  polylines(
    pts: System.Collections.Generic.IEnumerable<
      System.Collections.Generic.IEnumerable<OpenCvSharp.Point>
    >,
    isClosed: boolean,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>,
    shift: number | StrongNumeric<Int32Host>
  ): VoidResult;
  add(m: OpenCvSharp.Mat): OpenCvSharp.MatExpr;
  add(s: OpenCvSharp.Scalar): OpenCvSharp.MatExpr;
  putText(
    text: string,
    org: OpenCvSharp.Point,
    fontFace: EnumInput<OpenCvSharp.HersheyFonts>,
    fontScale: number | StrongNumeric<DoubleHost>,
    color: OpenCvSharp.Scalar
  ): VoidResult;
  putText(
    text: string,
    org: OpenCvSharp.Point,
    fontFace: EnumInput<OpenCvSharp.HersheyFonts>,
    fontScale: number | StrongNumeric<DoubleHost>,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>
  ): VoidResult;
  putText(
    text: string,
    org: OpenCvSharp.Point,
    fontFace: EnumInput<OpenCvSharp.HersheyFonts>,
    fontScale: number | StrongNumeric<DoubleHost>,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>
  ): VoidResult;
  putText(
    text: string,
    org: OpenCvSharp.Point,
    fontFace: EnumInput<OpenCvSharp.HersheyFonts>,
    fontScale: number | StrongNumeric<DoubleHost>,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>,
    bottomLeftOrigin: boolean
  ): VoidResult;
  subtract(m: OpenCvSharp.Mat): OpenCvSharp.MatExpr;
  subtract(s: OpenCvSharp.Scalar): OpenCvSharp.MatExpr;
  imEncode(): HostArray<number>;
  imEncode(ext: string): HostArray<number>;
  imEncode(ext: string, ...prms: OpenCvSharp.ImageEncodingParam[]): HostArray<number>;
  imEncode(ext: string, prms: HostArray<OpenCvSharp.ImageEncodingParam>): HostArray<number>;
  imEncode(
    ext: string,
    prms: HostArray<number | StrongNumeric<Int32Host>> | null
  ): HostArray<number>;
  imWrite(fileName: string): boolean;
  imWrite(fileName: string, ...prms: OpenCvSharp.ImageEncodingParam[]): boolean;
  imWrite(fileName: string, prms: HostArray<OpenCvSharp.ImageEncodingParam>): boolean;
  imWrite(fileName: string, prms: HostArray<number | StrongNumeric<Int32Host>> | null): boolean;
  multiply(m: OpenCvSharp.Mat): OpenCvSharp.MatExpr;
  multiply(s: number | StrongNumeric<DoubleHost>): OpenCvSharp.MatExpr;
  saveImage(fileName: string): boolean;
  saveImage(fileName: string, ...prms: OpenCvSharp.ImageEncodingParam[]): boolean;
  saveImage(fileName: string, prms: HostArray<OpenCvSharp.ImageEncodingParam>): boolean;
  saveImage(fileName: string, prms: HostArray<number | StrongNumeric<Int32Host>> | null): boolean;
  copyMakeBorder(
    top: number | StrongNumeric<Int32Host>,
    bottom: number | StrongNumeric<Int32Host>,
    left: number | StrongNumeric<Int32Host>,
    right: number | StrongNumeric<Int32Host>,
    borderType: EnumInput<OpenCvSharp.BorderTypes>
  ): OpenCvSharp.Mat;
  copyMakeBorder(
    top: number | StrongNumeric<Int32Host>,
    bottom: number | StrongNumeric<Int32Host>,
    left: number | StrongNumeric<Int32Host>,
    right: number | StrongNumeric<Int32Host>,
    borderType: EnumInput<OpenCvSharp.BorderTypes>,
    value: OpenCvSharp.Scalar | null | null
  ): OpenCvSharp.Mat;
  divide(m: OpenCvSharp.Mat): OpenCvSharp.MatExpr;
  divide(s: number | StrongNumeric<DoubleHost>): OpenCvSharp.MatExpr;
  medianBlur(ksize: number | StrongNumeric<Int32Host>): OpenCvSharp.Mat;
  bitwiseAnd(m: OpenCvSharp.Mat): OpenCvSharp.MatExpr;
  bitwiseAnd(s: number | StrongNumeric<DoubleHost>): OpenCvSharp.MatExpr;
  gaussianBlur(
    ksize: OpenCvSharp.Size,
    sigmaX: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Mat;
  gaussianBlur(
    ksize: OpenCvSharp.Size,
    sigmaX: number | StrongNumeric<DoubleHost>,
    sigmaY: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Mat;
  gaussianBlur(
    ksize: OpenCvSharp.Size,
    sigmaX: number | StrongNumeric<DoubleHost>,
    sigmaY: number | StrongNumeric<DoubleHost>,
    borderType: EnumInput<OpenCvSharp.BorderTypes>
  ): OpenCvSharp.Mat;
  bitwiseOr(m: OpenCvSharp.Mat): OpenCvSharp.MatExpr;
  bitwiseOr(s: number | StrongNumeric<DoubleHost>): OpenCvSharp.MatExpr;
  bilateralFilter(
    d: number | StrongNumeric<Int32Host>,
    sigmaColor: number | StrongNumeric<DoubleHost>,
    sigmaSpace: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Mat;
  bilateralFilter(
    d: number | StrongNumeric<Int32Host>,
    sigmaColor: number | StrongNumeric<DoubleHost>,
    sigmaSpace: number | StrongNumeric<DoubleHost>,
    borderType: EnumInput<OpenCvSharp.BorderTypes>
  ): OpenCvSharp.Mat;
  boxFilter(ddepth: OpenCvSharp.MatType, ksize: OpenCvSharp.Size): OpenCvSharp.Mat;
  boxFilter(
    ddepth: OpenCvSharp.MatType,
    ksize: OpenCvSharp.Size,
    anchor: OpenCvSharp.Point | null | null
  ): OpenCvSharp.Mat;
  boxFilter(
    ddepth: OpenCvSharp.MatType,
    ksize: OpenCvSharp.Size,
    anchor: OpenCvSharp.Point | null | null,
    normalize: boolean
  ): OpenCvSharp.Mat;
  boxFilter(
    ddepth: OpenCvSharp.MatType,
    ksize: OpenCvSharp.Size,
    anchor: OpenCvSharp.Point | null | null,
    normalize: boolean,
    borderType: EnumInput<OpenCvSharp.BorderTypes>
  ): OpenCvSharp.Mat;
  xor(m: OpenCvSharp.Mat): OpenCvSharp.MatExpr;
  xor(s: number | StrongNumeric<DoubleHost>): OpenCvSharp.MatExpr;
  onesComplement(): OpenCvSharp.MatExpr;
  blur(ksize: OpenCvSharp.Size): OpenCvSharp.Mat;
  blur(ksize: OpenCvSharp.Size, anchor: OpenCvSharp.Point | null | null): OpenCvSharp.Mat;
  blur(
    ksize: OpenCvSharp.Size,
    anchor: OpenCvSharp.Point | null | null,
    borderType: EnumInput<OpenCvSharp.BorderTypes>
  ): OpenCvSharp.Mat;
  lessThan(d: number | StrongNumeric<DoubleHost>): OpenCvSharp.MatExpr;
  lessThan(m: OpenCvSharp.Mat): OpenCvSharp.MatExpr;
  lessThanOrEqual(d: number | StrongNumeric<DoubleHost>): OpenCvSharp.MatExpr;
  lessThanOrEqual(m: OpenCvSharp.Mat): OpenCvSharp.MatExpr;
  filter2D(ddepth: OpenCvSharp.MatType, kernel: OpenCvSharp.InputArray): OpenCvSharp.Mat;
  filter2D(
    ddepth: OpenCvSharp.MatType,
    kernel: OpenCvSharp.InputArray,
    anchor: OpenCvSharp.Point | null | null
  ): OpenCvSharp.Mat;
  filter2D(
    ddepth: OpenCvSharp.MatType,
    kernel: OpenCvSharp.InputArray,
    anchor: OpenCvSharp.Point | null | null,
    delta: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Mat;
  filter2D(
    ddepth: OpenCvSharp.MatType,
    kernel: OpenCvSharp.InputArray,
    anchor: OpenCvSharp.Point | null | null,
    delta: number | StrongNumeric<DoubleHost>,
    borderType: EnumInput<OpenCvSharp.BorderTypes>
  ): OpenCvSharp.Mat;
  equals(d: number | StrongNumeric<DoubleHost>): OpenCvSharp.MatExpr;
  equals(m: OpenCvSharp.Mat): OpenCvSharp.MatExpr;
  sepFilter2D(
    ddepth: OpenCvSharp.MatType,
    kernelX: OpenCvSharp.InputArray,
    kernelY: OpenCvSharp.InputArray
  ): OpenCvSharp.Mat;
  sepFilter2D(
    ddepth: OpenCvSharp.MatType,
    kernelX: OpenCvSharp.InputArray,
    kernelY: OpenCvSharp.InputArray,
    anchor: OpenCvSharp.Point | null | null
  ): OpenCvSharp.Mat;
  sepFilter2D(
    ddepth: OpenCvSharp.MatType,
    kernelX: OpenCvSharp.InputArray,
    kernelY: OpenCvSharp.InputArray,
    anchor: OpenCvSharp.Point | null | null,
    delta: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Mat;
  sepFilter2D(
    ddepth: OpenCvSharp.MatType,
    kernelX: OpenCvSharp.InputArray,
    kernelY: OpenCvSharp.InputArray,
    anchor: OpenCvSharp.Point | null | null,
    delta: number | StrongNumeric<DoubleHost>,
    borderType: EnumInput<OpenCvSharp.BorderTypes>
  ): OpenCvSharp.Mat;
  notEquals(d: number | StrongNumeric<DoubleHost>): OpenCvSharp.MatExpr;
  notEquals(m: OpenCvSharp.Mat): OpenCvSharp.MatExpr;
  sobel(
    ddepth: OpenCvSharp.MatType,
    xorder: number | StrongNumeric<Int32Host>,
    yorder: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Mat;
  sobel(
    ddepth: OpenCvSharp.MatType,
    xorder: number | StrongNumeric<Int32Host>,
    yorder: number | StrongNumeric<Int32Host>,
    ksize: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Mat;
  sobel(
    ddepth: OpenCvSharp.MatType,
    xorder: number | StrongNumeric<Int32Host>,
    yorder: number | StrongNumeric<Int32Host>,
    ksize: number | StrongNumeric<Int32Host>,
    scale: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Mat;
  sobel(
    ddepth: OpenCvSharp.MatType,
    xorder: number | StrongNumeric<Int32Host>,
    yorder: number | StrongNumeric<Int32Host>,
    ksize: number | StrongNumeric<Int32Host>,
    scale: number | StrongNumeric<DoubleHost>,
    delta: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Mat;
  sobel(
    ddepth: OpenCvSharp.MatType,
    xorder: number | StrongNumeric<Int32Host>,
    yorder: number | StrongNumeric<Int32Host>,
    ksize: number | StrongNumeric<Int32Host>,
    scale: number | StrongNumeric<DoubleHost>,
    delta: number | StrongNumeric<DoubleHost>,
    borderType: EnumInput<OpenCvSharp.BorderTypes>
  ): OpenCvSharp.Mat;
  greaterThan(d: number | StrongNumeric<DoubleHost>): OpenCvSharp.MatExpr;
  greaterThan(m: OpenCvSharp.Mat): OpenCvSharp.MatExpr;
  greaterThanOrEqual(d: number | StrongNumeric<DoubleHost>): OpenCvSharp.MatExpr;
  greaterThanOrEqual(m: OpenCvSharp.Mat): OpenCvSharp.MatExpr;
  scharr(
    ddepth: OpenCvSharp.MatType,
    xorder: number | StrongNumeric<Int32Host>,
    yorder: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Mat;
  scharr(
    ddepth: OpenCvSharp.MatType,
    xorder: number | StrongNumeric<Int32Host>,
    yorder: number | StrongNumeric<Int32Host>,
    scale: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Mat;
  scharr(
    ddepth: OpenCvSharp.MatType,
    xorder: number | StrongNumeric<Int32Host>,
    yorder: number | StrongNumeric<Int32Host>,
    scale: number | StrongNumeric<DoubleHost>,
    delta: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Mat;
  scharr(
    ddepth: OpenCvSharp.MatType,
    xorder: number | StrongNumeric<Int32Host>,
    yorder: number | StrongNumeric<Int32Host>,
    scale: number | StrongNumeric<DoubleHost>,
    delta: number | StrongNumeric<DoubleHost>,
    borderType: EnumInput<OpenCvSharp.BorderTypes>
  ): OpenCvSharp.Mat;
  laplacian(ddepth: OpenCvSharp.MatType): OpenCvSharp.Mat;
  laplacian(ddepth: OpenCvSharp.MatType, ksize: number | StrongNumeric<Int32Host>): OpenCvSharp.Mat;
  laplacian(
    ddepth: OpenCvSharp.MatType,
    ksize: number | StrongNumeric<Int32Host>,
    scale: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Mat;
  laplacian(
    ddepth: OpenCvSharp.MatType,
    ksize: number | StrongNumeric<Int32Host>,
    scale: number | StrongNumeric<DoubleHost>,
    delta: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Mat;
  laplacian(
    ddepth: OpenCvSharp.MatType,
    ksize: number | StrongNumeric<Int32Host>,
    scale: number | StrongNumeric<DoubleHost>,
    delta: number | StrongNumeric<DoubleHost>,
    borderType: EnumInput<OpenCvSharp.BorderTypes>
  ): OpenCvSharp.Mat;
  canny(
    threshold1: number | StrongNumeric<DoubleHost>,
    threshold2: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Mat;
  canny(
    threshold1: number | StrongNumeric<DoubleHost>,
    threshold2: number | StrongNumeric<DoubleHost>,
    apertureSize: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Mat;
  canny(
    threshold1: number | StrongNumeric<DoubleHost>,
    threshold2: number | StrongNumeric<DoubleHost>,
    apertureSize: number | StrongNumeric<Int32Host>,
    l2gradient: boolean
  ): OpenCvSharp.Mat;
  cornerEigenValsAndVecs(
    blockSize: number | StrongNumeric<Int32Host>,
    ksize: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Mat;
  cornerEigenValsAndVecs(
    blockSize: number | StrongNumeric<Int32Host>,
    ksize: number | StrongNumeric<Int32Host>,
    borderType: EnumInput<OpenCvSharp.BorderTypes>
  ): OpenCvSharp.Mat;
  preCornerDetect(ksize: number | StrongNumeric<Int32Host>): OpenCvSharp.Mat;
  preCornerDetect(
    ksize: number | StrongNumeric<Int32Host>,
    borderType: EnumInput<OpenCvSharp.BorderTypes>
  ): OpenCvSharp.Mat;
  cornerSubPix(
    inputCorners: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>,
    winSize: OpenCvSharp.Size,
    zeroZone: OpenCvSharp.Size,
    criteria: OpenCvSharp.TermCriteria
  ): HostArray<OpenCvSharp.Point2f>;
  item: {
    (
      rowStart: number | StrongNumeric<Int32Host>,
      rowEnd: number | StrongNumeric<Int32Host>,
      colStart: number | StrongNumeric<Int32Host>,
      colEnd: number | StrongNumeric<Int32Host>
    ): OpenCvSharp.Mat;
    get(
      rowStart: number | StrongNumeric<Int32Host>,
      rowEnd: number | StrongNumeric<Int32Host>,
      colStart: number | StrongNumeric<Int32Host>,
      colEnd: number | StrongNumeric<Int32Host>
    ): OpenCvSharp.Mat;
    set(
      rowStart: number | StrongNumeric<Int32Host>,
      rowEnd: number | StrongNumeric<Int32Host>,
      colStart: number | StrongNumeric<Int32Host>,
      colEnd: number | StrongNumeric<Int32Host>,
      value: OpenCvSharp.Mat
    ): OpenCvSharp.Mat;
    (rowRange: System.Range, colRange: System.Range): OpenCvSharp.Mat;
    get(rowRange: System.Range, colRange: System.Range): OpenCvSharp.Mat;
    set(rowRange: System.Range, colRange: System.Range, value: OpenCvSharp.Mat): OpenCvSharp.Mat;
    (rowRange: OpenCvSharp.Range, colRange: OpenCvSharp.Range): OpenCvSharp.Mat;
    get(rowRange: OpenCvSharp.Range, colRange: OpenCvSharp.Range): OpenCvSharp.Mat;
    set(
      rowRange: OpenCvSharp.Range,
      colRange: OpenCvSharp.Range,
      value: OpenCvSharp.Mat
    ): OpenCvSharp.Mat;
    (roi: OpenCvSharp.Rect): OpenCvSharp.Mat;
    get(roi: OpenCvSharp.Rect): OpenCvSharp.Mat;
    set(roi: OpenCvSharp.Rect, value: OpenCvSharp.Mat): OpenCvSharp.Mat;
    (ranges: HostArray<OpenCvSharp.Range>): OpenCvSharp.Mat;
    get(ranges: HostArray<OpenCvSharp.Range>): OpenCvSharp.Mat;
    set(ranges: HostArray<OpenCvSharp.Range>, value: OpenCvSharp.Mat): OpenCvSharp.Mat;
  };
  getUMat(
    accessFlags: EnumInput<OpenCvSharp.AccessFlag>,
    usageFlags: EnumInput<OpenCvSharp.UMatUsageFlags>
  ): OpenCvSharp.UMat;
  goodFeaturesToTrack(
    maxCorners: number | StrongNumeric<Int32Host>,
    qualityLevel: number | StrongNumeric<DoubleHost>,
    minDistance: number | StrongNumeric<DoubleHost>,
    mask: OpenCvSharp.InputArray,
    blockSize: number | StrongNumeric<Int32Host>,
    useHarrisDetector: boolean,
    k: number | StrongNumeric<DoubleHost>
  ): HostArray<OpenCvSharp.Point2f>;
  col(x: number | StrongNumeric<Int32Host>): OpenCvSharp.Mat;
  colRange(range: OpenCvSharp.Range): OpenCvSharp.Mat;
  colRange(range: System.Range): OpenCvSharp.Mat;
  colRange(
    startCol: number | StrongNumeric<Int32Host>,
    endCol: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Mat;
  houghLines(
    rho: number | StrongNumeric<DoubleHost>,
    theta: number | StrongNumeric<DoubleHost>,
    threshold: number | StrongNumeric<Int32Host>
  ): HostArray<OpenCvSharp.LineSegmentPolar>;
  houghLines(
    rho: number | StrongNumeric<DoubleHost>,
    theta: number | StrongNumeric<DoubleHost>,
    threshold: number | StrongNumeric<Int32Host>,
    srn: number | StrongNumeric<DoubleHost>
  ): HostArray<OpenCvSharp.LineSegmentPolar>;
  houghLines(
    rho: number | StrongNumeric<DoubleHost>,
    theta: number | StrongNumeric<DoubleHost>,
    threshold: number | StrongNumeric<Int32Host>,
    srn: number | StrongNumeric<DoubleHost>,
    stn: number | StrongNumeric<DoubleHost>
  ): HostArray<OpenCvSharp.LineSegmentPolar>;
  row(y: number | StrongNumeric<Int32Host>): OpenCvSharp.Mat;
  houghLinesP(
    rho: number | StrongNumeric<DoubleHost>,
    theta: number | StrongNumeric<DoubleHost>,
    threshold: number | StrongNumeric<Int32Host>
  ): HostArray<OpenCvSharp.LineSegmentPoint>;
  houghLinesP(
    rho: number | StrongNumeric<DoubleHost>,
    theta: number | StrongNumeric<DoubleHost>,
    threshold: number | StrongNumeric<Int32Host>,
    minLineLength: number | StrongNumeric<DoubleHost>
  ): HostArray<OpenCvSharp.LineSegmentPoint>;
  houghLinesP(
    rho: number | StrongNumeric<DoubleHost>,
    theta: number | StrongNumeric<DoubleHost>,
    threshold: number | StrongNumeric<Int32Host>,
    minLineLength: number | StrongNumeric<DoubleHost>,
    maxLineGap: number | StrongNumeric<DoubleHost>
  ): HostArray<OpenCvSharp.LineSegmentPoint>;
  rowRange(range: OpenCvSharp.Range): OpenCvSharp.Mat;
  rowRange(range: System.Range): OpenCvSharp.Mat;
  rowRange(
    startRow: number | StrongNumeric<Int32Host>,
    endRow: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Mat;
  houghCircles(
    method: EnumInput<OpenCvSharp.HoughModes>,
    dp: number | StrongNumeric<DoubleHost>,
    minDist: number | StrongNumeric<DoubleHost>
  ): HostArray<OpenCvSharp.CircleSegment>;
  houghCircles(
    method: EnumInput<OpenCvSharp.HoughModes>,
    dp: number | StrongNumeric<DoubleHost>,
    minDist: number | StrongNumeric<DoubleHost>,
    param1: number | StrongNumeric<DoubleHost>
  ): HostArray<OpenCvSharp.CircleSegment>;
  houghCircles(
    method: EnumInput<OpenCvSharp.HoughModes>,
    dp: number | StrongNumeric<DoubleHost>,
    minDist: number | StrongNumeric<DoubleHost>,
    param1: number | StrongNumeric<DoubleHost>,
    param2: number | StrongNumeric<DoubleHost>
  ): HostArray<OpenCvSharp.CircleSegment>;
  houghCircles(
    method: EnumInput<OpenCvSharp.HoughModes>,
    dp: number | StrongNumeric<DoubleHost>,
    minDist: number | StrongNumeric<DoubleHost>,
    param1: number | StrongNumeric<DoubleHost>,
    param2: number | StrongNumeric<DoubleHost>,
    minRadius: number | StrongNumeric<Int32Host>
  ): HostArray<OpenCvSharp.CircleSegment>;
  houghCircles(
    method: EnumInput<OpenCvSharp.HoughModes>,
    dp: number | StrongNumeric<DoubleHost>,
    minDist: number | StrongNumeric<DoubleHost>,
    param1: number | StrongNumeric<DoubleHost>,
    param2: number | StrongNumeric<DoubleHost>,
    minRadius: number | StrongNumeric<Int32Host>,
    maxRadius: number | StrongNumeric<Int32Host>
  ): HostArray<OpenCvSharp.CircleSegment>;
  diag(): OpenCvSharp.Mat;
  diag(d: EnumInput<OpenCvSharp.MatDiagType>): OpenCvSharp.Mat;
  clone(): OpenCvSharp.Mat;
  clone(roi: OpenCvSharp.Rect): OpenCvSharp.Mat;
  dilate(element: OpenCvSharp.InputArray | null): OpenCvSharp.Mat;
  dilate(
    element: OpenCvSharp.InputArray | null,
    anchor: OpenCvSharp.Point | null | null
  ): OpenCvSharp.Mat;
  dilate(
    element: OpenCvSharp.InputArray | null,
    anchor: OpenCvSharp.Point | null | null,
    iterations: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Mat;
  dilate(
    element: OpenCvSharp.InputArray | null,
    anchor: OpenCvSharp.Point | null | null,
    iterations: number | StrongNumeric<Int32Host>,
    borderType: EnumInput<OpenCvSharp.BorderTypes>
  ): OpenCvSharp.Mat;
  dilate(
    element: OpenCvSharp.InputArray | null,
    anchor: OpenCvSharp.Point | null | null,
    iterations: number | StrongNumeric<Int32Host>,
    borderType: EnumInput<OpenCvSharp.BorderTypes>,
    borderValue: OpenCvSharp.Scalar | null | null
  ): OpenCvSharp.Mat;
  erode(element: OpenCvSharp.InputArray | null): OpenCvSharp.Mat;
  erode(
    element: OpenCvSharp.InputArray | null,
    anchor: OpenCvSharp.Point | null | null
  ): OpenCvSharp.Mat;
  erode(
    element: OpenCvSharp.InputArray | null,
    anchor: OpenCvSharp.Point | null | null,
    iterations: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Mat;
  erode(
    element: OpenCvSharp.InputArray | null,
    anchor: OpenCvSharp.Point | null | null,
    iterations: number | StrongNumeric<Int32Host>,
    borderType: EnumInput<OpenCvSharp.BorderTypes>
  ): OpenCvSharp.Mat;
  erode(
    element: OpenCvSharp.InputArray | null,
    anchor: OpenCvSharp.Point | null | null,
    iterations: number | StrongNumeric<Int32Host>,
    borderType: EnumInput<OpenCvSharp.BorderTypes>,
    borderValue: OpenCvSharp.Scalar | null | null
  ): OpenCvSharp.Mat;
  copyTo(m: OpenCvSharp.Mat): VoidResult;
  copyTo(m: OpenCvSharp.Mat, mask: OpenCvSharp.InputArray | null): VoidResult;
  copyTo(m: OpenCvSharp.OutputArray): VoidResult;
  copyTo(m: OpenCvSharp.OutputArray, mask: OpenCvSharp.InputArray | null): VoidResult;
  morphologyEx(
    op: EnumInput<OpenCvSharp.MorphTypes>,
    element: OpenCvSharp.InputArray | null
  ): OpenCvSharp.Mat;
  morphologyEx(
    op: EnumInput<OpenCvSharp.MorphTypes>,
    element: OpenCvSharp.InputArray | null,
    anchor: OpenCvSharp.Point | null | null
  ): OpenCvSharp.Mat;
  morphologyEx(
    op: EnumInput<OpenCvSharp.MorphTypes>,
    element: OpenCvSharp.InputArray | null,
    anchor: OpenCvSharp.Point | null | null,
    iterations: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Mat;
  morphologyEx(
    op: EnumInput<OpenCvSharp.MorphTypes>,
    element: OpenCvSharp.InputArray | null,
    anchor: OpenCvSharp.Point | null | null,
    iterations: number | StrongNumeric<Int32Host>,
    borderType: EnumInput<OpenCvSharp.BorderTypes>
  ): OpenCvSharp.Mat;
  morphologyEx(
    op: EnumInput<OpenCvSharp.MorphTypes>,
    element: OpenCvSharp.InputArray | null,
    anchor: OpenCvSharp.Point | null | null,
    iterations: number | StrongNumeric<Int32Host>,
    borderType: EnumInput<OpenCvSharp.BorderTypes>,
    borderValue: OpenCvSharp.Scalar | null | null
  ): OpenCvSharp.Mat;
  convertTo(m: OpenCvSharp.OutputArray, rtype: OpenCvSharp.MatType): VoidResult;
  convertTo(
    m: OpenCvSharp.OutputArray,
    rtype: OpenCvSharp.MatType,
    alpha: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  convertTo(
    m: OpenCvSharp.OutputArray,
    rtype: OpenCvSharp.MatType,
    alpha: number | StrongNumeric<DoubleHost>,
    beta: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  assignTo(m: OpenCvSharp.Mat): VoidResult;
  assignTo(m: OpenCvSharp.Mat, type: OpenCvSharp.MatType | null | null): VoidResult;
  setTo(value: OpenCvSharp.InputArray): OpenCvSharp.Mat;
  setTo(value: OpenCvSharp.InputArray, mask: OpenCvSharp.Mat | null): OpenCvSharp.Mat;
  setTo(value: OpenCvSharp.Scalar): OpenCvSharp.Mat;
  setTo(value: OpenCvSharp.Scalar, mask: OpenCvSharp.Mat | null): OpenCvSharp.Mat;
  warpAffine(m: OpenCvSharp.InputArray, dsize: OpenCvSharp.Size): OpenCvSharp.Mat;
  warpAffine(
    m: OpenCvSharp.InputArray,
    dsize: OpenCvSharp.Size,
    flags: EnumInput<OpenCvSharp.InterpolationFlags>
  ): OpenCvSharp.Mat;
  warpAffine(
    m: OpenCvSharp.InputArray,
    dsize: OpenCvSharp.Size,
    flags: EnumInput<OpenCvSharp.InterpolationFlags>,
    borderMode: EnumInput<OpenCvSharp.BorderTypes>
  ): OpenCvSharp.Mat;
  warpAffine(
    m: OpenCvSharp.InputArray,
    dsize: OpenCvSharp.Size,
    flags: EnumInput<OpenCvSharp.InterpolationFlags>,
    borderMode: EnumInput<OpenCvSharp.BorderTypes>,
    borderValue: OpenCvSharp.Scalar | null | null
  ): OpenCvSharp.Mat;
  warpPerspective(m: OpenCvSharp.Mat, dsize: OpenCvSharp.Size): OpenCvSharp.Mat;
  warpPerspective(
    m: OpenCvSharp.Mat,
    dsize: OpenCvSharp.Size,
    flags: EnumInput<OpenCvSharp.InterpolationFlags>
  ): OpenCvSharp.Mat;
  warpPerspective(
    m: OpenCvSharp.Mat,
    dsize: OpenCvSharp.Size,
    flags: EnumInput<OpenCvSharp.InterpolationFlags>,
    borderMode: EnumInput<OpenCvSharp.BorderTypes>
  ): OpenCvSharp.Mat;
  warpPerspective(
    m: OpenCvSharp.Mat,
    dsize: OpenCvSharp.Size,
    flags: EnumInput<OpenCvSharp.InterpolationFlags>,
    borderMode: EnumInput<OpenCvSharp.BorderTypes>,
    borderValue: OpenCvSharp.Scalar | null | null
  ): OpenCvSharp.Mat;
  reshape(cn: number | StrongNumeric<Int32Host>): OpenCvSharp.Mat;
  reshape(
    cn: number | StrongNumeric<Int32Host>,
    ...newDims: (number | StrongNumeric<Int32Host>)[]
  ): OpenCvSharp.Mat;
  reshape(
    cn: number | StrongNumeric<Int32Host>,
    newDims: HostArray<number | StrongNumeric<Int32Host>>
  ): OpenCvSharp.Mat;
  reshape(
    cn: number | StrongNumeric<Int32Host>,
    rows: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Mat;
  t(): OpenCvSharp.MatExpr;
  inv(): OpenCvSharp.MatExpr;
  inv(method: EnumInput<OpenCvSharp.DecompTypes>): OpenCvSharp.MatExpr;
  remap(map1: OpenCvSharp.InputArray, map2: OpenCvSharp.InputArray): OpenCvSharp.Mat;
  remap(
    map1: OpenCvSharp.InputArray,
    map2: OpenCvSharp.InputArray,
    interpolation: EnumInput<OpenCvSharp.InterpolationFlags>
  ): OpenCvSharp.Mat;
  remap(
    map1: OpenCvSharp.InputArray,
    map2: OpenCvSharp.InputArray,
    interpolation: EnumInput<OpenCvSharp.InterpolationFlags>,
    borderMode: EnumInput<OpenCvSharp.BorderTypes>
  ): OpenCvSharp.Mat;
  remap(
    map1: OpenCvSharp.InputArray,
    map2: OpenCvSharp.InputArray,
    interpolation: EnumInput<OpenCvSharp.InterpolationFlags>,
    borderMode: EnumInput<OpenCvSharp.BorderTypes>,
    borderValue: OpenCvSharp.Scalar | null | null
  ): OpenCvSharp.Mat;
  mul(m: OpenCvSharp.InputArray): OpenCvSharp.MatExpr;
  mul(m: OpenCvSharp.InputArray, scale: number | StrongNumeric<DoubleHost>): OpenCvSharp.MatExpr;
  invertAffineTransform(): OpenCvSharp.Mat;
  cross(m: OpenCvSharp.InputArray): OpenCvSharp.Mat;
  getRectSubPix(patchSize: OpenCvSharp.Size, center: OpenCvSharp.Point2f): OpenCvSharp.Mat;
  getRectSubPix(
    patchSize: OpenCvSharp.Size,
    center: OpenCvSharp.Point2f,
    patchType: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Mat;
  dot(m: OpenCvSharp.InputArray): number;
  accumulate(mask: OpenCvSharp.InputArray): OpenCvSharp.Mat;
  accumulateSquare(mask: OpenCvSharp.InputArray): OpenCvSharp.Mat;
  createHanningWindow(winSize: OpenCvSharp.Size, type: OpenCvSharp.MatType): VoidResult;
  create(
    rows: number | StrongNumeric<Int32Host>,
    cols: number | StrongNumeric<Int32Host>,
    type: OpenCvSharp.MatType
  ): VoidResult;
  create(size: OpenCvSharp.Size, type: OpenCvSharp.MatType): VoidResult;
  create(type: OpenCvSharp.MatType, ...sizes: (number | StrongNumeric<Int32Host>)[]): VoidResult;
  create(
    type: OpenCvSharp.MatType,
    sizes: HostArray<number | StrongNumeric<Int32Host>>
  ): VoidResult;
  threshold(
    thresh: number | StrongNumeric<DoubleHost>,
    maxval: number | StrongNumeric<DoubleHost>,
    type: EnumInput<OpenCvSharp.ThresholdTypes>
  ): OpenCvSharp.Mat;
  reserve(sz: number | StrongNumeric<Int32Host>): VoidResult;
  adaptiveThreshold(
    maxValue: number | StrongNumeric<DoubleHost>,
    adaptiveMethod: EnumInput<OpenCvSharp.AdaptiveThresholdTypes>,
    thresholdType: EnumInput<OpenCvSharp.ThresholdTypes>,
    blockSize: number | StrongNumeric<Int32Host>,
    c: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Mat;
  reserveBuffer(sz: number | StrongNumeric<Int32Host>): VoidResult;
  pyrDown(): OpenCvSharp.Mat;
  pyrDown(dstSize: OpenCvSharp.Size | null | null): OpenCvSharp.Mat;
  pyrDown(
    dstSize: OpenCvSharp.Size | null | null,
    borderType: EnumInput<OpenCvSharp.BorderTypes>
  ): OpenCvSharp.Mat;
  resize(dsize: OpenCvSharp.Size): OpenCvSharp.Mat;
  resize(dsize: OpenCvSharp.Size, fx: number | StrongNumeric<DoubleHost>): OpenCvSharp.Mat;
  resize(
    dsize: OpenCvSharp.Size,
    fx: number | StrongNumeric<DoubleHost>,
    fy: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Mat;
  resize(
    dsize: OpenCvSharp.Size,
    fx: number | StrongNumeric<DoubleHost>,
    fy: number | StrongNumeric<DoubleHost>,
    interpolation: EnumInput<OpenCvSharp.InterpolationFlags>
  ): OpenCvSharp.Mat;
  resize(sz: number | StrongNumeric<Int32Host>): VoidResult;
  resize(sz: number | StrongNumeric<Int32Host>, s: OpenCvSharp.Scalar): VoidResult;
  pyrUp(): OpenCvSharp.Mat;
  pyrUp(dstSize: OpenCvSharp.Size | null | null): OpenCvSharp.Mat;
  pyrUp(
    dstSize: OpenCvSharp.Size | null | null,
    borderType: EnumInput<OpenCvSharp.BorderTypes>
  ): OpenCvSharp.Mat;
  popBack(): VoidResult;
  popBack(nElems: number | StrongNumeric<Int32Host>): VoidResult;
  buildPyramid(
    maxlevel: number | StrongNumeric<Int32Host>
  ): System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>;
  buildPyramid(
    maxlevel: number | StrongNumeric<Int32Host>,
    borderType: EnumInput<OpenCvSharp.BorderTypes>
  ): System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>;
  undistort(
    cameraMatrix: OpenCvSharp.InputArray,
    distCoeffs: OpenCvSharp.InputArray
  ): OpenCvSharp.Mat;
  undistort(
    cameraMatrix: OpenCvSharp.InputArray,
    distCoeffs: OpenCvSharp.InputArray,
    newCameraMatrix: OpenCvSharp.InputArray | null
  ): OpenCvSharp.Mat;
  getDefaultNewCameraMatrix(): OpenCvSharp.Mat;
  getDefaultNewCameraMatrix(imgSize: OpenCvSharp.Size | null | null): OpenCvSharp.Mat;
  getDefaultNewCameraMatrix(
    imgSize: OpenCvSharp.Size | null | null,
    centerPrincipalPoint: boolean
  ): OpenCvSharp.Mat;
  undistortPoints(
    cameraMatrix: OpenCvSharp.InputArray,
    distCoeffs: OpenCvSharp.InputArray
  ): OpenCvSharp.Mat;
  undistortPoints(
    cameraMatrix: OpenCvSharp.InputArray,
    distCoeffs: OpenCvSharp.InputArray,
    r: OpenCvSharp.InputArray | null
  ): OpenCvSharp.Mat;
  undistortPoints(
    cameraMatrix: OpenCvSharp.InputArray,
    distCoeffs: OpenCvSharp.InputArray,
    r: OpenCvSharp.InputArray | null,
    p: OpenCvSharp.InputArray | null
  ): OpenCvSharp.Mat;
  equalizeHist(): OpenCvSharp.Mat;
  watershed(markers: OpenCvSharp.InputOutputArray): VoidResult;
  pyrMeanShiftFiltering(
    sp: number | StrongNumeric<DoubleHost>,
    sr: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Mat;
  pyrMeanShiftFiltering(
    sp: number | StrongNumeric<DoubleHost>,
    sr: number | StrongNumeric<DoubleHost>,
    maxLevel: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Mat;
  pyrMeanShiftFiltering(
    sp: number | StrongNumeric<DoubleHost>,
    sr: number | StrongNumeric<DoubleHost>,
    maxLevel: number | StrongNumeric<Int32Host>,
    termcrit: OpenCvSharp.TermCriteria | null | null
  ): OpenCvSharp.Mat;
  grabCut(
    mask: OpenCvSharp.InputOutputArray,
    rect: OpenCvSharp.Rect,
    bgdModel: OpenCvSharp.InputOutputArray,
    fgdModel: OpenCvSharp.InputOutputArray,
    iterCount: number | StrongNumeric<Int32Host>,
    mode: EnumInput<OpenCvSharp.GrabCutModes>
  ): VoidResult;
  floodFill(
    mask: OpenCvSharp.InputOutputArray,
    seedPoint: OpenCvSharp.Point,
    newVal: OpenCvSharp.Scalar
  ): number;
  floodFill(
    mask: OpenCvSharp.InputOutputArray,
    seedPoint: OpenCvSharp.Point,
    newVal: OpenCvSharp.Scalar,
    rect: HostVariableOut<OpenCvSharp.Rect>
  ): number;
  floodFill(
    mask: OpenCvSharp.InputOutputArray,
    seedPoint: OpenCvSharp.Point,
    newVal: OpenCvSharp.Scalar,
    rect: HostVariableOut<OpenCvSharp.Rect>,
    loDiff: OpenCvSharp.Scalar | null | null
  ): number;
  floodFill(
    mask: OpenCvSharp.InputOutputArray,
    seedPoint: OpenCvSharp.Point,
    newVal: OpenCvSharp.Scalar,
    rect: HostVariableOut<OpenCvSharp.Rect>,
    loDiff: OpenCvSharp.Scalar | null | null,
    upDiff: OpenCvSharp.Scalar | null | null
  ): number;
  floodFill(
    mask: OpenCvSharp.InputOutputArray,
    seedPoint: OpenCvSharp.Point,
    newVal: OpenCvSharp.Scalar,
    rect: HostVariableOut<OpenCvSharp.Rect>,
    loDiff: OpenCvSharp.Scalar | null | null,
    upDiff: OpenCvSharp.Scalar | null | null,
    flags: EnumInput<OpenCvSharp.FloodFillFlags>
  ): number;
  floodFill(seedPoint: OpenCvSharp.Point, newVal: OpenCvSharp.Scalar): number;
  floodFill(
    seedPoint: OpenCvSharp.Point,
    newVal: OpenCvSharp.Scalar,
    rect: HostVariableOut<OpenCvSharp.Rect>
  ): number;
  floodFill(
    seedPoint: OpenCvSharp.Point,
    newVal: OpenCvSharp.Scalar,
    rect: HostVariableOut<OpenCvSharp.Rect>,
    loDiff: OpenCvSharp.Scalar | null | null
  ): number;
  floodFill(
    seedPoint: OpenCvSharp.Point,
    newVal: OpenCvSharp.Scalar,
    rect: HostVariableOut<OpenCvSharp.Rect>,
    loDiff: OpenCvSharp.Scalar | null | null,
    upDiff: OpenCvSharp.Scalar | null | null
  ): number;
  floodFill(
    seedPoint: OpenCvSharp.Point,
    newVal: OpenCvSharp.Scalar,
    rect: HostVariableOut<OpenCvSharp.Rect>,
    loDiff: OpenCvSharp.Scalar | null | null,
    upDiff: OpenCvSharp.Scalar | null | null,
    flags: EnumInput<OpenCvSharp.FloodFillFlags>
  ): number;
  cvtColor(code: EnumInput<OpenCvSharp.ColorConversionCodes>): OpenCvSharp.Mat;
  cvtColor(
    code: EnumInput<OpenCvSharp.ColorConversionCodes>,
    dstCn: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Mat;
  moments(): OpenCvSharp.Moments;
  moments(binaryImage: boolean): OpenCvSharp.Moments;
  matchTemplate(
    templ: OpenCvSharp.InputArray,
    method: EnumInput<OpenCvSharp.TemplateMatchModes>
  ): OpenCvSharp.Mat;
  matchTemplate(
    templ: OpenCvSharp.InputArray,
    method: EnumInput<OpenCvSharp.TemplateMatchModes>,
    mask: OpenCvSharp.InputArray | null
  ): OpenCvSharp.Mat;
  pushBack(m: OpenCvSharp.Mat): VoidResult;
  pushBack(value: OpenCvSharp.Point): VoidResult;
  pushBack(value: OpenCvSharp.Point2d): VoidResult;
  pushBack(value: OpenCvSharp.Point2f): VoidResult;
  pushBack(value: OpenCvSharp.Point3d): VoidResult;
  pushBack(value: OpenCvSharp.Point3f): VoidResult;
  pushBack(value: OpenCvSharp.Point3i): VoidResult;
  pushBack(value: OpenCvSharp.Rect): VoidResult;
  pushBack(value: OpenCvSharp.Rect2d): VoidResult;
  pushBack(value: OpenCvSharp.Rect2f): VoidResult;
  pushBack(value: OpenCvSharp.Size): VoidResult;
  pushBack(value: OpenCvSharp.Size2d): VoidResult;
  pushBack(value: OpenCvSharp.Size2f): VoidResult;
  pushBack(value: OpenCvSharp.Vec2b): VoidResult;
  pushBack(value: OpenCvSharp.Vec2d): VoidResult;
  pushBack(value: OpenCvSharp.Vec2f): VoidResult;
  pushBack(value: OpenCvSharp.Vec2i): VoidResult;
  pushBack(value: OpenCvSharp.Vec2s): VoidResult;
  pushBack(value: OpenCvSharp.Vec2w): VoidResult;
  pushBack(value: OpenCvSharp.Vec3b): VoidResult;
  pushBack(value: OpenCvSharp.Vec3d): VoidResult;
  pushBack(value: OpenCvSharp.Vec3f): VoidResult;
  pushBack(value: OpenCvSharp.Vec3i): VoidResult;
  pushBack(value: OpenCvSharp.Vec3s): VoidResult;
  pushBack(value: OpenCvSharp.Vec3w): VoidResult;
  pushBack(value: OpenCvSharp.Vec4b): VoidResult;
  pushBack(value: OpenCvSharp.Vec4d): VoidResult;
  pushBack(value: OpenCvSharp.Vec4f): VoidResult;
  pushBack(value: OpenCvSharp.Vec4i): VoidResult;
  pushBack(value: OpenCvSharp.Vec4s): VoidResult;
  pushBack(value: OpenCvSharp.Vec4w): VoidResult;
  pushBack(value: OpenCvSharp.Vec6b): VoidResult;
  pushBack(value: OpenCvSharp.Vec6d): VoidResult;
  pushBack(value: OpenCvSharp.Vec6f): VoidResult;
  pushBack(value: OpenCvSharp.Vec6i): VoidResult;
  pushBack(value: OpenCvSharp.Vec6s): VoidResult;
  pushBack(value: OpenCvSharp.Vec6w): VoidResult;
  pushBack(value: number | StrongNumeric<ByteHost>): VoidResult;
  pushBack(value: number | StrongNumeric<DoubleHost>): VoidResult;
  pushBack(value: number | StrongNumeric<Int16Host>): VoidResult;
  pushBack(value: number | StrongNumeric<Int32Host>): VoidResult;
  pushBack(value: number | StrongNumeric<SByteHost>): VoidResult;
  pushBack(value: number | StrongNumeric<SingleHost>): VoidResult;
  pushBack(value: number | StrongNumeric<UInt16Host>): VoidResult;
  locateROI(
    wholeSize: HostVariableOut<OpenCvSharp.Size>,
    ofs: HostVariableOut<OpenCvSharp.Point>
  ): VoidResult;
  connectedComponents(
    labels: HostVariableOut<HostArray<number>>,
    connectivity: EnumInput<OpenCvSharp.PixelConnectivity>
  ): number;
  connectedComponents(labels: OpenCvSharp.OutputArray): number;
  connectedComponents(
    labels: OpenCvSharp.OutputArray,
    connectivity: EnumInput<OpenCvSharp.PixelConnectivity>
  ): number;
  connectedComponents(
    labels: OpenCvSharp.OutputArray,
    connectivity: EnumInput<OpenCvSharp.PixelConnectivity>,
    ltype: OpenCvSharp.MatType
  ): number;
  adjustROI(
    dtop: number | StrongNumeric<Int32Host>,
    dbottom: number | StrongNumeric<Int32Host>,
    dleft: number | StrongNumeric<Int32Host>,
    dright: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Mat;
  connectedComponentsWithStats(
    labels: OpenCvSharp.OutputArray,
    stats: OpenCvSharp.OutputArray,
    centroids: OpenCvSharp.OutputArray
  ): number;
  connectedComponentsWithStats(
    labels: OpenCvSharp.OutputArray,
    stats: OpenCvSharp.OutputArray,
    centroids: OpenCvSharp.OutputArray,
    connectivity: EnumInput<OpenCvSharp.PixelConnectivity>
  ): number;
  connectedComponentsWithStats(
    labels: OpenCvSharp.OutputArray,
    stats: OpenCvSharp.OutputArray,
    centroids: OpenCvSharp.OutputArray,
    connectivity: EnumInput<OpenCvSharp.PixelConnectivity>,
    ltype: OpenCvSharp.MatType
  ): number;
  connectedComponentsEx(): OpenCvSharp.ConnectedComponents;
  connectedComponentsEx(
    connectivity: EnumInput<OpenCvSharp.PixelConnectivity>
  ): OpenCvSharp.ConnectedComponents;
  subMat(...ranges: OpenCvSharp.Range[]): OpenCvSharp.Mat;
  subMat(ranges: HostArray<OpenCvSharp.Range>): OpenCvSharp.Mat;
  subMat(roi: OpenCvSharp.Rect): OpenCvSharp.Mat;
  subMat(rowRange: OpenCvSharp.Range, colRange: OpenCvSharp.Range): OpenCvSharp.Mat;
  subMat(rowRange: System.Range, colRange: System.Range): OpenCvSharp.Mat;
  subMat(
    rowStart: number | StrongNumeric<Int32Host>,
    rowEnd: number | StrongNumeric<Int32Host>,
    colStart: number | StrongNumeric<Int32Host>,
    colEnd: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Mat;
  isContinuous(): boolean;
  isSubmatrix(): boolean;
  elemSize(): number;
  elemSize1(): number;
  type(): OpenCvSharp.MatType;
  depth(): number;
  channels(): number;
  findContours(
    contours: HostVariableOut<HostArray<HostArray<OpenCvSharp.Point>>>,
    hierarchy: HostVariableOut<HostArray<OpenCvSharp.HierarchyIndex>>,
    mode: EnumInput<OpenCvSharp.RetrievalModes>,
    method: EnumInput<OpenCvSharp.ContourApproximationModes>
  ): VoidResult;
  findContours(
    contours: HostVariableOut<HostArray<HostArray<OpenCvSharp.Point>>>,
    hierarchy: HostVariableOut<HostArray<OpenCvSharp.HierarchyIndex>>,
    mode: EnumInput<OpenCvSharp.RetrievalModes>,
    method: EnumInput<OpenCvSharp.ContourApproximationModes>,
    offset: OpenCvSharp.Point | null | null
  ): VoidResult;
  findContours(
    contours: HostVariableOut<HostArray<OpenCvSharp.Mat>>,
    hierarchy: OpenCvSharp.OutputArray,
    mode: EnumInput<OpenCvSharp.RetrievalModes>,
    method: EnumInput<OpenCvSharp.ContourApproximationModes>
  ): VoidResult;
  findContours(
    contours: HostVariableOut<HostArray<OpenCvSharp.Mat>>,
    hierarchy: OpenCvSharp.OutputArray,
    mode: EnumInput<OpenCvSharp.RetrievalModes>,
    method: EnumInput<OpenCvSharp.ContourApproximationModes>,
    offset: OpenCvSharp.Point | null | null
  ): VoidResult;
  step1(): number;
  step1(i: number | StrongNumeric<Int32Host>): number;
  empty(): boolean;
  findContoursAsArray(
    mode: EnumInput<OpenCvSharp.RetrievalModes>,
    method: EnumInput<OpenCvSharp.ContourApproximationModes>
  ): HostArray<HostArray<OpenCvSharp.Point>>;
  findContoursAsArray(
    mode: EnumInput<OpenCvSharp.RetrievalModes>,
    method: EnumInput<OpenCvSharp.ContourApproximationModes>,
    offset: OpenCvSharp.Point | null | null
  ): HostArray<HostArray<OpenCvSharp.Point>>;
  total(): number;
  total(startDim: number | StrongNumeric<Int32Host>): number;
  total(
    startDim: number | StrongNumeric<Int32Host>,
    endDim: number | StrongNumeric<Int32Host>
  ): number;
  findContoursAsMat(
    mode: EnumInput<OpenCvSharp.RetrievalModes>,
    method: EnumInput<OpenCvSharp.ContourApproximationModes>
  ): HostArray<OpenCvSharp.Mat<OpenCvSharp.Point>>;
  findContoursAsMat(
    mode: EnumInput<OpenCvSharp.RetrievalModes>,
    method: EnumInput<OpenCvSharp.ContourApproximationModes>,
    offset: OpenCvSharp.Point | null | null
  ): HostArray<OpenCvSharp.Mat<OpenCvSharp.Point>>;
  checkVector(elemChannels: number | StrongNumeric<Int32Host>): number;
  checkVector(
    elemChannels: number | StrongNumeric<Int32Host>,
    depth: number | StrongNumeric<Int32Host>
  ): number;
  checkVector(
    elemChannels: number | StrongNumeric<Int32Host>,
    depth: number | StrongNumeric<Int32Host>,
    requireContinuous: boolean
  ): number;
  ptr(...idx: (number | StrongNumeric<Int32Host>)[]): System.IntPtr;
  ptr(i0: number | StrongNumeric<Int32Host>): System.IntPtr;
  ptr(i0: number | StrongNumeric<Int32Host>, i1: number | StrongNumeric<Int32Host>): System.IntPtr;
  ptr(
    i0: number | StrongNumeric<Int32Host>,
    i1: number | StrongNumeric<Int32Host>,
    i2: number | StrongNumeric<Int32Host>
  ): System.IntPtr;
  ptr(idx: HostArray<number | StrongNumeric<Int32Host>>): System.IntPtr;
  drawContours(
    contours: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    contourIdx: number | StrongNumeric<Int32Host>,
    color: OpenCvSharp.Scalar
  ): VoidResult;
  drawContours(
    contours: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    contourIdx: number | StrongNumeric<Int32Host>,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>
  ): VoidResult;
  drawContours(
    contours: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    contourIdx: number | StrongNumeric<Int32Host>,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>
  ): VoidResult;
  drawContours(
    contours: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    contourIdx: number | StrongNumeric<Int32Host>,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>,
    hierarchy: OpenCvSharp.Mat | null
  ): VoidResult;
  drawContours(
    contours: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    contourIdx: number | StrongNumeric<Int32Host>,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>,
    hierarchy: OpenCvSharp.Mat | null,
    maxLevel: number | StrongNumeric<Int32Host>
  ): VoidResult;
  drawContours(
    contours: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    contourIdx: number | StrongNumeric<Int32Host>,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>,
    hierarchy: OpenCvSharp.Mat | null,
    maxLevel: number | StrongNumeric<Int32Host>,
    offset: OpenCvSharp.Point | null | null
  ): VoidResult;
  drawContours(
    contours: System.Collections.Generic.IEnumerable<
      System.Collections.Generic.IEnumerable<OpenCvSharp.Point>
    >,
    contourIdx: number | StrongNumeric<Int32Host>,
    color: OpenCvSharp.Scalar
  ): VoidResult;
  drawContours(
    contours: System.Collections.Generic.IEnumerable<
      System.Collections.Generic.IEnumerable<OpenCvSharp.Point>
    >,
    contourIdx: number | StrongNumeric<Int32Host>,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>
  ): VoidResult;
  drawContours(
    contours: System.Collections.Generic.IEnumerable<
      System.Collections.Generic.IEnumerable<OpenCvSharp.Point>
    >,
    contourIdx: number | StrongNumeric<Int32Host>,
    color: OpenCvSharp.Scalar,
    thickness: number | StrongNumeric<Int32Host>,
    lineType: EnumInput<OpenCvSharp.LineTypes>
  ): VoidResult;
  drawContours(
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
  readonly flags: number;
  readonly dims: number;
  readonly rows: number;
  approxPolyDP(epsilon: number | StrongNumeric<DoubleHost>, closed: boolean): OpenCvSharp.Mat;
  readonly height: number;
  readonly cols: number;
  arcLength(closed: boolean): number;
  readonly width: number;
  readonly data: System.IntPtr;
  boundingRect(): OpenCvSharp.Rect;
  contourArea(): number;
  contourArea(oriented: boolean): number;
  readonly dataStart: System.IntPtr;
  minAreaRect(): OpenCvSharp.RotatedRect;
  minEnclosingCircle(
    center: HostVariableOut<OpenCvSharp.Point2f>,
    radius: HostVariableOut<number>
  ): VoidResult;
  readonly dataEnd: System.IntPtr;
  readonly dataLimit: System.IntPtr;
  convexHull(): OpenCvSharp.Mat;
  convexHull(clockwise: boolean): OpenCvSharp.Mat;
  convexHull(clockwise: boolean, returnPoints: boolean): OpenCvSharp.Mat;
  size(): OpenCvSharp.Size;
  size(dim: number | StrongNumeric<Int32Host>): number;
  convexHullPoints(): HostArray<OpenCvSharp.Point>;
  convexHullPoints(clockwise: boolean): HostArray<OpenCvSharp.Point>;
  step(): number;
  step(i: number | StrongNumeric<Int32Host>): number;
  toString(): string;
  convexHullFloatPoints(): HostArray<OpenCvSharp.Point2f>;
  convexHullFloatPoints(clockwise: boolean): HostArray<OpenCvSharp.Point2f>;
  dump(): string;
  dump(format: EnumInput<OpenCvSharp.FormatType>): string;
  convexHullIndices(): HostArray<number>;
  convexHullIndices(clockwise: boolean): HostArray<number>;
  emptyClone(): OpenCvSharp.Mat;
  getGenericIndexer<T>(type1: HostType<T>): _MatArity0_Indexer<T>;
  getUnsafeGenericIndexer<T>(type1: HostType<T>): _MatArity0_UnsafeIndexer<T>;
  convexityDefects(convexHull: OpenCvSharp.InputArray): OpenCvSharp.Mat;
  convexityDefectsAsVec(convexHull: OpenCvSharp.InputArray): HostArray<OpenCvSharp.Vec4i>;
  isContourConvex(): boolean;
  fitEllipse(): OpenCvSharp.RotatedRect;
  fitLine2D(
    distType: EnumInput<OpenCvSharp.DistanceTypes>,
    param: number | StrongNumeric<DoubleHost>,
    reps: number | StrongNumeric<DoubleHost>,
    aeps: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Line2D;
  fitLine3D(
    distType: EnumInput<OpenCvSharp.DistanceTypes>,
    param: number | StrongNumeric<DoubleHost>,
    reps: number | StrongNumeric<DoubleHost>,
    aeps: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Line3D;
  pointPolygonTest(pt: OpenCvSharp.Point2f, measureDist: boolean): number;
  distanceTransform(
    distanceType: EnumInput<OpenCvSharp.DistanceTypes>,
    maskSize: EnumInput<OpenCvSharp.DistanceTransformMasks>
  ): OpenCvSharp.Mat<number>;
  get<T>(type1: HostType<T>, ...idx: (number | StrongNumeric<Int32Host>)[]): T;
  get<T>(type1: HostType<T>, i0: number | StrongNumeric<Int32Host>): T;
  get<T>(
    type1: HostType<T>,
    i0: number | StrongNumeric<Int32Host>,
    i1: number | StrongNumeric<Int32Host>
  ): T;
  get<T>(
    type1: HostType<T>,
    i0: number | StrongNumeric<Int32Host>,
    i1: number | StrongNumeric<Int32Host>,
    i2: number | StrongNumeric<Int32Host>
  ): T;
  get<T>(type1: HostType<T>, idx: HostArray<number | StrongNumeric<Int32Host>>): T;
  set<T>(
    type1: HostType<T>,
    i0: number | StrongNumeric<Int32Host>,
    i1: number | StrongNumeric<Int32Host>,
    i2: number | StrongNumeric<Int32Host>,
    value: T
  ): VoidResult;
  set<T>(
    type1: HostType<T>,
    i0: number | StrongNumeric<Int32Host>,
    i1: number | StrongNumeric<Int32Host>,
    value: T
  ): VoidResult;
  set<T>(type1: HostType<T>, i0: number | StrongNumeric<Int32Host>, value: T): VoidResult;
  set<T>(
    type1: HostType<T>,
    idx: HostArray<number | StrongNumeric<Int32Host>>,
    value: T
  ): VoidResult;
  getArray<T>(type1: HostType<T>, data: HostVariableOut<HostArray<T>>): boolean;
  getRectangularArray<T>(type1: HostType<T>, data: HostVariableOut<HostArray<T>>): boolean;
  setArray<T>(type1: HostType<T>, ...data: T[]): boolean;
  setArray<T>(type1: HostType<T>, data: HostArray<T>): boolean;
  setRectangularArray<T>(type1: HostType<T>, data: HostArray<T>): boolean;
  toBytes(): HostArray<number>;
  toBytes(ext: string): HostArray<number>;
  toBytes(ext: string, ...prms: OpenCvSharp.ImageEncodingParam[]): HostArray<number>;
  toBytes(ext: string, prms: HostArray<OpenCvSharp.ImageEncodingParam>): HostArray<number>;
  toBytes(
    ext: string,
    prms: HostArray<number | StrongNumeric<Int32Host>> | null
  ): HostArray<number>;
  toMemoryStream(ext: string, ...prms: OpenCvSharp.ImageEncodingParam[]): System.IO.MemoryStream;
  toMemoryStream(
    ext: string,
    prms: HostArray<OpenCvSharp.ImageEncodingParam>
  ): System.IO.MemoryStream;
  writeToStream(
    stream: System.IO.Stream,
    ext: string,
    ...prms: OpenCvSharp.ImageEncodingParam[]
  ): VoidResult;
  writeToStream(
    stream: System.IO.Stream,
    ext: string,
    prms: HostArray<OpenCvSharp.ImageEncodingParam>
  ): VoidResult;
  alignment(): OpenCvSharp.Mat;
  alignment(n: number | StrongNumeric<Int32Host>): OpenCvSharp.Mat;
  cast<TMat>(type1: HostType<TMat>): TMat;
  forEachAsByte(operation: OpenCvSharp.MatForeachFunctionByte): VoidResult;
  forEachAsVec2b(operation: OpenCvSharp.MatForeachFunctionVec2b): VoidResult;
  forEachAsVec3b(operation: OpenCvSharp.MatForeachFunctionVec3b): VoidResult;
  forEachAsVec4b(operation: OpenCvSharp.MatForeachFunctionVec4b): VoidResult;
  forEachAsVec6b(operation: OpenCvSharp.MatForeachFunctionVec6b): VoidResult;
  forEachAsInt16(operation: OpenCvSharp.MatForeachFunctionInt16): VoidResult;
  forEachAsVec2s(operation: OpenCvSharp.MatForeachFunctionVec2s): VoidResult;
  forEachAsVec3s(operation: OpenCvSharp.MatForeachFunctionVec3s): VoidResult;
  forEachAsVec4s(operation: OpenCvSharp.MatForeachFunctionVec4s): VoidResult;
  forEachAsVec6s(operation: OpenCvSharp.MatForeachFunctionVec6s): VoidResult;
  forEachAsInt32(operation: OpenCvSharp.MatForeachFunctionInt32): VoidResult;
  forEachAsVec2i(operation: OpenCvSharp.MatForeachFunctionVec2i): VoidResult;
  forEachAsVec3i(operation: OpenCvSharp.MatForeachFunctionVec3i): VoidResult;
  forEachAsVec4i(operation: OpenCvSharp.MatForeachFunctionVec4i): VoidResult;
  forEachAsVec6i(operation: OpenCvSharp.MatForeachFunctionVec6i): VoidResult;
  forEachAsFloat(operation: OpenCvSharp.MatForeachFunctionFloat): VoidResult;
  forEachAsVec2f(operation: OpenCvSharp.MatForeachFunctionVec2f): VoidResult;
  forEachAsVec3f(operation: OpenCvSharp.MatForeachFunctionVec3f): VoidResult;
  forEachAsVec4f(operation: OpenCvSharp.MatForeachFunctionVec4f): VoidResult;
  forEachAsVec6f(operation: OpenCvSharp.MatForeachFunctionVec6f): VoidResult;
  forEachAsDouble(operation: OpenCvSharp.MatForeachFunctionDouble): VoidResult;
  forEachAsVec2d(operation: OpenCvSharp.MatForeachFunctionVec2d): VoidResult;
  forEachAsVec3d(operation: OpenCvSharp.MatForeachFunctionVec3d): VoidResult;
  forEachAsVec4d(operation: OpenCvSharp.MatForeachFunctionVec4d): VoidResult;
  forEachAsVec6d(operation: OpenCvSharp.MatForeachFunctionVec6d): VoidResult;
}

declare const matArity0_IndexerBrand: unique symbol;
export interface _MatArity0_Indexer<T> extends Omit<OpenCvSharp.MatIndexer<T>, "item"> {
  readonly [matArity0_IndexerBrand]: true;
  item: {
    (i0: number | StrongNumeric<Int32Host>): T;
    get(i0: number | StrongNumeric<Int32Host>): T;
    set(i0: number | StrongNumeric<Int32Host>, value: T): T;
    (i0: number | StrongNumeric<Int32Host>, i1: number | StrongNumeric<Int32Host>): T;
    get(i0: number | StrongNumeric<Int32Host>, i1: number | StrongNumeric<Int32Host>): T;
    set(i0: number | StrongNumeric<Int32Host>, i1: number | StrongNumeric<Int32Host>, value: T): T;
    (
      i0: number | StrongNumeric<Int32Host>,
      i1: number | StrongNumeric<Int32Host>,
      i2: number | StrongNumeric<Int32Host>
    ): T;
    get(
      i0: number | StrongNumeric<Int32Host>,
      i1: number | StrongNumeric<Int32Host>,
      i2: number | StrongNumeric<Int32Host>
    ): T;
    set(
      i0: number | StrongNumeric<Int32Host>,
      i1: number | StrongNumeric<Int32Host>,
      i2: number | StrongNumeric<Int32Host>,
      value: T
    ): T;
    (idx: HostArray<number | StrongNumeric<Int32Host>>): T;
    get(idx: HostArray<number | StrongNumeric<Int32Host>>): T;
    set(idx: HostArray<number | StrongNumeric<Int32Host>>, value: T): T;
  };
}

export interface _MatArity0_IndexerHostType<T> extends HostType<
  _MatArity0_Indexer<T>,
  ReferenceTypeTrait
> {}

declare global {
  namespace OpenCvSharp.Mat {
    type Indexer<T> = import("./Mat")._MatArity0_Indexer<T>;
  }
}

declare const matArity0_UnsafeIndexerBrand: unique symbol;
export interface _MatArity0_UnsafeIndexer<T> extends Omit<OpenCvSharp.MatIndexer<T>, "item"> {
  readonly [matArity0_UnsafeIndexerBrand]: true;
  item: {
    (i0: number | StrongNumeric<Int32Host>): T;
    get(i0: number | StrongNumeric<Int32Host>): T;
    set(i0: number | StrongNumeric<Int32Host>, value: T): T;
    (i0: number | StrongNumeric<Int32Host>, i1: number | StrongNumeric<Int32Host>): T;
    get(i0: number | StrongNumeric<Int32Host>, i1: number | StrongNumeric<Int32Host>): T;
    set(i0: number | StrongNumeric<Int32Host>, i1: number | StrongNumeric<Int32Host>, value: T): T;
    (
      i0: number | StrongNumeric<Int32Host>,
      i1: number | StrongNumeric<Int32Host>,
      i2: number | StrongNumeric<Int32Host>
    ): T;
    get(
      i0: number | StrongNumeric<Int32Host>,
      i1: number | StrongNumeric<Int32Host>,
      i2: number | StrongNumeric<Int32Host>
    ): T;
    set(
      i0: number | StrongNumeric<Int32Host>,
      i1: number | StrongNumeric<Int32Host>,
      i2: number | StrongNumeric<Int32Host>,
      value: T
    ): T;
    (idx: HostArray<number | StrongNumeric<Int32Host>>): T;
    get(idx: HostArray<number | StrongNumeric<Int32Host>>): T;
    set(idx: HostArray<number | StrongNumeric<Int32Host>>, value: T): T;
  };
}

export interface _MatArity0_UnsafeIndexerHostType<T> extends HostType<
  _MatArity0_UnsafeIndexer<T>,
  ReferenceTypeTrait
> {}

declare global {
  namespace OpenCvSharp.Mat {
    type UnsafeIndexer<T> = import("./Mat")._MatArity0_UnsafeIndexer<T>;
  }
}

export interface _MatArity0HostType extends HostType<
  _MatArity0,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): _MatArity0;
  new (fileName: string): _MatArity0;
  new (fileName: string, flags: EnumInput<OpenCvSharp.ImreadModes>): _MatArity0;
  new (
    rows: number | StrongNumeric<Int32Host>,
    cols: number | StrongNumeric<Int32Host>,
    type: OpenCvSharp.MatType
  ): _MatArity0;
  new (size: OpenCvSharp.Size, type: OpenCvSharp.MatType): _MatArity0;
  new (
    rows: number | StrongNumeric<Int32Host>,
    cols: number | StrongNumeric<Int32Host>,
    type: OpenCvSharp.MatType,
    s: OpenCvSharp.Scalar
  ): _MatArity0;
  new (size: OpenCvSharp.Size, type: OpenCvSharp.MatType, s: OpenCvSharp.Scalar): _MatArity0;
  new (m: OpenCvSharp.Mat, rowRange: OpenCvSharp.Range): _MatArity0;
  new (
    m: OpenCvSharp.Mat,
    rowRange: OpenCvSharp.Range,
    colRange: OpenCvSharp.Range | null | null
  ): _MatArity0;
  new (m: OpenCvSharp.Mat, ranges: HostArray<OpenCvSharp.Range>): _MatArity0;
  new (m: OpenCvSharp.Mat, ...ranges: OpenCvSharp.Range[]): _MatArity0;
  new (m: OpenCvSharp.Mat, roi: OpenCvSharp.Rect): _MatArity0;
  new (
    rows: number | StrongNumeric<Int32Host>,
    cols: number | StrongNumeric<Int32Host>,
    type: OpenCvSharp.MatType,
    data: System.IntPtr
  ): _MatArity0;
  new (
    rows: number | StrongNumeric<Int32Host>,
    cols: number | StrongNumeric<Int32Host>,
    type: OpenCvSharp.MatType,
    data: System.IntPtr,
    step: number | StrongNumeric<Int64Host>
  ): _MatArity0;
  new (
    sizes: System.Collections.Generic.IEnumerable<number>,
    type: OpenCvSharp.MatType
  ): _MatArity0;
  new (
    sizes: System.Collections.Generic.IEnumerable<number>,
    type: OpenCvSharp.MatType,
    s: OpenCvSharp.Scalar
  ): _MatArity0;
  fromNativePointer(ptr: System.IntPtr): OpenCvSharp.Mat;
  fromPixelData(
    rows: number | StrongNumeric<Int32Host>,
    cols: number | StrongNumeric<Int32Host>,
    type: OpenCvSharp.MatType,
    data: System.IntPtr
  ): OpenCvSharp.Mat;
  fromPixelData(
    rows: number | StrongNumeric<Int32Host>,
    cols: number | StrongNumeric<Int32Host>,
    type: OpenCvSharp.MatType,
    data: System.IntPtr,
    step: number | StrongNumeric<Int64Host>
  ): OpenCvSharp.Mat;
  fromPixelData(
    rows: number | StrongNumeric<Int32Host>,
    cols: number | StrongNumeric<Int32Host>,
    type: OpenCvSharp.MatType,
    data: System.Array
  ): OpenCvSharp.Mat;
  fromPixelData(
    rows: number | StrongNumeric<Int32Host>,
    cols: number | StrongNumeric<Int32Host>,
    type: OpenCvSharp.MatType,
    data: System.Array,
    step: number | StrongNumeric<Int64Host>
  ): OpenCvSharp.Mat;
  fromPixelData(
    sizes: System.Collections.Generic.IEnumerable<number>,
    type: OpenCvSharp.MatType,
    data: System.IntPtr
  ): OpenCvSharp.Mat;
  fromPixelData(
    sizes: System.Collections.Generic.IEnumerable<number>,
    type: OpenCvSharp.MatType,
    data: System.IntPtr,
    steps: System.Collections.Generic.IEnumerable<number> | null
  ): OpenCvSharp.Mat;
  fromPixelData(
    sizes: System.Collections.Generic.IEnumerable<number>,
    type: OpenCvSharp.MatType,
    data: System.Array
  ): OpenCvSharp.Mat;
  fromPixelData(
    sizes: System.Collections.Generic.IEnumerable<number>,
    type: OpenCvSharp.MatType,
    data: System.Array,
    steps: System.Collections.Generic.IEnumerable<number> | null
  ): OpenCvSharp.Mat;
  fromStream(stream: System.IO.Stream, mode: EnumInput<OpenCvSharp.ImreadModes>): OpenCvSharp.Mat;
  imDecode(imageBytes: HostArray<number | StrongNumeric<ByteHost>>): OpenCvSharp.Mat;
  imDecode(
    imageBytes: HostArray<number | StrongNumeric<ByteHost>>,
    mode: EnumInput<OpenCvSharp.ImreadModes>
  ): OpenCvSharp.Mat;
  fromImageData(imageBytes: HostArray<number | StrongNumeric<ByteHost>>): OpenCvSharp.Mat;
  fromImageData(
    imageBytes: HostArray<number | StrongNumeric<ByteHost>>,
    mode: EnumInput<OpenCvSharp.ImreadModes>
  ): OpenCvSharp.Mat;
  diag(d: OpenCvSharp.Mat): OpenCvSharp.Mat;
  zeros(
    rows: number | StrongNumeric<Int32Host>,
    cols: number | StrongNumeric<Int32Host>,
    type: OpenCvSharp.MatType
  ): OpenCvSharp.MatExpr;
  zeros(size: OpenCvSharp.Size, type: OpenCvSharp.MatType): OpenCvSharp.MatExpr;
  zeros(
    type: OpenCvSharp.MatType,
    sizes: HostArray<number | StrongNumeric<Int32Host>>
  ): OpenCvSharp.MatExpr;
  zeros(
    type: OpenCvSharp.MatType,
    ...sizes: (number | StrongNumeric<Int32Host>)[]
  ): OpenCvSharp.MatExpr;
  ones(
    rows: number | StrongNumeric<Int32Host>,
    cols: number | StrongNumeric<Int32Host>,
    type: OpenCvSharp.MatType
  ): OpenCvSharp.MatExpr;
  ones(size: OpenCvSharp.Size, type: OpenCvSharp.MatType): OpenCvSharp.MatExpr;
  ones(
    type: OpenCvSharp.MatType,
    sizes: HostArray<number | StrongNumeric<Int32Host>>
  ): OpenCvSharp.MatExpr;
  ones(
    type: OpenCvSharp.MatType,
    ...sizes: (number | StrongNumeric<Int32Host>)[]
  ): OpenCvSharp.MatExpr;
  eye(size: OpenCvSharp.Size, type: OpenCvSharp.MatType): OpenCvSharp.MatExpr;
  eye(
    rows: number | StrongNumeric<Int32Host>,
    cols: number | StrongNumeric<Int32Host>,
    type: OpenCvSharp.MatType
  ): OpenCvSharp.MatExpr;
  fromArray<TElem>(type1: HostType<TElem>, arr: HostArray<TElem>): OpenCvSharp.Mat<TElem>;
  fromArray<TElem>(type1: HostType<TElem>, ...arr: TElem[]): OpenCvSharp.Mat<TElem>;
  fromArray<TElem>(type1: HostType<TElem>, arr: HostArray<TElem>): OpenCvSharp.Mat<TElem>;
  fromArray<TElem>(
    type1: HostType<TElem>,
    enumerable: System.Collections.Generic.IEnumerable<TElem>
  ): OpenCvSharp.Mat<TElem>;
  readonly Indexer: _MatArity0_IndexerHostType<any>;
  readonly UnsafeIndexer: _MatArity0_UnsafeIndexerHostType<any>;
}

declare const matArity1Brand: unique symbol;
export interface _MatArity1<TElem>
  extends
    Omit<
      _MatArity0,
      | "clone"
      | "getEnumerator"
      | "getIndexer"
      | "item"
      | "reshape"
      | "subMat"
      | "t"
      | "toArray"
      | "toRectangularArray"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [matArity1Brand]: true;
  getIndexer(): OpenCvSharp.MatIndexer<TElem>;
  getEnumerator(): System.Collections.Generic.IEnumerator<TElem>;
  toArray(): HostArray<TElem>;
  toRectangularArray(): HostArray<TElem>;
  clone(): OpenCvSharp.Mat;
  reshape(...newDims: (number | StrongNumeric<Int32Host>)[]): OpenCvSharp.Mat;
  reshape(newDims: HostArray<number | StrongNumeric<Int32Host>>): OpenCvSharp.Mat;
  reshape(rows: number | StrongNumeric<Int32Host>): OpenCvSharp.Mat;
  t(): OpenCvSharp.Mat;
  subMat(...ranges: OpenCvSharp.Range[]): OpenCvSharp.Mat;
  subMat(ranges: HostArray<OpenCvSharp.Range>): OpenCvSharp.Mat;
  subMat(roi: OpenCvSharp.Rect): OpenCvSharp.Mat;
  subMat(rowRange: OpenCvSharp.Range, colRange: OpenCvSharp.Range): OpenCvSharp.Mat;
  subMat(
    rowStart: number | StrongNumeric<Int32Host>,
    rowEnd: number | StrongNumeric<Int32Host>,
    colStart: number | StrongNumeric<Int32Host>,
    colEnd: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Mat;
  item: {
    (
      rowStart: number | StrongNumeric<Int32Host>,
      rowEnd: number | StrongNumeric<Int32Host>,
      colStart: number | StrongNumeric<Int32Host>,
      colEnd: number | StrongNumeric<Int32Host>
    ): OpenCvSharp.Mat;
    get(
      rowStart: number | StrongNumeric<Int32Host>,
      rowEnd: number | StrongNumeric<Int32Host>,
      colStart: number | StrongNumeric<Int32Host>,
      colEnd: number | StrongNumeric<Int32Host>
    ): OpenCvSharp.Mat;
    set(
      rowStart: number | StrongNumeric<Int32Host>,
      rowEnd: number | StrongNumeric<Int32Host>,
      colStart: number | StrongNumeric<Int32Host>,
      colEnd: number | StrongNumeric<Int32Host>,
      value: OpenCvSharp.Mat
    ): OpenCvSharp.Mat;
    (rowRange: OpenCvSharp.Range, colRange: OpenCvSharp.Range): OpenCvSharp.Mat;
    get(rowRange: OpenCvSharp.Range, colRange: OpenCvSharp.Range): OpenCvSharp.Mat;
    set(
      rowRange: OpenCvSharp.Range,
      colRange: OpenCvSharp.Range,
      value: OpenCvSharp.Mat
    ): OpenCvSharp.Mat;
    (roi: OpenCvSharp.Rect): OpenCvSharp.Mat;
    get(roi: OpenCvSharp.Rect): OpenCvSharp.Mat;
    set(roi: OpenCvSharp.Rect, value: OpenCvSharp.Mat): OpenCvSharp.Mat;
    (ranges: HostArray<OpenCvSharp.Range>): OpenCvSharp.Mat;
    get(ranges: HostArray<OpenCvSharp.Range>): OpenCvSharp.Mat;
    set(ranges: HostArray<OpenCvSharp.Range>, value: OpenCvSharp.Mat): OpenCvSharp.Mat;
  };
}

declare const matArity1_IndexerBrand: unique symbol;
export interface _MatArity1_Indexer<TElem> extends Omit<OpenCvSharp.MatIndexer<TElem>, "item"> {
  readonly [matArity1_IndexerBrand]: true;
  item: {
    (i0: number | StrongNumeric<Int32Host>): TElem;
    get(i0: number | StrongNumeric<Int32Host>): TElem;
    set(i0: number | StrongNumeric<Int32Host>, value: TElem): TElem;
    (i0: number | StrongNumeric<Int32Host>, i1: number | StrongNumeric<Int32Host>): TElem;
    get(i0: number | StrongNumeric<Int32Host>, i1: number | StrongNumeric<Int32Host>): TElem;
    set(
      i0: number | StrongNumeric<Int32Host>,
      i1: number | StrongNumeric<Int32Host>,
      value: TElem
    ): TElem;
    (
      i0: number | StrongNumeric<Int32Host>,
      i1: number | StrongNumeric<Int32Host>,
      i2: number | StrongNumeric<Int32Host>
    ): TElem;
    get(
      i0: number | StrongNumeric<Int32Host>,
      i1: number | StrongNumeric<Int32Host>,
      i2: number | StrongNumeric<Int32Host>
    ): TElem;
    set(
      i0: number | StrongNumeric<Int32Host>,
      i1: number | StrongNumeric<Int32Host>,
      i2: number | StrongNumeric<Int32Host>,
      value: TElem
    ): TElem;
    (idx: HostArray<number | StrongNumeric<Int32Host>>): TElem;
    get(idx: HostArray<number | StrongNumeric<Int32Host>>): TElem;
    set(idx: HostArray<number | StrongNumeric<Int32Host>>, value: TElem): TElem;
  };
}

export interface _MatArity1_IndexerHostType<TElem> extends HostType<
  _MatArity1_Indexer<TElem>,
  ReferenceTypeTrait
> {}

export interface _MatArity1HostType<TElem> extends HostType<
  _MatArity1<TElem>,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): _MatArity1<TElem>;
  new (mat: OpenCvSharp.Mat): _MatArity1<TElem>;
  new (
    rows: number | StrongNumeric<Int32Host>,
    cols: number | StrongNumeric<Int32Host>
  ): _MatArity1<TElem>;
  new (size: OpenCvSharp.Size): _MatArity1<TElem>;
  new (
    rows: number | StrongNumeric<Int32Host>,
    cols: number | StrongNumeric<Int32Host>,
    s: OpenCvSharp.Scalar
  ): _MatArity1<TElem>;
  new (size: OpenCvSharp.Size, s: OpenCvSharp.Scalar): _MatArity1<TElem>;
  new (m: OpenCvSharp.Mat, rowRange: OpenCvSharp.Range): _MatArity1<TElem>;
  new (
    m: OpenCvSharp.Mat,
    rowRange: OpenCvSharp.Range,
    colRange: OpenCvSharp.Range | null | null
  ): _MatArity1<TElem>;
  new (m: OpenCvSharp.Mat, roi: OpenCvSharp.Rect): _MatArity1<TElem>;
  new (
    sizes: System.Collections.Generic.IEnumerable<number>,
    data: System.Array
  ): _MatArity1<TElem>;
  new (
    sizes: System.Collections.Generic.IEnumerable<number>,
    data: System.Array,
    steps: System.Collections.Generic.IEnumerable<number> | null
  ): _MatArity1<TElem>;
  new (sizes: System.Collections.Generic.IEnumerable<number>): _MatArity1<TElem>;
  new (
    sizes: System.Collections.Generic.IEnumerable<number>,
    s: OpenCvSharp.Scalar
  ): _MatArity1<TElem>;
  fromNativePointer(ptr: System.IntPtr): OpenCvSharp.Mat;
  fromPixelData(
    rows: number | StrongNumeric<Int32Host>,
    cols: number | StrongNumeric<Int32Host>,
    data: System.IntPtr
  ): OpenCvSharp.Mat;
  fromPixelData(
    rows: number | StrongNumeric<Int32Host>,
    cols: number | StrongNumeric<Int32Host>,
    data: System.IntPtr,
    step: number | StrongNumeric<Int64Host>
  ): OpenCvSharp.Mat;
  fromPixelData(
    rows: number | StrongNumeric<Int32Host>,
    cols: number | StrongNumeric<Int32Host>,
    data: System.Array
  ): OpenCvSharp.Mat;
  fromPixelData(
    rows: number | StrongNumeric<Int32Host>,
    cols: number | StrongNumeric<Int32Host>,
    data: System.Array,
    step: number | StrongNumeric<Int64Host>
  ): OpenCvSharp.Mat;
  fromPixelData(
    sizes: System.Collections.Generic.IEnumerable<number>,
    data: System.IntPtr
  ): OpenCvSharp.Mat;
  fromPixelData(
    sizes: System.Collections.Generic.IEnumerable<number>,
    data: System.IntPtr,
    steps: System.Collections.Generic.IEnumerable<number> | null
  ): OpenCvSharp.Mat;
  readonly Indexer: _MatArity1_IndexerHostType<any>;
}

export type MatFamily<T1 = FamilyArgumentOmitted> =
  IsFamilyArgumentOmitted<T1> extends true ? _MatArity0 : _MatArity1<T1>;

declare global {
  namespace OpenCvSharp {
    type Mat<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> = import("./Mat").MatFamily<T1>;
  }
}

export type MatHostType = _MatArity0HostType;

export {};
