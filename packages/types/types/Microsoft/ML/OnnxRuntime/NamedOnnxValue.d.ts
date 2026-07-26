import "../../../System/Collections/Generic/IDictionary";
import "../../../System/Collections/Generic/IEnumerable";
import type { ClrHostValue, HostType, ReferenceTypeTrait } from "../../ClearScript/HostType";
import "./OnnxValueType";
import "./Tensors/Tensor";

declare const namedOnnxValueBrand: unique symbol;
export interface NamedOnnxValue extends ClrHostValue {
  readonly [namedOnnxValueBrand]: true;
  asDictionary<K, V>(
    type1: HostType<K>,
    type2: HostType<V>
  ): System.Collections.Generic.IDictionary<K, V>;
  asEnumerable<T>(type1: HostType<T>): System.Collections.Generic.IEnumerable<T>;
  asTensor<T>(type1: HostType<T>): Microsoft.ML.OnnxRuntime.Tensors.Tensor<T>;
  name: string;
  readonly valueType: Microsoft.ML.OnnxRuntime.OnnxValueType;
  value: unknown;
}

declare global {
  namespace Microsoft.ML.OnnxRuntime {
    type NamedOnnxValue = import("./NamedOnnxValue").NamedOnnxValue;
  }
}

export interface NamedOnnxValueHostType extends HostType<NamedOnnxValue, ReferenceTypeTrait> {
  createFromTensor<T>(
    type1: HostType<T>,
    name: string,
    value: Microsoft.ML.OnnxRuntime.Tensors.Tensor<T>
  ): Microsoft.ML.OnnxRuntime.NamedOnnxValue;
  createFromSequence<T>(
    type1: HostType<T>,
    name: string,
    value: System.Collections.Generic.IEnumerable<T>
  ): Microsoft.ML.OnnxRuntime.NamedOnnxValue;
  createFromMap<K, V>(
    type1: HostType<K>,
    type2: HostType<V>,
    name: string,
    value: System.Collections.Generic.IDictionary<K, V>
  ): Microsoft.ML.OnnxRuntime.NamedOnnxValue;
}

export {};
