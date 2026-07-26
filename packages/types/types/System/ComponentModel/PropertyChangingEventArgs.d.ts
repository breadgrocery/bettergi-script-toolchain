import type { HostType, ReferenceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import "../EventArgs";

declare const propertyChangingEventArgsBrand: unique symbol;
export interface PropertyChangingEventArgs extends Omit<System.EventArgs, "propertyName"> {
  readonly [propertyChangingEventArgsBrand]: true;
  readonly propertyName: string;
}

declare global {
  namespace System.ComponentModel {
    type PropertyChangingEventArgs =
      import("./PropertyChangingEventArgs").PropertyChangingEventArgs;
  }
}

export interface PropertyChangingEventArgsHostType extends HostType<
  PropertyChangingEventArgs,
  ReferenceTypeTrait
> {
  new (propertyName: string | null): PropertyChangingEventArgs;
}

export {};
