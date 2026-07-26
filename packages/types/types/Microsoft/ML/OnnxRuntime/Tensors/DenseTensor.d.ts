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
import "../../../../System/Memory";
import type {
  FamilyArgumentOmitted,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../ClearScript/HostType";
import type { VoidResult } from "../../../ClearScript/VoidResult";
import "./Tensor";

declare const denseTensorArity1Brand: unique symbol;
export interface _DenseTensorArity1<T>
  extends
    Omit<
      Microsoft.ML.OnnxRuntime.Tensors.Tensor<T>,
      "buffer" | "clone" | "cloneEmpty" | "getValue" | "reshape" | "setValue"
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
  readonly [denseTensorArity1Brand]: true;
  clone(): Microsoft.ML.OnnxRuntime.Tensors.Tensor<T>;
  getValue(index: number | StrongNumeric<Int32Host>): T;
  readonly buffer: System.Memory<T>;
  setValue(index: number | StrongNumeric<Int32Host>, value: T): VoidResult;
}

export interface _DenseTensorArity1HostType<T> extends HostType<
  _DenseTensorArity1<T>,
  ReferenceTypeTrait
> {
  new (length: number | StrongNumeric<Int32Host>): _DenseTensorArity1<T>;
}

export type DenseTensorFamily<T1 = FamilyArgumentOmitted> = _DenseTensorArity1<T1>;

declare global {
  namespace Microsoft.ML.OnnxRuntime.Tensors {
    type DenseTensor<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./DenseTensor").DenseTensorFamily<T1>;
  }
}

export type DenseTensorHostType<T1> = _DenseTensorArity1HostType<T1>;

export {};
