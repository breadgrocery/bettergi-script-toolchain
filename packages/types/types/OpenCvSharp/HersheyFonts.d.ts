import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const hersheyFontsBrand: unique symbol;
export interface HersheyFonts extends ClrHostValue {
  readonly [hersheyFontsBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type HersheyFonts = import("./HersheyFonts").HersheyFonts;
  }
}

export interface HersheyFontsHostType extends HostType<HersheyFonts, EnumTypeTrait> {
  readonly hersheySimplex: HersheyFonts;
  readonly hersheyPlain: HersheyFonts;
  readonly hersheyDuplex: HersheyFonts;
  readonly hersheyComplex: HersheyFonts;
  readonly hersheyTriplex: HersheyFonts;
  readonly hersheyComplexSmall: HersheyFonts;
  readonly hersheyScriptSimplex: HersheyFonts;
  readonly hersheyScriptComplex: HersheyFonts;
  readonly italic: HersheyFonts;
}

export {};
