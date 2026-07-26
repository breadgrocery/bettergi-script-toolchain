import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const cameraChannelsBrand: unique symbol;
export interface CameraChannels extends ClrHostValue {
  readonly [cameraChannelsBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type CameraChannels = import("./CameraChannels").CameraChannels;
  }
}

export interface CameraChannelsHostType extends HostType<CameraChannels, EnumTypeTrait> {
  readonly openNI_DepthMap: CameraChannels;
  readonly openNI_PointCloudMap: CameraChannels;
  readonly openNI_DisparityMap: CameraChannels;
  readonly openNI_DisparityMap32F: CameraChannels;
  readonly openNI_ValidDepthMask: CameraChannels;
}

export {};
