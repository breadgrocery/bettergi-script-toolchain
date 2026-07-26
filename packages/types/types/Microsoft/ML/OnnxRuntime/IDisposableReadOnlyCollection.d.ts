import "../../../System/Collections/Generic/IEnumerable";
import "../../../System/Collections/Generic/IReadOnlyCollection";
import "../../../System/Collections/Generic/IReadOnlyList";
import "../../../System/Collections/IEnumerable";
import "../../../System/IDisposable";
import type {
  FamilyArgumentOmitted,
  HostType,
  InterfaceTypeTrait
} from "../../ClearScript/HostType";

declare const iDisposableReadOnlyCollectionArity1InputBrand: unique symbol;
export interface _IDisposableReadOnlyCollectionArity1Input<T> {
  readonly [iDisposableReadOnlyCollectionArity1InputBrand]: true;
}

export interface _IDisposableReadOnlyCollectionArity1<T>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_IDisposableReadOnlyCollectionArity1Input<T>>,
    _IDisposableReadOnlyCollectionArity1Input<T> {}

export interface _IDisposableReadOnlyCollectionArity1HostType<T> extends HostType<
  _IDisposableReadOnlyCollectionArity1<T>,
  InterfaceTypeTrait
> {}

export type IDisposableReadOnlyCollectionFamily<T1 = FamilyArgumentOmitted> =
  _IDisposableReadOnlyCollectionArity1<T1>;

declare global {
  namespace Microsoft.ML.OnnxRuntime {
    type IDisposableReadOnlyCollection<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./IDisposableReadOnlyCollection").IDisposableReadOnlyCollectionFamily<T1>;
  }
}

export type IDisposableReadOnlyCollectionInputFamily<T1 = FamilyArgumentOmitted> =
  _IDisposableReadOnlyCollectionArity1Input<T1>;
export type IDisposableReadOnlyCollectionInput<T1> = _IDisposableReadOnlyCollectionArity1Input<T1>;

declare global {
  namespace Microsoft.ML.OnnxRuntime {
    type IDisposableReadOnlyCollectionInput<T1> =
      import("./IDisposableReadOnlyCollection").IDisposableReadOnlyCollectionInput<T1>;
  }
}

export type IDisposableReadOnlyCollectionHostType<T1> =
  _IDisposableReadOnlyCollectionArity1HostType<T1>;

export {};
