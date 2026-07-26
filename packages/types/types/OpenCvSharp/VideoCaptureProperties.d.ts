import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const videoCapturePropertiesBrand: unique symbol;
export interface VideoCaptureProperties extends ClrHostValue {
  readonly [videoCapturePropertiesBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type VideoCaptureProperties = import("./VideoCaptureProperties").VideoCaptureProperties;
  }
}

export interface VideoCapturePropertiesHostType extends HostType<
  VideoCaptureProperties,
  EnumTypeTrait
> {
  readonly posMsec: VideoCaptureProperties;
  readonly posFrames: VideoCaptureProperties;
  readonly posAviRatio: VideoCaptureProperties;
  readonly frameWidth: VideoCaptureProperties;
  readonly frameHeight: VideoCaptureProperties;
  readonly fps: VideoCaptureProperties;
  readonly fourCC: VideoCaptureProperties;
  readonly frameCount: VideoCaptureProperties;
  readonly format: VideoCaptureProperties;
  readonly mode: VideoCaptureProperties;
  readonly brightness: VideoCaptureProperties;
  readonly contrast: VideoCaptureProperties;
  readonly saturation: VideoCaptureProperties;
  readonly hue: VideoCaptureProperties;
  readonly gain: VideoCaptureProperties;
  readonly exposure: VideoCaptureProperties;
  readonly convertRgb: VideoCaptureProperties;
  readonly whiteBalanceBlueU: VideoCaptureProperties;
  readonly rectification: VideoCaptureProperties;
  readonly monocrome: VideoCaptureProperties;
  readonly sharpness: VideoCaptureProperties;
  readonly autoExposure: VideoCaptureProperties;
  readonly gamma: VideoCaptureProperties;
  readonly temperature: VideoCaptureProperties;
  readonly trigger: VideoCaptureProperties;
  readonly triggerDelay: VideoCaptureProperties;
  readonly whiteBalanceRedV: VideoCaptureProperties;
  readonly zoom: VideoCaptureProperties;
  readonly focus: VideoCaptureProperties;
  readonly guid: VideoCaptureProperties;
  readonly isoSpeed: VideoCaptureProperties;
  readonly backLight: VideoCaptureProperties;
  readonly pan: VideoCaptureProperties;
  readonly tilt: VideoCaptureProperties;
  readonly roll: VideoCaptureProperties;
  readonly iris: VideoCaptureProperties;
  readonly settings: VideoCaptureProperties;
  readonly bufferSize: VideoCaptureProperties;
  readonly autoFocus: VideoCaptureProperties;
  readonly sarNum: VideoCaptureProperties;
  readonly sarDen: VideoCaptureProperties;
  readonly backend: VideoCaptureProperties;
  readonly channel: VideoCaptureProperties;
  readonly autoWB: VideoCaptureProperties;
  readonly wbTemperature: VideoCaptureProperties;
  readonly codecPixelFormat: VideoCaptureProperties;
  readonly bitRate: VideoCaptureProperties;
  readonly orientationMeta: VideoCaptureProperties;
  readonly orientationAuto: VideoCaptureProperties;
  readonly hwAcceleration: VideoCaptureProperties;
  readonly hwDevice: VideoCaptureProperties;
  readonly openNI_OutputMode: VideoCaptureProperties;
  readonly openNI_FrameMaxDepth: VideoCaptureProperties;
  readonly openNI_Baseline: VideoCaptureProperties;
  readonly openNI_FocalLength: VideoCaptureProperties;
  readonly openNI_Registration: VideoCaptureProperties;
  readonly opennI_ApproxFrameSync: VideoCaptureProperties;
  readonly opennI_MaxBufferSize: VideoCaptureProperties;
  readonly opennI_CircleBuffer: VideoCaptureProperties;
  readonly opennI_MaxTimeDuration: VideoCaptureProperties;
  readonly opennI_GeneratorPresent: VideoCaptureProperties;
  readonly opennI2_Sync: VideoCaptureProperties;
  readonly opennI2_Mirror: VideoCaptureProperties;
  readonly openNI_DepthGenerator: VideoCaptureProperties;
  readonly openNI_ImageGenerator: VideoCaptureProperties;
  readonly openNI_ImageGeneratorPresent: VideoCaptureProperties;
  readonly openNI_ImageGeneratorOutputMode: VideoCaptureProperties;
  readonly openNI_DepthGeneratorBaseline: VideoCaptureProperties;
  readonly openNI_DepthGeneratorFocalLength: VideoCaptureProperties;
  readonly openNI_DepthGeneratorRegistrationON: VideoCaptureProperties;
  readonly gStreamerQueueLength: VideoCaptureProperties;
  readonly pvAPIMulticastIP: VideoCaptureProperties;
  readonly pvapI_FrameStartTriggerMode: VideoCaptureProperties;
  readonly pvapI_DecimationHorizontal: VideoCaptureProperties;
  readonly pvapI_DecimationVertical: VideoCaptureProperties;
  readonly pvapI_BinningX: VideoCaptureProperties;
  readonly pvapI_BinningY: VideoCaptureProperties;
  readonly pvapI_PixelFormat: VideoCaptureProperties;
  readonly xI_Downsampling: VideoCaptureProperties;
  readonly xI_DataFormat: VideoCaptureProperties;
  readonly xI_OffsetX: VideoCaptureProperties;
  readonly xI_OffsetY: VideoCaptureProperties;
  readonly xI_TrgSource: VideoCaptureProperties;
  readonly xI_TrgSoftware: VideoCaptureProperties;
  readonly xI_GpiSelector: VideoCaptureProperties;
  readonly xI_GpiMode: VideoCaptureProperties;
  readonly xI_GpiLevel: VideoCaptureProperties;
  readonly xI_GpoSelector: VideoCaptureProperties;
  readonly xI_GpoMode: VideoCaptureProperties;
  readonly xI_LedSelector: VideoCaptureProperties;
  readonly xI_LedMode: VideoCaptureProperties;
  readonly xI_ManualWB: VideoCaptureProperties;
  readonly xI_AutoWB: VideoCaptureProperties;
  readonly xI_AEAG: VideoCaptureProperties;
  readonly xI_ExpPriority: VideoCaptureProperties;
  readonly xI_AEMaxLimit: VideoCaptureProperties;
  readonly xI_AGMaxLimit: VideoCaptureProperties;
  readonly xI_AEAGLevel: VideoCaptureProperties;
  readonly xI_Timeout: VideoCaptureProperties;
  readonly ioS_DeviceFocus: VideoCaptureProperties;
  readonly ioS_DeviceExposure: VideoCaptureProperties;
  readonly ioS_DeviceFlash: VideoCaptureProperties;
  readonly ioS_DeviceWhiteBalance: VideoCaptureProperties;
  readonly ioS_DeviceTorch: VideoCaptureProperties;
  readonly gigA_FrameOffsetX: VideoCaptureProperties;
  readonly gigA_FrameOffsetY: VideoCaptureProperties;
  readonly gigA_FrameWidthMax: VideoCaptureProperties;
  readonly gigA_FrameHeightMax: VideoCaptureProperties;
  readonly gigA_FrameSensWidth: VideoCaptureProperties;
  readonly gigA_FrameSensHeight: VideoCaptureProperties;
  readonly intelperC_ProfileCount: VideoCaptureProperties;
  readonly intelperC_ProfileIdx: VideoCaptureProperties;
  readonly intelperC_DepthLowConfidenceValue: VideoCaptureProperties;
  readonly intelperC_DepthSaturationValue: VideoCaptureProperties;
  readonly intelperC_DepthConfidenceThreshold: VideoCaptureProperties;
  readonly intelperC_DepthFocalLengthHorz: VideoCaptureProperties;
  readonly intelperC_DepthFocalLengthVert: VideoCaptureProperties;
  readonly gPhoto2_Preview: VideoCaptureProperties;
  readonly gPhoto2_WidgetEnumerate: VideoCaptureProperties;
  readonly gPhoto2_ReloadConfig: VideoCaptureProperties;
  readonly gPhoto2_ReloadOnChange: VideoCaptureProperties;
  readonly gPhoto2_CollectMsgs: VideoCaptureProperties;
  readonly gPhoto2_FlushMsgs: VideoCaptureProperties;
  readonly speed: VideoCaptureProperties;
  readonly aperture: VideoCaptureProperties;
  readonly exposureProgram: VideoCaptureProperties;
  readonly viewFinder: VideoCaptureProperties;
}

export {};
