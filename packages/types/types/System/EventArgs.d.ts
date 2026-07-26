import type {
  ClrHostValue,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../Microsoft/ClearScript/HostType";

declare const eventArgsBrand: unique symbol;
export interface EventArgs extends ClrHostValue {
  readonly [eventArgsBrand]: true;
}

declare global {
  namespace System {
    type EventArgs = import("./EventArgs").EventArgs;
  }
}

export interface EventArgsHostType extends HostType<
  EventArgs,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): EventArgs;
  readonly empty: System.EventArgs;
}

export {};
