import type { HostType, InterfaceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import "./TypeInfo";

declare const iReflectableTypeInputBrand: unique symbol;
export interface IReflectableTypeInput {
  readonly [iReflectableTypeInputBrand]: true;
}

export interface IReflectableType
  extends Microsoft.ClearScript.ClrInterfaceView<IReflectableTypeInput>, IReflectableTypeInput {
  getTypeInfo(): System.Reflection.TypeInfo;
}

declare global {
  namespace System.Reflection {
    type IReflectableTypeInput = import("./IReflectableType").IReflectableTypeInput;
  }
}

declare global {
  namespace System.Reflection {
    type IReflectableType = import("./IReflectableType").IReflectableType;
  }
}

export interface IReflectableTypeHostType extends HostType<IReflectableType, InterfaceTypeTrait> {}

export {};
