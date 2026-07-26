import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const videoCaptureAPIsBrand: unique symbol;
export interface VideoCaptureAPIs extends ClrHostValue {
  readonly [videoCaptureAPIsBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type VideoCaptureAPIs = import("./VideoCaptureAPIs").VideoCaptureAPIs;
  }
}

export interface VideoCaptureAPIsHostType extends HostType<VideoCaptureAPIs, EnumTypeTrait> {
  readonly any: VideoCaptureAPIs;
  readonly v4L: VideoCaptureAPIs;
  readonly v4L2: VideoCaptureAPIs;
  readonly firewire: VideoCaptureAPIs;
  readonly fireware: VideoCaptureAPIs;
  readonly ieeE1394: VideoCaptureAPIs;
  readonly dC1394: VideoCaptureAPIs;
  readonly cmU1394: VideoCaptureAPIs;
  readonly dshow: VideoCaptureAPIs;
  readonly pvapi: VideoCaptureAPIs;
  readonly openni: VideoCaptureAPIs;
  readonly opennI_ASUS: VideoCaptureAPIs;
  readonly android: VideoCaptureAPIs;
  readonly xiapi: VideoCaptureAPIs;
  readonly avfoundation: VideoCaptureAPIs;
  readonly giganetix: VideoCaptureAPIs;
  readonly msmf: VideoCaptureAPIs;
  readonly winrt: VideoCaptureAPIs;
  readonly intelperc: VideoCaptureAPIs;
  readonly realsense: VideoCaptureAPIs;
  readonly opennI2: VideoCaptureAPIs;
  readonly opennI2_ASUS: VideoCaptureAPIs;
  readonly gphotO2: VideoCaptureAPIs;
  readonly gstreamer: VideoCaptureAPIs;
  readonly ffmpeg: VideoCaptureAPIs;
  readonly images: VideoCaptureAPIs;
  readonly aravis: VideoCaptureAPIs;
  readonly opencV_MJPEG: VideoCaptureAPIs;
  readonly inteL_MFX: VideoCaptureAPIs;
  readonly xine: VideoCaptureAPIs;
  readonly caP_UEYE: VideoCaptureAPIs;
}

export {};
