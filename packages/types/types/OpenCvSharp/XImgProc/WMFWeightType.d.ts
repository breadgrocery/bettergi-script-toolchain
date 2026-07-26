import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../../System/Enum";
import "../../System/IComparable";
import "../../System/IConvertible";
import "../../System/IFormattable";
import "../../System/ISpanFormattable";

declare const wMFWeightTypeBrand: unique symbol;
export interface WMFWeightType extends ClrHostValue {
  readonly [wMFWeightTypeBrand]: true;
}

declare global {
  namespace OpenCvSharp.XImgProc {
    type WMFWeightType = import("./WMFWeightType").WMFWeightType;
  }
}

export interface WMFWeightTypeHostType extends HostType<WMFWeightType, EnumTypeTrait> {
  readonly exp: WMFWeightType;
  readonly iV1: WMFWeightType;
  readonly iV2: WMFWeightType;
  readonly cos: WMFWeightType;
  readonly jac: WMFWeightType;
  readonly off: WMFWeightType;
}

export {};
