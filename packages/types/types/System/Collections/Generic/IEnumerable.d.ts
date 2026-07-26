import type {
  FamilyArgumentOmitted,
  HostType,
  InterfaceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../IEnumerable";
import "./IEnumerator";

declare const iEnumerableArity1InputBrand: unique symbol;
export interface _IEnumerableArity1Input<T> {
  readonly [iEnumerableArity1InputBrand]: true;
}

export interface _IEnumerableArity1<T>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_IEnumerableArity1Input<T>>,
    _IEnumerableArity1Input<T> {
  getEnumerator(): System.Collections.Generic.IEnumerator<T>;
}

export interface _IEnumerableArity1HostType<T> extends HostType<
  _IEnumerableArity1<T>,
  InterfaceTypeTrait
> {}

export type IEnumerableFamily<T1 = FamilyArgumentOmitted> = _IEnumerableArity1<T1>;

declare global {
  namespace System.Collections.Generic {
    type IEnumerable<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./IEnumerable").IEnumerableFamily<T1>;
  }
}

export type IEnumerableInputFamily<T1 = FamilyArgumentOmitted> = _IEnumerableArity1Input<T1>;
export type IEnumerableInput<T1> = _IEnumerableArity1Input<T1>;

declare global {
  namespace System.Collections.Generic {
    type IEnumerableInput<T1> = import("./IEnumerable").IEnumerableInput<T1>;
  }
}

export type IEnumerableHostType<T1> = _IEnumerableArity1HostType<T1>;

export {};
