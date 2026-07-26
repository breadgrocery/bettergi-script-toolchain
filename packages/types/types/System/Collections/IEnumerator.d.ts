import type { HostType, InterfaceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";

declare const iEnumeratorInputBrand: unique symbol;
export interface IEnumeratorInput {
  readonly [iEnumeratorInputBrand]: true;
}

export interface IEnumerator
  extends Microsoft.ClearScript.ClrInterfaceView<IEnumeratorInput>, IEnumeratorInput {
  moveNext(): boolean;
  readonly current: unknown;
  reset(): VoidResult;
}

declare global {
  namespace System.Collections {
    type IEnumeratorInput = import("./IEnumerator").IEnumeratorInput;
  }
}

declare global {
  namespace System.Collections {
    type IEnumerator = import("./IEnumerator").IEnumerator;
  }
}

export interface IEnumeratorHostType extends HostType<IEnumerator, InterfaceTypeTrait> {}

export {};
