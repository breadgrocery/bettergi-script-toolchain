import type { HostType, InterfaceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../IDisposable";
import "./ComponentCollection";
import "./IComponent";

declare const iContainerInputBrand: unique symbol;
export interface IContainerInput {
  readonly [iContainerInputBrand]: true;
}

export interface IContainer
  extends Microsoft.ClearScript.ClrInterfaceView<IContainerInput>, IContainerInput {
  add(component: System.ComponentModel.IComponent | null): VoidResult;
  add(component: System.ComponentModel.IComponent | null, name: string | null): VoidResult;
  readonly components: System.ComponentModel.ComponentCollection;
  remove(component: System.ComponentModel.IComponent | null): VoidResult;
}

declare global {
  namespace System.ComponentModel {
    type IContainerInput = import("./IContainer").IContainerInput;
  }
}

declare global {
  namespace System.ComponentModel {
    type IContainer = import("./IContainer").IContainer;
  }
}

export interface IContainerHostType extends HostType<IContainer, InterfaceTypeTrait> {}

export {};
