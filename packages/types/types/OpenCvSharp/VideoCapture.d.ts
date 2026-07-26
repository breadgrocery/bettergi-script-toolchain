import type {
  DoubleHost,
  EnumInput,
  HostArray,
  HostType,
  Int32Host,
  Int64Host,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/Collections/Generic/IEnumerable";
import "../System/IDisposable";
import "./CameraChannels";
import "./CapturePosRatio";
import "./CaptureType";
import "./DisposableCvObject";
import "./ICvPtrHolder";
import "./Mat";
import "./OutputArray";
import "./VideoCaptureAPIs";
import "./VideoCapturePara";
import "./VideoCaptureProperties";

declare const videoCaptureBrand: unique symbol;
export interface VideoCapture
  extends
    Omit<
      OpenCvSharp.DisposableCvObject,
      | "autoExposure"
      | "autoFocus"
      | "backLight"
      | "brightness"
      | "bufferSize"
      | "captureType"
      | "contrast"
      | "convertRgb"
      | "exposure"
      | "focus"
      | "format"
      | "fourCC"
      | "fps"
      | "frameCount"
      | "frameHeight"
      | "frameWidth"
      | "gStreamerQueueLength"
      | "gain"
      | "gamma"
      | "get"
      | "getBackendName"
      | "getExceptionMode"
      | "grab"
      | "guid"
      | "hue"
      | "iris"
      | "isOpened"
      | "isoSpeed"
      | "mode"
      | "monocrome"
      | "open"
      | "openNI_Baseline"
      | "openNI_DepthGeneratorBaseline"
      | "openNI_DepthGeneratorFocalLength"
      | "openNI_DepthGeneratorRegistrationON"
      | "openNI_FocalLength"
      | "openNI_FrameMaxDepth"
      | "openNI_ImageGeneratorOutputMode"
      | "openNI_OutputMode"
      | "openNI_Registration"
      | "pan"
      | "posAviRatio"
      | "posFrames"
      | "posMsec"
      | "pvAPIMulticastIP"
      | "read"
      | "rectification"
      | "release"
      | "retrieve"
      | "retrieveMat"
      | "roll"
      | "saturation"
      | "set"
      | "setExceptionMode"
      | "settings"
      | "sharpness"
      | "temperature"
      | "tilt"
      | "trigger"
      | "triggerDelay"
      | "whiteBalanceBlueU"
      | "whiteBalanceRedV"
      | "xI_AEAG"
      | "xI_AEAGLevel"
      | "xI_AEMaxLimit"
      | "xI_AGMaxLimit"
      | "xI_AutoWB"
      | "xI_DataFormat"
      | "xI_Downsampling"
      | "xI_ExpPriority"
      | "xI_GpiLevel"
      | "xI_GpiMode"
      | "xI_GpiSelector"
      | "xI_GpoMode"
      | "xI_GpoSelector"
      | "xI_LedMode"
      | "xI_LedSelector"
      | "xI_ManualWB"
      | "xI_OffsetX"
      | "xI_OffsetY"
      | "xI_Timeout"
      | "xI_TrgSoftware"
      | "xI_TrgSource"
      | "zoom"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [videoCaptureBrand]: true;
  readonly captureType: OpenCvSharp.CaptureType;
  posMsec: number;
  posFrames: number;
  posAviRatio: OpenCvSharp.CapturePosAviRatio;
  frameWidth: number;
  frameHeight: number;
  fps: number;
  fourCC: string;
  readonly frameCount: number;
  brightness: number;
  contrast: number;
  saturation: number;
  hue: number;
  format: number;
  mode: number;
  gain: number;
  exposure: number;
  convertRgb: boolean;
  whiteBalanceBlueU: number;
  rectification: number;
  monocrome: number;
  sharpness: number;
  autoExposure: number;
  gamma: number;
  temperature: number;
  trigger: number;
  triggerDelay: number;
  whiteBalanceRedV: number;
  zoom: number;
  focus: number;
  guid: number;
  isoSpeed: number;
  backLight: number;
  pan: number;
  tilt: number;
  roll: number;
  iris: number;
  settings: number;
  bufferSize: number;
  autoFocus: boolean;
  openNI_OutputMode: number;
  openNI_FrameMaxDepth: number;
  openNI_Baseline: number;
  openNI_FocalLength: number;
  openNI_Registration: number;
  openNI_ImageGeneratorOutputMode: number;
  openNI_DepthGeneratorBaseline: number;
  openNI_DepthGeneratorFocalLength: number;
  openNI_DepthGeneratorRegistrationON: number;
  gStreamerQueueLength: number;
  pvAPIMulticastIP: number;
  xI_Downsampling: number;
  readonly xI_DataFormat: number;
  xI_OffsetX: number;
  xI_OffsetY: number;
  xI_TrgSource: number;
  xI_TrgSoftware: number;
  xI_GpiSelector: number;
  xI_GpiMode: number;
  xI_GpiLevel: number;
  xI_GpoSelector: number;
  xI_GpoMode: number;
  xI_LedSelector: number;
  xI_LedMode: number;
  xI_ManualWB: number;
  xI_AutoWB: number;
  xI_AEAG: number;
  xI_ExpPriority: number;
  xI_AEMaxLimit: number;
  xI_AGMaxLimit: number;
  xI_AEAGLevel: number;
  xI_Timeout: number;
  open(fileName: string): boolean;
  open(fileName: string, apiPreference: EnumInput<OpenCvSharp.VideoCaptureAPIs>): boolean;
  open(index: number | StrongNumeric<Int32Host>): boolean;
  open(
    index: number | StrongNumeric<Int32Host>,
    apiPreference: EnumInput<OpenCvSharp.VideoCaptureAPIs>
  ): boolean;
  isOpened(): boolean;
  release(): VoidResult;
  grab(): boolean;
  retrieve(image: OpenCvSharp.Mat): boolean;
  retrieve(image: OpenCvSharp.Mat, flag: number | StrongNumeric<Int32Host>): boolean;
  retrieve(image: OpenCvSharp.Mat, streamIdx: EnumInput<OpenCvSharp.CameraChannels>): boolean;
  retrieve(image: OpenCvSharp.OutputArray): boolean;
  retrieve(image: OpenCvSharp.OutputArray, flag: number | StrongNumeric<Int32Host>): boolean;
  retrieve(
    image: OpenCvSharp.OutputArray,
    streamIdx: EnumInput<OpenCvSharp.CameraChannels>
  ): boolean;
  retrieveMat(): OpenCvSharp.Mat;
  read(image: OpenCvSharp.Mat): boolean;
  read(image: OpenCvSharp.OutputArray): boolean;
  set(
    propertyId: EnumInput<OpenCvSharp.VideoCaptureProperties>,
    value: number | StrongNumeric<DoubleHost>
  ): boolean;
  set(
    propertyId: number | StrongNumeric<Int32Host>,
    value: number | StrongNumeric<DoubleHost>
  ): boolean;
  get(propertyId: EnumInput<OpenCvSharp.VideoCaptureProperties>): number;
  get(propertyId: number | StrongNumeric<Int32Host>): number;
  getBackendName(): string;
  setExceptionMode(enable: boolean): VoidResult;
  getExceptionMode(): boolean;
}

declare global {
  namespace OpenCvSharp {
    type VideoCapture = import("./VideoCapture").VideoCapture;
  }
}

export interface VideoCaptureHostType extends HostType<
  VideoCapture,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): VideoCapture;
  new (index: number | StrongNumeric<Int32Host>): VideoCapture;
  new (
    index: number | StrongNumeric<Int32Host>,
    apiPreference: EnumInput<OpenCvSharp.VideoCaptureAPIs>
  ): VideoCapture;
  new (
    index: number | StrongNumeric<Int32Host>,
    apiPreference: EnumInput<OpenCvSharp.VideoCaptureAPIs>,
    prms: HostArray<number | StrongNumeric<Int32Host>>
  ): VideoCapture;
  new (
    index: number | StrongNumeric<Int32Host>,
    apiPreference: EnumInput<OpenCvSharp.VideoCaptureAPIs>,
    prms: OpenCvSharp.VideoCapturePara
  ): VideoCapture;
  new (fileName: string): VideoCapture;
  new (fileName: string, apiPreference: EnumInput<OpenCvSharp.VideoCaptureAPIs>): VideoCapture;
  new (
    fileName: string,
    apiPreference: EnumInput<OpenCvSharp.VideoCaptureAPIs>,
    prms: HostArray<number | StrongNumeric<Int32Host>>
  ): VideoCapture;
  new (
    fileName: string,
    apiPreference: EnumInput<OpenCvSharp.VideoCaptureAPIs>,
    prms: OpenCvSharp.VideoCapturePara
  ): VideoCapture;
  fromCamera(index: number | StrongNumeric<Int32Host>): OpenCvSharp.VideoCapture;
  fromCamera(
    index: number | StrongNumeric<Int32Host>,
    apiPreference: EnumInput<OpenCvSharp.VideoCaptureAPIs>
  ): OpenCvSharp.VideoCapture;
  fromFile(fileName: string): OpenCvSharp.VideoCapture;
  fromFile(
    fileName: string,
    apiPreference: EnumInput<OpenCvSharp.VideoCaptureAPIs>
  ): OpenCvSharp.VideoCapture;
  waitAny(
    streams: System.Collections.Generic.IEnumerable<OpenCvSharp.VideoCapture>,
    readyIndex: HostVariableOut<HostArray<number>>
  ): boolean;
  waitAny(
    streams: System.Collections.Generic.IEnumerable<OpenCvSharp.VideoCapture>,
    readyIndex: HostVariableOut<HostArray<number>>,
    timeoutNs: number | StrongNumeric<Int64Host>
  ): boolean;
}

export {};
