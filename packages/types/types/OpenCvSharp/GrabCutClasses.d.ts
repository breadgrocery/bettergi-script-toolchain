import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const grabCutClassesBrand: unique symbol;
export interface GrabCutClasses extends ClrHostValue {
  readonly [grabCutClassesBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type GrabCutClasses = import("./GrabCutClasses").GrabCutClasses;
  }
}

export interface GrabCutClassesHostType extends HostType<GrabCutClasses, EnumTypeTrait> {
  readonly bgd: GrabCutClasses;
  readonly fgd: GrabCutClasses;
  readonly pR_BGD: GrabCutClasses;
  readonly pR_FGD: GrabCutClasses;
}

export {};
