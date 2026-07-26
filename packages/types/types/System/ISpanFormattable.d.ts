import type { HostType, InterfaceTypeTrait } from "../Microsoft/ClearScript/HostType";
import "./IFormatProvider";
import "./IFormattable";

declare const iSpanFormattableInputBrand: unique symbol;
export interface ISpanFormattableInput {
  readonly [iSpanFormattableInputBrand]: true;
}

export interface ISpanFormattable
  extends Microsoft.ClearScript.ClrInterfaceView<ISpanFormattableInput>, ISpanFormattableInput {}

declare global {
  namespace System {
    type ISpanFormattableInput = import("./ISpanFormattable").ISpanFormattableInput;
  }
}

declare global {
  namespace System {
    type ISpanFormattable = import("./ISpanFormattable").ISpanFormattable;
  }
}

export interface ISpanFormattableHostType extends HostType<ISpanFormattable, InterfaceTypeTrait> {}

export {};
