import "../../../../System/Collections/Generic/ICollection";
import "../../../../System/Collections/Generic/IEnumerable";
import "../../../../System/Collections/Generic/IList";
import "../../../../System/Collections/Generic/IReadOnlyCollection";
import "../../../../System/Collections/Generic/IReadOnlyList";
import "../../../../System/Collections/ICollection";
import "../../../../System/Collections/IEnumerable";
import "../../../../System/Collections/IList";
import "../../../../System/Collections/IStructuralComparable";
import "../../../../System/Collections/IStructuralEquatable";
import type {
  FamilyArgumentOmitted,
  HostArray,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../ClearScript/HostType";
import type { VoidResult } from "../../../ClearScript/VoidResult";
import "./DenseTensor";
import "./TensorBase";

declare const tensorArity1Brand: unique symbol;
export interface _TensorArity1<T>
  extends
    Omit<
      Microsoft.ML.OnnxRuntime.Tensors.TensorBase,
      | "clone"
      | "cloneEmpty"
      | "dimensions"
      | "fill"
      | "getArrayString"
      | "getDiagonal"
      | "getTriangle"
      | "getUpperTriangle"
      | "getValue"
      | "isFixedSize"
      | "isReadOnly"
      | "isReversedStride"
      | "item"
      | "length"
      | "rank"
      | "reshape"
      | "setValue"
      | "strides"
      | "toDenseTensor"
    >,
    System.Collections.IListInput,
    System.Collections.ICollectionInput,
    System.Collections.IEnumerableInput,
    System.Collections.Generic.IListInput<T>,
    System.Collections.Generic.ICollectionInput<T>,
    System.Collections.Generic.IEnumerableInput<T>,
    System.Collections.Generic.IReadOnlyListInput<T>,
    System.Collections.Generic.IReadOnlyCollectionInput<T>,
    System.Collections.IStructuralComparableInput,
    System.Collections.IStructuralEquatableInput {
  readonly [tensorArity1Brand]: true;
  clone(): Microsoft.ML.OnnxRuntime.Tensors.Tensor;
  cloneEmpty(): Microsoft.ML.OnnxRuntime.Tensors.Tensor;
  cloneEmpty<TResult>(type1: HostType<TResult>): Microsoft.ML.OnnxRuntime.Tensors.Tensor<TResult>;
  fill(value: T): VoidResult;
  getArrayString(): string;
  getArrayString(includeWhitespace: boolean): string;
  getDiagonal(): Microsoft.ML.OnnxRuntime.Tensors.Tensor;
  getDiagonal(offset: number | StrongNumeric<Int32Host>): Microsoft.ML.OnnxRuntime.Tensors.Tensor;
  getTriangle(): Microsoft.ML.OnnxRuntime.Tensors.Tensor;
  getTriangle(offset: number | StrongNumeric<Int32Host>): Microsoft.ML.OnnxRuntime.Tensors.Tensor;
  getTriangle(
    offset: number | StrongNumeric<Int32Host>,
    upper: boolean
  ): Microsoft.ML.OnnxRuntime.Tensors.Tensor;
  getUpperTriangle(): Microsoft.ML.OnnxRuntime.Tensors.Tensor;
  getUpperTriangle(
    offset: number | StrongNumeric<Int32Host>
  ): Microsoft.ML.OnnxRuntime.Tensors.Tensor;
  getValue(index: number | StrongNumeric<Int32Host>): T;
  item: {
    (indices: HostArray<number | StrongNumeric<Int32Host>>): T;
    get(indices: HostArray<number | StrongNumeric<Int32Host>>): T;
    set(indices: HostArray<number | StrongNumeric<Int32Host>>, value: T): T;
    (indices: never): T;
    get(indices: never): T;
    set(indices: never, value: T): T;
  };
  readonly isFixedSize: boolean;
  readonly isReadOnly: boolean;
  readonly isReversedStride: boolean;
  readonly length: number;
  readonly rank: number;
  setValue(index: number | StrongNumeric<Int32Host>, value: T): VoidResult;
  toDenseTensor(): Microsoft.ML.OnnxRuntime.Tensors.DenseTensor<T>;
}

export interface _TensorArity1HostType<T> extends HostType<_TensorArity1<T>, ReferenceTypeTrait> {
  compare(
    left: Microsoft.ML.OnnxRuntime.Tensors.Tensor,
    right: Microsoft.ML.OnnxRuntime.Tensors.Tensor
  ): number;
  equals(
    left: Microsoft.ML.OnnxRuntime.Tensors.Tensor,
    right: Microsoft.ML.OnnxRuntime.Tensors.Tensor
  ): boolean;
}

export type TensorFamily<T1 = FamilyArgumentOmitted> = _TensorArity1<T1>;

declare global {
  namespace Microsoft.ML.OnnxRuntime.Tensors {
    type Tensor<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./Tensor").TensorFamily<T1>;
  }
}

export type TensorHostType<T1> = _TensorArity1HostType<T1>;

export {};
