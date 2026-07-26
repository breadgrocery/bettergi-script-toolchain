import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const opticalFlowFlagsBrand: unique symbol;
export interface OpticalFlowFlags extends ClrHostValue {
  readonly [opticalFlowFlagsBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type OpticalFlowFlags = import("./OpticalFlowFlags").OpticalFlowFlags;
  }
}

export interface OpticalFlowFlagsHostType extends HostType<OpticalFlowFlags, EnumTypeTrait> {
  readonly none: OpticalFlowFlags;
  readonly pyrAReady: OpticalFlowFlags;
  readonly pyrBReady: OpticalFlowFlags;
  readonly useInitialFlow: OpticalFlowFlags;
  readonly lkGetMinEigenvals: OpticalFlowFlags;
  readonly farnebackGaussian: OpticalFlowFlags;
}

export {};
