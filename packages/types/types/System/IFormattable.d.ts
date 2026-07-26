import type { HostType, InterfaceTypeTrait } from "../Microsoft/ClearScript/HostType";
import "./IFormatProvider";

declare const iFormattableInputBrand: unique symbol;
export interface IFormattableInput {
  readonly [iFormattableInputBrand]: true;
}

export interface IFormattable
  extends Microsoft.ClearScript.ClrInterfaceView<IFormattableInput>, IFormattableInput {
  toString(format: string | null, formatProvider: System.IFormatProvider | null): string;
}

declare global {
  namespace System {
    type IFormattableInput = import("./IFormattable").IFormattableInput;
  }
}

declare global {
  namespace System {
    type IFormattable = import("./IFormattable").IFormattable;
  }
}

export interface IFormattableHostType extends HostType<IFormattable, InterfaceTypeTrait> {}

export {};
