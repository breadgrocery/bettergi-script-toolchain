import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const essentialMatMethodBrand: unique symbol;
export interface EssentialMatMethod extends ClrHostValue {
  readonly [essentialMatMethodBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type EssentialMatMethod = import("./EssentialMatMethod").EssentialMatMethod;
  }
}

export interface EssentialMatMethodHostType extends HostType<EssentialMatMethod, EnumTypeTrait> {
  readonly lMedS: EssentialMatMethod;
  readonly ransac: EssentialMatMethod;
}

export {};
