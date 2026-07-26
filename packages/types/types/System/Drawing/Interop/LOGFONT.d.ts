import type {
  ClrHostValue,
  HostType,
  ValueTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../ValueType";

declare const lOGFONTBrand: unique symbol;
export interface LOGFONT extends ClrHostValue {
  readonly [lOGFONTBrand]: true;
  lfCharSet: number;
  lfClipPrecision: number;
  lfEscapement: number;
  lfHeight: number;
  lfItalic: number;
  lfOrientation: number;
  lfOutPrecision: number;
  lfPitchAndFamily: number;
  lfQuality: number;
  lfStrikeOut: number;
  lfUnderline: number;
  lfWeight: number;
  lfWidth: number;
}

declare global {
  namespace System.Drawing.Interop {
    type LOGFONT = import("./LOGFONT").LOGFONT;
  }
}

export interface LOGFONTHostType extends HostType<LOGFONT, ValueTypeTrait> {}

export {};
