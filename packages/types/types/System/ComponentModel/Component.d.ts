import type { EventSource } from "../../Microsoft/ClearScript/HostEvent";
import type {
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../EventHandler";
import "../IDisposable";
import "../MarshalByRefObject";
import "./IComponent";
import "./IContainer";
import "./ISite";

declare const componentBrand: unique symbol;
export interface Component
  extends
    Omit<System.MarshalByRefObject, "container" | "dispose" | "site" | "toString">,
    System.ComponentModel.IComponentInput,
    System.IDisposableInput {
  readonly [componentBrand]: true;
  dispose(): VoidResult;
  readonly container: System.ComponentModel.IContainer;
  readonly disposed: EventSource<(sender: unknown, e: System.EventArgs) => void>;
  site: System.ComponentModel.ISite;
  toString(): string;
}

declare global {
  namespace System.ComponentModel {
    type Component = import("./Component").Component;
  }
}

export interface ComponentHostType extends HostType<
  Component,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): Component;
}

export {};
