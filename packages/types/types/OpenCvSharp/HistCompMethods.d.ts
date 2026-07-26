import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const histCompMethodsBrand: unique symbol;
export interface HistCompMethods extends ClrHostValue {
  readonly [histCompMethodsBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type HistCompMethods = import("./HistCompMethods").HistCompMethods;
  }
}

export interface HistCompMethodsHostType extends HostType<HistCompMethods, EnumTypeTrait> {
  readonly correl: HistCompMethods;
  readonly chisqr: HistCompMethods;
  readonly intersect: HistCompMethods;
  readonly bhattacharyya: HistCompMethods;
  readonly hellinger: HistCompMethods;
  readonly chisqrAlt: HistCompMethods;
  readonly klDiv: HistCompMethods;
}

export {};
