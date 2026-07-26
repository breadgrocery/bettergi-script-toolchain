import type {
  ClrHostValue,
  EnumInput,
  HostArray,
  HostType,
  SingleHost,
  StaticTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../../System/Collections/Generic/IEnumerable";
import "../InputArray";
import "../OutputArray";
import "../Point2f";
import "../Scalar";
import "../Vec4i";
import "./DetectorParameters";
import "./Dictionary";
import "./PredefinedDictionaryName";

declare const cvArucoBrand: unique symbol;
export interface CvAruco extends ClrHostValue {
  readonly [cvArucoBrand]: true;
}

declare global {
  namespace OpenCvSharp.Aruco {
    type CvAruco = import("./CvAruco").CvAruco;
  }
}

export interface CvArucoHostType extends HostType<CvAruco, StaticTypeTrait> {
  detectMarkers(
    image: OpenCvSharp.InputArray,
    dictionary: OpenCvSharp.Aruco.Dictionary,
    corners: HostVariableOut<HostArray<HostArray<OpenCvSharp.Point2f>>>,
    ids: HostVariableOut<HostArray<number>>,
    parameters: OpenCvSharp.Aruco.DetectorParameters,
    rejectedImgPoints: HostVariableOut<HostArray<HostArray<OpenCvSharp.Point2f>>>
  ): VoidResult;
  estimatePoseSingleMarkers(
    corners: HostArray<HostArray<OpenCvSharp.Point2f>>,
    markerLength: number | StrongNumeric<SingleHost>,
    cameraMatrix: OpenCvSharp.InputArray,
    distortionCoefficients: OpenCvSharp.InputArray,
    rvec: OpenCvSharp.OutputArray,
    tvec: OpenCvSharp.OutputArray
  ): VoidResult;
  estimatePoseSingleMarkers(
    corners: HostArray<HostArray<OpenCvSharp.Point2f>>,
    markerLength: number | StrongNumeric<SingleHost>,
    cameraMatrix: OpenCvSharp.InputArray,
    distortionCoefficients: OpenCvSharp.InputArray,
    rvec: OpenCvSharp.OutputArray,
    tvec: OpenCvSharp.OutputArray,
    objPoints: OpenCvSharp.OutputArray | null
  ): VoidResult;
  drawDetectedMarkers(
    image: OpenCvSharp.InputArray,
    corners: HostArray<HostArray<OpenCvSharp.Point2f>>,
    ids: System.Collections.Generic.IEnumerable<number>
  ): VoidResult;
  drawDetectedMarkers(
    image: OpenCvSharp.InputArray,
    corners: HostArray<HostArray<OpenCvSharp.Point2f>>,
    ids: System.Collections.Generic.IEnumerable<number> | null,
    borderColor: OpenCvSharp.Scalar
  ): VoidResult;
  getPredefinedDictionary(
    name: EnumInput<OpenCvSharp.Aruco.PredefinedDictionaryName>
  ): OpenCvSharp.Aruco.Dictionary;
  readDictionary(dictionaryFile: string): OpenCvSharp.Aruco.Dictionary;
  detectCharucoDiamond(
    image: OpenCvSharp.InputArray,
    markerCorners: HostArray<HostArray<OpenCvSharp.Point2f>>,
    markerIds: System.Collections.Generic.IEnumerable<number>,
    squareMarkerLengthRate: number | StrongNumeric<SingleHost>,
    diamondCorners: HostVariableOut<HostArray<HostArray<OpenCvSharp.Point2f>>>,
    diamondIds: HostVariableOut<HostArray<OpenCvSharp.Vec4i>>
  ): VoidResult;
  detectCharucoDiamond(
    image: OpenCvSharp.InputArray,
    markerCorners: HostArray<HostArray<OpenCvSharp.Point2f>>,
    markerIds: System.Collections.Generic.IEnumerable<number>,
    squareMarkerLengthRate: number | StrongNumeric<SingleHost>,
    diamondCorners: HostVariableOut<HostArray<HostArray<OpenCvSharp.Point2f>>>,
    diamondIds: HostVariableOut<HostArray<OpenCvSharp.Vec4i>>,
    cameraMatrix: OpenCvSharp.InputArray | null
  ): VoidResult;
  detectCharucoDiamond(
    image: OpenCvSharp.InputArray,
    markerCorners: HostArray<HostArray<OpenCvSharp.Point2f>>,
    markerIds: System.Collections.Generic.IEnumerable<number>,
    squareMarkerLengthRate: number | StrongNumeric<SingleHost>,
    diamondCorners: HostVariableOut<HostArray<HostArray<OpenCvSharp.Point2f>>>,
    diamondIds: HostVariableOut<HostArray<OpenCvSharp.Vec4i>>,
    cameraMatrix: OpenCvSharp.InputArray | null,
    distCoeffs: OpenCvSharp.InputArray | null
  ): VoidResult;
  drawDetectedDiamonds(
    image: OpenCvSharp.InputArray,
    diamondCorners: HostArray<HostArray<OpenCvSharp.Point2f>>
  ): VoidResult;
  drawDetectedDiamonds(
    image: OpenCvSharp.InputArray,
    diamondCorners: HostArray<HostArray<OpenCvSharp.Point2f>>,
    diamondIds: System.Collections.Generic.IEnumerable<OpenCvSharp.Vec4i> | null
  ): VoidResult;
  drawDetectedDiamonds(
    image: OpenCvSharp.InputArray,
    diamondCorners: HostArray<HostArray<OpenCvSharp.Point2f>>,
    diamondIds: System.Collections.Generic.IEnumerable<OpenCvSharp.Vec4i> | null,
    borderColor: OpenCvSharp.Scalar
  ): VoidResult;
}

export {};
