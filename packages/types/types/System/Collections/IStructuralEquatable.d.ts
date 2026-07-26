import type { HostType, InterfaceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import "./IEqualityComparer";

declare const iStructuralEquatableInputBrand: unique symbol;
export interface IStructuralEquatableInput {
  readonly [iStructuralEquatableInputBrand]: true;
}

export interface IStructuralEquatable
  extends
    Microsoft.ClearScript.ClrInterfaceView<IStructuralEquatableInput>,
    IStructuralEquatableInput {
  equals(other: unknown | null, comparer: System.Collections.IEqualityComparer): boolean;
  getHashCode(comparer: System.Collections.IEqualityComparer): number;
}

declare global {
  namespace System.Collections {
    type IStructuralEquatableInput = import("./IStructuralEquatable").IStructuralEquatableInput;
  }
}

declare global {
  namespace System.Collections {
    type IStructuralEquatable = import("./IStructuralEquatable").IStructuralEquatable;
  }
}

export interface IStructuralEquatableHostType extends HostType<
  IStructuralEquatable,
  InterfaceTypeTrait
> {}

export {};
