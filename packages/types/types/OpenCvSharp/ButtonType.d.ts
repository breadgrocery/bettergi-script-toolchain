import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const buttonTypeBrand: unique symbol;
export interface ButtonType extends ClrHostValue {
  readonly [buttonTypeBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type ButtonType = import("./ButtonType").ButtonType;
  }
}

export interface ButtonTypeHostType extends HostType<ButtonType, EnumTypeTrait> {
  readonly pushButton: ButtonType;
  readonly checkbox: ButtonType;
  readonly radiobox: ButtonType;
}

export {};
