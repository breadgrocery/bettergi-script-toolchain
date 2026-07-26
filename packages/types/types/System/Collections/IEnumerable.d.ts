import type { HostType, InterfaceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import "./IEnumerator";

declare const iEnumerableInputBrand: unique symbol;
export interface IEnumerableInput {
  readonly [iEnumerableInputBrand]: true;
}

export interface IEnumerable
  extends Microsoft.ClearScript.ClrInterfaceView<IEnumerableInput>, IEnumerableInput {
  getEnumerator(): System.Collections.IEnumerator;
}

declare global {
  namespace System.Collections {
    type IEnumerableInput = import("./IEnumerable").IEnumerableInput;
  }
}

declare global {
  namespace System.Collections {
    type IEnumerable = import("./IEnumerable").IEnumerable;
  }
}

export interface IEnumerableHostType extends HostType<IEnumerable, InterfaceTypeTrait> {}

export {};
