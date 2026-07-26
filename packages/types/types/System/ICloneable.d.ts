import type { HostType, InterfaceTypeTrait } from "../Microsoft/ClearScript/HostType";

declare const iCloneableInputBrand: unique symbol;
export interface ICloneableInput {
  readonly [iCloneableInputBrand]: true;
}

export interface ICloneable
  extends Microsoft.ClearScript.ClrInterfaceView<ICloneableInput>, ICloneableInput {
  clone(): unknown;
}

declare global {
  namespace System {
    type ICloneableInput = import("./ICloneable").ICloneableInput;
  }
}

declare global {
  namespace System {
    type ICloneable = import("./ICloneable").ICloneable;
  }
}

export interface ICloneableHostType extends HostType<ICloneable, InterfaceTypeTrait> {}

export {};
