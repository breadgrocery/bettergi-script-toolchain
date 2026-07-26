import type { HostType, InterfaceTypeTrait } from "../../../Microsoft/ClearScript/HostType";
import "./StreamingContext";

declare const iObjectReferenceInputBrand: unique symbol;
export interface IObjectReferenceInput {
  readonly [iObjectReferenceInputBrand]: true;
}

export interface IObjectReference
  extends Microsoft.ClearScript.ClrInterfaceView<IObjectReferenceInput>, IObjectReferenceInput {
  getRealObject(context: System.Runtime.Serialization.StreamingContext): unknown;
}

declare global {
  namespace System.Runtime.Serialization {
    type IObjectReferenceInput = import("./IObjectReference").IObjectReferenceInput;
  }
}

declare global {
  namespace System.Runtime.Serialization {
    type IObjectReference = import("./IObjectReference").IObjectReference;
  }
}

export interface IObjectReferenceHostType extends HostType<IObjectReference, InterfaceTypeTrait> {}

export {};
