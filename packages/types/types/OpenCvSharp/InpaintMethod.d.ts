import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const inpaintMethodBrand: unique symbol;
export interface InpaintMethod extends ClrHostValue {
  readonly [inpaintMethodBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type InpaintMethod = import("./InpaintMethod").InpaintMethod;
  }
}

export interface InpaintMethodHostType extends HostType<InpaintMethod, EnumTypeTrait> {
  readonly ns: InpaintMethod;
  readonly telea: InpaintMethod;
}

export {};
