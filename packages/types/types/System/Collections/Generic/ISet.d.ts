import type {
  FamilyArgumentOmitted,
  HostType,
  InterfaceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../IEnumerable";
import "./ICollection";
import "./IEnumerable";

declare const iSetArity1InputBrand: unique symbol;
export interface _ISetArity1Input<T> {
  readonly [iSetArity1InputBrand]: true;
}

export interface _ISetArity1<T>
  extends Microsoft.ClearScript.ClrInterfaceView<_ISetArity1Input<T>>, _ISetArity1Input<T> {
  add(item: T | null): boolean;
  exceptWith(other: System.Collections.Generic.IEnumerable<T>): VoidResult;
  intersectWith(other: System.Collections.Generic.IEnumerable<T>): VoidResult;
  isProperSubsetOf(other: System.Collections.Generic.IEnumerable<T>): boolean;
  isProperSupersetOf(other: System.Collections.Generic.IEnumerable<T>): boolean;
  isSubsetOf(other: System.Collections.Generic.IEnumerable<T>): boolean;
  isSupersetOf(other: System.Collections.Generic.IEnumerable<T>): boolean;
  overlaps(other: System.Collections.Generic.IEnumerable<T>): boolean;
  setEquals(other: System.Collections.Generic.IEnumerable<T>): boolean;
  symmetricExceptWith(other: System.Collections.Generic.IEnumerable<T>): VoidResult;
  unionWith(other: System.Collections.Generic.IEnumerable<T>): VoidResult;
}

export interface _ISetArity1HostType<T> extends HostType<_ISetArity1<T>, InterfaceTypeTrait> {}

export type ISetFamily<T1 = FamilyArgumentOmitted> = _ISetArity1<T1>;

declare global {
  namespace System.Collections.Generic {
    type ISet<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> = import("./ISet").ISetFamily<T1>;
  }
}

export type ISetInputFamily<T1 = FamilyArgumentOmitted> = _ISetArity1Input<T1>;
export type ISetInput<T1> = _ISetArity1Input<T1>;

declare global {
  namespace System.Collections.Generic {
    type ISetInput<T1> = import("./ISet").ISetInput<T1>;
  }
}

export type ISetHostType<T1> = _ISetArity1HostType<T1>;

export {};
