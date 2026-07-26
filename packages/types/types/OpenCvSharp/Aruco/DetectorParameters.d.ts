import type {
  ClrHostValue,
  HostType,
  PublicDefaultConstructorTrait,
  ValueTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import "../../System/ValueType";
import "./CornerRefineMethod";

declare const detectorParametersBrand: unique symbol;
export interface DetectorParameters extends ClrHostValue {
  readonly [detectorParametersBrand]: true;
  adaptiveThreshWinSizeMin: number;
  adaptiveThreshWinSizeMax: number;
  adaptiveThreshWinSizeStep: number;
  adaptiveThreshConstant: number;
  minMarkerPerimeterRate: number;
  maxMarkerPerimeterRate: number;
  polygonalApproxAccuracyRate: number;
  minCornerDistanceRate: number;
  minDistanceToBorder: number;
  minMarkerDistanceRate: number;
  cornerRefinementMethod: OpenCvSharp.Aruco.CornerRefineMethod;
  cornerRefinementWinSize: number;
  cornerRefinementMaxIterations: number;
  cornerRefinementMinAccuracy: number;
  markerBorderBits: number;
  perspectiveRemovePixelPerCell: number;
  perspectiveRemoveIgnoredMarginPerCell: number;
  maxErroneousBitsInBorderRate: number;
  minOtsuStdDev: number;
  errorCorrectionRate: number;
  aprilTagQuadDecimate: number;
  aprilTagQuadSigma: number;
  aprilTagMinClusterPixels: number;
  aprilTagMaxNmaxima: number;
  aprilTagCriticalRad: number;
  aprilTagMaxLineFitMse: number;
  aprilTagMinWhiteBlackDiff: number;
  aprilTagDeglitch: number;
  detectInvertedMarker: boolean;
  useAruco3Detection: boolean;
  minSideLengthCanonicalImg: number;
  minMarkerLengthRatioOriginalImg: number;
}

declare global {
  namespace OpenCvSharp.Aruco {
    type DetectorParameters = import("./DetectorParameters").DetectorParameters;
  }
}

export interface DetectorParametersHostType extends HostType<
  DetectorParameters,
  ValueTypeTrait & PublicDefaultConstructorTrait
> {
  new (): DetectorParameters;
}

export {};
