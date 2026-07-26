import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const videoWriterPropertiesBrand: unique symbol;
export interface VideoWriterProperties extends ClrHostValue {
  readonly [videoWriterPropertiesBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type VideoWriterProperties = import("./VideoWriterProperties").VideoWriterProperties;
  }
}

export interface VideoWriterPropertiesHostType extends HostType<
  VideoWriterProperties,
  EnumTypeTrait
> {
  readonly quality: VideoWriterProperties;
  readonly frameBytes: VideoWriterProperties;
  readonly nStripes: VideoWriterProperties;
  readonly isColor: VideoWriterProperties;
  readonly depth: VideoWriterProperties;
  readonly hwAcceleration: VideoWriterProperties;
  readonly hwDevice: VideoWriterProperties;
}

export {};
