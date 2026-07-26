import type { HostType, InterfaceTypeTrait } from "../Microsoft/ClearScript/HostType";
import "./IFormatProvider";

declare const iUtf8SpanFormattableInputBrand: unique symbol;
export interface IUtf8SpanFormattableInput {
  readonly [iUtf8SpanFormattableInputBrand]: true;
}

export interface IUtf8SpanFormattable
  extends
    Microsoft.ClearScript.ClrInterfaceView<IUtf8SpanFormattableInput>,
    IUtf8SpanFormattableInput {}

declare global {
  namespace System {
    type IUtf8SpanFormattableInput = import("./IUtf8SpanFormattable").IUtf8SpanFormattableInput;
  }
}

declare global {
  namespace System {
    type IUtf8SpanFormattable = import("./IUtf8SpanFormattable").IUtf8SpanFormattable;
  }
}

export interface IUtf8SpanFormattableHostType extends HostType<
  IUtf8SpanFormattable,
  InterfaceTypeTrait
> {}

export {};
