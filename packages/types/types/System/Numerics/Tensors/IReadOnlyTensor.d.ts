import type {
  FamilyArgumentOmitted,
  HostType,
  InterfaceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../Collections/Generic/IEnumerable";
import "../../Collections/IEnumerable";
import "../../IntPtr";

declare const iReadOnlyTensorArity2InputBrand: unique symbol;
export interface _IReadOnlyTensorArity2Input<TSelf, T> {
  readonly [iReadOnlyTensorArity2InputBrand]: true;
}

export interface _IReadOnlyTensorArity2<TSelf, T>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_IReadOnlyTensorArity2Input<TSelf, T>>,
    _IReadOnlyTensorArity2Input<TSelf, T> {
  item: {
    (indexes: never): T;
    get(indexes: never): T;
    (indexes: never): T;
    get(indexes: never): T;
    (ranges: never): TSelf;
    get(ranges: never): TSelf;
  };
  readonly flattenedLength: System.IntPtr;
  readonly isEmpty: boolean;
  readonly isPinned: boolean;
  readonly rank: number;
}

export interface _IReadOnlyTensorArity2HostType<TSelf, T> extends HostType<
  _IReadOnlyTensorArity2<TSelf, T>,
  InterfaceTypeTrait
> {
  readonly empty: TSelf;
}

export type IReadOnlyTensorFamily<
  T1 = FamilyArgumentOmitted,
  T2 = FamilyArgumentOmitted
> = _IReadOnlyTensorArity2<T1, T2>;

declare global {
  namespace System.Numerics.Tensors {
    type IReadOnlyTensor<
      T1 = Microsoft.ClearScript.FamilyArgumentOmitted,
      T2 = Microsoft.ClearScript.FamilyArgumentOmitted
    > = import("./IReadOnlyTensor").IReadOnlyTensorFamily<T1, T2>;
  }
}

export type IReadOnlyTensorInputFamily<
  T1 = FamilyArgumentOmitted,
  T2 = FamilyArgumentOmitted
> = _IReadOnlyTensorArity2Input<T1, T2>;
export type IReadOnlyTensorInput<T1, T2> = _IReadOnlyTensorArity2Input<T1, T2>;

declare global {
  namespace System.Numerics.Tensors {
    type IReadOnlyTensorInput<T1, T2> = import("./IReadOnlyTensor").IReadOnlyTensorInput<T1, T2>;
  }
}

export type IReadOnlyTensorHostType<T1, T2> = _IReadOnlyTensorArity2HostType<T1, T2>;

export {};
