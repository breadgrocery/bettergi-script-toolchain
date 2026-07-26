import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const matDiagTypeBrand: unique symbol;
export interface MatDiagType extends ClrHostValue {
  readonly [matDiagTypeBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type MatDiagType = import("./MatDiagType").MatDiagType;
  }
}

export interface MatDiagTypeHostType extends HostType<MatDiagType, EnumTypeTrait> {
  readonly upper: MatDiagType;
  readonly main: MatDiagType;
  readonly lower: MatDiagType;
}

export {};
