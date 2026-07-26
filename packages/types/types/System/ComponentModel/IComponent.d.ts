import type { EventSource } from "../../Microsoft/ClearScript/HostEvent";
import type { HostType, InterfaceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import "../EventHandler";
import "../IDisposable";
import "./ISite";

declare const iComponentInputBrand: unique symbol;
export interface IComponentInput {
  readonly [iComponentInputBrand]: true;
}

export interface IComponent
  extends Microsoft.ClearScript.ClrInterfaceView<IComponentInput>, IComponentInput {
  readonly disposed: EventSource<(sender: unknown, e: System.EventArgs) => void>;
  site: System.ComponentModel.ISite;
}

declare global {
  namespace System.ComponentModel {
    type IComponentInput = import("./IComponent").IComponentInput;
  }
}

declare global {
  namespace System.ComponentModel {
    type IComponent = import("./IComponent").IComponent;
  }
}

export interface IComponentHostType extends HostType<IComponent, InterfaceTypeTrait> {}

export {};
