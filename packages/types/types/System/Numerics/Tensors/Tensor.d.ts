import type {
  ClrHostValue,
  FamilyArgumentOmitted,
  HostType,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../Collections/Generic/IEnumerable";
import "../../Collections/Generic/IEnumerator";
import "../../Collections/IEnumerable";
import "../../IntPtr";
import "./IReadOnlyTensor";
import "./ITensor";

declare const tensorArity1Brand: unique symbol;
export interface _TensorArity1<T>
  extends
    ClrHostValue,
    System.Collections.Generic.IEnumerableInput<T>,
    System.Collections.IEnumerableInput {
  readonly [tensorArity1Brand]: true;
  clear(): VoidResult;
  fill(value: T | null): VoidResult;
  getEnumerator(): System.Collections.Generic.IEnumerator<T>;
  getHashCode(): number;
  item: {
    (indexes: never): T;
    get(indexes: never): T;
    (indexes: never): T;
    get(indexes: never): T;
    (ranges: never): System.Numerics.Tensors.Tensor;
    get(ranges: never): System.Numerics.Tensors.Tensor;
    set(ranges: never, value: System.Numerics.Tensors.Tensor): System.Numerics.Tensors.Tensor;
    (filter: System.Numerics.Tensors.Tensor<boolean>): System.Numerics.Tensors.Tensor;
    get(filter: System.Numerics.Tensors.Tensor<boolean>): System.Numerics.Tensors.Tensor;
  };
  readonly flattenedLength: System.IntPtr;
  readonly isEmpty: boolean;
  readonly isPinned: boolean;
  readonly rank: number;
}

export interface _TensorArity1HostType<T> extends HostType<_TensorArity1<T>, ReferenceTypeTrait> {
  readonly empty: System.Numerics.Tensors.Tensor;
}

export type TensorFamily<T1 = FamilyArgumentOmitted> = _TensorArity1<T1>;

declare global {
  namespace System.Numerics.Tensors {
    type Tensor<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./Tensor").TensorFamily<T1>;
  }
}

export type TensorHostType<T1> = _TensorArity1HostType<T1>;

export {};
