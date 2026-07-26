import type { HostType, InterfaceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import "./IComparer";

declare const iStructuralComparableInputBrand: unique symbol;
export interface IStructuralComparableInput {
  readonly [iStructuralComparableInputBrand]: true;
}

export interface IStructuralComparable
  extends
    Microsoft.ClearScript.ClrInterfaceView<IStructuralComparableInput>,
    IStructuralComparableInput {
  compareTo(other: unknown | null, comparer: System.Collections.IComparer): number;
}

declare global {
  namespace System.Collections {
    type IStructuralComparableInput = import("./IStructuralComparable").IStructuralComparableInput;
  }
}

declare global {
  namespace System.Collections {
    type IStructuralComparable = import("./IStructuralComparable").IStructuralComparable;
  }
}

export interface IStructuralComparableHostType extends HostType<
  IStructuralComparable,
  InterfaceTypeTrait
> {}

export {};
