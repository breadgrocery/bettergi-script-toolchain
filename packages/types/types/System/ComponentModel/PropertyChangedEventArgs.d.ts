import type { HostType, ReferenceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import "../EventArgs";

declare const propertyChangedEventArgsBrand: unique symbol;
export interface PropertyChangedEventArgs extends Omit<System.EventArgs, "propertyName"> {
  readonly [propertyChangedEventArgsBrand]: true;
  readonly propertyName: string;
}

declare global {
  namespace System.ComponentModel {
    type PropertyChangedEventArgs = import("./PropertyChangedEventArgs").PropertyChangedEventArgs;
  }
}

export interface PropertyChangedEventArgsHostType extends HostType<
  PropertyChangedEventArgs,
  ReferenceTypeTrait
> {
  new (propertyName: string | null): PropertyChangedEventArgs;
}

export {};
