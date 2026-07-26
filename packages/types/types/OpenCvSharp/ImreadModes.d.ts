import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const imreadModesBrand: unique symbol;
export interface ImreadModes extends ClrHostValue {
  readonly [imreadModesBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type ImreadModes = import("./ImreadModes").ImreadModes;
  }
}

export interface ImreadModesHostType extends HostType<ImreadModes, EnumTypeTrait> {
  readonly unchanged: ImreadModes;
  readonly grayscale: ImreadModes;
  readonly color: ImreadModes;
  readonly anyDepth: ImreadModes;
  readonly anyColor: ImreadModes;
  readonly loadGdal: ImreadModes;
  readonly reducedGrayscale2: ImreadModes;
  readonly reducedColor2: ImreadModes;
  readonly reducedGrayscale4: ImreadModes;
  readonly reducedColor4: ImreadModes;
  readonly reducedGrayscale8: ImreadModes;
  readonly reducedColor8: ImreadModes;
  readonly ignoreOrientation: ImreadModes;
}

export {};
