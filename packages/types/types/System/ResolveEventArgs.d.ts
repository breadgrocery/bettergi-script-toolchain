import type { HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import "./EventArgs";
import "./Reflection/Assembly";

declare const resolveEventArgsBrand: unique symbol;
export interface ResolveEventArgs extends Omit<System.EventArgs, "name" | "requestingAssembly"> {
  readonly [resolveEventArgsBrand]: true;
  readonly name: string;
  readonly requestingAssembly: System.Reflection.Assembly;
}

declare global {
  namespace System {
    type ResolveEventArgs = import("./ResolveEventArgs").ResolveEventArgs;
  }
}

export interface ResolveEventArgsHostType extends HostType<ResolveEventArgs, ReferenceTypeTrait> {
  new (name: string): ResolveEventArgs;
  new (name: string, requestingAssembly: System.Reflection.Assembly | null): ResolveEventArgs;
}

export {};
