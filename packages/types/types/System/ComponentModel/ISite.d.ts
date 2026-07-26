import type { HostType, InterfaceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import "../Dispatch";
import "./IComponent";
import "./IContainer";

declare const iSiteInputBrand: unique symbol;
export interface ISiteInput {
  readonly [iSiteInputBrand]: true;
}

export interface ISite extends Microsoft.ClearScript.ClrInterfaceView<ISiteInput>, ISiteInput {
  name: string;
  readonly component: System.ComponentModel.IComponent;
  readonly container: System.ComponentModel.IContainer;
  readonly designMode: boolean;
}

declare global {
  namespace System.ComponentModel {
    type ISiteInput = import("./ISite").ISiteInput;
  }
}

declare global {
  namespace System.ComponentModel {
    type ISite = import("./ISite").ISite;
  }
}

export interface ISiteHostType extends HostType<ISite, InterfaceTypeTrait> {}

export {};
