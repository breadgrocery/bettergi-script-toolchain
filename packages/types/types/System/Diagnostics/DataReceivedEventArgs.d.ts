import type { HostType, ReferenceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import "../EventArgs";

declare const dataReceivedEventArgsBrand: unique symbol;
export interface DataReceivedEventArgs extends Omit<System.EventArgs, "data"> {
  readonly [dataReceivedEventArgsBrand]: true;
  readonly data: string;
}

declare global {
  namespace System.Diagnostics {
    type DataReceivedEventArgs = import("./DataReceivedEventArgs").DataReceivedEventArgs;
  }
}

export interface DataReceivedEventArgsHostType extends HostType<
  DataReceivedEventArgs,
  ReferenceTypeTrait
> {}

export {};
