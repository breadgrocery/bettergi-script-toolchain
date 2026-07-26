import type {
  FamilyArgumentOmitted,
  HostType,
  InterfaceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../IDisposable";
import "../IEnumerator";

declare const iEnumeratorArity1InputBrand: unique symbol;
export interface _IEnumeratorArity1Input<T> {
  readonly [iEnumeratorArity1InputBrand]: true;
}

export interface _IEnumeratorArity1<T>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_IEnumeratorArity1Input<T>>,
    _IEnumeratorArity1Input<T> {
  readonly current: T;
}

export interface _IEnumeratorArity1HostType<T> extends HostType<
  _IEnumeratorArity1<T>,
  InterfaceTypeTrait
> {}

export type IEnumeratorFamily<T1 = FamilyArgumentOmitted> = _IEnumeratorArity1<T1>;

declare global {
  namespace System.Collections.Generic {
    type IEnumerator<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./IEnumerator").IEnumeratorFamily<T1>;
  }
}

export type IEnumeratorInputFamily<T1 = FamilyArgumentOmitted> = _IEnumeratorArity1Input<T1>;
export type IEnumeratorInput<T1> = _IEnumeratorArity1Input<T1>;

declare global {
  namespace System.Collections.Generic {
    type IEnumeratorInput<T1> = import("./IEnumerator").IEnumeratorInput<T1>;
  }
}

export type IEnumeratorHostType<T1> = _IEnumeratorArity1HostType<T1>;

export {};
