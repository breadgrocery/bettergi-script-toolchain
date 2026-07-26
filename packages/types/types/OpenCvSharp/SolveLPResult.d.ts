import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const solveLPResultBrand: unique symbol;
export interface SolveLPResult extends ClrHostValue {
  readonly [solveLPResultBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type SolveLPResult = import("./SolveLPResult").SolveLPResult;
  }
}

export interface SolveLPResultHostType extends HostType<SolveLPResult, EnumTypeTrait> {
  readonly unbounded: SolveLPResult;
  readonly unfeasible: SolveLPResult;
  readonly single: SolveLPResult;
  readonly multi: SolveLPResult;
}

export {};
