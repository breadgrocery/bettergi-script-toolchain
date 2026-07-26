import type { HostType, InterfaceTypeTrait } from "../../Microsoft/ClearScript/HostType";

declare const iComparerInputBrand: unique symbol;
export interface IComparerInput {
  readonly [iComparerInputBrand]: true;
}

export interface IComparer
  extends Microsoft.ClearScript.ClrInterfaceView<IComparerInput>, IComparerInput {
  compare(x: unknown | null, y: unknown | null): number;
}

declare global {
  namespace System.Collections {
    type IComparerInput = import("./IComparer").IComparerInput;
  }
}

declare global {
  namespace System.Collections {
    type IComparer = import("./IComparer").IComparer;
  }
}

export interface IComparerHostType extends HostType<IComparer, InterfaceTypeTrait> {}

export {};
