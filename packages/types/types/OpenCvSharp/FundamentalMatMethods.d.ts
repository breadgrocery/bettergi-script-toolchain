import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const fundamentalMatMethodsBrand: unique symbol;
export interface FundamentalMatMethods extends ClrHostValue {
  readonly [fundamentalMatMethodsBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type FundamentalMatMethods = import("./FundamentalMatMethods").FundamentalMatMethods;
  }
}

export interface FundamentalMatMethodsHostType extends HostType<
  FundamentalMatMethods,
  EnumTypeTrait
> {
  readonly point7: FundamentalMatMethods;
  readonly point8: FundamentalMatMethods;
  readonly lMedS: FundamentalMatMethods;
  readonly ransac: FundamentalMatMethods;
}

export {};
