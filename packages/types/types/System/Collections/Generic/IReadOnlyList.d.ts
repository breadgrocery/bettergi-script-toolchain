import type {
  FamilyArgumentOmitted,
  HostType,
  Int32Host,
  InterfaceTypeTrait,
  StrongNumeric
} from "../../../Microsoft/ClearScript/HostType";
import "../IEnumerable";
import "./IEnumerable";
import "./IReadOnlyCollection";

declare const iReadOnlyListArity1InputBrand: unique symbol;
export interface _IReadOnlyListArity1Input<T> {
  readonly [iReadOnlyListArity1InputBrand]: true;
}

export interface _IReadOnlyListArity1<T>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_IReadOnlyListArity1Input<T>>,
    _IReadOnlyListArity1Input<T> {
  [index: number]: T;
  item: {
    (index: number | StrongNumeric<Int32Host>): T;
    get(index: number | StrongNumeric<Int32Host>): T;
  };
}

export interface _IReadOnlyListArity1HostType<T> extends HostType<
  _IReadOnlyListArity1<T>,
  InterfaceTypeTrait
> {}

export type IReadOnlyListFamily<T1 = FamilyArgumentOmitted> = _IReadOnlyListArity1<T1>;

declare global {
  namespace System.Collections.Generic {
    type IReadOnlyList<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./IReadOnlyList").IReadOnlyListFamily<T1>;
  }
}

export type IReadOnlyListInputFamily<T1 = FamilyArgumentOmitted> = _IReadOnlyListArity1Input<T1>;
export type IReadOnlyListInput<T1> = _IReadOnlyListArity1Input<T1>;

declare global {
  namespace System.Collections.Generic {
    type IReadOnlyListInput<T1> = import("./IReadOnlyList").IReadOnlyListInput<T1>;
  }
}

export type IReadOnlyListHostType<T1> = _IReadOnlyListArity1HostType<T1>;

export {};
