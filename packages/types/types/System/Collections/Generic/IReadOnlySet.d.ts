import type {
  FamilyArgumentOmitted,
  HostType,
  InterfaceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../IEnumerable";
import "./IEnumerable";
import "./IReadOnlyCollection";

declare const iReadOnlySetArity1InputBrand: unique symbol;
export interface _IReadOnlySetArity1Input<T> {
  readonly [iReadOnlySetArity1InputBrand]: true;
}

export interface _IReadOnlySetArity1<T>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_IReadOnlySetArity1Input<T>>,
    _IReadOnlySetArity1Input<T> {
  contains(item: T | null): boolean;
  isProperSubsetOf(other: System.Collections.Generic.IEnumerable<T>): boolean;
  isProperSupersetOf(other: System.Collections.Generic.IEnumerable<T>): boolean;
  isSubsetOf(other: System.Collections.Generic.IEnumerable<T>): boolean;
  isSupersetOf(other: System.Collections.Generic.IEnumerable<T>): boolean;
  overlaps(other: System.Collections.Generic.IEnumerable<T>): boolean;
  setEquals(other: System.Collections.Generic.IEnumerable<T>): boolean;
}

export interface _IReadOnlySetArity1HostType<T> extends HostType<
  _IReadOnlySetArity1<T>,
  InterfaceTypeTrait
> {}

export type IReadOnlySetFamily<T1 = FamilyArgumentOmitted> = _IReadOnlySetArity1<T1>;

declare global {
  namespace System.Collections.Generic {
    type IReadOnlySet<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./IReadOnlySet").IReadOnlySetFamily<T1>;
  }
}

export type IReadOnlySetInputFamily<T1 = FamilyArgumentOmitted> = _IReadOnlySetArity1Input<T1>;
export type IReadOnlySetInput<T1> = _IReadOnlySetArity1Input<T1>;

declare global {
  namespace System.Collections.Generic {
    type IReadOnlySetInput<T1> = import("./IReadOnlySet").IReadOnlySetInput<T1>;
  }
}

export type IReadOnlySetHostType<T1> = _IReadOnlySetArity1HostType<T1>;

export {};
