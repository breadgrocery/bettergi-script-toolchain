import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../../System/Enum";
import "../../System/IComparable";
import "../../System/IConvertible";
import "../../System/IFormattable";
import "../../System/ISpanFormattable";

declare const inpaintTypesBrand: unique symbol;
export interface InpaintTypes extends ClrHostValue {
  readonly [inpaintTypesBrand]: true;
}

declare global {
  namespace OpenCvSharp.XPhoto {
    type InpaintTypes = import("./InpaintTypes").InpaintTypes;
  }
}

export interface InpaintTypesHostType extends HostType<InpaintTypes, EnumTypeTrait> {
  readonly shiftmap: InpaintTypes;
  readonly fsR_BEST: InpaintTypes;
  readonly fsR_FAST: InpaintTypes;
}

export {};
