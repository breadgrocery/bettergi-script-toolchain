import type { HostType, InterfaceTypeTrait } from "../../Microsoft/ClearScript/HostType";

declare const iEqualityComparerInputBrand: unique symbol;
export interface IEqualityComparerInput {
  readonly [iEqualityComparerInputBrand]: true;
}

export interface IEqualityComparer
  extends Microsoft.ClearScript.ClrInterfaceView<IEqualityComparerInput>, IEqualityComparerInput {
  equals(x: unknown | null, y: unknown | null): boolean;
  getHashCode(obj: unknown): number;
}

declare global {
  namespace System.Collections {
    type IEqualityComparerInput = import("./IEqualityComparer").IEqualityComparerInput;
  }
}

declare global {
  namespace System.Collections {
    type IEqualityComparer = import("./IEqualityComparer").IEqualityComparer;
  }
}

export interface IEqualityComparerHostType extends HostType<
  IEqualityComparer,
  InterfaceTypeTrait
> {}

export {};
