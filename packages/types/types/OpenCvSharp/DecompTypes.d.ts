import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const decompTypesBrand: unique symbol;
export interface DecompTypes extends ClrHostValue {
  readonly [decompTypesBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type DecompTypes = import("./DecompTypes").DecompTypes;
  }
}

export interface DecompTypesHostType extends HostType<DecompTypes, EnumTypeTrait> {
  readonly lu: DecompTypes;
  readonly svd: DecompTypes;
  readonly eig: DecompTypes;
  readonly cholesky: DecompTypes;
  readonly qr: DecompTypes;
  readonly normal: DecompTypes;
}

export {};
