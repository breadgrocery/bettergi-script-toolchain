import type { HostType, InterfaceTypeTrait } from "./HostType";
import "./ScriptEngine";
import type { VoidResult } from "./VoidResult";

declare const iScriptableObjectInputBrand: unique symbol;
export interface IScriptableObjectInput {
  readonly [iScriptableObjectInputBrand]: true;
}

export interface IScriptableObject
  extends Microsoft.ClearScript.ClrInterfaceView<IScriptableObjectInput>, IScriptableObjectInput {
  onExposedToScriptCode(engine: Microsoft.ClearScript.ScriptEngine): VoidResult;
}

declare global {
  namespace Microsoft.ClearScript {
    type IScriptableObjectInput = import("./IScriptableObject").IScriptableObjectInput;
  }
}

declare global {
  namespace Microsoft.ClearScript {
    type IScriptableObject = import("./IScriptableObject").IScriptableObject;
  }
}

export interface IScriptableObjectHostType extends HostType<
  IScriptableObject,
  InterfaceTypeTrait
> {}

export {};
