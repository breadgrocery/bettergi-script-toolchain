import type {
  FamilyArgumentOmitted,
  HostType,
  InterfaceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../Collections/Generic/IEnumerable";
import "../../Collections/IEnumerable";
import "../../IntPtr";
import "./IReadOnlyTensor";

declare const iTensorArity2InputBrand: unique symbol;
export interface _ITensorArity2Input<TSelf, T> {
  readonly [iTensorArity2InputBrand]: true;
}

export interface _ITensorArity2<TSelf, T>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_ITensorArity2Input<TSelf, T>>,
    _ITensorArity2Input<TSelf, T> {
  clear(): VoidResult;
  fill(value: T | null): VoidResult;
  item: {
    (indexes: never): T;
    get(indexes: never): T;
    set(indexes: never, value: T): T;
    (indexes: never): T;
    get(indexes: never): T;
    set(indexes: never, value: T): T;
    (ranges: never): TSelf;
    get(ranges: never): TSelf;
    set(ranges: never, value: TSelf): TSelf;
  };
  readonly isReadOnly: boolean;
}

export interface _ITensorArity2HostType<TSelf, T> extends HostType<
  _ITensorArity2<TSelf, T>,
  InterfaceTypeTrait
> {}

export type ITensorFamily<T1 = FamilyArgumentOmitted, T2 = FamilyArgumentOmitted> = _ITensorArity2<
  T1,
  T2
>;

declare global {
  namespace System.Numerics.Tensors {
    type ITensor<
      T1 = Microsoft.ClearScript.FamilyArgumentOmitted,
      T2 = Microsoft.ClearScript.FamilyArgumentOmitted
    > = import("./ITensor").ITensorFamily<T1, T2>;
  }
}

export type ITensorInputFamily<
  T1 = FamilyArgumentOmitted,
  T2 = FamilyArgumentOmitted
> = _ITensorArity2Input<T1, T2>;
export type ITensorInput<T1, T2> = _ITensorArity2Input<T1, T2>;

declare global {
  namespace System.Numerics.Tensors {
    type ITensorInput<T1, T2> = import("./ITensor").ITensorInput<T1, T2>;
  }
}

export type ITensorHostType<T1, T2> = _ITensorArity2HostType<T1, T2>;

export {};
